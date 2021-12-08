const ButtonBan = ({ member }) => {
  const url_form = `http://localhost:3000/api/users/ban/${member.id}`;
  if (member.is_banned) {
    return (
      <>
        <form action={url_form} method="POST">
          <input type="button" value="Débannir" />
        </form>
      </>
    );
  } else {
    return (
      <form action={url_form} method="POST">
        <input type="button" color="red" value="Bannir" />
      </form>
    );
  }
};

export default ButtonBan;
