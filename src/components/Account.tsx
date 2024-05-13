"use client";
import Image from "next/image";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { signOut, useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Link from "next/link";
import { CircleUser } from "lucide-react";
export default function AccountProfile() {
  const session = useSession();
  return (
    <>
       <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="secondary"
                  size="icon"
                  className="rounded-full"
                >
                  {session.status === "unauthenticated" && (
                    <CircleUser className="h-5 w-5" />
                  )}
                  {session.status === "authenticated" && (
                    <>
                      <Avatar className="h-5 w-5">
                        {session.data.user.image&&(
                          <AvatarImage
                          src={session.data.user.image}
                          alt={session.data.user.name!}
                        />
                        )}
                        
                        <AvatarFallback>
                          {session.data.user
                            .name!.split(" ")
                            .map((chunk) => chunk[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                    </>
                  )}
                  <span className="sr-only">Toggle user menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuSeparator />
                {session.status === "unauthenticated" && (
                  <>
                    <DropdownMenuItem>
                      <Link href={"/sign-in"}>Login</Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <Link href={"/sign-up"}>Register</Link>
                    </DropdownMenuItem>
                  </>
                )}
                {session.status === "authenticated" && (
                  <>
                    <DropdownMenuItem>
                      <Link href={`/${session.data.user.username}`}>Profile</Link>
                    </DropdownMenuItem>
                    {/* <DropdownMenuItem>Support</DropdownMenuItem> */}
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => signOut()}>
                      Logout
                    </DropdownMenuItem>
                  </>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
    </>
  );
}
