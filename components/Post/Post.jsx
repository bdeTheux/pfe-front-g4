import Link from "next/link";
import Image from "next/image";

const Post = ({ post }) => {
  return (
    <Link
      href={{
        pathname: "/post/[id]",
        query: { id: post.id },
      }}
    >
      <a key={post.id} className="group">
        <div className="w-full aspect-w-5 aspect-h-5 bg-gray-200 rounded-3xl overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
          <Image
            src={post.image}
            alt="post.title"
            layout="fill"
            className="w-full h-full object-center object-cover group-hover:opacity-75"
          />
        </div>
        <h3 className="mt-4 text-gray-700 font-extrabold">{post.title}</h3>
        <p className="mt-1 text-lg font-medium italic text-gray-900">{post.price}€</p>
      </a>
    </Link>
  );
};

export default Post;
