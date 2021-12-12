import { Tab } from "@headlessui/react";
import Image from "next/image";

import React from "react";

const ProfileHistory = ({ historyItems }) => {

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <Tab.Panel
      className={classNames(
        "bg-white rounded-xl p-3",
        "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-indigo-400 ring-white ring-opacity-60"
      )}
    >
      <ul>
        {historyItems.map((post) => (
          <li className="relative flex flex-row p-3 rounded-md hover:bg-coolGray-100 group">
            <Image
              src={post.image}
              alt={post.title}
              width="50rem"
              height="50rem"
              className="object-center object-cover group-hover:opacity-75 transition duration-300 ease-in-out rounded-full"
            />
            <div className="ml-5">
              <h3 className="text-sm font-medium leading-5">{post.title}</h3>

              <ul className="flex mt-1 space-x-1 text-xs font-normal leading-4 text-coolGray-500">
                <li>{post.price} euro</li>
                <li>&middot;</li>
                <li>{post.campus}</li>
              </ul>

              <a
                href="#"
                className={() => classNames(
                  "absolute inset-0 rounded-md",
                  "focus:z-10 focus:outline-none focus:ring-2 ring-indigo-400"
                )}
              />
            </div>
            {post.vente ? (
              <div className="ml-5 px-2 h-full justify-evenly bg-green-500 text-white rounded-2xl text-sm font-bold">
                Vendu
              </div>
            ) : (
              <div className="ml-5 px-2 h-full justify-evenly bg-yellow-600 text-white rounded-2xl text-sm font-bold">
                Acheté
              </div>
            )}
          </li>
        ))}
      </ul>
    </Tab.Panel>
  );
};

export default ProfileHistory;
