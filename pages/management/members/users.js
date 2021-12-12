import MembersList from "../../../components/MembersList/MembersList";
export default function membersList({ users }) {
  return <MembersList users={users} />;
}

export const getServerSideProps = async () => {
  const res = await fetch("/api/users/", {
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
    },
  });
  const users = await res.json();

  return {
    props: {
      users,
    },
  };
};
