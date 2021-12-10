import Link from "next/link";
import Image from "next/image";
import { LocationMarkerIcon } from "@heroicons/react/solid";

/*
<p className="px-2 py-1 relative top-7 inset-x-0 w-max z-20  opacity-80 rounded-full bg-black text-white text-sm font-mono">
            {post.campus}
          </p>
*/

const Post = ({ post }) => {
  return (
    <Link
      href={{
        pathname: "/post/[id]",
        query: { id: post.id },
      }}
    >
      <a key={post.id} className="group">
      <p className="opacity-80 px-2 py-1 relative top-10 left-3 inset-x-0 w-max z-20  bg-black text-white text-sm font-mono">
        <LocationMarkerIcon className="w-4 h-4 inline mr-1 mb-0.5"></LocationMarkerIcon>
            {post.campus}
          </p>
        <div className="w-full aspect-w-5 aspect-h-5 bg-gray-200 rounded-3xl overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
          <Image
            src={post.image}
            alt={post.title}
            layout="fill"
            className="w-full h-full object-center object-cover group-hover:opacity-75 transition duration-300 ease-in-out"
          />
        </div>
        <h3 className="text-gray-700 font-extrabold mt-2">{post.title}</h3>
        <p className="mt-1 text-lg text-sm md:text-medium font-light text-gray-900">
          {post.price}€
        </p>
      </a>
    </Link>
  );
};

export default Post;
