"use client";
import { useEffect, useState, ReactNode } from "react";

interface CursorEffectLayoutProps {
  children: ReactNode;
}

export default function CursorEffectLayout({ children }: CursorEffectLayoutProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;

      // Update the position state with the mouse position
      setPosition({ x: clientX, y: clientY });
    };

    // Add the event listener
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      // Clean up the event listener
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="relative">
        {/* Dynamic background div */}
        <div
        className="absolute inset-0 pointer-events-none"
        style={{
            background: `radial-gradient(circle at ${position.x}px ${position.y}px, rgba(29, 78, 216, 0.2), transparent 40%)`,
            zIndex: -1,
            transition: "background 0.1s ease", // Smooth transitions
            height: "100vh",
            width: "100vw",
            position: "fixed",
            top: 0,
            left: 0,
        }}
        ></div>

        {/* Page content */}
        {children}
    </section>
  );
}
