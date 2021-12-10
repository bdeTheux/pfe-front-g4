import Link from "next/link";
const ButtonMailTo = ({ mailto }) => {
  //add post to param
  const post = {
    title: "blabla",
  };
  const ref = `mailto:${mailto}?subject=Achat ${post.title}`;
  return <a href={ref}>Envoyez un mail</a>;
};

export default ButtonMailTo;
