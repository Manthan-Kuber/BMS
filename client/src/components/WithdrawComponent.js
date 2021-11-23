import { React, Component } from "react";
import Footer from "./FooterComponent";
import Header from "./HeaderComponent";

class Withdraw extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: 0
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleLogIn = this.handleLogIn.bind(this);
  }


  handleLogIn = (event) => {
    event.preventDefault();
    console.log(this.state);
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
    fetch("http://localhost:3000/transactions/withdraw", {
      method: "POST",
      headers: {
        'Content-Type': "application/json",
        'Authorization': `bearer ${localStorage.getItem("token")}` 
      },
      body: JSON.stringify(data),
    }).then((res) => {
      res.json().then(result => {
        if (result.err) {
          alert(result.err);
        }
        else if (result) {
          alert("Success");
        }
        else {
          alert("Error");
        }
      }); 
    });
  }

  render() {
    return (
      <>
        <Header />
        {/* OnSubmit Added here */}
        <div class="container p-5">
          <form onSubmit={(data) => this.handleLogIn(data)} id="deposit-form">
            <h2>Withdraw</h2>
            <br />
            <div class="form-group">
              <div class="row">
                <div class="mb-3">
                  <label for="amount">Withdraw Amount</label>
                  <input
                    type="text"
                    id="amount"
                    name="amount"
                    class="form-control"
                    placeholder="Enter Amount"
                    onChange={this.handleInputChange}
                    value={this.state.amount}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-12 text-center">
              <button type="submit" class="btn btn-primary">
                Withdraw
              </button>
            </div>
          </form>
        </div>
        <Footer />
      </>
    );
  }
}

export default Withdraw;