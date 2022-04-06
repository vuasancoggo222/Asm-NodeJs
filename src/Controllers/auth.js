import Users from "../Models/user"
import jwt from "jsonwebtoken"
export const signin = async (req, res) => {
    const {email,password} = req.body
   try {
    const user = await Users.findOne({email}).exec();
    if(!user){
        return res.status(400).json({
            message: "Cannot find user"
        })
    }
    if(!user.authenticate(password)){
        return res.status(400).json({
            message: "Password is incorrect"
        })
    }
    const token = jwt.sign({_id: user._id},"ayaya",{expiresIn : "12h"})
    return res.json({
        user: {
            token,
            _id: user._id,
            email: user.email,
            name: user.name,
            role : user.role
        }
    })
   } catch (error) {
      return  res.status(400).json({
           message : "Loggin failed,please try again later",
       })
   }
}
export const signup = async (req, res) => {
    const { email ,name, password} = req.body;
    try {
        const existUser = await Users.findOne({email}).exec();
        if(existUser){
            return res.status(400).json({
                message: "Tài khoản đã tồn tại"
            })
        }
        const user = await new Users({email, name, password}).save();
       return res.json({
            user: {
                _id: user._id,
                email: user.email,
                name: user.name
            }
        });
    } catch (error) {
 return res.status(400).json({
     message : "Cannot signup account"
 })
    }
}
