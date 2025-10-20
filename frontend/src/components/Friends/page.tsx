// Imports Principais
import Image from "next/image";
import Link from "next/link";

// Style Sheet CSS
import styles from "./friends.module.css";

// Icons
import { FiMoreHorizontal } from "react-icons/fi";

// Images
import Kon from "../../../public/kon.jpg";

function FriendsComponent() {
  const friends = [
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
    <section aria-labelledby={styles.friendsTitle}>
      <div className={styles.friendsContainer}>
        <h2 id={styles.friendTitle} className={styles.friendTitle}>
          Amigos ({friends.length})
        </h2>

        <ul className={styles.friends}>
          {friends.map((friend, index) => (
            <li key={index} className={styles.friendContainer}>
              <figure className={styles.friendInfo}>
                <Image
                  className={styles.friendPicture}
                  src={friend.img}
                  alt={`Foto de perfil de ${friend.name}`}
                  width={80}
                  height={80}
                  priority
                />
                <figcaption className={styles.friendNameNickname}>
                  {friend.name}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>

        <hr className={styles.friendHrFaded} />

        <Link
          className={styles.seeAllFriends}
          href="/"
          aria-label="Ver todos os amigos"
        >
          <span>Ver todos</span> <FiMoreHorizontal size={20} />
        </Link>
      </div>
    </section>
  );
}

export { FriendsComponent };
