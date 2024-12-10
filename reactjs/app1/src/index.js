import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.getElementById('root'));
class DinningTable extends React.Component {
  constructor(props) {
    super(props);
    //create properties
    this.tableno = props.tableno;
    this.name = props.name;
    this.thaliPrice = 100;
    this.rotiPrice = 10;
    this.papadPrice = 12;
    this.chasPrice = 5;
    this.sweetPrice = 27;

    //create state object
    this.state = {
      thali:0,
      roti:0,
      papad:0,
      chas:0,
      sweet:0,
      total:0
    };
  }
  //arrow function
  updateThali = () => {
    // this.state.thali = this.state.thali + 1;
    this.setState({
      thali: this.state.thali + 1,
    });
  }
  updateRoti = () => {
    this.setState({
      roti:this.state.roti + 1
    });
  }
  shouldComponentUpdate(nextProperty,nextState)
  {
      if(nextState.thali >=7)
      {
        this.setState({
          thali:6
        });
        return false;
      }
      else 
        return true;
  }
  componentDidUpdate(previousProperty,previousState)
  {
      //update total 
      if(previousState.roti !== this.state.roti || previousState.thali !== this.state.thali)
      {
        this.setState({
          total: (this.state.thali * this.thaliPrice) + (this.state.roti * this.rotiPrice) +
          (this.state.sweet * this.sweetPrice) + (this.state.chas * this.chasPrice) + (this.state.papad * this.papadPrice)
      });
      }
  }
  render() {
    return (<div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-2">
      <div className="card shadow">
        <div className="card-header d-flex justify-content-between text-bg-danger">
          <div><span className="badge text-bg-light fs-6">{this.tableno}</span>{this.name}</div>
          <div><span className="badge text-bg-warning fs-6">15</span> Minutes</div>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-12 mb-2">
              <button type="button" className="d-block w-100 btn btn-primary"
              onClick={this.updateThali}>{this.state.thali} Thali</button>
            </div>
            <div className="col-6 mb-2">
              <button onClick={this.updateRoti} type="button" className="btn btn-success d-block w-100">{this.state.roti} Roti</button>
            </div>
            <div className="col-6 mb-2">
              <button type="button" className="btn btn-secondary d-block w-100">{this.state.chas} Chas</button>
            </div>
            <div className="col-6 mb-2">
              <button type="button" className="btn btn-warning d-block w-100">{this.state.papad} Papad</button>
            </div>
            <div className="col-6 mb-2">
              <button type="button" className="btn btn-info d-block w-100">{this.state.sweet} Sweet</button>
            </div>
          </div>
        </div>
        <div className="card-footer d-flex justify-content-between">
          <button className="btn btn-dark">Close</button>
          <span className="fs-4"> Total : - {this.state.total}</span>
        </div>
      </div>
    </div>);
  }
}
class Restaurant extends React.Component {
  constructor(props) {
    super(props);
    console.log('constructor is called...');
  }
  render() {
    console.log('render function is called...');
    return (
      <div className='container'>
        <div className='row'>
          <DinningTable tableno='5' name='Ajay Patel' />


        </div>
      </div>
    )
  }
}
root.render(<Restaurant />);