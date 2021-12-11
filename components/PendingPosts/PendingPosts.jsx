import NoPendingPost from "../PendingPosts/NoPendingPost";
import OnePendingPost from "./OnePendingPost";
const PendingPosts = ({ posts }) => {
  console.log(posts);
  return (
    <div className="flex items-center justify-center bg-white">
      <div className="col-span-12">
        <div className="overflow-auto lg:overflow-visible sm:rounded-lg">
          <table className="border-separate space-y-6 text-sm">
            <thead className="bg-green-700">
              <tr>
                <th className="p-3">Titre</th>
                <th className="p-3 text-left">Description</th>
                <th className="p-3 text-left">Photos</th>
                <th className="p-3 text-left">Catégorie</th>
                <th className="p-3 text-left">Lieux d'échanges</th>
                <th className="p-3 text-left">Vendeur</th>
                <th className="p-3 text-left">Nature de l'annonce</th>
                <th className="p-3 text-left">Price</th>
                <th className="p-3 text-left">Gérer les annonces</th>
              </tr>
            </thead>
            <tbody>
              {posts.length == 0 ? (
                <NoPendingPost />
              ) : (
                posts.map((post) => {
                  return <OnePendingPost key={member._id} post={post} />;
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PendingPosts;
