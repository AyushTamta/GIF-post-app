import React from "react";
import "./Styles.css";
import avatar from "./avatar.png"

const PostCard = ({ post }) => {
  return (
    <>
 

      <div className="col">

        <div className="card-ps">
          {!!post.selectedGif ? (
            <img
              src={post.selectedGif}
              className="card-img-top post-img"
              alt="..."
            />
          ) : (
            <></>
          )}
          <div className="card-body post-card-body text-start">
            <h5 className="card-title">
              {" "}
            </h5>


            <p className="card-text">
            <img className="avatar_post" src={avatar} alt=""/>
            &nbsp;&nbsp;

            {post.postText}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostCard;
