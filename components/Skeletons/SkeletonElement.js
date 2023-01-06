import styles from "../../styles/Skeletons.module.css"

export default function SkeletonElement({ type }) {
  return <div className={`${styles.skeleton} ${styles[`skeleton_${type}`]}`}></div>;
}
