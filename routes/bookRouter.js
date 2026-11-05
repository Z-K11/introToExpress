import { Router } from "express";
import { getBookById } from "../controllers/bookController.js";
import { links } from "../data/links.js";
import { books } from "../data/books.js";
const bookRouter = Router();

bookRouter.get('/',(req,res)=>
{
    res.render('./books/books',{links:links,data:books})
});
bookRouter.get('/:bookId',getBookById);

export {bookRouter};