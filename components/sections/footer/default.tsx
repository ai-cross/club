import { MailIcon,MapPinIcon, PhoneIcon } from "lucide-react";
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
        { icon: <MailIcon size={18} className="inline-block" />, text: "aicrossclub@gmail.com", href: siteConfig.url },
      ],
    },
    // {
    //   title: "Contact",
    //   links: [
    //     { text: "Meta", href: siteConfig.url },
    //     { text: "Instagram", href: siteConfig.url },
    //     { text: "X", href: siteConfig.url },
    //     { text: "LinkedIn", href: siteConfig.url },
    //   ],
    // },
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
                  <a
                    key={linkIndex}
                    href={link.href}
                    className="text-muted-foreground text-sm"
                  >
                    {link.icon && <span className="mr-2">{link.icon}</span>}
                    {link.text}
                  </a>
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
