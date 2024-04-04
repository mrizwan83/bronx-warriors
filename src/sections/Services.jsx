import React from 'react';

const Services = () => {
    return (
        <section id="services" className="w-full flex flex-col justify-center items-center gap-10 max-container">
            <div className="text-center">
                <p className="text-xl font-montserrat text-coral-red">Services</p>
                <h2 className="mt-4 font-palanquin text-5xl max-sm:text-4xl font-bold">What We Offer</h2>
            </div>
            <div className="grid xl:grid-cols-2 grid-cols-1 gap-12 xl:gap-20 w-full">
                <div className="bg-white shadow-lg rounded-lg p-8">
                    <h3 className="text-3xl font-bold mb-6">Frequently Asked Questions</h3>
                    <ul className="space-y-6">
                        <li>
                            <strong className="block text-xl font-semibold mb-2">Q: When does the Football season start?</strong>
                            <p className="text-slate-gray">A: Practices start the first week of August - Regular season starts the third Saturday in September. The season runs through Mid-November.</p>
                        </li>
                        <li>
                            <strong className="block text-xl font-semibold mb-2">Q: When do they practice?</strong>
                            <p className="text-slate-gray">A: Practices for all divisions begin in the first week of August. Practices are Tuesday, Thursday and Fridays until the season begins in September. - Once the season begins, practice is only <strong>Tuesday</strong> and <strong>Thursdays</strong>. (Days are tentative and subject to change)</p>
                        </li>
                        <li>
                            <strong className="block text-xl font-semibold mb-2">Q: Is any additional paperwork required to register for football?</strong>
                            <p className="text-slate-gray">A: <strong>ALL NEW</strong> players must submit a copy of their birth certificates before they can participate. ALL players will be required to submit a medical waiver and a Parent Pledge signed by parents every season before they can participate in games.</p>
                        </li>
                    </ul>
                </div>
                <div className="bg-white shadow-lg rounded-lg p-8">
                    <h3 className="text-3xl font-bold mb-6">Warriors Football</h3>
                    <p className="text-slate-gray mb-6">Warriors Football began in <strong>1952</strong> as a club team playing out of East Harlem. Our Founder and current CEO Jay "<strong>The Chief</strong>" Demers was a player on that team. When he moved to the Bronx, the Warriors came with him. He eventually started and coached the Warriors Football Club in various leagues very successfully.</p>
                    <p className="text-slate-gray mb-6">In 1985, due to growing interest in the program, the Warriors Football Club grew into its own intramural league plus cheerleaders, totaling over 600 participants. Many former player and cheerleaders still come back to support the program in various ways.</p>
                    <p className="text-slate-gray">In 2015, the league officially became the Warriors Football League, Inc and currently has approximately 225 youth and volunteer adult coaches in the program. Our games are all played at Pelham Bay park football field, on <strong>Saturday</strong> and <strong>Sunday</strong> mornings. Our season begins in August with practices 8 to 9 games regular season plus playoffs are played from September to mid-November.</p>
                </div>
            </div>
        </section>
    );
};

export default Services;