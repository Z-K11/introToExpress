import { Router } from "express";
import { links } from "../data/links.js";

const users = ['Hassaan','Rabiya','Maryam'];

const indexRouter = Router();

indexRouter.get('/',(req,res)=>
{
    res.locals.links=links;
    res.render('index',{users:users});
})
indexRouter.get('/:indexId',(req,res)=>
{
    const {indexId} = req.params;
    res.send(`Index id:${indexId}`);
})
export {indexRouter};