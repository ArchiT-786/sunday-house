"use client";

import React, { useState, useEffect } from "react";
import { Home, Mail, Sparkles, MapPin, CheckCircle2 } from "lucide-react";

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
    <div className="relative min-h-screen w-full flex flex-col justify-between bg-[#1c1815] text-[#f4efe8] overflow-hidden font-sans">
      {/* Soft Ambient Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#c88a4b]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[500px] h-[500px] bg-[#9a5d2e]/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Navigation / Brand Header */}
      <header className="relative z-10 w-full max-w-6xl mx-auto px-6 py-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-2xl bg-[#c88a4b]/15 border border-[#c88a4b]/30 text-[#e6a86c]">
            <Home className="w-6 h-6" />
          </div>
          <span className="text-2xl font-serif font-bold tracking-tight bg-gradient-to-r from-[#f4efe8] via-[#e6a86c] to-[#c88a4b] bg-clip-text text-transparent">
            Sunday Houses
          </span>
        </div>
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium bg-[#2a231d] border border-[#3e342b] text-[#e6a86c]">
          <Sparkles className="w-3.5 h-3.5" /> Launching Soon
        </span>
      </header>

      {/* Main Content Hero */}
      <main className="relative z-10 w-full max-w-4xl mx-auto px-6 py-10 text-center my-auto flex flex-col items-center">
        {/* Subtitle Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2a231d]/90 border border-[#3e342b] text-[#d6c7b2] text-sm mb-8 backdrop-blur-md">
          <MapPin className="w-4 h-4 text-[#e6a86c]" />
          <span>Curated Homestays & Peaceful Escapes</span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif tracking-tight text-white mb-6 leading-tight">
          Every day feels like a Sunday. <br />
          <span className="bg-gradient-to-r from-[#e6a86c] via-[#f0c396] to-[#c88a4b] bg-clip-text text-transparent">
            Your getaway is almost ready.
          </span>
        </h1>

        <p className="text-base sm:text-lg text-[#b8a795] max-w-2xl mb-10 leading-relaxed">
          We are handpicking unique homestays and cozy sanctuaries for your next trip. 
          Our platform will be live on <span className="text-[#f4efe8] font-medium">October 11 at 11:59 PM</span>.
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
              className="flex flex-col items-center justify-center p-3 sm:p-5 rounded-2xl bg-[#2a231d]/80 border border-[#3e342b] backdrop-blur-md shadow-xl"
            >
              <span className="text-2xl sm:text-4xl font-serif font-bold text-[#e6a86c]">
                {String(item.value).padStart(2, "0")}
              </span>
              <span className="text-[10px] sm:text-xs font-semibold tracking-widest text-[#a3917c] mt-1">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* Early Access Email Subscription */}
        <div className="w-full max-w-md">
          {submitted ? (
            <div className="flex items-center justify-center gap-2 p-4 rounded-2xl bg-[#2a231d] border border-[#c88a4b]/40 text-[#e6a86c] font-medium text-sm animate-fade-in">
              <CheckCircle2 className="w-5 h-5" /> You’re on the list! We’ll notify you at launch.
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row items-center gap-2 bg-[#2a231d]/90 border border-[#3e342b] rounded-2xl p-2 shadow-2xl backdrop-blur-xl"
            >
              <div className="relative w-full">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#a3917c]" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  required
                  className="w-full pl-10 pr-4 py-3 bg-[#1c1815]/80 border border-[#3e342b] rounded-xl text-sm text-[#f4efe8] placeholder:text-[#807060] focus:outline-none focus:ring-2 focus:ring-[#c88a4b]/50 transition-all"
                />
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#c88a4b] hover:bg-[#d89754] text-[#1c1815] font-semibold text-sm transition-all shadow-lg shadow-[#c88a4b]/20 whitespace-nowrap"
              >
                Notify Me
              </button>
            </form>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 w-full max-w-6xl mx-auto px-6 py-6 text-center text-xs text-[#807060] border-t border-[#2a231d]">
        <p>© {new Date().getFullYear()} Sunday Houses (sundayhouses.com). All rights reserved.</p>
      </footer>
    </div>
  );
}
