import { PencilIcon, TrashIcon } from "@heroicons/react/outline";
import { useState, useEffect } from "react";
import SelectCategories from "./SelectCategories";

const LiCategory = ({ categories, category }) => {
  const [token, setToken] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [categoryParent, setCategoryParent] = useState("");
  const label = "categorie parente"

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  });
  const handleDelete = async () => {
    console.log(category.name)
    const res = await fetch(
      `/api/categories/${category.name}`,
      {
        method: "DELETE",
        headers: {
          Authorization: token,
        },
      }
    );
  };
  const handleUpdate = () => {
    if(categoryName === "") categoryName = category.name
   
    if(categoryParent === ""){
      categoryParent = category.parent
    }
    const updatedCategory = {
      name: categoryName,
      parent: categoryParent,
      sub_categories: category.sub_categories,
    };
    console
    console.log(updatedCategory)
    
    fetch(`/api/categories/${category.name}`, {
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
  var handleChange = function(event){
    this.setState({html: event.target.value});
}.bind(this);

  return (
    <div
      key={category}
      className="flex text-black placeholder-gray-600 w-1/2 px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
    >
      <form method="POST">
        <div className="flex-row">
          <input type="hidden" name="_method" value="put" />
          <p>Nom de la categorie</p><textarea name="categoryName" defaultValue={category.name}  onChange={(val) => setCategoryName(val.target.value)} className=" text-black placeholder-gray-800 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-300  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"></textarea>
          <p>Categorie parente</p><SelectCategories categories={categories} setCategory={setCategoryParent} label={category.parent}/>

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


/*


          <p>Nom de la categorie parente</p><textarea name="categoryParent" defaultValue={category.parent}  onChange={(val) => setCategoryParent(val.target.value)} className=" text-black placeholder-gray-800 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-300  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"></textarea>

          <SelectCategories categories={categories} setCategory={setCategoryParent} label={label}/>
           console.log("categoryParent : " + categoryParent + " type :" + typeof categoryParent)
    console.log("category parent : " + category.parent + " type : "+ typeof category.parent)

*/