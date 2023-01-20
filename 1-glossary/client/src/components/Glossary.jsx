import React, {useState} from 'react';



var Glossary = ({word, update, handleDelete})=>{
  const passText = ()=>{
    var text = prompt('chaning the definition', word.definition);
    update(word.word, text);
  }
  const deleteWord = ()=>{
    handleDelete(word.word);
  }
  //下面这种方式可以直接编辑文本，但浏览器总报警告。
  //<div contentEditable = 'true' onInput = {passText}>{word.definition}</div>
  return (
    <div>
      <span>{word.word}</span>
      <div onClick = {passText}>{word.definition}</div>
      <button onClick={deleteWord}>delete</button>
    </div>

  )
}
export default Glossary;