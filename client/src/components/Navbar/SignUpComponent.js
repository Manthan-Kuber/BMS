import { React, Component } from "react";
import Footer from "../FooterComponent";
import Header from "../HeaderComponent";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      emailAddress: "",
      dob: "",
      aadharNo: "",
      Contact: "",
      address: "",
      password: "",
      touched: {
        firstname: false,
        lastname: false,
        emailAddress: false,
        dob: false,
        aadharNo: false,
        Contact: false,
        address: false,
        password: false,
      },
    };
    this.handleSignUp = this.handleSignUp.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }
  handleSignUp = (event) => {
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
    fetch("http://localhost:3000/users/signup", {
      method: "POST",
      headers: {
        'Content-Type': "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      res.json().then(result => {
        if (result.success) {
          alert(result.status);
        }
        else {
          alert(result);
        }
      }); 
    });
  }
  handleBlur = (field) => (evt) => {
    this.setState({
      touched: { ...this.state.touched, [field]: true },
    });
  };
  validate(firstname, lastname,emailAddress, dob, aadharNo, Contact, address, password) {
    const errors = {
      firstname: "",
      lastname: "",
      emailAddress: "",
      dob: "",
      aadharNo: "",
      Contact: "",
      address: "",
      password: ""
    };

    if (this.state.touched.firstname && this.state.firstname.length < 3) {
      errors.firstname = "First Name should be >= to 3 characters";
    } else if (this.state.touched.firstname && this.state.firstname.length > 10) {
      errors.firstname = "First Name should be <= to 10 characters";
    }

    if (this.state.touched.lastname && this.state.lastname.length < 3) {
      errors.lastname = "Last Name should be >= to 3 characters";
    } else if (this.state.touched.lastname && this.state.lastname.length > 10) {
      errors.lastname = "Last Name should be <= to 10 characters";
    }

    // Regular expression to ensure that the telephone number only consists of integers
    const reg = /^[\d]*$/;
    if (this.state.touched.Contact && !reg.test(this.state.Contact)) {
      errors.Contact = "Contact Number should contain only numbers";
    } else if (this.state.touched.Contact && this.state.Contact.length !== 10) {
      errors.Contact = "Contact Number should contain exactly 10 digits";
    }

    if (this.state.touched.aadharNo && !reg.test(this.state.aadharNo)) {
      errors.aadharNo = "Aadhar Number should contain only numbers";
    } else if (this.state.touched.aadharNo && this.state.aadharNo.length !== 12) {
      errors.aadharNo = "Aadhar Number should contain exactly 12 digits";
    }

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (this.state.touched.emailAddress && !validRegex.test(this.state.emailAddress)) {
      errors.emailAddress = "Invalid Email Address";
    }

    var pattern =/^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;
    if (this.state.touched.dob && !pattern.test(this.state.dob)) {
      errors.dob = "Invalid Date";
    }

    return errors;
  }

  render() {
    const errors = this.validate(
      this.state.firstname,
      this.state.lastname,
      this.state.emailAddress,
      this.state.dob,
      this.state.aadharNo,
      this.state.Contact,
      this.state.address,
      this.state.password,
    );
    return (
      <>
        <Header />
        {/* OnSubmit Added here */}
        <div class="container">
          <form onSubmit={(data) => this.handleSignUp(data)} id="signupForm">
            <h2>Sign up</h2>
            <br />
            <div class="form-group">
              <div class="row">
                <div class="mb-3 col-md-6">
                  <label for="firstname">First Name</label>
                  <input
                    type="text"
                    id="firstname"
                    name="firstname"
                    class="form-control"
                    placeholder="Enter your First Name"
                    onChange={this.handleInputChange}
                    onBlur={this.handleBlur("firstname")}
                    value={this.state.firstname}
                    valid={errors.firstname === ""}
                    invalid={errors.firstname !== ""}
                  />
                  <small style={{ color: "red" }}>{errors.firstname}</small>
                </div>
                <div class="mb-3 col-md-6">
                  <label for="lastname">Last Name</label>
                  <input
                    type="text"
                    id="lastname"
                    name="lastname"
                    class="form-control"
                    placeholder="Enter your Last Name"
                    onChange={this.handleInputChange}
                    onBlur={this.handleBlur("lastname")}
                    value={this.state.lastname}
                    valid={errors.lastname === ""}
                    invalid={errors.lastname !== ""}
                  />
                  <small style={{ color: "red" }}>{errors.lastname}</small>
                </div>
                <div class="mb-3 col-md-6">
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
                <div class="mb-3 col-md-6">
                  <label for="dob">Date Of Birth</label>
                  <input
                    type="text"
                    id="dob"
                    name="dob"
                    class="form-control"
                    placeholder="dd/mm/yyyy"
                    onChange={this.handleInputChange}
                    onBlur={this.handleBlur("dob")}
                    value={this.state.dob}
                    valid={errors.dob === ""}
                    invalid={errors.dob !== ""}
                  />
                  <small style={{ color: "red" }}>{errors.dob}</small>
                </div>
                <div class="mb-3 col-md-6">
                  <label for="aadharNo">Aadhar Number</label>
                  <input
                    type="text"
                    id="aadharNo"
                    name="aadharNo"
                    class="form-control"
                    placeholder="Enter your Aadhar Number"
                    onChange={this.handleInputChange}
                    onBlur={this.handleBlur("aadharNo")}
                    value={this.state.aadharNo}
                    valid={errors.aadharNo === ""}
                    invalid={errors.aadharNo !== ""}
                  />
                  <small style={{ color: "red" }}>{errors.aadharNo}</small>
                </div>
                <div class="mb-3 col-md-6">
                  <label for="Contact">Contact Number</label>
                  <input
                    type="text"
                    id="Contact"
                    name="Contact"
                    class="form-control"
                    placeholder="Enter your Contact Number"
                    onChange={this.handleInputChange}
                    onBlur={this.handleBlur("Contact")}
                    value={this.state.Contact}
                    valid={errors.Contact === ""}
                    invalid={errors.Contact !== ""}
                  />
                  <small style={{ color: "red" }}>{errors.Contact}</small>
                </div>
              </div>
            </div>
            <div class="form-group">
              <div class="col-lg-12">
                <label for="address">Address</label>
                <textarea
                  id="address"
                  name="address"
                  class="form-control"
                  rows="3"
                  placeholder="Enter your Address"
                  onChange={this.handleInputChange}
                  onBlur={this.handleBlur("address")}
                  value={this.state.address}
                  valid={errors.address === ""}
                  invalid={errors.address !== ""}
                ></textarea>
                <small style={{ color: "red" }}>{errors.address}</small>
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
                  onChange={this.handleInputChange}
                  onBlur={this.handleBlur("password")}
                  value={this.state.password}
                  valid={errors.password === ""}
                  invalid={errors.password !== ""}
                />
                <small style={{ color: "red" }}>{errors.password}</small>
              </div>
            </div>
            <div className="col-md-12 text-center ">
              <button
                type="submit"
                class="btn btn-dark align-center"
              >
                Submit
              </button>
            </div>
            <p class="text-center mt-3">
              If you have already have an account, please{" "}
              <a href="/login">login</a>
            </p>
          </form>
        </div>
        <Footer />
      </>
    );
  }
}

export default SignUp;
