import { PencilIcon, TrashIcon } from "@heroicons/react/outline";
import { useState, useEffect } from "react";

const LiCategory = ({category}) => {

  const [token, setToken] = useState("")

  useEffect(() => {
    setToken(localStorage.getItem('token'))
})
  const handleDelete = async () => {
    const res = await fetch(`https://pfe-back-g4-dev.herokuapp.com/categories/${category.name}`, {
      method : 'DELETE',
      headers :{
        Authorization : token,
      }
    })
  }

    return (
        <div
          key={category}
          className="flex text-black placeholder-gray-600 w-1/2 px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
        >
          <div className="flex-col">
           <p> Nom: {category.name} </p><br/>
           <p>Parent: {category.parent}</p>
          </div>
         

          <div className="flex-initial pl-3 mt-2">
            <button onClick={handleDelete} className="p-0 w-12 h-12 bg-gray-700 rounded-full hover:bg-gray-800 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none">
              <TrashIcon className="flex ml-3 w-6 text-gray-100" />
            </button>
          </div>
          <div className="flex-initial pl-3 mt-2">
            <button className="p-0 w-12 h-12 bg-gray-700 rounded-full hover:bg-gray-800 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none">
              <PencilIcon className="flex ml-3 w-6 text-gray-100" />
            </button>
          </div>
        </div>
      );
}

export default LiCategory

