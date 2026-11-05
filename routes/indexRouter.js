import { Router } from "express";

const links =[
    {href:'/',text:'home'},
    {href:'/authors',text:'authors'},
    {href:'/books',text:'books'},
]
const users = ['Hassaan','Rabiya','Maryam'];

const indexRouter = Router();

indexRouter.get('/',(req,res)=>
{
   
    res.render('index',{links:links,users:users});
})
indexRouter.get('/:indexId',(req,res)=>
{
    const {indexId} = req.params;
    res.send(`Index id:${indexId}`);
})
export {indexRouter};