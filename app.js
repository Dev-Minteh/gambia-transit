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
    html += `<p>
    ${bestTrip[i].from} → ${bestTrip[i].to}  
    | Vehicle: ${bestTrip[i].vehicle}  
    | Fare: ${bestTrip[i].fare}  
    | Time: ${bestTrip[i].travelTime} mins
  </p>`;
}
results.innerHTML = html;
});


