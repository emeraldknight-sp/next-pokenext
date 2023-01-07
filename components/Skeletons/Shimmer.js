import styles from "../../styles/Skeletons.module.css";

export default function Shimmer() {
  return (
    <div className={styles.shimmer_wrapper}>
      <div className={styles.shimmer}></div>
    </div>
  );
}
