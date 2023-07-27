export default function () {
  window.addEventListener("DOMContentLoaded", () => {
    let url = window.location.href;
    const replace = (txt, val = "") => {
      url = url.replace(txt, val);
    };
    replace(".html");
    replace("index");
    window.history.replaceState(null, "", url);
  });
}
