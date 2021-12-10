import Link from "next/link";
import Image from "next/image";

const Post = ({ post }) => {
  return (
    <Link href={`/post/${post._id}`}>
      <a>
        <p>
          {post.title}, {post.price}€
        </p>
      </a>
    </Link>
  );
};
//<Image src={post.image} height={100} width={100} alt={post.title} />
export default Post;
