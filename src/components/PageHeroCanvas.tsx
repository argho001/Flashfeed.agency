import React, { useEffect, useRef } from 'react';

interface PageHeroCanvasProps {
  variant: 'work' | 'services' | 'contact';
}

const PageHeroCanvas: React.FC<PageHeroCanvasProps> = ({ variant }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let W: number, H: number;
    let animationId: number;

    const resize = () => {
      if (!canvas) return;
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      W = canvas.width = rect.width * dpr;
      H = canvas.height = rect.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    // Color palettes
    const palettes = {
      work: [
        { r: 139, g: 92, b: 246 },   // purple
        { r: 59, g: 130, b: 246 },    // blue
        { r: 236, g: 72, b: 153 },    // pink
        { r: 168, g: 85, b: 247 },    // violet
      ],
      services: [
        { r: 20, g: 184, b: 166 },    // teal
        { r: 59, g: 130, b: 246 },    // blue
        { r: 6, g: 182, b: 212 },     // cyan
        { r: 16, g: 185, b: 129 },    // emerald
      ],
      contact: [
        { r: 249, g: 115, b: 22 },    // orange
        { r: 236, g: 72, b: 153 },    // pink
        { r: 244, g: 63, b: 94 },     // rose
        { r: 139, g: 92, b: 246 },    // purple
      ]
    };

    const colors = palettes[variant];

    // Floating particles
    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: typeof colors[0];
      alpha: number;
      pulse: number;
      pulseSpeed: number;
    }

    // Geometric shapes
    interface Shape {
      x: number;
      y: number;
      size: number;
      rotation: number;
      rotSpeed: number;
      type: 'ring' | 'diamond' | 'cross' | 'dot-ring';
      color: typeof colors[0];
      alpha: number;
      vy: number;
    }

    const particles: Particle[] = [];
    const shapes: Shape[] = [];
    const NUM_PARTICLES = 60;
    const NUM_SHAPES = 8;
    let mouseX = -1000;
    let mouseY = -1000;

    const actualW = () => canvas.offsetWidth;
    const actualH = () => canvas.offsetHeight;

    const initParticles = () => {
      particles.length = 0;
      for (let i = 0; i < NUM_PARTICLES; i++) {
        particles.push({
          x: Math.random() * actualW(),
          y: Math.random() * actualH(),
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: 1 + Math.random() * 2.5,
          color: colors[Math.floor(Math.random() * colors.length)],
          alpha: 0.3 + Math.random() * 0.5,
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: 0.01 + Math.random() * 0.02
        });
      }
    };

    const initShapes = () => {
      shapes.length = 0;
      const types: Shape['type'][] = ['ring', 'diamond', 'cross', 'dot-ring'];
      for (let i = 0; i < NUM_SHAPES; i++) {
        shapes.push({
          x: Math.random() * actualW(),
          y: Math.random() * actualH(),
          size: 20 + Math.random() * 40,
          rotation: Math.random() * Math.PI * 2,
          rotSpeed: (Math.random() - 0.5) * 0.008,
          type: types[Math.floor(Math.random() * types.length)],
          color: colors[Math.floor(Math.random() * colors.length)],
          alpha: 0.08 + Math.random() * 0.12,
          vy: -0.15 - Math.random() * 0.3
        });
      }
    };

    const drawShape = (shape: Shape) => {
      if (!ctx) return;
      const { r, g, b } = shape.color;
      ctx.save();
      ctx.translate(shape.x, shape.y);
      ctx.rotate(shape.rotation);
      ctx.strokeStyle = `rgba(${r},${g},${b},${shape.alpha})`;
      ctx.lineWidth = 1.5;

      switch (shape.type) {
        case 'ring':
          ctx.beginPath();
          ctx.arc(0, 0, shape.size, 0, Math.PI * 2);
          ctx.stroke();
          // Inner ring
          ctx.beginPath();
          ctx.arc(0, 0, shape.size * 0.6, 0, Math.PI * 2);
          ctx.stroke();
          break;
        case 'diamond':
          ctx.beginPath();
          ctx.moveTo(0, -shape.size);
          ctx.lineTo(shape.size * 0.6, 0);
          ctx.lineTo(0, shape.size);
          ctx.lineTo(-shape.size * 0.6, 0);
          ctx.closePath();
          ctx.stroke();
          break;
        case 'cross':
          const s = shape.size * 0.7;
          ctx.beginPath();
          ctx.moveTo(-s, 0);
          ctx.lineTo(s, 0);
          ctx.moveTo(0, -s);
          ctx.lineTo(0, s);
          ctx.stroke();
          break;
        case 'dot-ring':
          const dots = 8;
          for (let d = 0; d < dots; d++) {
            const angle = (d / dots) * Math.PI * 2;
            const dx = Math.cos(angle) * shape.size;
            const dy = Math.sin(angle) * shape.size;
            ctx.beginPath();
            ctx.arc(dx, dy, 2, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${r},${g},${b},${shape.alpha * 1.5})`;
            ctx.fill();
          }
          break;
      }
      ctx.restore();
    };

    const draw = () => {
      if (!ctx) return;
      const w = actualW();
      const h = actualH();

      // Fill with solid dark background — prevents ashy transparent look
      ctx.fillStyle = '#050505';
      ctx.fillRect(0, 0, w, h);

      // Draw connections between nearby particles — Optimized
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distSq = dx * dx + dy * dy;
          
          if (distSq < 14400) { // 120^2
            const dist = Math.sqrt(distSq);
            const alpha = (1 - dist / 120) * 0.15;
            const c = p1.color;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(${c.r},${c.g},${c.b},${alpha})`;
            ctx.stroke();
          }
        }
      }

      // Draw and update particles
      for (const p of particles) {
        p.pulse += p.pulseSpeed;
        const pulseAlpha = p.alpha * (0.7 + 0.3 * Math.sin(p.pulse));

        // Mouse interaction — particles glow brighter near cursor
        const mdx = p.x - mouseX;
        const mdy = p.y - mouseY;
        const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
        const mouseBoost = mDist < 150 ? (1 - mDist / 150) * 0.6 : 0;

        const { r, g, b } = p.color;
        
        // Core dot + Glow combined
        ctx.beginPath();
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 4);
        grad.addColorStop(0, `rgba(${r},${g},${b},${(pulseAlpha + mouseBoost) * 0.5})`);
        grad.addColorStop(1, `rgba(${r},${g},${b},0)`);
        ctx.fillStyle = grad;
        ctx.arc(p.x, p.y, p.radius * 4, 0, Math.PI * 2);
        ctx.fill();

        // Core dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * (1 + mouseBoost), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r},${g},${b},${pulseAlpha + mouseBoost})`;
        ctx.fill();

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
      }

      // Draw and update shapes
      for (const s of shapes) {
        drawShape(s);
        s.rotation += s.rotSpeed;
        s.y += s.vy;
        if (s.y < -s.size * 2) {
          s.y = h + s.size * 2;
          s.x = Math.random() * w;
        }
      }

      animationId = requestAnimationFrame(draw);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const handleResize = () => {
      resize();
      initParticles();
      initShapes();
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    resize();

    // Defer heavy canvas init by 50ms so React can finish painting the page DOM first
    const startTimer = setTimeout(() => {
      initParticles();
      initShapes();
      draw();
    }, 50);

    return () => {
      clearTimeout(startTimer);
      canvas.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
    };
  }, [variant]);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden transform-gpu">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full transform-gpu" />
    </div>
  );
};

export default PageHeroCanvas;
