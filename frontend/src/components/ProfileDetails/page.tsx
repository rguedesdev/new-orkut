// Imports Principais
import "./styles.css";

// Icons
import { GoStarFill } from "react-icons/go";
import { FaSmileBeam, FaRegSmileBeam } from "react-icons/fa";
import { BsFillBoxFill, BsBox } from "react-icons/bs";
import { IoHeart, IoHeartHalf, IoHeartOutline } from "react-icons/io5";
import { RiArrowRightWideLine } from "react-icons/ri";

function ProfileDetailsComponent() {
  return (
    <section>
      <div className="profile-details-container">
        <div className="breadcrumbs">
          <span>Home</span>
          <RiArrowRightWideLine className="breadcrumbs-icon" size={20} />
          <span className="breadcrumbs-active">Perfil</span>
        </div>
        <h1 className="profiledetails-name-nickname">
          Reinaldo Guedes do Nascimento
        </h1>

        <blockquote className="thoughts">
          "Vivendo e aprendendo!" - Oe Kintaro.
        </blockquote>

        <ul className="attributes-container">
          <li className="attribute-container">
            <h2 className="attribute-title">Fãs</h2>
            <div className="attribute-info">
              <GoStarFill className="fans-attribute-icon" size={22} />
              <span>50</span>
            </div>
          </li>

          <li className="attribute-container">
            <h2 className="attribute-title">Confiável</h2>
            <div className="attribute-info">
              <FaSmileBeam className="trusted-attribute-icon" size={22} />
              <FaRegSmileBeam className="trusted-attribute-icon" size={22} />
              <FaRegSmileBeam className="trusted-attribute-icon" size={22} />
            </div>
          </li>

          <li className="attribute-container">
            <h2 className="attribute-title">Legal</h2>
            <div className="attribute-info">
              <BsFillBoxFill className="cool-attribute-icon" size={22} />
              <BsFillBoxFill className="cool-attribute-icon" size={22} />
              <BsBox className="cool-attribute-icon" size={22} />
            </div>
          </li>

          <li className="attribute-container">
            <h2 className="attribute-title">Sexy</h2>
            <div className="attribute-info">
              <IoHeart className="sexy-attribute-icon" size={25} />
              <IoHeart className="sexy-attribute-icon" size={25} />
              <IoHeartOutline className="sexy-attribute-icon" size={25} />
            </div>
          </li>
        </ul>

        <dl className="user-info-extended-container">
          <div className="info-pair">
            <dt>Quem sou eu</dt>
            <dd>Uma pessoa qualquer em busca de liberdade.</dd>
          </div>

          <div className="info-pair">
            <dt>Aniversário</dt>
            <dd>13 de Junho</dd>
          </div>

          <div className="info-pair">
            <dt>Idade</dt>
            <dd>35 anos</dd>
          </div>

          <div className="info-pair">
            <dt>Interesses</dt>
            <dd>Namoro, Amizade</dd>
          </div>

          <div className="info-pair">
            <dt>Relacionamento</dt>
            <dd>Solteiro(a)</dd>
          </div>

          <div className="info-pair">
            <dt>Filhos</dt>
            <dd>Não tenho</dd>
          </div>

          <div className="info-pair">
            <dt>Etnia</dt>
            <dd>Pardo</dd>
          </div>

          <div className="info-pair">
            <dt>Humor</dt>
            <dd>Extrovertido(a)</dd>
          </div>

          <div className="info-pair">
            <dt>Orientação Sexual</dt>
            <dd>Heterosexual</dd>
          </div>

          <div className="info-pair">
            <dt>Estilo</dt>
            <dd>Urbano</dd>
          </div>

          <div className="info-pair">
            <dt>Fumo</dt>
            <dd>Não</dd>
          </div>

          <div className="info-pair">
            <dt>Bebo</dt>
            <dd>Não</dd>
          </div>

          <div className="info-pair">
            <dt>Animais de estimação</dt>
            <dd>Gosto</dd>
          </div>

          <div className="info-pair">
            <dt>Moro</dt>
            <dd>Com meus pais</dd>
          </div>

          <div className="info-pair">
            <dt>Cidade natal</dt>
            <dd>Rio de Janeiro</dd>
          </div>

          <div className="info-pair">
            <dt>Paixões</dt>
            <dd>Animes, Mangás, Rock, J-Music</dd>
          </div>

          <div className="info-pair">
            <dt>Esportes</dt>
            <dd>Futebol, Futebol Americano</dd>
          </div>

          <div className="info-pair">
            <dt>Atividades</dt>
            <dd>Não tenho TT^TT</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

export { ProfileDetailsComponent };
