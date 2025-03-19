import { Link } from "react-router-dom";

const SignIn = () => {
    return (
      <div className="bg-neutral-600 px-10 py-4 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Sign up</h2>
        <p className="text-[#DFB83B] mb-4">
          Enjoy a more personalized shopping experience with a Jimmy Choo account
        </p>
  
        <ul className="text-[#DFB83B] mb-6">
          <li style={{listStyle:'disc'}}> Manage wishlist</li>
          <li style={{listStyle:'disc'}}> Follow orders & returns</li>
          <li style={{listStyle:'disc'}}> Exclusive early access to collections and events</li>
          <li style={{listStyle:'disc'}}> Faster Checkout</li>
        </ul>
  
        <div className="w-full flex justify-center bg-[#DFB83B] px-[30px] text-white py-3  font-bold">
        <Link to='/signup' className="">
          CREATE AN ACCOUNT
        </Link>
        </div>
      </div>
    );
  };
  
  export default SignIn;
  