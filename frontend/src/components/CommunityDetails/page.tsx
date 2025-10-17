// Imports Principais
import Image from "next/image";
import Link from "next/link";

// Style Sheet CSS
import "./styles.css";

// Components
import { IoLanguage } from "react-icons/io5";
import { IoCalendarOutline } from "react-icons/io5";
import { RiGitRepositoryPrivateLine } from "react-icons/ri";
import { TbCategory2 } from "react-icons/tb";
import { LiaGlobeAmericasSolid } from "react-icons/lia";
import { FaShieldHalved } from "react-icons/fa6";
import { RiVipCrownLine } from "react-icons/ri";

function CommunityDetailsComponent() {
  return (
    <section>
      <div className="community-details-container">
        <h1 className="community-name">Sousou no Frieren Brasil</h1>

        {/* <blockquote className="thoughts">
          "Vivendo e aprendendo!" - Oe Kintaro.
        </blockquote> */}

        <p>
          Fãs de Sousou no Frieren, unite-se! Aqui compartilhamos teorias,
          fanarts, memes e tudo sobre nossas aventuras com Frieren. Venha fazer
          parte dessa jornada!
        </p>

        <hr className="communitydetails-hr-faded" />

        <div className="community-info-container">
          <div className="community-info-column">
            <div className="community-info-line">
              <dt className="community-info-line-label">
                <TbCategory2 size={20} /> <span>Categoria</span>
              </dt>
              <dd className="community-info-line-value">
                <span>Anime/Mangá</span>
              </dd>
            </div>

            <div className="community-info-line">
              <dt className="community-info-line-label">
                <RiGitRepositoryPrivateLine size={20} />{" "}
                <span>Privacidade</span>
              </dt>
              <dd className="community-info-line-value">
                <span>Público</span>
              </dd>
            </div>

            <div className="community-info-line">
              <dt className="community-info-line-label">
                <IoCalendarOutline size={20} /> <span>Criada em</span>
              </dt>
              <dd className="community-info-line-value">
                <span>15/08/2025</span>
              </dd>
            </div>

            <div className="community-info-line">
              <dt className="community-info-line-label">
                <LiaGlobeAmericasSolid size={20} /> <span>País</span>
              </dt>
              <dd className="community-info-line-value">
                <span>Brasil</span>
              </dd>
            </div>
          </div>

          <div className="community-info-column">
            <div className="community-info-line">
              <dt className="community-info-line-label">
                <IoLanguage size={20} /> <span>Idioma</span>
              </dt>
              <dd className="community-info-line-value">
                <span>Português (Brasil)</span>
              </dd>
            </div>

            <div className="community-info-line">
              <dt className="community-info-line-label">
                <RiVipCrownLine size={20} /> <span>Proprietário</span>
              </dt>
              <dd className="community-info-line-value">
                <span>Reinaldo Guedes</span>
              </dd>
            </div>

            <div className="community-info-line">
              <dt className="community-info-line-label">
                <FaShieldHalved size={18} /> <span>Moderadores</span>
              </dt>
              <dd className="community-info-line-value">
                <span>Muh, Rika Get Set</span>
              </dd>
            </div>

            <div className="community-info-line">
              <dt className="community-info-line-label">
                <span>Extra</span>
              </dt>
              <dd className="community-info-line-value">
                <span>Outro valor</span>
              </dd>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { CommunityDetailsComponent };
