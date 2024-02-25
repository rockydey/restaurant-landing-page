function increaseCart() {
  const increaseCount = document.getElementById("increase-count");
  const count = parseInt(increaseCount.innerText);
  increaseCount.innerText = count + 1;
}

const addCarts = document.querySelectorAll(".add-cart");
console.log(addCarts);
for (addCart of addCarts) {
  addCart.addEventListener("click", increaseCart);
}

let myNotify;

function pushNotify() {
  myNotify = new Notify({
    status: "success",
    title: "Successfully Add to Cart",
    text: "Please check cart button on navbar!",
    effect: "slide",
    type: "filled",
  });
}

function close() {
  myNotify.close();
}
