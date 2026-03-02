"use client";

// Imports Principais
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import api from "@/utils/api";

// Style Sheet CSS
import styles from "./communityId.module.css";

// Components
import { Loading } from "@/components/Loading/page";
import { CommunityBasicInfoComponent } from "@/components/CommunityBasicInfo/page";
import { CommunityDetailsComponent } from "@/components/CommunityDetails/page";
import { ForumComponent } from "@/components/Forum/page";
import { CommunityMembersComponent } from "@/components/CommunityMembers/page";
import { RelatedCommunitiesComponent } from "@/components/RelatedCommunities/page";
import { div, style } from "framer-motion/client";

function CommunityPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [community, setCommunity] = useState({});

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
          },
        );

        if (response.data.errors) {
          console.error("GraphQL errors:", response.data.errors);
          return;
        }

        setCommunity(response.data.data.community);
      } catch (error) {
        console.error("Erro ao buscar comunidade:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCommunity();
  }, [id]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className={styles.page}>
      <main className={styles.communityContainer}>
        <CommunityBasicInfoComponent community={community} />
        <div className={styles.communityCentralContainer}>
          <CommunityDetailsComponent community={community} />
          <ForumComponent />
        </div>
        <div className={styles.communityRightContainer}>
          <CommunityMembersComponent />
          <RelatedCommunitiesComponent />
        </div>
      </main>
    </div>
  );
}

export default CommunityPage;
