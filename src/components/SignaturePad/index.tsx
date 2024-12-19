import React from 'react';
import Canvas from './Canvas';
import Controls from './Controls';
import { useSignaturePad } from './useSignaturePad';

export default function SignaturePad() {
  const {
    canvasRef,
    backgroundColor,
    showText,
    signatureText,
    compressionLevel,
    handlers
  } = useSignaturePad();

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
            Digital Signature Pad
          </h2>
          
          <Controls
            backgroundColor={backgroundColor}
            showText={showText}
            signatureText={signatureText}
            compressionLevel={compressionLevel}
            handlers={handlers}
          />
        </div>

        <Canvas
          canvasRef={canvasRef}
          handlers={handlers}
        />
      </div>
    </div>
  );
}