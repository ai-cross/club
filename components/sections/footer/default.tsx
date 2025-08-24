import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import { ReactNode } from "react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import LaunchUI from "../../logos/launch-ui";
import {
  Footer,
  FooterBottom,
  FooterColumn,
  FooterContent,
} from "../../ui/footer";
import { ModeToggle } from "../../ui/mode-toggle";

interface FooterLink {
  icon?: ReactNode;
  text: string;
  href: string;
  isSubscription?: boolean;
}

interface FooterColumnProps {
  title: string;
  links: FooterLink[];
}

interface FooterProps {
  logo?: ReactNode;
  name?: string;
  columns?: FooterColumnProps[];
  copyright?: string;
  policies?: FooterLink[];
  showModeToggle?: boolean;
  className?: string;
}

export default function FooterSection({
  logo = <LaunchUI />,
  name = siteConfig.name,
  columns = [
    {
      title: "导航",
      links: [
        { text: "服务内容", href: siteConfig.url },
        { text: "核心团队", href: "/teams" },
      ],
    },
    {
      title: "服务对接",
      links: [
        { text: "全球独立站网站搭建", href: siteConfig.url },
        { text: "电商AI工作流本地部署", href: siteConfig.url },
        { text: "供应链资源对接", href: siteConfig.url },
        { text: "政企人脉资源对接", href: siteConfig.url },
        { text: "Web3资源对接", href: siteConfig.url },
      ],
    },
    {
      title: "联系我们",
      links: [
        { icon: <MapPinIcon size={18} className="inline-block" />, text: "北京市朝阳区日坛国际贸易中心B座 3D37", href: siteConfig.url },
        { icon: <PhoneIcon size={18} className="inline-block" />, text: "13911481913", href: siteConfig.url },
        {
          icon: <MailIcon size={18} className="inline-block" />,
          text: "订阅我们的更新",
          href: siteConfig.url,
          isSubscription: true
        },
      ],
    },
  ],
  copyright = "© 2025 AI 雅宝路跨境出海俱乐部. All rights reserved",
  policies = [
    { text: "Privacy Policy", href: siteConfig.url },
    { text: "Terms of Service", href: siteConfig.url },
  ],
  showModeToggle = true,
  className,
}: FooterProps) {
  return (
    <footer className={cn("bg-background w-full px-4", className)}>
      <div className="max-w-container mx-auto">
        <Footer>
          <FooterContent>
            <FooterColumn className="col-span-2 sm:col-span-4 md:col-span-2">
              <div className="flex items-center gap-2">
                {logo}
                <h3 className="text-xl font-bold">{name}</h3>
              </div>
            </FooterColumn>
            {columns.map((column, index) => (
              <FooterColumn key={index} className="col-span-1">
                <h3 className="text-md pt-1 font-semibold">{column.title}</h3>
                {column.links.map((link, linkIndex) => (
                  link.isSubscription ? (
                    <div key={linkIndex} className="space-y-2">
                      <div className="flex items-center text-muted-foreground text-sm">
                        {link.icon && <span className="mr-2">{link.icon}</span>}
                        {link.text}
                      </div>
                      <form className="flex gap-2">
                        <input
                          type="email"
                          placeholder="输入邮箱地址"
                          className="flex-1 px-3 py-2 text-sm border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                          required
                        />
                        <button
                          type="submit"
                          className="px-4 py-2 text-sm font-medium text-primary-foreground bg-primary hover:bg-primary/90 rounded-md transition-colors duration-200"
                        >
                          订阅
                        </button>
                      </form>
                    </div>
                  ) : (
                    <a
                      key={linkIndex}
                      href={link.href}
                      className="text-muted-foreground text-sm"
                    >
                      {link.icon && <span className="mr-2">{link.icon}</span>}
                      {link.text}
                    </a>
                  )
                ))}
              </FooterColumn>
            ))}
          </FooterContent>
          <FooterBottom>
            <div>{copyright}</div>
            <div className="flex items-center gap-4">
              {policies.map((policy, index) => (
                <a key={index} href={policy.href}>
                  {policy.text}
                </a>
              ))}
              {showModeToggle && <ModeToggle />}
            </div>
          </FooterBottom>
        </Footer>
      </div>
    </footer>
  );
}
