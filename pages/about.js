import Image from "next/image";
import { useRouter } from "next/router";
import { FaAngleLeft } from "react-icons/fa";

import Button from "../components/Button";

import styles from "../styles/About.module.css";

export default function About() {
  const router = useRouter();

  return (
    <div className={styles.about}>
      <h2>Sobre o projeto</h2>
      <p>
        Este projeto foi desenvolvido com base nas aulas de Matheus Battisti no
        Youtube para o aprendizado do framework Next (baseado em React), para a
        prática da estilização utilizando CSS Modules, e além disso, também para
        o consumo de APIs e a disposição dos dados para o usuário construindo
        uma interface que seja responsiva para diferentes tamanhos de viewport
        de cada usuário com Mobile First.
      </p>
      <Image src="/images/logo.png" width="200" height="100" alt="Charizard" />
      <Button variant="secondary" onClick={() => router.push("/")}>
        <FaAngleLeft size={24} />
        Voltar
      </Button>
    </div>
  );
}
