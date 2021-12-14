import BanPage from "../components/BanPage/BanPage";
import { useState } from "react";

export const getInitialProps = () => {
  const userConnected = useState([]);
  let isBanned = false;
  fetch("https://pfe-back-g4-dev.herokuapp.com/users/whoami", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
    },
  })
    .then((res) => res.json())
    .then((temp) => {
      userConnected = temp;
    })
    .then(() => {
      if (userConnected.is_banned) {
        isBanned = true;
        return {
          props: {
            isBanned,
          },
        };
      } else {
        isBanned = false;
        return {
          props: {
            isBanned,
          },
        };
      }
    });
};
export function middleware({ isBanned }) {
  if (isBanned) {
    return <BanPage />;
  }
}
