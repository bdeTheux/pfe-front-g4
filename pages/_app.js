import Layout from "../components/Layout/Layout";
import "tailwindcss/tailwind.css";
import { AppWrapper } from "../context/AppContext";
function MyApp({ Component, pageProps }) {
  return (
    <AppWrapper>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppWrapper>
  );
}

export default MyApp;
