import { useRef } from "react";
import "../../assets/css/TorchBanner.css";

export default function TorchBanner() {
  const bannerRef = useRef(null);

  const updatePosition = (clientX, clientY) => {
    if (!bannerRef.current) return;
    const rect = bannerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    bannerRef.current.style.setProperty("--x", `${x}px`);
    bannerRef.current.style.setProperty("--y", `${y}px`);
    bannerRef.current.style.setProperty("--spotlight-opacity", "1");
  };

  const resetPosition = () => {
    if (!bannerRef.current) return;
    bannerRef.current.style.setProperty("--spotlight-opacity", "0");
  };

  const handleMouseMove = (e) => updatePosition(e.clientX, e.clientY);
  const handleTouchMove = (e) => {
    const touch = e.touches[0];
    updatePosition(touch.clientX, touch.clientY);
  };

  return (
    <section
      ref={bannerRef}
      className="torch-banner"
      onMouseMove={handleMouseMove}
      onMouseLeave={resetPosition}
      onTouchMove={handleTouchMove}
      onTouchEnd={resetPosition}
    >
      <div className="torch-overlay" />
      
      <div className="text-container">
        <div className="banner-text space-y-3">
          <h1 className="text-2xl md:text-6xl font-extrabold text-white uppercase mb-4 leading-none tracking-[5px]">
            The strength is in what stays unseen.
          </h1>
          <p className="font-mono text-center md:text-lg text-gray-500 text-xs">
            “Complexity inspires solutions, creativity drives design, and professionalism ensures they last.”
          </p>
        </div>
      </div>
    </section>
  );
}
