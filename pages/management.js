import Management from "../components/Management/Management";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function management() {
  const [user, setUser] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetch("https://pfe-back-g4-dev.herokuapp.com/users/whoami", {
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
      });
  }, []);

  if(user === null){
    router.push('/connectionRegistration')
    return <></>
  }

  return <Management />;
}
