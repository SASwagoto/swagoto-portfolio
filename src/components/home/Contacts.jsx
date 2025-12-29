import React, { useState, useEffect, useRef } from "react";
import emailjs from '@emailjs/browser';

const commands = {
  help: "AVAILABLE_COMMANDS: [about, skills, projects, contact, mail, clear]",
  about: "SHAWON AHMED SWAGOTO: Backend Architect & Core System Developer.",
  skills: "STACK: Laravel, PHP, MySQL, Redis, Docker, System Design.",
  projects: "PORTFOLIO: SaaS Ecosystems, Enterprise eCommerce, ERP Solutions.",
  contact: "Email: info@swagoto.com | LinkedIn: https://linkedin.com/in/saswagoto",
};

const initialHistory = [
  { type: "system", content: "SYSTEM_CONNECTED: Secure Port 443 active." },
  { type: "system", content: 'Type "help" to see protocols or "mail" to start transmission.' }
];

export default function Contact() {
  const [history, setHistory] = useState(initialHistory);
  const [input, setInput] = useState("");
  const [mailStep, setMailStep] = useState(0); 
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isFocused, setIsFocused] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  
  const scrollRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    // ১. রিফ্রেশ দিলে ব্রাউজারের অটো-স্ক্রল মেমোরি বন্ধ করা
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    
    // ২. পেজ লোড হওয়ার সময় একদম উপরে রাখা
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

    // ৩. ১.৫ সেকেন্ড পর ইনপুট মাউন্ট করা যাতে ব্রাউজার ফোকাস খুঁজে না পায়
    const timer = setTimeout(() => {
      setIsMounted(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isMounted) {
      scrollRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, [history, isMounted]);

  const handleCommand = (e) => {
    if (e.key === "Enter") {
      const val = input.trim();
      let newHistory = [...history, { type: "user", content: val }];

      if (mailStep > 0 || val.toLowerCase() === "mail") {
        handleMailFlow(val, newHistory);
      } else {
        const cmd = val.toLowerCase();
        if (cmd === "clear") {
          setHistory(initialHistory);
        } else if (commands[cmd]) {
          newHistory.push({ type: "system", content: commands[cmd] });
          setHistory(newHistory);
        } else if (cmd !== "") {
          newHistory.push({ type: "error", content: `ERR_404: Command "${cmd}" not recognized.` });
          setHistory(newHistory);
        }
      }
      setInput("");
    }
  };

  const handleMailFlow = (val, newHistory) => {
    if (mailStep === 0) {
      newHistory.push({ type: "system", content: ">> INITIATING_MAIL_PROTOCOL..." });
      newHistory.push({ type: "system", content: ">> ENTER_YOUR_NAME:" });
      setMailStep(1);
    } else if (mailStep === 1) {
      setFormData({ ...formData, name: val });
      newHistory.push({ type: "system", content: `>> STATUS: Name_${val} registered. ENTER_YOUR_EMAIL:` });
      setMailStep(2);
    } else if (mailStep === 2) {
      setFormData({ ...formData, email: val });
      newHistory.push({ type: "system", content: ">> ENTER_YOUR_MESSAGE:" });
      setMailStep(3);
    } else if (mailStep === 3) {
      newHistory.push({ type: "system", content: ">> ATTEMPTING_TRANSMISSION..." });

      const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        from_name: formData.name,
        from_email: formData.email,
        message: val
      }, PUBLIC_KEY)
      .then(() => {
        setHistory(prev => [...prev, { type: "system", content: ">> SUCCESS: Data packet delivered." }]);
      });

      setMailStep(0);
      setFormData({ name: "", email: "", message: "" });
    }
    setHistory(newHistory);
  };

  return (
    <section className="relative bg-[#050505] py-24 px-6 min-h-[80vh] flex flex-col justify-center border-t border-white/5 overflow-hidden">
      <div className="max-w-6xl mx-auto w-full">
        {/* Header Section */}
        <div className="mb-12 space-y-1 relative group text-center md:text-left">
          <h2 className="absolute -top-10 left-1/2 -translate-x-1/2 w-full text-7xl md:text-[140px] font-black text-white/[0.01] pointer-events-none select-none uppercase">CONNECT</h2>
          <div className="relative z-10 text-center md:text-left">
            <h4 className="text-white/30 font-mono text-xs tracking-[10px] uppercase">Transmission // 04</h4>
            <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/40 font-black text-3xl md:text-6xl uppercase tracking-widest leading-none">INITIATE HANDSHAKE</h2>
          </div>
        </div>

        {/* Terminal Window */}
        <div 
          onClick={() => inputRef.current?.focus({ preventScroll: true })} 
          className="max-w-4xl mx-auto w-full bg-black border border-white/10 rounded-sm shadow-2xl flex flex-col h-[400px] md:h-[450px] cursor-text overflow-hidden"
        >
          <div className="bg-white/5 px-4 py-2 border-b border-white/10 flex items-center justify-between font-mono text-[9px] text-white/30 uppercase tracking-widest">
            <div className="flex gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/20" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/20" />
            </div>
            <span>ROOT@SHAWON_CORE</span>
          </div>

          <div className="flex-1 overflow-y-auto p-6 font-mono text-xs md:text-sm space-y-3 scrollbar-hide">
            {history.map((line, i) => (
              <div key={i} className={line.type === "user" ? "text-white" : line.type === "error" ? "text-red-500" : "text-green-400/80"}>
                {line.type === "user" && <span className="text-white/30 mr-2">$ root ~ </span>}
                <span className="whitespace-pre-wrap">{line.content}</span>
              </div>
            ))}
            
            <div className="flex items-center">
              <span className="text-white/30 mr-2 shrink-0">$ root ~ </span>
              <div className="relative flex-1">
                {isMounted && (
                  <input
                    ref={inputRef}
                    type="text"
                    // readOnly লজিক অটো-স্ক্রল ঠেকাতে সাহায্য করে
                    readOnly={!isFocused}
                    className="bg-transparent border-none outline-none text-white font-mono w-full caret-transparent"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleCommand}
                    onFocus={(e) => {
                      setIsFocused(true);
                      // preventScroll: true দিলে ব্রাউজার নিচে নামবে না
                      e.target.focus({ preventScroll: true });
                    }}
                    onBlur={() => setIsFocused(false)}
                    spellCheck="false"
                    autoComplete="off"
                  />
                )}
                {isFocused && (
                  <div 
                    className="absolute top-0 h-[1.2em] w-[0.6em] bg-green-500/80 animate-pulse pointer-events-none"
                    style={{ left: `calc(${input.length}ch)` }} 
                  />
                )}
              </div>
            </div>
            <div ref={scrollRef} />
          </div>
        </div>
      </div>
    </section>
  );
}