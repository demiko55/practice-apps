const mongoose = require("mongoose");

// 1. Use mongoose to establish a connection to MongoDB
// 2. Set up any schema and models needed by the app
// 3. Export the models
// 4. Import the models into any modules that need them

mongoose.connect('mongodb://localhost/glossary');

const glossarySchema = new mongoose.Schema({
  word: {type: String, unique: true},
  definition: {type: String}
})

const Glossary = mongoose.model('Glossary', glossarySchema);

let save = (data,callback)=>{
  //data is an object
  Glossary.create(data, (err, results)=>{
    if(err){
      callback(err);
      return;
    }
    callback(null, results);
  });
}

let remove = (word, callback)=>{
  //word
  Glossary.deleteOne(word, (err, results)=>{
    if(err){
      callback(err);
      return;
    }
    callback(null, results);

  })
}
let update = (conditions,update,callback)=>{
  Glossary.findOneAndUpdate(conditions, update, (err, results)=>{
    if(err){
      callback(err);
      return;
    }
    callback(null, results);
  })
}
let get = (conditions,callback)=>{
  Glossary.find(conditions, (err, data)=>{
    if(err){
      callback(err);
      return;
    }
    console.log('db find data', data);
    callback(null, data);
  })
}


module.exports.save = save;
module.exports.remove = remove;
module.exports.update = update;
module.exports.get = get;
