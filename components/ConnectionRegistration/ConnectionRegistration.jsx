import Connection from "./Connection";
import Registration from "./Registration";
import { useState, useEffect } from "react";
import Head from "next/head";

const ConnectionRegistration = () => {
  const [user, setUser] = useState([]);

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
      });
  }, []);
  if (user) {
    return (
      <div className="mt-32 flex justify-center font-black text-xl">
        Erreur: Vous êtes déjà connecté
      </div>
    );
  }
  return (
    <div>
      <Head>
        <title>Se connecter - beefound</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p id="errorConnection" className=""></p>
      <div className="md:mt-24 grid grid-cols-1 md:grid-cols-2 divide-x">
        <div>
          <Registration />
        </div>
        <div>
          <Connection />
        </div>
      </div>
    </div>
  );
};
export default ConnectionRegistration;
