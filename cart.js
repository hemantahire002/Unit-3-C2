var cartItems = JSON.parse(localStorage.getItem("cartItems"));
console.log("cartItems:", cartItems);
showproducts(cartItems);

function showproducts(data) {
  data.map(function (item) {
    var img = document.createElement("img");
    img.setAttribute("src", item.image_url);

    var h1 = document.createElement("h1");
    h1.textContent = item.name;
    var h2 = document.createElement("h2");
    h2.textContent = item.price;
    var h3 = document.createElement("h3");
    h3.textContent = item.rating;
    //   var btn1 = document.createElement("button");
    //   btn1.textContent = "CheckOut";
    //   btn1.addEventListener("click", function () {
    //     CheckOut(item);
    //   });
    document.querySelector("body").append(img, h1, h2, h3);
  });
}
var total = cartItems.reduce(function (acc, cv) {
  return acc + Number(cv.price);
}, 0);

document.querySelector("#total").textContent = total;
function Gocheckout() {
  window.location.href = "checkout.html";
}
