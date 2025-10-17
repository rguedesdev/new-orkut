// Imports Principais
import Image from "next/image";
import Link from "next/link";

// Style Sheet CSS
import "./styles.css";

// Icons
import { FiMoreHorizontal } from "react-icons/fi";

import { MdOutlineTopic } from "react-icons/md";
import { MdShortText } from "react-icons/md";

import { BsChatLeftDots } from "react-icons/bs";
import { IoChatboxEllipsesOutline } from "react-icons/io5";

import { PiChatText } from "react-icons/pi";
import { MdOutlineReplyAll } from "react-icons/md";

import { FaRegPenToSquare } from "react-icons/fa6";

// Images
import Kon from "../../../public/kon.jpg";

function ForumComponent() {
  return (
    <section>
      <div className="forum-container">
        <div className="top-forum-elements">
          <h2 className="forum-title">Fórum</h2>

          <button className="create-topic-btn">
            <FaRegPenToSquare size={20} /> <span>Criar Tópico</span>
          </button>
        </div>

        <div className="topic-container">
          <Image
            className="forum-picture"
            src={Kon}
            alt="Forum Picture"
            width={0}
            height={0}
            priority
          />
          <div className="topic-texts">
            <h3 className="topic-title">
              <MdShortText size={30} />{" "}
              <span>Episódio 1 - 2ª Temporada (Contém Spoilers)</span>
            </h3>

            <p className="topic-info">
              <IoChatboxEllipsesOutline size={22} />
              <span>55 Respostas</span>
            </p>
          </div>
        </div>

        <hr className="forum-hr-faded" />

        <div className="topic-container">
          <Image
            className="forum-picture"
            src={Kon}
            alt="Forum Picture"
            width={0}
            height={0}
            priority
          />
          <div className="topic-texts">
            <h3 className="topic-title">
              <MdShortText size={30} />
              <span>Capítulo 155: Túmulo dos Vagalumes</span>
            </h3>

            <p className="topic-info">
              <IoChatboxEllipsesOutline size={22} />
              <span>95 Respostas</span>
            </p>
          </div>
        </div>

        <hr className="forum-hr-faded" />

        <div className="topic-container">
          <Image
            className="forum-picture"
            src={Kon}
            alt="Forum Picture"
            width={0}
            height={0}
            priority
          />
          <div className="topic-texts">
            <h3 className="topic-title">
              <MdShortText size={30} />
              <span>Capítulo 155: Túmulo dos Vagalumes</span>
            </h3>

            <p className="topic-info">
              <IoChatboxEllipsesOutline size={22} />
              <span>20 Respostas</span>
            </p>
          </div>
        </div>

        <hr className="forum-hr-faded" />
        <Link
          className="see-all-foruns"
          href={`/`}
          aria-label="Ver todos os depoimentos"
        >
          <span>Ver todos</span> <FiMoreHorizontal size={20} />
        </Link>
      </div>
    </section>
  );
}

export { ForumComponent };
