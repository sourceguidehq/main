
"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { createContext } from 'react';



export default function Faq() {
  return (
    <section className="flex flex-col items-center my-8 sm:w-[80%] sm:text-left sm:mr-14 mb-8 sm:mb-0">
      <h1 className="text-[rgb(83,169,234)] tracking-widest font-bold mb-4 text-3xl">
        FREQUENTLY ASKED QUESTIONS
      </h1>
      <Accordion type="single" collapsible className="w-full text-left">
        {/* Question 1 */}
        <AccordionItem value="item-1">
          <AccordionTrigger className="font-bold dark:text-white text-xl">
            How can I contribute to SourceGuide?
          </AccordionTrigger>
          <AccordionContent className="dark:text-white">
            Contributing to SourceGuide is easy! Simply visit our{' '}
            <a
              href="https://github.com/SourceGuideHQ"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[rgb(83,169,234)] underline"
            >
              Github
            </a>{' '}
            to get started. We welcome contributions from developers, designers, and enthusiasts.
          </AccordionContent>
        </AccordionItem>
        
        {/* Question 2 */}
        <AccordionItem value="item-2">
          <AccordionTrigger className="font-bold dark:dark:text-white text-xl ">
            Is SourceGuide only for experienced developers?
          </AccordionTrigger>
          <AccordionContent className="dark:text-white">
            No, SourceGuide is inclusive for everyone, regardless of experience level. We curate projects with beginner-friendly issues, making it an ideal platform for those new to open source. Whether you're a seasoned developer or just starting, there's a place for you to learn, contribute, and grow with SourceGuide.
          </AccordionContent>
        </AccordionItem>
        
        {/* Question 3 */}
        <AccordionItem value="item-3">
          <AccordionTrigger className="font-bold dark:text-white text-xl">
          Who started this initiative?
          </AccordionTrigger>
          <AccordionContent className="dark:text-white">
          The SourceGuide initiative was started by{' '}
            <a
              href="https://github.com/ezhillragesh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[rgb(83,169,234)] underline"
            >
              Ezhill Ragesh
            </a>{' '}
            and{' '}
            <a
              href="https://github.com/ashura-code"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[rgb(83,169,234)] underline"
            >
              Adithya Nandish
            </a>{' '}
            in 2023. They initiated this project with a vision to establish a collaborative repository of open source projects, internships, and mentorship opportunities.
          
          </AccordionContent>
        </AccordionItem>
        
        {/* Question 4 */}
        <AccordionItem value="item-4">
          <AccordionTrigger className="font-bold dark:text-white text-xl">
          Are all GSoC organizations included here?
          </AccordionTrigger>
          <AccordionContent className="dark:text-white">
          We include organizations that have participated in GSoC over the last 5 years consistently.
          </AccordionContent>
        </AccordionItem>
        
        {/* Question 5 */}
        <AccordionItem value="item-5">
          <AccordionTrigger className="font-bold dark:text-white text-xl">
          How does it find beginner-friendly issues?
          </AccordionTrigger>
          <AccordionContent className="dark:text-white">
          We identify beginner-friendly issues by searching for those tagged as "good-first-issue" or "beginner-friendly" and display them for contributors.
          </AccordionContent>
        </AccordionItem>
        
      </Accordion>
    </section>
  );
}

