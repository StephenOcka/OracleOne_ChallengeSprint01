export default function (text) {
  const txt = text.replace(/</g, "&#60;").replace(/>/g, "&#62;");
  return txt;
}
