import Head from "next/head";

import Footer from "./Footer";
import Header from "./Header";

import Container from "./Container";

export default function Layout ({children}) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="favicon.ico" />
        <title>PokeNext</title>
      </Head>
      <Header />
      <main>
        <Container>{children}</Container>
      </main>
      <Footer />
    </>
  )
}