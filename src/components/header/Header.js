import React from "react";
import { Button, Segment } from 'semantic-ui-react'


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loan_amount: '',
            annual_interest_rate: '',
            maturity_date: '',
            time: 'year',
        }
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

     onChangeHandler = (e) => {
        this.setState({...this.state, [e.target.name] : e.target.value});
    }

    onSubmitHandler(e) {
        e.preventDefault()
        let money = +this.state.loan_amount;
        let percent = +this.state.annual_interest_rate;
        let time = +this.state.maturity_date;
        let timeVariant = this.state.time;
        
        if(timeVariant === 'year') {
            time *= 12;
        }

        let result = ( (money * percent / 100) + money ) / time;
        
        console.log(result);
    }

    render() {
        return(
            <div>
                <div className="container">
                    <div className="col text-center mb-3">
                        <h1 className="fw-bold">Loan Calculator</h1>
                    </div>
                    <form onSubmit={this.onSubmitHandler}>
                        <div className='row'>
                            <div className="col-12 col-md-4">
                                <label className="form-label fw-bold" htmlFor="loan_amount">Loan amount</label>
                                <input type="number" name="loan_amount" value={this.state.loan_amount} onChange={this.onChangeHandler} className="form-control" id="loan_amount" placeholder="Loan amount" />
                            </div>
                            <div className="col-12 col-md-4">
                                <label className="form-label fw-bold" htmlFor='annual_interest_rate'>Annual interest rate</label>
                                <div className="input-group mb-2">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text">%</div>
                                    </div>
                                <input type="number" name="annual_interest_rate" value={this.state.annual_interest_rate} onChange={this.onChangeHandler} className="form-control" id="annual_interest_rate" placeholder="Annual interest rate" />
                                </div>
                            </div>
                            <div className="col-12 col-md-4">
                                <label className="form-label fw-bold" htmlFor='maturity_date'>Maturity date:</label>
                                <div className="row">
                                    <div className="col-7">
                                        <input type="number" name="maturity_date" value={this.state.maturity_date} onChange={this.onChangeHandler} className="form-control" id="maturity_date" placeholder="Maturity date:" />
                                    </div>
                                    <div className="col-5 ps-0">
                                        <select onChange={this.onChangeHandler} name="time" value={this.state.time}  className="form-control" id="time">
                                            <option value='year'>Year</option>
                                            <option value='month'>Month</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='mt-2 text-end'>
                                <button type="submit" className="btn btn-warning">Calculate</button>
                            </div>
                        </div>
                    </form>
                    <hr />
                </div>
            </div>
        );
    }
    
}

export default Header;
