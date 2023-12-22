import React from 'react'
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { Badge } from "@/components/ui/badge"
import { CircleDot} from "lucide-react"


type Props = {}



export default function Hero({}: Props) {
  return (

  //   <section className="bg-gray-900 h-screen flex flex-col justify-center items-center text-center p-4">
  //     <section>
  //   <h1  className="text-4xl md:text-5xl lg:text-8xl  font-poppins  text-white">Welcome to <span className=' text-yellow-300'>SourceGuide</span></h1>
  //   <p className="text-lg md:text-xl p-4 lg:text-2xl text-white mt-4 md:mt-6 lg:mt-8">
  //   Your Launchpad into the Open Source Universe! Discover exciting projects, internships, and mentorships in one place.
  //   </p>
  //   <Button className="mt-8 text-white border-white" variant="outline">
  //     Get Started
  //   </Button>
  //   <Button className="mt-8 text-white border-white" variant="outline">
  //     Join our community
  //   </Button>
  //   </section>
  // </section>

  <section className="space-y-6 h-[90%] dark:bg-gray-900 flex justify-center pb-8 font-poppins pt-6 md:pb-12 md:pt-10 lg:py-32 dark:text-white">
  <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
    <a
      className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium"
      target="_blank"
    >
      <Badge>Follow along on Github</Badge>
    </a>
    <h1 className=" tracking-tight font-semibold text-3xl sm:text-5xl md:text-6xl  lg:text-7xl">
      Welcome to SourceGuide
    </h1>
    <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
    Your Launchpad into the Open Source Universe! Discover exciting projects, internships, and Beginner Friendly GSOC issues in one place.
    </p>
    <div className="space-x-4">
      {/* <a href="/login">
        Get Started
      </a>
      <a

        target="_blank"
        rel="noreferrer"

      >
        GitHub
      </a> */}
      <Link href="/issues">
     <Button>
      <CircleDot className="mr-2 h-4 w-4" /> See GSoC issues
    </Button>
    </Link>

    </div>
  </div>
</section>
  
  )
}