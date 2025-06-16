import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";

const coFounders = [
  {
    name: "滨鹏 Even",
    role: "",
    imageUrl: "/team_01.jpg",
  },
  {
    name: "张五哥",
    role: "",
    imageUrl: "/team_02.jpg",
  },
  {
    name: "悉尼刘哥-Richard",
    role: "",
    imageUrl: "/team_03.jpg",
  },
];

const eliteMembers = [
  {
    name: "晓强",
    role: "公众号流量主",
    imageUrl: "/team_04.jpg",
  },
  {
    name: "小袁",
    role: "AI写作",
    imageUrl: "/team_05.jpg",
  },
  {
    name: "旭晨",
    role: "平面设计师",
    imageUrl: "/team_06.jpg",
  },
];

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
}: {
  name: string;
  role: string;
  imageUrl: string;
}) => (
  <div className="flex flex-col items-center text-center gap-4">
    <div className="relative w-40 h-40">
      <Image
        src={imageUrl}
        alt={name}
        width={160}
        height={160}
        className="rounded-full object-cover border-4 border-primary/20"
      />
    </div>
    <div className="flex flex-col gap-1">
      <h3 className="text-xl font-semibold">{name}</h3>
      {role && <p className="text-muted-foreground">{role}</p>}
    </div>
    <Button variant="outline">Read More</Button>
  </div>
);

export default function Teams() {
  return (
    <Section>
      <div className="max-w-container mx-auto flex flex-col items-center gap-12 sm:gap-16">
        <div>
          <SectionTitle>联合创始人</SectionTitle>
          <div className="grid grid-cols-1 gap-x-50 gap-y-12 md:grid-cols-3 mt-12">
            {coFounders.map((member) => (
              <MemberCard key={member.name} {...member} />
            ))}
          </div>
        </div>
        <div>
          <SectionTitle>精英成员</SectionTitle>
          <div className="grid grid-cols-1 gap-x-50 gap-y-12 md:grid-cols-3 mt-12">
            {eliteMembers.map((member) => (
              <MemberCard key={member.name} {...member} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
} 