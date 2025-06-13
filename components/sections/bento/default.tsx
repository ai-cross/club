import {
  Cpu,
  SearchCode,
  Wrench,
} from "lucide-react";

import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { Section } from "@/components/ui/section";

export default function Bento() {
  return (
    <Section>
      <BentoGrid className="max-w-container mx-auto">
        {features.map((feature, i) => (
          <BentoGridItem key={i} {...feature} />
        ))}
      </BentoGrid>
    </Section>
  );
}

const features = [
  {
    icon: <Wrench className="inline-block h-12 w-12 m-2 origin-left stroke-1 text-neutral-950 dark:text-neutral-50" />,
    title: "网站搭建",
    description: "专业的网站开发和设计服务，为您打造现代化、响应式的网站，确保良好的用户体验和功能性，助力您的在线业务发展。",
    href: "/",
    cta: "了解更多",
    className: "lg:col-span-10",
  },
  {
    icon: <SearchCode className="inline-block h-12 w-12 m-2 origin-left stroke-1 text-neutral-950 dark:text-neutral-50" />,
    title: "数据分析",
    description: "通过深入的市场调研和数据分析，帮助企业了解市场趋势、竞争格局和目标客户需求，为战略决策提供科学依据。",
    href: "/",
    cta: "了解更多",
    className: "lg:col-span-5",
  },
  {
    icon: <Cpu className="inline-block h-12 w-12 m-2 origin-left stroke-1 text-neutral-950 dark:text-neutral-50" />,
    title: "SEO 优化服务",
    description: "通过专业的搜索引擎优化技术和策略，提升网站在搜索引擎中的排名和可见度，帮助企业获得持续稳定的自然流量。",
    href: "/",
    cta: "了解更多",
    className: "lg:col-span-5",
  },
]; 