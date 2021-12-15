import BanPage from "../components/BanPage/BanPage";
import { useState } from "react";

export function middleware(req, res, next) {
  //console.log("je passe dans le middleware");
  //console.log(req.headers);
  let userConnected;
  let isBanned = false;
  /*if (window.localStorage.getItem("token") != "") {
    console.log("token pas vide");
    fetch("/api/users/whoami", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: window.localStorage.getItem("token"),
      },
    })
      .then((res) => {
        const data = res.json();
        console.log(data);
        return data;
      })
      .then((temp) => {
        console.log(temp);
        userConnected = temp;
      })
      .then(() => {
        if (userConnected.is_banned) {
          console.log("il est banned");
          isBanned = true;
        } else {
          isBanned = false;
        }
      });
  }
  console.log(req);
  console.log("middleware");
  if (false) {
    return <BanPage />;
  }*/
}
