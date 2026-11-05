const authors =[
    {id:1,name:'Hassaan'},
    {id:2,name:'Rabiya'},
    {id:3,name:'Maryam'},
];
async function getAuthorsById(authorId)
{
    return authors.find(author=>author.id === authorId);
}

const books = [
    {id:1,name:'The Jungle Book'},
    {id:2,name:'Harry Potter'},
    {id:3,name:'The 4th Wing'},
];
async function getBookById(bookId)
{
    return books.find(book=> book.id === bookId);
}
export {getAuthorsById,getBookById};
