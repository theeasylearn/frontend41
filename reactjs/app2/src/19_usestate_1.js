import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
function MalaCounter() {
  //create state variable
  var [count, setCount] = useState(0);
  var [mala, setMala] = useState(0);
  var doProcess = function () {
    setCount(count+1);
    if(count === 108)
    {
        setMala(mala + 1);
        setCount(1);
    }  
  }
  return (<div className='container'>
    <div className='row'>
      <div className='col-12'>
        <h1>Mala counter {mala}</h1>
        <button type='button' className='btn btn-primary'
          onClick={doProcess}>{count}</button>
      </div>
    </div>
  </div>)
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MalaCounter />);
