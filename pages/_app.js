import { Layout } from "../components/Layout/Layout";
import "tailwindcss/tailwind.css";
import { ProviderWrapper } from "../context/context";
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <ProviderWrapper>
        <Component {...pageProps} />
      </ProviderWrapper>
    </Layout>
  );
}

export default MyApp;
