import { Badge } from "../ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import image from "../public/img/growth.png";
import image3 from "../public/img/reflecting.png";
import image4 from "../public/img/looking-ahead.png";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

interface FeatureProps {
  title: string;
  description: string;
  image: any;
}

const features: FeatureProps[] = [
  {
    title: "Responsive Design",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
    image: image4,
  },
  {
    title: "Intuitive user interface",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
    image: image3,
  },
  {
    title: "AI-Powered insights",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
    image: image,
  },
];

const featureList: string[] = [
  "Dark/Light theme",
  "Reviews",
  "Features",
  "Pricing",
  "Contact form",
  "Our team",
  "Responsive design",
  "Newsletter",
  "Minimalist",
];

export default function Features() {
  return (
    <section id="features" className="container py-20 sm:py-32 space-y-8">
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Many{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Great Projects
        </span>
      </h2>

      <div className="flex flex-wrap md:justify-center gap-4">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge variant="secondary" className="text-sm">
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, image }: FeatureProps) => (
          <Link href={"/"} className="hover:scale-105">
            <Card key={title}>
              <CardHeader>
                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <Image
                src={image}
                alt="About feature"
                className="w-[200px] lg:w-[200px] mx-auto"
              ></Image>

              <CardFooter>
                <div>
                  <CardContent>{description}</CardContent>
                  <span className="hover:scale-105 hover:text-blue-500">visit fiull website </span>
                </div>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
      <Button className="">More Projects</Button>
    </section>
  );
}
