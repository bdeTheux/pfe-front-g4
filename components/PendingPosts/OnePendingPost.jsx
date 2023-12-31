import ButtonApprouve from "../Buttons/ButtonApprouve";
import ButtonRefuse from "../Buttons/ButtonRefuse";
import { useState, useEffect } from "react";
import LocationBadges from "../LocationBadges/LocationBadges";
import Modal from "./Modal";

const OnePendingPost = ({ post, removePost }) => {
  const [user, setUser] = useState("");
  useEffect(() => {
    fetch(`/api/users/${post.seller_id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    }).then((res) => {
      res.json().then((temp) => setUser(temp));
    });
  }, []);
  return (
    <>
      <tr>
        <td className="px-6 py-4">
          <div className="flex items-center">
            <div className="ml-4">
              <div className="text-sm font-medium text-gray-900 overflow-ellipsis">
                {post.title}
              </div>
            </div>
          </div>
        </td>
        <td className="px-6 py-4 ">
          <div className="text-sm text-gray-900">{post.description} </div>
        </td>
        <td className="px-6 py-4">
          <div className="text-sm md:w-60 w-36 text-gray-900">
            <img
              alt="Image du produit"
              className=" w-full object-cover object-center rounded border border-gray-200"
              src={
                post && post.images && post.images.length > 0
                  ? post.images[0]
                  : "/images/bidon.jpg/"
              }
            />
            {post && post.images && post.images.length > 1 ? (
              <Modal images={post.images} video={post.video}></Modal>
            ) : (
              <></>
            )}
          </div>
        </td>
        <td className="px-6 py-4">
          <div className="text-sm text-gray-900">{post.category_id} </div>
        </td>
        <td className="px-6 py-4">
          <div className="text-sm text-gray-900">
            <LocationBadges locations={post.places} white="true" />
          </div>
        </td>
        <td className="px-6 py-4">
          <div className="text-sm text-gray-900">
            {user.first_name} {user.last_name}{" "}
          </div>
        </td>
        <td className="px-6 py-4">
          <div className="text-sm text-gray-900">{post.post_nature}</div>
        </td>
        <td className="px-6 py-4">
          <div className="text-sm text-gray-500">{post.price}€</div>
        </td>
        <td className="px-6 py-4 text-right text-sm font-medium">
          <div className="grid grid-cols-2 gap-1">
            <ButtonApprouve postId={post._id} action={removePost} />
            <ButtonRefuse postId={post._id} action={removePost} />
          </div>
        </td>
      </tr>
    </>
  );
};

export default OnePendingPost;
