import Link from "next/link";

const Navbar = () => {
  return (
    <header
      className="
    bg-white
    border-b
    dark:bg-gray-900 dark:border-gray-700
    lg:fixed lg:w-full lg:top-0 lg:left-0 lg:z-40
  "
    >
      <div
        className="
      container
      px-4
      py-5
      mx-auto
      space-y-4
      lg:space-y-0 lg:flex lg:items-center lg:justify-between lg:space-x-10
    "
      >
        <div className="flex justify-between">
        <Link href="/">
              <a className="text-primary border border-gray-200 font-semibold lg:hidden px-4 rounded-md py-2 hover:bg-gray-200">
                Let's swipe?
              </a>
            </Link>
          <Link href="/">
            <a className="text-gray-800 dark:text-gray-200">
              <div className="flex items-center">
                <p className="text-xl ml-2">vincimarket</p>
              </div>
            </a>
          </Link>
          
          <div className="flex items-center space-x-2 lg:hidden">
            <button className="p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 focus:bg-gray-100 dark:focus:bg-gray-800 focus:outline-none">
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-6 h-6 text-gray-700 dark:text-gray-300"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="flex flex-col space-y-4 lg:hidden">
          <div
            className="
          flex flex-col
          space-y-3
          lg:space-y-0 lg:flex-row lg:space-x-6
          xl:space-x-8
          lg:items-center
        "
          >
            <Link href="/">
              <a className="text-gray-500 dark:text-gray-200 hover:text-gray-800">
                Something
              </a>
            </Link>
            <div className="relative inline-block hidden lg:block">
              <div>
                <button
                  className="
                text-primary
                font-semibold
                flex
                items-center
                space-x-1
                focus:outline-none
                border 
                border-gray-200
                hover:bg-gray-200
              "
                >
                  <span>Let's swipe?</span>
                </button>
              </div>
            </div>
          </div>
          <div
            className="
          flex flex-col
          space-y-4
          lg:space-y-0 lg:flex-row lg:items-center lg:space-x-4
        "
          >
            <form
              className="flex flex-wrap justify-between pt-2 relative mx-auto text-gray-600 md:flex-row "
              action="/search"
            >
              <input
                className="w-96 border-2 border-gray-300 bg-white h-12 px-5 lg:w-20 xl:w-36 xl:focus:w-44 lg:h-10 pr-16 rounded-lg text-sm focus:outline-none focus:ring-gray-400 focus:ring-1"
                type="search"
                name="search"
                placeholder="Rechercher"
              />
              <button
                type="submit"
                className="absolute right-0 top-0 mt-5 mr-4"
              >
                <svg
                  className="text-gray-600 h-5 w-5 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  id="Capa_1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 56.966 56.966"
                  xmlSpace="preserve"
                  width="512px"
                  height="512px"
                >
                  <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                </svg>
              </button>
            </form>
            <Link href="/newPost">
              <a
                className="
            flex
            items-center
            justify-center
            h-12
            px-4
            text-sm
            font-semibold
            text-center text-white
            rounded-md
            lg:h-10
            bg-green-500
            hover:bg-green-300
          "
              >
                Publier une annonce
              </a>
            </Link>
            <Link href="/login">
              <a
                className="
            flex
            items-center
            justify-center
            h-12
            px-4
            mt-2
            text-sm text-center text-gray-600
            transition-colors
            duration-200
            transform
            border
            rounded-lg
            lg:h-10
            dark:text-gray-300 dark:border-gray-300
            hover:bg-gray-100
            dark:hover:bg-gray-700
            focus:outline-none
          "
              >
                Inscription/Connexion
              </a>
            </Link>
          </div>
        </div>
        <div
          className="
        hidden
        lg:flex
        lg:flex-row
        lg:items-center
        lg:justify-between
        lg:flex-1
        lg:space-x-2
      "
        >
          <div
            className="
          flex flex-col
          space-y-3
          lg:space-y-0 lg:flex-row lg:space-x-6
          xl:space-x-8
          lg:items-center
        "
          >
            <Link href="/">
              <a className="text-primary border border-gray-200 font-semibold px-4 rounded-md py-2 hover:bg-gray-200">
                Let's swipe?
              </a>
            </Link>
            <Link href="/">
              <a className="text-gray-500 dark:text-gray-200 hover:text-gray-800">
                Something
              </a>
            </Link>
          </div>
          <div
            className="
          flex flex-col
          space-y-4
          lg:space-y-0 lg:flex-row lg:items-center lg:space-x-4
        "
          >
            <div className="pt-2 relative mx-auto text-gray-600 bottom-1">
              <input
                className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm w-96 focus:outline-none focus:ring-gray-400 focus:ring-1"
                type="search"
                name="search"
                placeholder="Rechercher"
              />
              <button
                type="submit"
                className="absolute right-0 top-0 mt-5 mr-4"
              >
                <svg
                  className="text-gray-600 h-4 w-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  id="Capa_1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 56.966 56.966"
                  xmlSpace="preserve"
                  width="512px"
                  height="512px"
                >
                  <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                </svg>
              </button>
            </div>
            <Link href="/newPost">
              <a
                className="
            flex
            items-center
            justify-center
            h-12
            px-4
            text-sm
            font-semibold
            text-center text-white
            rounded-md
            lg:h-10
            bg-green-500
            hover:bg-green-300
          "
              >
                Publier une annonce
              </a>
            </Link>
            <Link href="/login">
              <a
                className="
            flex
            items-center
            justify-center
            h-12
            px-4
            text-sm text-center text-gray-600
            transition-colors
            duration-200
            transform
            border
            rounded-md
            lg:h-10
            dark:text-gray-300 dark:border-gray-300
            hover:bg-gray-100
            dark:hover:bg-gray-700
            focus:outline-none
          "
              >
                S'inscrire / Se connecter
              </a>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
