// Phase I
// mystery scoping
// 1.
function mysteryScoping1() {
  var x = 'out of block';
  if (true) {
    var x = 'in block';
    console.log(x);
  }
  console.log(x);
}
mysteryScoping1(); // in block, in block, because functional scope of 'var'

// 2.
function mysteryScoping2() {
  const x = 'out of block';
  if (true) {
    const x = 'in block';
    console.log(x);
  }
  console.log(x);
}
mysteryScoping2(); // in block, out of block, because of block scope of 'const'


// 3. 
function mysteryScoping3() {
  const x = 'out of block';
  if (true) {
    var x = 'in block';
    console.log(x);
  }
  console.log(x);
}
mysteryScoping3(); // SyntaxError, bacause of conflit between assigned 'x'


// 4.
function mysteryScoping4() {
  let x = 'out of block';
  if (true) {
    let x = 'in block';
    console.log(x);
  }
  console.log(x);
}
mysteryScoping4(); // in block, out of block, identical to 'const'


// 5.
function mysteryScoping5() {
  let x = 'out of block';
  if (true) {
    let x = 'in block';
    console.log(x);
  }
  let x = 'out of block again';
  console.log(x);
}
mysteryScoping5(); // SyntaxError, becasue x is already assigned within block.




// 6. madLib
// Write a function that takes three strings - a verb, an adjective, and a noun - uppercases and interpolates them into the sentence "We shall VERB the ADJECTIVE NOUN". Use ES6 template literals.
function madLib(verb, adj, noun) {
  return `We shall ${verb.toUpperCase()} the ${adj.toUpperCase()} ${noun.toUpperCase()}.`
}
madLib('make', 'best', 'guac'); // "We shall MAKE the BEST GUAC."


// 7. isSubstring
// Input a String, called searchString and another String, called subString.
// Output: A Boolean. true if the subString is a part of the searchString.
var isSubstring = function(phrase, subphrase) {
  return phrase.includes(subphrase);
}
isSubstring("time to program", "time"); // true
isSubstring("Jump for joy", "joys"); // false


// 8. FizzBuzz
// Define a function fizzBuzz(array) that takes an array and returns a new array of every number in the array that is divisible by either 3 or 5, but not both.
function fizzBuzz (array) {
  const fizzBuzzArr = [];
  array.forEach(el => {
    if ((el % 3 === 0) ^ (el % 5 === 0)) {
      fizzBuzzArr.push(el);
    }
  });

  return fizzBuzzArr;
}
fizzBuzz([1,2,3,4,5,6,7,8,9,10,11,12,13,1,4,15]); // [ 3, 5, 6, 9, 10, 12 ]
// Note that the '^' means bitwise XOR.


// 9. isPrime
// Define a function isPrime(number) that returns true if number is prime. Otherwise, false. Assume number is a positive integer.
function isPrime (n) {
  if (n < 2) { return false; }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}


// 10. sumOfNPrimes
// Using firstNPrimes, write a function sumOfNPrimes(n) that returns the sum of the first n prime numbers. Hint: use isPrime as a helper method.
function sumOfNPrimes (n) {
  let sum = 0;
  let countPrimes = 0;
  let i = 2;

  while (countPrimes < n) {
    if (isPrime(i)) {
      sum += i;
      countPrimes++;
    }
    i++;
  }

  return sum;
}




// Callbacks
// Write a function titleize that takes an array of names and a function (callback). titleize should use Array.prototype.map to create a new array full of titleized versions of each name - titleize meaning "Roger" should be made to read "Mx. Roger Jingleheimer Schmidt". Then pass this new array of names to the callback, which should use Array.prototype.forEach to print out each titleized name.
printAll = function(arr) {
  arr.forEach(el => {
    console.log(el);
  });
}
// ----------------------------------------------------------------------------
function titleize(names, callback) {
  let titleized = names.map(name => `Mx. ${name} Jingleheimer Schmidt`);
  callback(titleized);
};
titleize(["Mary", "Brian", "Leo"], printAll);
// Mx. Mary Jingleheimer Schmidt
// Mx. Brian Jingleheimer Schmidt
// Mx. Leo Jingleheimer Schmidt

// invoking the function
// titleize(["Mary", "Brian", "Leo"], (names) => {
//   names.forEach(name => console.log(name));
// });


// Phase II - Constructors, Prototypes, and `this`
// First write a constructor function for an elephant. Each elephant should have a name, height (in inches), and array of tricks in gerund form (e.g. "painting a picture" rather than "paint a picture").
// Next write a few prototype functions that will be shared among all elephants:
// Elephant.prototype.trumpet: should print "(name) the elephant goes 'phrRRRRRRRRRRR!!!!!!!'"
// Elephant.prototype.grow: should increase the elephant's height by 12 inches
// Elephant.prototype.addTrick(trick): add a new trick to their existing repertoire
// Elephant.prototype.play: print out a random trick, e.g. "(name) is (trick)!"
// Hint: look up some JS Math methods!

Elephant = function(name, height, tricks) {
  this.name = name;
  this.height = height;
  this.tricks = tricks;
}

Elephant.prototype.trumpet = function () {
  console.log(`${this.name} the elephant goes 'phrRRRRRRRRRRR!!!!!!!'`);
};

Elephant.prototype.grow = function () {
  this.height += 12;
  console.log(this.height);
};

Elephant.prototype.addTrick = function (trick) {
  this.tricks.push(trick);
};

Elephant.prototype.play = function () {
  trickIndex = Math.floor(Math.random() * this.tricks.length);
  console.log(`${this.name} is ${this.tricks[trickIndex]}!`);
};



// Phase III - Function Invocation
// First, let's make a few elephants so we have a small herd. Feel free to copy the code below, or to make your own with any attributes you like. Make sure to store all of our elephants in an array.

// let ellie = new Elephant("Ellie", 185, ["giving human friends a ride", "playing hide and seek"]);
// let charlie = new Elephant("Charlie", 200, ["painting pictures", "spraying water for a slip and slide"]);
// let kate = new Elephant("Kate", 234, ["writing letters", "stealing peanuts"]);
// let micah = new Elephant("Micah", 143, ["trotting", "playing tic tac toe", "doing elephant ballet"]);

// let herd = [ellie, charlie, kate, micah];
// Now let's create a function called paradeHelper that we'll use to have an elephant parade. It should take a single elephant as an argument; this way, we can pass it as a callback to forEach when called on our herd. Make sure to store it as a property on the Elephant object. You can populate it with any console.log statement you want to build your parade (e.g. "_______ is trotting by!").

Elephant.paradeHelper = function (elephant) {
  // console.log(`${elephant.name} is trotting by!`);
  elephant.play();
};
let ellie = new Elephant("Ellie", 185, ["giving human friends a ride", "playing hide and seek"]);
let charlie = new Elephant("Charlie", 200, ["painting pictures", "spraying water for a slip and slide"]);
let kate = new Elephant("Kate", 234, ["writing letters", "stealing peanuts"]);
let micah = new Elephant("Micah", 143, ["trotting", "playing tic tac toe", "doing elephant ballet"]);
let herd = [ellie, charlie, kate, micah];

herd.forEach(el => {
  console.log(Elephant.paradeHelper(el));
})
// output
// Ellie is playing hide and seek!
// undefined
// Charlie is painting pictures!
// undefined
// Kate is stealing peanuts!
// undefined
// Micah is trotting!
// undefined


// Phase IV - Closures
// Let's make a function dinerBreakfast. Ultimately, we want it to return an anonymous closure, which we will be able to use to keep adding breakfast foods to our initial order.

// let bfastOrder = dinerBreakfast();
// "I'd like cheesy scrambled eggs please"
// bfastOrder("chocolate chip pancakes");
// "I'd like cheesy scrambled eggs and chocolate chip pancakes please."
//  bfastOrder("grits");
// "I'd like cheesy scrambled eggs and chocolate chip pancakes and grits please."
// Hints:
// order should be initialized to a starting order (e.g. scrambled eggs and bacon) before the anonymous function can do its work.
// The closure should capture/close over order
// What should the return value of dinerBreakfast be?
// Which function should take in the additional food as an argument?
// Make sure you can call it multiple times and keep chaining on more breakfast foods!

function dinerBreakfast() {
  let order = "I'd like cheesy scrambled eggs please.";
  console.log(order);

  return function (food) {
    order = `${order.slice(0, order.length - 8)} and ${food} please.`;
    console.log(order);
  };
};
bfastOrder = dinerBreakfast(); // absorbs the first half of dinerBreakfast
bfastOrder("chocolate chip pancakes"); // completes the second half of it.
bfastOrder("grits"); // same as above.



// var passed = 3;
// var addTo = function() {
//   var inner = 2;
//   return passed + inner;
// };

// console.dir(addTo); // check this out in chrome dev tools.


// Another example.
function celebrityID () {
    var celebrityID = 999;
    return {
      getID: function ()  {
        return celebrityID;
        },
        setID: function (theNewID)  {
          celebrityID = theNewID;
        }
    }
}
​var mjID = celebrityID (); // At this juncture, the celebrityID outer function has returned.​
mjID.getID(); // 999​
mjID.setID(567); // Changes the outer function's variable​
mjID.getID(); // 567: It returns the updated celebrityId variable 




// Another example with 1. a named function with no paramters, 2. a named function with parameters, 3. an annoymous function with a parameter, and 4. another annonymous function with a different parameter.
function dinerBreakfast() {
  let order = "I'd like cheesy scrambled eggs please.";
  console.log(order);

  return {
    sammy: function() {
      console.log(order + "hahahaaa");
    },

    toyy: function(name) {
      console.log(name + " " + order);
    },

    function(food) {
      order = `${order.slice(0, order.length - 8)} and ${food} please.`;
      console.log(order);
    },

    function(num) {
      order = `${order.slice(0, order.length - 8)} and ${num} beers please.`;
      console.log(order);
    }
  };
    
}
var lolo = dinerBreakfast(); // I'd like cheesy scrambled eggs please.
lolo //
// { sammy: [Function: sammy],
//   toyy: [Function: toyy],
//   function: [Function: function] }
lolo.toyy('Tony Parker'); // Tony Parker I'd like cheesy scrambled eggs please.
lolo.sammy(); // I'd like cheesy scrambled eggs please.hahahaaa
lolo.function('omellete'); // 1. (without the second annonymous function): I'd like cheesy scrambled eggs and omellete please. 
// 2. (with the second annonymous function): I'd like cheesy scrambled eggs and omellete beers please.
// Note that the annonymous function does something with both of the annoymous functions within the main method.
lolo.function(5); // I'd like cheesy scrambled eggs and omellete beers and 5 beers please.