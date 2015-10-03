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

var str2 = [];
items.filter(function(filter14to18) {
  if ((filter14to18.price > 14) && (filter14to18.price < 18)) {
    str2.push(filter14to18.title);
  };
});

var answer2 = document.querySelector('#answer2');
str2.forEach(function(eachTitle) {
 var textNode2 = document.createElement('p');
 textNode2.textContent = eachTitle;
 answer2.appendChild(textNode2);
});


// // 3. Which item has a "GBP" currency code? Display its name and price.

var str3 = "";
items.filter(function(filterCurrency) {
  if (filterCurrency.currency_code === "GBP" ) {
    str3 += filterCurrency.title + ' costs \xa3' + filterCurrency.price + '.';
  };
});

var answer3 = document.querySelector('#answer3');
var textNode3 = document.createTextNode(str3);
answer3.appendChild(textNode3);


// 4. Display a list of all items who are made of wood.

var woodArray = [];

var findWood = items.forEach(function(filterMaterials) {
  var fltmats = filterMaterials.materials;
  fltmats.forEach(function(eachWood) {
     if (eachWood === "wood") {
         woodArray.push(filterMaterials.title);
      };
  });
});

var answer4 = document.querySelector('#answer4');
woodArray.forEach(function(eachWood) {
 var textNode4 = document.createElement('p');
 textNode4.textContent = eachWood;
 answer4.appendChild(textNode4);
});


// 5. Which items are made of eight or more materials? Display the name, number of items and the items it is made of.

var eightArray = [];
var findEight = items.filter(function(item) {
  return item.materials.length > 7;
});

var answer5 = document.querySelector('#answer5');

findEight.forEach(function(item) {
  var textNode5 = document.createElement('div');
  var materialsList = item.materials.join("\n");
  textNode5.innerHTML = item.title + ' has ' + item.materials.length + ' materials:' + '<p>' + materialsList + '</p>';
  answer5.appendChild(textNode5);  
});


// 6. How many items were made by their sellers?

var selfMade = items.filter(function(item) {
  return item.who_made === "i_did";
});

var numberSelfMade = selfMade.length + " were made by their sellers.";

var answer6 = document.querySelector('#answer6');
var textNode6 = document.createTextNode(numberSelfMade); 
answer6.appendChild(textNode6);


})();