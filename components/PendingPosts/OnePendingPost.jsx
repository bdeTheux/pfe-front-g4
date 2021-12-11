import ButtonApprouve from "../Buttons/ButtonApprouve";
import ButtonCloture from "../Buttons/ButtonCloture";
const OnePendingPost = ({ post }) => {
  return (
    <>
      <tr className="bg-green-100">
        <td className="p-3">
          <div className="flex align-items-center">
            <div className="ml-3">
              <div className="">{post.title}</div>
            </div>
          </div>
        </td>
        <td className="p-3">{post.description}</td>
        <td className="p-3">
          <img
            alt="Image du produit"
            className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
            src={post.image}
          />
        </td>
        <td className="p-3">{post.category_id}</td>
        <td className="p-3">{post.address_id || post.places.join(", ")}</td>
        <td className="p-3">nom prenom</td>
        <td className="p-3">{post.post_nature}</td>
        <td className="p-3">{post.price}€</td>
        <td className="p-3">
          <ButtonApprouve postId={post._id} />
          <ButtonCloture postId={post._id} />
        </td>
      </tr>
    </>
  );
};

export default OnePendingPost;
