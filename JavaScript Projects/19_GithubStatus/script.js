let usernameInput = document.getElementById("search-input");
let searchBtn = document.getElementById("search-btn");

searchBtn.addEventListener("click", function () {
  const username = usernameInput.value;
  const profileDiv = document.getElementById("profile");

  if (!username) {
    profileDiv.innerHTML = `<p>Please enter a username!</p>`;
    return;
  }

  fetch(`https://api.github.com/users/${username}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("User not found");
      }
      return response.json();
    })
    .then((data) => {
      profileDiv.innerHTML = `<img src="${data.avatar_url}" alt="${
        data.name
      }" />
        <h2>${data.name || "Name not available"}</h2>
        <p><strong>Bio:</strong> ${data.bio || "Bio not available"}</p>
        <p><strong>Followers:</strong> ${data.followers}</p>
        <p><strong>Following:</strong> ${data.following}</p>
        <p><a href="${data.html_url}" target="_blank">View Profile</a></p>
      `;
    })
    .catch((error) => console.log(error));
});
