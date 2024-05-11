import jwt from "jsonwebtoken"
import { User } from "../model/user.js";
export const isAuth = async(req,res,next)=>{
    const {token} = req.cookies;
    if(!token){
        res.json({
            success: false,
            message: "Login First"
        })
    }
    else{
        const decoded = jwt.verify(token,process.env.jwt_secret);
        req.user= await User.findById(decoded._id);
        next();
    }
}