import React, { Component } from "react";

class Colors extends Component {
    constructor(props) {
        super(props);
        this.state = {
          currentColor: "red"
        };
      }
    
    red = () => {
      this.setState({
        currentColor: "red",
      });
    };
  
    blue = () => {
      this.setState({
        currentColor: "blue",
      });
    };

      
    green = () => {
      this.setState({
        currentColor: "green",
      });
    };

      
    yellow = () => {
      this.setState({
        currentColor: "yellow",
      });
    };
  
    render() {
      let { currentColor } = this.state;
      
      return (
        <>
        <button onClick={this.red}>Rouge</button>
        <button onClick={this.blue}>Bleu</button>
        <button onClick={this.green}>Vert</button>
        <button onClick={this.yellow}>Jaune</button>
        <p style={{color: currentColor}}>Couleur : {currentColor}</p>
        </>
      );
    }
  }

  export default Colors;