import Head from "next/head";
import Link from "next/link";
import { ArrowNarrowRightIcon } from "@heroicons/react/outline";
import PostsList from "../components/PostsList/PostsList";
import WelcomeBanner from "../components/WelcomeBanner/WelcomeBanner";

const postsTest = [
  {
    id: 1,
    title: "Pull",
    image:
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=705&q=80",
    price: 25,
    places:[
      {
        campus: "Woluwe",
      },
      {
        campus: "Louvain-La-Neuve",
      }
    ]
    },
  /*
  {
    id: 2,
    title: "Bomber Jacket",
    image:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80",
    price: 35,
    campus: "Woluwe",
  },
  {
    id: 3,
    title: "Chaussure Nike",
    image:
      "https://images.unsplash.com/photo-1615424902876-df124220b0b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80",
    price: 15,
    campus: "Louvain-La-Neuve",
  },
  {
    id: 4,
    title: "Denim dress",
    image:
      "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    price: 10,
    campus: "Ixelles",
  },
  {
    id: 5,
    title: "Pull",
    image:
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=705&q=80",
    price: 25,
    campus: "Woluwe",
  },
  {
    id: 6,
    title: "Bomber Jacket",
    image:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80",
    price: 35,
    campus: "Woluwe",
  },
  {
    id: 7,
    title: "Chaussure Nike",
    image:
      "https://images.unsplash.com/photo-1615424902876-df124220b0b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80",
    price: 15,
    campus: "Louvain-La-Neuve",
  },
  {
    id: 8,
    title: "Denim dress",
    image:
      "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    price: 10,
    campus: "Ixelles",
  },
  */
];

export const getServerSideProps = async () => {
  const res = await fetch("http://pfe-back-g4-dev.herokuapp.com/posts/");

  const posts = await res.json();
  console.log(posts);
  console.log(typeof posts);
  if (posts.length > 4) posts.length = 4;
  return {
    props: {
      posts,
    },
  };
};

//limit the posts to a length of 3

export default function Home({ posts }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 md:py-6">
      <Head>
        <title>vincimarket</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <WelcomeBanner />

      <div className="bg-white w-screen px-10">
        <div className="max-w-2xl mx-auto py-16 px-4  sm:px-6 lg:max-w-7xl lg:px-8 ">
          <div className="flex flex-col md:flex-row md:items-center mb-5 md:gap-7">
            <h1 className="text-3xl font-extrabold md:mb-1.5">
              Nos dernières annonces
            </h1>
            <Link href="/posts">
              <a className="text-indigo-500 hover:text-indigo-200 flex flex-row p-2 md:p-5 gap-2 text-lg">
                Voir plus
                <ArrowNarrowRightIcon className="h-6 w-6" aria-hidden="true" />
              </a>
            </Link>
          </div>
          <PostsList posts={posts} />
        </div>

        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h1 className="text-3xl font-extrabold ">Les campus</h1>
        </div>
      </div>
    </div>
  );
}
