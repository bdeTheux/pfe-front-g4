import { useState } from "react";
import { Tab } from "@headlessui/react";
import { PencilIcon } from "@heroicons/react/solid";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

const currentUserTest = {
  firstName: "Samy",
  lastName: "Alliche",
  email: "samy.alliche@student.vinci.be",
  campus: "Woluwe",
};
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
    <div className="md:mt-28 md:px-10 mx-10 md:mx-20 lg:mx-80">
      <Head>
        <title>vincimarket - Mon Profil</title>
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
                  {currentUserTest.firstName}
                </p>
              </li>
              <li className="relative p-2 rounded-md">
                <h3 className="text-sm font-medium text-xs font-black text-gray-600 leading-5">
                  Nom
                </h3>
                <p className="flex mt-1 space-x-1 font-normal leading-4 text-gray-700">
                  {currentUserTest.lastName}
                </p>
              </li>
              <li className="relative p-2 rounded-md">
                <h3 className="text-sm font-medium text-xs font-black text-gray-600 leading-5">
                  Email
                </h3>
                <p className="flex mt-1 space-x-1 font-normal leading-4 text-gray-700">
                  {currentUserTest.email}
                </p>
              </li>
              <li className="relative p-2 rounded-md">
                <h3 className="text-sm font-medium text-xs font-black text-gray-600 leading-5">
                  Campus
                </h3>
                <p className="flex mt-1 space-x-1 font-normal leading-4 text-gray-700">
                  {currentUserTest.campus}
                </p>
              </li>
            </ul>
          </Tab.Panel>
          <Tab.Panel
            className={classNames(
              "bg-white rounded-xl p-3",
              "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-indigo-400 ring-white ring-opacity-60"
            )}
          >
            <ul>
              {history.map((post) => (
                <li className="relative flex flex-row p-3 rounded-md hover:bg-coolGray-100 group">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width="50rem"
                    height="50rem"
                    className="object-center object-cover group-hover:opacity-75 transition duration-300 ease-in-out rounded-full"
                  />
                  <div className="ml-5">
                    <h3 className="text-sm font-medium leading-5">
                      {post.title}
                    </h3>

                    <ul className="flex mt-1 space-x-1 text-xs font-normal leading-4 text-coolGray-500">
                      <li>{post.price} euro</li>
                      <li>&middot;</li>
                      <li>{post.campus}</li>
                    </ul>

                    <a
                      href="#"
                      className={classNames(
                        "absolute inset-0 rounded-md",
                        "focus:z-10 focus:outline-none focus:ring-2 ring-indigo-400"
                      )}
                    />
                  </div>
                  {post.vente ? (
                    <div className="ml-5 px-2 h-full justify-evenly bg-green-500 text-white rounded-2xl text-sm font-bold">Vente</div>
                  ) : (
                    <div className="ml-5 px-2 h-full justify-evenly bg-yellow-600 text-white rounded-2xl text-sm font-bold">Achat</div>
                  )}
                </li>
              ))}
            </ul>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
