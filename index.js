"use strict";

// Elements
const image = document.querySelector("img");
const form = document.querySelector("form");
const input = document.querySelector("#search");
const catBtn = document.querySelector(".cat-btn");

// Functions
const newCatGif = function () {
  fetch(
    "https://api.giphy.com/v1/gifs/translate?api_key=cJnK6ceWr5Y9KevmRJ3uP19FYsdv6yW6&s=cats",
    { mode: "cors" }
  )
    .then((res) => res.json())
    .then((data) => (image.src = data.data.images.original.url));
};

const getGif = function (search) {
  fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=cJnK6ceWr5Y9KevmRJ3uP19FYsdv6yW6&s=${search}`,
    { mode: "cors" }
  )
    .then((res) => res.json())
    .then((data) => (image.src = data.data.images.original.url))
    .catch((err) => {
      console.error(err);
      getGif("404");
    });
};

const clearForm = function () {
  input.value = "";
};

// Generate cat gif on load
newCatGif();

// Listeners
catBtn.addEventListener("click", () => {
  newCatGif();
  clearForm();
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  getGif(input.value);
  clearForm();
});
