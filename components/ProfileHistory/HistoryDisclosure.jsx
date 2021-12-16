import React from "react";
import { Disclosure, Transition } from "@headlessui/react";
import { MinusSmIcon, PlusSmIcon } from "@heroicons/react/solid";
import Image from "next/image";
import LocationBadges from "../LocationBadges/LocationBadges";

const HistoryDisclosure = ({ statusName, statusArray, children }) => {
  //console.log("MOI", statusArray[0].images);
  return (
    <>
      <Disclosure defaultOpen="true" as="div" className="border-b border-gray-200 py-6">
        {({ open }) => (
          <>
            <h3 className="-my-3 flow-root">
              <Disclosure.Button className="py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500 hover:bg-gray-200 transition duration-500 ease-in-out p-3 rounded-lg">
                <div className="flex flex-row">
                  {children}
                  <span className="ml-5 font-medium text-gray-900">
                    {statusName}
                  </span>
                </div>
                <span className="ml-6 flex items-center">
                  {open ? (
                    <MinusSmIcon className="h-5 w-5" aria-hidden="true" />
                  ) : (
                    <PlusSmIcon className="h-5 w-5" aria-hidden="true" />
                  )}
                </span>
              </Disclosure.Button>
            </h3>
            <Transition
              show={open}
            enter="transition duration-200 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-200 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
            >
              <Disclosure.Panel className="pt-6">
                {(statusArray !== undefined || statusArray.length !== 0) ? (
                  <ul className="space-y-4">
                    {statusArray.map((post) => (
                      <li className="relative flex flex-row p-3 rounded-md hover:bg-coolGray-100 group">
                        <div>
                          <Image
                            src={post.images[0]}
                            alt={post.title}
                            width="50rem"
                            height="50rem"
                            className="object-center object-cover group-hover:opacity-75 transition duration-300 ease-in-out rounded-full"
                          />
                        </div>
                        <div className="ml-5">
                          <h3 className="text-sm font-medium leading-5 mb-1">
                            {post.title}
                          </h3>

                          <ul className="flex mt-1 space-x-1 text-xs font-normal leading-4 text-coolGray-500">
                            <li>{post.price}€</li>
                            <li>
                              <LocationBadges
                                locations={post.places}
                                white={true}
                              />
                            </li>
                          </ul>

                          <a
                            href="#"
                            className={() =>
                              classNames(
                                "absolute inset-0 rounded-md",
                                "focus:z-10 focus:outline-none focus:ring-2 ring-indigo-400"
                              )
                            }
                          />
                        </div>
                        {post.post_nature === "À vendre" ? (
                          <div className="ml-5 px-2 h-full justify-evenly bg-indigo-500 text-white rounded-2xl text-sm font-extralight">
                            À vendre
                          </div>
                        ) : (
                          <div className="ml-5 px-2 h-full justify-evenly bg-yellow-500 text-white rounded-2xl text-sm font-extralight">
                            À donner
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <h3 className="text-center text-gray-400 select-none">
                    Aucun objet trouvé
                  </h3>
                )}
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </>
  );
};

export default HistoryDisclosure;
