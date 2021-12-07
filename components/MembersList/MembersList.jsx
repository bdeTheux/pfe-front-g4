import Member from "../Member/Member";
import Link from "next/link";

const MembersList = ({ users }) => {
  return (
    <>
      <ul>
        {users.map((member) => (
          <Member key={member.id} member={member} />
        ))}
      </ul>
    </>
  );
};

export default MembersList;
