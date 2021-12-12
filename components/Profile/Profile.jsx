import { Tab } from "@headlessui/react";
import Link from "next/link";
import { PencilIcon } from "@heroicons/react/solid";
import { LogoutIcon } from "@heroicons/react/outline";
import Button from "../Button/Button";
import { useRouter } from "next/router";

const logout = (router) => {
  localStorage.clear();
  router.push("/");
    router.reload();

};

const userTest = {
  first_name: "Samy",
  last_name: "Alliche",
  email: "samy.alliche@student.vinci.be",
  campus: "Woluwe",
};

const Profile = ({ user }) => {
  const router = useRouter();

  return (
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
            {user.first_name}
          </p>
        </li>
        <li className="relative p-2 rounded-md">
          <h3 className="text-sm font-medium text-xs font-black text-gray-600 leading-5">
            Nom
          </h3>
          <p className="flex mt-1 space-x-1 font-normal leading-4 text-gray-700">
            {user.last_name}
          </p>
        </li>
        <li className="relative p-2 rounded-md">
          <h3 className="text-sm font-medium text-xs font-black text-gray-600 leading-5">
            Email
          </h3>
          <p className="flex mt-1 space-x-1 font-normal leading-4 text-gray-700">
            {user.email}
          </p>
        </li>
        <li className="relative p-2 rounded-md">
          <h3 className="text-sm font-medium text-xs font-black text-gray-600 leading-5">
            Campus
          </h3>
          <p className="flex mt-1 space-x-1 font-normal leading-4 text-gray-700">
            {user.campus}
          </p>
        </li>
      </ul>
      <div className="mt-5">
        <Button onClick={() => logout(router)} color={`red`}>
          Log-Out
          <LogoutIcon className="text-white h-5 w-5 mt-0.5 ml-2" />
        </Button>
      </div>
    </Tab.Panel>
  );
};

export default Profile;
