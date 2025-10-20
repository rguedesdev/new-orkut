// Imports Principais
import Image from "next/image";
import Link from "next/link";

// Style Sheet CSS
import styles from "./communitydetails.module.css";

// Components
import { IoLanguage } from "react-icons/io5";
import { IoCalendarOutline } from "react-icons/io5";
import { RiGitRepositoryPrivateLine } from "react-icons/ri";
import { TbCategory2 } from "react-icons/tb";
import { LiaGlobeAmericasSolid } from "react-icons/lia";
import { FaShieldHalved } from "react-icons/fa6";
import { RiVipCrownLine } from "react-icons/ri";
import { style } from "framer-motion/client";

function CommunityDetailsComponent() {
  return (
    <section>
      <div className={styles.communityDetailsContainer}>
        <h1 className={styles.communityName}>Sousou no Frieren Brasil</h1>

        {/* <blockquote className="thoughts">
          "Vivendo e aprendendo!" - Oe Kintaro.
        </blockquote> */}

        <p>
          Fãs de Sousou no Frieren, unite-se! Aqui compartilhamos teorias,
          fanarts, memes e tudo sobre nossas aventuras com Frieren. Venha fazer
          parte dessa jornada!
        </p>

        <hr className={styles.communityDetailsHrFaded} />

        <div className={styles.communityInfoContainer}>
          <div className={styles.communityInfoColumn}>
            <div className={styles.communityInfoLine}>
              <dt className={styles.communityInfoLineLabel}>
                <TbCategory2 size={20} /> <span>Categoria</span>
              </dt>
              <dd className={styles.communityInfoLineValue}>
                <span>Anime/Mangá</span>
              </dd>
            </div>

            <div className={styles.communityInfoLine}>
              <dt className={styles.communityInfoLineLabel}>
                <RiGitRepositoryPrivateLine size={20} />{" "}
                <span>Privacidade</span>
              </dt>
              <dd className={styles.communityInfoLineValue}>
                <span>Público</span>
              </dd>
            </div>

            <div className={styles.communityInfoLine}>
              <dt className={styles.communityInfoLineLabel}>
                <IoCalendarOutline size={20} /> <span>Criada em</span>
              </dt>
              <dd className={styles.communityInfoLineValue}>
                <span>15/08/2025</span>
              </dd>
            </div>

            <div className={styles.communityInfoLine}>
              <dt className={styles.communityInfoLineLabel}>
                <LiaGlobeAmericasSolid size={20} /> <span>País</span>
              </dt>
              <dd className={styles.communityInfoLineValue}>
                <span>Brasil</span>
              </dd>
            </div>
          </div>

          <div className={styles.communityInfoColumn}>
            <div className={styles.communityInfoLine}>
              <dt className={styles.communityInfoLineLabel}>
                <IoLanguage size={20} /> <span>Idioma</span>
              </dt>
              <dd className={styles.communityInfoLineValue}>
                <span>Português (Brasil)</span>
              </dd>
            </div>

            <div className={styles.communityInfoLine}>
              <dt className={styles.communityInfoLineLabel}>
                <RiVipCrownLine size={20} /> <span>Proprietário</span>
              </dt>
              <dd className={styles.communityInfoLineValue}>
                <span>Reinaldo Guedes</span>
              </dd>
            </div>
            <div className={styles.communityInfoLine}>
              <dt className={styles.communityInfoLineLabel}>
                <FaShieldHalved size={18} /> <span>Moderadores</span>
              </dt>
              <dd className={styles.communityInfoLineValue}>
                <span>Muh, Rika Get Set</span>
              </dd>
            </div>

            <div className={styles.communityInfoLine}>
              <dt className={styles.communityInfoLineLabel}>
                <span>Extra</span>
              </dt>
              <dd className={styles.communityInfoLineValue}>
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
