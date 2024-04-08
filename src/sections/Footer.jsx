import React from 'react';
import { org_logo } from '../assets/images'; // Ensure this is the correct path to your logo
import { FaInstagram, FaFacebook } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className=" text-white py-8">
            <div className="w-full  px-5 flex flex-col sm:flex-row md:justify-between items-center">
                <div className="w-full md:w-auto mb-6 md:mb-0 items-center flex flex-col gap-5">
                    <img src={org_logo} alt="Organization Logo" className="w-24 mb-2" />
                    <p className="font-montserrat text-sm ">
                        Empowering youth through sports.
                    </p>
                </div>
                <div className="w-full md:w-auto mb-6 md:mb-0 text-center gap-2">
                    <h5 className="font-bold mb-2">Quick Links</h5>
                    <ul className="list-none font-montserrat text-sm">
                        <li><a href="/about" className="">About Us</a></li>
                        <li><a href="/services" className="">Register</a></li>
                        <li><a href="/contact" className="">Contact Us </a></li>
                    </ul>
                </div>
                <div className="w-full md:w-auto mb-6 md:mb-0 text-center gap-2">
                    <h5 className="font-bold mb-2">Contact</h5>
                    <div className="font-montserrat text-sm ">
                        <div>Email: AnthonyBruno@gmail.com</div>
                        <div>Phone: (917)-715-6395</div>
                    </div>
                </div>
                <div className="w-full md:w-auto justify-center flex gap-2 flex-col items-center">
                    <h5 className="font-bold mb-2">Follow Us</h5>
                    <div className="flex items-center gap-4">
                        <a href="https://www.instagram.com/bronx_warriors_football/" target="_blank" rel="noopener noreferrer" className="text-white ">
                            <FaInstagram className="w-6 h-6" />
                        </a>
                        <a href="https://www.facebook.com/TheBronxWarriorsFootball" target="_blank" rel="noopener noreferrer" className="text-white ">
                            <FaFacebook className="w-6 h-6" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="text-center mt-8 font-montserrat text-sm">
                © {new Date().getFullYear()} Warriors Football League Inc. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
