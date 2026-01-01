import React, { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWordpress, faLaravel } from "@fortawesome/free-brands-svg-icons";
import {
  faRocket,
  faGraduationCap,
  faCartShopping,
  faBriefcase,
  faBoxOpen,
  faTerminal,
  faMicrochip,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";

const ProjectTile = ({ title, category, icon, tech, isVisible }) => (
  <div className="group relative bg-[#0a0a0a] border border-white/5 p-4 md:p-5 hover:bg-[#0f0f0f] hover:border-white/20 transition-all duration-500 flex flex-col justify-between min-h-[120px] md:min-h-[140px]">
    <div className="absolute top-4 right-4 opacity-[0.03] group-hover:opacity-10 transition-all duration-700">
      <FontAwesomeIcon icon={icon} size="3x" />
    </div>

    <div className="space-y-1 relative z-10">
      <div className="flex items-center gap-2">
        <span className="text-[9px] font-mono text-white/30 uppercase tracking-[1px]">
          {category}
        </span>
      </div>
      <h3 className="text-white text-lg md:text-xl font-black uppercase tracking-[5px] leading-tight transition-transform duration-300">
        {title}
      </h3>
    </div>

    <div className="relative z-10">
      <div className="flex flex-wrap gap-x-3 gap-y-1 mb-3">
        {tech.map((t, i) => (
          <span
            key={i}
            className="text-[10px] font-mono text-white/60 uppercase tracking-[1px]"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="h-[2px] w-full bg-white/10 overflow-hidden">
        {/* Mobile: isVisible triggers animation | Desktop: stays animated or re-triggers on hover */}
        <div
          className={`h-full bg-white/50 transition-all duration-1000 ease-out ${
            isVisible ? "w-full" : "w-0"
          }`}
        />
      </div>
    </div>
  </div>
);

export default function Work() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 } // ২০% সেকশন স্ক্রিনে আসলেই এনিমেশন শুরু হবে
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "SaaS Ecosystems",
      category: "Core Development",
      icon: faRocket,
      tech: ["Laravel", "Multi-tenancy", "Redis"],
    },
    {
      title: "Enterprise eCommerce",
      category: "Commercial",
      icon: faCartShopping,
      tech: ["PHP", "MySQL", "Scalable"],
    },
    {
      title: "Inventory Engine",
      category: "Supply Chain",
      icon: faBoxOpen,
      tech: ["Real-time Tracking", "Stock Logic"],
    },
    {
      title: "School Management",
      category: "ERP System",
      icon: faGraduationCap,
      tech: ["Admin Dashboard", "OOP", "Livewire"],
    },
    {
      title: "HR & Payroll Pro",
      category: "Management",
      icon: faBriefcase,
      tech: ["Accounting", "Logic", "Backend"],
    },
    {
      title: "WP Plugin Engine",
      category: "Development",
      icon: faWordpress,
      tech: ["Hooks", "API", "Gutenberg"],
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#050505] py-12 md:py-16 px-6 min-h-[90vh] flex flex-col justify-center border-t border-white/5"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* UNIFIED HEADER */}
        <div className="mb-8 md:mb-10 space-y-1 relative group text-center md:text-left">
          {/* Watermark - Back Layer */}
          <h2 className="absolute -top-6 md:-top-10 left-1/2 -translate-x-1/2 w-full text-6xl md:text-[120px] font-black text-white/[0.02] pointer-events-none select-none whitespace-nowrap">
            PROJECTS
          </h2>

          {/* Front Content Layer */}
          <div className="relative z-10 space-y-1">
            <h4 className="text-white/30 font-mono text-xs md:text-sm tracking-[8px] md:tracking-[12px] uppercase">
              Deployments // 03
            </h4>
            <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/40 font-black text-2xl md:text-6xl uppercase leading-[1] tracking-widest">
              COLLECTIVE INTELLIGENCE
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-3 pt-2">
              <h3 className="text-white font-mono text-base md:text-xl tracking-[4px] md:tracking-[8px] uppercase opacity-90">
                SUCCESSFUL_BUILDS
              </h3>
              <div className="h-px w-16 bg-white/20 block" />
            </div>
          </div>
        </div>

        {/* COMPACT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 border-t border-white/10 pt-6">
          {projects.map((project, idx) => (
            <ProjectTile
              key={idx}
              {...project}
              isVisible={isVisible} // Passing visibility state
            />
          ))}
        </div>

        {/* HIGH-VISIBILITY FOOTER */}
        <div className="mt-8 md:mt-10 flex flex-col md:flex-row justify-between items-center gap-4 border-t border-white/5 pt-6">
          <div className="flex gap-6 md:gap-10 text-[10px] font-mono uppercase tracking-[2px] text-white/60">
            <p className="flex items-center gap-2">
              <FontAwesomeIcon icon={faMicrochip} className="text-white/30" />
              Technical Depth
            </p>
            <p className="flex items-center gap-2">
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="text-green-500/50"
              />
              Build Verified
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="h-1 w-1 rounded-full bg-green-500 animate-pulse" />
            <p className="text-[10px] font-mono uppercase tracking-[2px] text-white/50">
              System Status:{" "}
              <span className="text-white/80">Stable_06_Rep_Active</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
