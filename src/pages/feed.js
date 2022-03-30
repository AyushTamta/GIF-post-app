import { useContext } from "react";
import { CreatePostCard } from "../components/createPostCard";
import PostCard from "../components/postCard";
import { PostContext } from "../provider/postProvider";

export const Feed = () => {
  const { post } = useContext(PostContext);
  return (
    <>
      <div className="container page">
        <CreatePostCard />
        {post?.map((post) => {
          return (
            <div className="row mt-4" key={post.selectedGif}>
              <div className="col-sm-3"></div>
              <PostCard post={post} />

              <div className="col-sm-3"></div>
            </div>
          );
        })}
      </div>
    </>
  );
};
