// Imports Principais
import Image from "next/image";
import Link from "next/link";

// Style Sheet CSS
import "./community-details.css";

// Components
import { GoStarFill } from "react-icons/go";
import { FaSmileBeam, FaRegSmileBeam } from "react-icons/fa";
import { BsFillBoxFill, BsBox } from "react-icons/bs";
import { IoHeart, IoHeartHalf, IoHeartOutline } from "react-icons/io5";

import { LiaLanguageSolid } from "react-icons/lia";
import { IoLanguage } from "react-icons/io5";
import { IoCalendarOutline } from "react-icons/io5";
import { RiGitRepositoryPrivateLine } from "react-icons/ri";
import { MdPersonPin } from "react-icons/md";
import { RiVipCrownLine } from "react-icons/ri";
import { FaRegListAlt } from "react-icons/fa";
import { TbCategory2 } from "react-icons/tb";
import { LiaGlobeAmericasSolid } from "react-icons/lia";

// Images
import Frieren from "../../public/frieren.jpg";

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

        <ul className="attributes-container">
          <li className="attribute-container">
            <h2 className="attribute-title">Fãs</h2>
            <div className="attribute-info">
              <GoStarFill className="fans-attribute-icon" size={22} />
              <span>50</span>
            </div>
          </li>

          <li className="attribute-container">
            <h2 className="attribute-title">Confiável</h2>
            <div className="attribute-info">
              <FaSmileBeam className="trusted-attribute-icon" size={22} />
              <FaRegSmileBeam className="trusted-attribute-icon" size={22} />
              <FaRegSmileBeam className="trusted-attribute-icon" size={22} />
            </div>
          </li>

          <li className="attribute-container">
            <h2 className="attribute-title">Legal</h2>
            <div className="attribute-info">
              <BsFillBoxFill className="cool-attribute-icon" size={22} />
              <BsFillBoxFill className="cool-attribute-icon" size={22} />
              <BsBox className="cool-attribute-icon" size={22} />
            </div>
          </li>

          <li className="attribute-container">
            <h2 className="attribute-title">Sexy</h2>
            <div className="attribute-info">
              <IoHeart className="sexy-attribute-icon" size={25} />
              <IoHeartHalf className="sexy-attribute-icon" size={25} />
              <IoHeartOutline className="sexy-attribute-icon" size={25} />
            </div>
          </li>
        </ul>

        <p>
          <TbCategory2 size={20} /> <span>Categoria: Anime/Mangá</span>
        </p>
        <p>
          <RiGitRepositoryPrivateLine size={20} />
          <span>Privacidade: Público</span>
        </p>
        <p>
          <IoCalendarOutline size={20} /> <span>Criada em: 15/08/2025</span>
        </p>
        <p>
          <LiaGlobeAmericasSolid size={20} /> <span>País: Brasil</span>
        </p>
        <p>
          <IoLanguage size={20} /> <span>Idioma: Português (Brasil)</span>
        </p>
        <p>
          <RiVipCrownLine size={20} />
          <span>Proprietário: Reinaldo Guedes</span>
        </p>
        <p>Moderadores: Muh, Rika Get Set</p>

        <dl className="user-info-extended-container">
          <div className="info-pair">
            <dt>Quem sou eu</dt>
            <dd>Uma pessoa qualquer em busca de liberdade.</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

export { CommunityDetailsComponent };
