import Head from "next/head";
import PostsList from "../components/PostsList/PostsList";
import { HeartIcon } from "@heroicons/react/outline";
import { useEffect, useState } from "react";

export default function Favourites({ posts }) {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    fetch("http://pfe-back-g4-dev.herokuapp.com/posts/favourites", {
      headers: {
        "Content-Type": "application.json",
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((temp) => {
        setFavourites(temp);
        console.log("favourites", temp);
      });
  }, []);
  return (
    <div className="flex flex-col items-center justify-center md:mt-20 py-2 md:py-6">
      <Head>
        <title>Favoris - vincimarket</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-3xl font-extrabold md:mb-1.5">Vos favoris</h1>

      <div className="bg-white w-screen px-10">
        <div className="max-w-2xl mx-auto py-16 px-4  sm:px-6 lg:max-w-7xl lg:px-8 ">
          {favourites.length !== 0 ? (
            <PostsList posts={favourites} />
          ) : (
            <div className="flex flex-col items-center m-3 pb-5 rounded-xl bg-yellow-50">
              <div className="flex items-center text-gray-800 ">
                <HeartIcon className="h-12 w-12 " />
                <p className="text-xl font-extrabold p-5">
                  Vous n'avez pas encore de favoris
                </p>
              </div>
              <p className="font-light">
                Likez une annonce et vous la retrouverez ici
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
