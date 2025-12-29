import React, { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaravel,
  faPhp,
  faNodeJs,
  faDocker,
  faAws,
  faJsSquare,
} from "@fortawesome/free-brands-svg-icons";
import {
  faDatabase,
  faCodeBranch,
  faShieldHalved,
  faMicrochip,
  faPalette,
} from "@fortawesome/free-solid-svg-icons";

const SkillItem = ({ name, level, icon, isVisible }) => (
  <div className="group relative py-5 border-b border-white/5 flex items-center justify-between hover:px-2 transition-all duration-500">
    <div className="flex items-center gap-5 z-10">
      <div className="text-white/20 group-hover:text-white transition-all duration-500">
        <FontAwesomeIcon icon={icon} className="text-lg md:text-xl" />
      </div>
      <div>
        <h4 className="text-white/70 group-hover:text-white text-sm md:text-base font-medium tracking-wide transition-colors uppercase">
          {name}
        </h4>
      </div>
    </div>

    <div className="flex items-center gap-6">
      <span className="font-mono text-[12px] text-white/20 group-hover:text-white/50 transition-colors uppercase tracking-[1px]">
        {level}%
      </span>
      <div className="w-16 md:w-24 h-[2px] bg-white/5 relative overflow-hidden">
        <div
          className={`absolute inset-0 bg-white/40 transition-transform duration-1000 ease-out ${
            isVisible ? "translate-x-0" : "-translate-x-full"
          }`}
          style={{
            clipPath: `inset(0 ${100 - level}% 0 0)`,
            // ডেস্কটপে হোভার ইফেক্ট বজায় রাখার জন্য:
            transitionProperty: "transform",
          }}
        />
      </div>
    </div>

    <div className="absolute inset-0 bg-gradient-to-r from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
  </div>
);

export default function Capabilities() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 } // ২০% সেকশন দেখা গেলেই এনিমেশন শুরু হবে
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stackLeft = [
    { name: "Laravel & Ecosystem", level: 95, icon: faLaravel },
    { name: "MERN Stack Development", level: 88, icon: faNodeJs },
    { name: "Core PHP & OOP", level: 90, icon: faPhp },
    { name: "Modern JavaScript (ES6+)", level: 88, icon: faJsSquare },
    { name: "Responsive UI/UX Design", level: 82, icon: faPalette },
  ];

  const stackRight = [
    { name: "Database Design & Optimization", level: 90, icon: faDatabase },
    { name: "API Development & Security", level: 92, icon: faShieldHalved },
    { name: "Cloud Infrastructure (AWS/GCP)", level: 78, icon: faAws },
    { name: "DevOps, Docker & CI/CD", level: 75, icon: faDocker },
    { name: "Version Control & Collaboration", level: 85, icon: faCodeBranch },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#050505] py-16 px-6 overflow-hidden min-h-[80vh] flex items-center border-t border-white/5"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="mb-12 space-y-1 relative group text-center md:text-left">
          {/* Watermark - Back Layer */}
          <h2 className="absolute -top-6 md:-top-10 left-1/2 -translate-x-1/2 w-full text-6xl md:text-[120px] font-black text-white/[0.02] pointer-events-none select-none whitespace-nowrap">
            SKILLS
          </h2>

          {/* Front Content Layer */}
          <div className="relative z-10 space-y-1">
            <h4 className="text-white/30 font-mono text-xs md:text-sm tracking-[8px] md:tracking-[12px] uppercase">
              Capabilities // 02
            </h4>
            <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/40 font-black text-2xl md:text-6xl uppercase leading-[1] tracking-widest">
              ENGINEERING THE CORE
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-3 pt-2">
              <h3 className="text-white font-mono text-base md:text-xl tracking-[4px] md:tracking-[8px] uppercase opacity-90">
                SYSTEM RESOURCES
              </h3>
              <div className="h-px w-16 bg-white/20 block" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 md:gap-x-24 border-t border-white/10">
          <div className="flex flex-col">
            {stackLeft.map((stack, index) => (
              <SkillItem
                key={index}
                name={stack.name}
                level={stack.level}
                icon={stack.icon}
                isVisible={isVisible}
              />
            ))}
          </div>
          <div className="flex flex-col">
            {stackRight.map((stack, index) => (
              <SkillItem
                key={index}
                name={stack.name}
                level={stack.level}
                icon={stack.icon}
                isVisible={isVisible}
              />
            ))}
          </div>
        </div>

        {/* FOOTER - Visibility Improved (Opacity 40 to 60) */}
        <div className="mt-10 flex flex-col md:flex-row justify-between items-center gap-4 opacity-60">
          <div className="flex gap-8 text-[10px] font-mono uppercase tracking-[3px] text-white/80">
            <p>
              <FontAwesomeIcon
                icon={faMicrochip}
                className="mr-2 text-white/50"
              />{" "}
              High Efficiency
            </p>
            <p>
              <FontAwesomeIcon
                icon={faShieldHalved}
                className="mr-2 text-white/50"
              />{" "}
              Secure Ops
            </p>
          </div>
          <p className="text-[10px] font-mono uppercase tracking-[2px] text-white/80">
            // Status:{" "}
            <span className="text-green-500/80">Optimal_Processing</span>
          </p>
        </div>
      </div>
    </section>
  );
}
