import PostsList from "../../components/PostsList/PostsList";
export default function postsList({ posts }) {
  return <PostsList posts={posts} />;
}

export const getServerSideProps = async () => {
  const res = await fetch("/api/posts/");

  const posts = await res.json();
  return {
    props: {
      posts,
    },
  };
};
