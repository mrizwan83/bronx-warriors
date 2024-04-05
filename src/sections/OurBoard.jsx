import React from 'react';
import { FaInstagram, FaFacebook, FaPhone } from 'react-icons/fa';

const OurBoard = () => {
    const boardMembers = [
        {
            name: 'Jim Pellicone',
            position: 'President and Treasurer',
            phone: '914-403-9891',
        },
        {
            name: 'Anthony Bruno',
            position: 'Administrator',
            phone: '917-715-6395',
        },
        {
            name: 'Jose Garcia',
            position: 'Vice President',
            phone: '917-929-2730',
        },
        {
            name: 'Eric Watkins',
            position: 'Administrator',
            phone: '914-318-4865',
        },
    ];

    return (
        <div className='xl:px-20'>
            <div className="text-center">
                <p className="text-xl font-montserrat text-coral-red">Our Board</p>
                <h2 className="m-4 font-palanquin text-5xl max-sm:text-4xl font-bold">Warriors Football League Inc.</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {boardMembers.map((member, index) => (
                    <div key={index} className="bg-white shadow-lg rounded-lg p-6">
                        <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                        <p className="text-lg font-semibold text-coral-red mb-4">{member.position}</p>
                        {member.phone && (
                            <div className="flex items-center">
                                <FaPhone className="text-slate-gray mr-2" />
                                <p className="text-slate-gray">{member.phone}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <div className="text-center mt-12">
                <p className="text-xl font-montserrat m-4 p-1">Forever in our hearts Joe DeSimone</p>
                <p className="text-xl font-montserrat m-4 p-1">Forever in our hearts Jay Demers</p>
                <div className="flex justify-center gap-6 p-4">
                    <a href="https://www.instagram.com/bronx_warriors_football/" target="_blank" rel="noopener noreferrer" className="text-coral-red hover:text-coral-red-dark">
                        <FaInstagram size={50} />
                    </a>
                    <a href="https://www.facebook.com/TheBronxWarriorsFootball/" target="_blank" rel="noopener noreferrer" className="text-coral-red hover:text-coral-red-dark">
                        <FaFacebook size={50} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default OurBoard;