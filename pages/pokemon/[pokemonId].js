import Image from "next/image";
import { useRouter } from "next/router";
import { FaAngleLeft } from "react-icons/fa";

import Button from "../../components/Button";
import Loading from "../../components/Loading";
import SkeletonPokemon from "../../components/Skeletons/SkeletonPokemon";

import styles from "../../styles/Pokemon.module.css";

export const getStaticPaths = async () => {
  const maxPokemons = 250;
  const api = "https://pokeapi.co/api/v2/pokemon/";

  const res = await fetch(`${api}/?limit=${maxPokemons}`);
  const data = await res.json();

  const paths = data.results.map((pokemon, index) => {
    return {
      params: {
        pokemonId: (index + 1).toString(),
      },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.pokemonId;
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await res.json();

  return {
    props: {
      pokemon: data,
    },
  };
};

export default function Pokemon({ pokemon }) {
  const router = useRouter();

  // if (router.isFallback) {
  //   return (
  //     <Loading>
  //       <SkeletonPokemon />
  //     </Loading>
  //   );
  // }

  return (
    <div className={styles.main_container}>
      {pokemon && (
        <div className={styles.card}>
          <div className={styles.title}>
            <h3>{pokemon.name}</h3>
          </div>
          <figure>
            <Image
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
              width="200"
              height="200"
              alt={`${pokemon.name}`}
              priority
            />
          </figure>
          <div className={styles.data}>
            <div className={styles.data_id}>
              <span>#{pokemon.id}</span>
            </div>
            <div className={styles.data_type}>
              <p>Tipo:</p>
              <ul>
                {pokemon.types.map((item, index) => (
                  <li
                    key={index}
                    className={`${styles.type} ${
                      styles["type_" + item.type.name]
                    }`}
                  >
                    {item.type.name}
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.data_details}>
              <div className={styles.data_height}>
                <p>Altura:</p>
                <span>{pokemon.height / 10} Kg</span>
              </div>
              <div className={styles.data_weight}>
                <p>Peso:</p>
                <span>{pokemon.weight / 10} Kg</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {!pokemon && (
        <Loading>
          <SkeletonPokemon theme="light" />
        </Loading>
      )}

      <Button variant="secondary" size="large" onClick={() => router.push("/")}>
        <FaAngleLeft /> Voltar
      </Button>
    </div>
  );
}
