"use client";

import { useEffect, useRef, useState } from "react";

export default function OrbCursor() {
  const orbRef = useRef<HTMLDivElement | null>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const position = useRef({ x: 0, y: 0 });
  const animationFrame = useRef<number | null>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      mouse.current.x = event.clientX;
      mouse.current.y = event.clientY;
    };

    const handleOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest("a, button");
      setIsHovering(Boolean(interactive));
    };

    const animate = () => {
      position.current.x += (mouse.current.x - position.current.x) * 0.12;
      position.current.y += (mouse.current.y - position.current.y) * 0.12;

      if (orbRef.current) {
        orbRef.current.style.transform = `translate(${position.current.x - 11}px, ${position.current.y - 11}px) ${isHovering ? "scale(1.9)" : "scale(1)"}`;
      }

      animationFrame.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseover", handleOver);
    animationFrame.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handleOver);
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, [isHovering]);

  return <div ref={orbRef} className="orb-cursor" />;
}