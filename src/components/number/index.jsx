import React, { Component } from "react";

class Number extends Component {
    
  
    render() {
      let { currentNumber } = this.state;
  
      return (
        <>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.toggleModal}>Toggle modal</button>

        <p>Compteur : {currentNumber}</p>
        </>
      );
    }
  }

  export default Number;