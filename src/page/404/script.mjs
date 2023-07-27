import routing_path from "../../controllers/routing_path.mjs";
import base from "../../modules/base/base.mjs";

base();

setTimeout(function () {
  const url = new URL(window.location.href);
  routing_path();
  window.location.href = `${url.origin}/index.html`;
}, 0);
