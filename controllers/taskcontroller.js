    import {Task} from "../model/task.js"
    export const addtask = async (req,res)=>{
        const {title,description} = req.body;
        await Task.create({
            title:title,
            description: description,
            user : req.user
        })
        res.json({
            success: true,
            message: "Task created successfully"
        })
    }

    export const alltask = async (req,res)=>{
        const userid= req.user._id;
        const allTask = await Task.find({user:userid})

        res.json({
            success: true,
            allTask
        })
    }

    export const updatetask =async(req,res)=>{
        const {id}= req.params;
        const task =await Task.findById(id);
        if(!task)
        {
            res.json({
                success: false,
                message: "Task not found"
            })
        }
        task.isCompleted = ! task.isCompleted;
        await task.save();
        res.json({
            success: true,
            message: "Task updated successfully"
        })
    }
    export const deletetask =async(req,res)=>{
        try {
            const {id} = req.params;
        const task = await Task.findById(id);
        if(!task)
        {
            res.json({
                success: false,
                message: "Task not found"
            })
        }
        await task.deleteOne();
        res.json({
            success: true,
            message: "Task deleted successfully"
        })
        } catch (error) {
            res.json({
                success:false,
                message:error
            })
        }
        
    }