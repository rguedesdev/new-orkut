"use client";

// Imports Principais
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

// Style Sheet CSS
import "./styles.css";

// Components
import { CommunityBasicInfoComponent } from "@/components/CommunityBasicInfo/page";
import { CommunityDetailsComponent } from "@/components/CommunityDetails/page";
import { ForumComponent } from "@/components/Forum/page";
import { CommunityMembersComponent } from "@/components/CommunityMembers/page";
import { RelatedCommunitiesComponent } from "@/components/RelatedCommunities/page";
import api from "@/utils/api";

function CommunityPage() {
  const [community, setCommunity] = useState({});

  console.log("Comunidade", community);

  const { id } = useParams();

  useEffect(() => {
    if (!id) return;

    const fetchCommunity = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await api.post(
          "/graphql",
          {
            query: `
              query Community($id: ID!) {
                community(id: $id) {
                  id
                  name
                  description
                  category
                  privacy
                  members
                }
              }
            `,
            variables: { id },
          },
          {
            headers: token ? { Authorization: `Bearer ${token}` } : undefined,
          }
        );

        if (response.data.errors) {
          console.error("GraphQL errors:", response.data.errors);
          return;
        }

        setCommunity(response.data.data.community);
      } catch (error) {
        console.error("Erro ao buscar comunidade:", error);
      }
    };

    fetchCommunity();
  }, [id]);

  return (
    <main>
      <CommunityBasicInfoComponent community={community} />
      <div className="community-central-container">
        <CommunityDetailsComponent community={community} />
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
