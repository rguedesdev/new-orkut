"use client";

// Imports Principais
import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/navigation";

// Contexts
import { UserContext } from "@/context/UserContext";

// Style Sheet CSS
import styles from "./profile.module.css";

// Components
import { Loading } from "@/components/Loading/page";
import { BasicInfoComponent } from "@/components/BasicInfo/page";
import { ProfileDetailsComponent } from "@/components/ProfileDetails/page";
import { TestimonialsComponent } from "@/components/Testimonials/page";
import { FriendsComponent } from "@/components/Friends/page";
import { MyCommunitiesComponent } from "@/components/MyCommunities/page";

function Profile() {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  const Context = useContext(UserContext);
  if (!Context) return null;

  const { userAuthenticated } = Context;

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/");
    }
  }, []);

  useEffect(() => {
    // Simula carregamento de dados ou espera mínima
    const timer = setTimeout(() => setIsLoading(false), 1000); // 0.5s ou quanto precisar
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <main className={styles.mainContainer}>
      <BasicInfoComponent />
      <div className={styles.centralContainer}>
        <ProfileDetailsComponent />
        <TestimonialsComponent />
      </div>
      <div className={styles.rightContainer}>
        <FriendsComponent />
        <MyCommunitiesComponent />
      </div>
    </main>
  );
}

export default Profile;
