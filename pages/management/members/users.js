import MembersList from "../../../components/MembersList/MembersList";
export default function membersList({ users }) {
  return <MembersList users={users} />;
}

export const getServerSideProps = async () => {
  console.log("djkcvnzdljfvnkj");
  console.log("token dans users : ", localStorage.getItem("token"));
  const res = await fetch("https://pfe-back-g4-dev.herokuapp.com/users/", {
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
    },
  }); //("https://pfe-back-g4-prod.herokuapp.com/users/");
  const users = await res.json();

  return {
    props: {
      users,
    },
  };
};
