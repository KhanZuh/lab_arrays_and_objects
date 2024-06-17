/**
 * In these tasks you will need to manipulate the array below in order to answer the questions. Some answers will require you to store the result in a variable, others will need you to inspect the whole array.
 */

stations = ["Dundee", "Edinburgh", "North Berwick", "Newcastle", "York", "Leeds", "Doncaster", "Peterborough", "London Kings Cross"];

/**
 * Q1.
 * The East Coast Main Line doesn't stop at Peterborough! Add London Kings Cross to the end of the array to complete the line.
 */
// stations.push("London Kings Cross");
// console.log(stations);



/**
 * Q2.
 * It doesn't go as far as Dundee either, so remove it from the start of the array.
 */
stations.shift();
// console.log(stations);



/**
 * Q3.
 * How many stations are on the line?
 */
stationCount = stations.length;
stationCount = 8;

// console.log("There are " + stationCount + " stations.");
// alternatively can use template literals here (see BNTA textbook) for more readable and simplified approach to string concatenation. 
// console.log(`There are ${stationCount} stations.`);


/**
 * Q4.
 * Which station is the third stop?
 */

thirdStation = stations[2];
// thirdStation = Newcastle

// console.log("The third station is " + thirdStation);

// third station -->  accessed at index 2 in the stations array (array indices start from 0).
// value at 3 in the array list is therefore at index [2].




/**
 * Q5.
 * Someone put the wrong Berwick on the timetable! Update "North Berwick" to "Berwick-upon-Tweed".
 */

stations[1] = "Berwick-upon-Tweed";


// console.log(stations);



/**
 * Q6.
 * How did Leeds get on there? Better remove it.
 */

//From google --> use splice() method to remove an element from an array
// Better to index of method since changes made to array
indexOfLeeds = stations.indexOf("Leeds")
stations.splice(indexOfLeeds, 1);


// console.log(stations);



/**
 * Q7.
 * We forgot about Darlington! Add it to the route between Newcastle and York.
 */

// find index of york
// use splice method to insert at that index (since that will be between newcastle and york)
// splice method syntax --> array.splice(start, deleteCount, item1, item2, ...);

const indexOfYork = stations.indexOf("York");
stations.splice(indexOfYork, 0, "Darlington");


// console.log(stations);



/**
 * Q8.
 * Is Durham one of the stops?
 */


// let stops = [
//     'Edinburgh',
//     'Berwick-upon-Tweed',
//     'Newcastle',
//     'Darlington',
//     'York',
//     'Doncaster',
//     'Peterborough',
//     'London Kings Cross'
//   ];
  
//   // from SO --> function called contains (array, durham)

//   function contains(a, durham) {
//     for (var i = 0; i < a.length; i++) {
//       if (a[i] === durham) {
//         return true;
//       }
//     }
//     return false;
//   }
  
// call the contains function to check if durham is a stop in the "stops" array and then output the result
//   stoppingAtDurham = contains(stops, 'Durham');
//   console.log(stoppingAtDurham); 


// UPDATE: Using the includes() method to check if durham is one of the stops is a cleaner more readable approach

// console.log("Array of stops:", stations);

stoppingAtDurham = stations.includes("Durham");

// console.log(stoppingAtDurham);


/**
 * Q9.
 * If we are stopping at Durham, print "Yay Durham!" to the terminal. If not print "Aww...".
 */

if (stoppingAtDurham) {
    console.log("Yay Durham!");
  } else {
    console.log("Aww...");
  }