import SkeletonElement from "./SkeletonElement";
import Shimmer from "./Shimmer";

import styles from "../../styles/Skeletons.module.css";

export default function SkeletonCard() {
  return (
    <div className={`${styles.skeleton_wrapper} ${styles.light}`}>
      <div className={styles.skeleton_card}>
        {/* TITLE */}
        <div className={styles.skeleton_card_title}>
          <SkeletonElement type="title" />
        </div>
        {/* IMAGE */}
        <div className={styles.skeleton_card_image}>
          <SkeletonElement type="image" />
        </div>
        {/* DATA */}
        <div className={styles.skeleton_card_data}>
          <div className={styles.skeleton_card_details}>
            <SkeletonElement type="content" />
          </div>
          <div className={styles.skeleton_card_details}>
            <SkeletonElement type="content" />
          </div>
          <div className={styles.skeleton_card_details}>
            <SkeletonElement type="content" />
            <SkeletonElement type="content" />
          </div>
        </div>
      </div>
      <Shimmer />
    </div>
  );
}
