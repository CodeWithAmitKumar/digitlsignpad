export function getCanvasContext(canvas: HTMLCanvasElement | null) {
  if (!canvas) return null;
  return canvas.getContext('2d');
}

export function clearCanvasRect(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  backgroundColor: string
) {
  ctx.fillStyle = backgroundColor;
  ctx.fillRect(0, 0, width, height);
}

export function drawText(
  ctx: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  font = '20px Arial',
  color = '#000000'
) {
  ctx.font = font;
  ctx.fillStyle = color;
  ctx.fillText(text, x, y);
}