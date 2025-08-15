// Imports Principais
import Image from "next/image";

// Style Sheet CSS
import "./navbar.css";

// Icons
import { RiHome3Line } from "react-icons/ri";
import { RiUserCommunityLine } from "react-icons/ri";
import { MdOutlinePermMedia } from "react-icons/md";
import { TbHelpSquareRounded } from "react-icons/tb";

// Images
import Logo from "../../public/orkut_logo.png";

function Navbar() {
  return (
    <nav>
      <Image
        className="logo"
        src={Logo}
        alt="Logo"
        width={0}
        height={0}
        priority
      />
      <ul>
        <li>
          <RiHome3Line size={20} />
          <span>Home</span>
        </li>
        <li>
          <RiUserCommunityLine size={20} />
          <span>Junte-se ao Orkut</span>
        </li>
        <li>
          <MdOutlinePermMedia size={20} />
          <span>Mídias</span>
        </li>
        <li>
          <TbHelpSquareRounded size={22} />
          <span>Ajuda</span>
        </li>
      </ul>
    </nav>
  );
}

export { Navbar };
