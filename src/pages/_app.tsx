import { Provider } from "react-redux";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Providers } from "@/store/store-provider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <Component {...pageProps} />
    </Providers>
  );
}
