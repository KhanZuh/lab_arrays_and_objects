/**
 * These tasks are more complicated! Using combinations of arrays and objects is very common, here you will need to combine what you know about both to complete the tasks.
 */

unitedKingdom = [
  {
    name: "Scotland",
    capital: "Edinburgh",
    population: 5454000,
    touristAttractions: ["Stirling Castle", "Loch Ness"],
  },
  {
    name: "England",
    capital: "London",
    population: 55980000,
  },
  {
    name: "Wales",
    capital: "Swansea",
    population: 3163000,
    touristAttractions: ["Snowdonia"],
  },
  {
    name: "Northern Ireland",
    capital: "Belfast",
    population: 1885000,
    touristAttractions: ["Titanic Museum", "Giant's Causeway"],
  },
];

/**
 * Q1. Add some tourist attractions to England
 */

// find england then add to england
// find method (arrow functions used as callbacks to imprive readability)

// find
england = unitedKingdom.find(country => country.name === "England");

// add
england.touristAttractions = ["Buckingham Palace", "Stonehenge", "Tower of London"];

//Model solution
// england = unitedKingdom[1];
// england.touristAttractions = ["Buckingham Palace", "Big Ben"];
// console.log(england);


// console.log(england);

/**
 * Q2. Change the capital of Wales to "Cardiff"
 */

// find --> then update

//find
wales = unitedKingdom.find(country => country.name === "Wales");


//update 
wales.capital = "Cardiff";

// Model solution
// wales = unitedKingdom[2];
// wales.capital = "Cardiff";
// console.log(wales);

/**
 * Q3. Find a method in the documentation which will give you all of the available keys for Northern Ireland
 */

// northernIrelandKeys = null;

//find 
northernIreland = unitedKingdom.find(country => country.name === "Northern Ireland");

// gettting all keys (object.keys accroding to w3schoools/ MDN web docs)
northernIrelandKeys = Object.keys(northernIreland);

// Model solution
// northernIreland = unitedKingdom[3];
// northernIrelandKeys = Object.keys(northernIreland);

// console.log(northernIrelandKeys);


/**
 * Q4. Use an if statement to compare the population of Scotland to the population of Wales, and say which is bigger.
 */


// find wales
wales = unitedKingdom.find(country => country.name === "Wales");


// find scotland
scotland = unitedKingdom.find(country => country.name === "Scotland");


// code block containing if statement
if (scotland.population > wales.population) {
  console.log("Scotland has a larger population than Wales.");
} else if (scotland.population < wales.population) {
  console.log("Wales has a larger population than Scotland.");
} else {
  console.log("Scotland and Wales have the same population.");
}


// Model solution

// scotland = unitedKingdom[0];
// wales = unitedKingdom[2];

// if (scotland.population < wales.population){
//   console.log("Scotland has a lower population than Wales");
// } else if (scotland.population > wales.population){
//   console.log("Scotland has a higher population than Wales");
// } 

