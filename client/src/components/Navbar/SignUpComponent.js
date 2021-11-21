import { React ,Component} from "react";
import Footer from "../FooterComponent";
import Header from "../HeaderComponent";

class SignUp extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
      <Header/>
        <div class="container">
          <form action="#" method="" id="signupForm">
            <h2>Sign up</h2>
            <br />
            <div class="form-group">
              <div class="row">
                <div class="mb-3 col-md-6">
                  <label for="firstName">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    class="form-control"
                    placeholder="Enter your First Name"
                  />
                  <small></small>
                </div>
                <div class="mb-3 col-md-6">
                  <label for="lastName">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    class="form-control"
                    placeholder="Enter your Last Name"
                  />
                </div>
                <div class="mb-3 col-md-6">
                  <label for="email">Email</label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    class="form-control"
                    placeholder="Enter your Email"
                  />
                </div>
                <div class="mb-3 col-md-6">
                  <label for="dob">Date Of Birth</label>
                  <input type="date" id="dob" name="dob" class="form-control" />
                </div>
                <div class="mb-3 col-md-6">
                  <label for="aadharNumber">Aadhar Number</label>
                  <input
                    type="text"
                    id="aadharNumber"
                    name="aadharNumber"
                    class="form-control"
                    placeholder="Enter your Aadhar Number"
                  />
                </div>
                <div class="mb-3 col-md-6">
                  <label for="phoneNumber">Phone Number</label>
                  <input
                    type="text"
                    id="phoneNumber"
                    name="phoneNumber"
                    class="form-control"
                    placeholder="Enter your Phone Number"
                  />
                </div>
              </div>
            </div>
            <div class="form-group">
              <div class="col-lg-12">
                <label>Address</label>
                <textarea
                  id="address"
                  name="address"
                  class="form-control"
                  rows="3"
                  placeholder="Enter your Address"
                ></textarea>
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
              <div class="mb-3">
                <label for="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  class="form-control"
                  placeholder="Confirm Password"
                />
              </div>
            </div>
            <button type="submit" class="btn">
              Submit
            </button>
            <p class="text-center mt-3">
              If you have already have an account, please <a href="/login">login</a>
            </p>
          </form>
        </div>
        <Footer />
      </>
    );
  }
}

export default SignUp;
