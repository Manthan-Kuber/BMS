import { React, Component } from "react";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Dashboard from "./Dashboard/DashboardComponent"

class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <Header />
        <Dashboard />
        <div class="section-container">
          <p> The site is under construction, Sorry for the inconvenience.</p>
        </div>
        <Footer />
      </>
    );
  }
}

export default Home;
