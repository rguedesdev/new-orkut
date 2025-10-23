// Imports Principais
import styles from "./profiledetails.module.css";

// Icons
import { GoStarFill } from "react-icons/go";
import { FaSmileBeam, FaRegSmileBeam } from "react-icons/fa";
import { BsFillBoxFill, BsBox } from "react-icons/bs";
import { IoHeart, IoHeartHalf, IoHeartOutline } from "react-icons/io5";
import { RiArrowRightWideLine } from "react-icons/ri";

function ProfileDetailsComponent({ user }) {
  return (
    <section>
      <div className={styles.profileDetailsContainer}>
        <div className={styles.breadcrumbs}>
          <span>Home</span>
          <RiArrowRightWideLine className={styles.breadcrumbsIcon} size={20} />
          <span className={styles.breadcrumbsAactive}>Perfil</span>
        </div>
        <h1 className={styles.profileDetailsNameNickname}>
          Reinaldo Guedes do Nascimento
        </h1>

        <blockquote className={styles.thoughts}>
          "Vivendo e aprendendo!" - Oe Kintaro.
        </blockquote>

        <ul className={styles.attributesContainer}>
          <li className={styles.attributeContainer}>
            <h2 className={styles.attributeTitle}>Fãs</h2>
            <div className={styles.attributeInfo}>
              <GoStarFill className={styles.fansAttributeIcon} size={22} />
              <span>50</span>
            </div>
          </li>

          <li className={styles.attributeContainer}>
            <h2 className={styles.attributeTitle}>Confiável</h2>
            <div className={styles.attributeInfo}>
              <FaSmileBeam className={styles.trustedAttributeIcon} size={22} />
              <FaRegSmileBeam
                className={styles.trustedAttributeIcon}
                size={22}
              />
              <FaRegSmileBeam
                className={styles.trustedAttributeIcon}
                size={22}
              />
            </div>
          </li>

          <li className={styles.attributeContainer}>
            <h2 className={styles.attributeTitle}>Legal</h2>
            <div className={styles.attributeInfo}>
              <BsFillBoxFill className={styles.coolAttributeIcon} size={22} />
              <BsFillBoxFill className={styles.coolAttributeIcon} size={22} />
              <BsBox className={styles.coolAttributeIcon} size={22} />
            </div>
          </li>

          <li className={styles.attributeContainer}>
            <h2 className={styles.attributeTitle}>Sexy</h2>
            <div className={styles.attributeInfo}>
              <IoHeart className={styles.sexyAttributeIcon} size={25} />
              <IoHeart className={styles.sexyAttributeIcon} size={25} />
              <IoHeartOutline className={styles.sexyAttributeIcon} size={25} />
            </div>
          </li>
        </ul>

        <dl className={styles.userInfoExtendedContainer}>
          <div className={styles.infoPair}>
            <dt>Quem sou eu</dt>
            <dd>Uma pessoa qualquer em busca de liberdade.</dd>
          </div>

          <div className={styles.infoPair}>
            <dt>Aniversário</dt>
            <dd>13 de Junho</dd>
          </div>

          <div className={styles.infoPair}>
            <dt>Idade</dt>
            <dd>35 anos</dd>
          </div>

          <div className={styles.infoPair}>
            <dt>Interesses</dt>
            <dd>Namoro, Amizade</dd>
          </div>

          <div className={styles.infoPair}>
            <dt>Relacionamento</dt>
            <dd>Solteiro(a)</dd>
          </div>

          <div className={styles.infoPair}>
            <dt>Filhos</dt>
            <dd>Não tenho</dd>
          </div>

          <div className={styles.infoPair}>
            <dt>Etnia</dt>
            <dd>Pardo</dd>
          </div>

          <div className={styles.infoPair}>
            <dt>Humor</dt>
            <dd>Extrovertido(a)</dd>
          </div>

          <div className={styles.infoPair}>
            <dt>Orientação Sexual</dt>
            <dd>Heterosexual</dd>
          </div>

          <div className={styles.infoPair}>
            <dt>Estilo</dt>
            <dd>Urbano</dd>
          </div>

          <div className={styles.infoPair}>
            <dt>Fumo</dt>
            <dd>Não</dd>
          </div>

          <div className={styles.infoPair}>
            <dt>Bebo</dt>
            <dd>Não</dd>
          </div>

          <div className={styles.infoPair}>
            <dt>Animais de estimação</dt>
            <dd>Gosto</dd>
          </div>

          <div className={styles.infoPair}>
            <dt>Moro</dt>
            <dd>Com meus pais</dd>
          </div>

          <div className={styles.infoPair}>
            <dt>Cidade natal</dt>
            <dd>Rio de Janeiro</dd>
          </div>

          <div className={styles.infoPair}>
            <dt>Paixões</dt>
            <dd>Animes, Mangás, Rock, J-Music</dd>
          </div>

          <div className={styles.infoPair}>
            <dt>Esportes</dt>
            <dd>Futebol, Futebol Americano</dd>
          </div>

          <div className={styles.infoPair}>
            <dt>Atividades</dt>
            <dd>Não tenho TT^TT</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

export { ProfileDetailsComponent };
