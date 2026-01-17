import React from "react";
import BannerImg from "../assets/img1.png";
import StoryImg from "../assets/story.png";
import MissionImg from "../assets/mission.jpg";
import VisionImg from "../assets/history.jpg";

import Team1 from "../assets/team1.png";
import Team2 from "../assets/team2.png";
import Team3 from "../assets/team3.png";
import Team4 from "../assets/team-4.jpg";


import Footer from "../components/Footer";
import { CheckCircleIcon } from "lucide-react";
import WhatsAppButton from "../components/WhatsAppButton";

const teamMembers = [
    {
        name: "Nick Van Wyk",
        role: "Head of Operations",
        image: Team1,
    },
    {
        name: "Michelle Brown",
        role: "Senior Cleaning Supervisor",
        image: Team2,
    },
    {
        name: "Lucia Mark",
        role: "Customer Support Manager",
        image: Team3,
    },
    {
        name: "Brandon Peterson",
        role: "Field Technician",
        image: Team4,
    },
];

const About = () => {
    return (
        <div className="bg-gray-50">
            {/* Header Banner */}
            <section className="relative w-full h-[400px]">
                <img
                    src={BannerImg}
                    alt="About Banner"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white text-center px-6">
                        About Our Company
                    </h1>
                </div>
            </section>

            {/* Our Story */}
            <section className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
                    <p className="text-gray-700 mb-4">
                        CleanHub started with a simple mission: to provide professional
                        cleaning services that are reliable, affordable, and eco-friendly.
                        Over the years, we’ve grown into a trusted name in both residential
                        and commercial cleaning across South Africa.
                    </p>
                    <p className="text-gray-700 mb-4">
                        Our founders noticed the need for a cleaning company that doesn’t
                        cut corners. We combine modern techniques with eco-friendly
                        products to deliver a spotless space every time.
                    </p>
                    <p className="text-gray-700">
                        With a team of highly trained professionals, CleanHub is committed
                        to exceeding customer expectations. From everyday maintenance to
                        deep cleaning and post-construction clean-ups, we bring reliability,
                        trust, and excellence to every project.
                    </p>
                </div>
                <div>
                    <img
                        src={StoryImg}
                        alt="Our Story"
                        className="w-full h-80 object-cover rounded-3xl shadow-lg"
                    />
                </div>
            </section>

            {/* Mission / Vision Cards */}
            <section className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-20 grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="bg-white p-8 rounded-3xl shadow-lg flex flex-col items-center text-center transition hover:scale-105">
                    <img
                        src={MissionImg}
                        alt="Mission"
                        className="w-20 h-20 object-cover mb-4"
                    />
                    <h3 className="text-2xl font-bold mb-2">Our Mission</h3>
                    <p className="text-gray-700">
                        To provide high-quality cleaning services that exceed customer
                        expectations while promoting a safe, healthy, and eco-friendly
                        environment.
                    </p>
                </div>
                <div className="bg-white p-8 rounded-3xl shadow-lg flex flex-col items-center text-center transition hover:scale-105">
                    <img
                        src={VisionImg}
                        alt="Vision"
                        className="w-20 h-20 object-cover mb-4"
                    />
                    <h3 className="text-2xl font-bold mb-2">Our Vision</h3>
                    <p className="text-gray-700">
                        To be the leading cleaning service provider in South Africa,
                        known for professionalism, trustworthiness, and sustainable cleaning
                        solutions.
                    </p>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="max-w-5xl mx-auto px-6 md:px-16 lg:px-24 py-20">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                    Why Choose Us
                </h2>
                <ul className="space-y-4 text-gray-700 max-w-md mx-auto">
                    {[
                        "Trusted Professionals",
                        "Affordable Pricing",
                        "Satisfaction Guarantee",
                        "Eco-Friendly Cleaning",
                        "Flexible Scheduling",
                    ].map((item, index) => (
                        <li key={index} className="flex items-center gap-3">
                            <CheckCircleIcon className="w-6 h-6 text-primary" />
                            {item}
                        </li>
                    ))}
                </ul>
            </section>

            {/* Meet the Team */}
            <section className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-20">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
                    Meet Our Team
                </h2>
                <p className="mt-2 text-gray-600 text-center mb-12">
                    Our dedicated team of professionals is committed to keeping your space spotless.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-3xl shadow-lg overflow-hidden text-center transition hover:scale-105"
                        >
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                                <p className="text-gray-600 mt-1">{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <WhatsAppButton />
            <Footer />
        </div>
    );
};

export default About;