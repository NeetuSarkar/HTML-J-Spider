let productContainer = document.querySelector(".container");

let defaultProducts = [
  {
    id: 101,
    imgUrl:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSYOGEJCRGsgSIJ1rh9ungdB3HAlbQFFhsCy3bNVcp_w_Uq8i8Tj-4KVQBA8a6aKhdx4Bw3WZwULLnNm0Y6UhQl621Hj-yfCjfNG4pzarDHHG5VD6nvKKrp",
    name: "Apple Ultra",
    price: 40000,
    qty: 1,
  },
  {
    id: 102,
    imgUrl:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSVvGg7aOvJdcst26X7-ql6QvcToAFZfaTruyoL9qjYTHRlzITnsJOPYu6abgceDqfD3PsjyU7pdTSDas4-KYknDGUmJr05Bp2SK_LTb6Ufy73o8tzPcYTp",
    name: "Samsung Galaxy Ultra",
    price: 30000,
    qty: 1,
  },
  {
    id: 103,
    imgUrl:
      "https://fossil.scene7.com/is/image/FossilPartners/JR1401_main?$sfcc_fos_large$",
    name: "Fossil Chronograph",
    price: 10000,
    qty: 1,
  },
  {
    id: 104,
    imgUrl:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQZQQ4Sg0JrjLcnxfUa1PHmYPBXmycdr7SSAgqo3r38wdx7HmUl96B044b5NGNIUlbBWNzNld3dT42rt2oY4YcgFHAct9nNhSt6oSGPkP3rQmvDe3sq4Y2j&usqp=CAE",
    name: "Seiko SRPD",
    price: 32000,
    qty: 1,
  },
];

let products = JSON.parse(localStorage.getItem("products")) || defaultProducts;

function displayProduct() {
  let displayProduct = "";

  products.forEach((product) => {
    displayProduct += `<div class="card">
      <div class="image-container">
        <img src="${product.imgUrl}" alt="IWatch" />
      </div>
      <div class="product-details">
        <p class="product-name">${product.name}</p>
        <p class="price">₹${product.price * product.qty}</p>
        <p class="alert">Stock: Available</p>
        <div class="buttons">
          <button id="dec-btn" onclick="decQty(${product.id})">-</button>
          <p class="quantity">${product.qty}</p>
          <button id="inc-btn" onclick="incQty(${product.id})">+</button>
        </div>
      </div>
    </div>`;
  });
  productContainer.innerHTML = displayProduct;
}

function incQty(id) {
  products = products.map((product) => {
    if (product.id === id) {
      return { ...product, qty: product.qty + 1 };
    }
    return product;
  });
  saveToLocalStorage();
  displayProduct();
}

function decQty(id) {
  products = products.map((product) => {
    if (product.id === id && product.qty > 1) {
      return { ...product, qty: product.qty - 1 };
    }
    return product;
  });
  saveToLocalStorage();
  displayProduct();
}

function saveToLocalStorage() {
  localStorage.setItem("products", JSON.stringify(products));
}

displayProduct();
