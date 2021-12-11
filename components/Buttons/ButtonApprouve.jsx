import { useState, useEffect } from "react";
import { useRouter } from "next/router";
const ButtonApprouve = ({ postId }) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    setToken(localStorage.token);
  });
  //const router = useRouter();
  const state = {
    state: "Approuvé",
  };
  const handleApprouve = () => {
    fetch(`https://pfe-back-g4-dev.herokuapp.com/posts/${postId}/stateChange`, {
      method: "POST",
      body: JSON.stringify(state),
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    }).then(() => router.reload(window.location.pathname));
  };
  return (
    <>
      <button
        onClick={() => handleApprouve()}
        className="bg-green-500 hover:bg-green-700 font-bold py-2 px-4 border-green-700 rounded"
      >
        Valider
      </button>
    </>
  );
};

export default ButtonApprouve;
