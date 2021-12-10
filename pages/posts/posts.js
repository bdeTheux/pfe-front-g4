import PostsList from "../../components/PostsList/PostsList";
export default function postsList({ posts }) {
  return <PostsList posts={posts} />;
}

export const getServerSideProps = async () => {
  const res = await fetch("https://pfe-back-g4-dev.herokuapp.com/posts/");

  const posts = await res.json();
  return {
    props: {
      posts,
    },
  };
};
