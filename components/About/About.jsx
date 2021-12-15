import Image from "next/image";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Box = styled.div`
  position: fixed;
  z-index: 0;
  top: 0;
`;

const About = () => {
  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }

  const [width, setWidth] = useState();
  const [height, setheight] = useState();

  useEffect(() => {
    const { width, height } = getWindowDimensions();
    setWidth(width);
    setheight(height);
  }, []);

  useEffect(() => {
    function handleResize() {
      const { width, height } = getWindowDimensions();

      setWidth(width);

      setheight(height);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (width && height) {
    return (
      <div>
        <Box>
          <Image src="/images/about2.png" width={width} height={height} />
        </Box>
        <div className="flex align-middle ">
          <p>
            À propos de nous : VinciMarket est une plateforme à destination de
            tous les membres de la Communauté Vinci qui souhaitent vendre,
            donner ou acheter des objets en attente d’une seconde vie. Ce projet
            s’inscrit dans une démarche de développement durable visant à
            promouvoir le réemploi et le recyclage. VinciMarket favorise donc la
            récupération, le recyclage, la revalorisation d’objets et de
            produits mais également les liens sociaux via des échanges et
            contacts entre les membres d’une même communauté. Vous pouvez, vous
            aussi, intégrer la plateforme et mettre du vôtre en accordant une
            deuxième chance à vos objets ou ceux des autres.
          </p>
        </div>
      </div>
    );
  }
  return null;
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
