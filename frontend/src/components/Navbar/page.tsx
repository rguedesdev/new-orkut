"use client";

// Imports Principais
import { useState } from "react";
import Image from "next/image";

// Style Sheet CSS
import "./styles.css";

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
  const [autenticado, setAutenticado] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav>
      <Image
        className="logo"
        src={Logo3}
        alt="Logo"
        width={0}
        height={0}
        priority
      />

      {autenticado === false ? (
        <ul>
          <li className="nav-li">
            <RiHome3Line size={20} />
            <span>Home</span>
          </li>

          <li className="nav-li">
            <RiUserCommunityLine size={20} />
            <span>Junte-se ao Orkkut</span>
          </li>

          {/* <li>
          <MdOutlinePermMedia size={20} />
          <span>Mídias</span>
        </li> */}

          <li className="nav-li">
            <TbHelpSquareRounded size={22} />
            <span>Ajuda</span>
          </li>
        </ul>
      ) : (
        <ul>
          <li className="nav-li">
            <RiHome3Line size={20} />
            <span>Home</span>
          </li>

          <li className="nav-li">
            <MdOutlineViewTimeline size={20} />
            <span>Timeline</span>
          </li>

          <li className="nav-li">
            <CgProfile size={20} />
            <span>Perfil</span>
          </li>

          <li className="nav-li">
            <LiaUserFriendsSolid size={20} />
            <span>Amigos</span>
          </li>

          <li className="nav-li">
            <RiUserCommunityLine size={20} />
            <span>Comunidades</span>
          </li>

          <li className="nav-li">
            <TbHelpSquareRounded size={22} />
            <span>Ajuda</span>
          </li>
        </ul>
      )}

      <div className="search-container">
        <IoSearch className="search-icon" size={20} />
        <input type="search" placeholder="Buscar no Orkkut" />
      </div>

      <div className="nav-profile-info-container">
        <div className="nav-profile-picture-border">
          <Image
            className="nav-profile-picture"
            src={Kon}
            alt="Profile Picture"
            width={0}
            height={0}
            priority
          />
        </div>
        <h3 className="nav-name-nickname">Reinaldo Guedes</h3>

        {/* seta que abre/fecha dropdown */}
        <div className="dropdown-container">
          <RiArrowDownWideLine
            className="down-arrow"
            size={25}
            onClick={() => setDropdownOpen(!dropdownOpen)}
          />

          {/* menu dropdown */}
          <div className={`dropdown-menu ${dropdownOpen ? "show" : ""}`}>
            <ul>
              <li>
                <BsGear size={20} />
                <span>Configurações</span>
              </li>

              <li>
                <TbLogout size={20} />
                <span>Sair</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <ThemeToggle />
    </nav>
  );
}

export { Navbar };
