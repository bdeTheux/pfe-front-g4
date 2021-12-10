import Management from "../../components/Management/Management";
import { useAppContext } from "../../context/AppContext";
import { useEffect } from "react";

export async function getServerSideProps(context) {
  const [appState, setAppState] = useAppContext();
  const token = "";
  useEffect(() => {
    token = localStorage.getItem("token");
  }, [appState.token]);
  const resUsers = await fetch("https://pfe-back-g4-dev.herokuapp.com/users/", {
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
  const users = await resUsers.json();
  return {
    props: {
      users,
    },
  };
}

export default function management() {
  return <Management />;
}
