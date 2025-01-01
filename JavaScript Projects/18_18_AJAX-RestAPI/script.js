let xhr = new XMLHttpRequest();

xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);

xhr.send();

xhr.onload = function () {
  console.log(JSON.parse(xhr.responseText));
  let container = document.getElementById("container");
  let data = JSON.parse(xhr.responseText);
  let display = "";
  data.forEach((element) => {
    display += `<div class="card">
        <h1 id="name">${element.name}</h1>
        <p id="username">${element.username}</p>
        <p id="email">${element.email}</p>
        <p id="city">${element.address.city}</p>
      </div>`;
  });

  container.innerHTML = display;
};
