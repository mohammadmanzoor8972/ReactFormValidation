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

  onChangeHandler = event => {
    const { name, value } = event.target;

    let errors = this.state.errors;
    switch (name) {
      case "username":
        errors.username = value.length < 5 ? "User name must 5 character" : "";
        break;
      case "password":
        errors.password = value.length < 7 ? "Password must 6 character" : "";
        break;
      default:
        break;
    }

    this.setState({ errors, [name]: value });
  };

  validateForm = errors => {
    let valid = true;
    Object.values(errors).forEach(val => val.length > 0 && (valid = false));
    return valid;
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.validateForm(this.state.errors)) {
      alert("Valid form!");
    } else {
      alert("Invalid form!");
    }
  };

  render() {
    const { username, password, isRemember } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label for="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={this.onChangeHandler}
          />
          <span>{this.state.errors.username}</span>
        </div>
        <div>
          <label for="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={this.onChangeHandler}
          />
          <span>{this.state.errors.password}</span>
        </div>
        <button type="submit">Login</button>
      </form>
    );
  }
}
