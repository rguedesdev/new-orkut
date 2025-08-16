// Imports Principais

// Style Sheet CSS
import "./community.css";

// Components
import { CommunityBasicInfoComponent } from "@/components/CommunityBasicInfo";
import { CommunityDetailsComponent } from "@/components/CommunityDetails";
import { ForumComponent } from "@/components/Forum";
import { CommunityMembersComponent } from "@/components/CommunityMembers";
import { RelatedCommunitiesComponent } from "@/components/RelatedCommunities";

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
