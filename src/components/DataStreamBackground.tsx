import React, { useEffect, useRef } from 'react';

const DataStreamBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let W: number, H: number;
    let animationId: number;

    function resize() {
      if (!canvas) return;
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    }
    resize();

    /* ─── Cubic Bezier helpers ─────────────────────────────────────────────── */
    function cbez(t: number, a: number, b: number, c: number, d: number) {
      const mt = 1 - t;
      return mt * mt * mt * a + 3 * mt * mt * t * b + 3 * mt * t * t * c + t * t * t * d;
    }
    function bezPt(t: number, ax: number, ay: number, bx: number, by: number, cx: number, cy: number, dx: number, dy: number) {
      return { x: cbez(t, ax, bx, cx, dx), y: cbez(t, ay, by, cy, dy) };
    }

    /* ─── Stream configs ───────────────────────────────────────────────────── */
    const N = 75;

    // Vivid color palette — no ash/silver
    const PALETTE = [
      { r: 0, g: 230, b: 190 },  // cyan-teal
      { r: 0, g: 210, b: 175 },  // teal
      { r: 20, g: 235, b: 185 },  // mint cyan
      { r: 30, g: 245, b: 145 },  // bright green
      { r: 0, g: 200, b: 215 },  // aqua
      { r: 60, g: 145, b: 255 },  // electric blue
      { r: 100, g: 160, b: 255 },  // cornflower
      { r: 150, g: 180, b: 255 },  // lavender blue
      { r: 180, g: 80, b: 255 },  // violet
      { r: 200, g: 100, b: 255 },  // purple
      { r: 230, g: 80, b: 255 },  // magenta-purple
      { r: 255, g: 60, b: 190 },  // hot pink
      { r: 255, g: 90, b: 220 },  // neon pink
      { r: 255, g: 140, b: 60 },   // orange
      { r: 255, g: 200, b: 50 },   // gold
      { r: 255, g: 100, b: 130 },  // coral
    ];

    function makeCfg(i: number) {
      const norm = (i / (N - 1)) * 2 - 1;

      // Pick a vivid color — cycle through palette with slight randomness
      const ci = (i * 3 + Math.floor(Math.random() * 2)) % PALETTE.length;
      let color = { ...PALETTE[ci] };
      let alpha = 0.78 + Math.random() * 0.20;   // high alpha — full vivid color
      let lw = 1.1 + Math.random() * 0.9;
      let dotted = false;
      let dotR = 1.5;
      let dotGap = 7;
      let speed = 2.0 + Math.random() * 2.4;
      let tail = 0.36 + Math.random() * 0.22;

      /* ── Hero bright accent lines (thicker, extra glow) ─────────────────── */
      if (i === 4) { color = { r: 0, g: 232, b: 192 }; alpha = 0.95; lw = 2.0; speed = 1.5; tail = 0.34; }
      if (i === 9) { color = { r: 185, g: 80, b: 255 }; alpha = 0.88; lw = 1.8; speed = 1.6; }
      if (i === 17) { color = { r: 0, g: 218, b: 178 }; alpha = 0.90; lw = 1.8; speed = 1.3; }
      if (i === 23) { color = { r: 255, g: 62, b: 185 }; alpha = 0.82; lw = 1.6; speed = 1.7; }
      if (i === 29) { color = { r: 20, g: 235, b: 188 }; alpha = 0.92; lw = 1.9; speed = 1.4; }
      if (i === 36) { color = { r: 55, g: 145, b: 255 }; alpha = 0.88; lw = 2.0; speed = 1.2; }
      if (i === 41) { color = { r: 30, g: 248, b: 148 }; alpha = 0.95; lw = 2.0; speed = 1.5; }
      if (i === 48) { color = { r: 255, g: 82, b: 222 }; alpha = 0.78; lw = 1.7; speed = 1.6; }
      if (i === 55) { color = { r: 160, g: 178, b: 255 }; alpha = 0.82; lw = 1.6; speed = 1.1; }
      if (i === 61) { color = { r: 255, g: 178, b: 52 }; alpha = 0.75; lw = 1.5; speed = 1.4; }
      if (i === 68) { color = { r: 0, g: 205, b: 215 }; alpha = 0.72; lw = 1.5; speed = 1.0; }
      if (i === 73) { color = { r: 205, g: 102, b: 255 }; alpha = 0.70; lw = 1.4; speed = 1.3; }

      /* ── Dotted streams — also colorful ─────────────────────────────────── */
      if ([3, 10, 19, 26, 33, 43, 51, 58, 65, 71].includes(i)) {
        dotted = true;
        const dc = PALETTE[(i * 5) % PALETTE.length];
        color = { ...dc };
        dotR = 1.4 + Math.random() * 1.4;
        dotGap = 4 + Math.random() * 5;
        alpha = 0.72 + Math.random() * 0.22;
        speed = 2.0 + Math.random() * 1.6;
        tail = 0.38 + Math.random() * 0.18;
      }

      // Outer lines — keep color, just slightly softer
      if (Math.abs(norm) > 0.85) { alpha *= 0.80; }

      return { norm, color, alpha, lw, dotted, dotR, dotGap, speed, tail };
    }

    /* ─── Stream class ─────────────────────────────────────────────────────── */
    class Stream {
      cfg: any;
      i: number;
      prog: number;

      constructor(cfg: any, i: number) {
        this.cfg = cfg;
        this.i = i;
        this.prog = -cfg.tail + Math.random() * (1 + cfg.tail * 2); // stagger
      }

      pts() {
        const ox = W * 0.5, oy = H + 10;
        const nm = this.cfg.norm;
        // Bottom spread: streams start wide across the bottom
        const startX = ox + nm * W * 0.32;
        return {
          ax: startX, ay: oy,
          bx: ox + nm * W * 0.18, by: oy - H * 0.28,
          cx: ox + nm * W * 0.52, cy: H * 0.06,
          dx: ox + nm * W * 0.82, dy: -H * 0.14,
        };
      }

      draw() {
        const { cfg } = this;
        const p = this.pts();
        const tipT = Math.min(Math.max(this.prog, 0), 1);
        const tailT = Math.min(Math.max(this.prog - cfg.tail, 0), 1);
        if (tipT <= tailT) return;

        const { r, g, b } = cfg.color;
        const STEPS = cfg.dotted
          ? Math.max(8, Math.round((tipT - tailT) * 400 / cfg.dotGap))
          : 25; // Significant reduction from 90 to 25 for smoother perf

        if (!ctx) return;

        if (!cfg.dotted) {
          // Batch non-dotted streams: one beginPath per stream instead of per segment
          ctx.beginPath();
          ctx.lineWidth = cfg.lw;
          ctx.lineCap = 'round';
          
          for (let s = 0; s <= STEPS; s++) {
            const t = tailT + (s / STEPS) * (tipT - tailT);
            const pt = bezPt(t, p.ax, p.ay, p.bx, p.by, p.cx, p.cy, p.dx, p.dy);
            if (s === 0) ctx.moveTo(pt.x, pt.y);
            else ctx.lineTo(pt.x, pt.y);
          }
          
          // Use a single stroke with a simplified alpha for performance
          ctx.strokeStyle = `rgba(${r},${g},${b},${cfg.alpha * 0.8})`;
          ctx.stroke();

          // Tip glow: simplified to a single arc with radial gradient
          if (this.prog > 0 && this.prog < 1) {
            const pt = bezPt(tipT, p.ax, p.ay, p.bx, p.by, p.cx, p.cy, p.dx, p.dy);
            ctx.beginPath();
            const gr = ctx.createRadialGradient(pt.x, pt.y, 0, pt.x, pt.y, cfg.lw * 6);
            gr.addColorStop(0, `rgba(${r},${g},${b},${cfg.alpha})`);
            gr.addColorStop(1, `rgba(${r},${g},${b},0)`);
            ctx.fillStyle = gr;
            ctx.arc(pt.x, pt.y, cfg.lw * 6, 0, Math.PI * 2);
            ctx.fill();
          }

        } else {
          // Dotted stream
          for (let s = 0; s < STEPS; s++) {
            const t = tailT + (s / STEPS) * (tipT - tailT);
            const pt = bezPt(t, p.ax, p.ay, p.bx, p.by, p.cx, p.cy, p.dx, p.dy);
            const fr = s / STEPS;
            const a = cfg.alpha * Math.pow(fr, 0.9);  // dots stay bright throughout tail
            const rr = cfg.dotR * (0.3 + fr * 0.9);
            ctx.beginPath();
            ctx.arc(pt.x, pt.y, rr, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${r},${g},${b},${a})`;
            ctx.fill();
          }
        }
      }

      update() {
        this.prog += this.cfg.speed * 0.0034;
        if (this.prog > 1 + this.cfg.tail) {
          this.prog = -this.cfg.tail;
        }
      }
    }

    /* ─── Build streams ────────────────────────────────────────────────────── */
    let streams: Stream[] = [];
    function build() {
      streams = [];
      for (let i = 0; i < N; i++) streams.push(new Stream(makeCfg(i), i));
    }
    
    const handleResize = () => {
      resize();
      build();
    };
    
    window.addEventListener('resize', handleResize);

    /* ─── Background Optimized ──────────────────────────────────────── */
    function drawBG() {
      if (!ctx) return;
      // Clear the canvas efficiently
      ctx.clearRect(0, 0, W, H);
    }

    /* ─── Main loop ────────────────────────────────────────────────────────── */
    function loop() {
      drawBG();
      for (const s of streams) { s.draw(); s.update(); }
      animationId = requestAnimationFrame(loop);
    }

    // Defer heavy canvas init by 50ms so React can finish painting the page DOM first
    const startTimer = setTimeout(() => {
      build();
      loop();
    }, 50);

    return () => {
      clearTimeout(startTimer);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden" 
      style={{ 
        background: '#090d1e',
        backgroundImage: `
          radial-gradient(circle at 8% 100%, rgba(0,165,130,0.24) 0%, rgba(0,110,95,0.08) 40%, transparent 70%),
          radial-gradient(circle at 78% 100%, rgba(140,50,220,0.38) 0%, rgba(100,30,180,0.15) 40%, transparent 70%),
          radial-gradient(circle at 50% 100%, rgba(80,110,210,0.15) 0%, transparent 60%)
        `
      }}
    >
      <canvas ref={canvasRef} className="block absolute top-0 left-0 w-full h-full transform-gpu" />
      {/* Top fade out to match page background #050505 */}
      <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-[#050505] to-transparent pointer-events-none" />
      {/* Bottom fade out to match page background #050505 */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none" />
    </div>
  );
};

export default DataStreamBackground;
