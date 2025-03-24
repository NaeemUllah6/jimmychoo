import React from "react";
import { Link } from "react-router-dom";

const contactDetails = [
  {
    title: "Call Us",
    content: [
      "(0) 8081961939 from the UK",
      "(+44) 2080590800 from any other country",
      "Monday to Saturday",
      "08:00am-5:00pm (BST)"
    ],
  },
  {
    title: "Message Us",
    content: ["Get in touch with our Customer Services team"],
    link: {
      text: "CONTACT US",
      href: "#",
    },
  },
  {
    title: "Visit Us",
    content: [
      "Find your nearest boutique",
      "Book an appointment with a personal stylist",
    ],
    link: {
      text: "STORE LOCATOR",
      href: "#",
    },
  },
];

const ContactUs = () => {
  return (
    <div className="bg-neutral-600 min-h-screen pt-30">
      {/* Navbar */}
      <nav className=" py-4 px-6">
        <Link to="/" className="text-[#DFB83B] font-medium">Home</Link>
      </nav>

      {/* Contact Us Section */}
      <div className="text-center py-12 px-4">
        <h2 className="text-2xl font-bold">Contact Us</h2>
        <p className="text-[#DFB83B] mt-2">
          Welcome to Rigz 2 Riche$. <br />
          Complete the form below to contact our Customer Service team.
        </p>

        {/* Dropdown */}
        <div className="mt-6">
          <label htmlFor="subject" className="block font-semibold mb-2">
            Subject*
          </label>
          <select
            id="subject"
            className="w-full max-w-sm px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-gray-300"
          >
            <option>Please select</option>
            <option>General Inquiry</option>
            <option>Order Issue</option>
            <option>Returns</option>
          </select>
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-neutral-700 py-12 px-6 ">
        <div className=" mx-auto grid grid-cols-1 md:grid-cols-3 gap-3">
          {contactDetails.map((item, index) => (
            <div key={index} className="border border-b-slate-400 shadow-md p-5 rounded-lg">
              <h5 className="text-lg font-bold">{item.title}</h5>
              {item.content.map((text, idx) => (
                <p key={idx} className="text-[#DFB83B] mt-2">{text}</p>
              ))}
              {item.link && (
                <a href={item.link.href} className="text-[#DFB83B] font-semibold underline">
                  {item.link.text}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
