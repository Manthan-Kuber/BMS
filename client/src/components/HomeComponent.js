import { React, Component } from "react";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";

class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <Header />
        <div class="section-container">
          <p> The site is under construction, Sorry for the inconvinience.</p>
        </div>
        <Footer />
      </>
    );
  }
}

export default Home;
