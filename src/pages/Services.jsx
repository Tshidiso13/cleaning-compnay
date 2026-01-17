import React from "react";
import ResImg from "../assets/img1.png";
import ComImg from "../assets/img2.jpg";
import DeepImg from "../assets/img3.png";
import MoveImg from "../assets/img6.jpg";
import PostImg from "../assets/img7.jpg";

import Offer1 from "../assets/offer4.jpg";
import Offer2 from "../assets/offer2.jpg";
import Offer3 from "../assets/offer3.png";
import Offer4 from "../assets/offer1.png";

import {
  BuildingIcon,
  HammerIcon,
  HomeIcon,
  LeafIcon,
  SoapDispenserDropletIcon,
  SprayCanIcon,
  TruckIcon,
  WandIcon,
} from "lucide-react";

import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import { Link } from "react-router-dom";

const services = [
  {
    icon: <HomeIcon className="w-8 h-8 text-white" />,
    title: "Residential Cleaning",
    description:
      "Keep your home spotless with our regular or deep cleaning services. Perfect for busy families or anyone who wants a clean and healthy living space.",
    details:
      "Includes vacuuming, dusting, kitchen and bathroom sanitization, floor cleaning, and more. Flexible schedules available.",
    image: ResImg,
  },
  {
    icon: <BuildingIcon className="w-8 h-8 text-white" />,
    title: "Commercial Cleaning",
    description:
      "Professional cleaning for offices, retail, and business spaces. Ensure a clean environment for employees and clients.",
    details:
      "Includes desk cleaning, trash removal, floor care, restrooms, and common areas. Nightly, weekly, or monthly cleaning schedules available.",
    image: ComImg,
  },
  {
    icon: <WandIcon className="w-8 h-8 text-white" />,
    title: "Deep Cleaning",
    description:
      "Deep cleaning for those hard-to-reach areas and neglected spots to ensure every corner is sparkling clean.",
    details:
      "Includes baseboards, blinds, ceiling fans, behind appliances, detailed bathroom & kitchen cleaning. Ideal for seasonal cleaning.",
    image: DeepImg,
  },
  {
    icon: <TruckIcon className="w-8 h-8 text-white" />,
    title: "Move-In / Move-Out Cleaning",
    description:
      "Ensure a smooth transition with thorough cleaning for your old or new home.",
    details:
      "Includes inside cabinets, appliances, walls, floors, and bathrooms. Perfect for tenants, landlords, and new homeowners.",
    image: MoveImg,
  },
  {
    icon: <HammerIcon className="w-8 h-8 text-white" />,
    title: "Post-Construction Cleaning",
    description:
      "Remove dust, debris, and leftover materials after renovations or construction.",
    details:
      "Includes sweeping, vacuuming, dust removal from surfaces, cleaning windows, and polishing floors. Get your space ready to use.",
    image: PostImg,
  },
];

const moreOffers = [
  {
    icon: <LeafIcon className="w-6 h-6 text-white" />,
    title: "Eco-Friendly Products",
    description: "We use only safe, eco-friendly cleaning supplies for a green clean.",
    image: Offer1,
  },
  {
    icon: <SprayCanIcon className="w-6 h-6 text-white" />,
    title: "Sanitization Services",
    description: "Keep your space germ-free with our disinfection and sanitization services.",
    image: Offer2,
  },
  {
    icon: <SoapDispenserDropletIcon className="w-6 h-6 text-white" />,
    title: "Specialty Services",
    description: "Carpet cleaning, window washing, and other specialty services available.",
    image: Offer3,
  },
  {
    icon: <WandIcon className="w-6 h-6 text-white" />,
    title: "Event Cleaning",
    description: "Before or after events, we make sure the venue is spotless and ready.",
    image: Offer4,
  },
];

const Services = () => {
  return (
    <>
      <div className="max-w-7xl pt-20 mx-auto px-6 md:px-16 lg:px-24 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-10">
          Our Cleaning Services
        </h2>
        <p className="mt-4 text-gray-600">
          Prices depend on property size & service type. Get a free quote today.
        </p>

        {/* Main Services Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col transition-transform hover:scale-105"
            >
              <div className="relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-56 object-cover"
                />
                <div className="absolute top-4 left-4 bg-primary p-3 rounded-full flex items-center justify-center shadow-lg">
                  {service.icon}
                </div>
              </div>
              <div className="p-6 flex flex-col gap-4">
                <h3 className="text-2xl font-semibold text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-700">{service.description}</p>
                <p className="text-gray-500">{service.details}</p>
                <Link to='/contact'
                  className="mt-auto inline-block text-primary font-semibold hover:underline"
                >
                  Request Quote →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* More Offers Section */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-20">
          What We Also Offer
        </h2>
        <p className="mt-2 text-gray-600">
          Additional services to make your space shine.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {moreOffers.map((offer, index) => (
            <div
              key={index}
              className="bg-primary rounded-2xl overflow-hidden shadow-lg flex flex-col items-center text-center p-6 transition-transform hover:scale-105"
            >
              <div className="bg-primary-dark p-3 rounded-full mb-4 flex items-center justify-center">
                {offer.icon}
              </div>
              <h4 className="text-lg font-semibold text-white">{offer.title}</h4>
              <p className="mt-2 text-gray-200">{offer.description}</p>
              <img
                src={offer.image}
                alt={offer.title}
                className="mt-4 w-full h-32 object-cover rounded-lg"
              />
            </div>
          ))}
        </div>

        {/* Collage Section */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-20">
          See Our Work
        </h2>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-2 mb-20">
          <img src={ResImg} alt="Work1" className="w-full h-40 object-cover rounded-lg" />
          <img src={ComImg} alt="Work2" className="w-full h-40 object-cover rounded-lg" />
          <img src={DeepImg} alt="Work3" className="w-full h-40 object-cover rounded-lg" />
          <img src={MoveImg} alt="Work4" className="w-full h-40 object-cover rounded-lg" />
        </div>
      </div>

      {/* Footer with reduced spacing */}
      <div className="mt-10">
        <WhatsAppButton />
        <Footer />
      </div>
    </>
  );
};

export default Services;
