import { CheckIcon } from "@radix-ui/react-icons";

import { Mockup, MockupFrame } from "@/components/ui/mockup";
import Screenshot from "@/components/ui/screenshot";
import { Section } from "@/components/ui/section";

const features = [
  {
    title: "开启全球独立站业务",
    description: "俱乐部成员可免费获得Shopify内测账号，无试用期限制。",
  },
  {
    title: "AI电商自动化工作流",
    description: "降本增效，AI员工24小时坚守岗位。",
  },
];

export default function Feature() {
  return (
    <Section>
      <div className="max-w-container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-6">
          <h3 className="text-xl font-bold text-primary">加入我们</h3>
          <h2 className="text-4xl font-bold tracking-tight">
            快速增长你的跨境业务
          </h2>
          <p className="text-muted-foreground text-lg">
            一个人可能走的很快，但一群人可以走得更远。
          </p>
          <div className="flex flex-col gap-6 mt-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="bg-primary text-primary-foreground rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckIcon className="h-5 w-5" />
                </div>
                <div className="flex flex-col">
                  <h4 className="font-semibold text-lg">{feature.title}</h4>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative w-full pt-12">
          <MockupFrame
            className="animate-appear opacity-0 delay-700 rounded-full"
            size="small"
          >
            <Mockup
              type="responsive"
              className="bg-background/90 w-full rounded-full border-0 overflow-hidden"
            >
              <Screenshot
                srcLight="https://www.aicross.club/wp-content/uploads/2025/04/%E9%A6%96%E9%A1%B51.jpg"
                srcDark="https://www.aicross.club/wp-content/uploads/2025/04/%E9%A6%96%E9%A1%B51.jpg"
                alt="ai cross club"
                width={800}
                height={800}
                className="w-full aspect-square object-cover"
              />
            </Mockup>
          </MockupFrame>
        </div>

      </div>
    </Section>
  );
} 