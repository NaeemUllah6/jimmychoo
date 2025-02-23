import { useState } from "react";

const SignUpForm = () => {
  const titles = ["Mr", "Ms", "Mrs", "Dr"];
  const countries = ["United Kingdom", "United States", "Canada", "Australia"];
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const years = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i);

  const [formData, setFormData] = useState({
    title: "",
    firstName: "",
    lastName: "",
    country: "United Kingdom",
    birthDay: "",
    birthMonth: "",
    birthYear: "",
    email: "",
    confirmEmail: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };
  

  return (
    <form onSubmit={handleSubmit} className="p-8 bg-white max-w-lg mx-auto border rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-2">Sign Up</h2>
      <p className="mb-4 text-sm">
        Enjoy a more personalised shopping experience with a Jimmy Choo account
      </p>
      <ul className="list-disc pl-5 mb-4 text-sm">
        <li>Manage wishlist</li>
        <li>Follow orders & returns</li>
        <li>Exclusive early access to collections and events</li>
        <li>Faster Checkout</li>
      </ul>

      <div className="grid grid-cols-2 gap-2 mb-3">
        <select name="title" value={formData.title} onChange={handleChange} className="border p-2 rounded">
          <option value="">Please Select</option>
          {titles.map((title) => (
            <option key={title} value={title}>
              {title}
            </option>
          ))}
        </select>
        <input
          type="text"
          name="firstName"
          placeholder="First name*"
          value={formData.firstName}
          onChange={handleChange}
          required
          className="border p-2 rounded w-full"
        />
      </div>

      <input
        type="text"
        name="lastName"
        placeholder="Last name*"
        value={formData.lastName}
        onChange={handleChange}
        required
        className="border p-2 rounded w-full mb-3"
      />

      <select name="country" value={formData.country} onChange={handleChange} className="border p-2 rounded w-full mb-3">
        {countries.map((country) => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </select>

      <p className="text-sm mb-2">Date of birth*</p>
      <div className="grid grid-cols-3 gap-2 mb-3">
        <select name="birthDay" value={formData.birthDay} onChange={handleChange} className="border p-2 rounded">
          <option value="">dd*</option>
          {days.map((day) => (
            <option key={day} value={day}>
              {day}
            </option>
          ))}
        </select>

        <select name="birthMonth" value={formData.birthMonth} onChange={handleChange} className="border p-2 rounded">
          <option value="">mm*</option>
          {months.map((month, index) => (
            <option key={month} value={index + 1}>
              {month}
            </option>
          ))}
        </select>

        <select name="birthYear" value={formData.birthYear} onChange={handleChange} className="border p-2 rounded">
          <option value="">yy*</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      <input
        type="email"
        name="email"
        placeholder="Email*"
        value={formData.email}
        onChange={handleChange}
        required
        className="border p-2 rounded w-full mb-3"
      />

      <input
        type="email"
        name="confirmEmail"
        placeholder="Confirm email*"
        value={formData.confirmEmail}
        onChange={handleChange}
        required
        className="border p-2 rounded w-full mb-4"
      />

      <button type="submit" className="bg-black text-white p-2 rounded w-full">
        Sign Up
      </button>
    </form>
  );
};

export default SignUpForm;
