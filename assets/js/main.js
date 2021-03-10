const key = "5d4159eb77a44bb7931929ddaca74047";
const cardImageTop = document.querySelectorAll(".card-img-top");
const cardTitle = document.querySelectorAll(".card-title");
const newsText = document.querySelectorAll(".card-text");
const headerHero = document.getElementById("header-hero1");
const leadText = document.getElementById("leadtxt");
const readMore = document.querySelectorAll(".btn");
const slidesBack = document.querySelectorAll(".slides-back");
const country = document.querySelector("#country");
const form = document.querySelector("form");

let countryInitial = "de";

const countrySelect = () => {
  if (country.value === "0") {
    countryInitial = "de";
  } else if (country.value === "1") {
    countryInitial = "gb";
  } else if (country.value === "2") {
    countryInitial = "fr";
  }
};

function apiCall() {
  countrySelect();
  fetch(
    `http://newsapi.org/v2/top-headlines?country=${countryInitial}&apiKey=5d4159eb77a44bb7931929ddaca74047`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      for (let i = 3; i < 8; i++) {
        cardImageTop[i - 3].src = data.articles[i - 3].urlToImage;
        newsText[i - 3].innerText = data.articles[i - 3].title;
        cardTitle[i - 3].innerText = data.articles[i - 3].source.name;
        readMore[i - 3].setAttribute("href", data.articles[i - 3].url);
      }

      console.log(data);
    });
}

function apiCallSearch() {
  // countrySelect();
  fetch(
    `https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=5d4159eb77a44bb7931929ddaca74047b`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      // for (let i = 3; i < 8; i++) {
      //   cardImageTop[i - 3].src = data.articles[i - 3].urlToImage;
      //   newsText[i - 3].innerText = data.articles[i - 3].title;
      //   cardTitle[i - 3].innerText = data.articles[i - 3].source.name;
      //   readMore[i - 3].setAttribute("href", data.articles[i - 3].url);
      // }

      console.log(data);
    });
}

form.addEventListener("submit", apiCallSearch);
// apiCall();
