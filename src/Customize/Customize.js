import React, {Component} from 'react';
import Option from '../Option/Option'


class Customize extends Component{
render(){
    return(

<form className="main__form">
          
            <h2>Customize your laptop</h2>

<Option features={this.props.features}/>


</form>
    )
}







}

export default Customize