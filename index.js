//   let url = "https://fakestoreapi.com/products";
let url = "https://fakestoreapi.com/products";
let container = document.getElementById("product");

async function getproduct() {
  let res = await fetch(url);
  let response = await res.json();

  appendproduct(response);
  console.log("response:", response);
}
getproduct();

function appendproduct(arr) {
  arr.forEach(function (product) {
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.src = product.image;
    let name = document.createElement("p");
    name.innerText = product.title;

    let description = document.createElement("p");
    description.innerText = product.description;
    let price = document.createElement("p");
    price.innerText = product.price;

    div.append(img, name, price, description);
    product_div.append(div);
  });
}
