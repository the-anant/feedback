"use client";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button";
import HeroCards from "@/components/public/HeroCard";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { TextGenerateEffect } from "../ui/text-generate-effect";
export const Hero = () => {
  const words = `Oxygen gets you high. In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile. You accept your fate. It's all right here. Emergency water landing, six hundred miles an hour. Blank faces, calm as Hindu cows`;
  return (
    <div className="container  grid  place-items-center py-20 md:py-32 gap-10 shadow-2xl">
      <div className="text-center  space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
              the{" "}
            </span>
            अनंत{" "}
          </h1>
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text"></span>{" "}
          </h2>
        </main>

        <div className="text-xl text-muted-foreground md:w-10/12 mx-auto">
          <TextGenerateEffect words={words} />
        </div>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Button className="w-full md:w-1/3">Let's Contact</Button>

          <Link
            href="https://github.com/leoMirandaa/shadcn-landing-page.git"
            target="_blank"
            className={`w-full md:w-1/3 ${buttonVariants({
              variant: "outline",
            })}`}
          >
            Github Repository
            <GitHubLogoIcon className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* Hero cards sections */}
      <div className="z-10">{/* <HeroCards /> */}</div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </div>
  );
};
