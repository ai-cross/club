import { type Metadata } from "next";
import TeamsFull from "@/components/sections/teams/team_full";

export const metadata: Metadata = {
  title: "Teams",
  description: "Teams page",
};

export default function TeamsPage() {
  return <TeamsFull />;
} 