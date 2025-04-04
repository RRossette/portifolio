import React, { useEffect, useRef } from "react";

interface AnimatedBackgroundProps {
  heroRef: React.RefObject<HTMLDivElement>;
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ heroRef }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let width: number, height: number;
    let ctx: CanvasRenderingContext2D | null = null;
    let points: any[] = [];
    let target = { x: 0, y: 0 };
    let animateHeader = true;
    let isMobile = window.innerWidth <= 768; 

    const initHeader = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      target = { x: width / 2, y: height / 2 };

      if (headerRef.current) {
        headerRef.current.style.height = `${height}px`;
      }

      const canvas = canvasRef.current;
      if (!canvas) return;

      canvas.width = width;
      canvas.height = height;
      ctx = canvas.getContext("2d");

      points = [];
      for (let x = 0; x < width; x += width / (isMobile ? 15 : 20)) {
        for (let y = 0; y < height; y += height / (isMobile ? 15 : 20)) {
          const px = x + Math.random() * width / 20;
          const py = y + Math.random() * height / 20;
          const p = { x: px, originX: px, y: py, originY: py };
          points.push(p);
        }
      }

      for (let i = 0; i < points.length; i++) {
        const p1 = points[i];
        const closest = points
          .filter((p2) => p1 !== p2)
          .sort((a, b) => getDistance(p1, a) - getDistance(p1, b))
          .slice(0, 5);
        p1.closest = closest;
        p1.circle = new Circle(
          p1,
          isMobile ? 1.5 + Math.random() * 1.5 : 2 + Math.random() * 2,
          "rgba(255,255,255,0.3)"
        );
      }
    };

    class Circle {
      pos: any;
      radius: number;
      color: string;
      active: number = 0;

      constructor(pos: any, radius: number, color: string) {
        this.pos = pos;
        this.radius = radius;
        this.color = color;
      }

      draw() {
        if (!ctx || this.active <= 0) return;
        ctx.beginPath();
        ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = `rgba(156,217,249,${this.active})`;
        ctx.fill();
      }
    }

    const animate = () => {
      if (!ctx || !target) return;
      ctx.clearRect(0, 0, width, height);
      for (let p of points) {
        let distance = getDistance(target, p);
        p.active = distance < (isMobile ? 3000 : 4000) ? 0.3 : distance < (isMobile ? 15000 : 20000) ? 0.1 : 0;
        p.circle.active = distance < (isMobile ? 3000 : 4000) ? 0.6 : distance < (isMobile ? 15000 : 20000) ? 0.3 : 0;
        drawLines(p);
        p.circle.draw();
      }
      requestAnimationFrame(animate);
    };

    const drawLines = (p: any) => {
      if (!p.active || !ctx) return;
      for (let i = 0; i < p.closest.length; i++) {
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.closest[i].x, p.closest[i].y);
        ctx.strokeStyle = `rgba(156,217,249,${p.active})`;
        ctx.stroke();
      }
    };

    const getDistance = (p1: any, p2: any): number => {
      return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
    };

    const updateTarget = (x: number, y: number) => {
      target.x = x;
      target.y = y;
    };

    const mouseMove = (e: MouseEvent) => updateTarget(e.pageX, e.pageY);

    const touchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        updateTarget(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    const scrollCheck = () => {
      if (heroRef.current) {
        const heroTop = heroRef.current.getBoundingClientRect().top;
        animateHeader = heroTop <= window.innerHeight;
      }
    };

    const resize = () => {
      isMobile = window.innerWidth <= 768;
      initHeader();
    };

    initHeader();
    animate();
    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("touchmove", touchMove);
    window.addEventListener("scroll", scrollCheck);
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("touchmove", touchMove);
      window.removeEventListener("scroll", scrollCheck);
      window.removeEventListener("resize", resize);
    };
  }, [heroRef]);

  return (
    <div
      ref={headerRef}
      id="large-header"
      style={{
        position: "absolute",
        width: "100%",
        height: "100vh",
        background: "#333",
        overflow: "hidden",
        zIndex: -1,
      }}
    >
      <canvas ref={canvasRef} id="demo-canvas" />
    </div>
  );
};

export default AnimatedBackground;
