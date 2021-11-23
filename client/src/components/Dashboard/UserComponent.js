import { React, Component } from "react";
import { Link } from "react-router-dom";

class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: "",
      lastname: "",
      emailAddress: "",
      accountNo: "",
      currentBalance: ""
    }
  }

  componentDidMount() { 
    fetch("http://localhost:3000/users/details", {
      method: "GET",
      headers: {
        'Content-Type': "application/json",
        'Authorization': `bearer ${localStorage.getItem("token")}` 
      },
    }).then((res) => {
      res.json().then(result => {
        if (result) {
          console.log(result);
          this.setState({"firstname": result.firstname});
          this.setState({"lastname": result.lastname});
          this.setState({"emailAddress": result.emailAddress});
          this.setState({"accountNo": result.accountNo});
          this.setState({"currentBalance": result.currentBalance});
        }
        else {
          console.log("Error");
        }
      }); 
    });
  }

  render() {
    return (
      <>
        <div className="container">
          <div className="accountDetails">
            <p><strong> First Name: {this.state.firstname}  Last Name: {this.state.lastname} <br /> Email Address: {this.state.emailAddress} Account Number: {this.state.accountNo}  Current Balance: {this.state.currentBalance} </strong></p> 
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
