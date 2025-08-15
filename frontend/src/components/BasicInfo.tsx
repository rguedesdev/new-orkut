// Imports Principais
import Image from "next/image";
import Link from "next/link";

// Style Sheet CSS
import "./basicinfo.css";

// Components
import { FiMapPin } from "react-icons/fi";

import { BiEdit } from "react-icons/bi";
import { MdPersonOutline } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";

import { IoAlbumsOutline } from "react-icons/io5";
import { MdOutlinePermMedia } from "react-icons/md";

import { IoVideocamOutline } from "react-icons/io5";

import { BiMessageDetail } from "react-icons/bi";
import { TbMessage } from "react-icons/tb";

import { IoGameControllerOutline } from "react-icons/io5";

// Images
import Kon from "../../public/kon.jpg";

function BasicInfoComponent() {
  return (
    <section>
      <div className="basic-info-container">
        <div className="profile-border">
          <Image
            className="profile-image"
            src={Kon}
            alt="Profile Image"
            width={200}
            height={200}
            priority
          />
        </div>

        <div className="personal-info">
          <h1 className="name-nickname">Reinaldo Guedes</h1>
          <p>Masculino, Solteiro(a)</p>
          <p className="state-country">
            <FiMapPin size={15} /> <span>Brasil</span>
          </p>
        </div>

        <hr className="hr-line" />

        <div className="links-container">
          <Link className="link" href={`/home`}>
            <MdPersonOutline size={22} />
            <span>Perfil</span>
          </Link>

          <Link className="link" href={`/`}>
            <HiOutlineMail size={22} />
            <span>Scraps (13)</span>
          </Link>

          <Link className="link" href={`/`}>
            <MdOutlinePermMedia size={22} />
            <span>Fotos (12)</span>
          </Link>

          <Link className="link" href={`/`}>
            <IoVideocamOutline size={25} />
            <span>Vídeos (2)</span>
          </Link>

          <Link className="link" href={`/`}>
            <TbMessage size={22} />
            <span>Depoimentos (2)</span>
          </Link>

          <Link className="link" href={`/`}>
            <IoGameControllerOutline size={22} />
            <span>Jogos (2)</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export { BasicInfoComponent };
