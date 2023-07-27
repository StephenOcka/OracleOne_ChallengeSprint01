import home from "./js/home.mjs";
import notFound from "./js/404.mjs";
import copy from "./js/_copy.mjs";

(async () => {
  await home.pack();
  await notFound.pack();
  copy("src/config/seo/robots.txt");
  copy("src/config/seo/sitiemap.xml");
})();
