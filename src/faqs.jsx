import HeroBG from './assets/herobg.png'
const Faqs = () => {
  return (
    <div 
    style={{
        backgroundImage: `url(${HeroBG})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '80vh',
    }}
    className='flex items-center justify-center w-full'
    >
        <div className='flex items-center flex-col gap-5'>
    
            <p className='font-bold text-3xl text-white'>How can we help you?</p>
        
       <div className='w-full relative'>
       <input className='h-13 px-12 bg-white  w-full rounded lg:min-w-[600px]' type="text" placeholder='Search' />
       <i className='fa fa-search text-black absolute start-[25px] top-[19px] '></i>
       </div>
        </div>
    </div>
  )
}

export default Faqs