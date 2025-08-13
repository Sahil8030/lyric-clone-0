import React from 'react';

function PrivacyPolicy() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 text-white leading-relaxed text-[16px]">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="mb-6">Last Modified Date: November 21, 2022</p>

      <section className="space-y-4">
        <p>This Privacy Policy (“Policy”) describes how ChainBrain, Inc. (dba Lyric) (“we,” “us” or “our”) collects, uses, and discloses personal data, and the choices you have related to this.</p>

        <p>Please review this Policy carefully to understand our practices regarding your personal data. If you do not agree with the practices described in this Policy, please do not access or use our Websites or Services (defined below).</p>

        <h2 className="text-2xl font-semibold mt-8">Privacy Policy Applicability</h2>
        <p>This Policy is applicable to data collected through ChainBrain.ai and other websites managed by Lyric...</p>
        {/* Continue like this for each section of the policy... */}

        {/* For readability and maintainability, you can break up the sections into smaller components later. */}
        {/* Insert headings using h2/h3 tags and content in p tags. Add margins for spacing between sections. */}
        
        {/* ...snip for brevity, you can paste the rest of the policy here continuing the same pattern. */}

        <h2 className="text-2xl font-semibold mt-8">Contact Us</h2>
        <p>If you have any questions about this Policy, or to exercise any of your data privacy rights, please email us at <a className="text-blue-600 underline" href="mailto:privacy@lyric.tech">privacy@lyric.tech</a>.</p>
      </section>
    </div>
  );
}

export default PrivacyPolicy;
