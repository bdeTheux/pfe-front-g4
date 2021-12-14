const BanPage = () => {
  return (
    <div className="flex items-center align-middle w-screen h-screen bg-indigo-500">
      <div className="align-middle max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center flex-wrap">
          <p className="text-center text-white italic ml-3 font-thin truncate md:inline select-none">
            Vous avez été banni par l'un de nos administrateurs.
            <br />
            Veillez à respecter nos conditions pour avoir peut-être la chance de
            nous retrouver un jour...
          </p>
        </div>
      </div>
    </div>
  );
};
export default BanPage;
