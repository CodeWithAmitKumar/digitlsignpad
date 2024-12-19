import { useRef, useState, useEffect } from 'react';
import imageCompression from 'browser-image-compression';

interface Point {
  x: number;
  y: number;
}

export function useSignaturePad() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [lastPoint, setLastPoint] = useState<Point | null>(null);
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');
  const [showText, setShowText] = useState(false);
  const [signatureText, setSignatureText] = useState('');
  const [compressionLevel, setCompressionLevel] = useState<'low' | 'medium' | 'high'>('medium');

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    if (showText && signatureText) {
      ctx.font = '20px Arial';
      ctx.fillStyle = '#000000';
      ctx.fillText(signatureText, 20, canvas.height - 30);
    }
  }, [backgroundColor, showText, signatureText]);

  const getCoordinates = (event: MouseEvent | TouchEvent): Point | null => {
    if (!canvasRef.current) return null;

    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();

    if (event instanceof MouseEvent) {
      return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
      };
    } else {
      const touch = event.touches[0];
      return {
        x: touch.clientX - rect.left,
        y: touch.clientY - rect.top
      };
    }
  };

  const startDrawing = (event: React.MouseEvent | React.TouchEvent) => {
    event.preventDefault();
    const point = getCoordinates(event.nativeEvent);
    if (!point) return;

    setIsDrawing(true);
    setLastPoint(point);
  };

  const draw = (event: React.MouseEvent | React.TouchEvent) => {
    event.preventDefault();
    if (!isDrawing || !lastPoint || !canvasRef.current) return;

    const point = getCoordinates(event.nativeEvent);
    if (!point) return;

    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;

    ctx.beginPath();
    ctx.moveTo(lastPoint.x, lastPoint.y);
    ctx.lineTo(point.x, point.y);
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
    ctx.stroke();

    setLastPoint(point);
  };

  const stopDrawing = () => {
    setIsDrawing(false);
    setLastPoint(null);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    if (showText && signatureText) {
      ctx.font = '20px Arial';
      ctx.fillStyle = '#000000';
      ctx.fillText(signatureText, 20, canvas.height - 30);
    }
  };

  const downloadSignature = async () => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const dataUrl = canvas.toDataURL('image/jpeg');
    
    const response = await fetch(dataUrl);
    const blob = await response.blob();

    const options = {
      maxSizeMB: compressionLevel === 'low' ? 2 : compressionLevel === 'medium' ? 1 : 0.5,
      maxWidthOrHeight: 1000,
      useWebWorker: true
    };

    try {
      const compressedFile = await imageCompression(blob, options);
      const compressedUrl = URL.createObjectURL(compressedFile);
      
      const link = document.createElement('a');
      link.href = compressedUrl;
      link.download = 'signature.jpg';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(compressedUrl);
    } catch (error) {
      console.error('Error compressing image:', error);
    }
  };

  return {
    canvasRef,
    isDrawing,
    backgroundColor,
    showText,
    signatureText,
    compressionLevel,
    startDrawing,
    draw,
    stopDrawing,
    clearCanvas,
    downloadSignature,
    setShowText,
    setBackgroundColor,
    setSignatureText,
    setCompressionLevel
  };
}