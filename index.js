import React, { Component } from "react";
import { render } from "react-dom";
import "./style.css";

import { Provider } from "./contextApi";
import Hello from "./Hello";
import Age from "./changeAge";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }
  render() {
    return (
      <div>
        <p>Context Api With Redux</p>
        <Provider>
          <Hello />
          <Age />
        </Provider>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
