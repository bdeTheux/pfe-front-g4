import ButtonBan from "../ButtonBan/ButtonBan";
const Member = ({ member }) => {
  return (
    <li>
      {member.firstName} {member.lastName}
      {member.is_banned ? "Banni" : ""}
      <ButtonBan member={member} />
    </li>
  );
};

export default Member;
