import { React, Component } from "react";
import Home from "./HomeComponent";
import SignUp from "./Navbar/SignUpComponent";
import LogIn from "./Navbar/LogInComponent";
import { BrowserRouter as Router,Route,Routes}from "react-router-dom";
import Dashboard from "./Dashboard/DashboardComponent";

class Main extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </>
    );
  }
}

export default Main;
