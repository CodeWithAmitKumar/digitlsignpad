export interface Point {
  x: number;
  y: number;
}

export interface CanvasHandlers {
  startDrawing: (event: React.MouseEvent | React.TouchEvent) => void;
  draw: (event: React.MouseEvent | React.TouchEvent) => void;
  stopDrawing: () => void;
}

export interface SignaturePadHandlers extends CanvasHandlers {
  clearCanvas: () => void;
  downloadSignature: () => void;
  setShowText: (show: boolean) => void;
  setBackgroundColor: (color: string) => void;
  setSignatureText: (text: string) => void;
  setCompressionLevel: (level: 'low' | 'medium' | 'high') => void;
}