const Alert = ({ message }) => {
  return (
    <div>
      <div
        className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
        role="alert"
      >
        <strong className="font-bold">Attention ! </strong>
        <span className="block sm:inline">{message}</span>
      </div>
    </div>
  );
};

export default Alert;
