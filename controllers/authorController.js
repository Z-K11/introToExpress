import { getAuthorsById as dbGetAuthorsById } from "../db.js";
import customError from "../errors/err.js";

async function getAuthorsById(req,res)
{
    const {authorId} = req.params;
    
    const author = await dbGetAuthorsById(Number(authorId));
     if(!author)
    {
        throw new customError(404,'Author not found','NotFoundError');
    }
    res.send(`Author Name:${author.name}`)
   
}
export {getAuthorsById};