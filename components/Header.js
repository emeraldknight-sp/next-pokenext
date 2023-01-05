import Image from "next/image";
import Link from "next/link";

import Container from "./Container";

import styles from "../styles/Header.module.css";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.logo}>
          <Link href="/">
            <figure>
              <Image
                src="/images/pokeball.png"
                width="30"
                height="30"
                alt="PokeNext"
                priority
              />
            </figure>
          </Link>
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
  );
}
