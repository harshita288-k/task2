import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ForgetPassword = () => {
  const [email, SetEmail] = useState("");
  const [newPassword, SetNewPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, newPassword);

    try {
      const res = await axios.post("http://localhost:8000/reset-password", {
        email,
        newPassword,
      });
      console.log(res);

      if (res.status === 200) {
        console.log("Password changed successfully");

        toast.success("Password Reset successfully");
      } else {
        toast.error("Something Went Wrong");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("User Does not exist");
    }
  };
  return (
    <>
      <ToastContainer />
      <div
        className=" d-flex align-items-center justify-content-center bg-light"
        style={{ height: "70vh" }}
      >
        <div
          className="p-4"
          style={{ border: "2px solid black", borderRadius: "10px" }}
        >
          <h3 className="mb-3">Reset Password</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Enter your Email"
                value={email}
                onChange={(e) => SetEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Enter your New Password"
                value={newPassword}
                onChange={(e) => SetNewPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgetPassword;
