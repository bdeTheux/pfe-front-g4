import { useState } from "react";
import LiCategory from "../Category/LiCategory";
import SelectCategories from "../Category/SelectCategories"


const CategoryPage = ({ categories }) => {
  const [categoryName, setCategoryName] = useState("");
  const [categoryParent, setCategoryParent] = useState("")

  console.log(typeof categories);

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="m-auto">
        <div>
          <p className="text-4xl font-light pt-16">Gestion</p>

          <div className="mt-5 bg-white rounded-lg shadow">
            <div className="flex">
              <div className="flex-1 py-5 pl-5 overflow-hidden">
                <h1 className="inline text-2xl font-semibold leading-none">
                  Ajouter
                </h1>
              </div>
            </div>
            <div className="px-5 pb-5">
              <form method="post">
                <div className="flex">
                  <div className="flex-grow w-1/4 pr-2">
                    <input
                      onChange={(val) => setCategoryName(val.target.value)}
                      name="title"
                      type="text"
                      placeholder="Nom"
                      required
                      className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                    />
                  </div>
                  <div className="flex-grow w-1/4 pr-2">
                  <SelectCategories categories={categories} setCategory={setCategoryParent}/>
                  </div>

                  <hr className="mt-4" />
                  <div className="flex flex-row-reverse p-3">
                    <div className="flex-initial pl-3">
                      <button
                        name="submitPost"
                        type="button"
                        className="flex items-center px-5 py-2.5 font-medium tracking-wide text-white capitalize   bg-black rounded-md hover:bg-gray-800  focus:outline-none focus:bg-gray-900  transition duration-300 transform active:scale-95 ease-in-out"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="24px"
                          viewBox="0 0 24 24"
                          width="24px"
                          fill="#FFFFFF"
                        >
                          <path d="M0 0h24v24H0V0z" fill="none"></path>
                          <path
                            d="M5 5v14h14V7.83L16.17 5H5zm7 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-8H6V6h9v4z"
                            opacity=".3"
                          ></path>
                          <path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm2 16H5V5h11.17L19 7.83V19zm-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zM6 6h9v4H6z"></path>
                        </svg>
                        <span className="pl-2 mx-1">Créer</span>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
              <div className="flex-1 py-5 overflow-hidden">
                <h1 className="inline text-2xl font-semibold leading-none">
                  Liste
                </h1>
              </div>

              <div className="">
                <div name="categories" required className="flex flex-col">
                  {Object.keys(categories).map(function (key) {
                    return <LiCategory category={categories[key]} key={key} />;
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="text-4xl text-center font-light pt-16">
          Votre annonce sera soumise à un modérateur.
          <br />
          Vous en serez notifié !
        </p>
      </div>
    </div>
  );
};

export default CategoryPage;
