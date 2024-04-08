import React from 'react';
import { org_logo } from '../assets/images'; 
import { FaInstagram, FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="text-white">
            <div className="w-full px-5 flex flex-col sm:flex-row md:justify-around items-center">
                <div className="w-full md:w-auto mb-6 md:mb-0 items-center flex flex-col gap-5">
                    <img src={org_logo} alt="Organization Logo" className="w-24 mb-2" />
                    <p className="font-montserrat text-sm">
                        Empowering youth through sports.
                    </p>
                </div>
                <div className="w-full md:w-auto mb-6 md:mb-0 text-center gap-2">
                    <h5 className="font-bold mb-2">Quick Links</h5>
                    <ul className="list-none font-montserrat text-sm grid grid-cols-2 gap-2">
                        <li><a href="#" className="">Home</a></li>
                        <li><a href="#about" className="">About</a></li>
                        <li><a href="#forms" className="">Forms</a></li>
                        <li><a href="#gallery" className="">Gallery</a></li>
                        <li><a href="#calendar" className="">Calendar</a></li>
                        <li><a href="#board" className="">Board</a></li>
                        <li><a href="#contact" className="">Contact</a></li>
                        <li><a href="#location" className="">Location</a></li>
                    </ul>
                </div>
                <div className="w-full md:w-auto mb-6 md:mb-0 text-center gap-2">
                    <h5 className="font-bold mb-2">Developer</h5>
                    <div className="flex items-center justify-center gap-4">
                        <a href="https://www.linkedin.com/in/mohammad-h-rizwan/" target="_blank" rel="noopener noreferrer" className="text-white">
                            <FaLinkedin className="w-6 h-6" />
                        </a>
                        <a href="https://github.com/mrizwan83" target="_blank" rel="noopener noreferrer" className="text-white">
                            <FaGithub className="w-6 h-6" />
                        </a>
                    </div>
                </div>
                <div className="w-full md:w-auto justify-center flex gap-2 flex-col items-center">
                    <h5 className="font-bold mb-2">Follow Warriors</h5>
                    <div className="flex items-center gap-4">
                        <a href="https://www.instagram.com/bronx_warriors_football/" target="_blank" rel="noopener noreferrer" className="text-white">
                            <FaInstagram className="w-6 h-6" />
                        </a>
                        <a href="https://www.facebook.com/TheBronxWarriorsFootball" target="_blank" rel="noopener noreferrer" className="text-white">
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