import Navbar from "../Navbar/Navbar";
import NavbarAdmin from "../Navbar/NavbarAdmin";
import NavbarConnected from "../Navbar/NavbarConnected";
import BanPage from "../BanPage/BanPage";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export const isBanned = ({ localStorage1 }) => {
  const [userConnected, setUserConnected] = useState([]);
  useEffect(() => {
    if (
      localStorage1.getItem("token") != null &&
      localStorage1.getItem("token") != ""
    ) {
      console.log("token pas vide");
      fetch("/api/users/whoami", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage1.getItem("token"),
        },
      })
        .then((res) => {
          const data = res.json();
          console.log(data);
          return data;
        })
        .then((temp) => {
          console.log(temp);
          setUserConnected(temp);
        })
        .then(() => {
          if (userConnected.is_banned) {
            console.log("il est banned");
            isBanned = "banned";
          } else {
            isBanned = "not banned";
          }
        });
    }
  });

  return "not localstorage";
};

export const Layout = ({ children }) => {
  const [user, setUser] = useState([]);
  const [reRender, setReRender] = useState(false);
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

  //if user is not authenticated
  if (user === null) {
    return (
      <div>
        <Navbar />
        <div>
          <main>{children}</main>
        </div>
      </div>
    );
  }
  //if user is an admin
  else if (user.is_admin) {
    return (
      <div>
        <NavbarAdmin />
        <div>
          <main>{children}</main>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <NavbarConnected />
        <div>
          <main>{children}</main>
        </div>
      </div>
    );
  }
};

export default { Layout, isBanned };
