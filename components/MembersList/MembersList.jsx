import Member from "../Member/Member";
import Link from "next/link";

const MembersList = ({ users }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="col-span-12">
        <div className="overflow-auto lg:overflow-visible sm:rounded-lg">
          <table className="border-separate space-y-6 text-sm">
            <thead className="bg-green-700">
              <tr>
                <th className="p-3">Membre</th>
                <th className="p-3 text-left">Modérateur ?</th>
                <th className="p-3 text-left">État</th>
                <th className="p-3 text-left">Gérer les ban</th>
              </tr>
            </thead>
            <tbody>
              {users.map((member) => (
                <Member key={member.id} member={member} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MembersList;
