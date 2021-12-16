import PostsListFull from "../../components/PostsList/PostsListFull";

export const getServerSideProps = async () => {
  const res = await fetch("https://pfe-back-g4-dev.herokuapp.com/posts/");

  const posts = await res.json();
  return {
    props: {
      posts,
    },
  };
};

export default function posts() {
  return (
    <>
      <PostsListFull title="Les annonces" camp="Tout" />
    </>
  );
}
