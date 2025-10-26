// Imports Principais
import Image from "next/image";
import Link from "next/link";

// Style Sheet CSS
import styles from "./basicinfo.module.css";

// Components
import { FiMapPin } from "react-icons/fi";

import { BiEdit } from "react-icons/bi";
import {
  MdPersonOutline,
  MdPersonAddAlt,
  MdOutlineMail,
  MdOutlinePermMedia,
  MdOutlineReport,
} from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";

import { IoAlbumsOutline } from "react-icons/io5";

import { IoVideocamOutline } from "react-icons/io5";

import { BiMessageDetail } from "react-icons/bi";
import { TbMessage } from "react-icons/tb";

import { IoGameControllerOutline } from "react-icons/io5";

import { GoCircleSlash } from "react-icons/go";
import { BsBan } from "react-icons/bs";

import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { SiChatbot } from "react-icons/si";
import { BiMessageSquareDots } from "react-icons/bi";
import { TbMessageDots } from "react-icons/tb";

// Images
import Kon from "../../../public/kon.jpg";
import Marina from "../../public/marina.png";

interface IUser {
  name: string;
  nickname: string;
  email: string;
}

function BasicInfoComponent({ user }: { user: IUser }) {
  return (
    <section>
      <div className={styles.basicInfoContainer}>
        <div className={styles.profileBorder}>
          <Image
            className={styles.profileImage}
            src={Kon}
            alt="Profile Image"
            width={200}
            height={200}
            priority
          />
        </div>

        <div className={styles.personalInfo}>
          <h1 className={styles.basicInfoNameNickname}>@{user.nickname}</h1>
          <p className={styles.genderMaritalStatus}>Masculino, Solteiro(a)</p>
          <p className={styles.stateCountry}>
            <FiMapPin size={15} />{" "}
            <span>{`${user.city ? user.city + "," : ""}`} Brasil</span>
          </p>
        </div>

        <hr className={styles.hrFaded} />

        <div className={styles.linksContainer}>
          <Link className={styles.link} href={`/home`}>
            <MdPersonAddAlt size={25} />
            <span>Adicionar</span>
          </Link>

          <Link className={styles.link} href={`/home`}>
            <BsBan size={20} />
            <span>Denunciar</span>
          </Link>

          <hr className={styles.hrFaded} />

          <Link className={styles.link} href={`/home`}>
            <MdPersonOutline size={25} />
            <span>Perfil</span>
          </Link>

          <Link className={styles.link} href={`/`}>
            <HiOutlineMail size={22} />
            <span>Scraps (13)</span>
          </Link>

          <Link href={`/`} className={styles.link}>
            <BiMessageSquareDots size={22} />
            <span>Chat</span>
          </Link>

          <Link className={styles.link} href={`/`}>
            <MdOutlinePermMedia size={22} />
            <span>Fotos (12)</span>
          </Link>

          <Link className={styles.link} href={`/`}>
            <IoVideocamOutline size={25} />
            <span>Vídeos (2)</span>
          </Link>

          <Link className={styles.link} href={`/`}>
            <TbMessage size={22} />
            <span>Depoimentos (2)</span>
          </Link>

          <Link className={styles.link} href={`/`}>
            <IoGameControllerOutline size={22} />
            <span>Jogos (2)</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export { BasicInfoComponent };
