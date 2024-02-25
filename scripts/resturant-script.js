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
