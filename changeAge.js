import React, { Component } from "react";
import { Consumer } from "./contextApi";
export default class Age extends Component {
  render() {
    return (
      <Consumer>
        {props => {
          return (
            <React.Fragment>
              {console.log(props)}
              <h1>My age is {props.state.age} </h1>
              <button onClick={()=>props.dispatch({type:'changeAge',payload:{age:25}})}> Change Age </button>
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}
