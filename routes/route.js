import express from "express"
import {register,login,profile,logout} from "../controllers/usercontroller.js"
import {addtask,alltask,updatetask,deletetask} from "../controllers/taskcontroller.js"
import { isAuth } from "../middleware/isAuthenticated.js";
const router =express.Router();
// user routes
router.post("/register",register)
router.post("/login",login)
router.get("/me",isAuth,profile);
router.get("/logout",logout);
router.post("/newtask",isAuth,addtask);
router.get("/alltask",isAuth,alltask)
router.put("/:id",isAuth,updatetask)
router.delete("/:id",isAuth,deletetask);
export default router;