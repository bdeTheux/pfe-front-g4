import { PencilIcon, TrashIcon } from "@heroicons/react/outline";
import { useState, useEffect } from "react";

const LiCategory = ({ categories, category }) => {
  const [token, setToken] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [categoryParent, setCategoryParent] = useState("");

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  });
  const handleDelete = async () => {
    const res = await fetch(
      `https://pfe-back-g4-dev.herokuapp.com/categories/${category.name}`,
      {
        method: "DELETE",
        headers: {
          Authorization: token,
        },
      }
    );
  };
  const handleUpdate = () => {
    const updatedCategory = {
      name: categoryName,
      parent: categoryParent,
      sub_categories: category.sub_categories,
    };
    console
    console.log(updatedCategory)
    
    fetch(`https://pfe-back-g4-dev.herokuapp.com/categories/${category.name}`, {
      method: "Put",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
        body: JSON.stringify(updatedCategory),
    })
      .then((res) => {
        const data = res.json();
        console.log(data);
        return data;
      })
      .then((temp) => console.log(temp));
  };

  return (
    <div
      key={category}
      className="flex text-black placeholder-gray-600 w-1/2 px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
    >
      <form method="POST">
        <div className="flex-row">
          <input type="hidden" name="_method" value="put" />
          <input
            value={categoryName}
            onChange={(val) => setCategoryName(val.target.value)}
            name="categoryName"
            type="text"
            placeholder={category.name}
            className=" text-black placeholder-gray-800 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-300  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
          />
          <input
            value={categoryParent}
            onChange={(val) => setCategoryParent(val.target.value)}
            name="categoryParent"
            type="text"
            placeholder={category.parent}
            className=" text-black placeholder-gray-800 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-300  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
          />
        </div>

        <div className="flex-initial pl-3 mt-2">
          <button
            onClick={handleUpdate}
            type="button"
            className="p-0 w-12 h-12 bg-gray-700 rounded-full hover:bg-gray-800 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none"
          >
            <PencilIcon className="flex ml-3 w-6 text-gray-100" />
          </button>
        </div>
      </form>

      <div className="flex-initial pl-3 mt-2">
        <button
          onClick={handleDelete}
          className="p-0 w-12 h-12 bg-gray-700 rounded-full hover:bg-gray-800 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none"
        >
          <TrashIcon className="flex ml-3 w-6 text-gray-100" />
        </button>
      </div>
    </div>
  );
};

export default LiCategory;
