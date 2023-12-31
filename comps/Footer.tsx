import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
// Import icons
import { LinkedInLogoIcon, TwitterLogoIcon, GitHubLogoIcon, DiscordLogoIcon } from "@radix-ui/react-icons";

const Footer: React.FC = () => {
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
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                SourceGuide
              </span>
            </a>    
            <p className="text-lg text-gray-400 dark:text-gray-500">Open Source for All</p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div className="text-center">
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Connect
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium flex space-x-4 justify-center">
                <li>
                  <a
                    href="LINKEDIN_PROFILE_LINK"
                    className="hover:text-gray-900 dark:hover:text-white"
                  >
                    <LinkedInLogoIcon className="w-5 h-5" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/sourceguidehq"
                    className="hover:text-gray-900 dark:hover:text-white"
                  >
                    <TwitterLogoIcon className="w-5 h-5" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/sourceguidehq"
                    className="hover:text-gray-900 dark:hover:text-white"
                  >
                    <GitHubLogoIcon className="w-5 h-5" />
                  </a>
                </li>
                <li>
                  <a
                    href="DISCORD_INVITE_LINK"
                    className="hover:text-gray-900 dark:hover:text-white"
                  >
                    <DiscordLogoIcon className="w-5 h-5" />
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Explore
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link href="/about">
                   About us
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/programs">
                    Programs
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/issues">
                    Issues
                  </Link>
                </li>
                <li>
                  <Link href="/join">
                    Join us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Legal
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="/privacy" className="hover:underline" target='_blank'>
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/terms" className="hover:underline" target='_blank'>
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-400 sm:text-center dark:text-gray-500">
            © 2023{' '}
            <a href="https://sourceguide.com/" className="hover:underline dark:text-white">
              SourceGuide™
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0 space-x-4">
            <Link href="https://www.buymeacoffee.com/sourceguide" target='_blank'>
              <Button>
                Donate Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
