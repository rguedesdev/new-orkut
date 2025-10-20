// Imports Principais

// Style Sheet CSS
import "./styles.css";

// Components
import { CommunityBasicInfoComponent } from "@/components/CommunityBasicInfo/page";
import { CommunityDetailsComponent } from "@/components/CommunityDetails/page";
import { ForumComponent } from "@/components/Forum/page";
import { CommunityMembersComponent } from "@/components/CommunityMembers/page";
import { RelatedCommunitiesComponent } from "@/components/RelatedCommunities/page";

function CommunityPage() {
  return (
    <main>
      <CommunityBasicInfoComponent />
      <div className="community-central-container">
        <CommunityDetailsComponent />
        <ForumComponent />
      </div>
      <div className="community-right-container">
        <CommunityMembersComponent />
        <RelatedCommunitiesComponent />
      </div>
    </main>
  );
}

export default CommunityPage;
