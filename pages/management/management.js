import Management from "../../components/Management/Management";

export const getStaticProps = async () => {
  const resUsers = await fetch("https://pfe-back-g4-prod.herokuapp.com/users/"); //("https://pfe-back-g4-prod.herokuapp.com/users/"); //https://pfe-back-g4-prod.herokuapp.com/users/
  const users = await resUsers.json();

  return {
    props: {
      users,
    },
  };
};

export default function management({ users }) {
  return <Management users={users} />;
}
