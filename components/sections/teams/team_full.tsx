import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";

import { coFounders, eliteMembers } from "./default";

const allMembers = [...coFounders, ...eliteMembers];

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <div className="relative text-center mb-12">
    <h2 className="text-3xl font-semibold tracking-tight">{children}</h2>
    <div className="absolute w-24 h-0.5 bg-primary left-1/2 -translate-x-1/2 mt-2"></div>
  </div>
);

const MemberCard = ({
  name,
  role,
  imageUrl,
  description,
}: {
  name: string;
  role: string;
  imageUrl: string;
  description: string[];
}) => (
  <div className="flex flex-col md:flex-row items-center text-left gap-8 p-6 border rounded-lg shadow-sm">
    <div className="flex flex-col items-center gap-4 w-full md:w-40 flex-shrink-0">
      <div className="relative w-40 h-40">
        <Image
          src={imageUrl}
          alt={name}
          width={160}
          height={160}
          className="rounded-full object-cover border-4 border-primary/20 w-[160px] h-[160px]"
        />
      </div>
      <div className="flex flex-col gap-1 text-center">
        <h3 className="text-xl font-semibold">{name}</h3>
        {role && <p className="text-muted-foreground">{role}</p>}
      </div>
    </div>
    <div>
      <div className="text-muted-foreground">
        {description.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
    </div>
  </div>
);

export default function TeamsFull() {
  return (
    <Section>
      <div className="max-w-container mx-auto flex flex-col items-center gap-12 sm:gap-16">
        <div>
          <SectionTitle>团队成员</SectionTitle>
          <div className="grid grid-cols-1 gap-8 mt-12">
            {allMembers.map((member) => (
              <MemberCard key={member.name} {...member} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
} 