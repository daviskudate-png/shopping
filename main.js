const itemInput = document.getElementById("Items");
const priceInput = document.getElementById("Price");
const list = document.getElementById("selected");
const addButton = document.getElementById("adding");
const totalPrice = document.getElementById("total");
const clearButton = document.getElementById("clear");

addButton.addEventListener("click", function (event) {
  event.preventDefault();

  if (itemInput.value === "") return;
  const li = document.createElement("li");
  li.dataset.price = priceInput.value || 0;
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  const text = document.createElement("span");
  text.textContent = " " + itemInput.value;
  if (priceInput.value !== "") {
    text.textContent += " - " + priceInput.value;
  }
  li.appendChild(checkbox);
  li.appendChild(text);
  list.appendChild(li);

  itemInput.value = "";
  priceInput.value = "";
});
function updateTotal() {
  let total = 0;
  const items = list.querySelectorAll("li");
  items.forEach(function (li) {
    if (li.querySelector("input").checked) {
      total += Number(li.dataset.price);
    }
  });
  totalPrice.textContent = total;
}

list.addEventListener("change", function (event) {
  if (event.target.type === "checkbox") {
    event.target.parentElement.classList.toggle("purchased");
    updateTotal();
  }
});

clearButton.addEventListener("click", function () {
  list.innerHTML = "";
  updateTotal();
});