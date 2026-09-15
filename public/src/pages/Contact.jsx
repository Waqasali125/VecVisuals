// src/pages/Contact.jsx

import React, { useState } from "react";
import Swal from "sweetalert2";
import "animate.css";
import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaBehance,
  FaDribbble,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import SEO from "../components/SEO";
import { FaPhone } from "react-icons/fa6";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.target);
    formData.append(
      "access_key",
      "72d69fe8-fc92-431a-ae0d-621325ddef75"
    );

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        event.target.reset();

        Swal.fire({
          title: "Message Sent Successfully!",
          text: "Thank you for contacting us. We’ll get back to you soon.",
          icon: "success",
          confirmButtonText: "OK",
          confirmButtonColor: "#3B82F6",
          showClass: {
            popup: "animate__animated animate__zoomIn",
          },
          hideClass: {
            popup: "animate__animated animate__zoomOut",
          },
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          confirmButtonColor: "#3B82F6",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Network Error",
        text: "Please try again later.",
        confirmButtonColor: "#3B82F6",
      });
    }

    setLoading(false);
  };

  return (
    <>
      <SEO
        title="Contact"
        description="Get in touch with VecVisuals for icon design, illustration, motion graphics and infographics projects."
      />
      {/* Contact Form Section */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            Let<span className="text-blue-500">'s</span> Discuss your project!
          </h2>

          <form onSubmit={onSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="What's your name"
                required
                className="border-b border-gray-300 py-3 focus:outline-none focus:border-blue-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Your email"
                required
                className="border-b border-gray-300 py-3 focus:outline-none focus:border-blue-500"
              />
            </div>

            <textarea
              name="message"
              rows="5"
              placeholder="Tell us about your project"
              required
              className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-blue-500 resize-none"
            ></textarea>

            <p className="text-sm text-gray-500 text-left">
              * We promise not to disclose your personal information to third parties.
            </p>

            <div className="flex justify-center">
              <button
                type="submit"
                disabled={loading}
                className="flex items-center gap-3 bg-blue-500 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-full transition-all disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message"}
                <span className="rounded-full p-1">➜</span>
              </button>
            </div>
          </form>

          {/* Follow Us Section */}
          <h3 className="text-2xl font-bold mt-16 mb-4 text-center text-blue-500">
            Follow Us
          </h3>
          <div className="flex justify-center gap-6 text-2xl text-gray-600">
            
            <a href="https://www.linkedin.com/in/waqas-abdulrehman/"target="_blank" rel="noopener noreferrer"><FaLinkedin className="hover:text-blue-500 transition" /></a>
            <a href="#"><FaFacebook className="hover:text-blue-500 transition" /></a>
            <a href="https://www.instagram.com/vecvisuals/"target="_blank" rel="noopener noreferrer"><FaInstagram className="hover:text-blue-500 transition" /></a>
            <a href="https://x.com/VecVisuals"target="_blank" rel="noopener noreferrer"><FaTwitter className="hover:text-blue-500 transition" /></a>
            <a href="https://dribbble.com/vecvisuals"target="_blank" rel="noopener noreferrer"><FaDribbble className="hover:text-blue-500 transition" /></a>
            <a href="https://www.behance.net/vecvisuals"target="_blank" rel="noopener noreferrer"><FaBehance className="hover:text-blue-500 transition" /></a>
          </div>
        </div>
      </section>

      {/* Contact Details Section */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center -mt-10">
          <div className="flex flex-col items-center">
            <div className="bg-blue-500 text-white p-4 rounded-full text-4xl mb-4">
              <FaEnvelope />
            </div>
            <h3 className="text-lg font-semibold mb-2">Email</h3>
            <p className="text-gray-700">vecvisuals@gmail.com</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-blue-500 text-white p-4 rounded-full text-4xl mb-4">
              <FaPhone />
            </div>
            <h3 className="text-lg font-semibold mb-2">Phone</h3>
            <p className="text-gray-700">+92 3037737380</p>
            <p className="text-gray-700">+92 3167607380</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-blue-500 text-white p-4 rounded-full text-4xl mb-4">
              <FaMapMarkerAlt />
            </div>
            <h3 className="text-lg font-semibold mb-2">Location</h3>
            <p className="text-gray-700">Faisalabad Pakistan</p>
          </div>
        </div>
      </section>
    </>
  );
}