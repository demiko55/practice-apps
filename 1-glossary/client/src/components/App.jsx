import React, { useState, useEffect } from 'react';
import GlossaryList from './GlossaryList.jsx';
import Add from './Add.jsx';
import Search from './Search.jsx';
import axios from 'axios';


var App = () => {
  const [words, setWords] = useState([]);

  let url = 'http://localhost:8001/glossary';

  const getGlossary = () => {
    axios.get(url)
      .then((results) => {
        console.log('get words from server', results.data);
        setWords(results.data);
      })
      .catch((err) => {
        console.error('get vocabulary err ', err.message);
      })
  }
  useEffect(()=>{
    getGlossary();
  },[]);

  const update = (word, definition) => {
    console.log('word', word);
    console.log('definition', definition);
    axios.patch(url, { word: word, definition: definition })
      .then(() => {
        getGlossary();
      })
      .catch((err) => {
        console.err('update vocabulary err ', err.message);
      })
  }
  const handleSearch = (textValue) => {
    console.log('search text', textValue);
    axios.get(url, { params: { word: `${textValue}` } })
      .then((results) => {
        setWords(results.data);
      })
      .catch((err) => {
        console.err('search vocabulary err ', err.message);
      });
  }

  const handleAdd = (word, definition) => {
    console.log('add word', word);
    console.log('add definition', definition);
    axios({
      method: 'post',
      url: url,
      params: {
        word: word,
        definition: definition
      }
    })
    .then(() => {
      console.log('after add , it reget the whole data??');
      getGlossary();
    })
    .catch((err) => {
        if (err) {
          console.log('add vocabulary err ', err.message);
        }
      })
  }

  const handleDelete = (word) => {
    axios.delete(url, {params:{word: word}})
      .then(() => {
        //为什么没执行？？
        getGlossary();
      })
      .catch((err) => {
        if (err) {
          console.error('delete vocabulary err ', err.message);
        }
      });
  }
  return (
    <div>
      <Add handleAdd={handleAdd} />
      <Search handleSearch={handleSearch} />
      <GlossaryList words={words} update={update} handleDelete={handleDelete}/>
    </div>
  )
}

export default App;