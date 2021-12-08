import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const postsAll = [
  {
    id: 1,
    name: "Jacket",
    href: "#",
    imageSrc:
      "https://cdn.shopify.com/s/files/1/2216/7835/products/ESSENTIALBOMBERJACKET-BLACK.A-Edit_CM_1024x1024.jpg?v=1601993905",
    price: "$35",
    campus: "Woluwe",
  },
  {
    id: 2,
    name: "Varsity Jacket",
    href: "#",
    imageSrc:
      "https://static.sscontent.com/prodimg/thumb/500/500/products/124/v959731_prozis_x-college-varsity-jacket-directoire-blue-m_xs_blue_newin.jpg",
    price: "$35",
    campus: "Woluwe",
  },
  {
    id: 3,
    name: "T-shirt",
    href: "#",
    imageSrc:
      "https://www.celio.com/medias/sys_master/productMedias/productMediasImport/h1a/h80/10237999743006/assassination-classroom-t-shirt-blanc-1105701-3-product-list.jpg?frz-v=2483",
    price: "$15",
    campus: "Louvain-La-Neuve",
  },
];
const posts = postsAll;
posts.length = 3;

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>vincimarket</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-white w-screen px-10">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h1 className="text-3xl my-8 font-extrabold ">Nos annonces</h1>

          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {posts.map((post) => (
              <a
                key={post.id}
                href={{
                  pathname: "/post/[id]",
                  query: { id: post.id },
                }}
                className="group"
              >
                <div className="w-full aspect-w-5 aspect-h-5 bg-gray-200 rounded-3xl overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                  <img
                    src={post.imageSrc}
                    className="w-full h-full object-center object-cover group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-gray-700 font-bold">{post.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">
                  {post.price}
                </p>
              </a>
            ))}
            <a href="/postlist" className="group">
              <div className="w-full aspect-w-5 aspect-h-5  bg-gray-200 rounded-3xl overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                <div className="w-full h-full bg-gray-100 flex justify-center items-center h-screen group-hover:opacity-75 group-hover:animate-pulse font-black text-2xl">
                  Voir plus
                </div>
              </div>
            </a>
          </div>
        </div>

        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h1 className="text-3xl font-extrabold ">Les campus</h1>
        </div>
      </div>
    </div>
  );
}
