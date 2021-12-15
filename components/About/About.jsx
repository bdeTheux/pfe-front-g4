import Image from "next/image";

const About = () => {
  return (
    <div className="">
      <div className="z-0">
        <Image
          src="/images/about2.png"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="z-0 h-screen"
        />
      </div>
      <div className="flex flex-col justify-center relative mx-10 h-screen items-center z-50 text-xl text-white">
        <h1 className="inline text-2xl font-semibold leading-none text-center">
          À propos de nous
        </h1>
        <br></br>
        <p className="mx-60 text-center tracking-wide">
          VinciMarket est une plateforme à destination de tous les membres de la
          Communauté Vinci qui souhaitent vendre, donner ou acheter des objets
          en attente d’une seconde vie. Ce projet s’inscrit dans une démarche de
          développement durable visant à promouvoir le réemploi et le recyclage.
          VinciMarket favorise donc la récupération, le recyclage, la
          revalorisation d’objets et de produits mais également les liens
          sociaux via des échanges et contacts entre les membres d’une même
          communauté. Vous pouvez, vous aussi, intégrer la plateforme et mettre
          du vôtre en accordant une deuxième chance à vos objets ou ceux des
          autres.
        </p>
      </div>
    </div>
  );
};

export default About;

/*
<div class="flex flex-col">
      <div id="photo">
        <Image src="/images/about.jpg" layout="fill"></Image>
      </div>
      <div id="aboutText">
        <Image src="/images/about.jpg" layout="fill"></Image>
      </div>
    </div>



<div className="flex flex-wrap">
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/2 mb-4 bg-gray-500">
          <>{ je n'ai pas réussi à utiliser la balise Image de next ici}</>
          <img src="/images/about.jpg" className="object-scale-down w-6/12" />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/2 mb-4 bg-gray-500">
          <p>dd</p>
        </div>
      </div>
*/
