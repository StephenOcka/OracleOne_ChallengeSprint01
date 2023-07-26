import size from "./js/size.mjs";
import render from "./js/render.mjs";

const fontSize = 11;
const $canvas = document.querySelector("#matrix");
let ctx;
let columns;

export default async function () {
  const si = size({ canvas: $canvas, ctx: ctx, columns: columns, fontSize: fontSize });
  ctx = si.ctx;
  columns = si.columns;
  render({ canvas: $canvas, ctx: ctx, columns: columns, fontSize: fontSize });
  window.addEventListener("resize", () => {
    const si = size({ canvas: $canvas, ctx: ctx, columns: columns, fontSize: fontSize });
    ctx = si.ctx;
    columns = si.columns;
  });
}
