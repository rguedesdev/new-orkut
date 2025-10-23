"use client";

// Imports Principais
import { useEffect } from "react";
import { useRouter } from "next/navigation";

// Axios
import api from "@/utils/api";

// Style Sheet CSS
import styles from "./home.module.css";

// Components
import { WelcomeComponent } from "@/components/Welcome/page";
import { LoginComponent } from "@/components/Login/page";

function HomePage() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) return;

    const checkUser = async () => {
      try {
        const response = await api.post("/graphql", {
          query: `
            query {
              me {
                id
              }
            }
          `,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const userId = response.data.data.me?.id;
        if (userId) {
          router.push(`/profile/${userId}`);
        }
      } catch (err) {
        console.error("Erro ao validar usuário:", err);
        localStorage.removeItem("token"); // limpa token inválido
      }
    };

    checkUser();
  }, [router]);

  return (
    <main className={styles.container}>
      <WelcomeComponent />
      <LoginComponent />
    </main>
  );
}

export default HomePage;
