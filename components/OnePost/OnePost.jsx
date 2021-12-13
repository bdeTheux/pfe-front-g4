import Meta from "../../components/Meta/Meta";
import { useState, useEffect } from "react";
import ButtonMailTo from "../ButtonMailTo/ButtonMailTo";
import dynamic from "next/dynamic";
import Map from "../Map/Map";

const OnePost = ({ postId }) => {
  const [post, setPost] = useState([]);
  const [user, setUser] = useState([]);
  const [userConnected, setUserConnected] = useState([]);
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    fetch(`/api/posts/${postId}`).then((res) => {
      res.json().then((temp2) => {
        fetch(`/api/users/${temp2.seller_id}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("token"),
          },
        }).then((res) => {
          res
            .json()
            .then((temp) => {
              setUser(temp);
              setPost(temp2);
              return temp2;
            })
            .then((temp3) => {
              temp3.places.forEach((element) => {
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
            });
        });
      });
    });

    fetch("https://pfe-back-g4-dev.herokuapp.com/users/whoami", {
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
        console.log(temp);
        setUserConnected(temp);
      });
  }, []);

  return (
    <div>
      <Meta title={post.title} />
      <div>
        <section className="text-gray-700 body-font overflow-hidden bg-white">
          <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap  ">
              <img
                alt="Image du produit"
                className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
                src={post.image}
              />
              <div className="grid grid-cols-1 divide-y divide-green-500 w-max">
                <div className="w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                  <h2 className="text-sm title-font text-gray-500 tracking-widest">
                    {post.category}
                  </h2>
                  <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                    {post.title}
                  </h1>
                  <div className="flex mb-4">
                    <span className="flex items-center"></span>
                  </div>
                  <p className="leading-relaxed">{post.postNature}</p>
                  {post.postNature === "A vendre" ? (
                    <div className="flex">
                      <span className="title-font font-medium text-2xl text-gray-900">
                        ${post.price}€
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
                      <div className="mb-5">
                        <p>{("dans le code", console.log(locations))} </p>
                      </div>
                      <Map locations={locations} />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default OnePost;
