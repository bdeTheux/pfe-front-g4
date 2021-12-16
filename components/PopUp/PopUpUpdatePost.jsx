import Router from "next/router";
import React, { useEffect, useRef, useState } from "react";
import ReactDom from "react-dom";
import SelectCategories from "../Category/SelectCategories";
import { useRouter } from "next/router";

const PopUpUpdatePost = ({ token, post, setShow }) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [postNature, setPostNature] = useState("");
  const [places, setPlaces] = useState(post.places);
  const [categories, setCategories] = useState([]);
  const router = useRouter();

  const modalRef = useRef();
  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      setShow(false);
    }
  };
  useEffect(
    () =>
      fetch(`/api/categories/`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((temp) => setCategories(temp)),
    []
  );

  const handleUpdate = () => {
    if (title === "") title = post.title;
    if (category === "") category = post.category_id;
    if (description === "") description = post.description;
    if (price === "") price = post.price;
    if (postNature === "") postNature = post.post_nature;
    if (places === "") places = post.places;

    const updatedPost = {
      title: title,
      category_id: category,
      description: description,
      price: price,
      post_nature: postNature,
      places: places,
    };

    fetch(`/api/posts/${post._id}`, {
      method: "Put",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify(updatedPost),
    })
      .then((res) => {
        const data = res.json();
        return data;
      })
      .then(() => {
        setShow(false);
        router.reload(window.location.pathname);
      });
  };

  const handleCampus = (e) => {
    //places[places.length] = e.target.value;
    let city = e.target.value;
    setPlaces((e) => {
      if (places.includes(city)) {
        return places.filter((e) => e != city);
      }

      return [...places, city];
    });
  };

  const handleClose = () => {
    setPlaces(post.places);
    setShow(false);
    router.reload(window.location.pathname);
  };

  return ReactDom.createPortal(
    <div
      ref={modalRef}
      onClick={closeModal}
      className="fixed z-20 inset-0 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
        ></div>

        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle xl:w-2/3">
          <div className="bg-white max-w-screen-2xl px-4 pt-5 pb-4 md:p-4 sm:pb-4">
            <div className="md:flex md:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:ml-0 sm:text-left">
                <h3
                  className="text-lg leading-6 font-medium text-gray-900"
                  id="modal-title"
                >
                  Modifier les infos
                </h3>
                <div className="">
                  <form method="POST">
                    <input type="hidden" name="_method" value="put" />
                    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
                      <div className="text-center pb-12"></div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
                          <p className="text-sm text-gray-500">
                            Titre de l'annonce
                          </p>
                          <textarea
                            defaultValue={post.title}
                            onChange={(val) => setTitle(val.target.value)}
                            className="text-black placeholder-gray-800 px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-300  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                          />
                        </div>
                        <div className="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
                          <p className="text-sm text-gray-500">
                            Categorie de l'annonce
                          </p>
                          <SelectCategories
                            categories={categories}
                            setCategory={setCategory}
                            label={post.category_id}
                          />
                        </div>
                        <div className="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
                          <p className="text-sm text-gray-500">
                            Description de l'annonce
                          </p>
                          <textarea
                            onChange={(val) => setDescription(val.target.value)}
                            defaultValue={post.description}
                            className="text-black placeholder-gray-800 px-4 py-2.5 mx-3 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-300  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                          />
                        </div>
                        <div className="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
                          <p className="text-sm text-gray-500">
                            Prix de l'annonce
                          </p>
                          <input
                            type="number"
                            min="0"
                            onChange={(val) => setPrice(val.target.value)}
                            defaultValue={post.price}
                            className="text-black placeholder-gray-800 px-4 py-2.5 mx-3 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-300  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                          />
                        </div>
                        <div className="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
                          <p className="text-sm text-gray-500">
                            Nature de l'annonce
                          </p>

                          <div className="flex-grow">
                            <label> À vendre: </label>
                            <input
                              defaultChecked={post.post_nature.includes(
                                "À vendre"
                              )}
                              onChange={(val) =>
                                setPostNature(val.target.value)
                              }
                              name="postNature"
                              type="radio"
                              value="À vendre"
                              required
                            />
                            <label> À donner: </label>
                            <input
                              defaultChecked={post.post_nature.includes(
                                "À donner"
                              )}
                              onChange={(val) =>
                                setPostNature(val.target.value)
                              }
                              name="postNature"
                              type="radio"
                              value="À donner"
                              required
                            />
                          </div>
                        </div>
                        <div className="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
                          <p className="text-sm text-gray-500">
                            Campus de l'annonce
                          </p>
                          <div className="flex-grow">
                            <label> Woluwe </label>
                            <input
                              onChange={handleCampus}
                              value="Woluwe"
                              name="postNature"
                              type="checkbox"
                              required
                              defaultChecked={post.places.includes("Woluwe")}
                            />
                            <label> Louvain-la-Neuve </label>
                            <input
                              onChange={handleCampus}
                              value="Louvain-la-Neuve"
                              name="postNature"
                              type="checkbox"
                              defaultChecked={post.places.includes(
                                "Louvain-la-Neuve"
                              )}
                              required
                            />
                            <label> Ixelles </label>
                            <input
                              onChange={handleCampus}
                              value="Ixelles"
                              name="postNature"
                              type="checkbox"
                              defaultChecked={post.places.includes("Ixelles")}
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </section>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              onClick={handleUpdate}
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Mettre à jour
            </button>
            <button
              type="button"
              onClick={handleClose}
              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Annuler
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("link")
  );
};

export default PopUpUpdatePost;
