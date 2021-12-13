import { Tab } from "@headlessui/react";
import Head from "next/head";
import Profile from "../../components/Profile/Profile";
import ProfileHistory from "../../components/ProfileHistory/ProfileHistory";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { ArchiveIcon, IdentificationIcon } from "@heroicons/react/outline";


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function profile() {

  const [user, setUser] = useState([]);
  const [history, setHistory] = useState([{}]);

  const router = useRouter();
  
  useEffect(() => {
    fetch("/api/users/whoami", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((temp) => {
        setUser(temp);
        console.log("user", temp)
      });

      fetch("/api/posts/myposts", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
      })
        .then((res) => {
          return res.json();
        })
        .then((temp) => {
          
          setHistory(temp);
          console.log("history", temp)
        });
      
  },[]);

  if(user === null){
    router.push('/connectionRegistration')
    return <></>
  }

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
                "w-full py-2.5 text-sm leading-5 font-medium text-indigo-700 rounded-lg flex justify-center",
                "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-indigo-400 ring-white indigo-opacity-60",
                selected
                  ? "bg-indigo-100 shadow"
                  : "text-indigo-500 hover:bg-white/[0.12] hover:text-indigo-400"
              )
            }
          >
            <IdentificationIcon className="text-indigo-700 h-5 w-5 mr-2" />
            Informations personnelles
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                "w-full py-2.5 text-sm leading-5 font-medium text-indigo-700 rounded-lg flex justify-center",
                "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-indigo-400 ring-white indigo-opacity-60",
                selected
                  ? "bg-indigo-100 shadow"
                  : "text-gray-500 hover:bg-white/[0.12] hover:text-indigo-400"
              )
            }
          >
            <ArchiveIcon className="text-indigo-700 h-5 w-5 mr-2" />
            Historique
          </Tab>
        </Tab.List>
        <Tab.Panels className="mt-2">
          <Profile user={user}/>
          <ProfileHistory historyItems={history} />
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
