"use client";
import { useEffect, useRef } from "react";
export default function StarField() {
  const canvasRef = useRef(null);
  const cursorPos = useRef({ x: 0.5, y: 0.5 });
  const fireState = useRef({ active: false, t: 0 });
  const lastMove = useRef(Date.now());
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationId;
    // Galaxy spiral parameters
    const spiralStars = 220;
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
        shiny: Math.random() < 0.12,
        flare: Math.random() < 0.08,
        phase: Math.random() * Math.PI * 2,
      };
    });
    // Add random background stars
    const bgStars = Array.from({ length: 80 }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: Math.random() * 1.1 + 0.2,
      o: Math.random() * 0.4 + 0.3,
      tw: Math.random() * 2,
      twSpeed: Math.random() * 1.5 + 0.5,
      shiny: Math.random() < 0.08,
      flare: Math.random() < 0.04,
      phase: Math.random() * Math.PI * 2,
    }));
    // Shooting stars
    let shootingStars = [];
    function maybeAddShootingStar() {
      if (Math.random() < 0.012) {
        const angle = Math.random() * Math.PI / 3 + Math.PI / 6;
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
        let shadowBlur = 16;
        if (star.shiny) {
          radius = star.r * 2.2 + 0.8;
          shadowBlur = 36;
          alpha = 0.7 + 0.3 * Math.abs(Math.sin(time / (700 * star.twSpeed) + star.phase));
        }
        if (star.flare) {
          radius *= 1.5 + 0.5 * Math.abs(Math.sin(time / (400 * star.twSpeed) + star.phase));
          shadowBlur *= 1.5;
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
        let shadowBlur = 10;
        if (star.shiny) {
          radius = star.r * 2.2 + 0.8;
          shadowBlur = 22;
          alpha = 0.7 + 0.3 * Math.abs(Math.sin(time / (700 * star.twSpeed) + star.phase));
        }
        if (star.flare) {
          radius *= 1.5 + 0.5 * Math.abs(Math.sin(time / (400 * star.twSpeed) + star.phase));
          shadowBlur *= 1.5;
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
      animationId = requestAnimationFrame(draw);
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
      cancelAnimationFrame(animationId);
    };
  }, []);
  return (
    <>
      <canvas ref={canvasRef} className="w-full h-full fixed inset-0" style={{ zIndex: 0, pointerEvents: 'none' }} />
      <img
        src="/circuit-overlay.svg"
        alt="circuit overlay"
        className="w-full h-full fixed inset-0 pointer-events-none opacity-20 mix-blend-lighten z-10"
        draggable={false}
      />
    </>
  );
} 