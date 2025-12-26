// Imports Principais
import Image from "next/image";

// Style Sheet CSS
import styles from "./searchmain.module.css";

// Icons
import { IoSearch } from "react-icons/io5";

// Images
import Kon from "../../../public/kon.jpg";

function SearchMain() {
  return (
    <section>
      <div className={styles.searchContainer}>
        <h1 className={styles.searchTitle}>O que você está procurando?</h1>
        <h2 className={styles.searchSubtitle}>
          Busque comunidades e pessoas no Orkkut
        </h2>
        <div className={styles.searchInput}>
          <IoSearch className={styles.searchIcon} size={20} />
          <input type="search" placeholder="Buscar no Orkkut" />
        </div>
        <div className={styles.searchResult}>
          <Image
            className={styles.searchImage}
            src={Kon}
            alt="Community Picture"
            width={100}
            height={100}
          />
          <span>
            <h3>Otakus da Zona Sul de São Paulo</h3>
            <h4>1 membro</h4>
            <h5>Animes e Mangas</h5>
          </span>
        </div>
      </div>
    </section>
  );
}

export { SearchMain };
