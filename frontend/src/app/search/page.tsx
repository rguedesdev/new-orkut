// Style Sheet CSS
import styles from "./search.module.css";

// Components
import { SearchAside } from "@/components/SearchAside/page";
import { SearchMain } from "@/components/SearchMain/page";

// Icons
import { IoSearch } from "react-icons/io5";

function Search() {
  return (
    <main className={styles.Main}>
      <SearchAside />
      <SearchMain />
    </main>
  );
}

export default Search;
