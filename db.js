const authors =[
    {id:1,name:'Hassaan'},
    {id:2,name:'Rabiya'},
    {id:3,name:'Maryam'},
];
async function getAuthorsById(authordId)
{
    return authors.find(author=>author.id === authordId);
}

export {getAuthorsById};