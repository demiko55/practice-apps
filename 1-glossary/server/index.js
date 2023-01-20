require("dotenv").config();
const express = require("express");
const path = require("path");

const app = express();

const db = require('./db.js');

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.json());

/****
 *
 *
 * Other routes here....
 *
 *
 */
app.get('/glossary', (req, res)=>{
  console.log('app get req content', req.query);
  db.get(req.query, (err, results)=>{
    if(err){
      console.error('get data from db err', err.message);
      res.statusCode(404).send();
      return;
    }
    res.json(results);
  })
});
app.post('/glossary', (req, res)=>{
  console.log('app post req body', req.query);
  db.save(req.query, (err, results)=>{
    if(err){
      console.error('post data to db err', err.message);
      return;
    }
    res.json(results);
  })

});
app.patch('/glossary', (req, res)=>{
  console.log('app patch req', req.body);
  let word = {word: req.body.word};
  let definition = {definition: req.body.definition};
  db.update(word, definition, (err, results)=>{
    if(err){
      console.error('update data to db err', err.message);
      res.statusCode(404).send();
      return;
    }
    res.json(results);
  })

});
app.delete('/glossary', (req, res)=>{
  console.log('app delete req', req.query);
  db.remove(req.query, (err, results)=>{
    if(err){
      console.error('delete data from db err', err.message);
      res.statusCode(404).send();
      return;
    }
    res.json(results);
  })


});

//process.env.PORT = 8001;

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
