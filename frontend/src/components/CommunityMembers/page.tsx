// Imports Principais
import Image from "next/image";
import Link from "next/link";

// Style Sheet CSS
import styles from "./communitymembers.module.css";

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
    <section aria-labelledby={styles.communityMembersTitle}>
      <div className={styles.communityMembersContainer}>
        <h2 id="friends-title" className={styles.communityMembersTitle}>
          Membros {/* ({members.length}) */}
        </h2>

        <ul className={styles.members}>
          {members.map((member, index) => (
            <li key={index} className={styles.memberContainer}>
              <figure className={styles.memberInfo}>
                <Image
                  className={styles.memberPicture}
                  src={member.img}
                  alt={`Foto de perfil de ${member.name}`}
                  width={80}
                  height={80}
                  priority
                />
                <figcaption className={styles.memberNameNickname}>
                  {member.name}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>

        <hr className={styles.memberHrFaded} />

        <Link
          className={styles.seeAllMembers}
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
