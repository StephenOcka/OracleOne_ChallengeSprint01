import base from "../../modules/base/base.mjs";

base();

setTimeout(function () {
  const url = new URL(window.location.href);
  window.location.href = `${url.origin}index.html`;
}, 0);
