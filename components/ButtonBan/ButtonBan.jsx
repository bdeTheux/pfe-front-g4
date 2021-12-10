import { useRouter } from "next/router";

const ButtonBan = ({ member }) => {
  const handleBan = async (id) => {
    const router = useRouter();
    console.log(id);
    /*const res = await fetch(
      `http://pfe-back-g4-prod.herokuapp.com/users/${id}/ban`,
      {
        method: "POST",
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    );*/
    //const data = await res.json();
    /*if (res.status == 200) {
      router.push("http://localhost:3000/management/management");
    }*/
    //console.log(data);
  };
  if (member.is_banned) {
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
