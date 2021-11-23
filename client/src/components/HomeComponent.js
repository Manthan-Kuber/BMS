import { React, Component } from "react";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import homepage from "../images/homepage.jpg"

class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <Header />
        <div class="section-container">
          <div class="container-fluid">
            <h1 class="text-center"> WELCOME TO BANK MANAGEMENT SYSTEM</h1>
            <img src={homepage} class="img-fluid" alt='home page pic' />
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Home;
