// Imports Principais
import Image from "next/image";

// Style Sheet CSS
import styles from "./searchmain.module.css";

// Icons
import { IoSearch } from "react-icons/io5";

// Images
import Comu from "../../../public/eu_odeio2.png";

function SearchMain() {
  return (
    <section className={styles.searchMainContainer}>
      <h1 className={styles.searchTitle}>O que você está procurando?</h1>
      <h2 className={styles.searchSubtitle}>
        Busque comunidades e pessoas no Orkkut:
      </h2>
      <div className={styles.searchInput}>
        <IoSearch className={styles.searchIcon} size={20} />
        <input type="search" placeholder="Buscar no Orkkut..." />
      </div>
      <div className={styles.searchResult}>
        <Image
          className={styles.searchImage}
          src={Comu}
          alt="Community Picture"
          width={100}
          height={100}
        />
        <div className={styles.searchResultTexts}>
          <h3 className={styles.searchResultTitle}>
            Otakus da Zona Sul de São Paulo
          </h3>

          <div className={styles.searchResultInfo}>
            <h4>1 membro</h4>
            <h5>Animes e Mangas</h5>
          </div>
        </div>
      </div>
    </section>
  );
}

export { SearchMain };

// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import styles from "./searchmain.module.css";
// import { IoSearch } from "react-icons/io5";
// import Kon from "../../../public/kon.jpg";
// import api from "@/utils/api";

// function SearchMain() {
//   const [search, setSearch] = useState("");
//   const [results, setResults] = useState({
//     users: [] as any[],
//     communities: [] as any[],
//   });
//   const [isLoading, setIsLoading] = useState(false);

//   const handleSearch = async () => {
//     if (!search.trim()) return;

//     setIsLoading(true);

//     try {
//       const token = localStorage.getItem("token");

//       const response = await api.post(
//         "/graphql",
//         {
//           query: `
//             query GlobalSearch($search: String!) {
//               globalSearch(search: $search) {
//                 users {
//                   id
//                   name
//                   email
//                 }
//                 communities {
//                   id
//                   name
//                   category
//                   members
//                 }
//               }
//             }
//           `,
//           variables: {
//             search: search,
//           },
//         },
//         {
//           headers: token
//             ? {
//                 Authorization: `Bearer ${token}`,
//               }
//             : {},
//         },
//       );

//       if (response.data.errors) {
//         console.error(response.data.errors);
//         return;
//       }

//       setResults(response.data.data.globalSearch);
//     } catch (error) {
//       console.error("Erro na busca:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className={styles.page}>
//       <section className={styles.searchContainer}>
//         <h1 className={styles.searchTitle}>O que você está procurando?</h1>
//         <h2 className={styles.searchSubtitle}>
//           Busque comunidades e pessoas no Orkkut:
//         </h2>

//         <div className={styles.searchInput}>
//           <IoSearch className={styles.searchIcon} size={20} />
//           <input
//             type="search"
//             placeholder="Buscar no Orkkut..."
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             onKeyDown={(e) => {
//               if (e.key === "Enter") {
//                 handleSearch();
//               }
//             }}
//           />
//         </div>

//         {isLoading && <p>Buscando...</p>}

//         {results.communities.length > 0 && (
//           <>
//             <h2>Comunidades</h2>
//             {results.communities.map((community) => (
//               <div key={community.id} className={styles.searchResult}>
//                 <Image
//                   className={styles.searchImage}
//                   src={Kon}
//                   alt="Community Picture"
//                   width={100}
//                   height={100}
//                 />
//                 <div className={styles.searchResultTexts}>
//                   <h3 className={styles.searchResultTitle}>{community.name}</h3>
//                   <div className={styles.searchResultInfo}>
//                     <h4>{community.members} membros</h4>
//                     <h5>{community.category}</h5>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </>
//         )}

//         {results.users.length > 0 && (
//           <>
//             <h2>Usuários</h2>
//             {results.users.map((user) => (
//               <div key={user.id} className={styles.searchResult}>
//                 <Image
//                   className={styles.searchImage}
//                   src={Kon}
//                   alt="User Picture"
//                   width={100}
//                   height={100}
//                 />
//                 <div className={styles.searchResultTexts}>
//                   <h3 className={styles.searchResultTitle}>{user.name}</h3>
//                   <div className={styles.searchResultInfo}>
//                     <h4>{user.email}</h4>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </>
//         )}

//         {!isLoading &&
//           results.users.length === 0 &&
//           results.communities.length === 0 && (
//             <p>Nenhum resultado encontrado.</p>
//           )}
//       </section>
//     </div>
//   );
// }

// export { SearchMain };
