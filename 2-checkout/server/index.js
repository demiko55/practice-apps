require("dotenv").config();
const express = require("express");
const path = require("path");
const sessionHandler = require("./middleware/session-handler");
const logger = require("./middleware/logger");

// Establishes connection to the database on server start
const db = require("./db");

const app = express();



// Adds `req.session_id` based on the incoming cookie value.
// Generates a new session if one does not exist.
app.use(sessionHandler);

// Logs the time, session_id, method, and url of incoming requests.
app.use(logger);

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
//after using app.use(sessionHandler), req.session_id will have a value.
//if req.get("Cookie") already have a s_id value, then we parse it, and set req.session_id,
//if not, we regenerate a new req.session_id and sent back as send back res.cookie("s_id", req.session_id)

app.get('/checkout', (req, res)=>{
  let queryStr = 'select * from user where uuid = "'+ req.uuid +'"';
  db.query(queryStr, (err, results)=>{
    if(err){
      console.error('query db error', err.message);
      res.status(404).send();
      return;
    }
    res.json(results);
  })
})

app.post('/checkout', (req, res)=>{
  console.log('req body', req.body);
  console.log('req query', req.query);
  let queryStr = "insert into user (uuid, name, email, password, address, phone, cardNumber, expiry, cvv, billzipcode) values (?,?,?,?,?,?,?,?,?,?)";
  let params = [req.session_id, req.body.name, req.body.email, req.body.password, req.body.address, req.body.phone, req.body.cardNumber, req.body.expiry, req.body.cvv, req.body.billzipcode];
  db.query(queryStr, params, (err, results)=>{
    if(err){
      console.error('insert db error', err.message);
      res.status(404).send();
      return;
    }
    res.json(results);
  })

})

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
