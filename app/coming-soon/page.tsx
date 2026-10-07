"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
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
      
      {/* Fancy Serif Fonts Preload Injection */}
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

      {/* Dark Vignette & Gold Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B1015]/90 via-[#0B1015]/70 to-[#0B1015]/95 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Header Bar */}
      <header className="relative z-10 w-full max-w-6xl mx-auto px-6 py-4 sm:py-6 flex items-center justify-between shrink-0">
        
        {/* Prominent Large Logo Image */}
        <div className="flex items-center gap-3">
          <div className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 drop-shadow-[0_12px_24px_rgba(0,0,0,0.8)] transition-transform hover:scale-105">
            <Image
              src="/_static/sunday_houses.png"
              alt="Sunday Houses Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Launching Soon Pill */}
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wider text-amber-200/90 bg-slate-900/80 border border-amber-500/30 backdrop-blur-md shadow-md">
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

        {/* Fancy Countdown Box */}
        <div className="w-full max-w-md mb-6 sm:mb-8 p-0.5 rounded-2xl bg-gradient-to-r from-amber-500/40 via-amber-200/30 to-amber-500/40 shadow-[0_0_50px_rgba(217,119,6,0.2)]">
          <div className="grid grid-cols-4 gap-2 p-3 sm:p-5 rounded-[15px] bg-[#070b0e]/90 backdrop-blur-xl border border-amber-500/20">
            {[
              { label: "DAYS", value: timeLeft.days },
              { label: "HOURS", value: timeLeft.hours },
              { label: "MINUTES", value: timeLeft.minutes },
              { label: "SECONDS", value: timeLeft.seconds },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center justify-center">
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
