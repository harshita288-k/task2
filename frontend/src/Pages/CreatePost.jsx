import Cookies from "js-cookie";
import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Post = () => {
  const [location, setLocation] = useState("");
  const [caption, setCaption] = useState("");
  const [photo, setPhoto] = useState("");
  const Navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(location, caption);

    try {
      const PostData = new FormData();

      PostData.append("photo", photo);
      PostData.append("location", location);
      PostData.append("caption", caption);

      const res = await axios.post(
        "http://localhost:8000/create-post",
        PostData
      );
      console.log(res);

      if (res.status === 200) {
        console.log("post created successfully");

        toast.success("post created successfully");
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
      {Cookies.get("jwt_token") ? (
        <div className="container">
          <h1 className="text-center mt-5 mb-5" style={{color:"green",textShadow:"1px 1px 2px green"}}>Create Post</h1>
          <div className="d-flex justify-content-around">
            <div className=" p-4" style={{boxShadow:"2px 2px 2px blue",backgroundColor:"#c4c4d1"}}>
              <div className=" mt-4">
                {/* upload immage */}
                <div>


                  
                  <label className="btn btn-outline-secondary col-md-12">
                    {photo ? photo.name : "Upload Photo"}
                    <input
                      type="file"
                      name="photo"
                      accept="image/*"
                      onChange={(e) => setPhoto(e.target.files[0])}
                      hidden
                    />
                  </label>
                </div>
                {/* display selected photo of product */}
                <div className="mt-3 d-flex justify-content-center">
                  {" "}
                  {photo && (
                    <div>
                      <img
                        src={URL.createObjectURL(photo)} // Create a URL for the selected image/file
                        alt={photo.name}
                        width="250"
                        height="250"
                      />
                    </div>
                  )}
                </div>
              </div>
              <div className="">
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name=""
                    value={location}
                    onChange={(e) => {
                      setLocation(e.target.value);
                    }}
                    className="mt-4"
                    placeholder="Location Name"
                    style={{ width: "100%" }}
                    required
                  />
                  <input
                    type="text"
                    name=""
                    value={caption}
                    onChange={(e) => {
                      setCaption(e.target.value);
                    }}
                    className="mt-4"
                    placeholder="Caption"
                    style={{ width: "100%" }}
                    required
                  />
                  <div className="d-flex justify-content-center mt-4">
                    <button className="btn  m-2"  style={{backgroundColor:"green",color:"white"}}>Post Now</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <button
              onClick={() => Navigate("/get-post")}
              className="btn mt-2"
              style={{backgroundColor:"green",color:"white"}}
            >
              See Your Post
            </button>
          </div>
        </div>
      ) : (
        <div>You are not Authenticated</div>
      )}
    </>
  );
};

export default Post;
