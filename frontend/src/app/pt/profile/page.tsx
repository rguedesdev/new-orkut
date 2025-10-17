// Style Sheet CSS
import "./styles.css";

// Components
import { BasicInfoComponent } from "@/components/BasicInfo/page";
import { ProfileDetailsComponent } from "@/components/ProfileDetails/page";
import { TestimonialsComponent } from "@/components/Testimonials/page";
import { FriendsComponent } from "@/components/Friends/page";
import { MyCommunitiesComponent } from "@/components/MyCommunities/page";

function Profile() {
  return (
    <main>
      <BasicInfoComponent />
      <div className="central-container">
        <ProfileDetailsComponent />
        <TestimonialsComponent />
      </div>
      <div className="right-container">
        <FriendsComponent />
        <MyCommunitiesComponent />
      </div>
    </main>
  );
}

export default Profile;
