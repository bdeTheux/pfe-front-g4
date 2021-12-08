const handleBan = async (id) => {
  console.log(id);
  const res = await fetch(`http://localhost:3000/api/users/ban/${id}`, {
    method: "POST",
  });
  const data = await res.json();
  console.log(data);
};

const ButtonBan = ({ member }) => {
  if (member.is_banned) {
    return (
      <>
        <form action="POST">
          <button
            onClick={() => handleBan(member.id)}
            className="bg-green-500 hover:bg-green-700 font-bold py-2 px-4 border-green-700 rounded"
          >
            Débannir
          </button>
        </form>
      </>
    );
  } else {
    return (
      <form action="POST">
        <button
          onClick={() => handleBan(member.id)}
          className="bg-red-500 hover:bg-red-700 font-bold py-2 px-4 border-red-700 rounded"
        >
          Bannir
        </button>
      </form>
    );
  }
};

export default ButtonBan;
