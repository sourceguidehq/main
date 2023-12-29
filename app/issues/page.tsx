import React from 'react';
import Collection from '@/comps/Collection';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Issues() {
  return (
    <div className="space-y-6 dark:bg-[#09090B] dark:text-white p-8 font-poppins">
      <div className="container flex flex-col items-center gap-4 text-center">
        <h1 className="tracking-tight font-semibold text-3xl sm:text-5xl md:text-6xl lg:text-7xl mb-4">
          Beginner-Friendly GSOC Issues
        </h1>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Explore the list of beginner-friendly GSOC issues from various organizations. Get started on
          your open source journey!
        </p>
      </div>
      <Collection />
      
    </div>
  );
}
