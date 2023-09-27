import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Registration from "./Pages/Registration";
import Login from "./Pages/Login";
import ForgetPassword from "./Pages/ForgetPassword";
import Post from "./Pages/CreatePost";

import GetPost from "./Pages/GetPost";
import Header from "./Components/Header";
import SinglePost from "./Pages/SinglePost";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Registration />} />
          <Route path="/create-post" element={<Post />} />
          <Route path="/get-post" element={<GetPost />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="get-post/post/:id" element={<SinglePost />} />    
          <Route path="/reset-password" element={<ForgetPassword/>} />        
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
