"use client";

import { useContext, useState } from "react";
import Link from "next/link";
import { UserContext } from "@/context/UserContext";

// Style Sheet CSS
import styles from "./login.module.css";

function LoginComponent() {
  const Context = useContext(UserContext);
  if (!Context) return null;

  const { signIn } = Context;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
      <div className={styles.loginBox}>
        <h1 id="loginTitle" className={styles.loginTitle}>
          Login
        </h1>

        <form onSubmit={handleSubmit}>
          <fieldset className={styles.loginInputs}>
            {/* <legend>Informações de Login</legend> */}

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

        <p className={styles.recoverBox}>
          <span>Esqueceu a senha ou email?</span>{" "}
          <Link href="/" className={styles.recover}>
            Clique Aqui!
          </Link>
        </p>
      </div>

      <aside className={styles.notMemberBox}>
        <p className={styles.signupBox}>
          <span className={styles.notYetAMember}>Ainda não é membro?</span>{" "}
          <Link href="/signup" className={styles.signUp}>
            Junte-se ao Orkkut!
          </Link>
        </p>
      </aside>
    </section>
  );
}

export { LoginComponent };
