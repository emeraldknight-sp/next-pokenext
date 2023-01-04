import Head from "next/head";

import Footer from "./Footer";
import Header from "./Header";
import Container from "./Container";

import styles from "../styles/Container.module.css";

export default function Layout({children}) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="favicon.ico" />
        <title>PokeNext</title>
      </Head>
      <Header />
      <main className={styles.main_container}>
        <Container>{children}</Container>
      </main>
      <Footer />
    </>
  )
}