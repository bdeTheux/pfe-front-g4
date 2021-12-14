import { createContext, useContext, useEffect, useState } from "react";
const AppContext = createContext(null);
const ProviderWrapper = (props) => {
  const getUserConnected = (token) => {
    let userToSend;
    fetch("https://pfe-back-g4-dev.herokuapp.com/users/whoami", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((temp) => {
        userToSend = temp;
      });
    console.log("getuSERCONNECTED3");
    return userToSend;
  };
  let token;
  console.log("function appcontext");
  useEffect(() => {
    token = localStorage.getItem("token");
    fetch("https://pfe-back-g4-dev.herokuapp.com/users/whoami", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((user) => {
        if (user && user.is_banned) {
          localStorage.setItem("token", "");
        }
      });
  }, []);
  let userConnected = getUserConnected(token);
  const exposedValues = { userConnected };
  return (
    <AppContext.Provider value={exposedValues}>
      {props.children}
    </AppContext.Provider>
  );
};

export { AppContext, ProviderWrapper };
export default AppContext;
