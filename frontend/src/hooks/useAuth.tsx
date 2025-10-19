"use client";

// Imports principais
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

// Axios
import api from "@/utils/api";

// Tipagens
type TUser = { id: string; name: string; email: string };
type TAuthPayload = { user: TUser; token: string };

function useAuth() {
  const [userAuthenticated, setUserAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        api.defaults.headers.Authorization = `Bearer ${token}`;
        setUserAuthenticated(true);
      } catch (error) {
        console.error("Erro ao configurar token:", error);
        localStorage.removeItem("token");
      }
    }
  }, []);

  // Função de login
  async function signIn(
    email: string,
    password: string
  ): Promise<TAuthPayload> {
    const mutation = `
    mutation signIn($input: signInInput!) {
      signIn(input: $input) {
        user {
          id
          name
          email
        }
        token
      }
    }
  `;

    const variables = { input: { email, password } };

    try {
      const response = await api.post("/graphql", {
        query: mutation,
        variables,
      });
      const signInData: TAuthPayload = response.data.data.signIn;

      if (!signInData?.token || !signInData?.user) {
        throw new Error("Credenciais inválidas");
      }

      // Só autentica se veio token e user válido
      await authUser(signInData);

      return signInData;
    } catch (err) {
      console.error("Erro no login:", err);
      throw err; // não autentica, apenas propaga o erro
    }
  }

  async function logout() {
    localStorage.removeItem("token");
    localStorage.setItem("theme", "light");
    setUserAuthenticated(false);
    router.push("/");
  }

  // Configura autenticação local e Axios
  async function authUser(data: TAuthPayload) {
    setUserAuthenticated(true);

    // Salva token no localStorage
    localStorage.setItem("token", data.token);

    // Configura Axios para enviar token em futuras requisições
    api.defaults.headers.Authorization = `Bearer ${data.token}`;

    // Redireciona para a página do usuário
    router.push("/pt/profile");
  }

  // async function authUser(data: TAuthPayload) {
  //   setUserAuthenticated(true);
  //   localStorage.setItem("token", JSON.stringify(data.token));
  //   api.defaults.headers.Authorization = `Bearer ${data.token}`;
  //   router.push("/pt/profile");
  // }

  return {
    userAuthenticated,
    signIn,
    logout,
  };
}

export { useAuth };
