import Marquee from "react-fast-marquee";
import { FaFacebook } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className=' bg-slate-50 divide-y mt-20 p-2  text-gray-800 relative bottom-0 '>
      
        <section className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 lg:ml-56 ml-32   " >
          <div>
            <h1 className=" text-2xl font-bold " > Office Address </h1>
               <p className=" font-semibold" > Level-5, 43, Mazer Rod, Mirpur 1, Dhaka 1212 </p>
              <a  className=" font-semibold"  href="https://jahid-d102b.web.app"> Support: JB Booing CEO </a> 
              <p  className=" font-semibold"  > Helpline: 01763943446 </p>
              <p  className=" font-semibold text-green-600"  > <Marquee pauseOnHover= {true} > Available : Sat - Thu, 10:00 AM to 7:00 PM </Marquee> </p>
             
          </div>
         
          <div>
            <h1 className=" text-2xl font-bold " > Useful Links </h1>
            <p className=" font-semibold hover:underline" >Blog</p>
            <p className=" font-semibold hover:underline" >Success</p>
            <Link
        to='/about'
        className='hover:underline font-semibold'
      >
        About Us
      </Link>
            <p className=" font-semibold hover:underline" >Refund policy</p>
            <p className=" font-semibold hover:underline" > Privacy & App Privacy Policy </p>
          </div>
         
          <div>
            <h1 className=" text-2xl font-bold " > Follow Us </h1>
                  <div className=" mt-2 flex gap-3" >
                  <a className=" text-3xl" href="https://www.facebook.com/mdjahid.hossain.16547"> <FaFacebook/> </a>
                   <a className=" text-3xl" href="https://github.com/jahid45780"> <FaGithub/> </a>
                   <a className=" text-3xl hover:cursor-zoom-in"  href="https://www.linkedin.com/in/md-jahid-91589a295"> <FaLinkedinIn/> </a>
                  </div>
          </div>

        </section>

        <div className="mt-6 divider divide-rose-500 divide-x-4"></div>

        <p className=" text-center text-lg font-semibold" > © JB Booking 2024 </p>
          
    </footer>
  )
}

export default Footer
