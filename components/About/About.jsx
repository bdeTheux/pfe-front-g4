import Image from "next/image";

const About = () => {
  return (
    <div className="flex flex-row">
      <div className="hidden md:block z-0">
        <Image
          src="/images/about.png"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="z-0 h-screen"
        />
      </div>
      <div className="flex flex-col justify-center relative  h-screen items-center text-xl text-white ounded-lg bg-black bg-opacity-40 divide-y">
        <h1 className="font-extrabold text-2xl md:text-3xl text-center">
          À propos de nous
        </h1>
        <br></br>
        <p className=" mx-20 md:mx-60 text-center tracking-wide p-3 text-md md:text-xl">
          BeeFound est une plateforme à destination de tous les membres de la
          Communauté Vinci qui souhaitent vendre, donner ou acheter des objets
          en attente d’une seconde vie. Ce projet s’inscrit dans une démarche de
          développement durable visant à promouvoir le réemploi et le recyclage.
          beefound favorise donc la récupération, le recyclage, la
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
