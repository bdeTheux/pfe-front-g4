import Meta from "../../components/Meta/Meta";
import Image from "next/image";

const postDetails = ({ postData, sellerData }) => {
  return (
    <>
      <Meta title={postData.title} />
      <h1>{postData.title}</h1>
      <p>{postData.postNature}</p>
      <p>{postData.price}</p>
      <strong>
        <p>Infos du vendeur : </p>
      </strong>
      <p>{sellerData.name}</p>
      <p>{sellerData.email}</p>
      <Image
        src="{postData.image}"
        height={100}
        width={100}
        alt="Image du produit"
      />
      <strong>
        <p>Description</p>
      </strong>
      <p>{postData.description}</p>
      <p>Campus : {sellerData.campus}</p>
    </>
  );
};

export const getStaticProps = async (context) => {
  //server a initialiser
  const res = await fetch(`${server}/api/posts/${context.params.id}`);
  const posts = await res.json();

  return {
    props: {
      post,
    },
  };
};

export const getStaticPaths = async () => {
  //server a initialiser
  const res = await fetch(`${server}/api/posts/${context.params.id}`);
  const posts = await res.json();

  const listIds = posts.map((post) => post.id);
  const paths = listIds.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false, //all paths not returned by getStaticPaths will result in a 404
  };
};

export default postDetails;
