import styles from "./loading.module.css";

function Loading() {
  return (
    <section className={styles.loadingContainer}>
      <span className={styles.loader}></span>
    </section>
  );
}

export { Loading };
