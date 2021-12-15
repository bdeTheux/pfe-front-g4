import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const ButtonBan = ({ member, action, current_state }) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    setToken(localStorage.token);
  });
  const router = useRouter();

  const handleBan = async (id) => {
    fetch(`/api/users/${id}/ban`, {
      method: "POST",
      headers: {
        Authorization: token,
      },
    }).then(() => action());
  };
  if (current_state) {
    return (
      <>
        <button
          onClick={() => handleBan(member._id)}
          className="bg-green-500 hover:bg-green-700 font-bold py-2 px-4 border-green-700 rounded"
        >
          Débannir
        </button>
      </>
    );
  } else {
    return (
      <button
        onClick={() => handleBan(member._id)}
        className="bg-red-500 hover:bg-red-700 font-bold py-2 px-4 border-red-700 rounded"
      >
        Bannir
      </button>
    );
  }
};

export default ButtonBan;
