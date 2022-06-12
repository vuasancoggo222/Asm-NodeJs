import User from "../Models/user"
export const userById = async (req, res, next, id) => {
    try {
        const user = await User.findById(id).exec();
        if(!user){
            res.status(400).json({
                message: "Không tìm thấy user"
            })
        }
        req.profile = user;
        req.profile.password = undefined;
        next();
    } catch (error) {
        console.log(error);
    }
}
export const remove = async (req, res) => {
    const condition = { _id: req.params.id }
    try {
        const user = await User.findOneAndDelete(condition)
        res.json(user)
    }
    catch (error) {
        res.status(400).json({
            message: "Không thể xoá users"
        })
    }
}
