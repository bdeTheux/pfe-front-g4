import Member from "../Member/Member";
import NoMember from "../Member/NoMember";

const MembersList = ({ users }) => {
  console.log(users);
  return (
    <div className="flex items-center justify-center bg-white">
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
              {users.length == 0 ? (
                <NoMember />
              ) : (
                users.map((member) => {
                  return <Member key={member._id} member={member} />;
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MembersList;
