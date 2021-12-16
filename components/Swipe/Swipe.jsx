import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";

const Swipe = () => {
  const [posts, setPosts] = useState([]);
  const [lastDirection, setLastDirection] = useState();

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
      if (res.status !== 401) {
        //setIsFav(!isFav);
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
        setPosts(temp);
      });
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-b from-yellow-500 via-yellow-300 to-red-300">
      <h1 className="text-3xl font-black mb-5 text-white">Discovery Mode</h1>
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
