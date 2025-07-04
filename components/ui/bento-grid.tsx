import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { ReactNode } from "react";

import { cn } from "@/lib/utils";

import { Button } from "./button";

function BentoGrid({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-1 md:grid-cols-2 lg:grid-cols-10 gap-8",
        className,
      )}
    >
      {children}
    </div>
  );
}

function BentoGridItem({
  className,
  title,
  description,
  href,
  cta,
  background,
  icon,
}: {
  className?: string;
  title?: string | ReactNode;
  description?: string | ReactNode;
  href?: string;
  cta?: string;
  background?: ReactNode;
  icon?: ReactNode;
}) {
  return (
    <div
      className={cn(
        "group relative col-span-1 md:col-span-2 lg:col-span-1 flex flex-col justify-between overflow-hidden rounded-xl border",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
        className,
      )}
    >
      <div>{background}</div>
      <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">

        <h3 className="text-xl font-semibold text-neutral-950 dark:text-neutral-50">
          {icon}{title}
        </h3>
        <p className="max-w-lg text-neutral-400">{description}</p>
      </div>

      <div
        className={cn(
          "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100",
        )}
      >
        <Button variant="ghost" asChild size="sm" className="pointer-events-auto">
          <Link href={href || "/"}>
            {cta}
            <ArrowRightIcon className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
      <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
    </div>
  );
}

export { BentoGrid, BentoGridItem }; 