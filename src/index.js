const button = document.getElementById("add-one");
const results = document.getElementById("results");

button.addEventListener("click", () => {
  let count = parseInt(results.textContent);
  count++;
  results.textContent = count;
});
