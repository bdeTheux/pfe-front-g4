import React from "react";

const Button = ({ onClick, color, children }) => {
  return (
    <button
      onClick={onClick}
      className={`flex
        items-center
        justify-center
        h-12
        px-4
        text-sm
        font-semibold
        text-center text-white
        rounded-lg
        lg:h-10
        w-full
        bg-${color}-500
        hover:bg-${color}-400`}
    >
      {children}
    </button>
  );
};

export default Button;
