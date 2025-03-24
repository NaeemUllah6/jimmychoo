const NewsletterSignup = () => {
  return (
    <div className="flex flex-col items-center text-center py-12 bg-neutral-900 px-10">
      {/* Heading */}
      <h2 className="text-2xl font-bold !text-[#DFB83B]">Sign up for Rigz 2 Riche$ Updates</h2>
      <p className=" mt-2 !text-[#DFB83B]">
        Be first to receive early access to our latest collections, <br /> exclusive events and news
      </p>

      {/* Email Input */}
      <div className="mt-6 w-full max-w-lg relative">
        <label className="block text-left font-medium text-sm mb-1 !text-[#DFB83B]">
          Email address <span className="text-red-500">*</span>
        </label>
        <div className="flex border border-[#DFB83B] rounded-md overflow-hidden">
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full p-3 text-gray-700  outline-none placeholder:text-[#DFB83B]"
          />
          <button className="bg-neutral-800 px-4 text-lg !text-[#DFB83B]">&rarr;</button>
        </div>
      </div>

      {/* Terms and Conditions */}
      <p className="text-xs  mt-3 !text-[#DFB83B]">
        By entering your email address you are accepting our{" "}
        <a href="#" className="text-[#DFB83B]-600 underline">Terms & Conditions</a> and{" "}
        <a href="#" className="text-[#DFB83B]-600 underline">Privacy & Cookie Policy</a>.
      </p>
    </div>
  );
};

export default NewsletterSignup;
