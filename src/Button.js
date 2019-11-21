import React, {Component} from "react";
import "./styles/Button.css"


export default class Button extends Component{
    render(){
        return(
            <button className = 'numberButton' onClick = {() => this.props.addValue(this.props.value)}>{this.props.value}</button>
        )
    }
}