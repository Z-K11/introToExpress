const authors =[
    {id:1,name:'Hassaan'},
    {id:2,name:'Rabiya'},
    {id:3,name:'Maryam'},
];
async function getAuthorsById(authorId)
{
    return authors.find(author=>author.id === authorId);
}

export {getAuthorsById};