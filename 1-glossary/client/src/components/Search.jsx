import React, {useState} from 'react';


var Search = ({handleSearch})=>{
  const [text, setText] = useState('');
  const handleText = (e)=>{
    setText(e.target.value);
  }
  const handleClick = ()=>{
    handleSearch(text);
  }

  return (
    <div>
      <input type = 'text' placeholder = 'search vocabulary...' onChange = {handleText}></input>
      <button onClick = {handleClick}>Search</button>

    </div>

  )
}

export default Search;