import React from 'react';

var Form3 = ({submit, handleInput}) => {
  const pass = ()=>{
    submit();
  }
  return (
    <div>
      <div>
        <span>Card Number</span>
        <input tyep='text' placeholder='please input your card number' name = 'cardNumber' onChange={(e)=>handleInput(e)}></input>
      </div>
      <div>
        <span>Expires</span>
        <input tyep='date' name = 'expiry' onChange={(e)=>handleInput(e)}></input>
      </div>
      <div>
        <span>CVV</span>
        <input tyep='text' name = 'cvv' onChange={(e)=>handleInput(e)}></input>
      </div>
      <div>
        <span>Billing zip code</span>
        <input tyep='text' name = 'billzipcode' onChange={(e)=>handleInput(e)}></input>
      </div>
      <button onClick={pass}>Purchase</button>
    </div>
  )
}

export default Form3;