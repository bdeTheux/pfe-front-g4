import { useState } from "react";

const SelectCategories = ({ categories, setCategory, label }) => {
  const handlerCategory = (val) => {
    setCategory(val.target.value);
  };
  return (
    <select
      name="categories"
      required
      onChange={handlerCategory}
      className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
    >
      <option autoFocus className="bg-gray-200 text-gray-700" hidden>
        {label}
      </option>
      {categories.map((element) => {
        return (
          <option key={element.name} className="bg-gray-200 text-gray-700">
            {element.name}
          </option>
        );
      })}
    </select>
  );
};
export default SelectCategories;
