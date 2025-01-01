let movies = [
  {
    mid: 101,
    titleName: "Pushpa",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJJp-6OLDMm29dvijTDX0ppcEW9DGZxy89yg&s",
    hero: "Allu Arjun",
    year: 2024,
  },
  {
    mid: 102,
    titleName: "Bahubali",
    imgUrl:
      "https://rukminim2.flixcart.com/image/850/1000/kzygpzk0/poster/r/q/s/large-movie-bahubali-2-posters-on-large-print-36x24-inches-original-imagbukjsjtksjsg.jpeg?q=20&crop=false",
    hero: "Prabash",
    year: 2020,
  },
  {
    mid: 103,
    titleName: "KGF",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSupqaEVlRyl-SYlbIy6xfTSjq3xW6fxgPtpg&s",
    hero: "Yash",
    year: 2022,
  },
  {
    mid: 104,
    titleName: "Devara",
    imgUrl:
      "https://m.media-amazon.com/images/M/MV5BNWY4NDgyN2QtNDRkZS00OGRjLWFhN2UtODc3Mzk2ZjQ0ZjhkXkEyXkFqcGc@._V1_.jpg",
    hero: "Ntr",
    year: 2021,
  },
];

let movieContainer = document.getElementById("movie-container");
let searchBar = document.getElementById("search-input");

function display(titles) {
  let displayContent = "";
  titles.forEach((title) => {
    displayContent += ` <div class="card">
          <div class="card-image">
            <img
              src="${title.imgUrl}"
            />
          </div>
          <div class="card-details">
            <h3>${title.titleName}</h3>
            <p>${title.hero}</p>
            <p>${title.year}</p>
          </div>
        </div>`;
  });

  movieContainer.innerHTML = displayContent;
}

searchBar.addEventListener("input", function () {
  if (searchBar.value.length === 0) {
    movieContainer.textContent = "Search a movie and now!";
  } else {
    let typedValue = searchBar.value;
    let filteredMovies = filterValue(typedValue, movies);
    display(filteredMovies);
  }
});

function filterValue(val, movieList) {
  val = val.trim().toLowerCase();
  return movieList.filter((movie) =>
    movie.titleName.trim().toLowerCase().includes(val)
  );
}
