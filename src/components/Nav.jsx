import { org_logo } from '../assets/images';
import { FaBars, FaTimes } from 'react-icons/fa';
import { navLinks } from '../constants';
import { useState } from 'react';

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleLinkClick = () => {
        setIsOpen(false);
    };
    return (
        <header className='padding-x py-8 absolute z-10 w-full bg-black'>
            <nav className='flex justify-between items-center max-container'>
                <a href="/">
                    <img src={org_logo} alt="Logo" width={50} height={50} />
                </a>
                {/* // only visible on large screens */}
                <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
                    {navLinks.map((item) => (
                        <li key={item.label}>
                            <a
                                href={item.href}
                                className='font-montserrat leading-normal text-lg text-white transition duration-300 hover:text-coral-red'
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
                {/* // only visible on small screens */}
                <div className='max-lg:block hidden'>
                    <button onClick={toggleMenu}>
                        {isOpen ? (
                            <FaTimes className='text-coral-red' size={25} />
                        ) : (
                            <FaBars className='text-coral-red' size={25} />
                        )}
                    </button>
                </div>
            </nav>
            {/* Mobile menu */}
            {isOpen && (
                <div className='max-lg:block hidden fixed top-0 left-0 w-full rounded-b-[70px] bg-[#f1f5f8] z-50'>
                    <div className='padding-x py-8'>
                        <div className='flex justify-between items-center'>
                            <a href="/">
                                <img src={org_logo} alt="Logo" width={50} height={50} />
                            </a>
                            <button onClick={toggleMenu}>
                                <FaTimes className='text-coral-red' size={25} />
                            </button>
                        </div>
                        <ul className='mt-8 flex flex-col gap-6 items-end'>
                            {navLinks.map((item) => (
                                <li key={item.label}>
                                    <a
                                        href={item.href}
                                        className='font-montserrat leading-normal text-lg text-coral-red transition duration-300 hover:bg-coral-red hover:text-white px-4 py-2 rounded-md'
                                        onClick={handleLinkClick}
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Nav;