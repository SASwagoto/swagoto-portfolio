import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faGithub,
  faFacebookF,
  faInstagram,
  faXTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {
  faMicrochip,
  faDatabase,
  faEnvelope,
  faPhone,
  faLocationDot,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";

export default function AboutMe() {
  return (
    <section className="relative bg-[#050505] py-16 px-6 overflow-hidden min-h-screen flex items-center">
      {/* Top Border Accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-2 md:gap-20">
        {/* LEFT: IMAGE & SOCIALS */}
        <div className="relative group shrink-0">
          {/* Animated Rings */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[112%] h-[112%] md:w-[125%] md:h-[125%] border border-white/15 md:border-white/[0.08] rounded-full animate-[spin_25s_linear_infinite] pointer-events-none" />

          {/* Image Container */}
          <div className="relative w-64 h-80 md:w-80 md:h-[400px] bg-[#0a0a0a] border border-white/10 rounded-sm overflow-hidden transform transition-all duration-700 group-hover:scale-[1.01] active:scale-95 shadow-2xl shadow-black cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent z-10" />
            {/* Mobile Touch logic added via group-active */}
            <img
              src="/profile.png"
              alt="The Architect"
              className="w-full h-full object-cover opacity-50 grayscale transition-all duration-700 group-hover:opacity-95 group-hover:grayscale-0 group-active:opacity-95 group-active:grayscale-0"
            />
            {/* Status Indicator */}
            <div className="absolute bottom-4 left-4 z-20">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.6)]" />
                <span className="text-white font-mono text-[10px] tracking-[3px] uppercase">
                  Active_Core
                </span>
              </div>
            </div>
          </div>

          {/* SOCIAL ICONS - Font Awesome Brands */}
          <div className="flex items-center justify-between mt-8 px-4 md:px-0">
            {[
              { icon: faGithub, href: "https://github.com/SASwagoto" },
              { icon: faLinkedinIn, href: "https://linkedin.com/in/saswagoto" },
              {
                icon: faFacebookF,
                href: "https://www.facebook.com/swagoto.shawon",
              },
              { icon: faXTwitter, href: "https://x.com/SASwagoto" },
              {
                icon: faInstagram,
                href: "https://www.instagram.com/sa_swagoto/",
              },
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/30 hover:text-white transition-all duration-300 hover:-translate-y-1.5"
              >
                <FontAwesomeIcon
                  icon={social.icon}
                  className="text-xl md:text-2xl"
                />
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT: CONTENT SECTION */}
        <div className="flex flex-col space-y-4 text-center md:text-left mt-6 md:mt-0">
          <div className="mb-6 space-y-1 relative group">
            {/* Watermark - Back Layer */}
            <h2 className="absolute -top-6 md:-top-10 left-1/2 -translate-x-1/2 w-full text-6xl md:text-[120px] font-black text-white/2">
              ABOUT ME
            </h2>

            {/* Front Content Layer */}
            <div className="relative z-10 space-y-1">
              <h4 className="text-white/30 font-mono text-xs md:text-sm tracking-[8px] md:tracking-[12px] uppercase">
                Identity // 01
              </h4>
              <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/40 font-black text-2xl md:text-6xl uppercase leading-[1] tracking-widest">
                THE ARCHITECT OF THE CORE
              </h2>
              <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-3 pt-2">
                <h1 className="text-white font-mono text-base md:text-xl tracking-[4px] md:tracking-[8px] uppercase opacity-90">
                  SHAWON AHMED SWAGOTO
                </h1>
                <div className="h-px w-16 bg-white/20 block" />
              </div>
            </div>
          </div>

          {/* BIO */}
          <p className="max-w-2xl text-gray-400 text-md md:text-lg text-justify font-light leading-relaxed">
            I translate complex business requirements into{" "}
            <span className="text-white font-medium italic decoration-white/10">
              high-performance digital reality
            </span>
            . As a Full-Stack Ecosystem Architect, my focus is on building
            resilient backend engines that act as the steady heartbeat of a
            product. I believe that true craftsmanship lies in the balance
            between heavy-duty performance and fluid simplicity.
          </p>

          {/* PRIMARY SPECS GRID - Font Awesome Solid Icons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 py-6 border-y border-white/10 max-w-2xl">
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-gray-400 font-mono text-sm uppercase tracking-widest">
                <FontAwesomeIcon
                  icon={faMicrochip}
                  className="text-white/40 text-lg"
                />
                <span>Laravel / PHP / Node</span>
              </div>
              <div className="flex items-center gap-4 text-gray-400 font-mono text-sm uppercase tracking-widest">
                <FontAwesomeIcon
                  icon={faDatabase}
                  className="text-white/40 text-lg"
                />
                <span>MySQL / Redis / Postgre</span>
              </div>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:info@swagoto.com"
                className="flex items-center gap-4 text-gray-400 font-mono text-sm hover:text-white transition-colors uppercase tracking-widest"
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-white/40 text-lg"
                />
                <span>info@swagoto.com</span>
              </a>
              <div className="flex items-center gap-4 text-gray-400 font-mono text-sm uppercase tracking-widest">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="text-white/40 text-lg"
                />
                <div className="flex items-center gap-3">
                  <a
                    href="tel:+8801770921384"
                    className="hover:text-white transition-colors"
                  >
                    +880 1770 921384
                  </a>
                  <a
                    href="https://wa.me/8801770921384"
                    target="_blank"
                    className="text-green-500/60 hover:text-green-400 transition-all"
                  >
                    <FontAwesomeIcon icon={faWhatsapp} className="text-lg" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ACTION BUTTON */}
          <div className="pt-4 text-center md:text-left">
            <button className="group relative px-12 py-5 overflow-hidden border border-white/20 transition-all hover:border-white active:scale-95">
              <span className="relative z-10 text-white text-xs font-black tracking-[6px] uppercase group-hover:text-black transition-colors duration-300">
                Download Brief_
              </span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
