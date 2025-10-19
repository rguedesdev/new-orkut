"use client";

import { useContext, useState } from "react";
import Link from "next/link";
import { UserContext } from "@/context/UserContext";
import "./styles.css";

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
    <section aria-labelledby="login-title">
      <div className="login-box">
        <h1 id="login-title" className="login-title">
          Login
        </h1>

        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Informações de Login</legend>

            <div className="input-container">
              <label htmlFor="my-email">Email</label>
              <input
                className="my-inputs"
                type="email"
                id="my-email"
                name="my-email"
                placeholder="Digite seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="input-container">
              <label htmlFor="my-password">Senha</label>
              <input
                className="my-inputs"
                type="password"
                id="my-password"
                name="my-password"
                placeholder="Digite sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </fieldset>

          {spinner ? (
            <button className="btn-enter">
              <span className="spinner"></span>
            </button>
          ) : (
            <button className="btn-enter" type="submit">
              Entrar
            </button>
          )}
        </form>

        <p className="recover-box">
          <span>Esqueceu a senha ou email?</span>{" "}
          <Link href="/" className="recover">
            Clique Aqui!
          </Link>
        </p>
      </div>

      <aside className="not-member-box">
        <p className="signup-box">
          <span className="not-yet-a-member">Ainda não é membro?</span>{" "}
          <Link href="/" className="sign-up">
            Junte-se ao Orkut!
          </Link>
        </p>
      </aside>
    </section>
  );
}

export { LoginComponent };
