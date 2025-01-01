let promise = new Promise(function (resolve, reject) {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "https://restcountries.eu/rest/v2/name/india", true);
  xhr.send();
  xhr.addEventListner("load", function () {
    if (xhr.statusText == "OK") {
      resolve(xhr.responseText);
    } else {
      reject("Something went wrong");
    }
  });
});

promise.then(
  function (data) {
    console.log(data);
  },
  function (err) {
    console.log(err);
  }
);
