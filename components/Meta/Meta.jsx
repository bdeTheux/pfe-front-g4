import Head from "next/head";

const Meta = ({ title, keywords }) => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="keywords" content={keywords} />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "VinciMarket",
  keywords: "seconde main, market, vetements, achat en ligne",
};

export default Meta;
