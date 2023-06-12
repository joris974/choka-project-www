import "normalize.css/normalize.css";
import "../styles/globals.css";
import "../styles/main.css";
import "bootstrap/dist/css/bootstrap.css";

import "../styles/bootstrap-icons.css";
import "../styles/templatemo-festava-live.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import DashboardLayout from "./layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Choka Project</title>
        <meta name="description" content="" /> {/* TODO */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="" /> {/* TODO */}
        <meta property="og:type" content="" /> {/* TODO */}
        <meta property="og:url" content="" /> {/* TODO */}
        <meta property="og:image" content="" /> {/* TODO */}
        <meta name="theme-color" content="#fafafa" />
      </Head>
      <DashboardLayout>
        <Component {...pageProps} />
      </DashboardLayout>
    </>
  );
}
