import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";

export const coFounders = [
  {
    name: "滨鹏 Even",
    role: "",
    imageUrl: "/team_01.jpg",
    description: [],
  },
  {
    name: "张五哥",
    role: "",
    imageUrl: "/team_02.jpg",
    description: [],
  },
  {
    name: "悉尼刘哥-Richard",
    role: "",
    imageUrl: "/team_03.jpg",
    description: [
      "学历：计算机硕士",
      "工作经历",
      "1.在澳洲做过程序开发，后转型跨境电商",
      "2.15年海外学习生活经历，擅长商业模型搭建，带过跨国团队，跨境公司技术总监",
      "3.副业知识付费及服务商，任Shopify合作伙伴，帮助1000+人创建电商独立站,变现7位数",
    ],
  },
];

export const eliteMembers = [
  {
    name: "晓强",
    role: "公众号流量主",
    imageUrl: "/team_04.jpg",
    description: [],
  },
  {
    name: "小袁",
    role: "AI写作",
    imageUrl: "/team_05.jpg",
    description: [],
  },
  {
    name: "旭晨",
    role: "平面设计师",
    imageUrl: "/team_06.jpg",
    description: [],
  },
  {
    name: "考拉",
    role: "芯片工程师",
    imageUrl: "/team_07.jpg",
    description: [
      "学历：集成电路硕士",
      "工作经历",
      "1.5G芯片公司工程师",
      "2.研究AI在商业领域的赋能",
      "首席生态架构师|考政晓",
      "构建北京线下线上全域引力场资源",
      "负责搭建自生长型会员生态系统与价值交换系统",
      "主导建立高价值关系人才数据库，开发关键枢纽型人才接入",
    ],
  },
  {
    name: "帕克",
    role: "国企 IT 运维经理",
    imageUrl: "/team_08.jpg",
    description: [
      "资深 IT 运维经理",
      "AI 编程爱好者",
    ]
  },
  {
    name: "布偶",
    role: "运营专家",
    imageUrl: "/team_09.jpg",
    description: [
      "数智化运营专家",
      "供应链管理专家",
    ]
  },
  {
    name: "赛因豪",
    role: "大厂算法工程师",
    imageUrl: "/team_10.jpg",
    description: [
      "跨境 AI 提效专家",
      "AI 工作流，工具专家",
    ]
  },
  {
    name: "李屹铭",
    role: "金牌 IP 教练",
    imageUrl: "/team_11.jpg",
    description: [
      "电视台剪辑师",
      "金融培训公司视频制作主管",
      "百人团队金牌剪辑讲师",
      "拍摄剪辑训练营教练",
      "助力上百位素人打造IP视频",
      "助力企业进行企业宣传、产品宣传、企业文化等",
      "网络宣传以及打造团队凝聚力"
    ]
  }
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
        className="rounded-full object-cover border-4 border-primary/20 w-[160px] h-[160px]"
      />
    </div>
    <div className="flex flex-col gap-1">
      <h3 className="text-xl font-semibold">{name}</h3>
      {role && <p className="text-muted-foreground">{role}</p>}
    </div>
    {/* <Button variant="outline">Read More</Button> */}
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