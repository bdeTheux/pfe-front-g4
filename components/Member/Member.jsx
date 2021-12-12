import ButtonBan from "../Buttons/ButtonBan";
const Member = ({ member }) => {
  return (
    <>
      <tr className="bg-green-100">
        <td className="p-3">
          <div className="flex align-items-center">
            <div className="ml-3">
              <div className="">
                {member.first_name} {member.last_name}
              </div>
              <div className="text-gray-500">{member.email}</div>
            </div>
          </div>
        </td>
        <td className="p-3">{member.is_admin ? "Oui" : "Non"}</td>
        <td className="p-3">{member.is_banned ? "Banni" : "Non banni"}</td>
        <td className="p-3">
          <ButtonBan member={member} />
        </td>
      </tr>
    </>
  );
};

export default Member;
