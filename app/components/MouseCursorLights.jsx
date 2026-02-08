'use client';

import React, { useEffect, useState } from 'react';

const MouseCursorLights = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* Violet Orb */}
      <div
        className="fixed w-96 h-96 rounded-full pointer-events-none z-0 transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
      
      {/* Emerald Orb - offset slightly */}
      <div
        className="fixed w-96 h-96 rounded-full pointer-events-none z-0 transition-all duration-500 ease-out"
        style={{
          left: mousePosition.x - 192 + 50,
          top: mousePosition.y - 192 + 50,
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
    </>
  );
};

export default MouseCursorLights;