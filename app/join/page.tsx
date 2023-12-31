import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CircleDollarSign, Gamepad2, Github } from 'lucide-react';

const JoinUsPage: React.FC = () => {
  return (
    <div className="container mx-auto text-center py-10 light:bg-[#F9DEC2] dark:bg-[#09090B] dark:text-white">
      <section className='mb-4'>
        <h1 className="text-5xl font-semibold mb-4">Support Us</h1>
        <p className="text-lg text-muted-foreground m-[3rem] ">
          SourceGuide thrives on community passion, and your support fuels our growth. Consider contributing to our project with a donation, an investment that enhances features, supports diverse projects, and solidifies SourceGuide as the go-to platform for open source enthusiasts. Your generosity catalyzes positive change, unlocking possibilities for innovation and collaborative exploration. Join us on this transformative journey; your support isn't just appreciated—it's instrumental in sculpting SourceGuide's future as a dynamic hub for open-source enthusiasts.
        </p>
        <Link href="https://www.buymeacoffee.com/sourceguide">
          <Button> <CircleDollarSign className="mr-2 h-5 w-5" /> Donate Now</Button>
        </Link>
      </section>
      <section className="mb-2">
        <h1 className="text-5xl font-semibold ">
          Join the SourceGuide Community
        </h1>
        <p className="text-lg text-muted-foreground  m-[3rem]">
          Welcome to the beating heart of SourceGuide, the nucleus where dedicated contributors, much like yourself, play a pivotal role in shaping the future landscape of open source technology. At SourceGuide, we extend a warm invitation for you to immerse yourself in our vibrant community, a melting pot of diverse talents, and contribute your unique skills, innovative ideas, and boundless enthusiasm.

          By joining hands with us, you aren't just a participant; you're a co-creator, an integral part of a collective journey towards excellence. Unleash your potential and become a catalyst for positive change within the open-source realm. Your collaboration is what makes SourceGuide a dynamic hub for innovation, knowledge-sharing, and collective growth.
        </p>
        <div className="flex justify-center space-x-4">
          <Link href="https://github.com/sourceguidehq">
            <Button> <Github className="mr-2 h-5 w-5" />Contribute Now</Button>
          </Link>
          <a href="DISCORD_INVITE_LINK" target="_blank" rel="noreferrer"> 
            <Button> <Gamepad2 className="mr-2 h-5 w-5" /> Join Discord Server</Button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default JoinUsPage;
