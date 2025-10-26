"use client";

import { useContext, useState } from "react";
import Link from "next/link";
import { UserContext } from "@/context/UserContext";

// Style Sheet CSS
import styles from "./signupcomponente.module.css";

function SignUpComponent() {
  const Context = useContext(UserContext);
  if (!Context) return null;

  const { signIn } = Context;

  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [spinner, setSpinner] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setSpinner(true);

    try {
      if (!signIn) {
        console.log("Contexto de autenticação não disponível!");
        return;
      }

      await signIn(email, password);
    } catch (err: any) {
      console.error("Erro no login:", err);
      alert(
        `❌ Falha ao fazer login: ${
          err.message || "Verifique suas credenciais"
        }`
      );
    } finally {
      setSpinner(false);
    }
  }

  return (
    <section aria-labelledby={styles.loginTitle}>
      <div className={styles.signUpBox}>
        <h1 id="loginTitle" className={styles.loginTitle}>
          Cadastre-se
        </h1>

        <form onSubmit={handleSubmit}>
          <fieldset className={styles.signUpInputs}>
            {/* <legend>Informações de Login</legend> */}

            <div className={styles.inputContainer}>
              <label htmlFor="my-name">Nome</label>
              <input
                className={styles.myInputs}
                type="email"
                id="myName"
                name="my-name"
                placeholder="Digite seu nome"
                value={name}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className={styles.inputContainer}>
              <label htmlFor="my-nickname">Nickname</label>
              <input
                className={styles.myInputs}
                type="nickname"
                id="myNickname"
                name="my-nickname"
                placeholder="Digite seu nickname"
                value={nickname}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className={styles.inputContainer}>
              <label htmlFor="my-email">Email</label>
              <input
                className={styles.myInputs}
                type="email"
                id="myEmail"
                name="my-email"
                placeholder="Digite seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className={styles.inputContainer}>
              <label htmlFor="my-password">Senha</label>
              <input
                className={styles.myInputs}
                type="password"
                id="myPassword"
                name="my-password"
                placeholder="Digite sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className={styles.inputContainer}>
              <label htmlFor="my-confirmPassword">Confirme a senha</label>
              <input
                className={styles.myInputs}
                type="confirmPassword"
                id="myConfirmPassword"
                name="my-confirmPassword"
                placeholder="Digite sua senha novamente"
                value={confirmPassword}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </fieldset>

          {spinner ? (
            <button className={styles.btnEnter}>
              <span className={styles.spinner}></span>
            </button>
          ) : (
            <button className={styles.btnEnter} type="submit">
              Entrar
            </button>
          )}
        </form>

        {/* <p className={styles.recoverBox}>
          <span>Esqueceu a senha ou email?</span>{" "}
          <Link href="/" className={styles.recover}>
            Clique Aqui!
          </Link>
        </p> */}
      </div>

      <aside className={styles.memberBox}>
        <p className={styles.signupBox}>
          <span className={styles.notYetAMember}>Já é membro?</span>{" "}
          <Link href="/" className={styles.signUp}>
            Faça login!
          </Link>
        </p>
      </aside>
    </section>
  );
}

export { SignUpComponent };
