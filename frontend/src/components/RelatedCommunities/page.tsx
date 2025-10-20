// Imports Principais
import Image from "next/image";
import Link from "next/link";

// Sytle Sheet CSS
import styles from "./relatedcommunities.module.css";

// Icons
import { FiMoreHorizontal } from "react-icons/fi";

// Images
import Frieren from "../../../public/frieren.jpg";

function RelatedCommunitiesComponent() {
  const relatedCommunities = [
    { img: Frieren, name: "Otakus da Zona Sul - SP" },
    { img: Frieren, name: "Sousou no Frieren" },
    { img: Frieren, name: "Otakus ZS" },
    { img: Frieren, name: "Otakus da Zona Sul - SP" },
    { img: Frieren, name: "Sousou no Frieren" },
    { img: Frieren, name: "Otakus ZS" },
  ];

  return (
    <section className={styles.relatedCommunitiesContainer}>
      <h2 className={styles.relatedCommunityTitle}>Comunidades Relacionadas</h2>

      <ul className={styles.relatedCommunities}>
        {relatedCommunities.map((relatedCommunity, index) => (
          <li key={index} className={styles.relatedCommunityContainer}>
            <figure className={styles.relatedCommunityInfo}>
              <Image
                className={styles.relatedCommunityPicture}
                src={relatedCommunity.img}
                alt={relatedCommunity.name}
                width={0}
                height={0}
                priority
              />
              <figcaption className={styles.relatedCommunityName}>
                {relatedCommunity.name}
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>

      <hr className={styles.relatedCommunityHrFaded} />

      <Link
        className={styles.seeAllRelatedCommunities}
        href={`/`}
        aria-label="Ver todas as comunidades relacionadas"
      >
        <span>Ver todas</span> <FiMoreHorizontal size={20} />
      </Link>
    </section>
  );
}

export { RelatedCommunitiesComponent };
