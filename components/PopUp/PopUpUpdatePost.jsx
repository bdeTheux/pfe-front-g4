import React, { useEffect, useRef, useState } from "react";
import ReactDom from "react-dom";

const PopUpUpdatePost = ({ setShow }) => {
    const [title, setTitle] = useState("")
    const [category, setCategory] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [priceNature, setPriceNature] = useState("")
    const [places, setPlaces] = useState([])

  const modalRef = useRef();
  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      setShow(false);
    }
  };

  return ReactDom.createPortal(
    <div
      ref={modalRef}
      onClick={closeModal}
      className="fixed z-10 inset-0 overflow-y-auto"
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
                    <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
                      <div class="text-center pb-12"></div>
                      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div class="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
                          <p className="text-sm text-gray-500">
                            Titre de l'annonce
                          </p>
                          <textarea
                            defaultValue="title"
                            className="text-black placeholder-gray-800 px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-300  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                          />
                        </div>
                        <div class="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
                          <p className="text-sm text-gray-500">
                            Categorie de l'annonce
                          </p>
                          <textarea
                            defaultValue="category"
                            className="text-black placeholder-gray-800 px-4 py-2.5 mx-3 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-300  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                          />
                        </div>
                        <div class="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
                          <p className="text-sm text-gray-500">
                            Description de l'annonce
                          </p>
                          <textarea
                            defaultValue="description"
                            className="text-black placeholder-gray-800 px-4 py-2.5 mx-3 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-300  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                          />
                        </div>
                        <div class="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
                          <p className="text-sm text-gray-500">
                            Prix de l'annonce
                          </p>
                          <textarea
                            defaultValue="price"
                            className="text-black placeholder-gray-800 px-4 py-2.5 mx-3 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-300  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                          />
                        </div>
                        <div class="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
                          <p className="text-sm text-gray-500">
                            Nature de l'annonce
                          </p>
                          <textarea
                            defaultValue="price_nature"
                            className="text-black placeholder-gray-800 px-4 py-2.5 mx-3 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-300  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                          />
                        </div>
                        <div class="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
                          <p className="text-sm text-gray-500">
                            Campus de l'annonce
                          </p>
                          <textarea
                            defaultValue="places"
                            className="text-black placeholder-gray-800 px-4 py-2.5 mx-3 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-300  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                          />
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
              onClick={() => setShow(false)}
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Mettre à jour
            </button>
            <button
              type="button"
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

/* 

<div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/6 mb-4 ">

<p className="text-sm text-gray-500">
                            Titre de l'annonce
                          </p>
                          <textarea
                            defaultValue="title"
                            className="text-black placeholder-gray-800 px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-300  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                          />
                            <p className="text-sm text-gray-500">
                              Categorie de l'annonce
                            </p>
                            <textarea
                              defaultValue="category"
                              className="text-black placeholder-gray-800 px-4 py-2.5 mx-3 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-300  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                            />

                        <p className="text-sm text-gray-500">
                          Description de l'annonce
                        </p>
                        <textarea
                          defaultValue="description"
                          className="text-black placeholder-gray-800 px-4 py-2.5 mx-3 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-300  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                        />
                      </div>
                      <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/6 mb-4 ">
                        <p className="text-sm text-gray-500">
                          Prix de l'annonce
                        </p>
                        <textarea
                          defaultValue="price"
                          className="text-black placeholder-gray-800 px-4 py-2.5 mx-3 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-300  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                        />
                      </div>
                      <div className="flex w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/6 mb-4 ">
                        <p className="text-sm text-gray-500">
                          Nature de l'annonce
                        </p>
                        <textarea
                          defaultValue="price_nature"
                          className="text-black placeholder-gray-800 px-4 py-2.5 mx-3 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-300  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                        />
                      </div>
                      <div className="flex-1 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 ">
                        <p className="text-sm text-gray-500">
                          Campus de l'annonce
                        </p>
                        <textarea
                          defaultValue="places"
                          className="text-black placeholder-gray-800 px-4 py-2.5 mx-3 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-300  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                        />
                      </div>

*/
