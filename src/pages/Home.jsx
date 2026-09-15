// src/pages/Home.jsx
import { Link } from "react-router-dom";
import { Linkedin, Facebook, Twitter, Instagram } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import profilePic from "./portfolio/";
import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";



import SEO from "../components/SEO";

export default function Home() {
  return (
    <>
    <SEO
      title="Home"
      description="VecVisuals — Waqas, a creative visuals designer offering icons, illustrations, patterns, infographics and motion graphics."
      keywords="icons, illustrations, motion graphics, infographics, patterns, graphic designer"
    />
    <section className="pt-24 md:pt-32 pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Column */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Hay! I’m <span className="text-blue-500">Waqas</span>
          </h1>

          {/* Typing effect */}
          <h2 className="text-2xl md:text-4xl font-semibold ">
            <TypeAnimation
              sequence={[
                "Creative Visuals Designer", // text to type
                2000, // wait 2s
                "", // clear text
                500, // wait 0.5s
                "Creative Visuals Designer", // type again
                2000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </h2>

          <p className="text-gray-600 leading-relaxed">
          Visual Designer specializing in <b>Icons Illustrations Patterns Motion Icons & Infographics.</b>
          <br />
          <br />
          <b>With over 7 years of experience </b> I craft clean modern and meaningful visuals that help brands communicate ideas clearly and effectively. 
          <br /> <br />My work focuses on transforming complex concepts into simple engaging and visually impactful designs for digital products websites and marketing materials.
          </p>

          {/* CTA + Social Icons */}
          <div className="flex items-center flex-wrap gap-4">
            <Link
              to="/Contact"
              className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-full shadow hover:bg-blue-700 transition"
            >
              Get In Touch
            </Link>
            <div className="flex space-x-4 text-blue-500 text-2xl">
              <a href="https://www.linkedin.com/in/waqas-abdulrehman/"target="_blank" rel="noopener noreferrer"><FaLinkedin className="hover:text-blue-500 transition" /></a>
              <a href="#"><FaFacebook className="hover:text-blue-500 transition" /></a>
              <a href="https://www.instagram.com/vecvisuals/"target="_blank" rel="noopener noreferrer"><FaInstagram className="hover:text-blue-500 transition" /></a>
              <a href="https://x.com/VecVisuals"target="_blank" rel="noopener noreferrer"><FaTwitter className="hover:text-blue-500 transition" /></a>
            </div>
          </div>
        </div>


        <div className="flex justify-center md:justify-end">
          {/* <img
            src="/src/profile.png"
            alt="Waqas"
            className="w-164 h-180 md:w-172 md:h-196 rounded-2xl object-cover shadow-lg"
          /> */}
          <video
    src="/src/Intro.mp4"
    controls
    autoPlay
    muted
    loop
    className="w-164 h-180 md:w-172 md:h-196 rounded-2xl object-cover shadow-lg"
  />
        </div>

      </div>
    </section>
    </>
  );
}
