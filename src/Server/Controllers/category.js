import Category from "../Models/category"
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