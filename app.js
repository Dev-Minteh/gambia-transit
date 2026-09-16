const button = document.getElementById("searchButton");
const fromInput = document.getElementById("fromInput");
const toInput = document.getElementById("toInput");

button.addEventListener("click", function(){
const fromValue = fromInput.value;
const toValue = toInput.value;
const allPaths = findAllPaths(routes, fromValue, toValue, []);
console.log(allPaths);
})


