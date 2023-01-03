import Image from "next/image";
import Link from "next/link";

import styles from "../styles/Card.module.css"

export default function Card({pokemon}) {
  return (
    <div className={styles.card}>
      <figure className={styles.image}>
        <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} width="120" height="120" alt={`${pokemon.name}`} />
      </figure>
      <span>#{pokemon.id}</span>
      <div className={styles.info}>
        <h3>{pokemon.name}</h3>
        <button>
          <Link href={`/pokemon/${pokemon.id}`}>Mais detalhes</Link>
        </button>
      </div>
    </div>
  )
}