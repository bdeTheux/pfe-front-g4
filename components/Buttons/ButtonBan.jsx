import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const ButtonBan = ({ member }) => {
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
    }).then(() => router.reload(window.location.pathname));
  };
  if (member.is_banned) {
    return (
      <>
        <button
          onClick={() => handleBan(member._id)}
          className="bg-green-500 hover:bg-green-700  py-2 px-4 rounded text-white w-full"
        >
          Débannir
        </button>
      </>
    );
  } else {
    return (
      <button
        onClick={() => handleBan(member._id)}
        href="http://localhost:3000/management/"
        className="bg-red-500 hover:bg-red-700 py-2 px-4 rounded text-white w-full"
      >
        Bannir
      </button>
    );
  }
};

export default ButtonBan;
