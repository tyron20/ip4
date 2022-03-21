document.querySelector(".order-btn").addEventListener("click", placeOrder);
// Pricing Object
const price = {
  size: { small: 600, medium: 850, large: 1200 },
};

function placeOrder(event) {
    event.preventDefault();
  let sizeOption = document.querySelector("#size");
  let size = price.size[sizeOption.options[sizeOption.selectedIndex].value];
  let numberOfOders = document.querySelector("#pizzaNumber").value;
  let totalCost = size * parseInt(numberOfOders);
  document.querySelector(".order-summary").innerText = totalCost;
  console.log(size, numberOfOders, totalCost)
}
