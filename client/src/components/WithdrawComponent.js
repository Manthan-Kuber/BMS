import { React, Component } from "react";
import Footer from "./FooterComponent";
import Header from "./HeaderComponent";

class Withdraw extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: 0
    };
  }

  submit_task(data) {
    fetch("http://localhost:3000/transactions/withdraw", {
      method: "POST",
      headers: {
        'Content-Type': "application/json",
        'Authorization': `bearer`
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
            <h2>Withdraw</h2>
            <br />
            <div class="form-group">
              <div class="row">
                <div class="mb-3">
                  <label for="withdraw">Withdraw Amount</label>
                  <input
                    type="text"
                    id="withdraw"
                    name="withdraw"
                    class="form-control"
                    placeholder="Enter Amount"
                    value={this.state.amount}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-12 text-center">
              <button type="button" class="btn btn-primary" onClick={this.submit_task(this.state)}>
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