"use client";
import axios from "axios";
import React, { useEffect } from "react";
import { GitHub, Instagram, Linkedin, Nextjs, Twitter, Youtube} from "./Icons";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import Link from "next/link";

export default function Statistics() {
  const [subscriber, setSubscriber] = React.useState('');
  const [profileData, setProfileData] = React.useState(null);
  interface statsProps {
    icon:JSX.Element;
    quantity: string;
    description: string;
  }

  const stats: statsProps[] = [
    {
      icon:<Linkedin/>,
      quantity: "3.4K",
      description: "Users",
    },
   
    {
      icon:<Youtube/>,
      quantity:subscriber,
      description: "Subscribers",
    },
    {
      icon:<Instagram/>,
      quantity: "372",
      description: "Follower",
    },
    {
      icon:<Twitter/>,
      quantity: "4",
      description: "Follower",
    }, 
    {
      icon:<GitHub/>,
      quantity: "3.4K",
      description: "Users",
    },
  ];
  useEffect(() => {
    const sub = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${process.env.CHANNEL_ID}&key=${process.env.API_KEY}`
        );
        const { subscriberCount } = response.data.items[0].statistics;
        
        // return subscriberCount;
        if (subscriberCount >= 1000) {
          const roundedsubscriberCount = Math.round(subscriberCount / 100) / 10;
          setSubscriber(`${roundedsubscriberCount}K`);
      } else {
        setSubscriber(subscriberCount.toString())
         
      }
      } catch (error) {
        console.error("Error fetching YouTube subscriber count:", error);
        return null;
      }
    };
    //
    // sub();
  }, []);
  // console.log(profileData)
  // console.log(subscriber);
  return (
    <div className="">
      <div className="grid grid-cols-5 shrink-0 lg:grid-cols-5">
        {stats.map(({ icon, quantity, description }: statsProps) => (
          <div
            key={description}
            className=""
          >
            <div>
              <div className="grid  place-items-center">
                <Link href={description}>{icon}</Link>
                
                {/* <div className="grid grid-cols-2">
                  <div className="text-sm"> {description}</div>{" "}
                  <div>{quantity}</div>
                  
                </div>
                 */}
                
                
              </div>
            </div>
            {/* <CardContent>{description}</CardContent> */}
          </div>
        ))}
      </div>
    </div>
  );
}
