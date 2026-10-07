import Link from "next/link";
import { Home, Mail, Compass, Calendar, Sparkles, MapPin } from "lucide-react";

export const metadata = {
  title: "Coming Soon | Sunday Houses - Cozy Homestays & Stays",
  description:
    "We are crafting unforgettable homestay experiences for travelers. Sunday Houses is launching soon.",
};

export default function MaintenancePage() {
  return (
    <div className="relative min-h-screen w-full flex flex-col justify-between bg-slate-950 text-slate-100 overflow-hidden font-sans">
      {/* Background Decorative Blur Gradients */}
      <div className="absolute top-0 left-1/4 -translate-x-1/2 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 translate-x-1/2 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Navigation Header */}
      <header className="relative z-10 w-full max-w-7xl mx-auto px-6 py-8 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-2.5 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
            <Home className="w-6 h-6" />
          </div>
          <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-amber-200 via-amber-400 to-amber-100 bg-clip-text text-transparent">
            Sunday Houses
          </span>
        </div>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-slate-900 border border-slate-800 text-amber-400/90">
          <Sparkles className="w-3.5 h-3.5" /> Launching Soon
        </span>
      </header>

      {/* Main Content Hero Section */}
      <main className="relative z-10 w-full max-w-4xl mx-auto px-6 py-12 text-center my-auto flex flex-col items-center">
        {/* Brand Tagline Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/80 border border-slate-800 text-slate-300 text-sm mb-8 backdrop-blur-md">
          <MapPin className="w-4 h-4 text-amber-400" />
          <span>Curated Homestays & Vacation Getaways</span>
        </div>

        {/* Hero Heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
          Every Day Feels Like a <br />
          <span className="bg-gradient-to-r from-amber-400 via-amber-200 to-orange-400 bg-clip-text text-transparent">
            Sunday Afternoon
          </span>
        </h1>

        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed">
          We’re putting the final touches on our platform to bring you cozy, 
          handpicked homestays and authentic local escapes across picturesque destinations. 
          Our site is currently undergoing scheduled maintenance and upgrades.
        </p>

        {/* Email Waitlist Input */}
        <div className="w-full max-w-md bg-slate-900/90 border border-slate-800 rounded-2xl p-2 shadow-2xl backdrop-blur-xl mb-12">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row items-center gap-2"
          >
            <div className="relative w-full">
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <input
                type="email"
                placeholder="Enter your email for early access..."
                required
                className="w-full pl-10 pr-4 py-3 bg-slate-950/60 border border-slate-800/80 rounded-xl text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all"
              />
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-sm transition-all shadow-lg shadow-amber-500/20 whitespace-nowrap"
            >
              Notify Me
            </button>
          </form>
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full text-left">
          <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/60 backdrop-blur-sm">
            <Compass className="w-6 h-6 text-amber-400 mb-3" />
            <h3 className="font-semibold text-slate-200 mb-1">Handpicked Stays</h3>
            <p className="text-xs text-slate-400">Unique properties tailored for relaxation and adventure.</p>
          </div>
          <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/60 backdrop-blur-sm">
            <Home className="w-6 h-6 text-emerald-400 mb-3" />
            <h3 className="font-semibold text-slate-200 mb-1">Homely Comforts</h3>
            <p className="text-xs text-slate-400">Feel right at home with warm hospitality and amenities.</p>
          </div>
          <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/60 backdrop-blur-sm">
            <Calendar className="w-6 h-6 text-orange-400 mb-3" />
            <h3 className="font-semibold text-slate-200 mb-1">Seamless Booking</h3>
            <p className="text-xs text-slate-400">Fast, secure reservations and verified hosts.</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 w-full max-w-7xl mx-auto px-6 py-6 text-center text-xs text-slate-500 border-t border-slate-900">
        <p>© {new Date().getFullYear()} Sunday Houses (sundayhouses.com). All rights reserved.</p>
      </footer>
    </div>
  );
}
