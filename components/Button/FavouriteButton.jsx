import { HeartIcon as HeartIconSolid } from "@heroicons/react/solid";
import { HeartIcon as HeartIconOutline } from "@heroicons/react/outline";
import { useEffect, useState } from "react";

const FavouriteButton = ({ post, isFav, setIsFav }) => {
  
  console.log("fav", isFav)



  const favourite = async () => {
    const res = await fetch(`/api/users/changefavorite/${post._id}`, {
      method: "POST",
      body: JSON.stringify(post._id),
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    });
    const data = await res.json();
    console.log(data);
    if (res.status !== 401) {
      setIsFav(!isFav)
    } else {
      alert("Favoris échoué");
    }
  };

  if (!isFav) {
    return (
      <button
        onClick={favourite}
        className={`flex
              items-center
              justify-center
              text-sm
              font-semibold
              text-center
              rounded-full
              transition
              p-3
              duration-300 ease-in-out
              hover:bg-red-100`}
      >
        <HeartIconOutline className="h-7 w-7" />
      </button>
    );
  } else {
    return (
      <button
        onClick={favourite}
        className={`flex
              items-center
              justify-center
              text-sm
              p-3
              font-semibold
              text-center
              rounded-full
              transition
              duration-300 ease-in-out
              hover:bg-red-100`}
      >
        <HeartIconSolid className="h-7 w-7 text-red-700" />
      </button>
    );
  }
};

export default FavouriteButton;
