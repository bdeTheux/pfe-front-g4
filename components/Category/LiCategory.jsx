import { PencilIcon, TrashIcon } from "@heroicons/react/outline";
import { useState, useEffect } from "react";
import SelectCategories from "./SelectCategories";
import { useRouter } from "next/router";

const LiCategory = ({ categories, category, action }) => {
  const [token, setToken] = useState("");
  const [categoryName, setCategoryName] = useState(category.name);
  const [categoryParent, setCategoryParent] = useState(category.parent);
  const label = "categorie parente";
  const router = useRouter();

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  });
  const handleDelete = async () => {
    const res = await fetch(`/api/categories/${category.name}`, {
      method: "DELETE",
      headers: {
        Authorization: token,
      },
    }).then((res) => {
      if (res.status != 200) {
        res.json().then((el) => {
          document.getElementById("errorCategory").className =
            "bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative";
          document.getElementById("errorCategory").innerText = el.description;
        });
      } else {
        action();
      }
    });
  };
  const handleUpdate = () => {
    if (categoryName === "") setCategoryName(category.name);

    if (categoryParent === "") {
      setCategoryParent(category.parent);
    }
    const updatedCategory = {
      name: categoryName,
      parent: categoryParent,
      sub_categories: category.sub_categories,
    };

    const resUpdate = fetch(`/api/categories/${category.name}`, {
      method: "Put",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(updatedCategory),
    }).then((resUpdate) => {
      if (resUpdate.status != 200) {
        resUpdate.json().then((el) => {
          document.getElementById("errorCategory").className =
            "bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative";
          document.getElementById("errorCategory").innerText = el.description;
        });
      } else {
        action();
      }
    });
  };
  var handleChange = function (event) {
    this.setState({ html: event.target.value });
  }.bind(this);

  return (
    <div
      key={category}
      className=" text-black placeholder-gray-600  px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
    >
      <form method="POST">
        <div className="">
          <input type="hidden" name="_method" value="put" />
          <p className="font-light text-gray-500">Nom de la categorie</p>
          <textarea
            name="categoryName"
            defaultValue={category.name}
            onChange={(val) => setCategoryName(val.target.value)}
            className=" text-black placeholder-gray-800 w-full px-4 py-2.5 mt-1 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-300  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
          />
          <p className="font-light text-gray-500">Categorie parente</p>
          <SelectCategories
            categories={categories}
            setCategory={setCategoryParent}
            label={category.parent}
          />
        </div>

        <div className="flex flex-initial   w-full pl-3 mt-2">
          <button
            onClick={handleUpdate}
            type="button"
            className="p-0 w-12 h-12 bg-gray-700 rounded-full hover:bg-gray-800 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none"
          >
            <PencilIcon className="flex ml-3 w-6 text-gray-100" />
          </button>
        </div>
      </form>

      <div className="flex flex-initial w-full pl-3 mt-2">
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
