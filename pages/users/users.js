import MembersList from "../../components/MembersList/MembersList";
export default function membersList({ users }) {
  console.log("ici");
  return <MembersList users={users} />;
}

export const getStaticProps = async () => {
  const res = await fetch(process.env.URL_FRONT + `/api/users/users`);
  const users = await res.json();

  return {
    props: {
      users,
    },
  };
};
