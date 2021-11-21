import { React, Component } from "react";
import User from "./UserComponent";

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <> 
        <div className="section-main">
            <User />
            <User />
            <User />
      </div>
      </>
    );
  }
}

export default Dashboard;