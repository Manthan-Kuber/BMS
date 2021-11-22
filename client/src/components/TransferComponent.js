import { React, Component } from "react";
import Footer from "./FooterComponent";
import Header from "./HeaderComponent";

class Transfer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Transfer: "",
      password: ""
    };
  }

  render() {
    return (
      <>
        <Header />
        {/* OnSubmit Added here */}
        <div class="container p-5">
          <form id="Transfer-form">
            <h2>Transfer</h2>
            <br />
            <div class="form-group">
              <div class="row">
                <div class="mb-3">
                  <label for="transfer">Transfer Amount</label>
                  <input
                    type="text"
                    id="transfer"
                    name="transfer"
                    class="form-control"
                    placeholder="Enter Amount"
                    onChange={this.handleInputChange}
                    value={this.state.Transfer}
                    
                  />
                </div>
              </div>
            </div>
            <div class="form-group">
              <div class="mb-3">
              <label for="transfer">Enter Recipient Account Number</label>
                  <input
                    type="text"
                    id="transfer"
                    name="transfer"
                    class="form-control"
                    placeholder="Enter Account No."
                    onChange={this.handleInputChange}
                    value={this.state.Transfer}
                  />
              </div>
            </div>
            <div className="col-md-12 text-center">
              <button type="button" class="btn btn-primary">
                Transfer
              </button>
            </div>
          </form>
        </div>
        <Footer />
      </>
    );
  }
}

export default Transfer;