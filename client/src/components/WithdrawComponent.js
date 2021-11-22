import { React, Component } from "react";
import Footer from "./FooterComponent";
import Header from "./HeaderComponent";

class Withdraw extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deposit: "",
      password: ""
    };
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
                    onChange={this.handleInputChange}
                    value={this.state.withdraw}
                    
                  />
                </div>
              </div>
            </div>
            <div class="form-group">
              <div class="mb-3">
                  <label for="account">Choose an account: </label> <br />
                    <select name="account" id="account">
                    <option value="acc1">Account 1</option>
                    <option value="acc2">Account 2</option>
                    <option value="acc3">Account 3</option>
                    <option value="acc4">Account 4</option>
                    </select>
              </div>
            </div>
            <div className="col-md-12 text-center">
              <button type="button" class="btn btn-primary">
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