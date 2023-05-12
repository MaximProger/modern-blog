import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { getStrapiMedia } from "./api/media";
import { createContext } from "react";
import { fetchAPI } from "./api";
import App from "next/app";
import Head from "next/head";

export const GlobalContext = createContext({});

export default function MyApp({ Component, pageProps }: AppProps) {
  const { global } = pageProps;

  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          href={getStrapiMedia(global.attributes.favicon)}
        />
      </Head>
      <GlobalContext.Provider value={global.attributes}>
        <Component {...pageProps} />
      </GlobalContext.Provider>
    </>
  );
}

MyApp.getInitialProps = async (ctx: any) => {
  const appProps = await App.getInitialProps(ctx);

  const globalRes = await fetchAPI("/global", {
    populate: {
      favicon: "*",
      defaultSeo: {
        populate: "*",
      },
    },
  });

  return { ...appProps, pageProps: { global: globalRes.data } };
};
