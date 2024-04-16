import React from 'react';
import { FaFilePdf } from 'react-icons/fa';
import Covid_Safety_Form from '../assets/forms/Covid_Safety_Plan.pdf';
import General_Principles_Form from '../assets/forms/General_Principles.pdf';
import Medical_Waiver_Form from '../assets/forms/Medical_Waiver.pdf';
import Parents_Pledge_Form from '../assets/forms/Parents_Pledge.pdf';

const Forms = () => {
    return (
        <section id="forms" className="w-full flex flex-col justify-center items-center gap-10 max-container">
            <div className="text-center">
                <p className="text-xl font-montserrat text-coral-red">Forms</p>
                <h2 className="mt-4 font-palanquin text-5xl max-sm:text-4xl font-bold">For Parents</h2>
                <p className="mt-4">
                    Please read over each form below. They must be printed, signed, and returned to your team's Head Coach or League
                    Administrator. Thank you.
                </p>
            </div>
            <div className="grid xl:grid-cols-3 grid-cols-1 gap-12 xl:gap-20 w-full">
                <div className="bg-white shadow-lg rounded-lg p-8">
                    <h3 className="text-3xl font-bold mb-6">General Forms</h3>
                    <ul className="space-y-6">
                        <li>
                            <a
                                href={General_Principles_Form}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center text-coral-red hover:text-coral-red-dark"
                            >
                                <FaFilePdf className="mr-2" />
                                General Principals for Parents
                            </a>
                        </li>
                        <li>
                            <a
                                href={Parents_Pledge_Form}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center text-coral-red hover:text-coral-red-dark"
                            >
                                <FaFilePdf className="mr-2" />
                                Parent Pledge
                            </a>
                        </li>
                        <li>
                            <a
                                href={Medical_Waiver_Form}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center text-coral-red hover:text-coral-red-dark"
                            >
                                <FaFilePdf className="mr-2" />
                                Medical Waiver
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="bg-white shadow-lg rounded-lg p-8">
                    <h3 className="text-3xl font-bold mb-6">COVID-19 Safety Plan</h3>
                    <p className="text-slate-gray mb-6">Please download and fill out the COVID-19 Safety Plan form.</p>
                    <a
                        href={Covid_Safety_Form}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-coral-red hover:text-coral-red-dark"
                    >
                        <FaFilePdf className="mr-2" />
                        Download COVID-19 Safety Plan
                    </a>
                </div>
                <div className="bg-white shadow-lg rounded-lg p-8">
                    <h3 className="text-3xl font-bold mb-6">Age Requirements</h3>
                    <p className="text-slate-gray mb-6">Please follow the guidelines below for your child.</p>
                    <ul className="space-y-6">
                        <li>Age 5-7: Instructional Division</li>
                        <li>Age 8-10: Junior Division</li>
                        <li>Age 11-13: Senior Division</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Forms;
