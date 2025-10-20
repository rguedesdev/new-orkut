// Imports Principais
import Image from "next/image";

// Images
import Who from "../../../public/who-do-you-know.png";

// Style Sheet CSS
import styles from "./welcome.module.css";

function WelcomeComponent() {
  return (
    <section className={styles.welcomeBox}>
      <p>
        O Orkut é uma rede social para conhecer pessoas e fazer amigos.
        Cadastre-se gratuitamente e conecte-se com seus amigos, familiares e
        colegas de trabalho. Compartilhe fotos, recados e experiências, e
        mantenha contato com quem você gosta.
      </p>
      <Image
        className={styles.imagePeople}
        src={Who}
        alt="Who"
        width={0}
        height={0}
        priority
      />
      <p>Junte-se ao Orkut para expandir seu ciclo social de amigos!</p>
    </section>
  );
}

export { WelcomeComponent };
