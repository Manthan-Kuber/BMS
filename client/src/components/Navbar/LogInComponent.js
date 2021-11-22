import { React, useState } from "react";
import Footer from "../FooterComponent";
import Header from "../HeaderComponent";
// import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";



export default function LogIn() {
  let navigate = useNavigate();
  const[emailAddress,setemailAddress] = useState('');
  const[password,setpassword] = useState('');
  const {
    handleSubmit,
    // formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
 

  function handleClick() {
    var data = {emailAddress: emailAddress,password:password}
      fetch("http://localhost:3000/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((res) => {
        res.json().then((result) => {
          if (result.success) {
            console.log(result.status + " " + result.token);
            localStorage.setItem("token", result.token);
            // this.setState({token: result.token});
            navigate("/dashboard");
          } else {
            alert("Error");
          }
        });
      });
  }

  return (
    <>
      <Header />
      <div class="container">
        <div class="row">
          <div class="mb-3 col-md-6">
            <form onSubmit={handleSubmit(onSubmit)}>
              <label htmlFor="emailAddress">Email</label>
              <input
                type="text"
                name='emailAddress'
                placeholder="emailAddress"
                onChange={e => setemailAddress(e.target.value)}
              />
              <label htmlFor="passowrd">Password</label>
              <input
                type="password"
                name='password'
                placeholder="password"
                onChange={e => setpassword(e.target.value)}
              />
              <button
                type="submit"
                class="btn btn-dark align-center"
                onClick={handleClick}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
