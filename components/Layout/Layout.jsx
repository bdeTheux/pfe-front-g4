import Navbar from "../Navbar/Navbar";
import NavbarAdmin from "../Navbar/NavbarAdmin";
import NavbarConnected from "../Navbar/NavbarConnected";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

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

export default Layout;
