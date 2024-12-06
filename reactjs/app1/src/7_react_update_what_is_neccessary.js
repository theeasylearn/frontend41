import React from 'react';
import ReactDOM from 'react-dom/client';
import './clock.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
function showDataTime() {
  var now = new Date(); 
  var hours = now.getHours();
  if(hours>12)
      hours = hours - 12;
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();
  var output = (<div class="clock-container">
    <div class="clock">
      <span id="hours">{hours}</span>:<span id="minutes">{minutes}</span>:<span id="seconds">{seconds}</span>
    </div>
    <div class="date" id="date">
      DD/MM/YYYY
    </div>
  </div>);
  root.render(output);
}
setInterval(showDataTime,1000);