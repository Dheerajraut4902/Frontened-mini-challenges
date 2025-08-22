const count = document.querySelector(".count");
const increment = document.querySelector(".increment");
const decrement = document.querySelector(".decrement");
const changeby = document.querySelector(".changeby");
const reset = document.querySelector(".reset");

increment.addEventListener("click", () => {
  const countValue = parseInt(count.innerText);
  const changebyValue = parseInt(changeby.value);
  count.innerText = countValue + changebyValue;
});

decrement.addEventListener("click", () => {
  const countValue = parseInt(count.innerText);
  const changebyValue = parseInt(changeby.value);
  count.innerText = countValue - changebyValue;
});

reset.addEventListener("click", () => {
  count.innerText = 0;
  changeby.value = 1;
});
