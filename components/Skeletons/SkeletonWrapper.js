import styles from "../../styles/Skeletons.module.css";

export default function SkeletonWrapper({ children }) {
  return (
    <div className={`${styles.skeleton_wrapper} ${styles.light}`}>
      {children}
    </div>
  );
}
