import Head from "next/head";

import Footer from "./Footer";
import Header from "./Header";
import Container from "./Container";

import styles from "../styles/Container.module.css";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <link rel="canonical" href="https://next-pokenext.vercel.app" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="robots" content="" />
        <meta name="revisit-after" content="1 day" />
        <meta name="language" content="Portuguese" />
        <meta name="generator" content="N/A" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          name="description"
          content="pokenext api pokeapi pokemon pokedex"
        />
        <meta
          name="keywords"
          content="Pokenext, Pokeapi, Pokemon, CSS Modules, APIs, React, Next, Project"
        />
        <title>PokeNext</title>
      </Head>
      <Header />
      <main className={styles.main_container}>
        <Container>{children}</Container>
      </main>
      <Footer />
    </div>
  );
}
