import Meta from "../../components/Meta/Meta";
import { useState, useEffect } from "react";
import ButtonMailTo from "../ButtonMailTo/ButtonMailTo";
import dynamic from "next/dynamic";
import { PencilIcon, TrashIcon } from "@heroicons/react/outline";
import { PopUpUpdatePost } from "../PopUp/PopUpUpdatePost"
import  PopUpButton  from "../PopUp/PopUpButton"

const OnePost = ({ postId }) => {
  const [post, setPost] = useState([]);
  const [user, setUser] = useState([]);
  const [token, setToken] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  const handleDelete = () => {
    const res = fetch(`/api/posts/${post._id}`, {
      method: "DELETE",
      headers: {
        Authorization: token,
      },
    });
  };

  const Map = dynamic(() => import("../Map/Map"), {
    loading: () => "Loading...",
    ssr: false,
  });
  useEffect(() => {
    fetch(`/api/posts/${postId}`).then((res) => {
      res.json().then((temp2) => {
        fetch(`/api/users/${temp2.seller_id}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("token"),
          },
        }).then((res) =>
          res.json().then((temp) => {
            setUser(temp);
            setPost(temp2);
            setToken(localStorage.getItem("token"));
          })
        );
      });
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
                  <h1 className="flex text-gray-900 text-3xl title-font font-medium mb-1">
                    {post.title}
                  </h1>
                  <div className="flex mb-4">
                    <span className="flex items-center"></span>
                  </div>
                  <p className="leading-relaxed">{post.post_nature}</p>
                  {post.post_nature === "En vente" ? (
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
                  <p className="leading-relaxed">
                    Nom : {user.first_name} {user.last_name}
                  </p>
                  <p className="leading-relaxed">Contact : {user.email}</p>
                  <p className="leading-relaxed">
                    Possibles lieux d'échange : {post.address_id || post.places}
                  </p>
                  <div className="mb-1">
                    <ButtonMailTo mailto={user.email} title={post.title} />
                  </div>
                  <div className="mb-5">
                    <p> </p>
                  </div>
                  <Map />
                </div>
                <div className="flex-row">
                  <button
                    onClick={handleDelete}
                    type="button"
                    className="flex-initial items-center px-4 font-medium tracking-wide text-black capitalize rounded-md  hover:bg-red-200 hover:fill-current hover:text-red-600  focus:outline-none  transition duration-300 transform active:scale-95 ease-in-out"
                  >
                    <TrashIcon className="flex ml-3 w-6 text-red-500" />
                    <span className="pl-2 mx-1">Delete</span>
                  </button>

                  <div>
                    <PopUpButton token={token} post={post} className="flex ml-3 w-6 "/>

                  </div>
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

