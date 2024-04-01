import { Provider } from "react-redux";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { Providers } from "@/store/store-provider";
import Layout from "@/layouts/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Providers>
  );
}
