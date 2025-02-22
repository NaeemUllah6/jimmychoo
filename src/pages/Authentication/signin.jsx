const SignIn = () => {
    return (
      <div className="bg-white px-10 py-4 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Sign up</h2>
        <p className="text-gray-700 mb-4">
          Enjoy a more personalized shopping experience with a Jimmy Choo account
        </p>
  
        <ul className="text-gray-600 mb-6">
          <li style={{listStyle:'disc'}}> Manage wishlist</li>
          <li style={{listStyle:'disc'}}> Follow orders & returns</li>
          <li style={{listStyle:'disc'}}> Exclusive early access to collections and events</li>
          <li style={{listStyle:'disc'}}> Faster Checkout</li>
        </ul>
  
        <button className="w-full bg-black text-white py-3 rounded font-bold">
          CREATE AN ACCOUNT
        </button>
      </div>
    );
  };
  
  export default SignIn;
  