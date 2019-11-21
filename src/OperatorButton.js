import React, {Component} from 'react';
import './styles/OperButton.css';


class OperatorButton extends Component{
    render(){
        return(
            <button className = 'OperButton' onClick = {() => this.props.addOperator(this.props.value)}>{this.props.value}</button>
        )
    }

}



export default OperatorButton;