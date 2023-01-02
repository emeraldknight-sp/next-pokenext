import Link from "next/link"
import styles from "../styles/Footer.module.css"
import Container from "./Container"

import {FaInstagram, FaLinkedin, FaWhatsapp, FaDiscord} from "react-icons/fa"

export default function Footer () {

  const lastYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <Container>
        <p>Desenvolvido por David Almeida</p>
        <p><span>PokeNext</span>&copy; 2022 - {lastYear}</p> 
        <ul>
          <li>
            <Link
              href="https://www.instagram.com/davidalmeidadev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={24} />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.linkedin.com/in/davidalmeidadev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={24} />
            </Link>
          </li>
          <li>
            <Link href="/" target="_self" rel="noopener noreferrer">
              <FaWhatsapp size={24} />
            </Link>
          </li>
          <li>
            <Link href="https://discord.gg/RUx9WxZ" target="_blank" rel="noopener noreferrer">
              <FaDiscord size={24} />
            </Link>
          </li>
        </ul>
      </Container>
    </footer>
  )
}