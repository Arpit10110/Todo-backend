import jwt from "jsonwebtoken";
export const sendcookies = (user, res, message) => {
    const token = jwt.sign({ _id: user._id }, process.env.jwt_secret);
    res.cookie("token", token, {
        httpOnly: true,
        maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days in milliseconds
        sameSite: process.env.Node_ENV == "Development" ? "lax" : "none",
        secure: process.env.Node_ENV == "Development" ? false : true
    }).json({
        success: true,
        message: message
    });
};
