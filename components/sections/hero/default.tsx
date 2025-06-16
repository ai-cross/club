import { ReactNode } from "react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import { Button, type ButtonProps } from "../../ui/button";
import Glow from "../../ui/glow";
import { Mockup, MockupFrame } from "../../ui/mockup";
import Screenshot from "../../ui/screenshot";
import { Section } from "../../ui/section";

interface HeroButtonProps {
  href: string;
  text: string;
  variant?: ButtonProps["variant"];
  icon?: ReactNode;
  iconRight?: ReactNode;
}

interface HeroProps {
  title?: string;
  description?: string;
  mockup?: ReactNode | false;
  badge?: ReactNode | false;
  buttons?: HeroButtonProps[] | false;
  className?: string;
}

export default function Hero({
  title = "跨境加速度, AI 新赋能",
  description = "我们致力于为中小跨境卖家打造全方位赋能生态。通过整合全球供应链资源，打通从选品到物流的关键环节；联动政府与行业龙头，搭建政策解读、税务合规及市场准入的绿色通道；更以AI技术为核心，提供Shopify独立站搭建、智能选品分析、广告投放优化及多语言客服系统集成，助您降本增效。在这里，技术与资源双轮驱动，让跨境出海从单打独斗的“慢车道”迈入协同创新的“高速路”，成就全球生意新可能！",
  mockup = (
    <Screenshot
      srcLight="https://www.aicross.club/wp-content/uploads/2025/04/home-header01.jpg"
      srcDark="https://www.aicross.club/wp-content/uploads/2025/04/home-header01.jpg"
      alt="ai cross club"
      width={1248}
      height={702}
      className="w-full"
    />
  ),
  // badge = (
  //   <Badge variant="outline" className="animate-appear">
  //     <span className="text-muted-foreground">
  //       New version of Launch UI is out!
  //     </span>
  //     <a href={siteConfig.url} className="flex items-center gap-1">
  //       Get started
  //       <ArrowRightIcon className="size-3" />
  //     </a>
  //   </Badge>
  // ),
  buttons = [
    {
      href: siteConfig.url,
      text: "联系我们",
      variant: "default",
    },
    // {
    //   href: siteConfig.url,
    //   text: "Github",
    //   variant: "glow",
    //   icon: <Github className="mr-2 size-4" />,
    // },
  ],
  className,
}: HeroProps) {
  return (
    <Section
      className={cn(
        "overflow-hidden pb-0 sm:pb-0 md:pb-0",
        className,
      )}
    >
      <div className="max-w-container mx-auto flex flex-col gap-12 pt-16 sm:gap-24">
        <div className="flex flex-col items-center gap-6 text-center sm:gap-12">
          {/* {badge !== false && badge} */}
          <h1 className="animate-appear from-foreground to-foreground dark:to-muted-foreground relative z-10 inline-block bg-linear-to-r bg-clip-text text-4xl leading-tight font-semibold text-balance text-transparent drop-shadow-2xl sm:text-6xl sm:leading-tight md:text-8xl md:leading-tight">
            {title}
          </h1>
          <p className="text-md animate-appear text-muted-foreground relative z-10 max-w-[740px] font-medium text-balance opacity-0 delay-100 sm:text-xl">
            {description}
          </p>
          {buttons !== false && buttons.length > 0 && (
            <div className="animate-appear relative z-10 flex justify-center gap-4 opacity-0 delay-300">
              {buttons.map((button, index) => (
                <Button
                  key={index}
                  variant={button.variant || "default"}
                  size="lg"
                  asChild
                >
                  <a href={button.href}>
                    {button.icon}
                    {button.text}
                    {button.iconRight}
                  </a>
                </Button>
              ))}
            </div>
          )}
          {mockup !== false && (
            <div className="relative w-full pt-12">
              <MockupFrame
                className="animate-appear opacity-0 delay-700"
                size="small"
              >
                <Mockup
                  type="responsive"
                  className="bg-background/90 w-full rounded-xl border-0"
                >
                  {mockup}
                </Mockup>
              </MockupFrame>
              <Glow
                variant="top"
                className="animate-appear-zoom opacity-0 delay-1000"
              />
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}
