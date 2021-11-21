import { React, Component } from "react";
import Footer from "../FooterComponent";
import Header from "../HeaderComponent";

class LogIn extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <Header />
        <div class="container" id="signup-form">
          <form action="#" method="" id="signup-form">
            <h2>Login</h2>
            <br />
            <div class="form-group">
              <div class="row">
                <div class="mb-3">
                  <label for="email">Email</label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    class="form-control"
                    placeholder="Enter your Email"
                  />
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
            <button type="button" class="btn">
              Login
            </button>
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
