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
const routes = [route1, route2, route3];
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

console.log("===========================max price=================================")

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

