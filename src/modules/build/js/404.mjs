import htmlPlugin from "@chialab/esbuild-plugin-html";
import build from "./_class.mjs";

export default new build({
  esBuild: {
    entryPoints: ["src/page/404/404.html"],
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
  fileMiniHTML: "public/404.html",
  paramMinHTML: {
    collapseInlineTagWhitespace: true,
    collapseWhitespace: true,
    removeComments: true,
    removeRedundantAttributes: true,
    removeEmptyAttributes: true,
    minifyJS: true,
  },
});
