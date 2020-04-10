import React, {Component} from 'react';
import Total from '../Total/Total';
import Summary from '../Summary/Summary'
class Cart extends Component{
render(){

return (
<section className="main__summary">
            
            <h2>Your cart</h2>

            <Summary summary={this.props.summary} />
             <Total total={this.props.total} /> 
           
          </section>





)






}




}


export default Cart;