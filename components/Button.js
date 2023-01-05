import styles from "../styles/Button.module.css";

export default function Button({
  children,
  variant = "primary",
  size = "medium",
  ...rest
}) {
  return (
    <button
      type="button"
      className={`${styles.button} ${styles[variant]} ${styles[size]}`}
      {...rest}
    >
      {children}
    </button>
  );
}
