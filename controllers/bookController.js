
import { getBookById as dbGetBookById } from "../db.js";
import customError from "../errors/err.js";

async function getBookById(req,res)
{
    const {bookId} = req.params;

    const book = await dbGetBookById(Number(bookId));
    if(!book)
        throw new customError(404,'no book for provided id','NotFoundError');
    res.send(`Book name:${book.name}`);
}
export {getBookById};