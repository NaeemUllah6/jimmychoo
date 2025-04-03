import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import bgImage from './backgroundImage.webp';

const Signup = () => {
  const navigate = useNavigate();
  
  // Constants for form options
  const titles = ["Mr", "Ms", "Mrs", "Dr"];
  const countries = ["United Kingdom", "United States", "Canada", "Australia"];
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const years = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i);

  // Form field configurations
  const formFields = [
    { name: "firstName", type: "text", placeholder: "First name*", required: true },
    { name: "lastName", type: "text", placeholder: "Last name*", required: true },
    { name: "email", type: "email", placeholder: "Email*", required: true },
    { name: "confirmEmail", type: "email", placeholder: "Confirm email*", required: true },
    { name: "password", type: "password", placeholder: "Password* (min 8 characters)", required: true },
    { name: "phoneNumber", type: "tel", placeholder: "Phone Number*", required: true }
  ];

  // Form state management
  const [formData, setFormData] = useState({
    title: "",
    firstName: "",
    lastName: "",
    email: "",
    confirmEmail: "",
    password: "",
    phoneNumber: "",
    country: "United Kingdom",
    birthDay: "",
    birthMonth: "",
    birthYear: "",
    acceptPrivacyPolicy: false,
    acceptMarketing: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  // Form validation
  const validateForm = () => {
    let newErrors = {};

    // Required fields validation
    if (!formData.title) newErrors.title = "Title is required";
    if (!formData.birthDay || !formData.birthMonth || !formData.birthYear) {
      newErrors.dob = "Complete date of birth is required";
    }
    if (!formData.acceptPrivacyPolicy) {
      newErrors.acceptPrivacyPolicy = "You must accept the privacy policy";
    }

    // Field-specific validation
    formFields.forEach(({ name, required }) => {
      if (required && !formData[name]?.trim()) {
        const fieldName = name.replace(/([A-Z])/g, " $1").replace(/^./, str => str.toUpperCase());
        newErrors[name] = `${fieldName} is required`;
      }
    });

    // Email validation
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    // Email confirmation
    if (formData.confirmEmail !== formData.email) {
      newErrors.confirmEmail = "Emails do not match";
    }

    // Password strength
    if (formData.password && formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    // Phone number validation
    if (formData.phoneNumber && !/^[\d\s+-]+$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Invalid phone number format";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError("");
    setIsSubmitting(true);

    if (!validateForm()) {
      setIsSubmitting(false);
      return;
    }

    try {
      const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";
      
      const response = await axios.post(
        `${API_BASE_URL}/api/auth/signup`,
        {
          ...formData,
          dateOfBirth: `${formData.birthYear}-${formData.birthMonth}-${formData.birthDay}`
        },
        {
          headers: {
            'Content-Type': 'application/json'
          },
          withCredentials: true
        }
      );

      if (response.data.success) {
        alert("Registration successful! Please check your email to verify your account.");
        navigate('/login');
      } else {
        setSubmitError(response.data.message || "Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Registration error:", error);
      
      if (error.response) {
        if (error.response.status === 409) {
          setErrors(prev => ({ ...prev, email: "Email already in use" }));
        }
        setSubmitError(error.response.data.message || "Registration failed. Please try again.");
      } else if (error.request) {
        setSubmitError("Network error. Please check your connection and try again.");
      } else {
        setSubmitError("An unexpected error occurred. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bgImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px',
      backgroundAttachment: 'fixed'
    }}
    className=""
    >
      <form 
        onSubmit={handleSubmit} 
        className="p-8 bg-neutral-800 w-full max-w-lg border rounded-lg shadow-md mt-30"
        style={{ backdropFilter: 'blur(5px)' }}
      >
        <h2 className="text-2xl font-bold pb-6 text-[#DFB83B] text-center">Sign Up</h2>
        
        {submitError && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
            {submitError}
          </div>
        )}

        <p className="mb-6 text-sm text-gray-300 text-center">
          Enjoy a more personalized shopping experience with a Rigz 2 Riche$ account.
        </p>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <select 
              name="title" 
              value={formData.title} 
              onChange={handleChange}
              className={`w-full p-3 rounded border ${errors.title ? 'border-red-500' : 'border-gray-600'} bg-gray-700 text-white`}
              aria-invalid={!!errors.title}
              aria-describedby="title-error"
            >
              <option value="">Title*</option>
              {titles.map((title) => (
                <option key={title} value={title}>{title}</option>
              ))}
            </select>
            {errors.title && (
              <p id="title-error" className="text-red-500 text-xs mt-1">{errors.title}</p>
            )}
          </div>

          <div>
            <input
              type="text"
              name="firstName"
              placeholder="First name*"
              value={formData.firstName}
              onChange={handleChange}
              className={`w-full p-3 rounded border ${errors.firstName ? 'border-red-500' : 'border-gray-600'} bg-gray-700 text-white`}
              aria-invalid={!!errors.firstName}
              aria-describedby="firstName-error"
            />
            {errors.firstName && (
              <p id="firstName-error" className="text-red-500 text-xs mt-1">{errors.firstName}</p>
            )}
          </div>
        </div>

        {/* Last Name Field */}
        <div className="mb-4">
          <input
            type="text"
            name="lastName"
            placeholder="Last name*"
            value={formData.lastName}
            onChange={handleChange}
            className={`w-full p-3 rounded border ${errors.lastName ? 'border-red-500' : 'border-gray-600'} bg-gray-700 text-white`}
            aria-invalid={!!errors.lastName}
            aria-describedby="lastName-error"
          />
          {errors.lastName && (
            <p id="lastName-error" className="text-red-500 text-xs mt-1">{errors.lastName}</p>
          )}
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <input
            type="email"
            name="email"
            placeholder="Email*"
            value={formData.email}
            onChange={handleChange}
            className={`w-full p-3 rounded border ${errors.email ? 'border-red-500' : 'border-gray-600'} bg-gray-700 text-white`}
            aria-invalid={!!errors.email}
            aria-describedby="email-error"
          />
          {errors.email && (
            <p id="email-error" className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>

        {/* Confirm Email Field */}
        <div className="mb-4">
          <input
            type="email"
            name="confirmEmail"
            placeholder="Confirm email*"
            value={formData.confirmEmail}
            onChange={handleChange}
            className={`w-full p-3 rounded border ${errors.confirmEmail ? 'border-red-500' : 'border-gray-600'} bg-gray-700 text-white`}
            aria-invalid={!!errors.confirmEmail}
            aria-describedby="confirmEmail-error"
          />
          {errors.confirmEmail && (
            <p id="confirmEmail-error" className="text-red-500 text-xs mt-1">{errors.confirmEmail}</p>
          )}
        </div>

        {/* Country Field */}
        <div className="mb-4">
          <select 
            name="country" 
            value={formData.country} 
            onChange={handleChange}
            className="w-full p-3 rounded border border-gray-600 bg-gray-700 text-white"
          >
            {countries.map((country) => (
              <option key={country} value={country}>{country}</option>
            ))}
          </select>
        </div>

        {/* Date of Birth Fields */}
        <div className="mb-4">
          <label className="block text-sm mb-2 text-gray-300">Date of birth*</label>
          <div className="grid grid-cols-3 gap-3">
            <select
              name="birthDay"
              value={formData.birthDay}
              onChange={handleChange}
              className={`p-3 rounded border ${errors.dob ? 'border-red-500' : 'border-gray-600'} bg-gray-700 text-white`}
              aria-invalid={!!errors.dob}
            >
              <option value="">Day</option>
              {days.map((day) => <option key={day} value={day}>{day}</option>)}
            </select>

            <select
              name="birthMonth"
              value={formData.birthMonth}
              onChange={handleChange}
              className={`p-3 rounded border ${errors.dob ? 'border-red-500' : 'border-gray-600'} bg-gray-700 text-white`}
              aria-invalid={!!errors.dob}
            >
              <option value="">Month</option>
              {months.map((month, index) => (
                <option key={month} value={index + 1}>{month}</option>
              ))}
            </select>

            <select
              name="birthYear"
              value={formData.birthYear}
              onChange={handleChange}
              className={`p-3 rounded border ${errors.dob ? 'border-red-500' : 'border-gray-600'} bg-gray-700 text-white`}
              aria-invalid={!!errors.dob}
            >
              <option value="">Year</option>
              {years.map((year) => <option key={year} value={year}>{year}</option>)}
            </select>
          </div>
          {errors.dob && (
            <p className="text-red-500 text-xs mt-1">{errors.dob}</p>
          )}
        </div>

        {/* Password Field */}
        <div className="mb-4">
          <input
            type="password"
            name="password"
            placeholder="Password* (min 8 characters)"
            value={formData.password}
            onChange={handleChange}
            className={`w-full p-3 rounded border ${errors.password ? 'border-red-500' : 'border-gray-600'} bg-gray-700 text-white`}
            aria-invalid={!!errors.password}
            aria-describedby="password-error"
          />
          {errors.password && (
            <p id="password-error" className="text-red-500 text-xs mt-1">{errors.password}</p>
          )}
        </div>

        {/* Phone Number Field */}
        <div className="mb-6">
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Phone Number*"
            value={formData.phoneNumber}
            onChange={handleChange}
            className={`w-full p-3 rounded border ${errors.phoneNumber ? 'border-red-500' : 'border-gray-600'} bg-gray-700 text-white`}
            aria-invalid={!!errors.phoneNumber}
            aria-describedby="phoneNumber-error"
          />
          {errors.phoneNumber && (
            <p id="phoneNumber-error" className="text-red-500 text-xs mt-1">{errors.phoneNumber}</p>
          )}
        </div>

        {/* Checkbox Fields */}
        <div className="mb-6 space-y-4">
          <div className="flex items-start">
            <div className="flex items-center h-5 mt-1">
              <input
                id="privacyPolicy"
                name="acceptPrivacyPolicy"
                type="checkbox"
                checked={formData.acceptPrivacyPolicy}
                onChange={handleChange}
                className="w-4 h-4 border border-gray-600 rounded bg-gray-700 focus:ring-[#DFB83B]"
                aria-invalid={!!errors.acceptPrivacyPolicy}
              />
            </div>
            <label htmlFor="privacyPolicy" className="ml-2 text-sm text-gray-300">
              I have read and understood the Privacy Policy regarding the processing of my personal information by Rigz 2 Riche$
            </label>
          </div>
          {errors.acceptPrivacyPolicy && (
            <p className="text-red-500 text-xs mt-1 ml-6">{errors.acceptPrivacyPolicy}</p>
          )}

          <div className="flex items-start">
            <div className="flex items-center h-5 mt-1">
              <input
                id="marketing"
                name="acceptMarketing"
                type="checkbox"
                checked={formData.acceptMarketing}
                onChange={handleChange}
                className="w-4 h-4 border border-gray-600 rounded bg-gray-700 focus:ring-[#DFB83B]"
              />
            </div>
            <label htmlFor="marketing" className="ml-2 text-sm text-gray-300">
              I agree to receive marketing communications from Rigz 2 Riche$
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full bg-[#DFB83B] hover:bg-[#C9A227] text-white font-medium py-3 px-4 rounded transition-colors ${
            isSubmitting ? 'opacity-70 cursor-not-allowed' : 'cursor-pointer'
          }`}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing...
            </span>
          ) : (
            'Sign Up'
          )}
        </button>
      </form>
    </div>
  );
};

export default Signup;