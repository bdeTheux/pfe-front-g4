import ButtonBan from "../Buttons/ButtonBan";
const Member = ({ member, updateMemberList}) => {
  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">
              {member.first_name + " " + member.last_name}
            </div>
            <div className="text-sm text-gray-500">{member.email}</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">
          {member.is_admin ? "Oui" : "Non"}
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">
          {member.is_banned ? "Banni" : "Non banni"}
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <ButtonBan member={member}  updateMemberList={updateMemberList} />
      </td>
    </tr>
  );
};

export default Member;
