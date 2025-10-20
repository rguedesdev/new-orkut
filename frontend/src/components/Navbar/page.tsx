"use client";

// Imports Principais
import { useState, useEffect, useContext } from "react";
import Image from "next/image";

// UserContext
import { UserContext } from "@/context/UserContext";

// Style Sheet CSS
import styles from "./navbar.module.css";

// Components
import { ThemeToggle } from "../ThemeToggle/page";

// Icons
import { CgProfile } from "react-icons/cg";
import { MdOutlineViewTimeline } from "react-icons/md";

import { RiHome3Line } from "react-icons/ri";
import { RiUserCommunityLine } from "react-icons/ri";
import { MdOutlinePermMedia } from "react-icons/md";
import { TbHelpSquareRounded } from "react-icons/tb";

import { LiaUserFriendsSolid } from "react-icons/lia";

import { IoSearch } from "react-icons/io5";

import { RiArrowDownWideLine } from "react-icons/ri";

import { BsGear } from "react-icons/bs";
import { HiOutlineLogout } from "react-icons/hi";
import { TbLogout } from "react-icons/tb";

// Images
import Logo from "../../public/orkut_logo.png";
import Logo2 from "../../public/orkut_logo2.png";
import Logo3 from "../../../public/orkut_logo3.png";
import Kon from "../../../public/kon.jpg";

function Navbar() {
  // const authenticated = useContext(UserContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const Context = useContext(UserContext);
  if (!Context) return null;

  const { userAuthenticated, logout } = Context;

  useEffect(() => {
    setDropdownOpen(false);
  }, []);

  return (
    <nav className={styles.navbar}>
      <Image
        className={styles.logo}
        src={Logo3}
        alt="Logo"
        width={120}
        height={0}
        priority
      />

      {userAuthenticated === false ? (
        <ul>
          {/* <li className="nav-li">
            <RiHome3Line size={20} />
            <span>Home</span>
          </li> */}

          <li className={styles.navLi}>
            <RiUserCommunityLine size={20} />
            <span>Junte-se ao Orkkut</span>
          </li>

          {/* <li>
          <MdOutlinePermMedia size={20} />
          <span>Mídias</span>
        </li> */}

          <li className={styles.navLi}>
            <TbHelpSquareRounded size={22} />
            <span>Ajuda</span>
          </li>
        </ul>
      ) : (
        <>
          {" "}
          <ul>
            {/* <li className="nav-li">
              <RiHome3Line size={20} />
              <span>Home</span>
            </li> */}

            <li className={styles.navLi}>
              <MdOutlineViewTimeline size={20} />
              <span>Timeline</span>
            </li>

            <li className={styles.navLi}>
              <CgProfile size={20} />
              <span>Perfil</span>
            </li>

            <li className={styles.navLi}>
              <LiaUserFriendsSolid size={20} />
              <span>Amigos</span>
            </li>

            <li className={styles.navLi}>
              <RiUserCommunityLine size={20} />
              <span>Comunidades</span>
            </li>

            <li className={styles.navLi}>
              <TbHelpSquareRounded size={22} />
              <span>Ajuda</span>
            </li>
          </ul>
          <div className={styles.searchContainer}>
            <IoSearch className={styles.searchIcon} size={20} />
            <input type="search" placeholder="Buscar no Orkkut" />
          </div>
          <div className={styles.navProfileInfoContainer}>
            <div className={styles.navProfilePictureBorder}>
              <Image
                className={styles.navProfilePicture}
                src={Kon}
                alt="Profile Picture"
                width={0}
                height={0}
                priority
              />
            </div>
            <h3 className={styles.navNameNickname}>Reinaldo Guedes</h3>

            {/* seta que abre/fecha dropdown */}
            <div className={styles.dropDownContainer}>
              <RiArrowDownWideLine
                className={styles.downArrow}
                size={25}
                onClick={() => setDropdownOpen(!dropdownOpen)}
              />

              {/* menu dropdown */}
              <div
                className={`${styles.dropDownMenu} ${
                  dropdownOpen ? styles.show : ""
                }`}
              >
                <ul>
                  <li>
                    <BsGear size={20} />
                    <span>Configurações</span>
                  </li>

                  <li onClick={() => logout()}>
                    <TbLogout size={20} />
                    <span>Sair</span>
                  </li>
                </ul>
              </div>
            </div>
            <ThemeToggle />
          </div>
        </>
      )}
    </nav>
  );
}

export { Navbar };
