import Alert from "./Alert";
const AlertVerif = () => {
  return (
    <div>
      {!localStorage.getItem("error") ||
      localStorage.getItem("error") == "null" ||
      localStorage.getItem("error") == "undefined" ? (
        <p></p>
      ) : (
        <Alert message={localStorage.getItem("error")} />
      )}
    </div>
  );
};

export default AlertVerif;
