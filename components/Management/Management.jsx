import MembersList from "../MembersList/MembersList";
import PendingPosts from "../PendingPosts/PendingPosts";
import { Tab } from "@headlessui/react";
import { useEffect, useState } from "react";

const Management = () => {
  const [users, setUsers] = useState([]);
  const [pendingPosts, setPendingPosts] = useState([]);
  useEffect(() => {
    fetch("/api/users/", {
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((temp) => {
        setUsers(temp);
      });
    fetch("/api/posts/pending", {
      headers: {
        "Content-Type": "application.json",
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res2) => {
        return res2.json();
      })
      .then((temp2) => {
        setPendingPosts(temp2);
      });
  }, []);

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
              <PendingPosts posts={pendingPosts} />
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
