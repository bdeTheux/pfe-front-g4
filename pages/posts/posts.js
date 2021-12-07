import PostsList from "../../components/PostsList/PostsList";
export default function postsList({ posts }) {
  return <PostsList posts={posts} />;
}

export const getStaticProps = async () => {
  const res = await fetch(`http://localhost:3000/api/posts/posts`);
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
};
