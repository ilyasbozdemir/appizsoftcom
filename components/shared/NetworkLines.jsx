import { useEffect, useRef } from "react";

function NetworkLines() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const drawRandomCircle = () => {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const radius = Math.random() * 50 + 10;
      const color = getRandomColor();

      ctx.beginPath();
      ctx.arc(x, y, radius, 0, 2 * Math.PI);
      ctx.fillStyle = color;
      ctx.fill();
    };

    const getRandomColor = () => {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    };

    canvas.addEventListener('click', drawRandomCircle);

    return () => {
      canvas.removeEventListener('click', drawRandomCircle);
    };
  }, []);
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none",
        zIndex: -1,
      }}
    >
      <canvas ref={canvasRef} />
    </div>
  );
}

export default NetworkLines;
