import React, { Component } from 'react';
import Display from './Display';
import Button from './Button';
//import './Calculator.css';

class Calculator extends Component {
  state = {
    displayValue: '0',
    previousValue: null,
    operation: null,
  };

  handleButtonPress = buttonName => {
    // handle user input and update state here
  };

  render() {
    return (
      <div className="calculator">
        <Display value={this.state.displayValue} />
        <div className="row">
          <Button label="AC" onClick={this.handleButtonPress} />
          <Button label="+/-" onClick={this.handleButtonPress} />
          <Button label="%" onClick={this.handleButtonPress} />
          <Button label="/" onClick={this.handleButtonPress} />
        </div>
        <div className="row">
          <Button label="7" onClick={this.handleButtonPress} />
          <Button label="8" onClick={this.handleButtonPress} />
          <Button label="9" onClick={this.handleButtonPress} />
          <Button label="*" onClick={this.handleButtonPress} />
        </div>
        <div className="row">
          <Button label="4" onClick={this.handleButtonPress} />
          <Button label="5" onClick={this.handleButtonPress} />
          <Button label="6" onClick={this.handleButtonPress} />
          <Button label="-" onClick={this.handleButtonPress} />
        </div>
        <div className="row">
          <Button label="1" onClick={this.handleButtonPress} />
          <Button label="2" onClick={this.handleButtonPress} />
          <Button label="3" onClick={this.handleButtonPress} />
          <Button label="+" onClick={this.handleButtonPress} />
        </div>
        <div className="row">
          <Button label="0" onClick={this.handleButtonPress} />
          <Button label="." onClick={this.handleButtonPress} />
          <Button label="=" onClick={this.handleButtonPress} />
        </div>
      </div>
    );
  }
}

export default Calculator;