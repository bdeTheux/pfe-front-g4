import { Fragment, useState, useEffect } from "react";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import { EmojiSadIcon, XIcon } from "@heroicons/react/outline";
import {
  ChevronDownIcon,
  FilterIcon,
  MinusSmIcon,
  PlusSmIcon,
} from "@heroicons/react/solid";
import PostsList from "./PostsList";
import Link from "next/link";
import { useRouter } from "next/router";

const sortOptions = [
  { id: 0, name: "Nouveau", href: "#", current: true },
  { id: 1, name: "Prix croissant", href: "#", current: false },
  {
    id: 2,
    name: "Price décroissant",
    href: "#",
    current: false,
  },
];
const filters = [
  {
    id: "campus",
    name: "Campus",
    options: [
      { id: 0, value: "Tout", campus: "Tout" },
      { id: 1, value: "Woluwe", campus: "Woluwe" },
      { id: 2, value: "Louvain-la-Neuve", campus: "Louvain-la-Neuve" },
      { id: 3, value: "Ixelles", campus: "Ixelles" },
    ],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const PostsListFull = ({ title, camp }) => {
  const [categories, setCategories] = useState([]);
  const [postsList, setPostsList] = useState([]);
  const [campus, setCampus] = useState(camp);

  const router = useRouter();

  function pathBuilder(camp, cat) {
    setCampus(camp);
    let newPath = "/api/posts";
    if (camp !== "Tout" && camp !== null && camp !== undefined) {
      if (cat !== "Les annonces") {
        newPath += "/?campus=" + camp + "&category=" + cat;
      } else {
        newPath += "/?campus=" + camp;
      }
    } else if (cat !== "Les annonces") {
      newPath += "/?category=" + cat;
    }

    return newPath;
  }

  function sortPosts(posts, sortTypeId) {
    if (sortTypeId === 1) {
      const sorted = [...posts].sort((a, b) => a.price - b.price);
      setPostsList(sorted);
    } else if (sortTypeId === 2) {
      const sorted = [...posts].sort((a, b) => b.price - a.price);
      setPostsList(sorted);
    } else {
      setPostsList(posts);
    }
    sortOptions.forEach((element) => {
      element.id === sortTypeId
        ? (element.current = true)
        : (element.current = false);
    });
  }

  useEffect(() => {
    fetch(pathBuilder(campus, title), {
      headers: {
        "Content-Type": "application.json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((temp) => {
        setPostsList(temp);
      });
    fetch("/api/categories/", {
      headers: {
        "Content-Type": "application.json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((temp) => {
        setCategories(temp);
      });
    pathBuilder(campus, title);
    //pathBuilder("Ixelles", "Les annonces");
  }, []);

  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  return (
    <div className="bg-white md:mt-5">
      <div>
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 flex z-40 lg:hidden"
            onClose={setMobileFiltersOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="ml-auto relative max-w-xs w-full h-full bg-white shadow-xl py-4 pb-12 flex flex-col overflow-y-auto">
                <div className="px-4 flex items-center justify-between">
                  <h2 className="text-lg font-extrabold text-gray-900">
                    Filtres
                  </h2>
                  <button
                    type="button"
                    className="-mr-2 w-10 h-10 bg-white p-2 rounded-md flex items-center justify-center text-gray-400"
                    onClick={() => setMobileFiltersOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Filters */}
                <form className="mt-4 border-t border-gray-200">
                  {filters.map((section) => (
                    <Disclosure
                      as="div"
                      key={section.id}
                      className="border-t border-gray-200 px-4 py-6"
                    >
                      {({ open }) => (
                        <>
                          <h3 className="-mx-2 -my-3 flow-root">
                            <Disclosure.Button className="px-2 py-3 bg-white w-full flex items-center justify-between text-gray-400 hover:text-gray-200">
                              <span className="font-medium text-gray-900">
                                {section.name}
                              </span>
                              <span className="ml-6 flex items-center">
                                {open ? (
                                  <MinusSmIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <PlusSmIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                )}
                              </span>
                            </Disclosure.Button>
                          </h3>
                          <Disclosure.Panel className="pt-6">
                            <div className="space-y-6">
                              {section.options.map((option, optionIdx) => (
                                <div
                                  key={option.value}
                                  className="flex items-center"
                                >
                                  <input
                                    id={`filter-mobile-${section.id}-${optionIdx}`}
                                    name={`${section.id}[]`}
                                    defaultValue={option.value}
                                    type="checkbox"
                                    defaultChecked={option.campus === camp}
                                    className="h-4 w-4 border-gray-300 rounded text-gray-600 focus:ring-gray-500"
                                  />
                                  <label
                                    htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                    className="ml-3 min-w-0 flex-1 text-gray-500"
                                  >
                                    {option.campus}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  ))}
                  <h3 className="sr-only">Categories</h3>
                  <ul
                    role="list"
                    className="font-medium text-gray-900 px-2 py-3"
                  >
                    <li>
                      <Link href="/posts">
                        <a className="block px-2 py-3">Tout afficher</a>
                      </Link>
                    </li>
                    {categories.map((category) => (
                      <li>
                        <Link
                          href={{
                            pathname: "/posts/[categoryName]",
                            query: { categoryName: category.name },
                          }}
                        >
                          <a className="block px-2 py-3">{category.name}</a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </form>
              </div>
            </Transition.Child>
          </Dialog>
        </Transition.Root>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 flex items-baseline justify-between pt-24 pb-6 border-b border-gray-200">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
              {title}
            </h1>

            <div className="flex items-center z-50">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    Trier
                    <ChevronDownIcon
                      className="flex-shrink-0 -mr-1 ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-2xl bg-white ring-1 ring-black ring-opacity-5 focus:outline-none ">
                    <div className="py-1 ">
                      <Menu.Item
                        key="0"
                        onClick={() => sortPosts(postsList, 0)}
                      >
                        {({ active }) => (
                          <a
                            href={router.asPath}
                            className={classNames(
                              sortOptions[0].current
                                ? "font-medium text-gray-900"
                                : "text-gray-500",
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Nouveau
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item
                        key="1"
                        onClick={() => sortPosts(postsList, 1)}
                      >
                        {({ active }) => (
                          <a
                            href="#ascending"
                            className={classNames(
                              sortOptions[1].current
                                ? "font-medium text-gray-900"
                                : "text-gray-500",
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Prix croissant
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item
                        key="2"
                        onClick={() => sortPosts(postsList, 2)}
                      >
                        {({ active }) => (
                          <a
                            href="#descending"
                            className={classNames(
                              sortOptions[2].current
                                ? "font-medium text-gray-900"
                                : "text-gray-500",
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Prix décroissant
                          </a>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
              <button
                type="button"
                className="p-2 -m-2 ml-4 sm:ml-6 text-gray-400 hover:text-gray-500 lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="sr-only">Filtres</span>
                <FilterIcon className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pt-6 pb-24">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-10">
              {/* Filters */}
              <form className="hidden lg:block">
                {filters.map((section) => (
                  <Disclosure
                    as="div"
                    key={section.id}
                    className="border-b border-gray-200 py-6"
                    defaultOpen="true"
                  >
                    {({ open }) => (
                      <>
                        <h3 className="-my-3 flow-root">
                          <Disclosure.Button className="py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500 hover:bg-gray-200 transition duration-500 ease-in-out p-3 rounded-lg">
                            <span className="font-medium text-gray-900">
                              {section.name}
                            </span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <MinusSmIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              ) : (
                                <PlusSmIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel className="pt-6">
                          <div className="space-y-4">
                            {section.options.map((option, optionIdx) => (
                              <div
                                key={option.value}
                                className="flex items-center"
                              >
                                {option.campus !== "Tout" ? (
                                  <>
                                    {title === "Les annonces" ? (
                                      <>
                                        <Link
                                          href={{
                                            pathname: "/posts/[categoryName]",
                                            query: {
                                              categoryName: option.campus,
                                            },
                                          }}
                                        >
                                          <input
                                            id={`filter-${section.id}-${optionIdx}`}
                                            name={`${section.id}[]`}
                                            defaultValue={option.value}
                                            type="radio"
                                            defaultChecked={
                                              option.campus === campus
                                            }
                                            className="h-4 w-4 border-gray-300 rounded text-gray-600 focus:ring-gray-500"
                                            onClick={() => {
                                              pathBuilder(option.campus, title);
                                              //if()
                                              //router.push(router.asPath+"/"+ option.campus)
                                            }}
                                          />
                                        </Link>
                                      </>
                                    ) : (
                                      <>
                                        <Link
                                          href={`/posts/${title}&${option.campus}`}
                                        >
                                          <input
                                            id={`filter-${section.id}-${optionIdx}`}
                                            name={`${section.id}[]`}
                                            defaultValue={option.value}
                                            type="radio"
                                            defaultChecked={
                                              option.campus === campus
                                            }
                                            className="h-4 w-4 border-gray-300 rounded text-gray-600 focus:ring-gray-500"
                                            onClick={() => {
                                              pathBuilder(option.campus, title);
                                              //if()
                                              //router.push(router.asPath+"/"+ option.campus)
                                            }}
                                          />
                                        </Link>
                                      </>
                                    )}
                                  </>
                                ) : (
                                  <>
                                    {title === "Les annonces" ? (
                                      <Link href="/posts">
                                        <input
                                          id={`filter-${section.id}-${optionIdx}`}
                                          name={`${section.id}[]`}
                                          defaultValue={option.value}
                                          type="radio"
                                          defaultChecked={
                                            option.campus === campus
                                          }
                                          className="h-4 w-4 border-gray-300 rounded text-gray-600 focus:ring-gray-500"
                                          onClick={() => {
                                            pathBuilder(option.campus, title);
                                            //if()
                                            //router.push(router.asPath+"/"+ option.campus)
                                          }}
                                        />
                                      </Link>
                                    ) : (
                                      <Link
                                        href={{
                                          pathname: "/posts/[categoryName]",
                                          query: {
                                            categoryName: title,
                                          },
                                        }}
                                      >
                                        <input
                                          id={`filter-${section.id}-${optionIdx}`}
                                          name={`${section.id}[]`}
                                          defaultValue={option.value}
                                          type="radio"
                                          defaultChecked={
                                            option.campus === campus
                                          }
                                          className="h-4 w-4 border-gray-300 rounded text-gray-600 focus:ring-gray-500"
                                          onClick={() => {
                                            pathBuilder(option.campus, title);
                                            //if()
                                            //router.push(router.asPath+"/"+ option.campus)
                                          }}
                                        />
                                      </Link>
                                    )}
                                  </>
                                )}

                                <label
                                  htmlFor={`filter-${section.id}-${optionIdx}`}
                                  className="ml-3 text-sm text-gray-600"
                                >
                                  {option.campus}
                                </label>
                              </div>
                            ))}
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
                <h3 className="sr-only">Categories</h3>
                <ul
                  role="list"
                  className="text-sm font-medium text-gray-900 space-y-4 pb-6 border-b border-gray-200 mt-7"
                >
                  <li>
                    <Link href="/posts">
                      <a className="font-bold">Tout afficher</a>
                    </Link>
                  </li>
                  {categories.map((category) => (
                    <li key={category.name}>
                      <Link
                        href={{
                          pathname: "/posts/[categoryName]",
                          query: { categoryName: category.name },
                        }}
                      >
                        <a>{category.name}</a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </form>

              <div className="lg:col-span-3">
                {postsList.length !== 0 ? (
                  <PostsList posts={postsList} />
                ) : (
                  <div className="flex flex-col items-center m-3 pb-5 rounded-xl bg-yellow-50">
                    <div className="flex items-center text-gray-800 ">
                      <EmojiSadIcon className="h-12 w-12 " />
                      <p className="text-xl font-extrabold p-5">
                        Rien à afficher dans cette catégorie
                      </p>
                    </div>
                    <p className="font-light">Revenez plus tard</p>
                  </div>
                )}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default PostsListFull;
