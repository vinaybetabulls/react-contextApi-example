import React, { Component } from "react";
import { Consumer } from "./contextApi";
export default class Hello extends Component {
  render() {
    return (
      <Consumer>
        {props => {
          return (
            <React.Fragment>
              {console.log(props)}
              <h1>My name is {props.state.name} </h1>
              <button onClick={()=>props.dispatch({type:'changeName',payload:{name:'Teja'}})}> Change Name </button>
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}
