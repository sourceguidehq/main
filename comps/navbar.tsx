"use client";
import {
  NavigationMenuLink,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenu,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet.tsx";
import Link from "next/link";

export default function Navbar() {
  const NavLinks = [
    {
      name: "About",
      href: "about",
    },
    {
      name: "Programs",
      href: "programs",
    },
    {
      name: <Image src="/favicon.svg" alt="logo" width={40} height={40} />,
      href: "/",
    },
    {
      name: "Issues",
      href: "issues",
    },
    {
      name: "Join Us",
      href: "join",
    },
  ];

  return (
    <div className="my-4 mx-auto">
      <NavigationMenu className="dark:text-white my-0 mx-auto">
        <NavigationMenuList>
          {NavLinks.map((link, index) => (
            <NavigationMenuItem key={index}>
              <Link href={link.href}>
                <NavigationMenuLink className="group sm:block h-9 w-max hidden items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50">
                  {link.name}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
          {/* mobile navbar */}
          <NavigationMenuItem>
            <NavigationMenuLink className="sm:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline">Menu</Button>
                </SheetTrigger>
                <SheetContent className="dark:text-white">
                  {NavLinks.map((link, index) => (
                    <div className="my-5" key={index}>
                      <Link
                        href={link.href}
                        className="flex flex-col gap-5 w-[100%] items-center "
                      >
                        <Button className="w-24">{link.name}</Button>
                      </Link>
                    </div>
                  ))}
                </SheetContent>
              </Sheet>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
