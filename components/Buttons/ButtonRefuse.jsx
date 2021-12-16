import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { BanIcon } from "@heroicons/react/outline";
const ButtonRefuse = ({ postId, action }) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    setToken(localStorage.token);
  }, []);
  const router = useRouter();
  const state = {
    state: "Refusé",
  };
  const handleRefuse = () => {
    fetch(`/api/posts/${postId}/stateChange`, {
      method: "POST",
      body: JSON.stringify(state),
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then(() => action(postId));
  };
  return (
    <>
      <button
        onClick={() => handleRefuse()}
        className="flex bg-red-500 hover:bg-red-700 font-bold w-8 h-8 border-red-700 rounded"
      >
        <BanIcon className="w-8 h-8 text-white" />
      </button>
    </>
  );
};
export default ButtonRefuse;
