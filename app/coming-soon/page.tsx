"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Mail, CheckCircle2, MapPin, Sparkles } from "lucide-react";

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
    <div className="relative min-h-screen w-full flex flex-col justify-between bg-[#1C3D2B] text-[#F7F7F5] overflow-hidden font-sans">
      {/* Soft Subtle Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#2E5A44]/30 rounded-full blur-[140px] pointer-events-none" />

      {/* Header with Logo */}
      <header className="relative z-10 w-full max-w-6xl mx-auto px-6 py-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/_static/sunday_house.png"
            alt="Sunday Houses Logo"
            width={140}
            height={40}
            className="h-9 w-auto object-contain brightness-0 invert"
            priority
          />
        </div>
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium bg-[#2E5A44]/40 border border-[#3E6C54] text-[#E0E7E3]">
          <Sparkles className="w-3.5 h-3.5" /> Launching Soon
        </span>
      </header>

      {/* Main Content */}
      <main className="relative z-10 w-full max-w-4xl mx-auto px-6 py-10 text-center my-auto flex flex-col items-center">
        {/* Tag Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2E5A44]/30 border border-[#3E6C54] text-[#D0DAD4] text-xs uppercase tracking-widest mb-8 backdrop-blur-md">
          <MapPin className="w-4 h-4 text-[#A8C3B5]" />
          <span>Curated Homestays & Escapes</span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif tracking-tight text-[#F7F7F5] mb-6 leading-tight">
          Wake up <br />
          <span className="italic font-normal text-[#C5D8CD]">above the clouds.</span>
        </h1>

        <p className="text-base sm:text-lg text-[#B2C5BB] max-w-xl mb-10 leading-relaxed">
          We’re crafting peaceful escapes and handpicked homestays away from the ordinary. 
          Our platform will be live on <span className="text-[#F7F7F5] font-semibold">October 11 at 11:59 PM</span>.
        </p>

        {/* Live Countdown Grid */}
        <div className="grid grid-cols-4 gap-3 sm:gap-6 w-full max-w-lg mb-12">
          {[
            { label: "DAYS", value: timeLeft.days },
            { label: "HOURS", value: timeLeft.hours },
            { label: "MINUTES", value: timeLeft.minutes },
            { label: "SECONDS", value: timeLeft.seconds },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-3 sm:p-5 rounded-2xl bg-[#142E20]/80 border border-[#2E5A44] backdrop-blur-md shadow-xl"
            >
              <span className="text-2xl sm:text-4xl font-serif font-bold text-[#F7F7F5]">
                {String(item.value).padStart(2, "0")}
              </span>
              <span className="text-[10px] sm:text-xs font-medium tracking-widest text-[#8AA898] mt-1">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* Subscription Form */}
        <div className="w-full max-w-md">
          {submitted ? (
            <div className="flex items-center justify-center gap-2 p-4 rounded-2xl bg-[#142E20] border border-[#2E5A44] text-[#C5D8CD] font-medium text-sm">
              <CheckCircle2 className="w-5 h-5 text-[#8AA898]" /> You’re on the list! We’ll notify you when we open our doors.
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row items-center gap-2 bg-[#142E20]/90 border border-[#2E5A44] rounded-2xl p-2 shadow-2xl backdrop-blur-xl"
            >
              <div className="relative w-full">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8AA898]" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  required
                  className="w-full pl-10 pr-4 py-3 bg-[#1C3D2B]/80 border border-[#2E5A44] rounded-xl text-sm text-[#F7F7F5] placeholder:text-[#6E8A7B] focus:outline-none focus:ring-2 focus:ring-[#8AA898]/50 transition-all"
                />
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#F7F7F5] hover:bg-[#E0E0DC] text-[#1C3D2B] font-semibold text-sm transition-all shadow-lg whitespace-nowrap"
              >
                Notify Me
              </button>
            </form>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 w-full max-w-6xl mx-auto px-6 py-6 text-center text-xs text-[#8AA898] border-t border-[#2E5A44]/40">
        <p>© {new Date().getFullYear()} Sunday Houses (sundayhouses.com). All rights reserved.</p>
      </footer>
    </div>
  );
}
