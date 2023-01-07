import Link from "next/link";

import Container from "./Container";

import styles from "../styles/Header.module.css";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <Container>
        <Logo width="30" height="30" />
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
