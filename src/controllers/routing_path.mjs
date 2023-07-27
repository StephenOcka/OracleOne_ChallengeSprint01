const url = new URL(window.location.href);

const changeURL = (object = {}) => {
  let path = url.pathname;

  for (const property in object) {
    path = path.replace(property, object[property]);
  }

  window.history.replaceState(null, "", path);
};

export default function () {
  window.addEventListener("DOMContentLoaded", () => {
    changeURL({
      "index.html": "",
      ".html": "",
    });
  });
}
