const URL = "https://elephant-api.herokuapp.com/elphants";
const proxy = "https://noroffcors.herokuapp.com/";

const resultsContainer = document.querySelector(".results");

const corsFix = proxy + URL;

async function makeApiCall() {
  try {
    const response = await fetch(corsFix);
    const elephantData = await response.json();
    console.log(elephantData);
    for
  } catch (error) {
    console.log("jfijdfjidf");
    console.log(error);
    resultsContainer.innerHTML = alert("error", error);
    document.querySelector(".loader").classList.add("hidden");
  }
}

makeApiCall();
