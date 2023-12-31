// pages/terms-and-conditions.tsx
import React from 'react';

const TermsAndConditions: React.FC = () => {
  return (
    <>
      <div className="container mx-auto my-8 p-8 dark:bg-[#09090B] dark:text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 text-center">
          Terms and Conditions
        </h1>

        <p className="text-lg md:text-xl lg:text-2xl mb-6 text-center">
          Please read these terms and conditions carefully before using our website.
        </p>

        <h2 className="text-2xl font-semibold mb-2">Acceptance of Terms</h2>
        <p className="mb-6">
          By accessing or using our website, you agree to be bound by these terms and conditions. If you do not agree with any part of these terms, you may not use our website.
        </p>

        <h2 className="text-2xl font-semibold mb-2">Use of Website</h2>
        <p className="mb-6">
          Our website is intended for general informational purposes. You may use our website for lawful purposes only and must not engage in any activity that disrupts the proper functioning of the site.
        </p>

        <h2 className="text-2xl font-semibold mb-2">Intellectual Property</h2>
        <p className="mb-6">
          The content on our website, including text, graphics, logos, and images, is the intellectual property of SourceGuide. You may not use, reproduce, or distribute the content without our express written permission.
        </p>

        <h2 className="text-2xl font-semibold mb-2">Links to Other Websites</h2>
        <p className="mb-6">
          Our website may contain links to third-party websites. We are not responsible for the content or practices of these sites. You access third-party websites at your own risk.
        </p>

        <h2 className="text-2xl font-semibold mb-2">Termination</h2>
        <p className="mb-6">
          We reserve the right to terminate or suspend your access to our website for any reason, without notice. All provisions of these terms that by their nature should survive termination will survive termination, including ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
        </p>

        <h2 className="text-2xl font-semibold mb-2">Changes to Terms</h2>
        <p className="mb-6">
          We may update these terms and conditions from time to time. Any changes will be reflected on this page. It is your responsibility to review these terms periodically for changes.
        </p>

        <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
        <p className="mb-6">
          If you have any questions or concerns about our terms and conditions, please contact us at <a href='mailto:ragesh@duck.com' className='text-blue-300'>
          &nbsp;  ragesh@duck.com &nbsp;  
          </a>.
        </p>

        
      </div>
    </>
  );
};

export default TermsAndConditions;
