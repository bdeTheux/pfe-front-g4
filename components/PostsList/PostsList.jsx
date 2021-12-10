import Post from "../Post/Post";

const PostsList = ({ posts }) => {
  console.log("in components postsList ", posts);

  return (
    <div>
      {Array.from(posts).map((post) => {
        return <Post key={post._id} post={post} />;
      })}
    </div>
  );
};

export default PostsList;
