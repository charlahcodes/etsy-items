(function () {


// 1. Show me how to calculate the average price of all items.

 // Create an array of just the prices
  var prices = items.map( function (item) {
    return item.price;
  });

  // Add all of the prices together
  var sum = prices.reduce( function (prev, next) {
    return prev + next;
  });

  // Divide by total number of items
  var avg = sum / prices.length;

  // Convert it to 2 decimal places
  var converted = avg.toFixed(2);

  // Make it a string
  var str1 = 'The average price is $' + converted;
 
  // Make it show up on the page

    // Find our answer element
  var answer1 = document.querySelector('#answer1');
    // Create a node from our above answer ready for the DOM
  var textNode1 = document.createTextNode(str1);
    // Append newly created node to our answer element
  answer1.appendChild(textNode1);


// 2. Show me how to get an array of items that cost between $14.00 and $18.00 USD.

var str2 = "";
items.filter(function(filter14to18) {
  if ((filter14to18.price > 14) && (filter14to18.price < 18)) {
    str2 += filter14to18.title;
  };
});

var answer2 = document.querySelector('#answer2');
var textNode2 = document.createTextNode(str2);
answer2.appendChild(textNode2);

// // 3. Which item has a "GBP" currency code? Display its name and price.

var str3 = "";
items.filter(function(filterCurrency) {
  if (filterCurrency.currency_code === "GBP" ) {
    str3 += filterCurrency.title + ' costs £' + filterCurrency.price + '.';
  };
});

var answer3 = document.querySelector('#answer3');
var textNode3 = document.createTextNode(str3);
answer3.appendChild(textNode3);

// 4. Display a list of all items who are made of wood.

// First, function that gets items.materials
var woodArray = [];
var findWood = items.forEach(function(filterMaterials) {
  var fltmats = filterMaterials.materials;
  if (filterMaterials.materials != -1) {
  // now nest another function inside to get instances of wood
    fltmats.forEach(function(eachWood) {
      if (eachWood.indexOf("wood") != -1) {
         woodArray.push(filterMaterials.title);
      };
    });
  };
});

// instead of this, try forEach on array, appendchild within it
var wood1 = woodArray[0];
var wood2 = woodArray[1];
var wood3 = woodArray[2];
var wood4 = woodArray[3];
var wood5 = woodArray[4];

var answer4a = document.querySelector('#answer4a');
var answer4b = document.querySelector('#answer4b');
var answer4c = document.querySelector('#answer4c');
var answer4d = document.querySelector('#answer4d');
var answer4e = document.querySelector('#answer4e');

var textNode4 = document.createTextNode(wood1);
var textNode5 = document.createTextNode(wood2);
var textNode6 = document.createTextNode(wood3);
var textNode7 = document.createTextNode(wood4);
var textNode8 = document.createTextNode(wood5);

answer4a.appendChild(textNode4);
answer4b.appendChild(textNode5);
answer4c.appendChild(textNode6);
answer4d.appendChild(textNode7);
answer4e.appendChild(textNode8);

// 5. Which items are made of eight or more materials? Display the name, number of items and the items it is made of.

var eightArray = [];
var findEight = items.filter(function(item) {
  return item.materials.length > 8;
});

findEight.forEach(function(findEight) {
  eightArray.push(findEight.title);
  eightArray.push(findEight.materials.length);
  var eightMaterials = findEight.materials;
  eightMaterials.forEach(function(eachMat) {
    eightArray.push(eachMat);
  });
});

var answer5 = document.querySelector('#answer5');
var textNode5 = document.createTextNode(eightArray); 
answer5.appendChild(textNode5);

// 6. How many items were made by their sellers?

var selfMade = items.filter(function(item) {
  return item.who_made === "i_did";
});

var numberSelfMade = selfMade.length + " were made by their sellers.";

var answer6 = document.querySelector('#answer6');
var textNode6 = document.createTextNode(numberSelfMade); 
answer6.appendChild(textNode6);





})();