import React from "react";

const ContextApi = React.createContext();

export class Provider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "vinay",
      age: 27
    };
    changeState: this.changeState
  }

  changeState = action => {
    switch (action.type) {
      case "changeName":
        console.log("changeName", action);
        return this.setState({name:action.payload.name});
      case 'changeAge':
        return this.setState({age: action.payload.age})
      default:
        break;
    }
  };

  render() {
    console.log(this.state);
    return (
      <ContextApi.Provider
        value={{ state: this.state, dispatch: this.changeState }}
      >
        {this.props.children}
      </ContextApi.Provider>
    );
  }
}

export const Consumer = ContextApi.Consumer;
