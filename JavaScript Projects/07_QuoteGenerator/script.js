let genButton = document.getElementById("gen-btn");
let quoteDisplay = document.getElementById("quote");
let authorDisplay = document.getElementById("author");

function getQuote() {
  fetch("https://api.api-ninjas.com/v1/quotes", {
    method: "GET",
    headers: {
      "X-Api-Key": "apiFDws+DXjDvEwZlw9w3Q==umkm1vOAHwzR5UwW", // Replace with your actual API key
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data && data.length > 0) {
        quoteDisplay.textContent = `${data[0].quote}`;
        authorDisplay.textContent = `${data[0].author}`;
        console.log(data); // or data[0].q depending on API response
      } else {
        console.log("No quote found");
      }
    })
    .catch((error) => console.error("Error:", error));
}

genButton.addEventListener("click", () => {
  getQuote();
});

getQuote();
