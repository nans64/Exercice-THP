import React, { Component } from "react";

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
          currentNumber: 0,
          isOpenModal: false,
        };
      }

      toggleModal = () => {
        this.setState({
          isOpenModal: !this.state.isOpenModal,
        });
      };
    
    increment = () => {
      this.setState({
        currentNumber: this.state.currentNumber + 1,
      });
    };
  
    decrement = () => {
      this.setState({
        currentNumber: this.state.currentNumber - 1,
      });
    };
  
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

  export default Counter;