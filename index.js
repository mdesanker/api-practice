"use strict";

// Elements
const image = document.querySelector("img");
const form = document.querySelector("form");
const input = document.querySelector("#search");
const catBtn = document.querySelector(".cat-btn");

// Functions
const getGif = function (search) {
  fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=cJnK6ceWr5Y9KevmRJ3uP19FYsdv6yW6&s=${search}`,
    { mode: "cors" }
  )
    .then((res) => res.json())
    .then((pdata) => (image.src = pdata.data.images.original.url))
    .catch((err) => {
      console.error(err);
      getGif("404");
    });
};

const clearForm = function () {
  input.value = "";
};

// Generate cat gif on load
getGif("cat");

// Listeners
catBtn.addEventListener("click", (e) => {
  e.preventDefault();
  getGif("cat");
  clearForm();
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  getGif(input.value);
  clearForm();
});
