import Meta from "../../components/Meta/Meta";
import Image from "next/image";
import Link from "next/link";

const OnePost = ({ post, user }) => {
  return (
    <div>
      <Meta title={post.title} />
      <div>
        <section className="text-gray-700 body-font overflow-hidden bg-white">
          <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              <img
                alt="Image du produit"
                className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
                src={post.image}
              />
              <div className="grid grid-cols-1 divide-y divide-green-500">
                <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                  <h2 className="text-sm title-font text-gray-500 tracking-widest">
                    {post.category}
                  </h2>
                  <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                    {post.title}
                  </h1>
                  <div className="flex mb-4">
                    <span className="flex items-center"></span>
                  </div>
                  <p className="leading-relaxed">{post.postNature}</p>
                  {post.postNature === "A vendre" ? (
                    <div className="flex">
                      <span className="title-font font-medium text-2xl text-gray-900">
                        ${post.price}€
                      </span>
                    </div>
                  ) : (
                    ""
                  )}

                  <p className="mt-4 leading-relaxed">{post.description}</p>
                </div>
                <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                  <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                    Informations sur le vendeur
                  </h1>
                  <p className="leading-relaxed">
                    Nom : {user.firstName} {user.lastName}
                  </p>
                  <p className="leading-relaxed">Contact : {user.email}</p>
                  <p className="leading-relaxed">
                    Possibles lieux d'échange : {post.place.join(", ")}
                  </p>
                  <p>petite carte</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default OnePost;
