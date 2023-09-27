import React from "react";

const DeletePost = () => {
  return (
    <>
      <div className="container">
        <h1 className="text-center mt-5 mb-5">Your Post</h1>
        <div className="row">
            <div className="col-md-4">
            <div className="card" style={{ width: "25rem", height:"25rem" }}>
             <input type="file" name="" id="" />
              <div className="card-body">
               <input type="text" name="" id="" className="mt-2" placeholder="Location Name" />
               <input type="text" name="" id="" className="mt-2" placeholder="Caption" />
               <div>
                <a href="#" className="btn btn-primary m-2">
              Delete Post
                </a>

               </div>
              </div>
            </div>
            </div>
        </div>
       

      </div>
    </>
  );
};

export default DeletePost;
