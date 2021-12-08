import PostsList from "../../components/PostsList/PostsList";
export default function postsList({ posts }) {
  return <PostsList posts={posts} />;
}

export const getStaticProps = async () => {
  const res = await fetch(process.env.URL_FRONT + `/api/posts/posts`); //https://pfe-back-g4-prod.herokuapp.com/posts/
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
};
