// Imports Principais

// Style Sheet CSS
import "./home.css";

// Components
import { WelcomeComponent } from "@/components/Welcome";
import { LoginComponent } from "@/components/Login";

function Home() {
  return (
    <main>
      <WelcomeComponent />
      <LoginComponent />
    </main>
  );
}

export default Home;
