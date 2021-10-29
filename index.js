"use strict";

const image = document.querySelector("img");

fetch(
  "https://api.giphy.com/v1/gifs/translate?api_key=cJnK6ceWr5Y9KevmRJ3uP19FYsdv6yW6&s=cats",
  { mode: "cors" }
)
  .then((res) => res.json())
  .then((data) => (image.src = data.data.images.original.url));
