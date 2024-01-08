import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  LinkedInLogoIcon,
  TwitterLogoIcon,
  GitHubLogoIcon,
  DiscordLogoIcon,
} from "@radix-ui/react-icons";

const Footer: React.FC = () => {
  //  footer links
  const FooterLinks = [
    {
      title: "Connect",
      links: [
        {
          name: "LinkedIn",
          href: "https://www.linkedin.com/company/sourceguide",
          icon: <LinkedInLogoIcon className="w-5 h-5" />,
          className: "hover:text-gray-900 dark:hover:text-white",
        },
        {
          name: "Twitter",
          href: "https://twitter.com/sourceguidehq",
          icon: <TwitterLogoIcon className="w-5 h-5" />,
        },
        {
          name: "GitHub",
          href: "https://github.com/sourceguidehq",
          icon: <GitHubLogoIcon className="w-5 h-5" />,
        },
        {
          name: "Discord",
          href: "https://discord.com/invite/t3Gzz9bF",
          icon: <DiscordLogoIcon className="w-5 h-5" />,
        },
      ],
    },
    {
      title: "Explore",
      links: [
        {
          name: "About us",
          href: "/about",
        },
        {
          name: "Programs",
          href: "/programs",
        },
        {
          name: "Issues",
          href: "/issues",
        },
        {
          name: "Join us",
          href: "/join",
        },
      ],
    },
    {
      title: "Legal",
      links: [
        {
          name: "Privacy Policy",
          href: "/privacy",
        },
        {
          name: "Terms & Conditions",
          href: "/terms",
        },
      ],
    },
  ];

  return (
    <footer className="bg-[#09090B]">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0 text-center">
            <a href="/" className="flex items-center justify-center mb-2">
              <Image
                src="/favicon.svg"
                className="me-3"
                alt="SourceGuide Logo"
                width={40}
                height={40}
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                SourceGuide
              </span>
            </a>
            <p className="text-lg text-gray-400 dark:text-gray-500">
              Open Source for All
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            {FooterLinks.map((footerLink, index) => (
              <div key={index}>
                <h2 className="mb-6 text-sm font-semibold  uppercase text-white">
                  {footerLink?.title}
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  {footerLink.links.map((link, index) => (
                    <li key={index} className="mb-4">
                      <Link
                        className="hover:underline flex gap-5"
                        href={link?.href}
                      >
                        {link?.icon}
                        {link?.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <hr className="my-6 border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-400 sm:text-center dark:text-gray-500">
            © 2023{" "}
            <a
              href="https://sourceguide.com/"
              className="hover:underline dark:text-white"
            >
              SourceGuide™
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0 space-x-4">
            <Link
              href="https://www.buymeacoffee.com/sourceguide"
              target="_blank"
            >
              <Button>Donate Now</Button>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
