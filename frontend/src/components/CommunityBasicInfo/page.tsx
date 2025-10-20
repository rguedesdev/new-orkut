// Imports Principais
import Image from "next/image";
import Link from "next/link";

// Style Sheet CSS
import styles from "./communitybasicinfo.module.css";

// Components
import { MdOutlinePeopleAlt, MdOutlineForum } from "react-icons/md";
import { CgPoll } from "react-icons/cg";
import { RiUserCommunityLine } from "react-icons/ri";
import { AiOutlineStop } from "react-icons/ai";
import { GoCircleSlash } from "react-icons/go";
import { IoCloseCircleOutline } from "react-icons/io5";
import { RiCloseCircleLine } from "react-icons/ri";

import { RiMegaphoneLine } from "react-icons/ri";

// Images
import Frieren from "../../../public/frieren.jpg";

function CommunityBasicInfoComponent() {
  return (
    <section>
      <div className={styles.communityBasicInfoContainer}>
        <div className={styles.pictureBorder}>
          <Image
            className={styles.communityPicture}
            src={Frieren}
            alt="Profile Image"
            width={200}
            height={200}
            priority
          />
        </div>

        <div className={styles.communityInfo}>
          <h1 className={styles.communityBasicInfoName}>
            Sousou no Frieren Brasil
          </h1>
          <p className={styles.communityMembers}>
            <MdOutlinePeopleAlt size={22} />
            <span>2.345 membros</span>
          </p>

          <p className={styles.communityMembers}>
            <RiMegaphoneLine size={22} />
            <span>Promover</span>
          </p>
        </div>

        <hr className={styles.communityHrFaded} />

        <div className={styles.communityLinksContainer}>
          <Link className={styles.communityLink} href={`/`}>
            <MdOutlineForum size={22} />
            <span>Fórum</span>
          </Link>

          <Link className={styles.communityLink} href={`/`}>
            <CgPoll size={22} />
            <span>Enquetes</span>
          </Link>
        </div>

        <hr className={styles.communityHrFaded} />

        <div className={styles.communityLinksActions}>
          <h2 className={styles.actionTitle}>Ações</h2>
          <Link className={styles.communityLinkAction} href={`/`}>
            <RiUserCommunityLine size={22} />
            <span>Entrar na Comunidade</span>
          </Link>
          <Link className={styles.communityLinkAction} href={`/`}>
            <RiCloseCircleLine size={25} />
            <span>Sair da Comunidade</span>
          </Link>

          {/* <Link className="community-link-action" href={`/`}>
            <GoCircleSlash size={23} />
            <span>Denunciar Comunidade</span>
          </Link> */}
        </div>
      </div>
    </section>
  );
}

export { CommunityBasicInfoComponent };
