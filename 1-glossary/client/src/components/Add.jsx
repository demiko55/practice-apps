import React, {useState} from 'react';

var Add = ({handleAdd})=>{
  const [word, setWord] = useState('');
  const [definition, setDefinition] = useState('');

  const passWord = (e)=>{
    e.preventDefault();
    handleAdd(word, definition);
  }

  return (
    <form>
      <input type = 'text' placeholder = 'word' onChange = {(e)=>setWord(e.target.value)}></input>
      <input type = 'text' placeholder = 'definition' onChange = {(e)=>setDefinition(e.target.value)}></input>
      <button onClick = {passWord}>Add</button>
    </form>

  )
}

export default Add;