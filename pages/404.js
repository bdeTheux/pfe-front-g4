import Button from "../components/Button/Button";
import Head from "next/head";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Custom404() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>404 - beefound</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col justify-center items-center h-screen gap-6">
        <Image
          src="/images/vincimarket_logo (1).svg"
          width="120"
          height="120"
          className=""
        />
        <div className="flex flex-row divide-x-2 content-center items-center">
          <h1 className="ml-5 font-black text-7xl tracking-wide mr-2 pr-2">
            404
          </h1>
          <p className="text-lg tracking-wide font-bold font-mono text-gray-600 pl-5">
            Nous n'avons pas trouvé la page demandée
          </p>
        </div>
        <p className="tracking-wider font-light">
          Tous les chemins ne mène pas à <strong>beefound</strong>{" "}
          <span role="img" aria-label="bee">
            🐝
          </span>
        </p>
        <div className="">
          <Button onClick={() => router.push("/")} color="yellow">
            Retourner sur la page d'accueil
          </Button>
        </div>
      </div>
    </>
  );
}
