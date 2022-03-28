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
        const category = await Category.findOne({_id: req.params.id}).exec();
        const product = await Product.find({category}).select("-category").exec();
        res.json({
            category,
            product
        })
    } catch (error) {
        res.status(400).json({
            message: "Cannot get product by category"
        })
    }
}
