import SkeletonElement from "./SkeletonElement";
import SkeletonWrapper from "./SkeletonWrapper";
import Shimmer from "./Shimmer";

import styles from "../../styles/Skeletons.module.css";

export default function SkeletonPokemon() {
  return (
    <SkeletonWrapper>
      <div className={styles.skeleton_pokemon}>
        <div className={styles.skeleton_pokemon_title}>
          <SkeletonElement type="title" />
        </div>
        <div className={styles.skeleton_pokemon_image}>
          <SkeletonElement type="image" />
        </div>
        <div className={styles.skeleton_pokemon_data}>
          <div className={styles.skeleton_pokemon_details}>
            <SkeletonElement type="content" />
          </div>
          <div className={styles.skeleton_pokemon_details}>
            <SkeletonElement type="content" />
          </div>
          <div className={styles.skeleton_pokemon_details}>
            <SkeletonElement type="content" />
            <SkeletonElement type="content" />
          </div>
        </div>
      </div>
      <Shimmer />
    </SkeletonWrapper>
  );
}
