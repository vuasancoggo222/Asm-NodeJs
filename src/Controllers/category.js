import Category from "../Models/category"
import Product from "../Models/product"
export const create = async (req, res) => {
    try {
        const category = await new Category(req.body).save();
        res.json(category);
    } catch (error) {
        res.status(400).json({message: "Cannot create new category"});
    }
}
export const list = async (req, res) => {
    try {
        const category = await Category.find().exec()
        res.json(category);
    } catch (error) {
        res.status(400).json({message: "Cannot get list new category"});
    }
}
export const read = async (req, res) => {
    try {
        const category_id = await Category.findOne({_id: req.params.id}).exec();
        const product = await Product.find({category_id}).select("-category_id").exec();
        res.json({
            category_id,
            product
        })
    } catch (error) {
        res.status(400).json({
            message: "Cannot get product by category"
        })
    }
}
export const update = async (req, res) => {
    const condition = { _id : req.params.id }
    const update = req.body
    const options = { new: true }
    try {
        const category = await Category.findOneAndUpdate(condition, update, options).exec()
        res.json(category)
    }
    catch (error) {
        res.status(400).json({
            message: `Không thể cập nhật danh mục`
        })
    }
}
export const remove = async (req, res) => {
    const condition = { _id: req.params.id }
    try {
        const category = await Category.findOneAndDelete(condition)
        res.json(category)
    }
    catch (error) {
        res.status(400).json({
            message: "Không thể xoá danh mục"
        })
    }
}
