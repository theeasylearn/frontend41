import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.getElementById('root'));
class Destination extends Component
{
    constructor(props)
    {
      super(props);
      this.name = props.name;
      this.photo = props.photo;
      this.description = props.photo;
      console.log('Destination class constructor called...');

    }
    // Overidden method
    render()
    {
      console.log('Destination class render method is called...');

      let {name,photo,description} = this;
      return (<div className="col-lg-2">
        <div className="card shadow">
          <img src={photo} className="card-img-top" />
          <div className="card-body">
            <h3>{name}</h3>
            <p>{description}
              <br />
              <a href="#" className="btn btn-danger btn-sm">Book now</a>
            </p>
          </div>
        </div>
      </div>
      );
    }
}
class Site extends React.Component
{
    constructor(props)
    {
        super(props);
    }
    render()
    {
        return (<div className="container">
        <div className="row">
          <div className="col-12 my-3">
            <h3>Indian Holidays</h3>
            <hr />
          </div>
        </div>
        <div className="row">
            {/* first call constructor then render method */}
            <Destination name='Rajasthan' photo='https://picsum.photos/300?random=3' 
            description='Mahels, Desert and camels ' />
    
            <Destination name='Gujarat' photo='https://picsum.photos/300?random=2' 
            description='Temples, Forest and Seashore & Food' />
    
            <Destination name='Kashmir' photo='https://picsum.photos/300?random=1' 
            description='Mountains, Rivers, Cold and guns' />    
            
                
        </div>
      </div>);
    }
}
root.render(<Site />);