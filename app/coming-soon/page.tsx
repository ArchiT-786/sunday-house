<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sunday Houses - Homestay & Tourist Services | Coming Soon</title>
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@600;700;900&family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Montserrat:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&display=swap" rel="stylesheet">
    <!-- FontAwesome & Canvas Confetti -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js"></script>

    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        serif: ['Playfair Display', 'Georgia', 'serif'],
                        garamond: ['Cormorant Garamond', 'serif'],
                        cinzel: ['Cinzel Decorative', 'serif'],
                        sans: ['Montserrat', 'sans-serif'],
                    },
                    colors: {
                        gold: {
                            100: '#FFF2D4',
                            200: '#FFE19A',
                            300: '#F5C962',
                            400: '#E6AF33',
                            500: '#D49B1C',
                            600: '#AA770E',
                            700: '#805505',
                        }
                    }
                }
            }
        }
    </script>

    <style>
        /* Custom Custom Scroll & Viewport Lock */
        html, body {
            height: 100%;
            width: 100%;
            margin: 0;
            padding: 0;
            overflow: hidden;
            background-color: #030712;
            color: #f8fafc;
            font-family: 'Montserrat', sans-serif;
        }

        /* Gold Gradient Text */
        .text-gold-gradient {
            background: linear-gradient(135deg, #FFF0C9 0%, #F3CA65 35%, #E6AF33 70%, #9E7216 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .text-gold-light {
            background: linear-gradient(180deg, #FFFFFF 0%, #FFEBA3 50%, #D49B1C 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        /* Glassmorphism Cards */
        .glass-card {
            background: rgba(15, 23, 42, 0.65);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            border: 1px solid rgba(230, 175, 51, 0.25);
            box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }

        .glass-button {
            background: linear-gradient(135deg, #E6AF33 0%, #C48A10 100%);
            box-shadow: 0 8px 25px rgba(212, 155, 28, 0.35);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .glass-button:hover {
            background: linear-gradient(135deg, #F3CA65 0%, #D49B1C 100%);
            box-shadow: 0 12px 35px rgba(230, 175, 51, 0.5);
            transform: translateY(-2px);
        }

        /* Animated Ken Burns Backdrop */
        .bg-kenburns {
            animation: kenburns 35s infinite alternate ease-in-out;
        }

        @keyframes kenburns {
            0% { transform: scale(1) translate(0, 0); }
            50% { transform: scale(1.08) translate(-1%, -1%); }
            100% { transform: scale(1.15) translate(1%, 0.5%); }
        }

        /* Drifting Clouds Animation */
        .cloud-layer-1 {
            background: url('https://raw.githubusercontent.com/sohitm/assets/main/cloud1.png') repeat-x;
            background-size: contain;
            animation: driftClouds 60s linear infinite;
            opacity: 0.25;
        }

        .cloud-layer-2 {
            background: url('https://raw.githubusercontent.com/sohitm/assets/main/cloud2.png') repeat-x;
            background-size: contain;
            animation: driftClouds 40s linear infinite reverse;
            opacity: 0.18;
        }

        @keyframes driftClouds {
            0% { background-position: 0 0; }
            100% { background-position: 2000px 0; }
        }

        /* Logo Shimmer & Soft Float */
        .logo-float {
            animation: logoFloat 6s ease-in-out infinite, logoGlow 4s ease-in-out infinite alternate;
        }

        @keyframes logoFloat {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-6px) rotate(0.5deg); }
        }

        @keyframes logoGlow {
            0% { filter: drop-shadow(0 0 15px rgba(230, 175, 51, 0.2)); }
            100% { filter: drop-shadow(0 0 30px rgba(230, 175, 51, 0.45)); }
        }

        /* Countdown Number Pulse on Tick */
        .number-tick {
            animation: tickPulse 0.4s ease-out;
        }

        @keyframes tickPulse {
            0% { transform: scale(1.15); filter: brightness(1.4); }
            100% { transform: scale(1); filter: brightness(1); }
        }

        /* Subtle Light Beam Glow */
        .sun-beam {
            background: radial-gradient(circle at 50% 20%, rgba(230, 175, 51, 0.18) 0%, rgba(3, 7, 18, 0) 70%);
        }
    </style>
</head>
<body class="relative h-screen w-screen flex flex-col justify-between items-center bg-slate-950 text-slate-100 overflow-hidden select-none">

    <!-- Background Mountain Landscape with Vignette -->
    <div className="absolute inset-0 z-0">
        <div class="absolute inset-0 bg-cover bg-center bg-no-repeat bg-kenburns opacity-45 pointer-events-none" 
             style="background-image: url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2560&auto=format&fit=crop');">
        </div>
        
        <!-- Drifting Mist / Clouds -->
        <div class="absolute inset-0 cloud-layer-1 pointer-events-none"></div>
        <div class="absolute inset-0 cloud-layer-2 pointer-events-none"></div>

        <!-- Radial Gold Sun Beam & Dark Luxury Vignette -->
        <div class="absolute inset-0 sun-beam pointer-events-none"></div>
        <div class="absolute inset-0 bg-gradient-to-b from-slate-950/85 via-slate-950/50 to-slate-950/95 pointer-events-none"></div>
        <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none"></div>
    </div>

    <!-- Floating Canvas Stardust Particles -->
    <canvas id="particlesCanvas" class="absolute inset-0 z-0 pointer-events-none"></canvas>

    <!-- Navigation Header -->
    <header class="relative z-20 w-full max-w-7xl mx-auto px-6 py-4 sm:py-6 flex items-center justify-between shrink-0">
        <!-- Logo Container with Embedded Inline Vector Logo Badge -->
        <div class="flex items-center gap-3 cursor-pointer group" id="logoContainer" title="Click to trigger golden sparkle effect">
            <div class="relative w-14 h-14 sm:w-18 sm:h-18 logo-float transition-transform duration-500 group-hover:scale-105">
                <!-- Direct Vector Replica of Sunday Houses Badge Logo -->
                <svg viewBox="0 0 500 500" class="w-full h-full drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stop-color="#73A9D9"/>
                            <stop offset="60%" stop-color="#A1C4E6"/>
                            <stop offset="100%" stop-color="#DDEBFA"/>
                        </linearGradient>
                        <linearGradient id="sunGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stop-color="#FF7A00"/>
                            <stop offset="100%" stop-color="#FFA800"/>
                        </linearGradient>
                        <linearGradient id="goldBorder" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stop-color="#FFE19A"/>
                            <stop offset="50%" stop-color="#E6AF33"/>
                            <stop offset="100%" stop-color="#805505"/>
                        </linearGradient>
                    </defs>

                    <!-- Outer Cream/Beige Badge Circle Base -->
                    <circle cx="250" cy="250" r="240" fill="#F4EFE6" stroke="#223326" stroke-width="6"/>

                    <!-- Tribal Pattern Ring -->
                    <circle cx="250" cy="250" r="225" fill="none" stroke="#233528" stroke-width="22"/>
                    <path d="M 250 28 A 222 222 0 0 1 472 250 A 222 222 0 0 1 250 472 A 222 222 0 0 1 28 250 A 222 222 0 0 1 250 28" 
                          fill="none" stroke="#E2C17D" stroke-width="4" stroke-dasharray="12 8 4 8"/>

                    <!-- Sky Inner Window -->
                    <path d="M 100 280 A 160 160 0 0 1 400 280 L 400 320 L 100 320 Z" fill="url(#skyGrad)"/>

                    <!-- Sun -->
                    <circle cx="285" cy="185" r="28" fill="url(#sunGrad)"/>

                    <!-- Birds -->
                    <path d="M 205 168 Q 212 162 218 168 Q 224 162 231 168" fill="none" stroke="#1C2D22" stroke-width="3" stroke-linecap="round"/>
                    <path d="M 235 158 Q 239 154 243 158 Q 247 154 252 158" fill="none" stroke="#1C2D22" stroke-width="2.5" stroke-linecap="round"/>

                    <!-- Snowy Mountain Range -->
                    <polygon points="120,290 190,210 240,260 300,180 370,290" fill="#718BA3"/>
                    <polygon points="190,210 215,240 200,245 180,230" fill="#FFFFFF"/>
                    <polygon points="300,180 325,220 310,225 290,215" fill="#FFFFFF"/>
                    <polygon points="240,260 255,275 235,280" fill="#E1ECF7"/>

                    <!-- Misty Pine Forest Layers -->
                    <path d="M 80 320 Q 200 300 420 320 L 420 350 L 80 350 Z" fill="#2E4A38" opacity="0.9"/>
                    <!-- Pine Trees Left -->
                    <polygon points="110,310 100,340 120,340" fill="#1C3023"/>
                    <polygon points="130,295 118,335 142,335" fill="#182B1F"/>
                    <polygon points="155,280 140,330 170,330" fill="#14241A"/>
                    <polygon points="180,290 168,335 192,335" fill="#1A2E21"/>

                    <!-- Cozy Wooden Cabin Homestay -->
                    <g transform="translate(250, 230)">
                        <!-- Main House Body -->
                        <rect x="0" y="40" width="85" height="50" fill="#945733" stroke="#1C130D" stroke-width="3"/>
                        <rect x="65" y="55" width="30" height="35" fill="#784325" stroke="#1C130D" stroke-width="3"/>
                        <!-- Roof -->
                        <polygon points="-10,40 42,10 95,40" fill="#3D291D" stroke="#1C130D" stroke-width="3"/>
                        <polygon points="55,55 80,35 105,55" fill="#3D291D" stroke="#1C130D" stroke-width="3"/>
                        <!-- Windows with Warm Yellow Glow -->
                        <rect x="12" y="48" width="18" height="15" fill="#FFD56B" stroke="#1C130D" stroke-width="2"/>
                        <rect x="42" y="48" width="18" height="15" fill="#FFD56B" stroke="#1C130D" stroke-width="2"/>
                        <rect x="72" y="62" width="14" height="14" fill="#FFAE33" stroke="#1C130D" stroke-width="2"/>
                        <!-- Chimney & Smoke -->
                        <rect x="52" y="15" width="10" height="18" fill="#544135"/>
                        <path d="M 57 12 Q 52 5 62 -2 T 57 -15" fill="none" stroke="#EAEAEA" stroke-width="3" opacity="0.6" stroke-linecap="round"/>
                    </g>

                    <!-- Green Hill Slope Right -->
                    <path d="M 200 340 Q 320 310 420 350 L 420 380 L 200 380 Z" fill="#233B2C"/>

                    <!-- Banner & Typography Arc Base -->
                    <path d="M 70 340 A 190 190 0 0 0 430 340 A 210 210 0 0 1 70 340 Z" fill="#1A2D21" stroke="#E6AF33" stroke-width="3"/>

                    <!-- Main Brand Text: SUNDAY HOUSES -->
                    <text font-family="'Cinzel Decorative', serif" font-weight="900" font-size="34" fill="#F4EFE6" stroke="#142118" stroke-width="2" text-anchor="middle">
                        <textPath href="#textArc" startOffset="50%">SUNDAY HOUSES</textPath>
                    </text>
                    <path id="textArc" d="M 85 365 A 180 180 0 0 1 415 365" fill="none"/>

                    <!-- Subtext Ribbon Arc -->
                    <path id="subTextArc" d="M 120 425 A 175 175 0 0 0 380 425" fill="none"/>
                    <path d="M 105 405 A 190 190 0 0 0 395 405 L 385 440 A 160 160 0 0 1 115 440 Z" fill="#14241A" stroke="#D49B1C" stroke-width="2"/>

                    <text font-family="'Montserrat', sans-serif" font-weight="700" font-size="15" fill="#E6AF33" letter-spacing="3" text-anchor="middle">
                        <textPath href="#subTextArc" startOffset="50%">★ HOMESTAY & TOURIST SERVICES ★</textPath>
                    </text>
                </svg>
            </div>
            <div class="hidden sm:flex flex-col">
                <span class="font-cinzel font-bold text-base tracking-widest text-slate-100 group-hover:text-amber-300 transition-colors">SUNDAY HOUSES</span>
                <span class="text-[10px] tracking-[0.2em] text-amber-400/80 uppercase font-medium">LUXURY ESCAPES</span>
            </div>
        </div>

        <!-- Launch Badge & Ambient Sound Toggle -->
        <div class="flex items-center gap-3">
            <button id="soundToggleBtn" class="p-2.5 rounded-full bg-slate-900/80 border border-amber-500/30 text-amber-300 hover:text-amber-100 hover:border-amber-400 transition-all backdrop-blur-md shadow-md text-xs flex items-center gap-2 px-3.5" title="Toggle Nature Ambient Sound">
                <i class="fa-solid fa-volume-xmark id-sound-icon"></i>
                <span class="hidden md:inline text-[11px] font-medium tracking-wider">AMBIENCE</span>
            </button>

            <span class="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-widest text-amber-200/90 bg-slate-900/80 border border-amber-500/40 backdrop-blur-md shadow-lg shadow-black/50">
                <span class="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
                <i class="fa-solid fa-sparkles text-amber-400"></i> LAUNCHING SOON
            </span>
        </div>
    </header>

    <!-- Main Center Hero Container -->
    <main class="relative z-20 w-full max-w-4xl mx-auto px-6 py-2 text-center my-auto flex flex-col items-center justify-center shrink">

        <!-- Top Tagline Pill -->
        <div class="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/70 border border-amber-500/30 text-amber-200/90 text-[11px] sm:text-xs tracking-[0.25em] uppercase mb-4 sm:mb-6 backdrop-blur-md shadow-xl">
            <i class="fa-solid fa-compass text-amber-400 text-xs"></i>
            <span>Curated Homestays & Tourist Services</span>
        </div>

        <!-- Headline -->
        <h1 class="text-4xl sm:text-6xl md:text-7xl font-serif tracking-tight text-white mb-3 sm:mb-5 leading-[1.1] drop-shadow-2xl">
            WAKE UP <br />
            <span class="font-garamond italic font-normal text-gold-gradient text-5xl sm:text-7xl md:text-8xl block mt-1">
                above the clouds.
            </span>
        </h1>

        <!-- Subtitle -->
        <p class="text-xs sm:text-base text-slate-300 max-w-xl mb-6 sm:mb-8 leading-relaxed font-light tracking-wide">
            We’re crafting peaceful escapes and handpicked homestays away from the ordinary. 
            Our platform will be live on <span class="text-amber-300 font-semibold underline underline-offset-4 decoration-amber-500/50">October 11 at 11:59 PM</span>.
        </p>

        <!-- Fancy Metallic Gold Countdown Container -->
        <div class="w-full max-w-2xl mb-6 sm:mb-8 p-1 rounded-3xl bg-gradient-to-r from-amber-500/40 via-amber-200/30 to-amber-500/40 shadow-[0_0_50px_rgba(212,155,28,0.2)]">
            <div class="grid grid-cols-4 gap-2 sm:gap-4 p-4 sm:p-6 rounded-[22px] glass-card">
                
                <!-- Days -->
                <div class="flex flex-col items-center justify-center relative">
                    <span id="cd-days" class="font-serif font-bold text-3xl sm:text-5xl md:text-6xl text-gold-light tracking-tight drop-shadow-md">00</span>
                    <span class="text-[9px] sm:text-xs font-bold tracking-[0.2em] text-amber-200/70 mt-1 sm:mt-2 uppercase">DAYS</span>
                </div>

                <!-- Divider -->
                <div class="flex flex-col items-center justify-center relative border-l border-amber-500/20">
                    <span id="cd-hours" class="font-serif font-bold text-3xl sm:text-5xl md:text-6xl text-gold-light tracking-tight drop-shadow-md">00</span>
                    <span class="text-[9px] sm:text-xs font-bold tracking-[0.2em] text-amber-200/70 mt-1 sm:mt-2 uppercase">HOURS</span>
                </div>

                <!-- Minutes -->
                <div class="flex flex-col items-center justify-center relative border-l border-amber-500/20">
                    <span id="cd-minutes" class="font-serif font-bold text-3xl sm:text-5xl md:text-6xl text-gold-light tracking-tight drop-shadow-md">00</span>
                    <span class="text-[9px] sm:text-xs font-bold tracking-[0.2em] text-amber-200/70 mt-1 sm:mt-2 uppercase">MINUTES</span>
                </div>

                <!-- Seconds -->
                <div class="flex flex-col items-center justify-center relative border-l border-amber-500/20">
                    <span id="cd-seconds" class="font-serif font-bold text-3xl sm:text-5xl md:text-6xl text-gold-light tracking-tight drop-shadow-md">00</span>
                    <span class="text-[9px] sm:text-xs font-bold tracking-[0.2em] text-amber-200/70 mt-1 sm:mt-2 uppercase">SECONDS</span>
                </div>

            </div>
        </div>

        <!-- Glassmorphism Email Form -->
        <div class="w-full max-w-md relative">
            <form id="notifyForm" class="flex flex-col sm:flex-row items-center gap-2.5 bg-slate-900/80 border border-amber-500/30 rounded-2xl p-2 shadow-2xl backdrop-blur-xl">
                <div class="relative w-full">
                    <i class="fa-regular fa-envelope absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm"></i>
                    <input type="email" id="emailInput" required placeholder="Enter your email for early access..." 
                           class="w-full pl-10 pr-4 py-3 bg-slate-950/80 border border-slate-800 rounded-xl text-xs sm:text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-amber-500/70 transition-all">
                </div>
                <button type="submit" class="w-full sm:w-auto px-6 py-3 rounded-xl glass-button text-slate-950 font-bold text-xs sm:text-sm tracking-wide whitespace-nowrap active:scale-95 flex items-center justify-center gap-2">
                    <span>Notify Me</span>
                    <i class="fa-solid fa-arrow-right text-xs"></i>
                </button>
            </form>

            <!-- Success Message Toast -->
            <div id="successToast" class="hidden absolute left-0 right-0 top-0 bottom-0 flex items-center justify-center gap-2 p-3 rounded-2xl bg-slate-900/95 border border-amber-500/50 text-amber-200 font-medium text-xs sm:text-sm backdrop-blur-xl shadow-2xl animate-fade-in">
                <i class="fa-solid fa-circle-check text-amber-400 text-lg"></i>
                <span>You're on the exclusive VIP list! See you at launch.</span>
            </div>
        </div>

    </main>

    <!-- Footer -->
    <footer class="relative z-20 w-full max-w-7xl mx-auto px-6 py-4 text-center text-[11px] text-slate-400 border-t border-slate-900/80 shrink-0 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p>© 2026 Sunday Houses (sundayhouses.com). All rights reserved.</p>
        <div class="flex items-center gap-4 text-slate-400 text-xs">
            <a href="#" class="hover:text-amber-300 transition-colors"><i class="fa-brands fa-instagram"></i></a>
            <a href="#" class="hover:text-amber-300 transition-colors"><i class="fa-brands fa-facebook-f"></i></a>
            <a href="#" class="hover:text-amber-300 transition-colors"><i class="fa-brands fa-twitter"></i></a>
        </div>
    </footer>

    <script>
        // --- 1. Dynamic Countdown Timer Target: Oct 11, 2026 23:59:00 ---
        const targetDate = new Date("2026-10-11T23:59:00").getTime();

        const daysEl = document.getElementById("cd-days");
        const hoursEl = document.getElementById("cd-hours");
        const minutesEl = document.getElementById("cd-minutes");
        const secondsEl = document.getElementById("cd-seconds");

        function updateCountdown() {
            const now = new Date().getTime();
            const diff = targetDate - now;

            if (diff > 0) {
                const days = Math.floor(diff / (1000 * 60 * 60 * 24));
                const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
                const minutes = Math.floor((diff / (1000 * 60)) % 60);
                const seconds = Math.floor((diff / 1000) % 60);

                const newSecStr = String(seconds).padStart(2, "0");
                if (secondsEl.innerText !== newSecStr) {
                    secondsEl.classList.remove("number-tick");
                    void secondsEl.offsetWidth; // Trigger reflow for animation restart
                    secondsEl.classList.add("number-tick");
                }

                daysEl.innerText = String(days).padStart(2, "0");
                hoursEl.innerText = String(hours).padStart(2, "0");
                minutesEl.innerText = String(minutes).padStart(2, "0");
                secondsEl.innerText = newSecStr;
            } else {
                daysEl.innerText = "00";
                hoursEl.innerText = "00";
                minutesEl.innerText = "00";
                secondsEl.innerText = "00";
            }
        }

        updateCountdown();
        setInterval(updateCountdown, 1000);

        // --- 2. Floating Gold Stardust Particles ---
        const canvas = document.getElementById("particlesCanvas");
        const ctx = canvas.getContext("2d");

        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        window.addEventListener("resize", () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        });

        class Particle {
            constructor() {
                this.reset();
            }

            reset() {
                this.x = Math.random() * width;
                this.y = height + Math.random() * 100;
                this.size = Math.random() * 2.2 + 0.6;
                this.speedY = Math.random() * 0.4 + 0.15;
                this.speedX = (Math.random() - 0.5) * 0.2;
                this.opacity = Math.random() * 0.7 + 0.2;
            }

            update() {
                this.y -= this.speedY;
                this.x += this.speedX;
                if (this.y < -10) this.reset();
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(243, 202, 101, ${this.opacity})`;
                ctx.shadowBlur = 8;
                ctx.shadowColor = "#E6AF33";
                ctx.fill();
            }
        }

        const particles = Array.from({ length: 45 }, () => new Particle());

        function animateParticles() {
            ctx.clearRect(0, 0, width, height);
            particles.forEach(p => {
                p.update();
                p.draw();
            });
            requestAnimationFrame(animateParticles);
        }

        animateParticles();

        // --- 3. Interactive Form Submission with Confetti ---
        const notifyForm = document.getElementById("notifyForm");
        const successToast = document.getElementById("successToast");

        notifyForm.addEventListener("submit", (e) => {
            e.preventDefault();
            
            // Trigger Gold Confetti Burst
            confetti({
                particleCount: 80,
                spread: 70,
                origin: { y: 0.7 },
                colors: ['#FFE19A', '#E6AF33', '#D49B1C', '#FFFFFF']
            });

            // Show Toast
            successToast.classList.remove("hidden");
        });

        // --- 4. Interactive Logo Sparkle Burst on Click ---
        const logoContainer = document.getElementById("logoContainer");
        logoContainer.addEventListener("click", () => {
            confetti({
                particleCount: 35,
                spread: 50,
                origin: { x: 0.1, y: 0.1 },
                colors: ['#F3CA65', '#E6AF33', '#FFFFFF']
            });
        });

        // --- 5. Web Audio Synthetic Wind Ambient Generator ---
        let audioCtx;
        let isPlaying = false;
        const soundBtn = document.getElementById("soundToggleBtn");
        const soundIcon = soundBtn.querySelector(".id-sound-icon");

        soundBtn.addEventListener("click", () => {
            if (!audioCtx) {
                audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            }

            if (!isPlaying) {
                // Generate soft ambient wind rumble
                const bufferSize = audioCtx.sampleRate * 2;
                const noiseBuffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
                const output = noiseBuffer.getChannelData(0);
                for (let i = 0; i < bufferSize; i++) {
                    output[i] = Math.random() * 2 - 1;
                }

                const whiteNoise = audioCtx.createBufferSource();
                whiteNoise.buffer = noiseBuffer;
                whiteNoise.loop = true;

                const filter = audioCtx.createBiquadFilter();
                filter.type = 'lowpass';
                filter.frequency.setValueAtTime(180, audioCtx.currentTime);

                const gainNode = audioCtx.createGain();
                gainNode.gain.setValueAtTime(0.04, audioCtx.currentTime);

                whiteNoise.connect(filter);
                filter.connect(gainNode);
                gainNode.connect(audioCtx.destination);

                whiteNoise.start();
                soundIcon.className = "fa-solid fa-volume-high text-amber-400";
                isPlaying = true;
            } else {
                audioCtx.suspend();
                soundIcon.className = "fa-solid fa-volume-xmark";
                isPlaying = false;
            }
        });
    </script>
</body>
</html>
