import PostsListFull from "../../components/PostsList/PostsListFull";
import { useState, useEffect } from "react";

export const getServerSideProps = async (context) => {
  const categoryName = context.params.name;
  return {
    props: {
      categoryName,
    },
  };
};

const PostsCategory = ({ categoryName }) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch(
      `http://pfe-back-g4-dev.herokuapp.com/posts/?category=${categoryName}`,
      {
        headers: {
          "Content-Type": "application.json",
        },
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((temp) => {
        setPosts(temp);
      });
  }, []);

  return (
    <>
      <PostsListFull posts={posts} title={categoryName} />
    </>
  );
};

export default PostsCategory;
