// pages/privacy-policy.tsx
import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <div className="container mx-auto my-8 p-8 dark:bg-[#09090B] dark:text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 text-center">
          Privacy Policy
        </h1>

        <p className="text-lg md:text-xl lg:text-2xl mb-6 text-center">
          Your privacy is important to us. This Privacy Policy explains how we handle user information when you visit our website.
        </p>

        <h2 className="text-2xl font-semibold mb-2">Information We Don't Collect</h2>
        <p className="mb-6">
          We want to assure you that we do not collect any personal information from users visiting our website. You can explore our site anonymously without providing any identifiable details.
        </p>

        <h2 className="text-2xl font-semibold mb-2">How We Use Your Information</h2>
        <p className="mb-6">
          Since we don't collect any user information, there is no usage of such information. Your privacy is of utmost importance to us, and you can navigate our site without concerns about your personal data being used for any purposes.
        </p>

        <h2 className="text-2xl font-semibold mb-2">Cookies</h2>
        <p className="mb-6">
          Our website may use cookies for essential functions, such as remembering your preferences. Cookies are small text files stored on your device, and they are not used to track or identify users. You have the option to manage or disable cookies in your browser settings.
        </p>

        <h2 className="text-2xl font-semibold mb-2">Third-Party Links</h2>
        <p className="mb-6">
          Our website may contain links to third-party websites. Please note that we are not responsible for the privacy practices of such sites. We encourage you to read the privacy policies of each website you visit to understand how they collect, use, and safeguard your information.
        </p>

        <h2 className="text-2xl font-semibold mb-2">Policy Changes</h2>
        <p className="mb-6">
          We may update our Privacy Policy from time to time to reflect changes in our practices. Any changes will be reflected on this page. It is your responsibility to review this Privacy Policy periodically to stay informed about how we are protecting your information.
        </p>

        <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
        <p className="mb-6">
          If you have any questions or concerns about our Privacy Policy, please feel free to contact us at 
          <a href='mailto:ragesh@duck.com' className='text-blue-300'>
          &nbsp;  ragesh@duck.com &nbsp;  
          </a>.
          
          We are committed to addressing any inquiries related to your privacy and data security.
        </p>

        <h2 className="text-2xl font-semibold mb-2">Data Security</h2>
        <p className="mb-6">
          We take the security of your data seriously. While we don't collect personal information, we employ measures to protect any data that may be collected through cookies or other means. Our security measures include encryption, access controls, and regular security assessments.
        </p>

        <h2 className="text-2xl font-semibold mb-2">Children's Privacy</h2>
        <p className="mb-6">
          Our website is not directed at individuals under the age of 13. We do not knowingly collect information from children. If you believe that a child has provided us with personal information, please contact us, and we will take steps to delete such information.
        </p>

        
      </div>
    </>
  );
};

export default PrivacyPolicy;
