import { React, Component } from "react";
import { Link } from "react-router-dom";

class User extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <div className="container">
          User
          <div className="accountDetails">
            user1@email // account number // account balance
          </div>
          <div className='row justify-content-around p-3'>
            <div className='col-md-4'>
              <Link to='/deposit'><button className=" btn btn-primary btn-lg " style={{width:'100%'}} >Deposit Amount</button></Link>
            </div>
            <div className='col-md-4'>
              <Link to='/withdraw'><button className=" btn btn-dark btn-lg " style={{width:'100%'}} >Withdraw Amount</button></Link>
            </div>
            <div className='col-md-4'>
              <Link to='/transfer'><button className=" btn btn-info btn-lg " style={{width:'100%'}} >Transfer Amount</button></Link>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default User;
