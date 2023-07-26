export default function ({ canvas, ctx, columns, fontSize }) {
  setInterval(() => {
    ctx.fillStyle = "#0001";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#0f0";
    ctx.font = `${fontSize}pt monospace`;
    columns.forEach((y, index) => {
      const text = String.fromCharCode(Math.random() * 122);
      ctx.fillText(text, index * fontSize, y);
      const random = 100 + Math.random() * 10000;
      if (y > random) {
        columns[index] = 0;
      } else {
        columns[index] = y + fontSize;
      }
    });
  }, 50);
}
