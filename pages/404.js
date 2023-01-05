import Image from "next/image";

import styles from "../styles/404.module.css";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <h3>404 | Esta página não existe.</h3>
      <figure>
        <Image src="/images/ash.png" width="100" height="200" alt="Ash" />
      </figure>
    </div>
  );
}
