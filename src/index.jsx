import React from "react";
import ReactDOM from "react-dom";
import Colors from "./components/colors";

class App extends React.Component {
  render() {
    return (
        <>
        <div className="container row">
          <Colors />
        </div>
        </>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"))