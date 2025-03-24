import React from "react";
import { Link } from "react-router-dom";

const privacyPolicyContent = [
  {
    title: "Introduction",
    content:
      "Rigz 2 Riche$ values its customers and respects their privacy. This Privacy Policy explains how we collect, use, and protect your personal information.",
  },
  {
    title: "What information we collect",
    content:
      "We collect various types of information, including your name, email address, and purchase history when you interact with our website.",
  },
  {
    title: "How we use your information",
    content:
      "Your information is used to enhance your shopping experience, process transactions, and improve our services.",
  },
  {
    title: "Your Rights",
    content:
      "You have the right to access, correct, or delete your personal data. Contact us for any requests regarding your data.",
  },
];

const faqData = [
  {
    question: "How do I contact customer service?",
    answer:
      "You can contact customer service through our support page or by calling our helpline.",
  },
  {
    question: "How do I return a product?",
    answer:
      "You can initiate a return through our website by following the return policy instructions.",
  },
  {
    question: "How is my personal data protected?",
    answer:
      "We implement strict security measures to ensure the protection of your personal information.",
  },
];

const ContactUs = () => {
  return (
    <div className="bg-neutral-700 min-h-screen pt-30 ">
      {/* Navbar */}
      <nav className=" w-full py-4 px-6 flex justify-center">
        
        <input
          type="text"
          placeholder="Search..."
          className="border border-[#DFB83B] w-full md:w-1/3 focus:outline-0 py-2 px-3  rounded-md text-[#DFB83B]"
        />
      </nav>

      <Link className="px-8" to='/'>
        Home
        </Link>
      {/* Privacy Policy Section */}
      <div className="max-w-4xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold text-center">Privacy Policy</h2>
        <p className="text-[#DFB83B] text-center mt-2">
          Learn more about how we handle your data and privacy.
        </p>

        <div className="mt-6 space-y-6">
          {privacyPolicyContent.map((section, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold">{section.title}</h3>
              <p className="text-[#DFB83B] mt-2">{section.content}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-neutral-600 py-12 px-6">
        <h3 className="text-2xl font-bold text-center">Related Questions</h3>
        <div className="max-w-3xl mx-auto mt-6">
          {faqData.map((faq, index) => (
            <details key={index} className="border-b py-4">
              <summary className="text-lg font-medium cursor-pointer">
                {faq.question}
              </summary>
              <p className="text-[#DFB83B] mt-2">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
