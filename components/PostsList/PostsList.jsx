import Post from "../Post/Post";

const PostsList = ({ posts}) => {
  //const camp = campus.filter((e) => e.checked)[0]
  console.log("PostsList", posts)
  return (
    <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
      {posts ? posts.map((post) => (
        <Post key={post._id} post={post} />
      )): (<p>Loading...</p>)}
    </div>
  );
};

export default PostsList;
