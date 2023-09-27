import React, { useState } from "react";
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Registration = () => {

const [username,SetUsername] = useState("")
const [email,SetEmail] = useState("")
const [password,SetPassword] = useState("")


const handleSubmit = async (e) => {
  e.preventDefault();
  console.log(username, email, password);

  try {
    const res = await axios.post("http://localhost:8000/register", {
      username,
      email,
      password,
    });
    console.log(res)

    if (res.status === 200) {
      console.log("registered");

      toast.success("Registered Successfully");
    } else {
      toast.error("Something Went Wrong");
    }
  } catch (error) {
    console.error("Error:", error);
    toast.error("Something Went Wrong");
  }
};

  return (
    <>
    <ToastContainer />

      <div
        className=" d-flex align-items-center justify-content-center bg-light"
        style={{ height: "70vh"}}
      >
        <div
          className="p-3"
          style={{ border: "2px solid blue", borderRadius: "10px" ,boxShadow:"2px 2px 2px blue",backgroundColor:"#c4c4d1"}}
        >
          <h3 className="mb-3" style={{color:"green",textShadow:"1px 1px 2px green"}}>Registration Form</h3>
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
                type="email"
                className="form-control"
                placeholder="Enter your Email"
                aria-describedby="emailHelp"
                value={email}
                onChange={(e)=>SetEmail(e.target.value)}
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
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Registration;
