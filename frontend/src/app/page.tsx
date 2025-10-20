"use client";

// Imports Principais
import { useEffect } from "react";
import { useRouter } from "next/navigation";

// Style Sheet CSS
import styles from "./home.module.css";

// Components
import { WelcomeComponent } from "@/components/Welcome/page";
import { LoginComponent } from "@/components/Login/page";

function HomePage() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      router.push("/profile");
    }
  }, []);

  return (
    <main className={styles.container}>
      <WelcomeComponent />
      <LoginComponent />
    </main>
  );
}

export default HomePage;
