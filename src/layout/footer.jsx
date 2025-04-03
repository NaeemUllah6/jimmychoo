import FooterLogo from '../assets/footerLogo.png'
import Facebook from '../assets/facebook.png'
import Instagram from '../assets/x.png'
import Twitter from '../assets/pinterest.png'
import insta from '../assets/insta.png'
import { Link } from 'react-router-dom'
// import NewsletterSignup from '../pages/LandingPage-components/signup'
import CountrySelection from './endOffcanvas'

const footerData = [

  {
    title: 'Customer Services',
    // icon : Customer,
    links: [
      { name: 'Help Center', path: '/' },
      { name: 'Returns & Exchanges', path: '/' },
      { name: 'Shipping & Delivery', path: '/' },
      { name: 'Order Tracking', path: '/login' },
      { name: 'Contact Us', path: '/contactus' },
      { name: 'Size Guide', path: '/sizeGuide' }
    ]
  },
  {
    title: 'Our Company',
    // Company : Company,
    links: [
      { name: 'About Us', path: '/aboutus' },
      { name: 'Careers', path: '/' },
      { name: 'Privacy Policy', path: '/PrivacyPolicy' },
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
      <div className=" bg-[#212121]">
        <div className='p-10 border-b-[0.1px] border-white'>
          <div className='hidden'>
            <CountrySelection />
          </div>
          <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-7 gap-5 justify-between">

            <div className="cols-span-2 lg:col-span-3">
              <img width={80} height={80} src={FooterLogo} alt="Footer Logo" />
            </div>


            {footerData.map((section, index) => (
              <div key={index} className="col-span-2">
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
            <a href='https://facebook.com' target='_blank' rel='noopener noreferrer' className="mr-3">
              <img width={30} height={30} src={Facebook} alt="Facebook" />
            </a>
            <a href='https://instagram.com' target='_blank' rel='noopener noreferrer' className="mr-3">
              <img width={30} height={30} src={Instagram} alt="Instagram" />
            </a>
            <a href='https://twitter.com' target='_blank' rel='noopener noreferrer'>
              <img width={30} height={30} src={Twitter} alt="Twitter" />
            </a>
            <a href='https://pinterest.com' target='_blank' rel='noopener noreferrer'>
              <img width={30} height={30} src={insta} alt="Twitter" />
            </a>
          </div>
        </div>
        <div className='p-10'>
          <p className='text-[#DFB83B] font-medium text-xs'>Copyright @Rigz2Riche$</p>
        </div>
      </div>
    </>
  )
}

export default Footer;
