import Image from "next/image";
import styles from "../styles/About.module.css";

export default function About() {
  return (
    <div className={styles.about}>
      <h2>Sobre o projeto</h2>
      <p>Este projeto tem como finalidade a prática e o aprendizado do framework Next (baseado e construído sobre a biblioteca React.JS), a estilização com CSS Modules e o consumo de APIs para o desenvolvimento deste projeto.</p>
      <Image src="/images/logo.png" width="200" height="100" alt="Charizard" />
    </div>
  )
}