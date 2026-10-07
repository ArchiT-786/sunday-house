"use client";

import React, { useState, useEffect } from "react";
import { Mail, CheckCircle2, Sparkles, MapPin } from "lucide-react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function ComingSoonPage() {
  // Target date: October 11, 2026 at 23:59:00
  const targetDate = new Date("2026-10-11T23:59:00").getTime();

  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <div className="relative h-screen w-full max-h-screen flex flex-col justify-between bg-[#0B1015] text-slate-100 overflow-hidden font-sans select-none">
      
      {/* Google Fonts Preload Injection for Fancy Serif Countdown */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap');
        
        .font-cinzel {
          font-family: 'Cinzel Decorative', serif;
        }
        .font-playfair {
          font-family: 'Playfair Display', serif;
        }
      `}</style>

      {/* Atmospheric Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25 scale-105 pointer-events-none"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2000&auto=format&fit=crop')`,
        }}
      />

      {/* Animated Floating Mist/Clouds */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
        <div className="absolute -left-1/4 top-1/3 w-[150%] h-64 bg-gradient-to-r from-transparent via-amber-100/10 to-transparent blur-3xl animate-[pulse_8s_ease-in-out_infinite]" />
        <div className="absolute -right-1/4 top-1/2 w-[150%] h-80 bg-gradient-to-r from-transparent via-slate-100/10 to-transparent blur-3xl animate-[pulse_12s_ease-in-out_infinite_2s]" />
      </div>

      {/* Dark Vignette & Gold Radial Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B1015]/90 via-[#0B1015]/70 to-[#0B1015]/95 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Header Bar */}
      <header className="relative z-10 w-full max-w-6xl mx-auto px-6 py-4 sm:py-6 flex items-center justify-between shrink-0">
        
        {/* Inline SVG Logo Badge - Guaranteed to render without external image dependencies */}
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 sm:w-16 sm:h-16 relative flex items-center justify-center drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <defs>
                <linearGradient id="goldRing" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#fef08a" />
                  <stop offset="50%" stopColor="#d97706" />
                  <stop offset="100%" stopColor="#78350f" />
                </linearGradient>
                <clipPath id="archClip">
                  <path d="M 30,120 A 70,70 0 0,1 170,120 L 170,130 L 30,130 Z" />
                </clipPath>
              </defs>

              {/* Decorative Outer Pattern Ring */}
              <circle cx="100" cy="100" r="92" fill="#131c24" stroke="url(#goldRing)" strokeWidth="4" />
              <circle cx="100" cy="100" r="84" fill="none" stroke="#d97706" strokeWidth="1" strokeDasharray="3,3" />

              {/* Mountains & Sun Landscape */}
              <circle cx="100" cy="100" r="76" fill="#1e293b" />
              <circle cx="135" cy="75" r="14" fill="#f97316" opacity="0.9" />
              <polygon points="40,115 85,55 120,115" fill="#334155" />
              <polygon points="70,55 85,35 100,55" fill="#f8fafc" opacity="0.9" />
              <polygon points="80,115 125,65 160,115" fill="#475569" />
              <polygon points="113,65 125,48 137,65" fill="#f8fafc" opacity="0.9" />
              
              {/* Wooden House Icon */}
              <polygon points="90,112 110,95 130,112" fill="#78350f" />
              <rect x="94" y="112" width="32" height="18" fill="#92400e" />
              <rect x="106" y="118" width="8" height="12" fill="#451a03" />

              {/* Banner with Text */}
              <path d="M 20,125 Q 100,105 180,125 L 170,170 Q 100,150 30,170 Z" fill="#0f172a" stroke="url(#goldRing)" strokeWidth="2" />
              <text x="100" y="142" textAnchor="middle" fill="#fef08a" fontSize="13" fontFamily="serif" fontWeight="bold" letterSpacing="1">SUNDAY HOUSES</text>
              <text x="100" y="158" textAnchor="middle" fill="#f59e0b" fontSize="7" fontFamily="sans-serif" letterSpacing="0.5">HOMESTAY & TOURIST SERVICES</text>
            </svg>
          </div>
        </div>

        {/* Launching Soon Pill */}
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider text-amber-200/90 bg-slate-900/80 border border-amber-500/30 backdrop-blur-md shadow-md">
          <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" /> LAUNCHING SOON
        </span>
      </header>

      {/* Main Content Area */}
      <main className="relative z-10 w-full max-w-3xl mx-auto px-6 py-2 text-center my-auto flex flex-col items-center justify-center shrink">
        
        {/* Curated Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/60 border border-amber-500/20 text-amber-100/80 text-[11px] tracking-widest uppercase mb-4 sm:mb-6 backdrop-blur-md shadow-inner">
          <MapPin className="w-3 h-3 text-amber-400" />
          <span>Curated Homestays & Tourist Services</span>
        </div>

        {/* Main Title */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-playfair tracking-tight text-white mb-4 sm:mb-6 leading-[1.15] drop-shadow-2xl">
          WAKE UP <br />
          <span className="italic font-normal bg-gradient-to-r from-amber-100 via-amber-200 to-amber-400 bg-clip-text text-transparent">
            above the clouds.
          </span>
        </h1>

        {/* Description */}
        <p className="text-xs sm:text-sm md:text-base text-slate-300 max-w-lg mb-6 sm:mb-8 leading-relaxed font-light">
          We’re crafting peaceful escapes and handpicked homestays away from the ordinary. 
          Our platform will be live on{" "}
          <span className="text-amber-300 font-medium underline underline-offset-4 decoration-amber-500/40">
            October 11 at 11:59 PM
          </span>.
        </p>

        {/* Luxury Fancy Countdown Box */}
        <div className="w-full max-w-md mb-6 sm:mb-8 p-0.5 rounded-2xl bg-gradient-to-r from-amber-500/40 via-amber-200/30 to-amber-500/40 shadow-[0_0_50px_rgba(217,119,6,0.2)]">
          <div className="grid grid-cols-4 gap-2 p-3 sm:p-5 rounded-[15px] bg-[#070b0e]/90 backdrop-blur-xl border border-amber-500/20">
            {[
              { label: "DAYS", value: timeLeft.days },
              { label: "HOURS", value: timeLeft.hours },
              { label: "MINUTES", value: timeLeft.minutes },
              { label: "SECONDS", value: timeLeft.seconds },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center justify-center">
                {/* Fancy Typography for Numbers */}
                <span className="text-2xl sm:text-4xl font-cinzel font-bold text-transparent bg-clip-text bg-gradient-to-b from-amber-100 via-amber-300 to-amber-500 drop-shadow-sm">
                  {String(item.value).padStart(2, "0")}
                </span>
                <span className="text-[9px] sm:text-[10px] font-semibold tracking-widest text-amber-200/60 mt-1 uppercase font-sans">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Subscription Form */}
        <div className="w-full max-w-sm">
          {submitted ? (
            <div className="flex items-center justify-center gap-2 p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-200 font-medium text-xs backdrop-blur-md animate-fade-in shadow-xl">
              <CheckCircle2 className="w-4 h-4 text-amber-400" />
              <span>You&apos;re on the early access list! We&apos;ll notify you at launch.</span>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row items-center gap-2 bg-slate-900/80 border border-amber-500/20 rounded-xl p-1.5 shadow-2xl backdrop-blur-xl"
            >
              <div className="relative w-full">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  required
                  className="w-full pl-9 pr-3 py-2 bg-[#05080a]/80 border border-slate-800 rounded-lg text-xs text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-amber-500/50 transition-all"
                />
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto px-5 py-2 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-semibold text-xs transition-all shadow-lg shadow-amber-500/20 whitespace-nowrap active:scale-95"
              >
                Notify Me
              </button>
            </form>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 w-full max-w-6xl mx-auto px-6 py-4 text-center text-[11px] text-slate-500 border-t border-slate-900/80 shrink-0">
        <p>© {new Date().getFullYear()} Sunday Houses (sundayhouses.com). All rights reserved.</p>
      </footer>
    </div>
  );
}
