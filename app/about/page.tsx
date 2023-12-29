"use client";
import Faq from "@/comps/Faq";


const About = () => {
  return (
    <div className="text-center m-10 ">
      <section className="my-11 sm:my-56 mx-4">
        <h1 className="text-[rgb(83,169,234)] tracking-widest text-lg">
          OUR MISSION
        </h1>
        <h2 className="scroll-m-20 dark:text-white text-4xl font-semibold tracking-tight lg:text-5xl mt-4">
          SourceGuide empowers and connects open source enthusiasts worldwide
        </h2>
        <p className="dark:text-white sm:mx-[20%] text-lg sm:text-2xl mt-6">
          We strive to create a dynamic platform that serves as a central hub
          for discovering, contributing to, and collaborating on innovative open
          source projects.
        </p>
      </section>

      <hr className="m-4 border-slate-500"></hr>

      <section className="text-center sm:grid sm:grid-cols-2 sm:gap-8">
        {/* Vision Section */}
        <section className="sm:w-[80%] sm:text-left sm:mr-14 mb-8 sm:mb-0">
          <h1 className="text-[rgb(83,169,234)] tracking-widest text-lg">
            OUR VISION
          </h1>
          <p className="dark:text-white text-lg text-justify sm:text-2xl mt-6">
            We envision a future where SourceGuide becomes the go-to destination
            for developers, mentors, and contributors seeking meaningful
            opportunities and resources in the open source realm. We aim to
            foster a culture of knowledge sharing, skill enhancement, and
            community building, ultimately contributing to the advancement of
            the global open source ecosystem.
          </p>
        </section>

        {/* About Section */}
        <section className="sm:w-[80%] sm:text-right sm:ml-[20%]">
          <h1 className="text-[rgb(83,169,234)] tracking-widest text-lg">
            ABOUT SOURCE GUIDE
          </h1>
          <p className="dark:text-white text-lg text-justify sm:text-2xl mt-6">
            SourceGuide was initiated in 2023 with a visionary goal — to
            establish a collaborative repository of open source projects,
            internships, and mentorship opportunities. Founded by <a
              href="https://github.com/ezhillragesh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[rgb(83,169,234)]"
            >
              EzhillRagesh
            </a>{' '}
            and{' '}
            <a
              href="https://github.com/ashura-code"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[rgb(83,169,234)]"
            >
              AdhityaNantish
            </a>, our platform is dedicated to providing a curated
            space where individuals from diverse backgrounds come together to
            share, contribute, and explore the vast landscape of open source
            initiatives.
          </p>
         

        </section>
        <section className="sm:w-full sm:mx-auto">
          <Faq />
        </section>

        
        
      </section>
      
    </div>
  );
};

export default About;
