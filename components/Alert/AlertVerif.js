import Alert from "./Alert";
const AlertVerif = () => {
  return (
    <div>
      {localStorage.getItem("error") !== "none" ? (
        <Alert message={localStorage.getItem("error")} />
      ) : (
        ""
      )}
    </div>
  );
};

export default AlertVerif;
