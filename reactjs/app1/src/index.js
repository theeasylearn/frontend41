import ReactDOM from 'react-dom/client';
import React from 'react';
class SIPCalculator extends React.Component
{
    constructor(props)
    {
        super(props);
        //create state variables
        this.state = {
            amount:0,
            rate:0.0,
            year:0,
            total:0
        }
    }
    updateAmount = (event) => {
        this.setState({
            amount: event.target.value,
        });
    }
    updateRate = (event) => {
        this.setState({
            rate: event.target.value
        });
    }

    updateYear = (event) => {
        this.setState({
            year: event.target.value
        });
    }

    componentDidUpdate(previousProperty,previousState)
    {
       if(this.state.amount !== previousState.amount || this.state.rate !== previousState.rate || this.state.year !== previousState.year)
       {
        this.setState({
            total: parseInt(this.state.amount) + parseInt(this.state.rate) + parseInt(this.state.year)
        });
       } 
    }
    render()
    {
        return (<div className="container">
            {/* this is an example of sip calculator */}
            <div className="row">
                <div className="col-lg-6 offset-3">
                    <div className="card shadow">
                        <div className="card-header text-bg-primary">
                            <h2>S.I.P Calculator</h2>
                        </div>
                        <div className="card-body">
                            <form action="">
                                {/* this is form */}
                                <div className="form-floating mb-3">
                                    <input type="number" className="form-control" id="amount" name="amount" placeholder="Monthly Investment"
                                    onChange={this.updateAmount} />
                                    <label for="amount">Monthly Investment</label>
                                  </div>
                                  <div className="form-floating mb-3">
                                    <input type="number" className="form-control" id="rate" name="rate" placeholder="Expected Return Rate"
                                    onChange={this.updateRate} />
                                    <label for="rate">Expected Return rate</label>
                                  </div>
                                  <div className="form-floating mb-3">
                                    <input type="number" className="form-control" id="year" 
                                    name="year" placeholder="Year" onChange={this.updateYear} />
                                    <label for="year">Years</label>
                                  </div>
                                  <div><h2>Total {this.state.total}</h2></div>  
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>);

    }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SIPCalculator />);