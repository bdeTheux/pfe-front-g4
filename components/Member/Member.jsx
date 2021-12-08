import ButtonBan from "../ButtonBan/ButtonBan";
const Member = ({ member }) => {
  return (
    <>
      <tr className="bg-green-100">
        <td className="p-3">
          <div className="flex align-items-center">
            <div className="ml-3">
              <div className="">
                {member.firstName} {member.lastName}
              </div>
              <div className="text-gray-500">{member.email}</div>
            </div>
          </div>
        </td>
        <td className="p-3">{member.is_banne ? "Banni" : "Non banni"}</td>
        <td className="p-3">
          <ButtonBan member={member} />
        </td>
      </tr>
    </>
  );
};

export default Member;
