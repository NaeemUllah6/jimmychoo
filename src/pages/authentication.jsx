import SignUp from './Authentication/signin';
import bgImage from '../assets/BONBONBCKTEWHUT_000702_FRONT_vg443.webp';
import Login from './Authentication/login';

const Signin = () => {
  return (
    <div className="relative ">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-black opacity-50 z-10"
      ></div>

      <div
        className="relative"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '40vh',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="flex justify-center py-[300px] gap-3 relative z-20">
          <div>
            <Login />
          </div>
          <div>
            <SignUp />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
