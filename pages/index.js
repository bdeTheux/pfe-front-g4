import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { SpeakerphoneIcon, XIcon } from "@heroicons/react/outline";

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
const members = [
  {
    id: 1,
    firstName: "Jane",
    lastName: "Cooper",
    is_banne: false,
    email: "jane.cooper@example.com",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },

  // More people...
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 md:py-6">
      <Head>
        <title>vincimarket</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="relative lg:mt-20 mt-30 w-screen bg-indigo-500">
        <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between flex-wrap">
            <span className="flex p-2 bg-indigo-700 rounded-lg hidden md:block">
              <SpeakerphoneIcon
                className="h-6 w-6 text-white"
                aria-hidden="true"
              />
            </span>
            <p className="text-center text-white italic ml-3 font-thin truncate md:inline">
              « Nous avons tous des trésors enfouis au fond de notre grenier ou
              de nos placards.
              <br />
              Trésors qui profiteraient à d’autres.
              <br />
              Valorisons-les en leur donnant une seconde vie. »
            </p>
            <div className="order-3 mt-2 flex-shrink-0 w-full md:order-2 md:mt-0 md:w-auto">
              <Link href="/about">
                <a className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50">
                  En savoir plus
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white w-screen px-10">
        <div className="max-w-2xl mx-auto py-16 px-4  sm:px-6 lg:max-w-7xl lg:px-8">
          <h1 className="text-3xl my-8 font-extrabold ">Nos annonces</h1>
          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {posts.map((post) => (
              <Link
                href={{
                  pathname: "/post/[id]",
                  query: { id: post.id },
                }}
              >
                <a key={post.id} className="group">
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
              </Link>
            ))}
            <Link href="/postlist">
              <a className="group">
                <div className="w-full aspect-w-5 aspect-h-5  bg-gray-200 rounded-3xl overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                  <div className="w-full h-full bg-gray-100 flex justify-center items-center h-screen group-hover:opacity-75 group-hover:animate-pulse font-black text-2xl">
                    Voir plus
                  </div>
                </div>
              </a>
            </Link>
          </div>
        </div>

        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h1 className="text-3xl font-extrabold ">Les campus</h1>
        </div>
      </div>
    </div>
  );
}
