import { Router } from "express";

const indexRouter = Router();

indexRouter.get('/',(req,res)=>
{
    res.end('ALl indexes');
})
indexRouter.get('/:indexId',(req,res)=>
{
    const {indexId} = req.params;
    res.send(`Index id:${indexId}`);
})
