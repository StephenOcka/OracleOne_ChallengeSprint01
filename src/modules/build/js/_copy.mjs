import cpx from "cpx2";

export default function (route, destination = "public") {
  cpx.copy(route, destination, (err) => {
    if (err) {
      console.error("❌ copy:", err);
    } else {
      console.log("✔️ copy");
    }
  });
}
