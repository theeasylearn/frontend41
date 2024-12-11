import React, { Component } from 'react';
import DinningTable from './DinningTable'
class Restaurant extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div className='container'>
          <div className='row'>
            <DinningTable tableno='5' name='Ajay Patel' />
            <DinningTable tableno='4' name='Tushar Patel' />
  
  
          </div>
        </div>
      )
    }
  }
  //must export class 
  export default Restaurant;