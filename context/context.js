import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext(null);
const ProviderWrapper = (props) => {
  const checkIfUserIsBan = () => {
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
        .then((user) => {
          if (user && user.is_banned) {
            console.log("User is banned");
            localStorage.removeItem("token");
            throw new Error("Vous êtes banni!");
          }
          console.log("User is OK");
        });
    }, []);
  };
  const exposedValues = { checkIfUserIsBan };
  return (
    <AppContext.Provider value={exposedValues}>
      {props.children}
    </AppContext.Provider>
  );
};

export { AppContext, ProviderWrapper };
export default AppContext;
