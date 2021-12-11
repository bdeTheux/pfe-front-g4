import { Tab } from "@headlessui/react";
import Link from "next/link";
import { PencilIcon } from "@heroicons/react/solid";

const Profile = ({currentUser}) =>{
    return(
        <Tab.Panel className="bg-white rounded-xl p-2 focus:outline-none ring-1 ring-offset-1 ring-offset-indigo-400 ring-white ring-opacity-60">
            <div className="absolute z-30 p-2 rounded-md md:right-36 lg:right-96">
              <Link href="/editUser">
                <span className="hidden sm:block">
                  <a
                    type="button"
                    className="select-none inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-indigo-500"
                  >
                    <PencilIcon
                      className="-ml-1 mr-2 h-5 w-5 text-gray-500"
                      aria-hidden="true"
                    />
                    Editer
                  </a>
                </span>
              </Link>
            </div>
            <ul>
              <li className="relative p-2 rounded-md">
                <h3 className="text-sm font-medium text-xs font-black text-gray-600 leading-5">
                  Prénom
                </h3>
                <p className="flex mt-1 space-x-1 font-normal leading-4 text-gray-700">
                  {currentUser.firstName}
                </p>
              </li>
              <li className="relative p-2 rounded-md">
                <h3 className="text-sm font-medium text-xs font-black text-gray-600 leading-5">
                  Nom
                </h3>
                <p className="flex mt-1 space-x-1 font-normal leading-4 text-gray-700">
                  {currentUser.lastName}
                </p>
              </li>
              <li className="relative p-2 rounded-md">
                <h3 className="text-sm font-medium text-xs font-black text-gray-600 leading-5">
                  Email
                </h3>
                <p className="flex mt-1 space-x-1 font-normal leading-4 text-gray-700">
                  {currentUser.email}
                </p>
              </li>
              <li className="relative p-2 rounded-md">
                <h3 className="text-sm font-medium text-xs font-black text-gray-600 leading-5">
                  Campus
                </h3>
                <p className="flex mt-1 space-x-1 font-normal leading-4 text-gray-700">
                  {currentUser.campus}
                </p>
              </li>
            </ul>
          </Tab.Panel>
    )
}

export default Profile;