"use client";

// Imports principais
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { setCookie } from "cookies-next";

// Axios
import api from "@/utils/api";
import { input } from "framer-motion/client";

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
    mutation signIn($input: SignInInput!) {
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

      console.log("Resposta GraphQL:", signInData);

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

  async function signUp(
    name: string,
    nickname: string,
    email: string,
    password: string,
    confirmPassword: string
  ) {
    const mutation = `
      mutation signUp($input: SignUpInput!, $confirmPassword: String!) {
        signUp(input: $input, confirmPassword: $confirmPassword) {
          user {
            id
            name
            nickname
            email
          }
          token
        }
      }
    `;

    const variables = {
      input: { name, nickname, email, password },
      confirmPassword,
    };

    const response = await api.post("/graphql", {
      query: mutation,
      variables,
    });

    const { data, errors } = response.data;

    if (errors?.length) {
      throw new Error(errors[0].message);
    }

    const authPayload: TAuthPayload = data.signUp;

    if (!authPayload?.token || !authPayload?.user) {
      throw new Error("Resposta inválida do servidor");
    }

    await authUser(authPayload);
  }

  async function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.setItem("theme", "light");
    setUserAuthenticated(false);
    router.push("/");
  }

  // Configura autenticação local e Axios
  async function authUser(data: TAuthPayload) {
    setUserAuthenticated(true);

    // Salva token e ID no localStorage
    localStorage.setItem("token", data.token);

    // Configura Axios para enviar token em futuras requisições
    api.defaults.headers.Authorization = `Bearer ${data.token}`;

    const userId = data.user.id;

    // Redireciona para a página do usuário
    router.push(`/profile/${userId}`);
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
    signUp,
    logout,
  };
}

export { useAuth };
