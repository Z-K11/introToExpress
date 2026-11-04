import { getAuthorsById as dbGetAuthorsById } from "../db.js";

async function getAuthorsById(req,res)
{
    const {authorID} = req.params;
    try
    {
    const author = await dbGetAuthorsById(Number(authorID));
     if(!author)
    {
        res.status(404).send(`Author not found for ${authorID}`);
        return;
    }
    res.send(`Author Name:${author}`)
    }
    catch(err)
    {
        console.log(`Error in retrieving author from db error msg : ${err}`);
        res.status(500).send(`Internal Server Error`);
    }
   


}