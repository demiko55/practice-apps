import React from 'react';
import Glossary from './Glossary.jsx';

var GlossaryList = ({words, update,handleDelete})=>{
  console.log('words on GlossaryList', words);
  return(
    <div>
      {words.map((word, index)=>
      <Glossary word = {word} key = {index} update={update} handleDelete={handleDelete}/>
      )}
    </div>

  )
}

export default GlossaryList;