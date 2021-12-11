import { Tab } from "@headlessui/react";
import Head from "next/head";
import Profile from "../components/Profile/Profile";
import ProfileHistory from "../components/ProfileHistory/ProfileHistory";


const history = [
  {
    id: 1,
    title: "Pull",
    image:
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=705&q=80",
    price: 25,
    campus: "Woluwe",
    vente: true,
  },
  {
    id: 2,
    title: "Bomber Jacket",
    image:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80",
    price: 35,
    campus: "Woluwe",
    vente: false,
  },
  {
    id: 3,
    title: "Chaussure Nike",
    image:
      "https://images.unsplash.com/photo-1615424902876-df124220b0b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80",
    price: 15,
    campus: "Louvain-La-Neuve",
    vente: true,
  },
  {
    id: 4,
    title: "Denim dress",
    image:
      "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    price: 10,
    campus: "Ixelles",
    vente: true,
  },
  {
    id: 5,
    title: "Pull",
    image:
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=705&q=80",
    price: 25,
    campus: "Woluwe",
    vente: false,
  },
  {
    id: 6,
    title: "Bomber Jacket",
    image:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80",
    price: 35,
    campus: "Woluwe",
    vente: false,
  },
  {
    id: 7,
    title: "Chaussure Nike",
    image:
      "https://images.unsplash.com/photo-1615424902876-df124220b0b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80",
    price: 15,
    campus: "Louvain-La-Neuve",
    vente: false,
  },
  {
    id: 8,
    title: "Denim dress",
    image:
      "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    price: 10,
    campus: "Ixelles",
    vente: false,
  },
];


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function profile() {
  

  return (
    <div className="mt-2 md:mt-28 md:px-10 mx-10 md:mx-20 lg:mx-80">
      <Head>
        <title>Mon Profil - vincimarket</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Tab.Group>
        <Tab.List className="flex p-1 space-x-1 ring-1 ring-offset-indigo-400 rounded-xl">
          <Tab
            className={({ selected }) =>
              classNames(
                "w-full py-2.5 text-sm leading-5 font-medium text-indigo-700 rounded-lg",
                "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-indigo-400 ring-white indigo-opacity-60",
                selected
                  ? "bg-white shadow"
                  : "text-indigo-500 hover:bg-white/[0.12] hover:text-indigo-400"
              )
            }
          >
            Informations personnelles
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                "w-full py-2.5 text-sm leading-5 font-medium text-indigo-700 rounded-lg",
                "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-indigo-400 ring-white indigo-opacity-60",
                selected
                  ? "bg-white shadow"
                  : "text-indigo-500 hover:bg-white/[0.12] hover:text-indigo-400"
              )
            }
          >
            Historique
          </Tab>
        </Tab.List>
        <Tab.Panels className="mt-2">
          <Profile />
          <ProfileHistory historyItems={history} />
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
