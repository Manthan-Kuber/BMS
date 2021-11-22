import { React, Component } from "react";
import Footer from "./FooterComponent";
import Header from "./HeaderComponent";

class Deposit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: 0,
      token: ""
    };
  }

  componentDidMount() {
    console.log(localStorage.getItem("token"));
    this.setState({token: localStorage.getItem("token")})
  }

  submit_task(data) {
    fetch("http://localhost:3000/transactions/deposit", {
      method: "POST",
      headers: {
        'Content-Type': "application/json",
        'Authorization': `Bearer ${this.state.token}` 
      },
      body: JSON.stringify(data),
    }).then((res) => {
      res.json().then(result => {
        if (result) {
          alert(result);
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
          <form id="deposit-form">
            <h2>Deposit</h2>
            <br />
            <div class="form-group">
              <div class="row">
                <div class="mb-3">
                  <label for="deposit">Deposit Amount</label>
                  <input
                    type="text"
                    id="deposit"
                    name="deposit"
                    class="form-control"
                    placeholder="Enter Amount"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-12 text-center">
              <button type="button" class="btn btn-primary" onClick={this.submit_task(this.state)}>
                Deposit
              </button>
            </div>
          </form>
        </div>
        <Footer />
      </>
    );
  }
}

export default Deposit;