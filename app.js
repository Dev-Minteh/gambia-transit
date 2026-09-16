const button = document.getElementById("searchButton");
const fromInput = document.getElementById("fromInput");
const toInput = document.getElementById("toInput");
const results = document.getElementById("results");

button.addEventListener("click", function(){
const fromValue = fromInput.value;
const toValue = toInput.value;
const allPaths = findAllPaths(routes, fromValue, toValue, []);
const bestTrip = recommendRoute(allPaths, "fare");
let html = "";
for(let i = 0; i < best.length; i++){
    html = html + `<p>First leg: ${bestTrip[i].from} → ${bestTrip[i].to}</p>`;
}
results.innerHTML = html;
});


