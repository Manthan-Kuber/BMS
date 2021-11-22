import { React, Component } from "react";
import Footer from "../FooterComponent";
import Header from "../HeaderComponent";

class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailAddress: "",
      password: "",
      touched: {
        emailAddress: false,
      },
    };
    this.handleLogIn = this.handleLogIn.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }
  handleLogIn = (event) => {
    event.preventDefault();
    this.submit_task(this.state);
  };

  handleInputChange = (event) => {
    event.preventDefault();
    console.log(event.target.name);
    console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  submit_task(data) {
    fetch("http://localhost:3001/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) => {
      if (response.success && response.success === true) {
        alert(response.status);
      } else {
        alert(response.err);
      }
    });
  }

  handleBlur = (field) => (evt) => {
    this.setState({
      touched: { ...this.state.touched, [field]: true },
    });
  };

  validate(emailAddress) {
    const errors = {
      emailAddress: "",
    };

    var validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (
      this.state.touched.emailAddress &&
      !validRegex.test(this.state.emailAddress)
    ) {
      errors.emailAddress = "Invalid Email Address";
    }

    return errors;
  }

  render() {
    const errors = this.validate(this.state.emailAddress);
    return (
      <>
        <Header />
        {/* OnSubmit Added here */}
        <div class="container">
          <form onSubmit={(data) => this.handleLogIn(data)} id="login-form">
            <h2>Login</h2>
            <br />
            <div class="form-group">
              <div class="row">
                <div class="mb-3">
                  <label for="emailAddress">Email</label>
                  <input
                    type="text"
                    id="emailAddress"
                    name="emailAddress"
                    class="form-control"
                    placeholder="Enter your Email"
                    onChange={this.handleInputChange}
                    onBlur={this.handleBlur("emailAddress")}
                    value={this.state.emailAddress}
                    valid={errors.emailAddress === ""}
                    invalid={errors.emailAddress !== ""}
                  />
                  <small style={{ color: "red" }}>{errors.emailAddress}</small>
                </div>
              </div>
            </div>
            <div class="form-group">
              <div class="mb-3">
                <label for="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  class="form-control"
                  placeholder="Enter Password"
                />
              </div>
            </div>
            <div className="col-md-12 text-center">
              <button type="button" class="btn btn-dark">
                Login
              </button>
            </div>
            <p class="text-center mt-3">
              If you don't have an account, please <a href="/signup">Sign Up</a>
            </p>
          </form>
        </div>
        <Footer />
      </>
    );
  }
}

export default LogIn;
