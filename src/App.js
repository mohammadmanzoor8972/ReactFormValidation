import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <LoginForm />
    </div>
  );
}

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      isRemember: false,
      errors: {
        username: "",
        password: ""
      }
    };
  }

  render() {
    const { username, password, isRemember } = this.state;
    return (
      <form>
        <div>
          <label for="username">Username</label>
          <input type="text" name="username" id="username" />
        </div>
        <div>
          <label for="password">Password</label>
          <input type="text" name="password" id="password" />
        </div>
      </form>
    );
  }
}
