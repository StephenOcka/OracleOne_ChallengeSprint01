import htmlPlugin from "@chialab/esbuild-plugin-html";
import build from "./_class.mjs";

export default new build({
  esBuild: {
    entryPoints: ["src/page/home/index.html"],
    outdir: "public",
    bundle: true,
    minify: true,
    loader: {
      ".woff2": "file",
    },
    assetNames: "assets/[hash]",
    chunkNames: "[ext]/[hash]",
    plugins: [htmlPlugin()],
  },
  fileMiniHTML: "public/index.html",
  paramMinHTML: {
    collapseWhitespace: true,
    collapseInlineTagWhitespace: true,
    removeComments: true,
    minifyJS: true,
    minifyCSS: true,
  },
});
