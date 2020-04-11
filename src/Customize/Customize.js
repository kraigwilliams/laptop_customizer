import React, {Component} from 'react';
import Option from '../Option/Option'


class Customize extends Component{
render(){
    console.log("features in customize", this.props.features)
    return(

<form className="main__form">
          
            <h2>Customize your laptop</h2>

<Option updateFeature={this.props.updateFeature} selected={this.props.selected} features={this.props.features}/>


</form>
    )
}







}

export default Customize