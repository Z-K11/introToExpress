import { Router } from "express";

const links =[
    {href:'/',text:'home'},
    {href:'/authors',text:'authors'},
    {href:'/books',text:'books'},
]

const indexRouter = Router();

indexRouter.get('/',(req,res)=>
{
    res.locals.links = links;
    res.render('index',{message:'EJS Rocks'});
})
indexRouter.get('/:indexId',(req,res)=>
{
    const {indexId} = req.params;
    res.send(`Index id:${indexId}`);
})
export {indexRouter};