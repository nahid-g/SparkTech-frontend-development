import Image from 'next/image';
import React from 'react';
import { FaTwitter, FaFacebookF, FaInstagram, FaGithub, FaGooglePlay, FaApple, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-[#065e97] text-white py-4 lg:py-10 px-3 lg:px-8 ">
      <div className="xl:mx-20 flex flex-col md:flex-row justify-between items-start gap-6 sm:gap-10">
        {/* Left Section */}
        <div className=" sm:w-1/2">
          <div className="flex items-center mb-2 lg:mb-4">
            <Image src="/logo3.png" alt="DAYF Booking Logo" className="lg:w-10 lg:h-10 w-8 h-8 mr-2" width={32} height={32} />
            <div>
              <div className="font-bold lg:text-lg">DAYF</div>
              <div className="text-xs lg:tracking-widest">BOOKING</div>
            </div>
          </div>
          <p className="text-xs lg:text-sm mb-2">
            [App Name] makes booking your next stay easy, affordable, and stress-free. With thousands of hotels worldwide, exclusive deals, and secure payment options, we{"'"}re here to help you find the perfect place to stay, every time.
          </p>
          <div className="flex space-x-4 my-2 lg:my-4">
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="GitHub"><FaGithub /></a>
          </div>
          <div className="flex items-center text-xs lg:text-sm mt-2">
            <FaMapMarkerAlt className="mr-2" />
            123 Travel St, Suite 100, City, Country
          </div>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-px bg-white/30 mx-8 min-h-[220px]"  />
        {/* Right Section */}
        <div className="w-full sm:w-1/2 flex flex-row gap-10 justify-between sm:justify-around">
        
        <div className="text-sm lg:text-base flex flex-col gap-1 sm:gap-2">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Hotels</a>
          <a href="#" className="hover:underline">Deals</a>
          <a href="#" className="hover:underline">About Us</a>
          <a href="#" className="hover:underline">Contact Us</a>
        </div>
        {/* <div className="w-px bg-white/30 mx-8 min-h-[220px]"  /> */}

        
        <div className=" flex flex-col gap-2 sm:gap-4">
          <div className="flex items-center text-xs lg:text-sm">
            <FaPhoneAlt className="mr-2" />
            +1 (555) 123-4567
          </div>
          <div className="flex items-center text-xs lg:text-sm">
            <FaEnvelope className="mr-2" />
            support@[yourappname].com
          </div>
          <div className="mt-4 lg:mt-8 flex flex-col lg:flex-row gap-2 sm:gap-4">
            <div className="text-sm lg:text-base font-semibold sm:mb-2">Download Our App</div>
            <div className="flex space-x-2 sm:space-x-4">
              <a href="#" aria-label="Google Play"><FaGooglePlay size={28} className="sm:w-6 sm:h-6 w-4 h-4" /></a>
              <a href="#" aria-label="Apple Store"><FaApple size={28} className="sm:w-6 sm:h-6 w-4 h-4" /></a>
            </div>
          </div>
      <div className="text-end text-xs text-white/80 mt-4">© 2023, All Rights Reserved</div>
        </div>
      </div>
      </div>
    </footer>
  );
}

export default Footer;