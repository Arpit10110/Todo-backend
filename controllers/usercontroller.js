import bcrypt from "bcrypt"
import {User} from "../model/user.js"
import {sendcookies} from "../utils/cookies.js"
export const register= async(req,res)=>{
    const {name,email,password} = req.body;
    let user =await User.findOne({email})
    if(user)
    {
        return res.status(404).json({
            success: false,
            message: "User already exist"
        });
    }else{
        const hassedpassword = await bcrypt.hash(password,10)
       user = await User.create({
            name: name,
            email: email,
            password: hassedpassword
        })
        sendcookies(user,res,"registered successfully");
    }
}
export const login=async(req,res)=>{
   const {email,password}=req.body;
   let user= await User.findOne({email}).select("+password");
   if(!user)
   {
     return   res.json({
            success: false,
            message: "User not found"
        })
   }
   const ismatch= await bcrypt.compare(password,user.password);
   console.log(ismatch)
   if(! ismatch)
    return  res.json({
        success: false,
        message: "password is wrong"
    })
    sendcookies(user,res,`welcome back ${user.name}`);
}

export const profile= async(req,res)=>{
        res.json({
            success: true,
            user:req.user
        })
}

export const logout = async (req, res) => {
    res.cookie("token", "", {
        expires: new Date(Date.now()), // This will expire the cookie immediately
        httpOnly: true, // More secure
        sameSite: 'Strict' // Prevent CSRF
    }).json({
        success: true,
        message: "You are now logged out"
    });
};
