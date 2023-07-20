const $canvas = document.querySelector("#matrix");
const fontSize = 11;
let ctx;
let columns;

function size() {
  $canvas.width = $canvas.offsetWidth;
  $canvas.height = $canvas.offsetHeight;
  ctx = $canvas.getContext("2d");
  ctx.fillStyle = "#000";
  ctx.fillRect(0, 0, $canvas.width, $canvas.height);
  columns = Array(Math.floor($canvas.width / fontSize) + 1).fill(0);
}

function render() {
  setInterval(() => {
    ctx.fillStyle = "#0001";
    ctx.fillRect(0, 0, $canvas.width, $canvas.height);
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

async function matrix() {
  size();
  render();
  window.addEventListener("resize", () => {
    size();
  });
}

export default matrix;
