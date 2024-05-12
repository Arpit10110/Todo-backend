import jwt from "jsonwebtoken"
export const sendcookies=(user,res,message)=>{
    const token= jwt.sign({_id: user._id},process.env.jwt_secret);
    res.cookie("token",token,{
        httpOnly: true,
        maxAge:15*60*1000,
        sameSite:process.env.Node_ENV== "Development"? "lax":"none",
        secure:process.env.Node_ENV== "Development"? false: true
    }).json({
        success: true,
        message: message
    })
}