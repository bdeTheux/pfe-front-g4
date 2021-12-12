import Connection from "./Connection";
import Registration from "./Registration";
import { useState, useEffect } from "react";
import {useRouter} from "next/router";

const ConnectionRegistration = () => {
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
  if(user) {
    //router.push("/profile")
    return <div className="mt-32 flex justify-center font-black text-xl">Erreurr: Vous êtes déjà connecté</div>;
  }
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 divide-x">
        <div>
          <Registration />
        </div>
        <div>
          <Connection />
        </div>
      </div>
    
    );
  
};
export default ConnectionRegistration;
