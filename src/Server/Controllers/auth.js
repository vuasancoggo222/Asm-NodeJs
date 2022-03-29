import Users from "../Models/user"
import jwt from "jsonwebtoken"
export const signin = async (req, res) => {
    const {email,password} = req.body
   try {
    const user = await Users.findOne({email}).exec();
    if(!user){
        res.status(404).json({
            message: "Cannot find user"
        })
    }
    if(!user.authenticate(password)){
        res.status(400).json({
            message: "Password is incorrect"
        })
    }
    const token = jwt.sign({_id: user._id},"ayaya",{expiresIn : "12h"})
    res.json({
        user: {
            token,
            _id: user._id,
            email: user.email,
            name: user.name
        }
    })
   } catch (error) {
       res.status(400).json({
           message : "Loggin failed,please try again later",
       })
   }
}
export const signup = async (req, res) => {
    const { email ,name, password} = req.body;
    try {
        const existUser = await Users.findOne({email}).exec();
        if(existUser){
            res.status(400).json({
                message: "Tài khoản đã tồn tại"
            })
        }
        const user = await new Users({email, name, password}).save();
        res.json({
            user: {
                _id: user._id,
                email: user.email,
                name: user.name
            }
        });
    } catch (error) {
 res.status(400).json({
     message : "Cannot signup account"
 })
    }
}
