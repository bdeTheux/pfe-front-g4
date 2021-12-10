import MembersList from "../MembersList/MembersList";
import { Tab } from "@headlessui/react";
import { useAppContext } from "../../context/AppContext";
import { useEffect } from "react";

const Management = ({ users }) => {
  /*const [appState, setAppState] = useAppContext();
  useEffect(() => {
    console.log(localStorage.getItem("token"));
  }, [appState.token]);
  console.log(appState.token);
  console.log(localStorage.getItem("token"));
  const [appState, setAppState] = useAppContext();
  console.log(appState);
  const resUsers = await fetch("https://pfe-back-g4-dev.herokuapp.com/users/", {
    headers: {
      "Content-Type": "application/json",
      Authorization: appState,
    },
  });

  const users = [
    {
      id: "1",
      campus: "Woluwe",
      email: "nina.heuzer@gmail.com",
      firstName: "Nina",
      lastName: "Heuzer",
      is_banned: false,
    },
    {
      id: "2",
      campus: "LLN",
      email: "boris.dt@gmail.com",
      firstName: "Boris",
      lastName: "de Theux",
      is_banned: true,
    },
  ]; */ //await resUsers.json();
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div className="flex h-screen ">
      <div className="md:mt-12 mx-auto w-full max-w-md px-2 py-16 sm:px-0">
        <h1>Gestion</h1>
        <Tab.Group>
          <Tab.List className="flex p-1 justify-center space-x-1 bg-green-900/20 rounded-xl">
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-full py-2.5 text-sm leading-5 font-medium text-green-700 rounded-lg",
                  "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-green-400 ring-white ring-opacity-60",
                  selected
                    ? "bg-white shadow"
                    : "text-white hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              Membres
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-full py-2.5 text-sm leading-5 font-medium text-green-700 rounded-lg",
                  "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-green-400 ring-white ring-opacity-60",
                  selected
                    ? "bg-white shadow"
                    : "text-white hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              Validation des annonces
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-full py-2.5 text-sm leading-5 font-medium text-green-700 rounded-lg",
                  "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-green-400 ring-white ring-opacity-60",
                  selected
                    ? "bg-white shadow"
                    : "text-white hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              Catégories
            </Tab>
          </Tab.List>
          <Tab.Panels className="mt-2">
            <Tab.Panel
              className={classNames(
                "bg-white rounded-xl p-3",
                "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-green-400 ring-white ring-opacity-60"
              )}
            >
              <MembersList users={users} />
            </Tab.Panel>
            <Tab.Panel
              className={classNames(
                "bg-white rounded-xl p-3",
                "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-green-400 ring-white ring-opacity-60"
              )}
            >
              <p>kdk</p>
            </Tab.Panel>
            <Tab.Panel
              className={classNames(
                "bg-white rounded-xl p-3",
                "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-green-400 ring-white ring-opacity-60"
              )}
            >
              <p>sks</p>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};

export default Management;
