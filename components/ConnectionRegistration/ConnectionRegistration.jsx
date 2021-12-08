import Connection from "./Connection";
import Registration from "./Registration";
const ConnectionRegistration = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div>
        <Registration />
      </div>
      <div>
        <Connection />
      </div>
    </div>
  );
};
export default ConnectionRegistration;
