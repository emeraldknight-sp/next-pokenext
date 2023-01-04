import Image from "next/image";
import Card  from "../components/Card";
import styles from "../styles/Home.module.css";

export async function getStaticProps() {
  const maxPokemon = 250;
  const api = "https://pokeapi.co/api/v2/pokemon";

  const res = await fetch(`${api}/?limit=${maxPokemon}`);
  const data = await res.json();

  data.results.forEach((item, index) => {
    item.id = index + 1;
  });

  return {
    props: {
      pokemons: data.results,
    },
  };
}

export default function Home({ pokemons }) {
  return (
    <>
      <div className={styles.logo}>
        <h1>
          <span>Poke</span>Next
        </h1>
        <Image
          src="/images/pokeball.png"
          width="50"
          height="50"
          alt="pokeball"
        />
      </div>
      <article className={styles.content}>
        {pokemons.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </article>
    </>
  );
}
