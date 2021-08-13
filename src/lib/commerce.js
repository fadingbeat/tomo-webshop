// src/lib/commerce.js

import Commerce from "@chec/commerce.js";

export const commerce = new Commerce(
  process.env.REACT_APP_CHEC_PUBLIC_KEY,
  true
);

if (process.env.REACT_APP_CHEC_PUBLIC_KEY === "undefined") {
  console.log("Public key unavailable");
}
