import Meta from "../../components/Meta/Meta";
import { useState, useEffect, useContext } from "react";
import ButtonMailTo from "../ButtonMailTo/ButtonMailTo";

import {
  PencilIcon,
  TrashIcon,
  LockClosedIcon,
} from "@heroicons/react/outline";

import { PopUpUpdatePost } from "../PopUp/PopUpUpdatePost";
import PopUpButton from "../PopUp/PopUpButton";
import { useRouter } from "next/router";
import { AppContext } from "../../context/context";

import Map from "../Map/Map";
import FavouriteButton from "../Button/FavouriteButton";

const OnePost = ({ postId }) => {
  const [post, setPost] = useState([]);
  const [user, setUser] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [isFav, setIsFav] = useState(false);
  const [show, setShow] = useState(false);
  const [locations, setLocations] = useState([]);
  //const [appContext, setAppContext] = useState([]);
  const [userConnected, setUserConnected] = useState([]);
  console.log("user", userConnected);
  useEffect(() => {
    let actual_post;
    fetch(`/api/posts/${postId}`, {
      method: "GET",
      headers: { Authorization: localStorage.getItem("token") },
    }).then((res) => {
      res.json().then((data) => {
        actual_post = data;
        return fetch(`/api/users/${actual_post.seller_id}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("token"),
          },
        }).then((seller) => {
          seller
            .json()
            .then((sellerJson) => {
              setUser(sellerJson);
              setPost(actual_post);
              return actual_post;
            })

            .then((actual_post) => {
              if (post.state === "Clôturé") {
              } else {
                actual_post.places.forEach((element) => {
                  fetch(`/api/addresses/${element}`, {
                    headers: { "Content-Type": "application/json" },
                  })
                    .then((res) => res.json())
                    .then((loc) => {
                      const toAdd = {
                        lat: loc.lat,
                        lng: loc.long,
                      };
                      setLocations((locations) => [...locations, toAdd]);
                    });
                });
              }
            });
        });
      });
    });
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
    fetch("/api/users/whoami", {
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((uc) => setUserConnected(uc));

    if (!favourites || favourites.length === 0 || favourites === undefined) {
      setIsFav(false);
    } else {
      favourites.forEach((e) => {
        if (e._id === post._id) {
          setIsFav(true);
        } else {
          setIsFav(false);
        }
      });
    }
  }, []);

  const router = useRouter();

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  const handleEnclose = () => {
    const res = fetch(`/api/posts/${post._id}/sell`, {
      method: "POST",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    }).then((temp) => router.push("/"));
  };

  const handleDelete = () => {
    const res = fetch(`/api/posts/${post._id}`, {
      method: "DELETE",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    }).then((temp) => router.push("/"));
  };

  console.log("post", post);
  if (userConnected && userConnected.is_banned) {
    return <BanPage />;
  }
  return (
    <div>
      <Meta title={post.title} />
      <div>
        <section className="text-gray-700 body-font overflow-hidden bg-white">
          <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap  ">
              <div className="flex flex-col">
                <img
                  alt="Image du produit"
                  className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
                  src={
                    post && post.images && post.images.length > 0
                      ? post.images[0]
                      : "/images/bidon.jpg/"
                  } //change with carousel
                />
                {post && post.video ? (
                  <video
                    controls
                    className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
                  >
                    <source src={post.video}></source>
                  </video>
                ) : (
                  <></>
                )}
              </div>
              <div className="grid grid-cols-1 divide-y divide-green-500 w-max">
                <div className="w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                  <h2 className="text-sm title-font text-gray-500 tracking-widest">
                    {post.category_id}
                  </h2>
                  <div className="grid grid-cols-4">
                    <h1 className="flex text-gray-900 text-3xl title-font font-medium mb-1 col-span-3">
                      {post.title}
                    </h1>
                    <div className="col-span-1">
                      <FavouriteButton post={post} fav={isFav} />
                    </div>
                  </div>
                  <div className="flex mb-4">
                    <span className="flex items-center"></span>
                  </div>
                  <p className="leading-relaxed">{post.post_nature}</p>
                  {post.post_nature === "À vendre" ? (
                    <div className="flex">
                      <span className="title-font font-medium text-2xl text-gray-900">
                        {post.price}€
                      </span>
                    </div>
                  ) : (
                    ""
                  )}

                  <p className="mt-4 leading-relaxed">{post.description}</p>
                </div>
                <div className=" w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                  <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                    Informations sur le vendeur
                  </h1>
                  {userConnected === null ? (
                    <p className="leading-relaxed">
                      Veuillez vous connectez pour accéder à ces informations
                      (ou vous avez été banni)
                    </p>
                  ) : (
                    <div>
                      <p className="leading-relaxed">
                        Nom : {user.first_name} {user.last_name}
                      </p>
                      <p className="leading-relaxed">Contact : {user.email}</p>
                      <p className="leading-relaxed">
                        Possibles lieux d'échange : {post.places}
                      </p>
                      <div className="mb-1">
                        <ButtonMailTo mailto={user.email} title={post.title} />
                      </div>
                      <Map locations={locations} />
                    </div>
                  )}
                </div>
                {userConnected || userConnected !== null ? (
                  userConnected._id == post.seller_id ||
                  userConnected.is_admin ? (
                    <div className="flex-row flex">
                      <button
                        onClick={handleDelete}
                        type="button"
                        className="flex-initial items-center px-4 font-medium tracking-wide text-black capitalize rounded-md  hover:bg-red-200 hover:fill-current hover:text-red-600  focus:outline-none  transition duration-300 transform active:scale-95 ease-in-out"
                      >
                        <TrashIcon className="flex ml-3 w-6 text-red-500" />
                        <span className="pl-2 mx-1">Delete</span>
                      </button>
                      <div>
                        <PopUpButton post={post} className="flex ml-3 w-6 " />
                      </div>
                      <button
                        type="button"
                        onClick={handleEnclose}
                        className=" items-end px-4 font-medium tracking-wide text-black capitalize rounded-md  hover:bg-red-200 hover:fill-current hover:text-red-600  focus:outline-none  transition duration-300 transform active:scale-95 ease-in-out"
                      >
                        <LockClosedIcon className="ml-3 w-6 text-red-500" />
                        Cloturer
                      </button>
                    </div>
                  ) : (
                    <></>
                  )
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default OnePost;
