import React from "react";

const Button = ({ onClick, color, children }) => {
  if (color === "green") {
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
          transition
          duration-300 ease-in-out
          bg-green-500
          hover:bg-green-400`}
      >
        {children}
      </button>
    );
  }
  if (color === "red") {
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
          transition
          duration-300 ease-in-out
          bg-red-500
          hover:bg-red-400`}
      >
        {children}
      </button>
    );
  } else {
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
          transition
          duration-300 ease-in-out
          bg-primary-500
          hover:bg-primary-400`}
      >
        {children}
      </button>
    );
  }
};

export default Button;
