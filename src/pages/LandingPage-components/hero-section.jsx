import sampleVideo from '../../assets/vid2.mp4';
import Mobile from '../../assets/mobileVideo.mp4';

const Herosection = () => {
  return (
    <div className="relative w-full h-screen">
      <video 
        className="hidden md:block transition-transform duration-300 hover:scale-10 w-full h-full object-cover" 
        autoPlay 
        loop 
        muted
      >
        <source src={sampleVideo} type="video/mp4" />
      </video>

 
      <video 
        className="block md:hidden transition-transform duration-300 hover:scale-10 w-full h-full object-cover" 
        autoPlay 
        loop 
        muted
      >
        <source src={Mobile} type="video/mp4" />
      </video>
     
      <div className="absolute inset-0 bg-black/20"></div>     
    </div>
  );
};

export default Herosection;

