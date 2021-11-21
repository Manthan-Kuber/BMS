import { React, Component } from "react";
import Home from "./HomeComponent";
import SignUp from "./SignUpComponent";
import LogIn from "./LogInComponent";
import { Routes, Route, Navigate } from "react-router-dom";

class Main extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
        </Routes>
      </>
    );
  }
}

export default Main;
