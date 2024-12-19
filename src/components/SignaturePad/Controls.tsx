import React from 'react';
import { Download, Eraser, Type } from 'lucide-react';
import type { SignaturePadHandlers } from './types';

interface ControlsProps {
  backgroundColor: string;
  showText: boolean;
  signatureText: string;
  compressionLevel: 'low' | 'medium' | 'high';
  handlers: SignaturePadHandlers;
}

export default function Controls({
  backgroundColor,
  showText,
  signatureText,
  compressionLevel,
  handlers
}: ControlsProps) {
  const {
    clearCanvas,
    downloadSignature,
    setShowText,
    setBackgroundColor,
    setSignatureText,
    setCompressionLevel
  } = handlers;

  return (
    <>
      <div className="flex flex-wrap gap-4 mb-4">
        <button
          onClick={clearCanvas}
          className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
        >
          <Eraser size={20} /> Clear
        </button>
        <button
          onClick={downloadSignature}
          className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
        >
          <Download size={20} /> Download
        </button>
        <button
          onClick={() => setShowText(!showText)}
          className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          <Type size={20} /> {showText ? 'Hide Text' : 'Add Text'}
        </button>
      </div>

      <div className="flex flex-wrap gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Background Color
          </label>
          <input
            type="color"
            value={backgroundColor}
            onChange={(e) => setBackgroundColor(e.target.value)}
            className="h-10 w-20 rounded cursor-pointer"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Compression Level
          </label>
          <select
            value={compressionLevel}
            onChange={(e) => setCompressionLevel(e.target.value as 'low' | 'medium' | 'high')}
            className="block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
      </div>

      {showText && (
        <div className="mb-4">
          <input
            type="text"
            value={signatureText}
            onChange={(e) => setSignatureText(e.target.value)}
            placeholder="Enter signature text"
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      )}
    </>
  );
}