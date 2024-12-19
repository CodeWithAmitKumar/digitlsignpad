import React from 'react';
import type { CanvasHandlers } from './types';

interface CanvasProps {
  canvasRef: React.RefObject<HTMLCanvasElement>;
  handlers: CanvasHandlers;
}

export default function Canvas({ canvasRef, handlers }: CanvasProps) {
  const { startDrawing, draw, stopDrawing } = handlers;

  return (
    <div className="border-2 border-gray-300 dark:border-gray-600 rounded-lg">
      <canvas
        ref={canvasRef}
        width={800}
        height={300}
        className="w-full touch-none"
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
        onTouchStart={startDrawing}
        onTouchMove={draw}
        onTouchEnd={stopDrawing}
      />
    </div>
  );
}