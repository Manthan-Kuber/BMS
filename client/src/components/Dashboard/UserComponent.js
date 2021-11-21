import { React, Component } from "react";

class User extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <>
        {/* TODO make grod responsive and good UI */}
            <div className="accountUser">
                User 
                <div className="accountDetails">
                user1@email // account number // account balance
                </div>
                <div className="actions">
                    <span>
                    <button className="deposit">Deposit</button>
                    <button className="withdraw">Withdraw</button>
                    <button className="transfer">Transfer</button>
                    </span>
                </div>
            </div>
        </>
    );
  }
}
export default User;