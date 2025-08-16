// Imports Principais

// Style Sheet CSS
import "./community.css";

// Components
import { CommunityBasicInfoComponent } from "@/components/CommunityBasicInfo";
import { CommunityDetailsComponent } from "@/components/CommunityDetails";
import { ForumComponent } from "@/components/Forum";

function CommunityPage() {
  return (
    <main>
      <CommunityBasicInfoComponent />
      <div className="community-central-container">
        <CommunityDetailsComponent />
        <ForumComponent />
      </div>
    </main>
  );
}

export default CommunityPage;
