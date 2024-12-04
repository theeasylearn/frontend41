import React from 'react';
import ReactDOM from 'react-dom/client';
// import 'bootstrap/dist/css/bootstrap.min.css';
// 
const root = ReactDOM.createRoot(document.getElementById('root'));
//create user defined function 
var count = 1;
function Player(Item) {
  let icon;
  if (Item.type === 'Batsman')
    icon = 'batsman.png';
  else if (Item.type === 'Bowler')
    icon = 'ballwer.png';
  else
    icon = 'allrounder.png';
  let temp = (<tr>
    <td width='50px'>{count++}</td>
    <td width='350px'>{Item.name}</td>
    <td width='50px'><img src={icon} className='img-fluid' /></td>
    <td width='150px'>{Item.runs}</td>
    <td width='150px'>{Item.balls}</td>
    <td width='150px'>{(Item.runs / Item.balls).toFixed(2) * 100}</td>
  </tr>);
  return temp;
}
function ScoreBoard() {
  const rohitSharma = {
    id: 1,
    name: "Rohit Sharma",
    type: "Batsman",
    runs: 85,
    balls: 65

  };

  const viratKohli = {
    id: 2,
    name: "Virat Kohli",
    type: "Batsman",
    runs: 75,
    balls: 50

  };

  const shubmanGill = {
    id: 3,
    name: "Shubman Gill",
    type: "Batsman",
    runs: 45,
    balls: 35
  };

  const klRahul = {
    id: 4,
    name: "KL Rahul",
    type: "Wicketkeeper-Batsman",
    runs: 65,
    balls: 55
  };

  const hardikPandya = {
    id: 5,
    name: "Hardik Pandya",
    type: "All-Rounder",
    runs: 40,
    balls: 30
  };

  const ravindraJadeja = {
    id: 6,
    name: "Ravindra Jadeja",
    type: "All-Rounder",
    runs: 25,
    balls: 20
  };

  const shardulThakur = {
    id: 7,
    name: "Shardul Thakur",
    type: "Bowler",
    runs: 10,
    balls: 8
  };

  const jaspritBumrah = {
    id: 8,
    name: "Jasprit Bumrah",
    type: "Bowler",
    runs: 5,
    balls: 3
  };

  const mohammedShami = {
    id: 9,
    name: "Mohammed Shami",
    type: "Bowler",
    runs: 7,
    balls: 5
  };

  const axarPatel = {
    id: 10,
    name: "Axar Patel",
    type: "All-Rounder",
    runs: 30,
    balls: 25
  };

  const yuzvendraChahal = {
    id: 11,
    name: "Yuzvendra Chahal",
    type: "Bowler",
    runs: 0,
    balls: 2
  };

  var page = (<div className="container">
    <div className="row">
      <div className="col-12">
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Type</th>
              <th>Run</th>
              <th>Ball</th>
              <th>StrikeRate</th>
            </tr>
          </thead>
          <tbody>
            {Player(rohitSharma)}
            {Player(viratKohli)}
            {Player(klRahul)}
            {Player(shubmanGill)}
            {Player(hardikPandya)}
            {Player(ravindraJadeja)}
            {Player(jaspritBumrah)}
            {Player(shardulThakur)}
            {Player(yuzvendraChahal)}
            {Player(axarPatel)}
            {Player(mohammedShami)}
          </tbody>
        </table>

      </div>
    </div>
  </div>);
  return page;
}
root.render(ScoreBoard());

