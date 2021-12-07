import Link from "next/link";
import Image from "next/image";
import articleStyles from "../../styles/articleStyles";

const Post = ({ article }) => {
  return (
    <Link href={`/posts/${article.id}`}>
      <a className={articleStyles.card}>
        <Image
          src={article.image}
          height={100}
          width={100}
          alt={article.title}
        />
        <p>
          {article.title}, {article.price}€
        </p>
      </a>
    </Link>
  );
};

export default Post;
