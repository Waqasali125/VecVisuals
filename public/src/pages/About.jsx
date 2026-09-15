import React, { useEffect, useState } from "react";

import SEO from "../components/SEO";

export default function About() {
  const [progress, setProgress] = useState({
    illustrator: 0,
    aftereffects: 0,
    blender: 0,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress({
        illustrator: 85,
        aftereffects: 60,
        blender: 70,
      });
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="px-6 md:px-12 lg:px-24 py-16 bg-white">
      <SEO
        title="About"
        description="Learn more about Waqas, a creative visuals designer specializing in icons, illustrations and motion graphics."
      />

      {/* 🔹 Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        <div className="flex justify-center md:justify-start">
          <img
            src="/VecVisuals/assets/profile.png"
            alt="Profile"
            className="w-64 h-90 md:w-72 md:h-106 object-cover rounded-lg shadow-md"
          />
        </div>

        <div>
          <p className="text-gray-600 leading-relaxed">
            I’m a passionate visual designer focused on creating high-quality 
            icons, illustrations, patterns, motion icons, and infographics. 
            My work is driven by the idea that great design should be both 
            beautiful and functional.
            <br /><br />
            I specialize in transforming complex ideas into simple, clear, 
            and engaging visuals that improve communication and user experience. 
            From custom icon systems to detailed illustrations and animated icons, 
            I design visuals that help brands stand out.
            <br /><br />
            I enjoy collaborating with startups, businesses, and creative teams 
            to craft visual solutions that strengthen brand identity and deliver 
            meaningful digital experiences.
          </p>
        </div>
      </div>

      {/* 🔹 Experience & Skills */}
      <div className="mt-16">
        <h2 className="text-3xl font-semibold text-center mb-10 border-b pb-2">
          Experience And Skills
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Timeline */}
          <div className="space-y-6">
            <div className="flex justify-between border-b pb-2">
              <span className="font-medium">2018</span>
              <span className="text-gray-700">UI Designer</span>
            </div>

            <div className="flex justify-between border-b pb-2">
              <span className="font-medium">2023</span>
              <span className="text-gray-700">Motion Designer</span>
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-6">
            <SkillBar
              icon={<img src="src/assets/Adobe-Illustrator.svg" className="w-10 h-10" />}
              label="Adobe Illustrator"
              percent={progress.illustrator}
              color="bg-orange-700"
            />

            <SkillBar
              icon={<img src="src/assets/Adobe-After-Effects.svg" className="w-10 h-10" />}
              label="Adobe After Effects"
              percent={progress.aftereffects}
              color="bg-blue-900"
            />
          </div>
        </div>
      </div>

      {/* 🔹 Testimonials */}
      <div className="mt-20">
        <h2 className="text-3xl font-semibold text-center mb-10 border-b pb-2">
          Testimonials
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          <TestimonialCard
            name="boomerang_kits"
            role="Startup Founder"
            text="Waqas did an amazing job on our illustrations. He was patient, detail-oriented, and really brought our ideas to life. Communication was smooth and turnaround time was great. We’re very happy with the final result and would definitely hire him again."
          />

          <TestimonialCard
            name="boomerang_kits"
            role="Startup Founder"
            text="This is my second time working with Waqas and he delivers every time."
          />

          <TestimonialCard
            name="Usman Tariq"
            role="Marketing Lead"
            text="The infographics were clear and engaging. Communication was smooth and delivery was always on time."
          />
          
        </div>
      </div>

    </section>
  );
}

/* 🔹 Skill Bar */
function SkillBar({ icon, label, percent, color }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          {icon}
          <span className="font-medium">{label}</span>
        </div>
        <span className="font-semibold">{percent}%</span>
      </div>

      <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden">
        <div
          className={`${color} h-3 rounded-full transition-all duration-1000`}
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}

/* 🔹 Testimonial Card */
function TestimonialCard({ name, role, text }) {
  return (
    <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
      <p className="text-gray-600 italic mb-4">"{text}"</p>

      <div className="flex items-center gap-3 mt-4">
        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-sm font-bold">
          {name.charAt(0)}
        </div>

        <div>
          <h4 className="font-semibold">{name}</h4>
          <span className="text-sm text-gray-500">{role}</span>
        </div>
      </div>
    </div>
  );
}