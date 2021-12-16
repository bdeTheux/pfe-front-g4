import { KeyIcon, MenuIcon, SearchIcon } from "@heroicons/react/outline";
import { HeartIcon, UserCircleIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useState } from "react";
import { Transition } from "@headlessui/react";


import Link from "next/link";

const NavbarAdmin = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className="
    bg-white
    border-b
    dark:bg-gray-900 dark:border-gray-700
    lg:fixed sticky lg:w-full lg:top-0 lg:left-0 lg:z-40
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
          <Link href="/discover">
            <a className="text-primary border border-gray-200 font-semibold lg:hidden px-4 rounded-md py-2 hover:bg-gray-200">
              Let's swipe?
            </a>
          </Link>
          <Link href="/">
            <a className="text-gray-800 dark:text-gray-200">
              <div className="flex items-center md:ml-8 mr-12 md:mr-auto">
                <Image
                  src="/images/vincimarket_logo (1).svg"
                  width="65"
                  height="65"
                  className="mr-4"
                />
                <p className="text-xl ml-3 hidden md:block font-mono tracking-widest text-yellow-600"><strong className="text-black">bee</strong>found</p>
              </div>
            </a>
          </Link>

          <div className="flex items-center space-x-2 lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 active:bg-gray-100 dark:active:bg-gray-800 focus:outline-none transition ease-in-out duration-150"
            >
              <MenuIcon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </button>
          </div>
        </div>
        <Transition
          show={isOpen}
          enter="transition ease-in-out delay-150 duration-500 transform"
          enterFrom="-translate-x-full"
          enterTo="translate-x-0"
          leave="transition ease-in-out delay-150 duration-500 transform"
          leaveFrom="translate-x-0"
          leaveTo="-translate-x-full"
        >
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
              <div className="relative hidden lg:block">
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
                  placeholder="Choisissez-nous pour faire une recherche ! ;)"
                />
                <button
                  type="submit"
                  className="absolute right-0 top-0 mt-5 mr-4"
                >
                  <SearchIcon className="text-gray-600 h-5 w-5" />
                </button>
              </form>
              <div className="inline-grid grid-cols-5">
                <Link href="/newPost">
                  <a
                    className="
            flex
            items-center
            justify-center
            h-12
            px-4
            text-xs
            font-semibold
            text-center text-white
            rounded-md
            lg:h-10
            bg-green-500
            hover:bg-green-300
            col-span-2
            mr-2
          "
                  >
                    Publier une annonce
                  </a>
                </Link>
                <Link href="/management">
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
            bg-yellow-500
            rounded-md
            lg:h-10
            hover:bg-yellow-300
            dark:hover:bg-yellow-700
            focus:outline-none
            mr-2
          "
                  >
                    <KeyIcon className="h-8 w-8 text-white" />
                  </a>
                </Link>
                <Link href="/favourites">
                  <a
                    className="flex
            items-center
            justify-center
            h-12
            px-4
            text-sm text-center text-gray-600
            transition-colors
            duration-200
            transform
            rounded-lg
            lg:h-10
            group
            hover:bg-red-50
            dark:hover:bg-gray-700
            focus:outline-none"
                  >
                    <HeartIcon className="h-8 w-8 text-gray-600 mr-2 group-hover:text-red-600" />
                  </a>
                </Link>
                <Link href="/profile">
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
            rounded-md
            lg:h-10
            hover:bg-gray-200
            dark:hover:bg-gray-700
            focus:outline-none
          "
                  >
                    <UserCircleIcon className="h-10 w-10 text-gray-600 mr-2" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </Transition>
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
            <Link href="/discover">
              <a className="text-primary border border-gray-200 font-semibold px-4 rounded-lg md:py-2 py-5 hover:bg-gray-200">
                Let's swipe?
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
                placeholder="Choisissez-nous pour faire une recherche ! ;)"
              />
              <button
                type="submit"
                className="absolute right-0 top-0 mt-5 mr-4"
              >
                <SearchIcon className="text-gray-600 h-4 w-4" />
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
            text-xs
            font-semibold
            text-center text-white
            rounded-md
            lg:h-10
            bg-green-500
            hover:bg-green-300
            col-span-2
            mr-2
          "
              >
                Publier une annonce
              </a>
            </Link>
            <Link href="/management">
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
            bg-yellow-500
            rounded-md
            lg:h-10
            hover:bg-yellow-300
            dark:hover:bg-yellow-700
            focus:outline-none
            mr-2
          "
              >
                <KeyIcon className="h-7 w-7 text-white" />
              </a>
            </Link>
            <Link href="/favourites">
              <a
                className="flex
            items-center
            justify-center
            h-12
            px-4
            text-sm text-center text-gray-600
            transition-colors
            duration-200
            transform
            rounded-lg
            lg:h-10
            group
            hover:bg-red-50
            dark:hover:bg-gray-700
            focus:outline-none"
              >
                <HeartIcon className="h-8 w-8 text-gray-600 mr-2 group-hover:text-red-600" />
              </a>
            </Link>
            <Link href="/profile">
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
            rounded-md
            lg:h-10
            hover:bg-gray-200
            dark:hover:bg-gray-700
            focus:outline-none
          "
              >
                <UserCircleIcon className="h-10 w-10 text-gray-600" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavbarAdmin;
