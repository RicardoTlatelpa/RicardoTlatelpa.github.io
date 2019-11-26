import React, {Component} from "react";
import "./styles/Board.css";
import Button from "./Button";
import OperatorButton from "./OperatorButton";
import { doMath } from './algorithms';
import { handleDecimal } from './handleDecimal';
import { setNegative } from './setNegative';
import { maxNum } from './maxNum';

export default class Board extends Component{
    constructor(props){
        super(props);
        this.state = {
           display: '',
           inputs: '',
           operator:'',
           numberClicked: false,
           operClicked: false,
           maxLength: false
           }
        
        this.handleClick = this.handleClick.bind(this);
        this.handleOperator = this.handleOperator.bind(this);
        this.handleRestart = this.handleRestart.bind(this);
        this.handleEquals = this.handleEquals.bind(this);
        this.handleDot = this.handleDot.bind(this);
        this.handleNegative = this.handleNegative.bind(this);
        
    }
   
    
    handleRestart(){
        this.setState({
            display: '',
            inputs: '',
            numberClicked: false,
            operClicked: false,
            operator: ''
        })

    }
    
    //updates the display
    handleClick(number){
        
        
        if(this.state.operClicked){
            this.setState({
                inputs: this.state.display,
                display: '',
                
            })
            
        }
        
        
        this.setState( state => ({
            display: maxNum(state.display += number),
            numberClicked: true,
            operClicked: false
        }))
    
        
       
    }
    //updates the input and display and operator state
    handleOperator(operator){
        if(this.state.operator && this.state.inputs){
            this.handleEquals()
        }
        this.setState({
            operator: operator,
            operClicked: true,
            numberClicked: false
        })
    }
    //equals passes arguments to the doMath function
    handleEquals(){
        let total = doMath(this.state.inputs, this.state.display, this.state.operator);
        this.setState({
            display: total,
            numberClicked: false,
            inputs: '',
            operator: ''
        })
    }

    handleDot(){
        // add 0 to decimal if there's no . to the left of it
        if(handleDecimal(this.state.display) === false){
            this.setState(state => ({
                display: state.display += '.'
            }))
        }else{
        this.setState({
            display: this.state.display
        })
    }
   
    }
    handleNegative(){
        let newNum = setNegative(this.state.display);
        this.setState({
            display: newNum
        })
    }



    render(){    
        return(
            <div className = "Board">
                 <input 
                 onChange = {this.handleChangeInput}
                 value = {this.state.display} 
                 type = 'text'
                 disabled
                 className = "calculatorScreen"
                 /> 
            <div className = "Board-main">
                <OperatorButton addOperator = {this.handleOperator} value = "+"/>  
                <OperatorButton addOperator = {this.handleOperator}  value = "-"/>
                <OperatorButton addOperator = {this.handleOperator} value = "x"/>
                <OperatorButton addOperator = {this.handleOperator} value = "÷"/> 
                <button onClick = {this.handleNegative} className = "negative-btn">+/-</button>
                <Button addValue = {this.handleClick} value = "1"/>
                <Button addValue = {this.handleClick} value = "2"/>
                <Button addValue = {this.handleClick} value = "3"/>
                <Button addValue = {this.handleClick} value = "4"/>
                <Button addValue = {this.handleClick} value = "5"/>
                <Button addValue = {this.handleClick} value = "6"/>
                <Button addValue = {this.handleClick} value = "7"/>
                <Button addValue = {this.handleClick} value = "8"/>
                <Button addValue = {this.handleClick} value = "9"/>
                <Button addValue = {this.handleClick} value = "0"/>
                <button className = "restart-btn" onClick = {this.handleDot}>.</button>
                
                <button onClick = {this.handleRestart} className = "restart-btn">AC</button>
                <button onClick = {this.handleEquals}  className = "equals-btn">=</button>     
                               
                </div>

            </div>
        )
    }
}