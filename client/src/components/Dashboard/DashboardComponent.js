import { React, Component } from "react";
import Footer from "../FooterComponent";
import Header from "../HeaderComponent";
import User from "./UserComponent";

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <> 
      <Header />
        <div className="section-main">
            <User />
      </div>
      <Footer />
      </>
    );
  }
}

export default Dashboard;