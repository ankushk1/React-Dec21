import React, { Component } from "react";

export class ClassComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: 0,
      user: {}
    };
    console.log("constructor");
  }

  componentWillMount() {
    //api data
    console.log("Component will mount");
    this.setState({
      user: {
        name: "ABC"
      }
    });
  }

  componentDidMount() {
    console.log("componentDidMount");
    // fetch('http://localhost:8000/user/signup',{
    //   method:"POST",
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     firstname:"abc",
    //     lastname:"dd",
    //     email:"a1@g.com",
    //     password:123
    //   })
    // })
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextState);
    console.log(nextProps);
    if (nextState.num1 == 1) return false;
    return true;
  }

  componentWillUpdate() {
    console.log("componentWillUpdate");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  onIcrement() {
    this.setState({ num1: this.state.num1 + 1 });
  }

  onIcrement2() {
    this.setState({ num2: this.state.num2 + 1 });
  }

  onDecrement() {
    this.setState({ num1: this.state.num1 - 1 });
  }

  onReset() {
    this.setState({ num1: 0 });
  }

  onLog(message) {
    // console.log(message);
  }

  render() {
    console.log("render");
    return (
      <div>
        {/* {console.log("render", this.state)} */}
        ClassComp
        <br />
        <div>
          num1 -{this.state.num1} <br />
          num1 -{this.state.user.name} <br />
          {/* num2 -{this.state.num2} <br /> */}
          <button onClick={() => this.onIcrement()}>Increment</button>
          <button onClick={() => this.onDecrement()}>Decrement</button>
          <button onClick={() => this.onReset()}>Reset</button>
        </div>
        <div>
          <button onClick={() => this.onIcrement2()}>Increment2</button>
        </div>
      </div>
    );
  }
}

export default ClassComp;
