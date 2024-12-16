import ReactDOM from 'react-dom/client';
import React, { createRef } from 'react';
class AreaCalculator extends React.Component {
    constructor(props) {
        super(props);
        //create as many property variables as many inputs 
        this.height = createRef();
        this.width = createRef();
        this.length = createRef();

        //create state variable
        this.state = {
            area:0
        }
    }
    calculateArea = (event) => 
    {
        console.log(this.height.current.value,this.width.current.value,this.length.current.value);
        event.preventDefault();
        let h = parseInt(this.height.current.value);
        let w = parseInt(this.width.current.value);
        let l = parseInt(this.length.current.value);

        this.setState({
            area:h * w * l
        });

    }
    render() {
        return (<div className="container">
            <div className="row">
                <div className="col-lg-6 offset-3">
                    <div className="card shadow">
                        <div className="card-header text-bg-primary">
                            <h2>Volume Calculator</h2>
                        </div>
                        <div className="card-body">
                            <form action onSubmit={this.calculateArea}>
                                <div className="form-floating mb-3">
                                    <input type="number" className="form-control" id="height" ref={this.height} />
                                    <label htmlFor="height">Height</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="number" className="form-control" id="width" name="width" placeholder="Width" required
                                    ref={this.width} />
                                    <label htmlFor="width">Width</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="number" className="form-control" id="length" name="length" placeholder="length" required
                                    ref={this.length} />
                                    <label htmlFor="length">length</label>
                                </div>
                                <div className="d-flex justify-content-end">
                                    <button type="submit" className="btn btn-primary">Calculate</button>
                                    <button type="reset" className="btn btn-light">Reset</button>
                                </div>
                                <div>
                                    <h3>Area = {this.state.area}</h3>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
    }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AreaCalculator />);