import base from "../../modules/base/base.mjs";
import matrix from "../../modules/matrix/matrix.mjs";
import encode from "../../modules/encode/encode.mjs";

const $ = (query) => document.querySelector(query);

function onClick({ item, url }) {
  item.addEventListener("click", () => (window.location.href = url));
}

base();

matrix();

encode();

onClick({
  item: $("#img-oracle"),
  url: "https://www.oracle.com/mx/education/oracle-next-education",
});

onClick({
  item: $("#img-author"),
  url: "https://portfolio.stephenocka.com",
});

onClick({
  item: $("#img-github"),
  url: "https://github.com/StephenOcka/TextEncryptor",
});
