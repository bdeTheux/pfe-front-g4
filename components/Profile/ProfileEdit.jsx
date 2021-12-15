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
//Utility////////////////////////////////////////////
const confirmChanges = (router) => {
  alert("confirmChanges : TODO");
};

const cancelChanges = (router) => {
  router.push("/profile");
};


const campuses = ["Woluwe", "Louvain-La-Neuve", "Ixelles"];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

//End Utility////////////////////////////////////////
///////////////////////////////////////////////////////////////

const ProfileEdit = ({ user }) => {
  let [isOpen, setIsOpen] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [campus, setCampus] = useState(campuses[0]);
  const [password, setPassword] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordCheck, setNewPasswordCheck] = useState("");

  const changePasswords = (e) => {
      e.preventDefault()
    fetch(`/api/users/changepassword`, {
      method: "POST",
      body: JSON.stringify({
          current_password: currentPassword,
          new_password: newPassword,
          new_password_check: newPasswordCheck}),
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    }).then((response)=> {
      if (response.status !== 200){
        console.log(response)
      }
      else
          console.log(response)
        //return response.json()
    })
        .then((json) => {
          //router.reload()
        }

    )
  }

  const router = useRouter();

  const onEdit = async () => {
      //TODO usiliser les set**
    if (firstName === "") firstName = user.first_name;
    if (lastName === "") lastName = user.last_name;
    if (email === "") email = user.email;
    if (campus === "") campus = user.campus;
    if (password === "") password = user.password;

    const newInfos = {
      _id: user._id,
      first_name: firstName,
      last_name: lastName,
      email: email,
      campus: campus,
      password: password,
    };
    console.log(newInfos);
    const res = await fetch(`/api/users/edit`, {
      method: "PUT",
      body: JSON.stringify(newInfos, user._id),
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    });
    const data = await res.json();
    console.log(data);
    if (res.status !== 401) {
      router.push("/profile");
    } else {
      alert("Le mot-de-passe entré est incorrect ! Veuillez réessayer svp")
    }
  };

  console.log("user", user);
  //setPassword
  /*
  const onVerify = async () => {
    console.log("email", user.email)
    const loginUser = {
      email: user.email,
      password: password,
    };

    const res = await fetch("/api/login/", {
      method: "POST",
      body: JSON.stringify(loginUser),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    console.log("data", data);
    if (data.description) {
      localStorage.setItem("error", data.description);
    } else {
      localStorage.setItem("error", "none");
    }
    if (res.status == 200) {
      localStorage.setItem("token", data.token);
      //router.push("/profile"); //management/management
      console.log("error");
      //setTimeout(() => {router.reload();}, 500);
    }
  };
  */

  const handleContainer = async () => {
    onVerify().then(() => onEdit());
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
              defaultValue={user.first_name}
              onChange={(e) => {
                console.log("firstname", e.target.value);
                setFirstName(e.target.value);
              }}
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
              defaultValue={user.last_name}
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
              defaultValue={user.email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="relative p-2 rounded-md">
            <Listbox
              value={selected}
              onChange={(e) => {
                console.log("targeeeet", e);
                setSelected(e);
                setCampus(e);
              }}
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
                    <div className="grid grid-cols-3 space-x-2 ">
                      <p className="text-xs text-gray-500 p-2 md:p-4 italic col-span-2 select-none">
                        Sera remplacé par
                      </p>
                      <ArrowNarrowRightIcon className="h-7 w-7 mt-2.5" />
                    </div>

                    <div className="mt-1 relative">
                      <Listbox.Button className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm  py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                        <span className="flex items-center">
                          <span className="ml-3 block truncate">
                            {() => {
                              setSelected(user.campus);
                            }}
                            {selected}
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
                              value={campus}
                              key={campus}
                              className={({ active }) =>
                                classNames(
                                  active
                                    ? "text-white bg-indigo-600"
                                    : "text-gray-900",
                                  "cursor-default select-none relative py-2 pl-3 pr-9"
                                )
                              }
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
                                      {campus}
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
          <Button onClick={() => setIsOpen(true)} color={`green`}>
            Confirmer
            <CheckIcon className="text-white h-5 w-5 mt-0.5 ml-2" />
          </Button>
          <Button onClick={() => cancelChanges(router)} color={`red`}>
            Annuler
            <XIcon className="text-white h-5 w-5 mt-0.5 ml-2" />
          </Button>
        </div>
      </Tab.Panel>


        <form method="POST">
          <label
              htmlFor="current_password"
              className="text-sm font-medium text-xs font-black text-gray-600 leading-5"
          >
            Mot-de-passe
          </label>
          <input
              type="password"
              name="current_password"
              id="current_password"
              autoComplete="current-password"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 w-full sm:text-sm border-gray-300 rounded-md"
              onChange={(e) => setCurrentPassword(e.target.value)}
          />
          <label
              htmlFor="new_password"
              className="text-sm font-medium text-xs font-black text-gray-600 leading-5"
          >
            Nouveau mot-de-passe
          </label>
          <input
              type="password"
              name="new_password"
              id="new_password"
              autoComplete="current-password"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 w-full sm:text-sm border-gray-300 rounded-md"
              onChange={(e) => setNewPassword(e.target.value)}
          />
          <label
              htmlFor="new_password_check"
              className="text-sm font-medium text-xs font-black text-gray-600 leading-5"
          >
            Confirmation nouveau mot-de-passe
          </label>
          <input
              type="password"
              name="new_password_check"
              id="new_password_check"
              autoComplete="current-password"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 w-full sm:text-sm border-gray-300 rounded-md"
              onChange={(e) => setNewPasswordCheck(e.target.value)}
          />
          <Button onClick={changePasswords} color={`green`}>
            Confirmer
            <CheckIcon className="text-white h-5 w-5 mt-0.5 ml-2" />
          </Button>
        </form>


      {/* ---------------------------------------------------------------------------------------------------------------- */}

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={() => setIsOpen(false)}
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
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </form>

                <div className="mt-4 flex flex-row space-x-2">
                  <Button onClick={() => setIsOpen(false)} color="red">
                    <ArrowNarrowLeftIcon className="text-white h-4 w-4 mr-2" />
                    Retour
                  </Button>
                  <Button onClick={() => onEdit()} color="green">
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
