// import Cookies from "js-cookie";
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { useParams } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

// const SinglePost = () => {
//   const [location, setLocation] = useState("");
//   const [caption, setCaption] = useState("");
//   const [photo, setPhoto] = useState([]);
//   const [likes, setLike] = useState(0);
//   const [comment, setComment] = useState([]);
//   const Params = useParams();
//   const Navigate = useNavigate();

//   // Update the getSinglePost function
//   const getSinglePhoto = async () => {
//     try {
//       const res = await axios.get(
//         `http://localhost:8000/get-single-photo/${Params.id}`,
//         { responseType: "arraybuffer" } // Set the response type to arraybuffer
//       );
//       const imageBuffer = res.data; // Get the image data as a buffer
//       const base64Image = btoa(
//         new Uint8Array(imageBuffer).reduce(
//           (data, byte) => data + String.fromCharCode(byte),
//           ""
//         )
//       ); // Convert the buffer to base64

//       // Set the base64 image data as the src for the img tag
//       setPhoto(`data:${res.headers["content-type"]};base64,${base64Image}`);
//     } catch (error) {
//       console.error("Error:", error);
//       toast.error("Something Went Wrong");
//     }
//   };

//   //get
//   const getSinglePost = async (e) => {
//     console.log(Params.id);
//     try {
//       const res = await axios.get(
//         `http://localhost:8000/get-single-post/${Params.id}`
//       );
//       console.log(res);
//       if (res.statusText === "OK") {
//         setLocation(res.data.getPost.location);
//         setCaption(res.data.getPost.caption);
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       toast.error("Something Went Wrong");
//     }
//   };

//   //update
//   const handleUpdatePost = async (e) => {
//     e.preventDefault(e);
//     try {
//       const PostData = new FormData();

//       PostData.append("photo", photo);
//       PostData.append("location", location);
//       PostData.append("caption", caption);

//       const res = await axios.put(
//         `http://localhost:8000/update-post/${Params.id}`,
//         PostData
//       );
//       console.log(res);
//       if (res.statusText === "OK") {
//         toast.success("Updated Successfully");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       toast.error("Something Went Wrong");
//     }
//   };

//   //delete
//   const handleDeletePost = async (e) => {
//     e.preventDefault(e);
//     try {
//       const res = await axios.delete(
//         `http://localhost:8000/delete-post/${Params.id}`
//       );
//       console.log(res);
//       if (res.statusText === "OK") {
//         toast.success("Deleted Successfully");
//         Navigate("/get-post");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       toast.error("Something Went Wrong");
//     }
//   };

//   //like comment
//   const handleLikeComment = async (e) => {
//     console.log("gf", comment);
//     e.preventDefault(e);
//     try {
//       const res = await axios.post("http://localhost:8000/like-comment", {
//         comment,
//         likes,
//       });
//       console.log(res);
//       if (res.statusText === "OK") {
//         toast.success("Comment added successfully Successfully");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       toast.warning("Did not Add Comment");
//     }
//   };
//   useEffect(() => {
//     getSinglePost();
//     getSinglePhoto();
//   }, []);

//   return (
//     <>
//       <ToastContainer />
//       {Cookies.get("jwt_token") ? (
//         <div className="container">
//           <h1 className="text-center mt-5 mb-5">
//             Update , Delete , Add like and Comment
//           </h1>
//           <div className="row">
//             <div className="col-md-6">
//               <div className="bg-light p-3">
//                 <div className="d-flex justify-content-center mt-4">
//                   {/* <img src={photo} alt="" srcset="" /> */}
//                   {/* upload immage */}
//                   <div>
//                     <label className="btn btn-outline-secondary col-md-12">
//                       {photo ? photo.name : "Upload Photo"}
//                       <input
//                         type="file"
//                         name="photo"
//                         accept="image/*"
//                         onChange={(e) => setPhoto(e.target.files[0])}
//                         hidden
//                       />
//                     </label>
//                   </div>
//                   {/* display selected photo of product */}
//                   <div className="mt-3 d-flex justify-content-center">
//                     {" "}
//                     {photo && (
//                       <div>
//                         <img
//                           src={URL.createObjectURL(photo)} // Create a URL for the selected image/file
//                           alt={photo.name}
//                           width="250"
//                           height="250"
//                         />
//                       </div>
//                     )}
//                   </div>
//                 </div>
//                 <div className="">
//                   <form>
//                     <input
//                       type="text"
//                       name=""
//                       value={location}
//                       onChange={(e) => {
//                         setLocation(e.target.value);
//                       }}
//                       className="mt-4"
//                       placeholder="Location Name"
//                       style={{ width: "100%" }}
//                       required
//                     />
//                     <input
//                       type="text"
//                       name=""
//                       value={caption}
//                       onChange={(e) => {
//                         setCaption(e.target.value);
//                       }}
//                       className="mt-4"
//                       placeholder="Caption"
//                       style={{ width: "100%" }}
//                       required
//                     />
//                     <div className="d-flex justify-content-around mt-4">
//                       <button
//                         className="btn btn-primary m-2"
//                         onClick={handleUpdatePost}
//                       >
//                         Update Location/caption
//                       </button>
//                       <button
//                         className="btn btn-primary m-2"
//                         onClick={handleDeletePost}
//                       >
//                         Delete Post
//                       </button>
//                     </div>
//                   </form>
//                 </div>
//               </div>
//             </div>

//             <div className="col-md-6">
//               <div>
//                 <form>
//                   <p className="mt-3">Do Like and Comment</p>
//                   <input
//                     type="text"
//                     name=""
//                     value={comment}
//                     onChange={(e) => {
//                       setComment(e.target.value);
//                     }}
//                     className="mt-2"
//                     placeholder="Comment"
//                     style={{ width: "100%" }}
//                     required
//                   />
//                   <div>
//                     <i
//                       class="fa-solid fa-thumbs-up"
//                       onClick={() => setLike(likes === 1 ? 0 : 1)}
//                     ></i>
//                     <span>{likes}</span>
//                   </div>
//                   <button
//                     type="button"
//                     className="btn btn-primary mt-3"
//                     onClick={handleLikeComment}
//                   >
//                     Post Comment and Like
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <div>You are not Authenticated</div>
//       )}
//     </>
//   );
// };

// export default SinglePost;






import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SinglePost = () => {
  const [location, setLocation] = useState("");
  const [caption, setCaption] = useState("");
  const [photo, setPhoto] = useState(null); // Use null for initial state
  const [likes, setLike] = useState(0);
  const [comment, setComment] = useState("");
  const Params = useParams();
  const Navigate = useNavigate();

  const getSinglePhoto = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8000/get-single-photo/${Params.id}`,
        { responseType: "arraybuffer" }
      );
      const imageBuffer = res.data;
      const base64Image = btoa(
        new Uint8Array(imageBuffer).reduce(
          (data, byte) => data + String.fromCharCode(byte),
          ""
        )
      );

      setPhoto(`data:${res.headers["content-type"]};base64,${base64Image}`);
    } catch (error) {
      console.error("Error:", error);
      toast.error("Something Went Wrong");
    }
  };

  const getSinglePost = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8000/get-single-post/${Params.id}`
      );
      if (res.statusText === "OK") {
        setLocation(res.data.getPost.location);
        setCaption(res.data.getPost.caption);
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Something Went Wrong");
    }
  };

  const handleUpdatePost = async (e) => {
  e.preventDefault();
  try {
    const PostData = new FormData();
    PostData.append("photo", photo);
    PostData.append("location", location);
    PostData.append("caption", caption);

    const res = await axios.put(
      `http://localhost:8000/update-post/${Params.id}`,
      PostData
    );

    if (res.statusText === "OK") {
      // After successfully updating, set the photo state to the new URL
      
      toast.success("Updated Successfully");
    }
  } catch (error) {
    console.error("Error:", error);
    toast.error("Something Went Wrong");
  }
};


  const handleDeletePost = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.delete(
        `http://localhost:8000/delete-post/${Params.id}`
      );
      if (res.statusText === "OK") {
        toast.success("Deleted Successfully");
        Navigate("/get-post");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Something Went Wrong");
    }
  };

  const handleLikeComment = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/like-comment", {
        comment,
        likes,
      });
      if (res.statusText === "OK") {
        toast.success("Comment added successfully Successfully");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.warning("Did not Add Comment");
    }
  };

  useEffect(() => {
    getSinglePost();
    getSinglePhoto();
  }, []);

  return (
    <>
      <ToastContainer />
      {Cookies.get("jwt_token") ? (
        <div className="container">
          <h1 className="text-center mt-5 mb-5" style={{color:"green",textShadow:"1px 1px 2px green"}}>
            Update, Delete, Add like and Comment
          </h1>
          <div className="row">
            <div className="col-md-6">
              <div className="bg-light p-3">
                <div className=" mt-4">
                  <div>
                    <label className="btn btn-outline-secondary col-md-12">
                      {photo ? "Change Photo" : "Upload Photo"}
                      <input
                        type="file"
                        name="photo"
                        accept="image/*"
                        onChange={(e) => setPhoto(e.target.files[0])}
                        hidden
                      />
                    </label>
                  </div>
                  <div className="mt-3 d-flex justify-content-center">
                    {photo && (
                      <div>
                        <img
                          src={photo}
                          alt={photo.name}
                          width="250"
                          height="250"
                        />
                      </div>
                    )}
                  </div>
                </div>
                <div className="">
                  <form>
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
                    <div className="d-flex justify-content-around mt-4">
                      <button
                        className="btn  m-2"
                        onClick={handleUpdatePost}
                        style={{backgroundColor:"green",color:"white"}}
                      >
                        Update Location/caption
                      </button>
                      <button
                        className="btn m-2"
                        onClick={handleDeletePost}
                        style={{backgroundColor:"green",color:"white"}}
                      >
                        Delete Post
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div>
                <form>
                  <p className="mt-3" style={{fontSize:"30px",color:"green"}}>Do Like and Comment</p>
                  <input
                    type="text"
                    name=""
                    value={comment}
                    onChange={(e) => {
                      setComment(e.target.value);
                    }}
                    className="mt-2"
                    placeholder="Comment"
                    style={{ width: "100%" }}
                    required
                  />
                  <div>
                    <i
                      className="fa-solid fa-thumbs-up"
                      onClick={() => setLike(likes === 1 ? 0 : 1)}
                    ></i>
                    <span>{likes}</span>
                  </div>
                  <button
                    type="button"
                    className="btn  mt-3"
                    onClick={handleLikeComment}
                    style={{backgroundColor:"green",color:"white"}}
                  >
                    Post Comment and Like
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>You are not Authenticated</div>
      )}
    </>
  );
};

export default SinglePost;
