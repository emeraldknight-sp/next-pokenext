import Image from "next/image";
import Link from "next/link";

import styles from "../styles/Header.module.css"
import Container from "./Container";

export default function Navbar () {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.logo}>
          <figure>
            <Image src="/images/pokeball.png" width="30" height="30" alt="PokeNext" />
          </figure>
          <h1>Pokenext</h1>
        </div>
        <nav className={styles.menu}>
          <ul>
            <li>
              <Link href="/">Início</Link>
            </li>
            <li>
              <Link href="/about">Sobre</Link>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  )
}