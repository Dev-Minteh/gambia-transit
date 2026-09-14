const route1 = {
from: "Brusubi",
to: "Serekunda",
vehicle: "van",
fare: 15,
currency: "GMD",
travelTime: 25 ,
}

const route2 = {
  from: "Serekunda",
  to: "Westfield",
  vehicle: "six passenger van",
  fare: 20,
  currency: "GMD",
  travelTime: 10
};

const route3 = {
  from: "Westfield",
  to: "Banjul",
  vehicle: "bus",
  fare: 50,
  currency: "GMD",
  travelTime: 45
};

const routeDirect = {
  from: "Brusubi",
  to: "Banjul",
  vehicle: "car", // or whatever you'd like — your call
  fare: 100,
  currency: "GMD",
  travelTime: 45
};

console.log(route1);
console.log(route1.travelTime);
console.log(route1.to);
console.log(typeof route1.fare);
console.log(typeof route1.currency);

console.log(route2);
console.log(route2.travelTime);
console.log(route2.to);
console.log(typeof route2.fare);
console.log(typeof route2.currency);

console.log(route3);
console.log(route3.travelTime);
console.log(route3.to);
console.log(typeof route3.fare);
console.log(typeof route3.currency);

console.log("separate routes");

const routes = [route1, route2, route3, routeDirect];



console.log(routes);
console.log(routes[0]);
console.log(routes.length);
console.log(routes[1].to);
console.log(routes[2].fare);

console.log("looping through routes"); 

for (let i = 0; i < routes.length; i++){
  if(routes[i].vehicle === "van"){
    console.log(routes[i].from + " → " + routes[i].to);
  }
}

console.log("filtering by vehicle and using if statement to filter the routes\n");

function filterByVehicle(routes, vehicle){
for(let i = 0; i < routes.length; i++){
  if(routes[i].vehicle === vehicle){
    console.log(routes[i].from + " → " + routes[i].to);
  }
}
}

filterByVehicle(routes, "van");
filterByVehicle(routes, "bus");
console.log('\n')
console.log("Storing the filtered routes/matching search filter to an array called matches\n");


function filterByVehicle2(routes, vehicle){
const matches = [];
for(let i = 0; i < routes.length; i++){
  if(routes[i].vehicle === vehicle){
    matches.push(routes[i]);
  }
}
return matches;
}



const vanRoutes = filterByVehicle2(routes, "van");
const busRoutes = filterByVehicle2(routes, "bus");

console.log(vanRoutes);
console.log(vanRoutes.length);
// console.log(busRoutes);
// console.log(busRoutes.length);


function filterByMaxFare(routes, maxFare){
let matches;
for(let i = 0; i < routes.length; i++){
  if(routes[i].fare <= maxFare){
    matches.length
  }
}
return matches;
}
const maxPrice = filterByMaxFare(routes, 18);
console.log(maxPrice);

console.log("===========================maxPrice=================================")

function filterByMaxFare(routes, maxFare){
let matches = []; 
for(let i = 0; i < routes.length; i++){
  if(routes[i].fare <= maxFare){
    matches.push(routes[i]);
  }
}
return matches;
}
const maxFarePrice = filterByMaxFare(routes, 18);
console.log(maxFarePrice);


console.log("===========================level 2===================================");

function findRoutesFrom(routes, location){
  let matches = [];
for(let i = 0; i < routes.length; i++){
  if(routes[i].from === location){ 
    matches.push(routes[i])
  } 
}
return matches
}


const fineRoute = findRoutesFrom(routes, "Brusubi");
// const fineRoute1 = findRoutesFrom(routes, "Serekunda");
// const fineRoute2 = findRoutesFrom(routes, "Westfield");
console.log(fineRoute);
// console.log(fineRoute1);
// console.log(fineRoute2);


console.log("===========================level 2 find path===================================");

function findPath(routes, start, destination){
  let currentLocation = start;
  const path = [];
  while(currentLocation != destination){
  legs = findRoutesFrom(routes, currentLocation); // find the next possible step
  if(legs.length === 0){
    return null;
  }
  nextLeg = legs[0]; // pick the first option
  path.push(nextLeg) // add it to the path
  currentLocation = nextLeg.to;  // move to the next location
  }
  return path;
}


const trip = findPath(routes, "Brusubi", "Banjul");
console.log(trip);
const trip1 = findPath(routes, "Brusubi", "Nowhere");
console.log(trip1);

console.log("===========================calculating the total fare===================================");

function calculateFare(trip){
let total = 0;
for(let i = 0; i < trip.length; i++){
  total = total + trip[i].fare;
}
return total
}

const tripFare = findPath(routes, "Brusubi", "Banjul");
const totalFare = calculateFare(tripFare);
console.log(totalFare);


console.log("===========================calculating traveling time===================================");

function calculateTravelTime(trip){
let totalTime = 0;
for(let i = 0; i < trip.length; i++){
  totalTime = totalTime + trip[i].travelTime;
}
return totalTime;
}

const tripTime = findPath(routes, "Brusubi", "Banjul");
const calTime = calculateTravelTime(tripTime);
console.log(calTime);

console.log("===========================calculating transfers===================================");

function calculateTransfers(trip){
 let transfer = trip.length;
 transfer = transfer - 1;
 return transfer;
}

const tripTrans = findPath(routes, "Brusubi", "Banjul");
const tripCal = calculateTransfers(tripTrans);
console.log(tripCal);

console.log("===========================finding all path route===================================");


function findAllPaths(routes, currentLocation, destination, pathSoFar) {
  if (currentLocation === destination) {
    return [pathSoFar];
  }

  const legs = findRoutesFrom(routes, currentLocation);
  let allPaths = [];

  for (let i = 0; i < legs.length; i++) {
    const leg = legs[i];
    //.concat() takes an existing array and a new item, and returns a brand new array that's the combination of both 
    //it doesn't change the original.
    const newPathSoFar = pathSoFar.concat([leg]); //it's everything traveled so far, PLUS this new leg added onto the end.
    const pathsFromHere = findAllPaths(routes, leg.to, destination, newPathSoFar);
    allPaths = allPaths.concat(pathsFromHere);
  }

  return allPaths;
}

const allPaths = findAllPaths(routes, "Brusubi", "Banjul", []);
console.log(allPaths);
console.log(allPaths.length); // 2 complete path direct route and the 3-leg

// .sort() converts everything to text and compares it character-by-character
// const numbers = [85, 20, 100, 5];
// numbers.sort();
// console.log(numbers);

// To fix it, .sort() accepts an optional comparison function — a small function you write yourself that tells it exactly how to compare two items.
// const numbers = [85, 20, 100, 5];
// numbers.sort((a, b) => a - b);
// console.log(numbers);

console.log("=========================== rank route===================================");

function rankRoutes(paths, criteria){
  const sorted = paths.slice();
  sorted.sort((a, b) => {
  if(criteria === "fare"){
  return calculateFare(a) - calculateFare(b);
  }else if(criteria === "time"){
  return calculateTravelTime(a) - calculateTravelTime(b);
  }else if(criteria === "transfers"){
  return calculateTransfers(a) - calculateTransfers(b);
  }
  })
  return sorted;
}

const cheapest = rankRoutes(allPaths, "fare");
console.log(cheapest.map(trip => calculateFare(trip)));

const fastest = rankRoutes(allPaths, "time");
console.log(fastest.map(trip => calculateFare(trip)));

const fewestTransfer = rankRoutes(allPaths, "transfers");
console.log(fewestTransfer.map(trip => calculateTransfers(trip)));