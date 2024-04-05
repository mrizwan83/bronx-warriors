// import React, { useRef, useState } from 'react';
// import emailjs from '@emailjs/browser';

// const Contact = () => {

//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         message: '',
//     });

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         emailjs
//             .sendForm(
//                 'YOUR_SERVICE_ID',
//                 'YOUR_TEMPLATE_ID',
//                 e.target,
//                 'YOUR_USER_ID'
//             )
//             .then(
//                 (result) => {
//                     console.log(result.text);
//                     // Reset form fields after successful submission
//                     setFormData({ name: '', email: '', message: '' });
//                 },
//                 (error) => {
//                     console.log(error.text);
//                 }
//             );
//     };


//     const form = useRef();

//     const sendEmail = (e) => {
//         e.preventDefault();

//         emailjs
//             .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
//                 publicKey: 'YOUR_PUBLIC_KEY',
//             })
//             .then(
//                 () => {
//                     console.log('SUCCESS!');
//                 },
//                 (error) => {
//                     console.log('FAILED...', error.text);
//                 },
//             );
//     };
//     return (
//         <section id="forms" className="w-full flex flex-col justify-center items-center gap-10 max-container">
//             <div className="text-center">
//                 <p className="text-xl font-montserrat text-coral-red">Forms</p>
//                 <h2 className="mt-4 font-palanquin text-5xl max-sm:text-4xl font-bold">For Parents</h2>
//                 <p className="mt-4">
//                     Please read over each form below. They must be printed, signed, and returned to your team's Head Coach or League Administrator. Thank you.
//                 </p>
//             </div>
//             <div className="grid xl:grid-cols-2 grid-cols-1 gap-12 xl:gap-20 w-full">
//                 <div className="bg-white shadow-lg rounded-lg p-8">
//                     <h3 className="text-3xl font-bold mb-6">General Forms</h3>
//                     <ul className="space-y-6">
//                         <li>
//                             <a href="/path/to/general-principles.pdf" target="_blank" rel="noopener noreferrer">
//                                 General Principals for Parents
//                             </a>
//                         </li>
//                         <li>
//                             <a href="/path/to/parent-pledge.pdf" target="_blank" rel="noopener noreferrer">
//                                 Parent Pledge
//                             </a>
//                         </li>
//                         <li>
//                             <a href="/path/to/medical-waiver.pdf" target="_blank" rel="noopener noreferrer">
//                                 Medical Waiver
//                             </a>
//                         </li>
//                     </ul>
//                 </div>
//                 <div className="bg-white shadow-lg rounded-lg p-8">
//                     <h3 className="text-3xl font-bold mb-6">COVID-19 Safety Plan (2021)</h3>
//                     <p className="text-slate-gray mb-6">Please download and fill out the COVID-19 Safety Plan form.</p>
//                     <a href="/path/to/covid-safety-plan.pdf" target="_blank" rel="noopener noreferrer">
//                         Download COVID-19 Safety Plan
//                     </a>
//                 </div>
//                 <div className="bg-white shadow-lg rounded-lg p-8">
//                     <h3 className="text-3xl font-bold mb-6">Age Requirements for Flag Football</h3>
//                     <p className="text-slate-gray">Please follow the guidelines below for your child.</p>
//                     <ul className="space-y-6">
//                         <li>Age 5-7: Instructional Division</li>
//                         <li>Age 8-10: Junior Division</li>
//                         <li>Age 11-13: Senior Division</li>
//                     </ul>
//                 </div>
//             </div>
//             <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
//                 <h3 className="text-3xl font-bold mb-6">Contact Us</h3>
//                 <form onSubmit={handleSubmit}>
//                     <div className="mb-4">
//                         <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
//                             Name
//                         </label>
//                         <input
//                             type="text"
//                             id="name"
//                             name="name"
//                             value={formData.name}
//                             onChange={handleChange}
//                             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                             required
//                         />
//                     </div>
//                     <div className="mb-4">
//                         <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
//                             Email
//                         </label>
//                         <input
//                             type="email"
//                             id="email"
//                             name="email"
//                             value={formData.email}
//                             onChange={handleChange}
//                             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                             required
//                         />
//                     </div>
//                     <div className="mb-6">
//                         <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
//                             Message
//                         </label>
//                         <textarea
//                             id="message"
//                             name="message"
//                             value={formData.message}
//                             onChange={handleChange}
//                             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                             rows="4"
//                             required
//                         ></textarea>
//                     </div>
//                     <div className="flex justify-center">
//                         <button
//                             type="submit"
//                             className="bg-coral-red hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                         >
//                             Submit
//                         </button>
//                     </div>
//                 </form>
//             </div>
//         </section>
//     );
// };

// export default Contact;


// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';

// const Contact = () => {
//     const form = useRef();

//     const sendEmail = (e) => {
//         e.preventDefault();

//         emailjs
//             .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
//             .then(
//                 () => {
//                     console.log('SUCCESS!');
//                     // Reset form fields after successful submission
//                     e.target.reset();
//                 },
//                 (error) => {
//                     console.log('FAILED...', error.text);
//                 }
//             );
//     };

//     return (
//         <section id="forms" className="w-full flex flex-col justify-center items-center gap-10 max-container">
//             <div className="text-center">
//                 <p className="text-xl font-montserrat text-coral-red">Forms</p>
//                 <h2 className="mt-4 font-palanquin text-5xl max-sm:text-4xl font-bold">For Parents</h2>
//                 <p className="mt-4">
//                     Please read over each form below. They must be printed, signed, and returned to your team's Head Coach or League Administrator. Thank you.
//                 </p>
//             </div>
//             <div className="grid xl:grid-cols-2 grid-cols-1 gap-12 xl:gap-20 w-full">
//                 <div className="bg-white shadow-lg rounded-lg p-8">
//                     <h3 className="text-3xl font-bold mb-6">General Forms</h3>
//                     <ul className="space-y-6">
//                         <li>
//                             <a href="/path/to/general-principles.pdf" target="_blank" rel="noopener noreferrer">
//                                 General Principals for Parents
//                             </a>
//                         </li>
//                         <li>
//                             <a href="/path/to/parent-pledge.pdf" target="_blank" rel="noopener noreferrer">
//                                 Parent Pledge
//                             </a>
//                         </li>
//                         <li>
//                             <a href="/path/to/medical-waiver.pdf" target="_blank" rel="noopener noreferrer">
//                                 Medical Waiver
//                             </a>
//                         </li>
//                     </ul>
//                 </div>
//                 <div className="bg-white shadow-lg rounded-lg p-8">
//                     <h3 className="text-3xl font-bold mb-6">COVID-19 Safety Plan (2021)</h3>
//                     <p className="text-slate-gray mb-6">Please download and fill out the COVID-19 Safety Plan form.</p>
//                     <a href="/path/to/covid-safety-plan.pdf" target="_blank" rel="noopener noreferrer">
//                         Download COVID-19 Safety Plan
//                     </a>
//                 </div>
//                 <div className="bg-white shadow-lg rounded-lg p-8">
//                     <h3 className="text-3xl font-bold mb-6">Age Requirements for Flag Football</h3>
//                     <p className="text-slate-gray">Please follow the guidelines below for your child.</p>
//                     <ul className="space-y-6">
//                         <li>Age 5-7: Instructional Division</li>
//                         <li>Age 8-10: Junior Division</li>
//                         <li>Age 11-13: Senior Division</li>
//                     </ul>
//                 </div>
//             </div>
//             <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
//                 <h3 className="text-3xl font-bold mb-6">Contact Us</h3>
//                 <form ref={form} onSubmit={sendEmail}>
//                     <div className="mb-4">
//                         <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
//                             Name
//                         </label>
//                         <input
//                             type="text"
//                             id="name"
//                             name="name"
//                             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                             required
//                         />
//                     </div>
//                     <div className="mb-4">
//                         <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
//                             Email
//                         </label>
//                         <input
//                             type="email"
//                             id="email"
//                             name="email"
//                             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                             required
//                         />
//                     </div>
//                     <div className="mb-6">
//                         <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
//                             Message
//                         </label>
//                         <textarea
//                             id="message"
//                             name="message"
//                             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                             rows="4"
//                             required
//                         ></textarea>
//                     </div>
//                     <div className="flex justify-center">
//                         <button
//                             type="submit"
//                             className="bg-coral-red hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                         >
//                             Submit
//                         </button>
//                     </div>
//                 </form>
//             </div>
//         </section>
//     );
// };

// export default Contact;


import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaFilePdf } from 'react-icons/fa';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
            .then(
                () => {
                    console.log('SUCCESS!');
                    e.target.reset();
                },
                (error) => {
                    console.log('FAILED...', error.text);
                }
            );
    };

    return (
        <section id="contact" className="w-full flex flex-col justify-center items-center gap-10 max-container py-20">
            <div className="text-center">
                <p className="text-xl font-montserrat text-coral-red">Contact Us</p>
                <h2 className="mt-4 font-palanquin text-5xl max-sm:text-4xl font-bold">Get in Touch</h2>
                <p className="mt-4 max-w-md">
                    Have a question or need more information? Fill out the form below, and we'll get back to you as soon as possible.
                </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
                <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6">
                    <div>
                        <label htmlFor="name" className="block font-semibold text-gray-700 mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full bg-gray-100 border border-gray-300 rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-coral-red focus:border-transparent"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block font-semibold text-gray-700 mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full bg-gray-100 border border-gray-300 rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-coral-red focus:border-transparent"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block font-semibold text-gray-700 mb-2">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            className="w-full bg-gray-100 border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-coral-red focus:border-transparent"
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="bg-coral-red hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-coral-red focus:ring-opacity-50"
                    >
                        Submit
                    </button>
                </form>
            </div>
            <div className="grid xl:grid-cols-3 grid-cols-1 gap-12 xl:gap-20 w-full">
                <div className="bg-white shadow-lg rounded-lg p-8">
                    <h3 className="text-3xl font-bold mb-6">General Forms</h3>
                    <ul className="space-y-6">
                        <li>
                            <a
                                href="/path/to/general-principles.pdf"
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
                                href="/path/to/parent-pledge.pdf"
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
                                href="/path/to/medical-waiver.pdf"
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
                        href="/path/to/covid-safety-plan.pdf"
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
                    <p className="text-slate-gray">Please follow the guidelines below for your child.</p>
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

export default Contact;