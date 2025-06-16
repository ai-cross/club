"use client"

import {
  Cpu,
  SearchCode,
  Wrench,
} from "lucide-react";

import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import Aurora from "@/components/ui/motion/Aurora";
import Squares from "@/components/ui/motion/Squares";
import Threads from "@/components/ui/motion/Threads";
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
    description: "一站式网站建设服务，量身定制响应式网站，兼容PC/移动多端访问。采用前沿开发框架与SEO友好架构，确保安全稳定运维",
    href: "/",
    cta: "了解更多",
    background: <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      <Threads
        amplitude={4}
        distance={0}
        enableMouseInteraction={true}
      />
    </div>,
    className: "lg:col-span-10",
  },
  {
    icon: <SearchCode className="inline-block h-12 w-12 m-2 origin-left stroke-1 text-neutral-950 dark:text-neutral-50" />,
    title: "数据分析",
    description: "深度挖掘数据价值，驱动科学决策。用户行为追踪及多维度数据建模，精准分析流量转化路径、用户画像与业务增长瓶颈。",
    href: "/",
    cta: "了解更多",
    background: <Squares
      speed={0.4}
      squareSize={40}
      direction='diagonal' // up, down, left, right, diagonal
      borderColor='#fff'
      hoverFillColor='#222'
    />,
    className: "lg:col-span-5",
  },
  {
    icon: <Cpu className="inline-block h-12 w-12 m-2 origin-left stroke-1 text-neutral-950 dark:text-neutral-50" />,
    title: "SEO 优化服务",
    description: "让优质内容精准触达目标用户。基于搜索引擎算法规则，定制关键词矩阵布局、站内外优化及高质量外链建设方案。",
    href: "/",
    cta: "了解更多",
    background: <Aurora
      colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
      blend={0.5}
      amplitude={1.0}
      speed={0.5}
    />,
    className: "lg:col-span-5",
  },
]; 