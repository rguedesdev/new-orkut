// Imports Principais
import Image from "next/image";
import Link from "next/link";

// Sytle Sheet CSS
import "./styles.css";

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
    <section className="related-communities-container">
      <h2 className="related-community-title">Comunidades Relacionadas</h2>

      <ul className="related-communities">
        {relatedCommunities.map((relatedCommunity, index) => (
          <li key={index} className="related-community-container">
            <figure className="related-community-info">
              <Image
                className="related-community-picture"
                src={relatedCommunity.img}
                alt={relatedCommunity.name}
                width={0}
                height={0}
                priority
              />
              <figcaption className="related-community-name">
                {relatedCommunity.name}
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>

      <hr className="related-community-hr-faded" />

      <Link
        className="see-all-related-communities"
        href={`/`}
        aria-label="Ver todas as comunidades relacionadas"
      >
        <span>Ver todas</span> <FiMoreHorizontal size={20} />
      </Link>
    </section>
  );
}

export { RelatedCommunitiesComponent };
