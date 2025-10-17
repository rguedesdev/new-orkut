// Imports Principais
import Image from "next/image";
import Link from "next/link";

// Sytle Sheet CSS
import "./styles.css";

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
    <section className="communities-container">
      <h2 className="community-title">Comunidades ({communities.length})</h2>

      <ul className="communities">
        {communities.map((community, index) => (
          <li key={index} className="community-container">
            <figure className="community-info">
              <Image
                className="community-picture"
                src={community.img}
                alt={community.name}
                width={0}
                height={0}
                priority
              />
              <figcaption className="community-name">
                {community.name}
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>

      <hr className="community-hr-faded" />

      <Link
        className="see-all-communities"
        href={`/`}
        aria-label="Ver todas as comunidades"
      >
        <span>Ver todas</span> <FiMoreHorizontal size={20} />
      </Link>
    </section>
  );
}

export { MyCommunitiesComponent };
