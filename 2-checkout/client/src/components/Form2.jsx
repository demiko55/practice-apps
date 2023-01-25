import React from 'react';

var Form2 = ({ jumptoF3, handleInput }) => {
  const passToF3 = ()=>{
    jumptoF3();
  }

  return (
    <div>
      <div>
        <span> Address line1</span>
        <input type='text' placeholder='street address, P.O.box, company name,c/o ' name = 'address1' onChange = {(e)=>handleInput(e)}></input>
      </div>
      <div>
        <span> Address line2</span>
        <input type='text' placeholder='Apartment, suits, building, floor, etc.' name = 'address2' onChange = {(e)=>handleInput(e)}></input>
      </div>
      <div>
        <span> City</span>
        <input type='text' name = 'city' onChange = {(e)=>handleInput(e)}></input>
      </div>
      <div>
        <span> State</span>
        <input type='text' name = 'state' onChange = {(e)=>handleInput(e)}></input>
      </div>
      <div>
        <span> Zip Code</span>
        <input type='text' name = 'zipcode' onChange = {(e)=>handleInput(e)}></input>
      </div>
      <div>
        <span> Phone Number</span>
        <input type='text' name = "phone" onChange = {(e)=>handleInput(e)}></input>
      </div>
      <button onClick = {passToF3} >next</button>
    </div>

  )
}

export default Form2;