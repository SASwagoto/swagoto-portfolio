import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#050505] border-t border-white/5 py-2 px-6 ">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between items-center">
        <p className="text-white/30 font-mono text-sm uppercase tracking-[2px]">
          &copy; 2024 Swagoto. All Rights Reserved.
        </p>
        <p className="text-white/30 font-mono text-sm uppercase tracking-[2px] mt-2">
          Designed & Developed by Swagoto
        </p>
      </div>
    </footer>
  );
};

export default Footer;
