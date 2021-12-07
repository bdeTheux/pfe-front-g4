import Post from "../Post/Post";

const PostsList = ({ posts }) => {
  return (
    <div>
      {posts.map((post) => (
        <Post post={post} />
      ))}
    </div>
  );
};

export default PostsList;
