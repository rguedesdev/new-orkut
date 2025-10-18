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
        api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
        setUserAuthenticated(true);
      } catch (error) {
        console.error("Erro ao analisar token:", error);
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

    // Faz a requisição GraphQL
    const response = await api.post("/graphql", { query: mutation, variables });

    // Pega diretamente o signIn do GraphQL
    const signInData: TAuthPayload = response.data.data.signIn;

    // Autentica o usuário e configura token
    await authUser(signInData);

    return signInData;
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
  };
}

export { useAuth };
