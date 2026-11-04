import { Router } from "express";
import { getAuthorsById } from "../controllers/authorController.js";
const authorRouter = Router();

authorRouter.get('/',(req,res)=>
{
    res.send('All authors');
})
authorRouter.get('/:authorId',getAuthorsById)

export {authorRouter};