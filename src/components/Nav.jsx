// import { org_logo } from '../assets/images'
// import { hamburger } from '../assets/icons';
// import { navLinks } from '../constants';
// const Nav = () => {
//     return (
//         // for better access use semantic tags
//         <header className='padding-x py-8 absolute z-10 w-full bg-slate-950'>
//             <nav className='flex justify-between items-center max-container'>
//                 <a href="/">
//                     <img src={org_logo} alt="Logo" width={50} height={50} />
//                 </a>
//                 {/* // only visible on large screens */}
//                 <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
//                     {navLinks.map((item) => (
//                         <li key={item.label}>
//                             <a href={item.href} className='font-montserrat leading-normal text-lg text-white transition duration-300'>{item.label}</a>
//                         </li>))}
//                 </ul>
//                 {/* // only visible on small screens */}
//                 <div className='max-lg:block hidden'>
//                     <img src={hamburger} alt='hamburger' width={25} height={25} />
//                 </div>
//             </nav>
//         </header>
//     )
// }

// export default Nav

import { org_logo } from '../assets/images';
import { FaBars, FaTimes } from 'react-icons/fa';
import { navLinks } from '../constants';
import { useState } from 'react';

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className='padding-x py-8 absolute z-10 w-full bg-slate-950'>
            <nav className='flex justify-between items-center max-container'>
                <a href="/">
                    <img src={org_logo} alt="Logo" width={50} height={50} />
                </a>
                {/* // only visible on large screens */}
                <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
                    {navLinks.map((item) => (
                        <li key={item.label}>
                            <a href={item.href} className='font-montserrat leading-normal text-lg text-white transition duration-300'>{item.label}</a>
                        </li>
                    ))}
                </ul>
                {/* // only visible on small screens */}
                <div className='max-lg:block hidden'>
                    <button onClick={toggleMenu}>
                        {isOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
                    </button>
                </div>
            </nav>
            {/* Mobile menu */}
            {isOpen && (
                <div className='max-lg:block hidden absolute top-0 left-0 w-full h-screen bg-slate-950'>
                    <div className='padding-x py-8'>
                        <div className='flex justify-between items-center'>
                            <a href="/">
                                <img src={org_logo} alt="Logo" width={50} height={50} />
                            </a>
                            <button onClick={toggleMenu}>
                                <FaTimes size={25} />
                            </button>
                        </div>
                        <ul className='mt-8 flex flex-col gap-6'>
                            {navLinks.map((item) => (
                                <li key={item.label}>
                                    <a href={item.href} className='font-montserrat leading-normal text-lg text-white transition duration-300'>{item.label}</a>
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