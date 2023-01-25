import React, {useState} from 'react';


var Form1 = ({jumptoF2, handleInput}) => {
  const passToF2 = ()=>{
    jumptoF2();
  }
  return (
    <div>
      <div>
        <span>name</span>
        <input type='text' placeholder='Please input your name' name = "name" onChange={(e)=>handleInput(e)}></input>
      </div>
      <div>
        <span>email</span>
        <input type='text' placeholder='Please input your email' name = "email" onChange={(e)=>handleInput(e)}></input>
      </div>
      <div>
        <span>password</span>
        <input type='text' placeholder='Please input your password' name="password" onChange={(e)=>handleInput(e)}></input>
      </div>
      <button onClick = {passToF2}>next</button>
    </div>
  )
}

export default Form1;