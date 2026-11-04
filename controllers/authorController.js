import { getAuthorsById as dbGetAuthorsById } from "../db.js";

async function getAuthorsById(req,res)
{
    const {authorId} = req.params;
    try
    {
    const author = await dbGetAuthorsById(Number(authorId));
     if(!author)
    {
        res.status(404).send(`Author not found for ${authorId}`);
        return;
    }
    res.send(`Author Name:${author.name}`)
    }
    catch(err)
    {
        console.log(`Error in retrieving author from db error msg : ${err}`);
        res.status(500).send(`Internal Server Error`);
    }
   
}
export {getAuthorsById};