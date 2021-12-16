import { Transition, Dialog } from "@headlessui/react";
import {
  ArrowCircleLeftIcon,
  ArrowCircleRightIcon,
} from "@heroicons/react/outline";
import { BanIcon, CheckIcon } from "@heroicons/react/solid";
import React, { useState, useEffect, Fragment } from "react";
import TinderCard from "react-tinder-card";

const Swipe = () => {
  const [posts, setPosts] = useState([]);
  const [lastDirection, setLastDirection] = useState();
  const [isOpen, setIsOpen] = useState(true);

  const swiped = async (direction, postId) => {
    setLastDirection(direction);
    if (direction === "right") {
      const res = await fetch(`/api/users/changefavorite/${postId}`, {
        method: "POST",
        body: JSON.stringify(postId),
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
      });
      const data = await res.json();
      console.log(data);
      if (res.status !== 401) {
      } else {
        alert("Favoris échoué");
      }
    }
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
  };

  useEffect(() => {
    fetch("/api/posts/withoutfavourites", {
      headers: {
        "Content-Type": "application.json",
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((temp) => {
        console.log(temp);
        setPosts(temp);
      });
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-b from-yellow-500 via-yellow-300 to-red-300">
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
                  Qu'est que le mode Discovery?
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Le mode Discovery vous permet de découvrir des annonces
                    rapidement de manière trivial.
                  </p>
                  <p className="text-sm text-gray-700">
                    En swipant vers la <strong>gauche</strong> vous passer au{" "}
                    <strong>prochain élément.</strong>
                    <br />
                    En swipant vers la <strong>droite</strong> l'annonce sera
                    directement mit dans vos <strong>favoris.</strong>
                  </p>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium bg-yellow-100 border border-transparent rounded-md hover:bg-yellow-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-yellow-500"
                    onClick={() => setIsOpen(false)}
                  >
                    Got it, Merci !
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
      <h1 className="text-3xl font-black mb-5 text-white">Discovery Mode</h1>
      <div className="flex flex-row justify-between items-center gap-5">
        <BanIcon className="w-20 h-20 text-white animate-pulse hidden md:block" />
        <div className="w-[90vw] max-w-md h-[300px]">
          {posts.map((post) => (
            <TinderCard
              className="absolute"
              key={post._id}
              onSwipe={(dir) => swiped(dir, post._id)}
              onCardLeftScreen={() => outOfFrame(post.title)}
              preventSwipe={["up", "down"]}
            >
              <div
                style={{ backgroundImage: "url(" + post.images[0] + ")" }}
                className="relative bg-white w-[80vw] max-w-md h-80 rounded-lg bg-cover bg-center"
              >
                <h3 className="tracking-wider px-3 text-white bg-yellow-500 rounded-lg text-lg absolute bottom-0 m-2 text-mono font-extrabold">
                  {post.title}
                </h3>
              </div>
            </TinderCard>
          ))}
        </div>
        <CheckIcon className="w-20 h-20 text-white animate-pulse hidden md:block" />
      </div>
      {lastDirection ? (
        <h2 className="w-full h-[28px] justify-center flex text-white animate-pulse duration-700 text-lg mt-8">
          Vous avez swipe {lastDirection}
        </h2>
      ) : (
        <h2 className="infoText" />
      )}
    </div>
  );
};

export default Swipe;
