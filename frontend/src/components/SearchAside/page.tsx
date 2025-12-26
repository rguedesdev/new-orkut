// Style Sheet CSS
import styles from "./searchaside.module.css";

// Icons

function SearchAside() {
  return (
    <aside>
      <div className={styles.searchAsideContainer}>
        <h1 className={styles.searchAsideTitle}>Categorias de Comunidades</h1>
        <div className={styles.categoriesList}>
          <span className={styles.category}>
            <input
              id="checkCategory1"
              className={styles.checkbox}
              type="checkbox"
            />
            <label className={styles.categoryLabel} htmlFor="checkCategory1">
              Pessoas
            </label>
          </span>

          <span className={styles.category}>
            <input
              id="checkCategory2"
              className={styles.checkbox}
              type="checkbox"
            />
            <label className={styles.categoryLabel} htmlFor="checkCategory2">
              Animes e Mangas
            </label>
          </span>

          <span className={styles.category}>
            <input
              id="checkCategory3"
              className={styles.checkbox}
              type="checkbox"
            />
            <label className={styles.categoryLabel} htmlFor="checkCategory3">
              Games
            </label>
          </span>

          <span className={styles.category}>
            <input
              id="checkCategory4"
              className={styles.checkbox}
              type="checkbox"
            />
            <label className={styles.categoryLabel} htmlFor="checkCategory4">
              Filmes e Series
            </label>
          </span>
        </div>
      </div>
    </aside>
  );
}

export { SearchAside };
