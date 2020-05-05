import React, { Component } from "react";

class Colors extends Component {
    constructor(props) {
        super(props);
        this.state = {
          currentColor: "none"
        };
      }
    
      changeSwitch = (e) => {
        this.setState({
          currentColor: e.target.id,
        });
      };
  
    render() {
    
      return (
        <>
        <button id="red" onClick={this.changeSwitch}>Rouge</button>
        <button id="blue" onClick={this.changeSwitch}>Bleu</button>
        <button id="green" onClick={this.changeSwitch}>Vert</button>
        <button id="yellow" onClick={this.changeSwitch}>Jaune</button>
        <p style={{color: this.state.currentColor}}>Couleur : {this.state.currentColor}</p>
        </>
      );
    }
  }

  export default Colors;