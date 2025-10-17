// Imports Principais
import Image from "next/image";
import Link from "next/link";

// Style Sheet CSS
import "./styles.css";

// Icons
import { FiMoreHorizontal } from "react-icons/fi";

// Images
import Kon from "../../../public/kon.jpg";

function CommunityMembersComponent() {
  const members = [
    { name: "Rika Get Set", img: Kon },
    { name: "Rika Get Set", img: Kon },
    { name: "Rika Get Set", img: Kon },
    { name: "Rika Get Set", img: Kon },
    { name: "Rika Get Set", img: Kon },
    { name: "Rika Get Set", img: Kon },
    { name: "Rika Get Set", img: Kon },
    { name: "Rika Get Set", img: Kon },
    { name: "Rika Get Set", img: Kon },
  ];

  return (
    <section aria-labelledby="community-members-title">
      <div className="community-members-container">
        <h2 id="friends-title" className="community-members-title">
          Membros ({members.length})
        </h2>

        <ul className="members">
          {members.map((member, index) => (
            <li key={index} className="member-container">
              <figure className="member-info">
                <Image
                  className="member-picture"
                  src={member.img}
                  alt={`Foto de perfil de ${member.name}`}
                  width={80}
                  height={80}
                  priority
                />
                <figcaption className="member-name-nickname">
                  {member.name}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>

        <hr className="member-hr-faded" />

        <Link
          className="see-all-members"
          href="/"
          aria-label="Ver todos os amigos"
        >
          <span>Ver todos</span> <FiMoreHorizontal size={20} />
        </Link>
      </div>
    </section>
  );
}

export { CommunityMembersComponent };
