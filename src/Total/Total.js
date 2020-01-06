import React, { Component } from 'react';


class Total extends Component{
render(){
    const USCurrencyFormat = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      });
      




return (
    <div className="summary__total">
    <div className="summary__total__label">Total</div>
    <div className="summary__total__value">
      {USCurrencyFormat.format(this.props.total)}
    </div>
  </div>





)





}





}


export default Total;