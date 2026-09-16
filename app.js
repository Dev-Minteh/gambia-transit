const button = document.getElementById("searchButton");
const fromInput = document.getElementById("fromInput");
const toInput = document.getElementById("toInput");
const results = document.getElementById("results");

const savedFrom = localStorage.getItem("lastFrom");
const SavedTo = localStorage.getItem("lastTo");
if(savedFrom){
    fromInput.value = savedFrom;
}

if(SavedTo){
    toInput.value = SavedTo
}
button.addEventListener("click", function(){
const fromValue = fromInput.value;
const toValue = toInput.value;

localStorage.setItem("lastFrom", fromValue);
localStorage.setItem("lastTo", toValue);

const allPaths = findAllPaths(routes, fromValue, toValue, []);
const bestTrip = recommendRoute(allPaths, "fare");

if(bestTrip === undefined){
    results.innerHTML = "<p>No route was found between these locations</p>";
    return;
}

let html = "";
for(let i = 0; i < bestTrip.length; i++){
    html += `<p>
    ${bestTrip[i].from} → ${bestTrip[i].to}  
    | Vehicle: ${bestTrip[i].vehicle}  
    | Fare: ${bestTrip[i].fare}  
    | Time: ${bestTrip[i].travelTime} mins
  </p>`;
}
results.innerHTML = html;
});


