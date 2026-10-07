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
    <div className="relative h-screen w-full max-h-screen flex flex-col justify-between bg-slate-950 text-slate-100 overflow-hidden font-sans select-none">
      {/* Background Mountain Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-35 scale-105 pointer-events-none"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2000&auto=format&fit=crop')`,
        }}
      />
      
      {/* Dark Vignette Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/60 to-slate-950/90 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-amber-500/10 rounded-full blur-[130px] pointer-events-none" />

      {/* Header Bar */}
      <header className="relative z-10 w-full max-w-6xl mx-auto px-6 py-4 sm:py-6 flex items-center justify-between shrink-0">
        {/* Transparent Native PNG Logo */}
        <div className="flex items-center gap-3">
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]">
            <Image
              src="/_static/sunday_houses.png"
              alt="Sunday Houses Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Status Badge */}
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider text-amber-200/90 bg-slate-900/80 border border-amber-500/30 backdrop-blur-md shadow-md">
          <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" /> LAUNCHING SOON
        </span>
      </header>

      {/* Main Hero Section */}
      <main className="relative z-10 w-full max-w-3xl mx-auto px-6 py-2 text-center my-auto flex flex-col items-center justify-center shrink">
        
        {/* Curated Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/60 border border-amber-500/20 text-amber-100/80 text-[11px] tracking-widest uppercase mb-4 sm:mb-6 backdrop-blur-md shadow-inner">
          <MapPin className="w-3 h-3 text-amber-400" />
          <span>Curated Homestays & Tourist Services</span>
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif tracking-tight text-white mb-4 sm:mb-6 leading-[1.15] drop-shadow-2xl">
          WAKE UP <br />
          <span className="italic font-normal bg-gradient-to-r from-amber-100 via-amber-200 to-amber-400 bg-clip-text text-transparent">
            above the clouds.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xs sm:text-sm md:text-base text-slate-300 max-w-lg mb-6 sm:mb-8 leading-relaxed font-light">
          We’re crafting peaceful escapes and handpicked homestays away from the ordinary. 
          Our platform will be live on{" "}
          <span className="text-amber-300 font-medium underline underline-offset-4 decoration-amber-500/40">
            October 11 at 11:59 PM
          </span>.
        </p>

        {/* Countdown Timer */}
        <div className="w-full max-w-md mb-6 sm:mb-8 p-0.5 rounded-2xl bg-gradient-to-r from-amber-500/30 via-amber-200/20 to-amber-500/30 shadow-[0_0_40px_rgba(217,119,6,0.15)]">
          <div className="grid grid-cols-4 gap-2 p-3 sm:p-5 rounded-[15px] bg-slate-950/80 backdrop-blur-xl border border-amber-500/20">
            {[
              { label: "DAYS", value: timeLeft.days },
              { label: "HOURS", value: timeLeft.hours },
              { label: "MINUTES", value: timeLeft.minutes },
              { label: "SECONDS", value: timeLeft.seconds },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center justify-center">
                <span className="text-xl sm:text-3xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-b from-amber-100 to-amber-300">
                  {String(item.value).padStart(2, "0")}
                </span>
                <span className="text-[9px] sm:text-[10px] font-semibold tracking-widest text-amber-200/60 mt-1 uppercase">
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
                  className="w-full pl-9 pr-3 py-2 bg-slate-950/70 border border-slate-800 rounded-lg text-xs text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-amber-500/50 transition-all"
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
