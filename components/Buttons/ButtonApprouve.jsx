import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { CheckIcon } from "@heroicons/react/outline";
const ButtonApprouve = ({ postId }) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    setToken(localStorage.token);
  });
  const router = useRouter();
  const state = {
    state: "Approuvé",
  };
  const handleApprouve = () => {
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
        onClick={() => handleApprouve()}
        className="bg-green-500 hover:bg-green-700 font-bold w-8 h-8 border-green-700 rounded"
      >
        <CheckIcon className="w-8 h-8 text-white" />
      </button>
    </>
  );
};

export default ButtonApprouve;
