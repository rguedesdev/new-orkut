// Imports Principais
import Image from "next/image";
import Link from "next/link";

// Style Sheet CSS
import "./styles.css";

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
      <div className="community-basic-info-container">
        <div className="picture-border">
          <Image
            className="community-picture"
            src={Frieren}
            alt="Profile Image"
            width={200}
            height={200}
            priority
          />
        </div>

        <div className="community-info">
          <h1 className="community-basicinfo-name">Sousou no Frieren Brasil</h1>
          <p className="community-members">
            <MdOutlinePeopleAlt size={22} />
            <span>2.345 membros</span>
          </p>

          <p className="community-members">
            <RiMegaphoneLine size={22} />
            <span>Promover</span>
          </p>
        </div>

        <hr className="community-hr-faded" />

        <div className="community-links-container">
          <Link className="community-link" href={`/`}>
            <MdOutlineForum size={22} />
            <span>Fórum</span>
          </Link>

          <Link className="community-link" href={`/`}>
            <CgPoll size={22} />
            <span>Enquetes</span>
          </Link>
        </div>

        <hr className="community-hr-faded" />

        <div className="community-links-actions">
          <h2 className="action-title">Ações</h2>
          <Link className="community-link-action" href={`/`}>
            <RiUserCommunityLine size={22} />
            <span>Entrar na Comunidade</span>
          </Link>
          <Link className="community-link-action" href={`/`}>
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
