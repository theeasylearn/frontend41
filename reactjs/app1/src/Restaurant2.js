import React, { Component } from 'react';
import DinningTable from './DinningTable2'
class Restaurant extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <div className="container-fluid bg-light shadow p-3 mb-3">
                    <div className="row">
                        <div className="col-12 col-sm-4 col-md-3">
                            <h3>Shreeji Restaurant</h3>
                        </div>
                        <div className="col-12 col-sm-8 col-md-9 d-flex justify-content-end">
                            <form action className="row row-cols-lg-auto g-3">
                                <div className="col-12">
                                    <div className="input-group">
                                        <div className="input-group-text">
                                            Table No
                                        </div>
                                        <input type="number" className="form-control" required name="tableno" id="tableno" />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="input-group">
                                        <div className="input-group-text">
                                            Name
                                        </div>
                                        <input type="text" className="form-control" required id="name" name="name" />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <input type="submit" className="btn btn-primary w-100" value="Add Table" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div className='container'>
                    <div className='row'>
                        <DinningTable tableno='5' name='Ajay Patel' />
                        <DinningTable tableno='4' name='Tushar Patel' />


                    </div>
                </div>
            </>
        )
    }
}
//must export class 
export default Restaurant;