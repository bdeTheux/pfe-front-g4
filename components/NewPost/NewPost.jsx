import axios from "axios";
import e from "cors";
import { useState, useEffect } from "react";
import SelectCategories from "../Category/SelectCategories";
import { UploadIcon, RefreshIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";

const NewPost = ({ categories }) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [postNature, setPostNature] = useState("");
  const [price, setPrice] = useState("");
  const [campus, setCampus] = useState([]);
  const [token, setToken] = useState("");
  const [isGiven, setIsGiven] = useState(false);
  const [isSpin, setIsSpin] = useState(false);
  let uploadInput;
  const router = useRouter();

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  });
  let label = "Choisissez une catégorie";
  const submitPost = () => {
    setIsSpin(true);
    const formData = new FormData();
    formData.append("title", title);
    formData.append("category_id", category);
    formData.append("description", description);
    formData.append("post_nature", postNature);
    formData.append("price", price);
    let ins = document.getElementById("files").files.length;
    for (let x = 0; x < ins; x++) {
      formData.append("files", document.getElementById("files").files[x]);
    }
    formData.append("places", campus);
    axios({
      method: "post",
      url: process.env.customKey + "posts/",
      data: formData,
      headers: {
        "Content-Type": `multipart/form-data`,
        Authorization: token,
      },
    })
      .then(() => router.push("/"))
      .catch(function (err) {
        if (err.response) {
          setIsSpin(false);
          document.getElementById("newError").className =
            "bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative";
          document.getElementById("newError").innerText =
            err.response.data.description;
        }
      });
  };

  const handleCampus = (e) => {
    let city = e.target.value;
    setCampus((e) => {
      if (campus.includes(city)) {
        return campus.filter((e) => e != city);
      }

      return [...campus, city];
    });
  };

  const handlerCategory = (val) => {
    setCategory(val.target.value);
  };

  const handlePrice = (e) => {
    if (e.target.value === "À vendre") {
      setIsGiven(false);
    } else {
      setIsGiven(true);
      setPrice(0);
    }
    setPostNature(e.target.value);
  };
  return (
    <div className="flex h-screen bg-gray-100">
      <div className="m-auto">
        <div className="md:mt-20">
          <p className="text-4xl font-light pt-16">Annonce</p>
          <p id="newError"></p>

          <div className="mt-5 bg-white rounded-lg shadow">
            <div className="flex">
              <div className="flex-1 py-5 pl-5 overflow-hidden">
                <h1 className="inline text-2xl font-semibold leading-none">
                  Crée une annonce
                </h1>
              </div>
            </div>
            <form method="post" id="updateForm" className="">
              <div className="px-5 pb-5">
                <input
                  onChange={(val) => setTitle(val.target.value)}
                  name="title"
                  type="text"
                  placeholder="titre"
                  required
                  className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                />
                <SelectCategories
                  categories={categories}
                  setCategory={setCategory}
                  label={label}
                />
                <textarea
                  value={description}
                  onChange={(val) => setDescription(val.target.value)}
                  name="description"
                  rows="3"
                  placeholder="description"
                  required
                  className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                />
                <div className="flex">
                  <div className="flex-grow w-1/4 pr-2">
                    <input
                      value={price}
                      onChange={(val) => setPrice(val.target.value)}
                      name="price"
                      type="number"
                      placeholder="0.0€"
                      className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400 "
                      disabled={isGiven}
                      min={0}
                    />
                  </div>

                  <div className="flex-grow py-5">
                    <label> À vendre: </label>
                    <input
                      value={postNature}
                      onChange={handlePrice}
                      name="postNature"
                      type="radio"
                      value="À vendre"
                      required
                    />
                    <label> À donner: </label>
                    <input
                      value={postNature}
                      onChange={handlePrice}
                      name="postNature"
                      type="radio"
                      value="À donner"
                      required
                    />
                  </div>
                </div>

                <div className="flex-grow">
                  <label> Woluwe </label>
                  <input
                    value="Woluwe"
                    onChange={handleCampus}
                    name="postNature"
                    type="checkbox"
                    required
                  />
                  <label> Louvain-la-Neuve </label>
                  <input
                    value="Louvain-la-Neuve"
                    onChange={handleCampus}
                    name="postNature"
                    type="checkbox"
                    required
                  />
                  <label> Ixelles </label>
                  <input
                    value="Ixelles"
                    onChange={handleCampus}
                    name="postNature"
                    type="checkbox"
                    required
                  />
                </div>
                <br />
                <p className="font-mono text-sm">Images du produit / vidéo</p>

                <label className="flex flex-grow w-1/12 pr-2 ml-1.5 ">
                  <input
                    id="files"
                    name="files"
                    type="file"
                    ref={(ref) => {
                      uploadInput = ref;
                    }}
                    multiple
                    hidden
                    required
                    accept="image/*|video/*"
                  />
                  <UploadIcon className="" />
                </label>
              </div>

              <hr className="mt-4" />
              <div className="flex flex-row-reverse p-3">
                <div className="flex-initial pl-3">
                  <button
                    name="submitPost"
                    onClick={submitPost}
                    type="button"
                    className="flex items-center px-5 py-2.5 font-medium tracking-wide text-white capitalize   bg-black rounded-md hover:bg-gray-800  focus:outline-none focus:bg-gray-900  transition duration-300 transform active:scale-95 ease-in-out"
                    hidden={isSpin}
                    disabled={isSpin}
                  >
                    <RefreshIcon
                      hidden={!isSpin}
                      className="animate-spin h-10"
                    />
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 0 24 24"
                        width="24px"
                        fill="#FFFFFF"
                        hidden={isSpin}
                      >
                        <path d="M0 0h24v24H0V0z" fill="none"></path>
                        <path
                          d="M5 5v14h14V7.83L16.17 5H5zm7 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-8H6V6h9v4z"
                          opacity=".3"
                        ></path>
                        <path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm2 16H5V5h11.17L19 7.83V19zm-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zM6 6h9v4H6z"></path>
                      </svg>
                    </div>

                    <span className="pl-2 mx-1">Créer</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <p className="text-3xl text-center font-light pt-6">
          Votre annonce sera soumise à un modérateur.
          <br />
          Vous en serez notifié ! (upcoming)
        </p>
      </div>
    </div>
  );
};

export default NewPost;
