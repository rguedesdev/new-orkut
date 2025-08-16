// Style Sheet CSS
import "./profile.css";

// Components
import { BasicInfoComponent } from "@/components/BasicInfo";
import { ProfileDetailsComponent } from "@/components/ProfileDetails";
import { TestimonialsComponent } from "@/components/Testimonials";
import { FriendsComponent } from "@/components/Friends";
import { MyCommunitiesComponent } from "@/components/MyCommunities";

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
