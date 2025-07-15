"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-between overflow-hidden bg-night text-white">
      {/* Starry background overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <StarField />
      </div>
      {/* Nebula fog effect for extra galaxy vibes */}
      <div className="nebula" />
      <main className="relative z-10 flex flex-col items-center justify-center flex-1 w-full px-2 sm:px-4 py-12 sm:py-24 gap-8 sm:gap-12">
        <h1 className="text-3xl sm:text-6xl font-extrabold tracking-tight text-center drop-shadow-lg">MyTech Padu Solutions</h1>
        <h2 className="text-lg sm:text-2xl font-medium text-center max-w-xs sm:max-w-2xl opacity-90">
          Empowering Your Digital Future<br/>
          <span className="block mt-2 text-base sm:text-xl font-light" style={{color: 'var(--cosmic-accent)'}}>Innovative IT & Software Development for Modern Businesses</span>
        </h2>
        <p className="text-base sm:text-lg text-center text-slate-300 max-w-2xl mt-2 mb-4">
          We are a passionate team of technology experts dedicated to delivering high-quality, scalable, and secure software solutions. From web and mobile app development to cloud integration and digital transformation, we help businesses thrive in a rapidly evolving digital landscape.
        </p>
        <div className="flex flex-col md:flex-row gap-6 sm:gap-8 w-full max-w-xs sm:max-w-4xl justify-center mt-6 sm:mt-8">
          <ServiceCard
            title="App Development"
            description="Modern, scalable web and mobile applications built with the latest technologies. We turn your ideas into powerful digital products that drive growth and engagement."
            icon="💻"
          />
          <ServiceCard
            title="Custom Software Solutions"
            description="Tailored software to solve your unique business challenges. Our solutions are engineered for reliability, security, and long-term success."
            icon="🛠️"
          />
          <ServiceCard
            title="IT Consulting & Support"
            description="Expert guidance and ongoing support for your digital journey. We help you make the right technology choices and ensure your systems run smoothly."
            icon="🤝"
          />
        </div>
      </main>
      <footer className="relative z-10 w-full flex flex-col items-center py-4 sm:py-6 bg-black/60 backdrop-blur-sm border-t border-white/10">
        <p className="text-xs sm:text-sm text-slate-300">&copy; {new Date().getFullYear()} MyTech Padu Solutions. All rights reserved.</p>
      </footer>
    </div>
  );
}

function ServiceCard({ title, description, icon }) {
  return (
    <div className="bg-black gempak-glow rounded-xl shadow-lg p-6 flex flex-col items-center w-full max-w-xs backdrop-blur-md">
      <div className="text-4xl mb-2 animate-pulse">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-base text-white text-center">{description}</p>
    </div>
  );
}

// Simple star field animation using canvas
function StarField() {
  const canvasRef = useRef(null);
  const cursorPos = useRef({ x: 0.5, y: 0.5 });
  const fireState = useRef({ active: false, t: 0 });
  const lastMove = useRef(Date.now());
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationId;
    // Galaxy spiral parameters
    const spiralStars = 100;
    const spiralArms = 4;
    const spiralSpread = 0.45;
    const spiralTwist = 2.5;
    // Precompute spiral galaxy star base positions
    const spiralBase = Array.from({ length: spiralStars }, (_, i) => {
      const arm = i % spiralArms;
      const t = Math.random() * 1.0 + (i / spiralStars) * 0.7;
      const baseAngle = arm * ((2 * Math.PI) / spiralArms) + t * spiralTwist + Math.random() * 0.2;
      const radius = Math.pow(t, 1.5) * spiralSpread + Math.random() * 0.04;
      return {
        baseAngle,
        radius,
        r: Math.random() * 1.2 + 0.5,
        o: Math.random() * 0.5 + 0.5,
        tw: Math.random() * 2,
        twSpeed: Math.random() * 1.5 + 0.5, // varied twinkle speed
        shiny: Math.random() < 0.08, // reduce shiny stars
        flare: Math.random() < 0.04, // reduce flare stars
        phase: Math.random() * Math.PI * 2,
      };
    });
    // Add random background stars
    const bgStars = Array.from({ length: 40 }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: Math.random() * 1.1 + 0.2,
      o: Math.random() * 0.4 + 0.3,
      tw: Math.random() * 2,
      twSpeed: Math.random() * 1.5 + 0.5,
      shiny: Math.random() < 0.04,
      flare: Math.random() < 0.02,
      phase: Math.random() * Math.PI * 2,
    }));
    // Shooting stars
    let shootingStars = [];
    function maybeAddShootingStar() {
      if (Math.random() < 0.012) { // chance per frame
        const angle = Math.random() * Math.PI / 3 + Math.PI / 6; // 30-60 deg
        const speed = Math.random() * 0.008 + 0.006;
        shootingStars.push({
          x: Math.random() * 0.7 + 0.1,
          y: Math.random() * 0.4 + 0.1,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          len: Math.random() * 0.12 + 0.08,
          life: 0,
          maxLife: Math.random() * 0.7 + 0.7,
        });
      }
    }
    function onMouseMove(e) {
      const rect = canvas.getBoundingClientRect();
      cursorPos.current.x = (e.clientX - rect.left) / rect.width;
      cursorPos.current.y = (e.clientY - rect.top) / rect.height;
      fireState.current.active = true;
      fireState.current.t = Date.now();
      lastMove.current = Date.now();
    }
    window.addEventListener("mousemove", onMouseMove);
    function draw(time) {
      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      // Animate spiral rotation
      const spiralRotation = (time / 18000) * 2 * Math.PI;
      // Draw spiral galaxy stars (centered)
      for (const star of spiralBase) {
        const angle = star.baseAngle + spiralRotation;
        const x = 0.5 + Math.cos(angle) * star.radius;
        const y = 0.5 + Math.sin(angle) * star.radius;
        let twinkle = Math.abs(Math.sin(time / (900 * star.twSpeed) + star.tw));
        let alpha = star.o * (0.6 + 0.4 * twinkle);
        let radius = star.r;
        let shadowBlur = 8;
        if (star.shiny) {
          radius = star.r * 2.2 + 0.8;
          shadowBlur = 18;
          alpha = 0.7 + 0.3 * Math.abs(Math.sin(time / (700 * star.twSpeed) + star.phase));
        }
        if (star.flare) {
          // Flare: pulse bigger and brighter
          radius *= 1.3 + 0.3 * Math.abs(Math.sin(time / (400 * star.twSpeed) + star.phase));
          shadowBlur *= 1.2;
          alpha = Math.min(1, alpha + 0.2 * Math.abs(Math.sin(time / (400 * star.twSpeed) + star.phase)));
        }
        ctx.globalAlpha = alpha;
        ctx.beginPath();
        ctx.arc(x * canvas.width, y * canvas.height, radius, 0, 2 * Math.PI);
        ctx.fillStyle = "#fff";
        ctx.shadowColor = "#fff";
        ctx.shadowBlur = shadowBlur;
        ctx.fill();
      }
      // Draw background stars
      for (const star of bgStars) {
        let twinkle = Math.abs(Math.sin(time / (900 * star.twSpeed) + star.tw));
        let alpha = star.o * (0.6 + 0.4 * twinkle);
        let radius = star.r;
        let shadowBlur = 5;
        if (star.shiny) {
          radius = star.r * 2.2 + 0.8;
          shadowBlur = 10;
          alpha = 0.7 + 0.3 * Math.abs(Math.sin(time / (700 * star.twSpeed) + star.phase));
        }
        if (star.flare) {
          radius *= 1.3 + 0.3 * Math.abs(Math.sin(time / (400 * star.twSpeed) + star.phase));
          shadowBlur *= 1.2;
          alpha = Math.min(1, alpha + 0.2 * Math.abs(Math.sin(time / (400 * star.twSpeed) + star.phase)));
        }
        ctx.globalAlpha = alpha;
        ctx.beginPath();
        ctx.arc(star.x * canvas.width, star.y * canvas.height, radius, 0, 2 * Math.PI);
        ctx.fillStyle = "#fff";
        ctx.shadowColor = "#fff";
        ctx.shadowBlur = shadowBlur;
        ctx.fill();
      }
      // Draw fire burst under cursor if moving
      let fireAlpha = 0;
      const dt = (Date.now() - fireState.current.t) / 350;
      if (Date.now() - lastMove.current < 120) {
        fireAlpha = 1;
      } else if (dt < 1) {
        fireAlpha = 1 - dt;
      } else {
        fireState.current.active = false;
      }
      if (fireAlpha > 0) {
        const cx = cursorPos.current.x * canvas.width;
        const cy = cursorPos.current.y * canvas.height;
        ctx.save();
        ctx.globalAlpha = fireAlpha;
        for (let i = 0; i < 3; i++) {
          const grad = ctx.createRadialGradient(cx, cy + 24 + i * 10, 6 + i * 4, cx, cy + 44 + i * 18, 24 + i * 12);
          if (i === 0) {
            grad.addColorStop(0, 'rgba(255,255,120,0.9)');
            grad.addColorStop(1, 'rgba(255,180,40,0)');
          } else if (i === 1) {
            grad.addColorStop(0, 'rgba(255,180,40,0.7)');
            grad.addColorStop(1, 'rgba(255,60,0,0)');
          } else {
            grad.addColorStop(0, 'rgba(255,60,0,0.4)');
            grad.addColorStop(1, 'rgba(0,0,0,0)');
          }
          ctx.beginPath();
          ctx.arc(cx, cy + 36 + i * 12, 18 + i * 10, 0, 2 * Math.PI);
          ctx.fillStyle = grad;
          ctx.fill();
        }
        ctx.restore();
      }
      // Draw and update shooting stars
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const s = shootingStars[i];
        const px = s.x * canvas.width;
        const py = s.y * canvas.height;
        const ex = px + s.len * canvas.width * s.vx * 30;
        const ey = py + s.len * canvas.height * s.vy * 30;
        ctx.save();
        ctx.globalAlpha = 1 - s.life / s.maxLife;
        ctx.strokeStyle = "#fff";
        ctx.shadowColor = "#fff";
        ctx.shadowBlur = 16;
        ctx.lineWidth = 2.2;
        ctx.beginPath();
        ctx.moveTo(px, py);
        ctx.lineTo(ex, ey);
        ctx.stroke();
        ctx.restore();
        // Update shooting star
        s.x += s.vx;
        s.y += s.vy;
        s.life += 0.025;
        if (s.life > s.maxLife) shootingStars.splice(i, 1);
      }
      maybeAddShootingStar();
      ctx.globalAlpha = 1;
      // Throttle animation to ~30 FPS
      setTimeout(() => {
        animationId = requestAnimationFrame(draw);
      }, 33);
      return;
    }
    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener("resize", resize);
    draw(0);
    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);
  return <canvas ref={canvasRef} className="w-full h-full fixed inset-0" style={{ zIndex: 0, pointerEvents: 'none' }} />;
}
