import Link from "next/link";
import {
    ArrowNarrowLeftIcon,
  ArrowNarrowRightIcon,
  CheckIcon,
  XIcon,
} from "@heroicons/react/outline";
import Button from "../Button/Button";
import { useRouter } from "next/router";
import { Fragment, useState, useEffect } from "react";
import { Listbox, Transition, Tab, Dialog } from "@headlessui/react";
import { SelectorIcon } from "@heroicons/react/solid";

////////////////////////////////////////////////////////////////
//Utility functions////////////////////////////////////////////
const confirmChanges = (router) => {
  alert("confirmChanges : TODO");
};

const cancelChanges = (router) => {
  router.push("/profile");
};

const campuses = [
  {
    name: "Woluwe",
  },
  {
    name: "Louvain-La-Neuve",
  },
  {
    name: "Ixelles",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
//End Utility functions////////////////////////////////////////

const ProfileEdit = ({ user }) => {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [campus, setCampus] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const onEdit = async () => {
    const newInfos = {
      _id: user._id,
      first_name: firstName,
      last_name: lastName,
      email: email,
      campus: campus,
      password: password,
    };

    const res = await fetch(`/api/users/${user._id}`, {
      method: "PUT",
      body: JSON.stringify(newInfos, user._id),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    if (res.status != 401) {
      router.push("/");
    } else {
      alert("Error 401: request failed");
    }
  };

  const [selected, setSelected] = useState(campuses[0]);

  console.log("selected", selected);
  console.log("user.campus", user.campus);

  return (
    <>
      <Tab.Panel className="bg-white rounded-xl p-2 focus:outline-none ring-1 ring-offset-1 ring-offset-indigo-400 ring-white ring-opacity-60">
        <form method="POST">
          <div className="relative p-2 rounded-md">
            <label
              htmlFor="first-name"
              className="text-sm font-medium text-xs font-black text-gray-600 leading-5"
            >
              Prénom
            </label>
            <input
              type="text"
              name="first-name"
              id="first-name"
              autoComplete="given-name"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 w-full sm:text-sm border-gray-300 rounded-md"
              value={user.first_name}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="relative p-2 rounded-md">
            <label
              htmlFor="family-name"
              className="text-sm font-medium text-xs font-black text-gray-600 leading-5"
            >
              Nom
            </label>
            <input
              type="text"
              name="family-name"
              id="family-name"
              autoComplete="family-name"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 w-full sm:text-sm border-gray-300 rounded-md"
              value={user.last_name}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="relative p-2 rounded-md">
            <label
              htmlFor="email"
              className="text-sm font-medium text-xs font-black text-gray-600 leading-5"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="email"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 w-full sm:text-sm border-gray-300 rounded-md"
              value={user.email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="relative p-2 rounded-md">
            <Listbox
              value={selected}
              onChange={(e) => setCampus(e.target.value)}
            >
              {({ open }) => (
                <>
                  <Listbox.Label className="text-sm font-medium text-xs font-black text-gray-600 leading-5">
                    Campus
                  </Listbox.Label>
                  <div className="grid grid-cols-3">
                    <p className="flex mt-2 space-x-1 font-normal leading-4 text-gray-700 p-2">
                      {user.campus}
                    </p>
                    <ArrowNarrowRightIcon className="h-7 w-7 mt-2.5" />
                    <div className="mt-1 relative">
                      <Listbox.Button className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm  py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                        <span className="flex items-center">
                          <span className="ml-3 block truncate">
                            {() => {
                              setSelected(user.campus);
                            }}
                            {selected.name}
                          </span>
                        </span>
                        <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                          <SelectorIcon
                            className="h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                        </span>
                      </Listbox.Button>

                      <Transition
                        show={open}
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                          {campuses.map((campus) => (
                            <Listbox.Option
                              key={campus.name}
                              className={({ active }) =>
                                classNames(
                                  active
                                    ? "text-white bg-indigo-600"
                                    : "text-gray-900",
                                  "cursor-default select-none relative py-2 pl-3 pr-9"
                                )
                              }
                              value={campus}
                            >
                              {({ selected, active }) => (
                                <>
                                  <div className="flex items-center">
                                    <span
                                      className={classNames(
                                        selected
                                          ? "font-semibold"
                                          : "font-normal",
                                        "ml-3 block truncate"
                                      )}
                                    >
                                      {campus.name}
                                    </span>
                                  </div>

                                  {selected ? (
                                    <span
                                      className={classNames(
                                        active
                                          ? "text-white"
                                          : "text-indigo-600",
                                        "absolute inset-y-0 right-0 flex items-center pr-4"
                                      )}
                                    >
                                      <CheckIcon
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                      />
                                    </span>
                                  ) : null}
                                </>
                              )}
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </div>
                </>
              )}
            </Listbox>
          </div>
        </form>
        <div className="mt-5 grid grid-cols-2">
          <Button onClick={openModal} color={`green`}>
            Confirmer
            <CheckIcon className="text-white h-5 w-5 mt-0.5 ml-2" />
          </Button>
          <Button onClick={() => cancelChanges(router)} color={`red`}>
            Annuler
            <XIcon className="text-white h-5 w-5 mt-0.5 ml-2" />
          </Button>
        </div>
      </Tab.Panel>

      {/* ---------------------------------------------------------------------------------------------------------------- */}

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Entrez votre mot-de-passe pour confirmer
                </Dialog.Title>
                <form className="relative p-2 rounded-md" method="POST">
                  <label
                    htmlFor="password"
                    className="text-sm font-medium text-xs font-black text-gray-600 leading-5"
                  >
                    Mot-de-passe
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    autoComplete="current-password"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 w-full sm:text-sm border-gray-300 rounded-md"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </form>

                <div className="mt-4 flex flex-row space-x-2">
                  <Button onClick={closeModal} color="red">
                    <ArrowNarrowLeftIcon className="text-white h-4 w-4 mr-2" />
                    Retour
                  </Button>
                  <Button onClick={() => confirmChanges(router)} color="green">
                    Accepter
                    <CheckIcon className="text-white h-5 w-5 mt-0.5 ml-2" />
                  </Button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default ProfileEdit;
