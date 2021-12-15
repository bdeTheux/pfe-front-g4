import NewPost from "../components/NewPost/NewPost";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export const getServerSideProps = async () => {
  const res = await fetch("https://pfe-back-g4-dev.herokuapp.com/categories/");
  const categories = await res.json();

  return {
    props: {
      categories,
    },
  };
};

const newPost = ({ categories }) => {
  //Check if user is connected /////////////////////////////////////////
  const [user, setUser] = useState([]);
  const router = useRouter();
  useEffect(() => {
    fetch("/api/users/whoami", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((temp) => {
        setUser(temp);
        console.log("user", temp);
      });
  }, []);
  if (user === null) {
    router.push("/connectionRegistration");
    return <></>;
  }

  //End Check user///////////////////////////////////////////////////////
  else {
    return <NewPost categories={categories} />;
  }
};

export default newPost;
