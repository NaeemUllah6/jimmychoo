import FooterLogo from '../assets/footerLogo.png'
import Facebook from '../assets/facebook.png'
import Instagram from '../assets/instagram.png'
import Twitter from '../assets/tiktok.png'
import { Link } from 'react-router-dom'
import NewsletterSignup from '../pages/LandingPage-components/signup'

const footerData = [
  {
    title: 'Our Store',
    links: [{ name: 'Store Locator', path: '/' }]
  },
  {
    title: 'Customer Services',
    links: [
      { name: 'Help Center', path: '/' },
      { name: 'Returns & Exchanges', path: '/' },
      { name: 'Shipping & Delivery', path: '/' },
      { name: 'Order Tracking', path: '/' },
      { name: 'Contact Us', path: '/' },
      { name: 'FAQs', path: '/faqs' }
    ]
  },
  {
    title: 'Our Company',
    links: [
      { name: 'About Us', path: '/' },
      { name: 'Careers', path: '/' },
      { name: 'Privacy Policy', path: '/' },
      { name: 'Terms & Conditions', path: '/' },
      { name: 'Affiliate Program', path: '/' },
      { name: 'Blog', path: '/' }
    ]
  }
];

const Footer = () => {
  return (
   <>
   <div>
   </div>
    <div className=" bg-[#2a2a2a">
     <div className='p-10 border-b-[0.1px] border-white'>
     <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-6 gap-5">
        
        <div className="cols-span-2 lg:col-span-3">
          <img width={80} height={80} src={FooterLogo} alt="Footer Logo" />
        </div>

        
        {footerData.map((section, index) => (
          <div key={index} className="col-span-1">
            <h2 className='font-bold text-[#DFB83B] text-sm'>{section.title}</h2>
            <div className='flex flex-col gap-2 mt-3'>
              {section.links.map((link, i) => (
                <div key={i}>
                  <Link className="font-medium text-xs text-[#DFB83B]" to={link.path}>
                    {link.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
     </div>
     
     <div className='px-10 py-6 border-b-[0.1px]  border-white'>
        <div className='flex items-center gap-8'>
       <Link to='/'> <img width={40} height={40} src={Facebook}  alt="" /></Link>
       <Link to='/'><img width={40} height={40} src={Instagram}  alt="" /></Link>
       <Link to='/'> <img width={40} height={40} src={Twitter}  alt="" /></Link>
        </div>
     </div>
     <div className='p-10'>
      <p className='text-[#DFB83B] font-medium text-xs'>Copyright @Jimmychoo</p>
     </div>
    </div>
   </>
  )
}

export default Footer;
