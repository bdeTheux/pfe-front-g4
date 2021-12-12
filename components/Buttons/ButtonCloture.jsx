import { useState, useEffect } from "react";
import { useRouter } from "next/router";
const ButtonCloture = () => {
  const [token, setToken] = useState("");
  useEffect(() => {
    setToken(localStorage.token);
  });
  const router = useRouter();
  const state = {
    state: "Clôturé", //à changer avec Refusé
  };
  const handleCloture = () => {
    fetch(`/api/posts/${postId}/stateChange`, {
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
        onClick={() => handleCloture()}
        className="bg-red-500 hover:bg-red-700 font-bold py-2 px-4 border-red-700 rounded"
      >
        Refuser
      </button>
    </>
  );
};
export default ButtonCloture;
