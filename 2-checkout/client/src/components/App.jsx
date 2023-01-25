import React, { useState } from 'react';
import Form1 from './Form1.jsx';
import Form2 from './Form2.jsx';
import Form3 from './Form3.jsx';
import axios from 'axios';


var App = () => {
  const [state, setState] = useState('');
  const [info, setInfo] = useState({});

  const handleInput = (e) => {
    let value = e.target.value;
    setInfo({ ...info, [e.target.name]: value });
  }

  const jumptoF1 = () => {
    setState('form1');
  }
  const jumptoF2 = () => {
    setState('form2');
  }
  const jumptoF3 = () => {
    setState('form3');
  }
  const handleAddress = () => {
    //info.address = info.address1 + ' ' + (info.address2 === undefined ? '' : info.address2) + ',' + info.city + ',' + info.state + ',' + info.zipcode;
    //will be mess if user not input in order
    info.address = '';
    for(let key of Object.keys(info)){
      console.log('key in info', key);
      if(['address1','address2', 'city', 'state','zipcode'].includes(key)){
        info.address += info[key]+',';
        delete info[key];
      }
    }
    info.address = info.address.substring(0, info.address.length - 1);
    console.log('handle after info', info);
  }
  const submit = () => {
    console.log('info', info);
    //handle address
    handleAddress();
    let url = 'http://localhost:3000/checkout';
    axios.post(url, info)
      .then(() => {
        setState('home');
      })
      .catch(
        (err) => {
          console.log('post data to server error', err.message);
        }
      )
  }
  return (
    <div>
      {state === '' && <button onClick={jumptoF1}>checkout</button>}
      {state === 'form1' && <Form1 jumptoF2={jumptoF2} handleInput={handleInput} />}
      {state === 'form2' && <Form2 jumptoF3={jumptoF3} handleInput={handleInput} />}
      {state === 'form3' && <Form3 submit={submit} handleInput={handleInput} />}
      {state === 'home' && <p>Welcome to home page!</p>}
    </div>
  )
}


export default App;