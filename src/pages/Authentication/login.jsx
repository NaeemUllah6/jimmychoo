const SignIn = () => {
    return (
      <div className="bg-white flex flex-col justify-between px-10 py-5 h-full rounded-lg shadow-md w-full max-w-md">
       <div>
       <h2 className="text-2xl font-bold mb-4">Sign in</h2>
  
  <input type="email" placeholder="Email" className="w-full p-2 border border-gray-300 rounded mb-3" />
  <input type="password" placeholder="Password" className="w-full p-2 border border-gray-300 rounded mb-3" />

  <a href="#" className="text-sm text-gray-600 underline my-4 flex justify-end">
    Forgot Your Password?
  </a>
       </div>
  
       <div>
       <button className="w-full bg-black text-white py-3  font-bold">
          SIGN IN
        </button>
       </div>
      </div>
    );
  };
  
  export default SignIn;
  