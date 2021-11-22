import { React, Component } from "react";

class User extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        {/* TODO make grod responsive and good UI */}
        <div className="container">
          User
          <div className="accountDetails">
            user1@email // account number // account balance
          </div>
          <div className='row justify-content-end'>
            <div className='col-md-4'><button className=" btn btn-primary btn-lg " style={{width:'100%'}} >Deposit</button></div>
            <div className='col-md-4'><button className=" btn btn-dark btn-lg" style={{width:'100%'}}>Withdraw</button></div>
            <div className='col-md-4'><button className=" btn btn-info btn-lg" style={{width:'100%'}}>Transfer</button></div>
            
          </div>
        </div>
      </>
    );
  }
}
export default User;
