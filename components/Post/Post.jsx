import Link from "next/link";
import Image from "next/image";
import LocationBadges from "../LocationBadges/LocationBadges";

const Post = ({ post }) => {
  return (
    <Link
      href={{
        pathname: "/post/[id]",
        query: { id: post._id },
      }}
    >
      <a key={post._id} className="group">
        <div className="w-full aspect-w-5 aspect-h-5 bg-gray-200 rounded-3xl overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
          <img
            src={
              post && post.images && post.images.length > 0
                ? post.images[0]
                : "/images/bidon.jpg/"
            }
            alt={post.title}
            className="w-full h-full object-center object-cover group-hover:opacity-75 transition duration-300 ease-in-out"
          />
        </div>
        <h3 className="text-gray-700 font-extrabold mt-2">{post.title}</h3>
        <p className="mt-1 text-lg text-sm md:text-medium font-light text-gray-900">
          {post.price}€
        </p>
        <div></div>
      </a>
    </Link>
  );
};

export default Post;
