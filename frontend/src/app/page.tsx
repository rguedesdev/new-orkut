// Imports Principais

// Style Sheet CSS
import "./styles.css";

// Components
import { WelcomeComponent } from "@/components/Welcome/page";
import { LoginComponent } from "@/components/Login/page";

function HomePage() {
  return (
    <main>
      <WelcomeComponent />
      <LoginComponent />
    </main>
  );
}

export default HomePage;
