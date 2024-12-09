import React from 'react';
import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.getElementById('root'));
function Destination(props) {
  // object destructring 
  let {name,photo,description} = props;
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
function Site() {
  return (<div className="container">
    <div className="row">
      <div className="col-12 my-3">
        <h3>Indian Holidays</h3>
        <hr />
      </div>
    </div>
    <div className="row">
        <Destination name='Rajasthan' photo='https://picsum.photos/300?random=3' 
        description='Mahels, Desart and camels ' />

        <Destination name='Gujarat' photo='https://picsum.photos/300?random=2' 
        description='Temples, Forest and Seashore & Food' />

        <Destination name='Kashmir' photo='https://picsum.photos/300?random=3' 
        description='Mountains, Rivers, Cold and guns' />    
        
            
    </div>
  </div>)
}
root.render(<Site />);