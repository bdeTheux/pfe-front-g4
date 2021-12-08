import Link from "next/link";
import Image from "next/image";

const Post = ({ post }) => {
  return (
    <Link href={`/post/${post.id}`}>
      <a>
        <Image src={post.image} height={100} width={100} alt={post.title} />
        <p>
          {post.title}, {post.price}€
        </p>
      </a>
    </Link>
  );
};

export default Post;
