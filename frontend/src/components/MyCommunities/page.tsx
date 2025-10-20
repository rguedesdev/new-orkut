// Imports Principais
import Image from "next/image";
import Link from "next/link";

// Sytle Sheet CSS
import styles from "./mycommunities.module.css";

// Icons
import { FiMoreHorizontal } from "react-icons/fi";

// Images
import Frieren from "../../../public/frieren.jpg";

function MyCommunitiesComponent() {
  const communities = [
    { img: Frieren, name: "Otakus da Zona Sul - SP" },
    { img: Frieren, name: "Sousou no Frieren" },
    { img: Frieren, name: "Otakus ZS" },
    { img: Frieren, name: "Otakus ZS" },
    { img: Frieren, name: "Otakus ZS" },
    { img: Frieren, name: "Otakus ZS" },
    { img: Frieren, name: "Otakus ZS" },
    { img: Frieren, name: "Otakus ZS" },
    { img: Frieren, name: "Otakus ZS" },
  ];

  return (
    <section className={styles.communitiesContainer}>
      <h2 className={styles.communityTitle}>
        Comunidades ({communities.length})
      </h2>

      <ul className={styles.communities}>
        {communities.map((community, index) => (
          <li key={index} className={styles.communityContainer}>
            <figure className={styles.communityInfo}>
              <Image
                className={styles.communityPicture}
                src={community.img}
                alt={community.name}
                width={0}
                height={0}
                priority
              />
              <figcaption className={styles.communityName}>
                {community.name}
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>

      <hr className={styles.communityHrFaded} />

      <Link
        className={styles.seeAllCommunities}
        href={`/`}
        aria-label="Ver todas as comunidades"
      >
        <span>Ver todas</span> <FiMoreHorizontal size={20} />
      </Link>
    </section>
  );
}

export { MyCommunitiesComponent };
