// Imports Principais
import Image from "next/image";
import Link from "next/link";

// Style Sheet CSS
import "./styles.css";

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
    <section aria-labelledby="friends-title">
      <div className="friends-container">
        <h2 id="friends-title" className="friend-title">
          Amigos ({friends.length})
        </h2>

        <ul className="friends">
          {friends.map((friend, index) => (
            <li key={index} className="friend-container">
              <figure className="friend-info">
                <Image
                  className="friend-picture"
                  src={friend.img}
                  alt={`Foto de perfil de ${friend.name}`}
                  width={80}
                  height={80}
                  priority
                />
                <figcaption className="friend-name-nickname">
                  {friend.name}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>

        <hr className="friend-hr-faded" />

        <Link
          className="see-all-friends"
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
