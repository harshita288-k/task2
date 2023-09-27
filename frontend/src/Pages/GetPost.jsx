import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const GetPost = () => {
  const [post, setPost] = useState([]);

  const Navigate = useNavigate();

  const getAllPost = async () => {
    try {
      const res = await axios.get("http://localhost:8000/get-post");
      console.log(res);
      if (res.statusText === "OK") {
        setPost(res.data.getPost);
        console.log(res.data.getPost);
      }
    } catch (e) {
      console.log("can not get post****", e);
    }
  };

  useEffect(() => {
    getAllPost();
  }, []);

  return (
    <>
      <div className="container">
        <h1 className="text-center mt-5 mb-5" style={{color:"green",textShadow:"1px 1px 2px green"}}>Your All Post</h1>
        <div className="row">
          {post.map((post) => (
            <>
              <div className="col-md-4">
                {console.log(post.location)}
                <div className="bg-light p-3" style={{ width: "16rem" }}>
                  <div className="d-flex justify-content-center">
                    <img
                      src={`http://localhost:8000/get-single-photo/${post._id}`}
                      alt={post.name}
                      width="250"
                      height="250"
                    />
                  </div>
                  <div className="">
                    <input
                      type="text"
                      name=""
                      value={post.location}
                      className="mt-2"
                    />
                    <input
                      type="text"
                      name=""
                      value={post.caption}
                      className="mt-2"
                    />

                    <div className="d-flex justify-content-between">
                      <button
                        type="button"
                        className="btn btn-primary mt-3"
                        onClick={() => Navigate(`post/${post._id}`)}
                        style={{backgroundColor:"green",color:"white"}}
                      >
                        Update Post
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
        <div className="d-flex justify-content-center">
          <button
            type="button"
            className="btn  mt-5 mb-4"
            onClick={() => Navigate("/create-post")}
            style={{backgroundColor:"green",color:"white"}}
          >
            Create Post
          </button>
        </div>
      </div>
    </>
  );
};

export default GetPost;
