import Image from "next/image";
import { useRouter } from "next/router";

import Button from "./Button";

import styles from "../styles/Card.module.css";

export default function Card({ pokemon }) {
  const router = useRouter();

  return (
    <div className={styles.card}>
      <figure className={styles.image}>
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
          width="120"
          height="120"
          alt={`${pokemon.name}`}
          priority
        />
      </figure>
      <span>#{pokemon.id}</span>
      <div className={styles.info}>
        <h3>{pokemon.name}</h3>
        <Button onClick={() => router.push(`/pokemon/${pokemon.id}`)}>
          Mais detalhes
        </Button>
      </div>
    </div>
  );
}
