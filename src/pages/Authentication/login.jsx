import { useState } from "react";
import axios from "axios";
import Loading from "../../components/loading";
import { useNavigate } from "react-router-dom";
import Modal from "../../components/modal";

const SignIn = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.post("/login", formData);
      localStorage.setItem("token", response.data.token);
      setLoading(false);
      navigate("/");
      setFormData({ email: "", password: "" });
    } catch (err) {
      setLoading(false);
      setError(err.response?.data?.message || "Invalid credentials");
      setFormData({ email: "", password: "" }); 
    }
  };

  return (
    <>
      {loading && <Loading />}
      
      {error && <Modal onClose={() => setError("")} />}

      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <div className="bg-neutral-600 flex flex-col justify-between px-10 py-5 h-full rounded-lg shadow-md">
          <div>
            <h2 className="text-2xl font-bold mb-4">Sign in</h2>

            <input
              value={formData.email}
              onChange={handleChange}
              name="email"
              type="email"
              placeholder="Email"
              className="w-full p-2 border border-[#DFB83B] focus:outline-0 rounded mb-3"
              required
            />
            <input
              onChange={handleChange}
              name="password"
              value={formData.password}
              type="password"
              placeholder="Password"
              className="w-full p-2 border border-[#DFB83B] focus:outline-0 rounded mb-3"
              required
            />

            <a href="#" className="text-sm text-[#DFB83B] underline my-4 flex justify-end">
              Forgot Your Password?
            </a>
          </div>

          <div>
            <button type="submit" className="w-full bg-[#DFB83B] text-white py-3 font-bold">
              SIGN IN
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default SignIn;
