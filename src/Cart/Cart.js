import React, {Component} from 'react';
import Total from '../Total/Total';

class Cart extends Component{
render(){

return (
<section className="main__summary">
            
            <h2>Your cart</h2>
            {this.props.summary}
             <Total total={this.props.total} /> 
           
          </section>





)






}




}


export default Cart;