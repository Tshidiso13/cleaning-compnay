import React, { useState, useEffect } from "react";
import { PhoneIcon, MailIcon, MapPinIcon } from "lucide-react";
import Footer from "../components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
    alert("Thank you! Your message has been sent.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="bg-gray-50 relative">
      <section className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-24 grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Left: Contact Form */}
        <div
          className={`bg-white rounded-3xl shadow-lg p-10 transition-all duration-700 ${
            animate ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="w-full p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none"
              required
            />
            <button
              type="submit"
              className="mt-4 bg-primary text-white font-semibold py-4 px-8 rounded-xl hover:bg-primary-dark transition"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Right: Contact Info + Google Map */}
        <div
          className={`flex flex-col gap-8 transition-all duration-700 ${
            animate ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <PhoneIcon className="w-6 h-6 text-primary" />
              <span className="text-gray-700 font-medium">021-520-7666</span>
            </div>
            <div className="flex items-center gap-3">
              <MailIcon className="w-6 h-6 text-primary" />
              <span className="text-gray-700 font-medium">contact@cleanhub.com</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPinIcon className="w-6 h-6 text-primary" />
              <span className="text-gray-700 font-medium">
                221b Elementary Avenue, Cape Town, South Africa
              </span>
            </div>
            <div>
              <h3 className="text-gray-900 font-semibold">Business Hours</h3>
              <p className="text-gray-700">Mon – Fri: 08:00 – 18:00</p>
              <p className="text-gray-700">Sat – Sun: 09:00 – 14:00</p>
            </div>
          </div>

          {/* Google Map Embed */}
          <iframe
            title="Google Map"
            className="w-full h-64 rounded-3xl border-0 shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3303.094911488197!2d18.424055215207856!3d-33.91886138066202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc669b2a022d3b%3A0xb24699c3f34f95a4!2sCape%20Town!5e0!3m2!1sen!2sza!4v1705700000000!5m2!1sen!2sza"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/27123456789"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg transform transition-transform hover:scale-110 animate-bounce"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M20.52 3.48A11.913 11.913 0 0012 0C5.372 0 0 5.372 0 12c0 2.11.55 4.07 1.51 5.83L0 24l6.27-1.51A11.937 11.937 0 0012 24c6.628 0 12-5.372 12-12 0-3.19-1.25-6.19-3.48-8.52zm-8.28 18.4c-1.85 0-3.68-.5-5.28-1.44l-.37-.22-3.73.9.9-3.63-.24-.37C2.1 15.71 1.6 13.88 1.6 12c0-5.72 4.68-10.4 10.4-10.4s10.4 4.68 10.4 10.4-4.68 10.4-10.4 10.4zm5.09-7.21c-.28-.14-1.64-.81-1.89-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.21-.59.07-.28-.14-1.18-.44-2.24-1.38-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.12-.12.28-.32.42-.48.14-.16.18-.28.28-.47.09-.18.05-.35-.02-.49-.07-.14-.61-1.47-.84-2.02-.22-.53-.44-.46-.61-.47l-.52-.01c-.16 0-.42.06-.64.29s-.84.82-.84 2 .86 2.33.98 2.49c.12.16 1.69 2.59 4.1 3.63.57.25 1.01.4 1.36.51.57.18 1.09.15 1.5.09.46-.07 1.64-.67 1.87-1.32.23-.66.23-1.22.16-1.32-.07-.11-.25-.18-.53-.32z" />
        </svg>
      </a>

      <Footer />
    </div>
  );
};

export default Contact;
