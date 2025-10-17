import Link from "next/link";
import "./styles.css";

function LoginComponent() {
  return (
    <section aria-labelledby="login-title">
      <div className="login-box">
        <h1 id="login-title" className="login-title">
          Login
        </h1>

        <form>
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
              />
            </div>
          </fieldset>

          <button className="btn-enter" type="submit">
            Entrar
          </button>
        </form>

        <p className="recover-box">
          <span>Esqueceu a Senha ou Email?</span>{" "}
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
