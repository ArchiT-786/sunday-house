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
    <div className="relative min-h-screen w-full flex flex-col justify-between bg-slate-950 text-slate-100 overflow-x-hidden font-sans select-none">
      {/* Background High-Res Mountain Landscape Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 scale-105 transition-transform duration-10000 ease-out"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2000&auto=format&fit=crop')`,
        }}
      />
      
      {/* Dark Luxury Vignette & Radial Gradient Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/60 to-slate-950/95" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-amber-500/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Header Bar */}
      <header className="relative z-10 w-full max-w-7xl mx-auto px-6 py-6 sm:py-8 flex items-center justify-between">
        {/* Brand Logo Badge */}
        <div className="flex items-center gap-3">
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)]">
            <Image
              src="/_static/sunday_house.png"
              alt="Sunday Houses Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Launching Soon Badge */}
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wider text-amber-200/90 bg-slate-900/80 border border-amber-500/30 backdrop-blur-md shadow-lg shadow-black/40">
          <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" /> LAUNCHING SOON
        </span>
      </header>

      {/* Main Hero Content */}
      <main className="relative z-10 w-full max-w-4xl mx-auto px-6 py-8 text-center my-auto flex flex-col items-center">
        
        {/* Curated Homestays Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/60 border border-amber-500/20 text-amber-100/80 text-xs tracking-widest uppercase mb-6 sm:mb-8 backdrop-blur-md shadow-inner">
          <MapPin className="w-3.5 h-3.5 text-amber-400" />
          <span>Curated Homestays & Tourist Services</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif tracking-tight text-white mb-6 leading-[1.15] drop-shadow-2xl">
          WAKE UP <br />
          <span className="italic font-normal bg-gradient-to-r from-amber-100 via-amber-200 to-amber-400 bg-clip-text text-transparent">
            above the clouds.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-xl mb-10 leading-relaxed font-light">
          We’re crafting peaceful escapes and handpicked homestays away from the ordinary. 
          Our platform will be live on{" "}
          <span className="text-amber-300 font-medium underline underline-offset-4 decoration-amber-500/40">
            October 11 at 11:59 PM
          </span>.
        </p>

        {/* Dynamic Countdown Bar */}
        <div className="w-full max-w-xl mb-10 sm:mb-12 p-1 rounded-3xl bg-gradient-to-r from-amber-500/30 via-amber-200/20 to-amber-500/30 shadow-[0_0_50px_rgba(217,119,6,0.15)]">
          <div className="grid grid-cols-4 gap-2 sm:gap-4 p-4 sm:p-6 rounded-[22px] bg-slate-950/80 backdrop-blur-xl border border-amber-500/20">
            {[
              { label: "DAYS", value: timeLeft.days },
              { label: "HOURS", value: timeLeft.hours },
              { label: "MINUTES", value: timeLeft.minutes },
              { label: "SECONDS", value: timeLeft.seconds },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center justify-center">
                <span className="text-2xl sm:text-4xl md:text-5xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-b from-amber-100 to-amber-300">
                  {String(item.value).padStart(2, "0")}
                </span>
                <span className="text-[9px] sm:text-xs font-semibold tracking-widest text-amber-200/60 mt-1 sm:mt-2 uppercase">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Email Subscription Box */}
        <div className="w-full max-w-md">
          {submitted ? (
            <div className="flex items-center justify-center gap-2.5 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-200 font-medium text-sm backdrop-blur-md animate-fade-in shadow-xl">
              <CheckCircle2 className="w-5 h-5 text-amber-400" />
              <span>You&apos;re on the early access list! We&apos;ll notify you at launch.</span>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row items-center gap-2.5 bg-slate-900/80 border border-amber-500/20 rounded-2xl p-2 shadow-2xl backdrop-blur-xl"
            >
              <div className="relative w-full">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  required
                  className="w-full pl-10 pr-4 py-3 bg-slate-950/70 border border-slate-800 rounded-xl text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all"
                />
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-semibold text-sm transition-all shadow-lg shadow-amber-500/20 whitespace-nowrap active:scale-95"
              >
                Notify Me
              </button>
            </form>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 w-full max-w-7xl mx-auto px-6 py-6 text-center text-xs text-slate-500 border-t border-slate-900/80">
        <p>© {new Date().getFullYear()} Sunday Houses (sundayhouses.com). All rights reserved.</p>
      </footer>
    </div>
  );
}
