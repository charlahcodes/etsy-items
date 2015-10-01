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


// Nest IndexOf inside another array function

// First, function that gets items.materials
var str4 = '';
items.filter(function(filterMaterials) {
  var fltmats = filterMaterials.materials;
  // now nest another function inside to get instances of wood
  fltmats.forEach(function(eachWood) {
    if (eachWood.indexOf("wood") != -1) {
      str4 = filterMaterials.title;
      console.log(str4);
    };
  });
});

var answer4 = document.querySelector('#answer4');
var textNode4 = document.createTextNode(str4);
answer4.appendChild(textNode4);
















})();