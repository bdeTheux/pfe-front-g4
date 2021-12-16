import Head from "next/head";
import Swipe from "../components/Swipe/Swipe";

export default function discover() {
  return (
    <div>
      <Head>
        <title>Discover - beefound</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Swipe />
      </div>
    </div>
  );
}
