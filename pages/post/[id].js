import Meta from "../../components/Meta/Meta";
import Image from "next/image";

export default function PostDetails({ postData, sellerData }) {
  return;
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
  </>;
}
