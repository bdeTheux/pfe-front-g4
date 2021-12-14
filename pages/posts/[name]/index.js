import { useState, useEffect } from "react";
import PostsListFull from "../../../components/PostsList/PostsListFull";

export const getServerSideProps = async (context) => {
  const categoryName = context.params.name;
  return {
    props: {
      categoryName,
    },
  };
};

const PostsCategory = ({ categoryName }) => {
  if (categoryName.includes("&")) {
    const [category, setCategory] = useState("");
    const [campus, setCampus] = useState("");
    const tab = categoryName.split("&");

    useEffect(() => {
      setCategory(tab[0]);
      setCampus(tab[1]);
      console.log("catI", category);
      console.log("campusI", campus);
      console.log("tabI", tab);
    }, []);
    console.log("catO", category);
    console.log("campusO", campus);
    console.log("tabO", tab);
    return (
      <>
        <PostsListFull title={category} camp={campus} />
      </>
    );
  } else if (
    categoryName === "Woluwe" ||
    categoryName === "Louvain-la-Neuve" ||
    categoryName === "Ixelles"
  ) {
    return (
      <>
        <PostsListFull title="Les annonces" camp={categoryName} />
      </>
    );
  } else {
    return (
      <>
        <PostsListFull title={categoryName} camp="Tout" />
      </>
    );
  }
};

export default PostsCategory;
