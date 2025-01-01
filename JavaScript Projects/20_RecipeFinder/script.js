// Replace with your YouTube API key
const API_KEY = "AIzaSyBOXVg4AJmh0L3orWRxw8-Ape0N61zPIC0";
const API_URL = "https://www.googleapis.com/youtube/v3/search";

function searchVideos() {
  const query = document.getElementById("searchQuery").value;
  const url = `${API_URL}?part=snippet&q=${query}&key=${API_KEY}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      displayVideos(data.items);
      console.log(data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

function displayVideos(videos) {
  const videoList = document.getElementById("videoList");
  videoList.innerHTML = ""; // Clear previous results

  videos.forEach((video) => {
    const listItem = document.createElement("li");
    const videoTitle = video.snippet.title;
    const videoUrl = `https://www.youtube.com/watch?v=${video.id.videoId}`;
    const thumbnailUrl = video.snippet.thumbnails.default.url;

    listItem.innerHTML = `
            <a href="${videoUrl}" target="_blank">
                <img src="${thumbnailUrl}" alt="${videoTitle}" width="120" />
                <p>${videoTitle}</p>
            </a>
        `;
    videoList.appendChild(listItem);
  });
}

const apiKey = "907ed5a0c943420f97c777e05954bea3";
const query = "mutton briyani";
const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${apiKey}`;
fetch(apiUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
    // Process the retrieved data here
  })
  .catch((error) => {
    console.error("Fetch error:", error);
  });

const recipeId = "636488"; // Replace with actual recipe ID
const infoUrl = `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${apiKey}`;

fetch(infoUrl)
  .then((response) => response.json())
  .then((data) => {
    // const ingredients = data.extendedIngredients.map(
    //   (ing) => `${ing.amount} ${ing.unit} of ${ing.name}`
    // );
    // const nutrition = data.nutrition.nutrients; // Array of nutrient objects
    // const instructions = data.instructions;

    // console.log("Ingredients:", ingredients);
    // console.log("Nutrition:", nutrition);
    // console.log("Instructions:", instructions);
    console.log(data);
  })
  .catch((error) => {
    console.error("Error fetching recipe information:", error);
  });
