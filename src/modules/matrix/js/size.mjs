export default function ({ canvas, ctx, columns, fontSize }) {
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
  ctx = canvas.getContext("2d");
  ctx.fillStyle = "#000";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  columns = Array(Math.floor(canvas.width / fontSize) + 1).fill(0);
  return { ctx, columns };
}
