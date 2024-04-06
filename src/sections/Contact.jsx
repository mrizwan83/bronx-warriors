import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

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
        <section
            id="contact"
            className="w-full flex lg:flex-row flex-col justify-center items-center gap-10 max-container py-20"
        >
            <div className="lg:w-1/2 w-full sm:px-6 lg:px-8">
                <div className="bg-white shadow-lg rounded-lg p-8 mt-8">
                    <div className="text-center lg:text-left">
                        <p className="text-xl text-center font-montserrat text-coral-red">Contact Us</p>
                        <h2 className="mt-4 text-center font-palanquin text-5xl max-sm:text-4xl font-bold">Get in Touch</h2>
                        <div className='flex justify-center'>
                            <p className="mt-4 mb-4 max-w-md text-center">
                                Have a question or need more information? Fill out the form below, and we'll get back to you as soon as possible.
                            </p>
                        </div>
                    </div>
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
            </div>

            <div className="lg:w-1/2 w-full  sm:px-6 lg:px-8">
                <div className="bg-white shadow-lg rounded-lg sm:p-8">
                    <h3 className="text-3xl text-center font-bold pt-8">Our Location</h3>
                    <p className="mb-6 text-center text-slate-gray">
                        Come visit us at our location in the Bronx and experience the Warriors in action!
                    </p>
                    <div className='text-5xl font-bold text-center mb-10'>
                        <a
                            href={`https://www.google.com/maps/dir/?api=1&destination=${40.86701504484206},${-73.81013174794911}`}
                            target='_blank'
                            rel='noopener noreferrer'
                        >

                            <button className='bg-coral-red hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-coral-red focus:ring-opacity-50'>Get directions</button>
                        </a>
                    </div>
                    <div className="w-full h-96 lg:h-[500px]">
                        <MapContainer
                            center={[40.86701504484206, -73.81013174794911]}// Bronx Warriors location coordinates
                            zoom={13}
                            scrollWheelZoom={false}
                            className="h-full w-full rounded-lg"
                        >
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={[40.86701504484206, -73.81013174794911]}>
                                <Popup>
                                    Bronx Warriors <br /> 123 Main Street, Bronx, NY
                                </Popup>
                            </Marker>
                        </MapContainer>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;


