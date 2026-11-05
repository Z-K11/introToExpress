import express from 'express';
import path from 'node:path';
import { authorRouter } from '../routes/authorRouter.js';
import { bookRouter } from '../routes/bookRouter.js';
import { indexRouter } from '../routes/indexRouter.js';

// express object
const app = express();

//static files path
const assetsPaths = path.join(import.meta.dirname,'../public');
app.use(express.static(assetsPaths));

//set ejs as view engine
app.set('views',path.join(import.meta.dirname,'../views'));
app.set('view engine','ejs');

// use routers
app.use('/authors',authorRouter);
app.use('/books',bookRouter);
app.use('/',indexRouter);

//error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.statusCode).send(err);
});

const port = 8080;
app.listen(port,(error)=>
{
    if(error)
        throw error;
    console.log(`My first express app listening on port ${port}`);
});