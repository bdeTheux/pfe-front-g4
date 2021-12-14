import Alert from "./Alert";
const AlertVerif = () => {
  return (
    <div>
      {!localStorage.getItem("error") ||
      localStorage.getItem("error") == "null" ? (
        <p></p>
      ) : (
        <Alert message={localStorage.getItem("error")} />
      )}
    </div>
  );
};

export default AlertVerif;
