const Alert = ({ message }) => {
  return (
    <div>
      <div
        class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
        role="alert"
      >
        <strong class="font-bold">Attention ! </strong>
        <span class="block sm:inline">{message}</span>
      </div>
    </div>
  );
};

export default Alert;
