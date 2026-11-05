import { Router } from "express";

const indexRouter = Router();

indexRouter.get('/',(req,res)=>
{
    res.render('index',{message:'EJS Rocks'});
})
indexRouter.get('/:indexId',(req,res)=>
{
    const {indexId} = req.params;
    res.send(`Index id:${indexId}`);
})
export {indexRouter};