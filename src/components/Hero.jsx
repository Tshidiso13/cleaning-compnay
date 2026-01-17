import heroBg from "../assets/hero-bg.jpg"; // background image
import heroImage from "../assets/hero-image.png"; // cleaning team / home image
import servicesBg from "../assets/services-bg.png";
import { Mail, MapPin, Phone } from "lucide-react";

import img1 from "../assets/img1.png";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg"; // new
import img7 from "../assets/img7.jpg"; // new
import img8 from "../assets/img8.jpg"; // new

import {
    ShieldCheckIcon,
    BoltIcon,
    ClockIcon,
    UsersIcon,
    SparklesIcon,
    TruckIcon,
    StarIcon,

    HeartIcon,
    FireIcon,

    HandThumbUpIcon,
    GlobeAltIcon,
    GiftIcon,



} from "@heroicons/react/24/outline";
import WhatsAppButton from "./WhatsAppButton";
import { Link } from "react-router-dom";


const trustBadges = [
    { icon: <ShieldCheckIcon className="w-10 h-10 text-white" />, title: "Fully Insured", color: "bg-green-500" },
    { icon: <BoltIcon className="w-10 h-10 text-white" />, title: "Eco-Friendly Products", color: "bg-lime-500" },
    { icon: <ClockIcon className="w-10 h-10 text-white" />, title: "24/7 Support", color: "bg-blue-500" },
    { icon: <UsersIcon className="w-10 h-10 text-white" />, title: "Experienced Staff", color: "bg-purple-500" },
    { icon: <SparklesIcon className="w-10 h-10 text-white" />, title: "Satisfaction Guarantee", color: "bg-pink-500" },
    { icon: <TruckIcon className="w-10 h-10 text-white" />, title: "Fast & Reliable", color: "bg-orange-500" },
    { icon: <StarIcon className="w-10 h-10 text-white" />, title: "Top Rated Services", color: "bg-red-500" },
    { icon: <HeartIcon className="w-10 h-10 text-white" />, title: "Customer Care", color: "bg-pink-600" },
    { icon: <FireIcon className="w-10 h-10 text-white" />, title: "Fast Response", color: "bg-red-600" },
    { icon: <HandThumbUpIcon className="w-10 h-10 text-white" />, title: "Trusted Staff", color: "bg-emerald-500" },
    { icon: <GlobeAltIcon className="w-10 h-10 text-white" />, title: "Nationwide Service", color: "bg-cyan-500" },
    { icon: <GiftIcon className="w-10 h-10 text-white" />, title: "Special Offers", color: "bg-fuchsia-500" },



];


const Hero = () => {
    const galleryImages = [
        { src: img1, title: "Residential Cleaning" },
        { src: img2, title: "Commercial Cleaning" },
        { src: img3, title: "Deep Cleaning" },
        { src: img4, title: "Window Cleaning" },
        { src: img5, title: "Office Cleaning" },
        { src: img6, title: "Move-In / Move-Out" },  // new
        { src: img7, title: "Post-Construction Cleaning" }, // new
        { src: img8, title: "Carpet & Upholstery Cleaning" }, // new
    ];

    return (
        <>
            {/* HERO SECTION */}
            <section
                className="relative w-full min-h-[700px] flex items-center"
                style={{
                    backgroundImage: `linear-gradient(rgba(15,23,42,0.75), rgba(15,23,42,0.75)), url(${heroBg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-white">

                    {/* LEFT COLUMN */}
                    <div>
                        <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
                            Professional Cleaning Services You Can Trust
                        </h1>

                        <p className="mt-6 text-lg text-gray-200 max-w-xl">
                            Residential & Commercial cleaning across South Africa
                        </p>

                        {/* BUTTONS */}
                        <div className="mt-8 flex flex-wrap gap-4">
                           <Link to='/contact'
                                className="px-8 py-4 rounded-full bg-primary text-white font-semibold hover:bg-primary/90 transition"
                            >
                        
                                Get a Quote
                            </Link>

                            <Link 
                                className="px-8 py-4 rounded-full border border-white text-white font-semibold hover:bg-white hover:text-gray-900 transition"
                            >
                                Call Now
                            </Link>
                        </div>
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="hidden lg:block">
                        <img
                            src={heroImage}
                            alt="Professional cleaning team"
                            className="rounded-3xl shadow-2xl"
                        />
                    </div>
                </div>
            </section>

            {/* TRUST BADGES */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 grid grid-cols-2 md:grid-cols-4 gap-6">
                    {trustBadges.map((badge, index) => (
                        <div
                            key={index}
                            className={`${badge.color} flex flex-col items-center justify-center p-6 rounded-2xl shadow-lg text-white font-semibold text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl`}
                        >
                            <div className="mb-3">{badge.icon}</div>
                            <span>{badge.title}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* SERVICES PREVIEW */}
            <section
                className="relative py-24 bg-cover bg-center"
                style={{ backgroundImage: `url(${servicesBg})` }}
            >
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/70"></div>

                <div className="relative max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-white">
                        Our Cleaning Services
                    </h2>

                    {/* IMAGE GALLERY */}
                    <div className="flex flex-wrap items-center justify-center mt-12 gap-4 max-w-5xl mx-auto">
                        {galleryImages.map((img, index) => (
                            <div key={index} className="relative group rounded-lg overflow-hidden">
                                <img
                                    src={img.src}
                                    alt={img.title}
                                    className="size-56 object-cover object-top"
                                />
                                <div className="absolute inset-0 flex flex-col justify-end p-4 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                    <h1 className="text-xl font-medium">{img.title}</h1>
                                    <a href="#" className="flex items-center gap-1 text-sm text-white/70">
                                        Show More
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 13 13"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M8.125 1.625H11.375V4.875"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M5.41602 7.58333L11.3743 1.625"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M9.75 7.04167V10.2917C9.75 10.579 9.63586 10.8545 9.4327 11.0577C9.22953 11.2609 8.95398 11.375 8.66667 11.375H2.70833C2.42102 11.375 2.14547 11.2609 1.9423 11.0577C1.73914 10.8545 1.625 10.579 1.625 10.2917V4.33333C1.625 4.04602 1.73914 3.77047 1.9423 3.5673C2.14547 3.36414 2.42102 3.25 2.70833 3.25H5.95833"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* TESTIMONIALS */}
            <section className="bg-white py-24">
  <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
      What Our Clients Say
    </h2>

    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto mt-12">
      {/* Testimonial 1 */}
      <div className="w-full max-w-88 space-y-4 rounded-md border border-gray-200 bg-white p-6 text-gray-500 transition-all duration-300 hover:-translate-y-1">
        <div className="flex items-center justify-between">
          <div className="flex gap-1">
            {/* 5 Stars */}
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-yellow-400"
              >
                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
              </svg>
            ))}
          </div>
          <p className="text-sm text-gray-400">12 Jan 2025</p>
        </div>
        <p>
          “Super clean and easy to use. These Tailwind + React components saved me hours of dev time and countless lines of extra code!”
        </p>
        <div className="flex items-center gap-2 pt-3">
          <img
            className="h-8 w-8 rounded-full"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200"
            alt="Richard Nelson"
          />
          <p className="font-medium text-gray-800">Richard Nelson</p>
        </div>
      </div>

      {/* Testimonial 2 */}
      <div className="w-full max-w-88 space-y-4 rounded-md border border-gray-200 bg-white p-6 text-gray-500 transition-all duration-300 hover:-translate-y-1">
        <div className="flex items-center justify-between">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-yellow-400"
              >
                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
              </svg>
            ))}
          </div>
          <p className="text-sm text-gray-400">15 Mar 2025</p>
        </div>
        <p>
          “The design quality is top-notch. Perfect balance between simplicity and style. Highly recommend for any creative developer!”
        </p>
        <div className="flex items-center gap-2 pt-3">
          <img
            className="h-8 w-8 rounded-full"
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200"
            alt="Sophia Martinez"
          />
          <p className="font-medium text-gray-800">Sophia Martinez</p>
        </div>
      </div>

      {/* Testimonial 3 */}
      <div className="w-full max-w-88 space-y-4 rounded-md border border-gray-200 bg-white p-6 text-gray-500 transition-all duration-300 hover:-translate-y-1">
        <div className="flex items-center justify-between">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-yellow-400"
              >
                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
              </svg>
            ))}
          </div>
          <p className="text-sm text-gray-400">20 Feb 2025</p>
        </div>
        <p>
          “Absolutely love the reusability of these components. My workflow feels 10x faster now with cleaner and more consistent layouts.”
        </p>
        <div className="flex items-center gap-2 pt-3">
          <img
            className="h-8 w-8 rounded-full"
            src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60"
            alt="Ethan Roberts"
          />
          <p className="font-medium text-gray-800">Ethan Roberts</p>
        </div>
      </div>
    </div>
  </div>
</section>


            {/* CTA SECTION */}
           
<section className="relative bg-primary py-20">
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center opacity-20"
    style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1592833152682-f8ef1550f3b6?auto=format&fit=crop&w=1600&q=80')",
    }}
  ></div>

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/40"></div>

  {/* Content */}
  <div className="relative max-w-5xl w-full mx-auto p-10 text-white">
    
    <h1 className="text-4xl font-bold text-left mt-4">
      Let’s Make Your Space Sparkling Clean!
    </h1>
    <p className="text-left mt-4">
      Or reach out directly at{" "}
      <a
        href="mailto:contact@cleanhub.com"
        className="text-indigo-400 hover:underline"
      >
        contact@cleanhub.com
      </a>
    </p>

    <div className="grid md:grid-cols-3 gap-8 mt-16">
      {/* Email */}
      <div className="flex flex-col items-start gap-3">
        <div className="p-3 bg-indigo-400/20 rounded-full">
          <Mail className="w-6 h-6 text-indigo-400" />
        </div>
        <p className="text-lg font-bold mt-2">Email Us</p>
        <p className="mt-1 mb-2 text-white/80">
          For bookings, quotes, or questions.
        </p>
        <a href="mailto:contact@cleanhub.com" className="text-indigo-400 font-semibold">
          contact@cleanhub.com
        </a>
      </div>

      {/* Office */}
      <div className="flex flex-col items-start gap-3">
        <div className="p-3 bg-indigo-400/20 rounded-full">
          <MapPin className="w-6 h-6 text-indigo-400" />
        </div>
        <p className="text-lg font-bold mt-2">Visit Our Office</p>
        <p className="mt-1 mb-2 text-white/80">
          Schedule consultations or pick up cleaning supplies.
        </p>
        <span className="text-indigo-400 font-semibold">
          221b Elementary Avenue, Cape Town, South Africa
        </span>
      </div>

      {/* Phone */}
      <div className="flex flex-col items-start gap-3">
        <div className="p-3 bg-indigo-400/20 rounded-full">
          <Phone className="w-6 h-6 text-indigo-400" />
        </div>
        <p className="text-lg font-bold mt-2">Call Us</p>
        <p className="mt-1 mb-2 text-white/80">
          Available during working hours.
        </p>
        <span className="text-indigo-400 font-semibold">
          021-520-7666
        </span>
      </div>
    </div>
  </div>
  <WhatsAppButton />
</section>



        </>
    );
};

export default Hero;
