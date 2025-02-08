"use client";

import { useEffect, useRef } from 'react';
import { initWebGLFluid } from './webgl-fluid';
import './cursor-effect.css';

export default function CursorEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    
    // Sett full størrelse på canvas
    const canvas = canvasRef.current;
    const container = canvas.parentElement;
    if (container) {
      canvas.style.width = '100%';
      canvas.style.height = '100%';
    }
    
    initWebGLFluid(canvas);
  }, []);

  return (
    <section id="container">
      <canvas ref={canvasRef}></canvas>
    </section>
  );
} 