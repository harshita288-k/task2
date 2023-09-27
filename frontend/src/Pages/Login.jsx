import React, { useState } from "react";
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from "js-cookie"

const Login = () => {
  const [username,SetUsername] = useState("")
const [password,SetPassword] = useState("")


const handleSubmit = async (e) => {
  e.preventDefault();
  console.log(username, password);

  try {
    const res = await axios.post("http://localhost:8000/login", {
      username,
      password,
    });
   console.log(res)

    if (res.statusText === "OK") {
      console.log("login");
      toast.success("Login Successfully");
     Cookies.set("jwt_token", res.data.Generatetoken,{expires: 7,
     secure: true,
     sameSite: 'strict'})

    } 
    //isme ja hi nhi rha
    if(!res.statusText === "OK"){
      toast.error("Wrong Email or Password");
    }
  } catch (error) {
    console.error("Error:", error);
    toast.error("Wrong Email or Password");
  }
};
  return (
    <>
    <ToastContainer />
      <div className=" d-flex align-items-center justify-content-center bg-light" style={{height:"70vh"}}>
        <div className="p-4" style={{border:"2px solid blue",borderRadius:"10px",boxShadow:"2px 2px 2px blue",backgroundColor:"#c4c4d1"}}>
<h3 className="mb-3" style={{color:"green",textShadow:"1px 1px 2px green"}}>Login</h3>
        <form onSubmit={handleSubmit}>
        <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              value={username}
                onChange={(e)=>SetUsername(e.target.value)}
           required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Enter your Password"
              id="exampleInputPassword1"
              value={password}
              onChange={(e)=>SetPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn" style={{backgroundColor:"green",color:"white"}}>
           Login
          </button>
          <a href="/reset-password">

          <span className="ml-3" style={{color:"red"}}>Forget Password?</span>
          </a>
        </form>
        </div>
      </div>
    </>
  );
};

export default Login;
