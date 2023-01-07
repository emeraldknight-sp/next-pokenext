import Image from "next/image";
import Link from "next/link";

import styles from "../styles/Logo.module.css";

export default function Logo({ width, height }) {
  return (
    <>
      <Link href="/" className={styles.logo}>
        <figure>
          <Image
            src="/images/ball.png"
            width={`${width}`}
            height={`${height}`}
            alt="PokeNext"
            priority
          />
        </figure>
        Pokenext
      </Link>
    </>
  );
}
