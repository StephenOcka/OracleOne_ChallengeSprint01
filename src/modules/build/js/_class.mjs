import * as esb from "esbuild";
import { minify } from "html-minifier";
import * as fs from "fs";
import { JSDOM } from "jsdom";

export default class build {
  #fileMiniHTML;
  #esBuild;
  #paramMinHTML;

  constructor({ esBuild = {}, fileMiniHTML = "", paramMinHTML = {} }) {
    this.#fileMiniHTML = fileMiniHTML;
    this.#esBuild = esBuild;
    this.#paramMinHTML = paramMinHTML;
  }

  async pack() {
    if (Object.keys(this.#esBuild).length > 0) {
      await esb.build(this.#esBuild).then(() => console.log("✔️ esBuild"));
    }
    if (this.#fileMiniHTML != "") {
      build.#minify(this.#fileMiniHTML, this.#paramMinHTML);
    }
  }

  static #minify(file, paramMinify) {
    fs.readFile(file, "utf8", (err, data) => {
      if (err) {
        console.error(`❌ reading: ${err}`);
        return;
      }

      data = build.#replaceShortcutIcon(data);

      const minifiedHtml = minify(data, paramMinify);

      fs.writeFile(file, minifiedHtml, "utf8", (err) => {
        if (err) {
          console.error(`❌ writing: ${err}`);
          return;
        }
        console.log("✔️ mifiyHTML");
      });
    });
  }

  static #replaceShortcutIcon(file) {
    const dom = new JSDOM(file);
    const $ = (param) => dom.window.document.querySelector(param);
    const $link = $('head>link[rel="shortcut icon"]');
    if ($link) {
      $("head").removeChild($link);
    }
    return dom.serialize();
  }
}
