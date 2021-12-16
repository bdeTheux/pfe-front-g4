import Image from "next/image";

const Carousel = ({ images }) => {
  const imagesSlice = images.slice(1 - images.length);

  return (
    <div className="flex ">
      <div>
        <div>
          <div id="loop" className="">
            <div className="absolute">
              <input
                className="sr-only peer"
                type="radio"
                name="carousel"
                id="first"
                defaultChecked
              />
              <div className="w-80 md:w-96 bg-white aspect-w-16  aspect-h-9  rounded-lg shadow-lg transition-all duration-300 opacity-0 peer-checked:opacity-100 peer-checked:z-10 z-0">
                <img
                  src={images[0]}
                  alt="Image du produit"
                  layout="fill"
                  className=" w-full md:object-scale-down object-contain object-center rounded border border-gray-200"
                />

                <div className=" w-full flex justify-between z-20">
                  <label
                    htmlFor={
                      imagesSlice.length <= 0 ? "first" : imagesSlice.length - 1
                    }
                    className="inline-block self-center text-yellow-600 cursor-pointer -translate-x-5 bg-white rounded-full shadow-md active:translate-y-0.5"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </label>
                  <label
                    htmlFor={imagesSlice.length <= 0 ? "first" : 0}
                    className="inline-block self-center text-yellow-600 cursor-pointer translate-x-5 bg-white rounded-full shadow-md active:translate-y-0.5"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </label>
                </div>
              </div>
            </div>
            {imagesSlice.map((image, index) => (
              <div className="absolute" key={index}>
                <input
                  className="sr-only peer"
                  type="radio"
                  name="carousel"
                  id={index}
                />
                <div className="w-80 md:w-96 bg-white  aspect-w-16 aspect-h-9  rounded-lg shadow-lg transition-all duration-300 opacity-0 peer-checked:opacity-100 peer-checked:z-10 z-0">
                  <img
                    alt="Image du produit"
                    className=" w-full md:object-scale-down object-contain object-center rounded border border-gray-200"
                    src={image}
                  />

                  <div className=" w-full flex justify-between z-20">
                    <label
                      htmlFor={index == 0 ? "first" : index - 1}
                      className="inline-block self-center text-yellow-600 cursor-pointer -translate-x-5 bg-white rounded-full shadow-md active:translate-y-0.5"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-10"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </label>
                    <label
                      htmlFor={
                        index == imagesSlice.length - 1 ? "first" : index + 1
                      }
                      className="inline-block self-center text-yellow-600 cursor-pointer translate-x-5 bg-white rounded-full shadow-md active:translate-y-0.5"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-10"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </label>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Carousel;

/**       <script src="https://unpkg.com/tailwindcss-jit-cdn"></script>
 */
