const ButtonBan = ({ member }) => {
  if (member.is_banned) {
    const url_form = `http://localhost:3000/api/users/ban/${member.id}`;
    return (
      <form action={url_form} method="POST">
        <input type="button" color="green" value="Débannir" />
      </form>
    );
  } else {
    const url_form = `http://localhost:3000/api/users/unban/${member.id}`;
    return (
      <form action={url_form} method="POST">
        <input type="button" color="red" value="Bannir" />
      </form>
    );
  }
};

export default ButtonBan;
