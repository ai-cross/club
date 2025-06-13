import {
  BlocksIcon,
  EclipseIcon,
  FastForwardIcon,
  MonitorSmartphoneIcon,
  RocketIcon,
  ScanFaceIcon,
} from "lucide-react";
import { ReactNode } from "react";

import { Item, ItemDescription, ItemIcon, ItemTitle } from "../../ui/item";
import { Section } from "../../ui/section";

interface ItemProps {
  title: string;
  description: string;
  icon: ReactNode;
}

interface ItemsProps {
  title?: string;
  items?: ItemProps[] | false;
  className?: string;
}

export default function Items({
  title = "数字内容营销解决方案",
  items = [
    {
      title: "内容营销",
      description: "通过高质量的内容创作和传播，帮助企业讲好品牌故事，建立与目标受众的深度连接，实现营销目标",
      icon: <ScanFaceIcon className="size-5 stroke-1" />,
    },
    {
      title: "网站建设",
      description: "提供专业的网站设计和开发服务，打造响应式、用户友好的企业网站，展现品牌形象并提升在线业务转化",
      icon: <MonitorSmartphoneIcon className="size-5 stroke-1" />,
    },
    {
      title: "广告投流",
      description: "通过精准的广告投放和流量运营策略，帮助企业在各大平台获得优质流量，提升品牌曝光度和营销效果",
      icon: <EclipseIcon className="size-5 stroke-1" />,
    },
    {
      title: "市场分析",
      description: "深入研究市场趋势和竞争环境，为企业提供数据驱动的决策支持，制定有效的市场战略和发展规划",
      icon: <BlocksIcon className="size-5 stroke-1" />,
    },
    {
      title: "SEO 优化",
      description: "通过搜索引擎优化技术，提升网站在搜索结果中的排名和可见度，为企业带来持续稳定的自然流量",
      icon: <FastForwardIcon className="size-5 stroke-1" />,
    },
    {
      title: "AI 工作流",
      description: "利用人工智能技术优化工作流程，提高团队协作效率，实现业务流程自动化和智能化升级",
      icon: <RocketIcon className="size-5 stroke-1" />,
    },
  ],
  className,
}: ItemsProps) {
  return (
    <Section className={className}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-6 sm:gap-20">
        <h2 className="max-w-[560px] text-center text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
          {title}
        </h2>
        {items !== false && items.length > 0 && (
          <div className="grid auto-rows-fr grid-cols-2 gap-0 sm:grid-cols-3 sm:gap-4 lg:grid-cols-3">
            {items.map((item, index) => (
              <Item key={index}>
                <ItemTitle className="flex items-center gap-2">
                  <ItemIcon>{item.icon}</ItemIcon>
                  {item.title}
                </ItemTitle>
                <ItemDescription>{item.description}</ItemDescription>
              </Item>
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}
