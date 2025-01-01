document.addEventListener("DOMContentLoaded", () => {
  let tableBody = document.getElementById("table-body");

  let product1 = JSON.parse(localStorage.getItem("product1")) || {
    pid: "AA101",
    PImage: "download (2).jpg",
    PName: "Iwatch",
    Pprice: 45000.0,
    qty: 1,
    totalPrice: 45000.0,
  };

  function renderTable() {
    tableBody.innerHTML = `<tr>
        <td>${product1.pid}</td>
        <td>
          <img src="${product1.PImage}" alt="" />
        </td>
        <td>${product1.PName}</td>
        <td>${product1.Pprice}</td>
        <td>
          <button id="inc-button">+</button>
          <span id="product-quantity">${product1.qty}</span>
          <button id="dec-button">-</button>
        </td>
        <td id="total-price">${product1.totalPrice}</td>
      </tr>`;

    attachEventListeners();
  }

  function attachEventListeners() {
    document.getElementById("inc-button").addEventListener("click", () => {
      product1.qty++;
      product1.totalPrice += product1.Pprice;
      storeData();
      renderTable();
    });

    document.getElementById("dec-button").addEventListener("click", () => {
      if (product1.qty > 1) {
        product1.qty--;
        product1.totalPrice -= product1.Pprice;
        storeData();
        renderTable();
      }
    });
  }

  function storeData() {
    localStorage.setItem("product1", JSON.stringify(product1));
  }

  renderTable();
});
