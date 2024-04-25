import React, { useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import LocationMap from './LocationMap';

const Contact = () => {
    const form = useRef();
    const recaptchaRef = useRef();
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [messageError, setMessageError] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [recaptchaError, setRecaptchaError] = useState('');
    const [isRecaptchaCompleted, setIsRecaptchaCompleted] = useState(false);

    const validateForm = () => {
        let isValid = true;

        if (!form.current.name.value.trim()) {
            setNameError('Name is required');
            isValid = false;
        } else if (form.current.name.value.length < 3) {
            setNameError('Name must be at least 3 characters');
            isValid = false;
        } else {
            setNameError('');
        }

        if (!form.current.email.value.trim()) {
            setEmailError('Email is required');
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(form.current.email.value)) {
            setEmailError('Invalid email format');
            isValid = false;
        } else {
            setEmailError('');
        }

        if (!form.current.message.value.trim()) {
            setMessageError('Message is required');
            isValid = false;
        } else if (form.current.message.value.length < 10) {
            setMessageError('Message must be at least 10 characters');
            isValid = false;
        } else {
            setMessageError('');
        }

        setIsFormValid(isValid);
    };

    const actingApi = async () => {
        // wait 1 second 
        await new Promise((resolve) => setTimeout(resolve, 100));
    }
    const sendEmail = (e) => {
        e.preventDefault();

        if (isFormValid && isRecaptchaCompleted) {
            actingApi()
                .then(
                    () => {
                        console.log('SUCCESS!');
                        e.target.reset();
                        setIsSubmitted(true);
                        recaptchaRef.current.reset();
                        setIsRecaptchaCompleted(false);
                    },
                    (error) => {
                        console.log('FAILED...', error.text);
                    }
                );
        } else if (!isRecaptchaCompleted) {
            setRecaptchaError('Please complete the reCAPTCHA');
        }
    };


    return (
        <section
            id="contact"
            className="w-full flex lg:flex-row flex-col justify-center items-center gap-10 max-container"
        >
            <div className="lg:w-1/2 w-full sm:px-6 lg:px-8 h-full flex-1">
                <div className="bg-white shadow-lg rounded-lg p-8 h-full">
                    <div className="text-center lg:text-left">
                        <p className="text-2xl  text-center font-montserrat text-coral-red pt-8">Contact Us</p>
                        <h2 className="mt-4 text-center font-palanquin text-5xl max-sm:text-4xl font-bold">Get in Touch</h2>
                        <div className='flex justify-center'>
                            <p className="mt-4 mb-4 max-w-md text-cente text-slate-gray">
                                Have a question or need more information?
                                <span className='hidden lg:block text-center'>Please fill out the form below.</span>
                                <span className='block lg:hidden'>Fill out the form below, and we'll get back to you as soon as possible.</span>
                            </p>
                        </div>
                    </div>
                    {isSubmitted ? (
                        <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-6" role="alert">
                            <p className="font-bold">Thank you for contacting us!</p>
                            <p>We have received your message and will get back to you as soon as possible.</p>
                        </div>
                    ) : (
                        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6 h-full">
                            <div>
                                <label htmlFor="name" className="block font-semibold text-gray-700 mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className={`w-full bg-gray-100 border rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-coral-red focus:border-transparent ${nameError ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                    onChange={validateForm}
                                    required
                                />
                                {nameError && <p className="text-red-500 text-sm mt-1">{nameError}</p>}
                            </div>
                            <div>
                                <label htmlFor="email" className="block font-semibold text-gray-700 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className={`w-full bg-gray-100 border rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-coral-red focus:border-transparent ${emailError ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                    onChange={validateForm}
                                    required
                                />
                                {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
                            </div>
                            <div>
                                <label htmlFor="message" className="block font-semibold text-gray-700 mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    className={`w-full bg-gray-100 border rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-coral-red focus:border-transparent ${messageError ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                    onChange={validateForm}
                                    required
                                ></textarea>
                                {messageError && <p className="text-red-500 text-sm mt-1">{messageError}</p>}
                            </div>
                            {!isRecaptchaCompleted && (
                                <>
                                    <ReCAPTCHA
                                        ref={recaptchaRef}
                                        sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                                        onChange={() => {
                                            setRecaptchaError('');
                                            setIsRecaptchaCompleted(true);
                                        }}
                                        className="flex justify-center w-full bg-gray-100 border rounded-lg py-2 px-4"
                                    />
                                    {recaptchaError && <p className="text-red-500 text-sm mt-1">{recaptchaError}</p>}
                                </>
                            )}
                            <button
                                type="submit"
                                className={`bg-coral-red text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-coral-red focus:ring-opacity-50 ${isFormValid && isRecaptchaCompleted ? 'hover:bg-red-700' : 'opacity-50 cursor-not-allowed'
                                    }`}
                                disabled={!isFormValid || !isRecaptchaCompleted}
                            >
                                Submit
                            </button>
                        </form>
                    )}
                </div>
            </div>

            <div className="lg:w-1/2 w-full sm:px-6 lg:px-8 h-full flex-1">
                <div className="bg-white shadow-lg rounded-lg sm:p-8 h-full flex-1">
                    <h3 className="text-3xl text-coral-red font-montserrat text-center pt-8">Our Location</h3>

                    <p className="mb-2 text-center text-slate-gray">
                        Come visit us at our location in the Bronx
                        <br />
                        and experience the Warriors in action!
                    </p>

                    <div className='text-5xl font-bold text-center mb-4 p-2'>
                        <a
                            href={`https://www.google.com/maps/dir/?api=1&destination=${40.84910001733011},${-73.82295388835792}`}
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <button className='w-full bg-coral-red hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-coral-red focus:ring-opacity-50'>Get directions</button>
                        </a>
                    </div>
                    {!isRecaptchaCompleted &&
                        (<div className='text-center w-full bg-gray-100 border rounded-lg p-6 mb-4'>
                            We are conveninently located in Pelham Bay Park.
                            <br />
                            <span className='max-xl:hidden'>Drive or take public transportation to visit us.</span>
                        </div>)}

                    <LocationMap />
                </div>
            </div>
        </section>
    );
};

export default Contact;