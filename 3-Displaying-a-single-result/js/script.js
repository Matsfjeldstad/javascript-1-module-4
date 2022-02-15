// Sometimes we retrieve only a single result from an API call.
// In this case, we will work with a single object rather
// than an array of objects.

// Because we are not working with an array,
// we access the result properties directly.

// Example 1
// https://rawg.io/apidocs the API
// API Documentation https://api.rawg.io/docs/#operation/games_read
const container = document.querySelector(".container");

const url =
  "https://api.rawg.io/api/games/3328?key=07d8164699e544d697fb867d719fa22d";

async function fetchGame() {
  try {
    const response = await fetch(url);
    const gameDetails = await response.json();
    createHTML(gameDetails);
  } catch (error) {
    console.log(error);
  }
}

fetchGame();

function createHTML(gameDetails) {
  container.innerHTML = `
    <h1 class="details-title">Name: ${gameDetails.name} </h1>
    <div class= "details-image"style="background-image: url('${gameDetails.background_image}');"></div>
    <p class="details-desctiption">Description: ${gameDetails.description}</p>
    <time class="details-date">Released: ${gameDetails.released}</time>`;
}
