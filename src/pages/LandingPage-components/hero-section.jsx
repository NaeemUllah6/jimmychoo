import sampleVideo from '../../assets/vid2.mp4';

const Herosection = () => {
  return (
    <div className='!h-screen'>
      <video className='w-full h-full object-cover' autoPlay loop muted>
        <source src={sampleVideo} type="video/mp4" />
      </video>
    </div>
  );
}

export default Herosection;
