class matrix {
  static #$canvas = document.querySelector("#matrix");
  static #fontSize = 11;
  static #ctx;
  static #columns;

  static #size() {
    matrix.#$canvas.width = matrix.#$canvas.offsetWidth;
    matrix.#$canvas.height = matrix.#$canvas.offsetHeight;
    matrix.#ctx = matrix.#$canvas.getContext("2d");
    matrix.#ctx.fillStyle = "#000";
    matrix.#ctx.fillRect(0, 0, matrix.#$canvas.width, matrix.#$canvas.height);
    matrix.#columns = Array(
      Math.floor(matrix.#$canvas.width / matrix.#fontSize) + 1
    ).fill(0);
  }

  static #render() {
    setInterval(() => {
      matrix.#ctx.fillStyle = "#0001";
      matrix.#ctx.fillRect(0, 0, matrix.#$canvas.width, matrix.#$canvas.height);
      matrix.#ctx.fillStyle = "#0f0";
      matrix.#ctx.font = `${matrix.#fontSize}pt monospace`;
      matrix.#columns.forEach((y, index) => {
        const text = String.fromCharCode(Math.random() * 122);
        matrix.#ctx.fillText(text, index * matrix.#fontSize, y);
        const random = 100 + Math.random() * 10000;
        if (y > random) {
          matrix.#columns[index] = 0;
        } else {
          matrix.#columns[index] = y + matrix.#fontSize;
        }
      });
    }, 50);
  }

  static async init() {
    matrix.#size();
    matrix.#render();
    window.addEventListener("resize", () => {
      matrix.#size();
    });
  }
}

const animation = Object.freeze({
  matrix,
});

export default animation;
