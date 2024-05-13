"use client";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface TeamProps {
  imageUrl: string;
  name: string;
  position: string;
  socialNetworks: SociaNetworkslProps[];
}
interface SociaNetworkslProps {
  name: string;
  url: string;
}
export const InfiniteMovingCards = ({
  teamList,
  
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  teamList: {
    imageUrl: string;
    name: string;
    position: string;
    socialNetworks: SociaNetworkslProps[];
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;

}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  const socialIcon = (iconName: string) => {
    switch (iconName) {
      case "Linkedin":
        return <Linkedin size="20" />;

      case "Facebook":
        return <Facebook size="20" />;

      case "Instagram":
        return <Instagram size="20" />;
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20  max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        <div className="grid  grid-cols-4 gap-8 gap-y-10">
          {teamList.map(
            ({ imageUrl, name, position, socialNetworks }: TeamProps) => (
              <Card
                key={name}
                className="bg-muted/50 relative mt-8 flex flex-col justify-center items-center w-64"
              >
                <CardHeader className="mt-8 flex justify-center items-center pb-2">
                  <img
                    src={imageUrl}
                    alt={`${name} ${position}`}
                    className="absolute -top-12 rounded-full w-24 h-24 aspect-square object-cover"
                  />
                  <CardTitle className="text-center">{name}</CardTitle>
                  <CardDescription className="text-primary">
                    {position}
                  </CardDescription>
                </CardHeader>

                <CardContent className="text-center pb-2">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                </CardContent>

                <CardFooter>
                  {socialNetworks.map(({ name, url }: SociaNetworkslProps) => (
                    <div key={name}>
                      <a
                        href={url}
                        target="_blank"
                        className={buttonVariants({
                          variant: "ghost",
                          size: "sm",
                        })}
                      >
                        <span className="sr-only">{name} icon</span>
                        {socialIcon(name)}
                      </a>
                    </div>
                  ))}
                </CardFooter>
              </Card>
            )
          )}
        </div>
      </ul>
    </div>
  );
};
