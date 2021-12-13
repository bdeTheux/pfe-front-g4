import Alert from "./Alert";
const AlertVerif = () => {
  console.log(localStorage.getItem("error"));
  return (
    <div>
      {localStorage.getItem("error") !== null ? (
        <Alert message={localStorage.getItem("error")} />
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default AlertVerif;
