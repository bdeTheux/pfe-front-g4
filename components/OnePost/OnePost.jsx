import Meta from "../../components/Meta/Meta";
import {useState, useEffect, useContext} from "react";
import ButtonMailTo from "../ButtonMailTo/ButtonMailTo";

import {
    PencilIcon,
    TrashIcon,
    LockClosedIcon,
} from "@heroicons/react/outline";

import {PopUpUpdatePost} from "../PopUp/PopUpUpdatePost";
import PopUpButton from "../PopUp/PopUpButton";
import {useRouter} from "next/router";
import {AppContext} from "../../context/context";

import Map from "../Map/Map";
import FavouriteButton from "../Button/FavouriteButton";
import Carousel from "../Carousel/Carousel";

const OnePost = ({postId}) => {
    const [post, setPost] = useState([]);
    const [user, setUser] = useState([]);
    const [favourites, setFavourites] = useState([]);
    const [isFav, setIsFav] = useState(false);
    const [show, setShow] = useState(false);
    const [locations, setLocations] = useState([]);
    const [userConnected, setUserConnected] = useState([]);

    useEffect(() => {
        let token = localStorage.getItem("token");
        let actual_post;
        let favs;
        let currentSeller;
        let currentUser;
        let locat;
        //if(token === undefined) {}
        fetch(`/api/posts/${postId}/fulldetails`, {
            method: "GET",
            headers: {Authorization: token},
        })
            .then((data) => {
                return data.json();
            })
            .then((data) => {
                setPost(data.post);
                actual_post = data.post;
                //setUser(data.seller);
                currentSeller = data.seller;
                const newAddress = data.addresses.map((e) => {
                    return {lat: e.lat, lng: e.long};
                });
                //setLocations(newAddress);
                locat = newAddress;
            })
            .then(() => {
                fetch("/api/users/whoami", {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: localStorage.getItem("token"),
                    },
                })
                    .then((res) => {
                        return res.json();
                    })
                    .then((uc) => {
                        //setUserConnected(uc);
                        currentUser = uc;
                    });
            })
            .then((ap) => {
                fetch("/api/posts/favourites", {
                    headers: {
                        "Content-Type": "application.json",
                        Authorization: localStorage.getItem("token"),
                    },
                })
                    .then((res) => {
                        return res.json();
                    })
                    .then((temp) => {
                        //setFavourites(temp);
                        favs = temp;
                        return temp;
                    })
                    .then((temp) => {
                        if (!temp || temp.length === 0 || temp === undefined) {
                            setIsFav(false);
                        } else {
                            if (currentUser.favorites.includes(postId)) {
                                setIsFav(true);
                            }
                        }
                        setFavourites(favs);
                        setLocations(locat);
                        setPost(actual_post);
                        setUserConnected(currentUser);
                        setUser(currentSeller);
                    });
            });
    }, []);

    const router = useRouter();

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

    if (userConnected && userConnected.is_banned) {
        return <BanPage/>;
    }
    const btnsContent = () => {
        return <div className="flex-row flex">
            <button
                onClick={handleDelete}
                type="button"
                className="flex-initial items-center px-4 font-medium tracking-wide text-black capitalize rounded-md  hover:bg-red-200 hover:fill-current hover:text-red-600  focus:outline-none  transition duration-300 transform active:scale-95 ease-in-out"
            >
                <TrashIcon className="flex ml-3 w-6 text-red-500"/>
                <span className="pl-2 mx-1">Supprimer</span>
            </button>
            <div>
                <PopUpButton post={post} className="flex ml-3 w-6 "/>
            </div>
            <button
                type="button"
                onClick={handleEnclose}
                className=" items-end px-4 font-medium tracking-wide text-black capitalize rounded-md  hover:bg-red-200 hover:fill-current hover:text-red-600  focus:outline-none  transition duration-300 transform active:scale-95 ease-in-out"
            >
                <LockClosedIcon className="ml-3 w-6 text-red-500"/>
                Clôturer
            </button>
        </div>
    }
    return (
        <div>
            <Meta title={post.title}/>
            <div>
                <section className="text-gray-700 body-font overflow-hidden bg-white">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="lg:w-4/5 mx-auto flex flex-row  ">
                            <div className="flex flex-col lg:w-1/2 h-80">
                                <div className="flex w-80 h-1/6"></div>
                                <Carousel images={post && post.images ? post.images : []}/>
                                {post && post.video ? (
                                    <video
                                        controls
                                        className="flex lg:w-1/2 w-full pt-60 object-cover object-center rounded border border-gray-200"
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
                                            <FavouriteButton
                                                post={post}
                                                isFav={isFav}
                                                setIsFav={setIsFav}
                                            />
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
                                                Possibles lieux d'échange :{" "}
                                                {post && post.places ? post.places.toString() : ""}
                                            </p>
                                            <div className="mb-1">
                                                <ButtonMailTo mailto={user.email} title={post.title}/>
                                            </div>
                                            <Map locations={locations}/>
                                        </div>
                                    )}
                                </div>
                                {(userConnected && (userConnected._id === post.seller_id || userConnected.is_admin)) ? (
                                    btnsContent()
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
