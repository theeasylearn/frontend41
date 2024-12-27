import React from 'react';
import ReactDOM from 'react-dom/client';
var olStyle = {
  backgroundColor: 'aliceblue',
  border: '1px solid black'
}
var liStyle = {
  backgroundColor: 'navy',
  color:'white',
  fontSize: 'x-large',
  marginBottom: '10px'
}
function Player(props) {
  const {name,dob,matches,runs} = props;
  return (<li style={liStyle}>
    <strong>Player Name:</strong> {name}<br />
    <strong>Date of Birth:</strong> {dob}<br />
    <strong>One Day Matches:</strong> {matches}<br />
    <strong>Runs:</strong> {runs}
  </li>);
}
function Team() {
  return (<>
    <h1>Indian Cricket Team</h1>
    <hr />
    <ol style={olStyle}>
      <Player name="Virat Kohli" dob="5 November 1988" matches="275" runs="12,898" />
      <Player name="Rohit Sharma" dob="30 April 1987" matches="243" runs="9,855" />
      <Player name="Shikhar Dhawan" dob="5 December 1985" matches="151" runs="6,284" />
      <Player name="MS Dhoni" dob="7 July 1981" matches="350" runs="10,773" />
      <Player name="Hardik Pandya" dob="11 October 1993" matches="70" runs="1,386" />
      <Player name="Ravindra Jadeja" dob="6 December 1988" matches="171" runs="2,447" />
      <Player name="Jasprit Bumrah" dob="6 December 1993" matches="72" runs="19" />
      <Player name="Yuzvendra Chahal" dob="23 July 1990" matches="72" runs="42" />
      <Player name="Mohammed Shami" dob="3 September 1990" matches="93" runs="161" />
      <Player name="KL Rahul" dob="18 April 1992" matches="62" runs="2,315" />
      <Player name="Suryakumar Yadav" dob="14 September 1990" matches="26" runs="511" />


    </ol>
  </>)
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Team />);