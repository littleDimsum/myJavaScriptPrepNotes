console.log('Variables');
console.log();
// There are a few different ways to declare variables and constants in JavaScript.
// var
// let (ES6+)
// const (ES6+)

// Declaration
// In JavaScript, in order to use a variable or constant, we must declare it by prepending the variable's name with var, let, or const. Declaring a variable is the only way to introduce it to the environment.

// var : To declare a functionally-scoped variable, use the 'var' keyword.
var myVar  // initialize / declare a variable and assign it a value
var myVar = 5;


// let (ES6+): let is a new feature in ES6.
// We can use let to declare block-scoped variables. How are block-scoped variables different than function-scoped variables? Consider the following:
function blockScope() {
  if (true) {
    var x = 'var';
    let y = 'let';
    console.log(x); // 'var'
    console.log(y); // 'let'
  }
  console.log(x); // 'var'
  console.log(y); // ReferenceError: y is not defined
}

blockScope(); // evoking the function

console.log(x); // ReferenceError: x is not defined
console.log(y); // ReferenceError: y is not defined
// Examples of blocks in javascript include if statements, while loops, switch statements, and for loops.
// JavaScript will raise a SyntaxError if you try to declare the same let variable twice in one block. For a more detailed description of let, please refer to the MDN Documentation.

// const (ES6+) : const is a new feature in ES6.
// We use const to declare constants. Constants should be used for constructs that will not be re-declared or re-assigned.
// Properties of constants:
// They are block-scoped like let.
// Unlike Ruby constants, JavaScript will actually enforce constants by raising an error if you try to reassign them. Trying to redeclare a constant with a var or let by the same name will also raise an error.
// A quick example:

const favFood = "cheeseboard pizza"; // Initializes a constant
const favFood = "some inferior food"; // Re-initialization raises an error
// TypeError: Identifier 'favFood' has already been declared

let favFood = "some other inferior food"; // Re-initialization raises an error
// TypeError: Identifier 'favFood' has already been declared

favFood = "deep-dish pizza"; // Re-assignment raises an error
// TypeError: Assignment to constant variable.
// NB: Constants are not immutable. Only the binding is immutable. For example, if we set a constant equal to an object, we can still modify that object:

const animals = {};
animals.cetacea = 'beluga whale';
animals.rodent = 'capybara'; // This works!

animals = {cetacea: 'beluga whale'}; // Raises an error
// NB: Constants cannot be reassigned but new constants of the same names can be declared in nested scopes. For example,

const favFood = "cheeseboard pizza"
console.log(favFood);

if (true) {  
  const favFood = "noodles"; // This works! Declaration is scoped to the `if` block
  console.log(favFood); // Prints "noodles"
}

console.log(favFood); // Prints 'cheeseboard pizza'


// Globals
// If you leave off a declaration when initializing a variable, it will become a global. Never do this.

function good() {
  let x = 5;
}

function bad() {
  y = "Expect the unexpected (eg. globals)";
}

function why() {
  console.log(y); // "Expect the unexpected (eg. globals)""
  console.log(x); // Raises an error
}

good();
bad();
why();
// Unintended global variables create confusing, unpredictable errors. If you intentionally want to create a global variable (i.e. to define a library such as JQuery or Underscore), explicitly add it to your environment's global context:

// node
global.myGlobal = "it's a small world, after all";
// browser
window.myGlobal = "it's a small, small world";




console.log('JavaScript Functions');
console.log();
// Functions in JavaScript are just a special type of JS objects. In other words, you can do anything to a function that you can do to an object.
// There are multiple ways to declare a function and assign it to a variable in Javascript.

// 1. Function-style:
function functionName(arg1, arg2, arg3, argN) {
  // code block...
}

// 2. Expression-style:
const functionName = function (arg1, arg2, arg3, argN) {
  // code block...
};

// 3. Fat Arrow-style (ES6+):
const functionName = (arg1, arg2, arg3, argN) => {
  // code block...
};

// NB: There is a slight functional difference between function-style and expression-style function declarations.


// Invoking functions with ()
// Functions are called a bit differently in JavaScript than in Ruby. In Ruby, after a function is declared, it is invoked (ie. called) every time it is referenced:
// def ret_hello
//   "hello"
// end

// ret_hello #=> "hello"
// In Javascript, referencing the function name by itself will only return a pointer to the function; to execute it, you must invoke the function with arguments. If no arguments are required, this looks like () appended to the function name.

// function with 0 arguments
function retHello() {
  return "hello";
}
retHello; //=> [Function: retHello]
retHello(); //=> "hello"
// function with 2 arguments
function sum(n1, n2) {
  return n1 + n2;
}
sum; //=> [Function: sum]
sum(10, 20); //=> 30

// No implicit returns
// In JavaScript, functions usually do not have implicit returns.
function retHi() {
  "hi";
}

retHi(); // undefined
// Exception: single-line fat-arrow functions.
retHi = () => "hi";
retHi(); // "hi"


// Assigning properties to a function
const fun = function () {
  console.log("So much fun");
};

fun.amount = 100;
console.log(fun.amount); // => 100

// This seems like a bizarre thing to do at first, but the ability to treat functions like any other object is fundamental to JavaScript. We will learn more and see a more practical example of this when we discuss Object-Oriented Programming in JavaScript.
// Passing a function as an argument to another function
// NB: Functions that are passed as an argument to another function are called callbacks.

function logIfEven(num) {
  if (num % 2 === 0) {
    console.log(`${num} is an even number!`);
  }
}

[1, 2, 3].forEach(logIfEven);
// Here we pass the function logIfEven to Array's forEach method. forEach will call logIfEven for each element in the array, passing in the value. forEach is a function that takes another function (ie. a callback) as an argument.

// Let's write our own forEach:
function myForEach(array, cb) {
  for (let i = 0; i < array.length; i++) {
    cb(array[i]);
  }
}
myForEach([1, 2, 3], logIfEven);
// It is very common to pass anonymous functions as arguments:

// **Notice the formatting!**
[1, 2, 3].forEach(function (num) {
  if ((num % 2) === 0) {
    console.log(num);
  }
});
// The key difference between a function and an object in JavaScript is that functions can be invoked with the () operator while regular objects cannot.

// JS functions in Ruby
// In Ruby you can accomplish a similar thing by create a Proc from a block, but the importance of functions as first class objects is greater in JavaScript.
// # a Proc is an object oriented version of a function
// my_proc = Proc.new { |name| puts "Hi #{name}!" }



console.log('CLOSURES and SCOPE');
console.log();
// 1. SCOPE
// The scope of a method is the set of variables that are available for use within the method. The scope of a function includes:
// the function's arguments;
// any local variables declared inside the function;
// any variables that were already declared when the function was defined.
// Consider this example:

function sayHelloNTimes(name, n) {
  function greet() {
    console.log( `Hi, ${name}!`);
  }

  for (let i = 0; i < n; i++) {
    greet();
  }
}
sayHelloNTimes("Bob", 3); // logs 'Hi, Bob!' x3
sayHelloNTimes("Sally", 6); // logs 'Hi, Sally!' x6
// In the example above, the variable name is referenced by greet, even though it was never declared within greet. This is possible because a nested function's scope includes variables declared in the scope where the function was nested.


// 2. CLOSURES
// Functions such as greet that use (ie. capture) such variables (ie. free variables) are called closures.
// Free variables can be modified by closures. Consider this function:

// Ex. 1
function sum(nums) {
  let count = 0;

  function addNum(num) {
    count += num;
  }

  for (let i = 0; i < nums.length; i++){
    addNum(nums[i]);
  }

  return count;
}
sum([1, 3, 5]) // => 9

// Ex. 2
function sandwichMaker() {
  var magicIngredient = "peanut butter";
  function make(filling) {
    return magicIngredient + " and " + filling;
  }
  return make;
}
var ff = sandwichMaker();
console.log(ff('jelly')); // 'peanut butter and jelly' >
console.log(sandwichMaker()('jam')); // 'peanut butter and jam'

// Ex. 3
function threeDeep() {
  var a = 'do re mi';
  function twoDeep() {
    var b = 'fa so la';
    function oneDeep(str) {
      return a + ' ' + b + ' ' + str;
    }

    return oneDeep;
  }

  return twoDeep;
  // note that in order to access the output from 'oneDeep' the main outer
  // function 'threeDeep' have to go through 'twoDeep' because 'threeDeep' itself
  // does not have access to the 'oneDeep' since it is in an inner scope. Hence,
  // 'twoDeep' needs to return 'oneDeep' and then 'threeDeep' can return that
  // output by returning 'twoDeep'.
}
console.log(threeDeep()()('ti do')); // 'do re mi fa so la ti do'


// Ex. 4
sandwichMaker = function(magicIngredient) { 
  make = function(filling) {
  return magicIngredient + " and " + filling; 
  }
  return make; 
}
var hamAnd = sandwichMaker("ham"); 
hamAnd("cheese"); // "ham and cheese" hamAnd("mustard"); // "ham and mustard"
var turkeyAnd = sandwichMaker("turkey"); 
turkeyAnd("Swiss"); // "turkey and Swiss" 
turkeyAnd("Provolone"); // "turkey and Provolone"
// This example creates two distinct functions, hamAnd and turkeyAnd. Even though they both come from the same make definition, they are two distinct objects: The first function stores "ham" as the value of magicIngredient, and the second stores "turkey".

// Note that closures can update the values of outer variables. Closures actually store references to their outer variables, rather than copying their values. So updates are visible to any closures that have access to them. A simple idiom that illustrates this is a box — an object that stores an internal value that can be read and updated:
function box() {
  var val = undefined; 
  return {
    set: function(newVal) { val = newVal; }, 
    get: function() { return val; },
    type: function() { return typeof val; }
  }; 
}
var b = box();
console.log(b.type()); // "undefined" 
console.log(b.set(98.6)); 
console.log(b.get()); // 98.6 
console.log(b.type()); // "number"
// This example produces an object containing three closures: its set, get, and type properties. Each of these closures shares access to the val variable. The set closure updates the value of val, and subsequently calling get and type sees the results of the update.
// Also note that: 
// Functions can refer to variables defined in outer scopes.
// Closures can outlive the function that creates them.
// Closures internally store references to their outer variables, and can both read and update their stored variables.

// Applications
// Passing Arguments Implicitly
// We can use closures to pass down arguments to helper functions without explicitly listing them as arguments.
function isPalindrome(string) {
  function reverse() {
    return string.split('').reverse().join('');
  }

  return string === reverse();
}

// Private State
// Another major use of closures is to create private states. For example:
function Counter() {
  let count = 1;

  return () => count++;
}
let counter = new Counter();
console.log(counter()); // => 1
console.log(counter()); // => 2
counter.count; // undefined
// By closing over (or capturing) the count variable, each Counter function has private, mutable state that cannot be accessed externally.
// Compare that implementation against this one:
function Counter () {
  this._count = 0;
}

Counter.prototype.fire = function () {
  this._count += 1;
  return this._count;
}

let counter = new Counter();
counter.fire(); // 1
counter.fire(); // 2
counter._count // 2
counter._count = 0 // 0 (this works);
// One advantage of the closure way is that the count is truly private. In the first example, there is no way any method beside the closure itself can access the count state. In the second example, a foolish user might set counter._count inadvertently.


// Global Scope
// JavaScript has global scope, represented by the 'window' object in the browser and the 'global' object in Node.js. Adding attributes to these objects makes them available throughout a program.

function theBest() {
  window.realMVP = 'you';
}

theBest(); // initializes realMVP on the global scope
window.realMVP; // 'you'

function whoDaBest() {
  return realMVP; // 'you'
}
whoDaBest(); // 'you'
// While useful on occasion, global variables are usually best avoided, as they give too much code access to their values, increasing the likelihood of bugs.


"use strict";
// A common mistake new JS developers commit is to unintentionally create global variables. This happens if you declare a variable without the var, let, or const keywords anywhere in your code, and can lead to strange behavior. Consider:
window.local; // undefined
function subroutine(){
  local = 'oops';
}
subroutine();
window.local // 'oops';
// Thankfully, modern JS runtimes support strict mode, which prohibits variable declaration without var, let, or const.

"use strict";
window.local; // undefined

function subRoutine(){
  local = 'oops';
}
subRoutine(); // ReferenceError: 'local' is not defined
// Note: "use strict" does not work in the Node CLI or the Dev Tools console.




console.log('THIS');
// Inside of a method — indeed, inside of any function — there is a special keyword available to us: this. It refers to the object that is the context in which the function was called.
// When we call person.greet(), the context object is person itself. This means that we can use this to access a property of the person object from directly within the .greet() method.

// The meaning of this can be incredibly perplexing to new JavaScript developers, and you should take comfort in knowing that jQuery largely makes it so that you don't need to understand it for a while. However, no discussion of objects and methods is complete without talking about this at least a little. In short, if this section is confusing, feel free to skip to Objects in jQuery, and come back to it when you're ready.
// Let's look at how we could use this in our method:
var person = {
  firstName : 'Boaz',
  lastName : 'Sender',
  greet : function() {
    return 'Hi, ' + this.firstName;
  }
};
console.log(person.greet()); // 'Hi Boaz'
var sayIt = person.greet; // store the method in a variable
console.log(sayIt()); // logs 'Hi, undefined'
// The first was pretty straight forward because the 'greet' action was invoked on the person. However, when we store 'person.greet' (uninvoked) and then invoke the stored variable as seen in the second part we run into problems. The confusion arises because the meaning of 'this' can change — as mentioned above, it depends on the context in which the function was called!
// When we store the .greet() method in a variable sayIt and then call sayIt(), the context object changes to the global window object, not the person object. Since the window object doesn't have a property firstName, we get undefined when we try to access it.
// What's a developer to do? First, be aware that storing object methods in variables can have unintended consequences for the meaning of this. Second, be aware that you can force the meaning of this to be what you want it to be, using the .call() or .apply() method on the function itself.

var person = {
  firstName : 'Boaz',
  lastName : 'Sender',
  greet : function() {
    return 'Hi, ' + this.firstName;
  }
};
console.log(person.greet()); // 'Hi, Boaz'
var sayIt = person.greet;
console.log(sayIt()); // logs 'Hi, undefined'
console.log(sayIt.call(person)); // 'Hi, Boaz'
console.log(sayIt.apply(person)); // 'Hi, Boaz'
console.log(sayIt.bind(person)); // [Function: bound greet]
console.log(sayIt.bind(person)()); // 'Hi, Boaz'
// Both .call() and the very similar .apply() method also let us pass arguments to the function we're invoking. Imagine if our greet method took some arguments; we could pass those arguments using .call() like this:

var person = {
  firstName : 'Boaz',
  lastName : 'Sender',
  greet : function(greeting, punctuation) {
    return greeting + ', ' + this.firstName + punctuation;
  }
};
var sayIt = person.greet;
sayIt.call(person, 'Hello', '!!1!!1') ;

// We could do the same thing using .apply(), but we'd pass the arguments within a single array instead of as separate arguments:
var person = {
  firstName : 'Boaz',
  lastName : 'Sender',
  greet : function(greeting, punctuation) {
    log( greeting + ', ' + this.firstName + punctuation );
  }
}; 
var sayIt = person.greet;
sayIt.apply(person, [ 'Hello', '!!1!!1' ]);



// Consider this example:
let cat = {
  purr: function () {
    console.log("meow");
  },
  purrMore: function () {
    for (let i = 0; i < 10; i ++) {
      this.purr();
    }
  }
};

console.log(cat.purr());
console.log(cat.purrMore());
// When we call a function like cat.purr() or cat.purrMore(), a variable named this gets set. Through the this variable, the method can access the object it was called on. this is a lot like self in Ruby.
// We do not use this in the purr method, but we do in purrMore. In purrMore, we use this to access the cat object that has a purr method.
// Unlike Ruby's self, this is not optional if you want to access the attributes of the object. In other words, purr() instead of this.purr() would not work.
// If we had used purr() instead of this.purr() in purrMore, the function would have first looked for a local variable named purr in the scope of purrMore and if it hadn't found it there, it would have then looked up its scope chain. this.purr() tells purrMore to look at cat, the object it was invoked on, to find purr.
// This is because cat.purrMore function is called method-style, i.e. object.method(arguments, ...). Using method-style invocation (a.k.a. dot-notation) sets this to the object preceding the dot.
// Calling a function in the traditional function style (f(a, b, c)) does not set this properly. In such cases, this is set to the global scope (either window or global).

var purrLots = cat.purrMore;
console.log(purrLots()); // this evaluates to the global scope

// Scope Issues with this
// There is one tricky thing about this, and it comes up when passing callbacks. Observe, dear reader:

function times(num, fun) {
  for (let i = 0; i < num; i++) {
    fun(); // call is made "function-style"
  }
}

const cat = {
  age: 5,

  ageOneYear: function () {
    this.age += 1;
  }
};
console.log(cat.ageOneYear()); // works

console.log(times(10, cat.ageOneYear)); // ReferenceError; this.age is not defined
// Calling cat.ageOneYear() method style works. But the calls to increment the cat's age ten times don't.


// `times` is the same:
function times(num, fun) {
  for (let i = 0; i < num; i++) {
    fun(); // call is made "function-style"
  }
}

const cat = {
  age: 5,
  ageOneYear: function () {
    this.age += 1;
  }
};

// Function argument is different:
times(10, function () {
  cat.ageOneYear();
});
// times will still call the passed function function-style, so this will still be set to window. But the closure doesn't care, because inside, it explicitly calls ageOneYear method style on cat.
// This is a very common pattern, so there is another, less verbose alternative using Function.prototype.bind.

console.log(times(10, cat.ageOneYear.bind(cat)));
// bind is a method you can call on JS functions. Other methods defined on Function objects live in Function.prototype.
// bind works just like the closure we made, in which cat#ageOneYear is called method style on the cat object. cat.ageOneYear.bind(cat) returns a closure that will still be called function-style, but which calls cat.ageOneYear method-style inside of it.
// Note that you can bind functions to any scope, not just this:

const crazyMethod = cat.ageOneYear.bind(dog);

// Nested this Problems
// Let's see the same problem in another context:
function SumCalculator() {
  // scope 0
  this.sum = 0;
}

SumCalculator.prototype.addNumbers = function (numbers) {
  // scope 1
  numbers.forEach(function (number) {
    // scope 2
    this.sum += number; // noooo!
  });

  return this.sum;
};
// For the same reason as before, the use of this in scope 2 will not work. Because the anonymous function will not be called method style by Array.prototype.forEach, this will not be set properly. That makes sense if you think about it: the anonymous function is not even a method of SumCalculator!
// This problem can be hard to spot, because even though we are using this in a method of SumCalculator, we're also inside an anonymous, nested function which will be called function style. In particular, the correct use of this in scope 1 will mean something different than the incorrect use in scope 2.

// This sort of runs counter to our basic understanding of closures: that they can access variables defined in the enclosing scope. However, this is special because this doesn't get captured; it gets reset everytime a function is called.
// If we do want to close over this, we need to store it in a normal, capturable local variable:

function SumCalculator() {
  // scope 0
  this.sum = 0;
}

SumCalculator.prototype.addNumbers = function (numbers) {
  const sumCalculator = this;

  numbers.forEach(function (number) {
    sumCalculator.sum += number; // will work as intended
  });

  return this.sum;
};
// Because sumCalculator is a normal local variable (as opposed to the special this variable), it can be captured and used by the closure in the usual way. Later, when the closure is called function style, it won't matter, because instead of using this (which would have been reset to window), we instead use sumCalculator, which holds the old reference to the SumCalculator object that addNumbers was called on.

// Instead of sumCalculator, you may often see people name a variable like this that. that is just a conventional name, there is no magic to it. A somewhat less common name is self. I prefer a less abstract name like sumCalculator, but it is a matter of personal code style.

// To repeat: the reason this solution works is because sumCalculator is a normal variable captured according to typical rules, while this is a special variable which is never captured and is reset on every function call.




console.log('ARROW FUNCTIONS');
console.log();
// Arrow functions, a.k.a. Fat Arrows, are a way of declaring functions. They were introduced in ES2015 as a way of solving many of the inconveniences of the normal callback function syntax. Consider the following example:

// normal callback function
function showEach(array) {
  array.forEach(function(el) {
    console.log(el);
  });
}

// fat arrow function
function showEach(array) {
  array.forEach(el => console.log(el));
}
// Both functions in the example above accomplish the same thing. However, the arrow syntax is shorter and easier to follow.

// Anatomy of an Arrow Function
(parameters, go, here) => {
  statements;
  return value;
}
// For single-expression blocks, { } and return are implied, and you may omit the ( ) when there is a single argument.

argument => expression; // equal to (argument) => { return expression };
// N.B.: In JavaScript, an expression is a line of code that returns a value. Statements are, more generally, any line of code.
// Arrow functions aren't just syntactic sugar for normal functions, though. They behave differently in some scenarios:

// Scope
// Arrow functions, unlike normal functions, do not create a new scope. In other words, this means the same thing inside an arrow function that it does outside of it. Consider the following scenario with a normal function:

function Cat(name) {
  this.name = name;
  this.toys = ['string', 'ball', 'balloon'];
};

Cat.prototype.play = function meow() {
  this.toys.forEach(function(toy) {
    console.log(`${this.name} plays with ${toy}`);
  });
};

let garfield = new Cat('garfield');
garfield.play();
// output
// undefined plays with string
// undefined plays with ball
// undefined plays with balloon
// play breaks because this in this.name refers to the scope of the forEach method. But if we rewrite play using a fat arrow function, it works:

Cat.prototype.play = function meow() {
  this.toys.forEach(toy => console.log(`${this.name} plays with ${toy}`));
};

garfield.play();
//output
// garfield plays with string
// garfield plays with ball
// garfield plays with balloon
// Implicit Returns

// Fat arrows implicitly return when they consist of a single expression.
let halfMyAge = myAge => myAge / 2;
halfMyAge(30) === 15; // true
// This doesn't work if the fat arrow uses a block.
let halfMyAge = myAge => {
  let age = myAge;
  age / 2;
}
typeof halfMyAge(30) === "undefined"; // true
// To return a value from a fat arrow using a block, you must explicitly return.
let halfMyAge = myAge => {
  let age = myAge;
  return age / 2;
}
halfMyAge(30) === 15; // true

// Potential Pitfalls
// Syntactic Ambiguity
let ambiguousFunction = () => {}
// In Javascript, {} can signify either an empty object or an empty block.
// Is ambiguousFunction supposed to return an empty object? If so, it's broken because there's no way to distinguish between either. JS will default to an empty block.

typeof ambiguousFunction() === "undefined"; // true
// To make a single-expression fat arrow return an empty object, wrap it in parentheses:

clearFunction = () => ({});
typeof clearFunction() === "object"; // true
// No Binding
// Fat arrows don't scope like normal functions, so you can't reassign this, which is always what it was at the time the fat arrow was declared.

let returnName = () => this.name;
returnName.call({name: 'Dale Cooper'}) // undefined;
// No Constructors
// Fat arrows can't be used as constructors.

const FatCat = (name) => this.name = name;
let g = new FatCat("garfield"); // TypeError: FatCat is not a constructor
// No arguments
// Because they don't change scope, fat arrows don't have their own arguments object.
const hasArgs = function() {
  let noArgs = () => arguments[0];
  return noArgs('FakeArg');
};

hasArgs('RealArg') // returns 'RealArg';
// No Names
// Fat arrows are anonymous, like their lambda counterparts in other languages.

sayHello(name) => console.log(`Hi, ${name}!`); // SyntaxError
(name) => console.log(`Hi, ${name}!`); // correct
// If you want to name your function you must assign it to a variable like this:
const sayHello = (name) => console.log(`Hi, ${name}!`);



// Random example.
function scheduleGreatMovieReminder(movie) {
  // remind in one min
  setTimeout(function() {
    console.log(`Remember to watch: ${movie}`);
  }, 60 * 1000);
  console.log(`Timer set for ${movie}`)
}
scheduleGreatMovieReminder("Citizen Kane");
scheduleGreatMovieReminder("Touch of Evil");
scheduleGreatMovieReminder("The Third Man");

