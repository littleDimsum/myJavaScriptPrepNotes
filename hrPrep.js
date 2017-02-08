/****************************************************************************/
console.log();
console.log(' ===== HACK REACTOR PREP QUESTIONS ===== '); 
console.log();
/****************************************************************************/



/****************************************************************************/
console.log();
console.log(' ===== MODULE 0: EXERCISES ===== '); 
console.log();
/****************************************************************************/

console.log(' ===== Greet Customers ===== ');  
//----------------------------------------------------------------------
// Write a function called "greetCustomer".
// Given a name, "greetCustomer" returns a greeting based on how many times that customer has visited the restaurant.  Please refer to the customerData object. 
// The greeting should be different, depending on the name on their reservation.
// Case 1 - Unknown customer ( Name is not present in customerData ): 
// var output = greetCustomer('Terrance');
// console.log(output); // --> 'Welcome! Is this your first time?'
// Case 2 - Customer who has visited only once ( 'visits' value is 1 ):
// var output = greetCustomer('Joe');
// console.log(output); // --> 'Welcome back, Joe! We're glad you liked us the first time!'
// Case 3 - Repeat customer: ( 'visits' value is greater than 1 ):
// var output = greetCustomer('Carol');
// console.log(output); // --> 'Welcome back, Carol! So glad to see you again!'
// Notes:
// * Your function should not alter the customerData object to update the number of visits.
// * Do not hardcode to the exact sample data. This is a BAD IDEA:
var customerData = {
  'Joe': {
    visits: 1
  },
  'Carol': {
    visits: 2
  },
  'Howard': {
    visits: 3
  },
  'Carrie': {
    visits: 4
  }
};
//
var greetCustomer = function (data, firstName) {
  var name = data[firstName];
  if (name === undefined) {
    return 'Welcome! Is this your first time?';
  } else if (name.visits === 1) {
    return `Welcome back, ${firstName}! We\'re glad you liked us the first time!`;
  } else if (name.visits > 1) {
    return `Welcome back, ${firstName}! So glad to see you again!`;
  }
};
console.log(greetCustomer(customerData, 'John'));
console.log(greetCustomer(customerData, 'Joe'));
console.log(greetCustomer(customerData, 'Carol'));
console.log(greetCustomer(customerData, 'Carrie'));
console.log();


console.log(' ===== Array to Object ===== ');    
//----------------------------------------------------------------------
// Write a function called "transformEmployeeData" that transforms some employee data from one format to another.
// The argument will look something like this:
var arrData = [ 
  [['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']], 
  [['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'CEO']]
];
// Given that input, the return value should look like this:
// [
//     {firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk'},
//     {firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager'}
// ]

// Note that the input may have a different number of rows or different keys than the given sample. 

// For example, let's say the HR department adds a "tshirtSize" field to each employee record. Your code should flexibly accommodate that.
var transformEmployeeData = function (data) {
  var result = [];
  for (var i in data) {
    var hash = {};
    for (var j in data[i]) {
      hash[data[i][j][0]] = data[i][j][1];
    }
    result.push(hash);
  }
  return result;
};
console.log(transformEmployeeData(arrData));
console.log();


console.log(' ===== Object to Array ===== ');    
//----------------------------------------------------------------------
// Write  a function called "convertObjectToList" which converts an object literal into an array of arrays, like this:
// Argument:
var hash1 = {
  name: 'Holly',
  age: 35,
  role: 'producer'
};
//Return value:
// [['name', 'Holly'], ['age', 35], ['role', 'producer']]

// Note that your function should be able to handle ANY object like this, not just the exact sample provided above.

// E.g., it should also be able to handle this, or any other object containing simple key-value pairs.
var hash2 = {
  species: 'canine',
  name: 'Bo',
  weight: 45
};
var convertObjectToList = function (obj) {
  var result = [];
  for (var key in obj) {
    result.push([key, obj[key]]);
  }
  return result;
};
console.log(convertObjectToList(hash1));
console.log(convertObjectToList(hash2));
console.log();
//
//

/****************************************************************************/
console.log();
console.log(' ===== MODULE 1: READING ===== '); 
console.log();
/****************************************************************************/
// Reactor Prep Module 1: Building Blocks Review
// Welcome to Module 1!

// This module's focus is "reviewing the building blocks". It's the 2nd of 4 modules in the Reactor Prep program.

// If it's the 2nd module, why call it "module 1"?
// Since computers use binary math, in programming, you typically begin counting from 0, not from 1. We are getting you used to programmer-speak.

// The Goal
// This module consists of lots of very small problems.

// Your goal is to complete all of them, and warm up before proceeding on to bigger, harder problems.

// Abe Lincoln said: "Give me six hours to chop down a tree and I will spend the first four sharpening the axe." Well, get ready to sharpen your axe.

// You will read more on our philosophy in the next lesson, Know theEasyStuffCold.

// What to do
// In order to gain access to the problems, start by clicking this link.

// Once you have access, close the new window or tab and navigate through the problems using the left side bar. You can do problems in any order, but like last time, please remember to click the Complete and continue button on the top right of your screen once you get each problem's tests to pass.

// Many of these questions will be simple, and others will involve a few steps. Throughout this process, you will refine your googling skills, get used to typing out javascript syntax, and analyzing failed tests, all of which are vital to your success as a software engineer.

// Please finish all of the assignments. Yes, there's a lot of them, but keep tackling them and you'll be fine.

// Things to keep in mind
// You will need to complete 100% of these Module 1 assignments.
// You will not be receiving direct feedback on the code that you submit in this Module. Progress is driven entirely by the automated tests.
// Problems do not need to completed in any order.
// If you get stuck on one...
// try to solve some others before returning to where you got lost.
// Do not click Submit Anyway. See the FAQ below on what to do.
// It is unlikely you will complete all of these exercises in one sitting. Give your mind time to absorb what you have accomplished and you will be amazed at how rapidly your skills and general approach to programming improve.
// If you are pretty sure that a test or a problem is broken, please feel free to let us know in Slack, via the #mod1_building_blocks channel.
// FAQ
// But that's so many problems!
// Our philosophy is for you to know how to do the basic stuff fluidly and almost automatically. We haven't found a better way for you to get better at that than, well, to practice!

// You'll be able to do this. Stick with it.

// But I'm too advanced for this stuff!
// If you are truly solid on this material, you should fly through it, right? :) Bear with us. The idea isn't being able to do the problems at all, it's doing them quickly and fluently. That way you have an easier time with the harder problems.

// Is this "open book"?
// Yes, you can look up JavaScript syntax. For this purpose, we strongly recommend staying on the Mozilla Developer Network site, which has very reliable information, and not wandering randomly around the entire Internet.

// What should I do if I get stuck on a problem?
// If you are not sure about how to use a particular JavaScript method, try googling it on MDN:
// e.g., searching on "MDN sort" will give you the MDN pages about JavaScript's sort() method.
// If something is not behaving the way you expect, use console.log to experiment and see what exactly is happening.
// If you still cannot figure it out, try starting from scratch. Implement an alternate solution.
// What happens if I can't get all the tests to pass for a problem?
// See above, on getting unstuck.

// Above all, please do not press Submit Anyway in Repl.it. If you truly can't figure out a problem, perhaps there's an issue with the problem itself (we may have mis-calibrated its difficulty or there may be some other problem that has nothing to do with you). Please reach out to us via the #mod1_building_blocks channel on Slack. **Paid Users: You may also reach out to us on your private, dedicated support channel.

// What happens if I'm really struggling on multiple problems?
// Your best bet will be getting help from the community. Reach out on Slack, via the #mod1_building_blocks channel, and let's examine your situation. **Paid Users: You may also reach out to us on your private, dedicated support channel.
//
// The following is an excerpt from an excellent article on programmer interviewing.

// Excerpt from "The Guerrilla Guide to Interviewing"
// For the first interview of the day, I’ve started including a really, really easy programming problem. I had to start doing this during the dotcom boom when a lot of people who thought HTML was “programming” started showing up for interviews, and I needed a way to avoid wasting too much time with them. It’s the kind of problem that any programmer working today should be able to solve in about one minute. Some examples:
// Write a function that determines if a string starts with an upper-case letter A-Z
// var testtt = function (str) {
//   return /^[A-Z]/.test(str);
//   // return /[A-Z]/.test(str[0]);
// };
// console.log(testtt('Swy'));
// console.log(testtt('swy'));
// Write a function that determines the area of a circle given the radius
// Add up all the values in an array
// These softball questions seem too easy, so when I first started asking them, I had to admit that I really expected everyone to sail right through them. What I discovered was that everybody solved the problem, but there was a lot of variation in how long it took them to solve.

// That reminded me of why I couldn’t trade bonds for a living.

// Jared is a bond trader. He is always telling me about interesting deals that he did. There’s this thing called an option, and there are puts, and calls, and the market steepens, so you put on steepeners, and it’s all very confusing, but the weird thing is that I know what all the words mean, I know exactly what a put is (the right, but not the responsibility, to sell something at a certain price) and in only three minutes I can figure out what should happen if you own a put and the market goes up, but I need the full three minutes to figure it out, and when he’s telling me a more complicated story, where the puts are just the first bit, there are lots of other bits to the story, I lose track very quickly, because I’m lost in thought (“let’s see, market goes up, that mean interest rates go down, and now, a put is the right to sell something…”) until he gets out the graph paper and starts walking me through it, and my eyes glazeth over and it’s very sad. Even though I understand all the little bits, I can’t understand them fast enough to get the big picture.

// And the same thing happens in programming. If the basic concepts aren’t so easy that you don’t even have to think about them, you’re not going to get the big concepts.

// Serge Lang, a math professor at Yale, used to give his Calculus students a fairly simple algebra problem on the first day of classes, one which almost everyone could solve, but some of them solved it as quickly as they could write while others took a while, and Professor Lang claimed that all of the students who solved the problem as quickly as they could write would get an A in the Calculus course, and all the others wouldn’t. The speed with which they solved a simple algebra problem was as good a predictor of the final grade in Calculus as a whole semester of homework, tests, midterms, and a final.

// You see, if you can’t whiz through the easy stuff at 100 m.p.h., you’re never gonna get the advanced stuff.
//
/*Coding Style Guide for Reactor Prep
What is readability?
Code readability refers to writing code whose purpose is clear and self-explanatory, and whose syntax, layout, and structure are consistent and unsurprising.

Code with lots of inconsistencies requires more mental effort from the code reader, who must parse through random visual differences to determine what differences are actually meaningful.

Often that confused code reader is you.

Confusing yourself and struggling to parse your own code in the context of an interview is Bad News. Don't make things harder for yourself!

Follow these guidelines, and you'll be ok.

Indentation
When writing any block of code that is logically subordinate, that block should be indented two spaces more than the surrounding lines.

Indent with spaces, not tabs. Do not put any tab characters anywhere in your code. You would do well to stop pressing the tab key entirely.

When a line opens a block, the next line starts 2 spaces further in than the line that opened:

Good:

1│ if (condition) {
2│   action();
3│ }
<code></code>
Bad:

1│ if (condition) {
2│ action();
3│ }
<code></code>
When a line closes a block, that line starts at the same level as the line that opened the block

Good:

1│ if (condition) {
2│   action();
3│ }
<code></code>
Bad:

1│ if (condition) {
2│   action();
3│   }
<code></code>
No two lines should ever have more or less than 2 spaces difference in their indentation. Any number of mistakes in the above rules could lead to this, but one example would be:

Bad:

1│ transmogrify({
2│    a: {
3│     b: function(){
4│     }
5│ }});
<code></code>
Variable declaration
Use a new line for each variable declaration.

Use a new var statement for each line you declare a variable on.

Good:

1│ var ape;
2│ var bat;
<code></code>
Bad:

1│ var cat,
2│     dog
<code></code>
Bad:

1│ var eel, fly;
<code></code>
Naming
Variable names
A single descriptive word is best. "Descriptive" preferably means it's directly describing some noun in the "domain" of your problem. Name your variables after their purpose, not their structure.

Good:

1│ var animals = ['cat', 'dog', 'fish'];
<code></code>
Bad:

1│ var targetInputs = ['cat', 'dog', 'fish'];
<code></code>
Bad:

1│ var array = ['cat', 'dog', 'fish'];<code></code>
Collections such as arrays and maps should have plural noun variable names.

Good:

1│ var animals = ['cat', 'dog', 'fish'];
<code></code>
Bad:

1│ var animalList = ['cat', 'dog', 'fish'];
<code></code>
Bad:

1│ var animal = ['cat', 'dog', 'fish'];
<code></code>
Boolean names
Variables that represent boolean values should be named accordingly. Since a boolean either is true or false, typically you prefix the variable name with is or are.

E.g., isValid or areAvailable.

Good:

1│ var areEqual = true;
<code></code>
Bad:

1│ var pass = true;
<code></code>
Function names
Function names should start with a verb -- in the form "{verbObject}", like "calculateTotal" or "listInventory" etc. That makes it self-describing, telling the code reader at a glance what the function's input and output are as well as a summary of the processing that transforms the former to the latter.

Bad:

1│ var waterBlocks = function() {
2│   // count how many blocks of ater are collected between each tower 
3│ }
Good:

1│ var countWaterBlocks = function() {
2│   // do stuff 
3│ }<code></code>
Good:

1│ var counterWaterBlocksBetweenTowers = function() {
2│   // do stuff 
3│ }
<code></code>
Capital letters in variable names
Most people choose to use capitalization of the first letter in their variable names to indicate that they contain a class).
Optionally, some people use a capital letter only on functions that are written to be run with the keyword new.
Use all-caps for constant variables (ones that will not change throughout the life of your program).
1│ // Example of a capitalized class constructor function name.
2│ function Animal() {
3│ }
4│ 
5│ // Example of an all-caps constant variable name.
6│ const MAX_ITEMS_IN_QUEUE = 100;
<code></code>
Symbols / punctuation
Don't omit braces (even if you can)
Never omit braces for statement blocks (although they are technically optional).

Good:

1│ for (key in object) {
2│   alert(key);
3│ }
<code></code>
Bad:

1│ for (key in object)
2│   alert(key);
<code></code>
Quoting
Prefer single quotes around JavaScript strings, rather than double quotes.

Having a standard of any sort is preferable to a mix-and-match approach, and single quotes allow for easy embedding of HTML, which prefers double quotes around tag attributes.

Good:

1│ var dog = 'dog';
2│ var cat = 'cat';
<code></code>
Acceptable:

1│ var dog = "dog";
2│ var cat = "cat";
<code></code>
Bad:

1│ var dog = 'dog';
2│ var cat = "cat";
<code></code>
Semicolons
Don't forget semicolons at the end of lines

Good:

1│ alert('hi');
<code></code>
Bad:

1│ alert('hi')
<code></code>
Semicolons are not required at the end of statements that include a block--i.e. if, for, while, etc.

Good:

1│ if (condition) {
2│   response();
3│ }
<code></code>
Bad:

1│ if (condition) {
2│   response();
3│ };
<code></code>
Misleadingly, a function may be used at the end of a normal assignment statement, and would require a semicolon (even though it looks rather like the end of some statement block).

Good:

1│ var greet = function () {
2│   alert('hi');
3│ };
<code></code>
Bad:

1│ var greet = function () {
2│   alert('hi');
3│ }
<code></code>
Operators and keywords
Use strict comparison operators
Always use === and !==, since == and != will automatically convert types in ways you're unlikely to expect.

Good:

1│ // this comparison evaluates to false, because the number zero is not the same as the empty string.
2│ if (0 === '') {
3│   alert('looks like they\'re equal');
4│ }
<code></code>
Bad:

1│ // This comparison evaluates to true, because after type coercion, zero and the empty string are equal.
2│ if (0 == '') {
3│   alert('looks like they\'re equal');
4│ }
<code></code>
Use of the ternary operator (x ? y : z)
The ternary operator is the form:

1│ x ? y : z;
<code></code>
It evaluates to y if x is true, otherwise it evaluates to z.

The ternary operator makes for compact code, but it can be hard to read.

Which of the following do you think is easier to read?

Uses ternary:

1│ return (actual === expected) ? 'passed' : 'FAILED ['+ testName + '] Expected "'+expected+'",but got '+'"'+actual+'"';
<code></code>
Uses simple if-statement:

1│ if (actual !== expected) {
2│   console.log('FAILED ' + testName + ': Expected ' + expected + ', but got ' + actual);
3│ } else {
4│   console.log('passed');
5│ }
<code></code>
Only use the ternary operator if it's extremely clear and short to do so. Don't just use it to be clever.

Use of the not-operator (!)
The idiom is to keep the not-operator right next to the item it is negating:

Bad:

1│ if (! isEqual) {
<code></code>
Good:

1│ if (!isEqual) {
<code></code>
Switch statements
Avoid use of switch statements altogether.

They are prone to error due to missing break statements. See this article for more detail.

Brevity
Write the least code you can that is still completely clear.
Not as good:

1│ function square(n) {
2│   var squaredN = n * n;
3│   return squaredN;
4│ }
<code></code>
Good:

1│ function square(n) {
2│   return n * n;
3│ }
<code></code>
The principle is to write just enough code to be self-describing. The aim is for any reasonable code reader to be able to glance at a given piece of code and understand what it's doing, with no comments, without asking anybody for an explanation, and without having to pore over the surrounding code for clues.

Avoid negation
Whenever you find yourself with lots of negation, you might have an opportunity to increase clarity by converting it to positive.

A bit confusing to work out:

1│ if(!equalSizes || !equalValues) {
2│ 
3│               // negative outcome
4│ 
5│ } else {
6│
7│               // positive outcome
8│
9│ }
<code></code>
More straightforward:

1│ if(equalSizes && equalValues) {
2│ 
3│               // positive outcome
4│ 
5│ } else {
6│
7│               // negative outcome
8│
9│ }
<code></code>
Return boolean results directly
Whenever you find yourself returning true or false from within a conditional, you might have an opportunity for brevity.

Verbose:

1│ if(charSet.size < text.length) {
2│
3│   return false;
4│
5│ }
6│
7│ return true;
<code></code>
Concise:

1│ return charSet.size > text.length;
<code></code>
Spacing
Code density
Conserve vertical space by minimizing the number of lines you write. The more concisely your code is written, the more context can be seen in one screen.
Good:

1│ function square(n) {
2│   return n * n;
3│ }
4│ 
5│ function assertEqual(actual, expected, testName) {
6│   // compare actual and expected
7│ }
<code></code>
Bad:

1│ function square(n) {
2│   return n * n;
3│ }
4│
5│
6│
7│ function assertEqual(actual, expected, testName) {
8│   // compare actual and expected
9│ }
<code></code>
Conserve line length by minimizing the amount of complexity you put on each line. Long lines are difficult to read. Try to make it easily read in one glance.
This goal is in conflict with the line quantity goal, so you must do your best to balance them.
Padding & additional whitespace
Generally, we don't care where you put extra spaces, provided they are not distracting.

You may use it as padding for visual clarity. If you do though, make sure it's balanced on both sides.

Good:

1│ alert('I chose to put no visual padding around this string');
<code></code>
Good:

1│ alert( 'I chose to put visual padding around this string' );
<code></code>
Bad:

1│ alert( 'I only put visual padding on one side of this string');
<code></code>
You may use it to align two similar lines, but it is not recommended. This pattern usually leads to unnecessary edits of many lines in your code every time you change a variable name.

1│ // discouraged:
2│ var firstItem  = getFirst();
3│ var secondItem = getSecond();
<code></code>
Put else and else if statements on the same line as the ending curly brace for the preceding if block

Good:

1│ if (condition) {
2│   response();
3│ } else {
4│   otherResponse();
5│ }
<code></code>
Bad:

1│ if (condition) {
2│   response();
3│ } 
4│ else {
5│   otherResponse();
6│ }
<code></code>
Spacing between commas
Bad:

1│ assertEqual(Math.pow(3,2),9,'Math.pow squares properly');
<code></code>
Good:

1│ assertEqual(Math.pow(3, 2), 9, 'Math.pow squares properly');
<code></code>
Spacing around operators
Bad:

1│ 'Failed ['+testName+']'...
<code></code>
Good:

1│ 'Failed [' + testName + ']'...
<code></code>
Bad:

1│ if(actual===expected){
2│   // action
3│ }else{
4│   // alternate action
5│ }
<code></code>
Good:

1│ if(actual === expected){
2│   // action
3│ } else {
4│   // alternate action
5│ }
<code></code>
Code comments
Code comments are usually less effective than a good variable names and function names.
Having to write comments suggests that your code structure and naming are not sufficient to convey the "story" (the flow of data and processing) of your code by themselves. That's a bad sign.
Comments make a file longer and drift out of sync with the code they annotate.
If you do comment, then comment on the purpose of the code (the "why"), not the mechanics of implementing it (the "how").
Do not leave stray comments (aka "cruft", or leftover junk) sitting in your code. Just delete unnecessary / outdated / temporary-scaffolding type of comments.
JavaScript gotchas
ES6
Knowledge and usage of new Javascript features is impressive. However, in an interview context, complicated machinery is often disallowed. The interviewer mostly wants to see evidence of your logic, and having cool latest-and-greatest machinery can obscure that sometimes. There is also an element of overwhelming yourself. In general, it is best to keep it simple when possible.

Bad:

1│ if (actual === expected) {
2│   console.log(`passed`);
3│ } else {
4│   console.log(`Failed [${testName}] Expected "${expected}", but got "${actual}"`);
5│ }
<code></code>
Good:

1│ if (actual === expected) {
2│   console.log(`passed`);
3│ } else {
4│   console.log('FAILED [' + testName + '] Expected "' + expected + '", but got "' + actual + '"'); 
5│ }
<code></code>
Bad:

1│ var result = array.map((element) => element * 2);
<code></code>
Good:

1│ var result = array.map(function(element) {
2│   return element * 2;
3│ });
<code></code>
Avoid for...in
Do not use for...in statements with the intent of iterating over a list of numeric keys. Use a for-with-semicolons statement in stead.

Good:

1│ var list = ['a', 'b', 'c']
2│ for (var i = 0; i < list.length; i++) {
3│   alert(list[i]);
4│ }
<code></code>
Bad:

1│ var list = ['a', 'b', 'c']
2│ for (var i in list) {
3│   alert(list[i]);
4│ }
<code></code>
Snake vs. Camel Casing
In Javascript, the convention is use 'Camel Casing' when naming variables. This is opposed to the convention called 'Snake Casing', which is used in other programming languages like Ruby.

Good:

1│ var camelCased = 'Used in javascript';
<code></code>
Bad:

1│ var snake_cased = 'Used in other languages';
<code></code>
Under certain circumstances, you will see people use snake-casing for constants in Javascript.

1│ const MAX_ITEMS_IN_QUEUE = 100;*/
//
//

console.log(' ===== MODULE 1: EXERCISES ===== '); 
console.log();
/****************************************************************************/

console.log(' ===== 01: countWords ===== '); 
//---------------------------------------------------------------------- 
// Write a function called "countWords".

// Given a string, "countWords" returns an object where each key is a word in the given string, with its value being how many times that word appeared in th given  string. 

// Notes:
// * If given an empty string, it should return an empty object.

// var output = countWords('ask a bunch get a bunch'); 
// console.log(output); // --> {ask: 1, a: 2, bunch: 2, get: 1}

// Starter Code : 
// function countWords(str) {
//   // your code here
// }  
var countWords = function (string) {
  var strArr = string.split(' ');
  var hash = {};
  for (var i in strArr) {
    if (hash[strArr[i]] === undefined) {
      hash[strArr[i]] = 1;
    } else {
      hash[strArr[i]] += 1;
    }
    // hash[strArr[i]] = (hash[strArr[i]] || 0) + 1;
  }
  return hash;
};
console.log(countWords('ask a bunch get a bunch'));
console.log(countWords('john will always be john except john Bull'));
console.log(countWords('Peter Pipper picked a peck and a bowl'));
console.log();


console.log(' ===== 02: isPersonOldEnoughToDrinkAndDrive ===== ');    
//----------------------------------------------------------------------
// Write a function called "isPersonOldEnoughToDrinkAndDrive".

// Given a "person" object, that contains an "age" property, "isPersonOldEnoughToDrinkAndDrive" returns whether the given person is old enough to legally drink and drive in the United States.

// Notes:
// * The legal drinking age in the United States is 21.
// * The legal driving age in the United States is 16.
// * It is always illegal to drink and drive in the United States.

// var obj = {
//   age: 45
// };
// var output = isPersonOldEnoughToDrinkAndDrive(obj);
// console.log(output); // --> false

// Starter Code :
// function isPersonOldEnoughToDrinkAndDrive(person) {
//   // your code here
// }
var john = { 
  age: 17 
};
var peter = { 
  age: 75 
};
var paul = { 
  age: 21 
};
var isPersonOldEnoughToDrinkAndDrive = function (obj) {
  return obj.age >= 21;
};
console.log(isPersonOldEnoughToDrinkAndDrive(john));
console.log(isPersonOldEnoughToDrinkAndDrive(peter));
console.log(isPersonOldEnoughToDrinkAndDrive(paul));
console.log();


console.log(' ===== 03: extend ===== ');    
//----------------------------------------------------------------------
// Write a function called "extend".

// Given two objects, "extend" adds properties from the 2nd object to the 1st object.

// Notes:
// * Add any keys that are not in the 1st object.
// * If the 1st object already has a given key, ignore it (do not overwrite the property value).
// * Do not modify the 2nd object at all.
var abj1 = { 
  a: 1, b: 2 
};
var abj2 = { 
  b: 4, c: 3 
};
var abj3 = { 
  d: 'opps', e: 3, 'aww': 'whoa!' 
};
// extend(obj1, obj2);
// console.log(abj1); // --> {a: 1, b: 2, c: 3}
// console.log(abj2); // --> {b: 4, c: 3}

// Starter Code :
// function extend(obj1, obj2) {
//   // your code here
// }
var extend = function (obj1, obj2) {
  for (var key in obj2) {
    if (obj1[key] === undefined) {
      obj1[key] = obj2[key];
    }
  }
  return obj1;
};
console.log(extend(abj3, abj1)); // note that this is different from below
console.log(extend(abj1, abj2));
console.log(extend(abj2, abj3));
console.log(extend(abj3, abj1));
console.log();


console.log(' ===== 04: getElementsThatEqual10AtProperty ===== ');    
//----------------------------------------------------------------------
// Write a function called "getElementsThatEqual10AtProperty".

// Given an object and a key, "getElementsThatEqual10AtProperty" returns an array containing all the elements of the array located at the given key that are equal to ten.

// Notes:
// * If the array is empty, it should return an empty array.
// * If the array contains no elements equal to 10, it should return an empty array.
// * If the property at the given key is not an array, it should return an empty array.
// * If there is no property at the key, it should return an empty array.
var obja = {
  key: [1000, 10, 50, 10]
};
var objb = {
  koy: [10, 510, 150, 100]
};
var objc = {
  kuy: [100, 20, 30, 40, 10, 50, 10, 79, 120, '10', 10.0, 10.0]
};
// var output = getElementsThatEqual10AtProperty(obj, 'key');
// console.log(output); // --> [10, 10]

// Starter Code :
// function getElementsThatEqual10AtProperty(obj, key) {
//   // your code here
// }
var getElementsThatEqual10AtProperty = function (abj, kay) {
  var result = [];
  for (var i in abj[kay]) { 
    if (abj[kay][i] === 10) {
      result.push(abj[kay][i]);
    }
  }
  return result;
};
console.log(getElementsThatEqual10AtProperty(obja, 'key'));
console.log(getElementsThatEqual10AtProperty(objb, 'koy'));
console.log(getElementsThatEqual10AtProperty(objc, 'kuy'));
console.log();


console.log(' ===== 05: select ===== ');    
//----------------------------------------------------------------------
// Write a function called "select".

// Given an array and an object, "select" returns a new object whose properties are those in the given object AND whose keys are present in the given array. 

// Notes:
// * If keys are present in the given array, but are not in the given object, it should ignore them. 
// * It does not modify the passed in object.
var arr1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'm'];
var obj1 = {
  a: 1, c: 2, e: 3, g: 4, x: 5, y: 6, z: 7
};
var obj2 = {
  a: 32, d: 14, f: 87, h: 0, j: 900, y: 6, z: 7
};
var obj3 = {
  a: 'koko', i: '$$', e: 55, g: 4, x: 5, m: 6, e: 4
};
// var output = select(arr1, obj1);
// console.log(output); // --> { a: 1, c: 2, e: 3, g: 4 }


// Starter Code:
// function select(arr, obj) {
//   // your code here
// }
var select = function (arr, obj) {
  var result = {};
  for (var i in arr) {
    if (obj[arr[i]] !== undefined) {
      result[arr[i]] = obj[arr[i]];
    }
  }
  return result;
};
console.log(select(arr1, obj1));
console.log(select(arr1, obj2));
console.log(select(arr1, obj3));
console.log();


console.log(' ===== 06: getElementsLessThan100AtProperty ===== ');    
//----------------------------------------------------------------------
// Write a function called "getElementsLessThan100AtProperty".

// Given an object and a key, "getElementsLessThan100AtProperty" returns an array containing all the elements of the array located at the given key that are less than 100.

// Notes:
// * If the array is empty, it should return an empty array.
// * If the array contains no elements less than 100, it should return an empty array.
// * If the property at the given key is not an array, it should return an empty array.
// * If there is no property at the key, it should return an empty array.

var obj = {
  key: [1000, 20, 50, 500]
};
var obj1 = {
  key: [12, 134, 70, 1000, 20, 50, 500, -45]
};
var obj2 = {
  key: [99, 80, 1011893928, 13, 20, 50, 500]
};
// var output = getElementsLessThan100AtProperty(obj, 'key');
// console.log(output); // --> [20, 50]

// Starter Code :
// function getElementsLessThan100AtProperty(obj, key) {
//   // your code here
// }
var getElementsLessThan100AtProperty = function (object, keyy) {
  var result = [];
  for (var i in object[keyy]) {
    if (object[keyy][i] < 100) {
      result.push(object[keyy][i]);
    }
  }
  return result;
};
console.log(getElementsLessThan100AtProperty(obj, 'key'));
console.log(getElementsLessThan100AtProperty(obj1, 'key'));
console.log(getElementsLessThan100AtProperty(obj2, 'key'));
console.log();


console.log(' ===== 07: countAllCharacters ===== ');    
//----------------------------------------------------------------------
// Write a function called "countAllCharacters".
// Given a string, "countAllCharacters" returns an object where each key is a character in the given string. The value of each key should be how many times each character appeared in the given string.

// Notes:
// * If given an empty string, countAllCharacters should return an empty object.

// var output = countAllCharacters('banana');
// console.log(output); // --> {b: 1, a: 3, n: 2}

// Starter Code :
// function countAllCharacters(str) {
//   // your code here
// }
var countAllCharacters = function (str) {
  var strArr = str.split('').sort();
  var result = {};
  for (var i in strArr) {
    if (result[strArr[i]] === undefined) {
      result[strArr[i]] = 1;
    } else {
      result[strArr[i]] += 1;
    }
  }
  return result;
};
console.log(countAllCharacters('banana'));
console.log(countAllCharacters('hippopotamus'));
console.log(countAllCharacters('fraframatingotirtiryabulation'));
console.log();

console.log(' ===== 08: getElementsGreaterThan10atProperty ===== ');    
//----------------------------------------------------------------------

// Write a function called "getElementsGreaterThan10AtProperty".

// Given an object and a key, "getElementsGreaterThan10AtProperty" returns an array containing the elements within the array, located at the given key, that are greater than 10.

// Notes:
// * If the array is empty, it should return an empty array.
// * If the array contains no elements greater than 10, it should return an empty array.
// * If the property at the given key is not an array, it should return an empty array.
// * If there is no property at the key, it should return an empty array. 

var obj = {
  key: [1, 20, 30]
};
var obj1 = {
  key: [14, 10, 5, 25, 20, 30, 98, 2863551, -763]
};
var obj2 = {
  key: [3.4, 35.8, 189, 20, 30]
};
// var output = getElementsGreaterThan10AtProperty(obj, 'key');
// console.log(output); // --> [20, 30]

// Starter Code :
// function getElementsGreaterThan10AtProperty(obj, key) {
//   // your code here
// }
var getElementsGreaterThan10atProperty = function (object, keyy) {
  var result = [];
  for (var i in object[keyy]) {
    if (object[keyy][i] > 10) {
      result.push(object[keyy][i]);
    }
  }
  return result;
};
console.log(getElementsGreaterThan10atProperty(obj, 'key'));
console.log(getElementsGreaterThan10atProperty(obj1, 'key'));
console.log(getElementsGreaterThan10atProperty(obj2, 'key'));
console.log();


console.log(' ===== 09: getAverageOfElementsAtProperty ===== ');    
//----------------------------------------------------------------------
// Write a function called "getAverageOfElementsAtProperty".

// Given an object and a key, "getAverageOfElementsAtProperty" returns the average of all the elements in the array located at the given key. 

// Notes:
// * If the array at the given key is empty, it should return 0.
// * If the property at the given key is not an array, it should return 0.
// * If there is no property at the given key, it should return 0.


var obj = {
  key: [1, 2, 3]
};
var obj1 = {
  key: [3, 'h', 7, 2, 3]
};
var obj2 = {
  key: []
};
// var output = getAverageOfElementsAtProperty(obj, 'key');
// console.log(output); // --> 2

// Starter Code :
// function getAverageOfElementsAtProperty(obj, key) {
//   // your code here
// }
var getAverageOfElementsAtProperty = function (objj, key) {
  var average = 0;
  var sum = 0;
  if (objj[key].length !== 0 && objj[key].every(Number)) {
    for (var i in objj[key]) {
      sum += objj[key][i];
    }
    average = sum / (objj[key].length);
  }
  return average;
};
console.log(getAverageOfElementsAtProperty(obj, 'key'));
console.log(getAverageOfElementsAtProperty(obj1, 'key'));
console.log(getAverageOfElementsAtProperty(obj2, 'key'));


console.log(' ===== 10: getOddLengthWordsAtProperty ===== ');    
//----------------------------------------------------------------------
// Write a function called "getOddLengthWordsAtProperty".

// Given an object and a key, "getOddLengthWordsAtProperty" returns an array containing all the odd length word elements of the array located at the given key. 

// Notes:
// * If the array is empty, it should return an empty array.
// * If it contains no odd length elements, it should return an empty array.
// * If the property at the given key is not an array, it should return an empty array.
// * If there is no property at the given key, it should return an empty array.
var obj = {
  key: ['It', 'has', 'some', 'words']
};
var obj1 = {
  key: ['john', 'has', 'a', 'pair', 'of', 'boots']
};
var obj2 = {
  key: ['peter', 'pipper', 'did', 'not', 'pick', 'shit', 'today']
};
// var output = getOddLengthWordsAtProperty(obj, 'key');
// console.log(output); // --> ['has', 'words']
var getOddLengthWordsAtProperty = function (objj, key) {
  var result = [];
  for (var i in objj[key]) {
    if (objj[key][i].length % 2 === 1) {
      result.push(objj[key][i]);
    }
  }
  return result;
};
console.log(getOddLengthWordsAtProperty(obj, 'key'));
console.log(getOddLengthWordsAtProperty(obj1, 'key'));
console.log(getOddLengthWordsAtProperty(obj2, 'key'));
console.log();


console.log(' ===== 11: getEvenLengthWordsAtProperty ===== ');    
//----------------------------------------------------------------------
// Write a function called "getEvenLengthWordsAtProperty".

// Given an object and a key, "getEvenLengthWordsAtProperty" returns an array containing all the even length word elements of the array located at the given key.

// Notes:
// * If the array is empty, it should return an empty array.
// * If it contains no even length elements, it should return an empty array.
// * If the property at the given key is not an array, it should return an empty array.
// * If there is no property at the key, it should return an empty array.

// var obj = {
//   key: ['a', 'long', 'game']
// };
// var output = getEvenLengthWordsAtProperty(obj, 'key');
// console.log(output); // --> ['long', 'game']

// Starter Code :
// function getEvenLengthWordsAtProperty(obj, key) {
//   // your code here
// }
var getEvenLengthWordsAtProperty = function (obj, key) {

};
console.log(getEvenLengthWordsAtProperty());
console.log(getEvenLengthWordsAtProperty());
console.log(getEvenLengthWordsAtProperty());
console.log();


console.log(' ===== 12: getSquaredElementsAtProperty ===== ');    
//----------------------------------------------------------------------
// Write a function called "getSquaredElementsAtProperty".

// Given an object and a key, "getSquaredElementsAtProperty" returns an array containing all the squared elements of the array located at the given key. 

// Notes:
// * If the array is empty, it should return an empty array.
// * If the property at the given key is not an array, it should return an empty array.
// * If there is no property at the key, it should return an empty array.

// var obj = {
//   key: [2, 1, 5]
// };
// var output = getSquaredElementsAtProperty(obj, 'key');
// console.log(output); // --> [4, 1, 25]

// Starter Code :
// function getSquaredElementsAtProperty(obj, key) {
//   // your code here
// }
var getSquaredElementsAtProperty = function (obj, key) {

};
console.log(getSquaredElementsAtProperty());
console.log(getSquaredElementsAtProperty());
console.log(getSquaredElementsAtProperty());
console.log();


console.log(' ===== 13: getOddElementsAtProperty ===== ');    
//----------------------------------------------------------------------
// Write a function called "getOddElementsAtProperty".

// Given an object and a key, "getOddElementsAtProperty" returns an array containing all the odd elements of the array located at the given key. 

// Notes:
// * If the array is empty, it should return an empty array.
// * If it contains no odd elements, it should return an empty array.
// * If the property at the given key is not an array, it should return an empty array.
// * If there is no property at the key, it should return an empty array.

// var obj = {
//   key: [1, 2, 3, 4, 5]
// };
// var output = getOddElementsAtProperty(obj, 'key');
// console.log(output); // --> [1, 3, 5]

// Starter Code :
// function getOddElementsAtProperty(obj, key) {
//   // your code here
// }
var getOddElementsAtProperty = function (obj, key) {

};
console.log(getOddElementsAtProperty());
console.log(getOddElementsAtProperty());
console.log(getOddElementsAtProperty());
console.log();


console.log(' ===== 14: getEvenElementsAtProperty ===== ');    
//----------------------------------------------------------------------
// Write a function called "getEvenElementsAtProperty".

// Given an object and a key, "getEvenElementsAtProperty" returns an array containing all the even elements of the array located at the given key.

// Notes:
// * If the array is empty, it should return an empty array.
// * If the array contains no even elements, it should return an empty array.
// * If the property at the given key is not an array, it should return an empty array.
// * If there is no property at the given key, it should return an empty array.

// var obj = {
//   key: [1000, 11, 50, 17]
// };
// var output = getEvenElementsAtProperty(obj, 'key');
// console.log(output); // --> [1000, 50]

// Starter Code :
// function getEvenElementsAtProperty(obj, key) {
//   // your code here
// }
var getEvenElementsAtProperty = function (obj, key) {

};
console.log(getEvenElementsAtProperty());
console.log(getEvenElementsAtProperty());
console.log(getEvenElementsAtProperty());
console.log();


console.log(' ===== 15: getSmallestElementAtProperty ===== ');    
//----------------------------------------------------------------------
// Write a function called "getSmallestElementAtProperty".

// Given an object and a key, "getSmallestElementAtProperty" returns the smallest element in the array located at the given key. 

// Notes:
// * If the array is empty, it should return undefined.
// * If the property at the given key is not an array, it should return undefined. 
// * If there is no property at the key, it should return undefined.

// var obj = {
//   key: [2, 1, 5]
// };
// var output = getSmallestElementAtProperty(obj, 'key');
// console.log(output); // --> 1

// Starter Code :
// function getSmallestElementAtProperty(obj, key) {
//   // your code here
// }
var getSmallestElementAtProperty = function (obj, key) {

};
console.log(getSmallestElementAtProperty());
console.log(getSmallestElementAtProperty());
console.log(getSmallestElementAtProperty());
console.log();


console.log(' ===== 16: getLargestElementAtProperty ===== ');    
//----------------------------------------------------------------------
// Write a function called "getLargestElementAtProperty".

// Given an object and a key, "getLargestElementAtProperty" returns the largest element in the array located at the given key.

// Notes:
// * If the array is empty, it should return undefined.
// * If the property at the given key is not an array, it should return undefined.
// * If there is no property at the key, it should return undefined.

// var obj = {
//   key: [1, 2, 4]
// };
// var output = getLargestElementAtProperty(obj, 'key');
// console.log(output); // --> 4

// Starter Code :
// function getLargestElementAtProperty(obj, key) {
//   // your code here
// }
var getLargestElementAtProperty = function (obj, key) {

};
console.log(getLargestElementAtProperty());
console.log(getLargestElementAtProperty());
console.log(getLargestElementAtProperty());
console.log();


console.log(' ===== 17: getProductOfAllElementsAtProperty ===== ');    
//----------------------------------------------------------------------
// Write a function called "getProductOfAllElementsAtProperty".

// Given an object and a key, "getProductOfAllElementsAtProperty" returns the product of all the elements in the array located at the given key. 

// Notes:
// * If the array is empty, it should return 0.
// * If the property at the given key is not an array, it should return 0.
// * If there is no property at the given key, it should return 0.

// var obj = {
//   key: [1, 2, 3, 4]
// };
// var output = getProductOfAllElementsAtProperty(obj, 'key');
// console.log(output); // --> 24

// Starter Code :
// function getProductOfAllElementsAtProperty(obj, key) {
//   // your code here
// }
var getProductOfAllElementsAtProperty = function (obj, key) {

};
console.log(getProductOfAllElementsAtProperty());
console.log(getProductOfAllElementsAtProperty());
console.log(getProductOfAllElementsAtProperty());
console.log();


console.log(' ===== 18: getSumOfAllElementsAtProperty ===== ');    
//----------------------------------------------------------------------
// Write a function called "getSumOfAllElementsAtProperty".

// Given an object and a key, "getSumOfAllElementsAtProperty" returns the sum of all the elements in the array located at the given key. 

// Notes:
// * If the array is empty, it should return 0.
// * If the property at the given key is not an array, it should return 0.
// * If there is no property at the key, it should return 0.

// var obj = {
//   key: [4, 1, 8]
// };
// var output = getSumOfAllElementsAtProperty(obj, 'key');
// console.log(output); // --> 13

// Starter Code :
// function getSumOfAllElementsAtProperty(obj, key) {
//   // your code here
// }
var getSumOfAllElementsAtProperty = function (obj, key) {

};
console.log(getSumOfAllElementsAtProperty());
console.log(getSumOfAllElementsAtProperty());
console.log(getSumOfAllElementsAtProperty());
console.log();


console.log(' ===== 19: getAllButLastElementOfProperty ===== ');    
//----------------------------------------------------------------------
// Write a function called "getAllButLastElementOfProperty".

// Given an object and a key, "getAllButLastElementOfProperty" returns an array containing all but the last element of the array located at the given key.

// Notes:
// * If the array is empty, it should return an empty array.
// * If the property at the given key is not an array, it return an empty array.
// * If there is no property at the key, it should return an empty array. 

// var obj = {
//   key: [1, 2, 3]
// };
// var output = getAllButLastElementOfProperty(obj, 'key');
// console.log(output); // --> [1,2]

// Starter Code :
// function getAllButLastElementOfProperty(obj, key) {
//   // your code here
// }
var getAllButLastElementOfProperty = function (obj, key) {

};
console.log(getAllButLastElementOfProperty());
console.log(getAllButLastElementOfProperty());
console.log(getAllButLastElementOfProperty());
console.log();


console.log(' ===== 20: getNthElementOfProperty ===== ');    
//----------------------------------------------------------------------
// Write a function called "getNthElementOfProperty".

// Given an object and a key, "getNthElementOfProperty" returns the nth element of an array located at the given key.

// Notes:
// * If the array is empty, it should return undefined.
// * If n is out of range, it should return undefined.
// * If the property at the given key is not an array, it should return undefined.
// * If there is no property at the key, it should return undefined.

// var obj = {
//   key: [1, 2, 6]
// };
// var output = getNthElementOfProperty(obj, 'key', 1);
// console.log(output); // --> 2

// Starter Code :
// function getNthElementOfProperty(obj, key, n) {
//   // your code here
// }
var getNthElementOfProperty = function (obj, key, n) {

};
console.log(getNthElementOfProperty());
console.log(getNthElementOfProperty());
console.log(getNthElementOfProperty());
console.log();


console.log(' ===== 21: getLastElementOfProperty ===== ');    
//----------------------------------------------------------------------
// Write a function called "getLastElementOfProperty".

// Given an object and a key, "getLastElementOfProperty" returns the last element of an array located at the given key.

// Notes:
// * If the array is empty, it should return undefined.
// * if the property at the given key is not an array, it should return undefined.
// * If there is no property at the key, it should return undefined.

// var obj = {
//   key: [1, 2, 5]
// };
// var output = getLastElementOfProperty(obj, 'key');
// console.log(output); // --> 5

// Starter Code :
// function getLastElementOfProperty(obj, key) {
//   // your code here
// }
var getLastElementOfProperty = function (obj, key) {

};
console.log(getLastElementOfProperty());
console.log(getLastElementOfProperty());
console.log(getLastElementOfProperty());
console.log();


console.log(' ===== 22: getFirstElementOfProperty ===== ');    
//----------------------------------------------------------------------
// Write a function called "getFirstElementOfProperty".

// Given an object and a key, "getFirstElementOfProperty" returns the first element of the array located at the given key. 

// Notes:
// * If the array is empty, it should return undefined.
// * If the property at the given key is not an array, it should return undefined.
// * If there is no property at the key, it should return undefined.


// var obj = {
//   key: [1, 2, 4]
// };
// var output = getFirstElementOfProperty(obj, 'key');
// console.log(output); // --> 1

// Starter Code :
// function getFirstElementOfProperty(obj, key) {
//   // your code here
// }
var getFirstElementOfProperty = function (obj, key) {

};
console.log(getFirstElementOfProperty());
console.log(getFirstElementOfProperty());
console.log(getFirstElementOfProperty());
console.log();


console.log(' ===== 23: removeNumbersLargerThan ===== ');    
//----------------------------------------------------------------------
// Write a function called "removeNumbersLargerThan".

// Given a number and an object, "removeNumbersLargerThan" removes any properties whose values are numbers greater than the given number.

// var obj = {
//   a: 8,
//   b: 2,
//   c: 'montana'
// }
// removeNumbersLargerThan(5, obj);
// console.log(obj); // --> { b: 2, c: 'montana' }

// Starter Code :
// function removeNumbersLargerThan(num, obj) {
//   // your code here
// }
var removeNumbersLargerThan = function (num, obj) {

};
console.log(removeNumbersLargerThan());
console.log(removeNumbersLargerThan());
console.log(removeNumbersLargerThan());
console.log();


console.log(' ===== 24: removeNumbersLessThan ===== ');    
//----------------------------------------------------------------------
// Write a function called "removeNumbersLessThan".

// Given a number and an object, "removeNumbersLessThan" removes any properties whose values are numbers less than the given number.

// var obj = {
//   a: 8,
//   b: 2,
//   c: 'montana'
// }
// removeNumbersLessThan(5, obj);
// console.log(obj); // --> { a: 8, c: 'montana' }


// Starter Code :
// function removeNumbersLessThan(num, obj) {
//   // your code here
// }
var removeNumbersLessThan = function (num, obj) {

};
console.log(removeNumbersLessThan());
console.log(removeNumbersLessThan());
console.log(removeNumbersLessThan());
console.log();


console.log(' ===== 25: addFullNameProperty ===== ');    
//----------------------------------------------------------------------
// Write a function called "addFullNameProperty".

// Given an object that has a "firstName" property and a "lastName" property, "addFullNameProperty" returns a "fullName" property whose value is a string with the first name and last name separated by a space.

// var person = {
//   firstName: 'Jade',
//   lastName: 'Smith'
// };
// addFullNameProperty(person);
// console.log(person.fullName); // --> 'Jade Smith'

// Starter Code :
// function addFullNameProperty(obj) {
//   // your code here
// }
var addFullNameProperty = function (obj) {

};
console.log(addFullNameProperty());
console.log(addFullNameProperty());
console.log(addFullNameProperty());
console.log();


console.log(' ===== 26: removeStringValuesLongerThan ===== ');    
//----------------------------------------------------------------------
// Write a function called "removeStringValuesLongerThan".

// Given an number and an object, "removeStringValuesLongerThan" removes any properties on the given object whose values are strings longer than the given number.

// var obj = {
//   name: 'Montana',
//   age: 20,
//   location: 'Texas'
// };
// removeStringValuesLongerThan(6, obj);
// console.log(obj); // { age: 20, location: 'Texas' }

// Starter Code :
// function removeStringValuesLongerThan(num, obj) {
//   // your code here
// }
var removeStringValuesLongerThan = function (num, obj) {

};
console.log(removeStringValuesLongerThan());
console.log(removeStringValuesLongerThan());
console.log(removeStringValuesLongerThan());
console.log();


console.log(' ===== 27: removeEvenValues ===== ');    
//----------------------------------------------------------------------
// Write a function called "removeEvenValues".

// Given any object, "removeEvenValues" removes any properties whose values are even numbers.

// Do this in place and return the original object, do not construct a cloned object that omits the properties.

// var obj = {
//   a: 2,
//   b: 3,
//   c: 4
// };
// removeEvenValues(obj);
// console.log(obj); // --> { b: 3 }

// Note: Remember, we are talking about any object, not just the one shown in the sample.

// Starter Code :
// function removeEvenValues(obj) {
//   // your code here
// }
var removeEvenValues = function (obj) {

};
console.log(removeEvenValues());
console.log(removeEvenValues());
console.log(removeEvenValues());
console.log();


console.log(' ===== 28: countNumberOfKeys ===== ');    
//----------------------------------------------------------------------
// Write a function called "countNumberOfKeys".

// Given an object, "countNumberOfKeys" returns how many properties the given object has.

// var obj = {
//   a: 1,
//   b: 2,
//   c: 3
// };
// var output = countNumberOfKeys(obj);
// console.log(output); // --> 3

// Starter Code :
// function countNumberOfKeys(obj) {
//   // your code here
// }
var countNumberOfKeys = function (obj) {

};
console.log(countNumberOfKeys());
console.log(countNumberOfKeys());
console.log(countNumberOfKeys());
console.log();


console.log(' ===== 29: isPersonOldEnoughToDrive ===== ');    
//----------------------------------------------------------------------
// Write a function called "isPersonOldEnoughToDrive".

// Given a "person" object, that contains an "age" property, "isPersonOldEnoughToDrive" returns whether the given person is old enough to drive.

// Notes:
// * The legal driving age in the United States is 16.

// var obj = {
//   age: 16
// };
// var output = isPersonOldEnoughToDrive(obj);
// console.log(output); // --> true

// Starter Code :
// function isPersonOldEnoughToDrive(person) {
//   // your code here
// }
var isPersonOldEnoughToDrive = function (obj) {

};
console.log(isPersonOldEnoughToDrive());
console.log(isPersonOldEnoughToDrive());
console.log(isPersonOldEnoughToDrive());
console.log();


console.log(' ===== 30: removeOddValues ===== ');    
//----------------------------------------------------------------------
// Write a function called "removeOddValues".

// Given an object, "removeOddValues" removes any properties whose valuse are odd numbers.

// var obj = {
//   a: 2,
//   b: 3,
//   c: 4
// };
// removeOddValues(obj);
// console.log(obj); // --> { a: 2, c: 4 }

// Starter Code :
// function removeOddValues(obj) {
//   // your code here
// }
var removeOddValues = function (obj) {

};
console.log(removeOddValues());
console.log(removeOddValues());
console.log(removeOddValues());
console.log();


console.log(' ===== 31: removeArrayValues ===== ');    
//----------------------------------------------------------------------
// Write a function called "removeArrayValues".

// Given an object, "removeArrayValues" removes any properties whose values are arrays.

// var obj = {
//   a: [1, 3, 4],
//   b: 2,
//   c: ['hi', 'there']
// }
// removeArrayValues(obj);
// console.log(obj); // --> { b: 2 }

// Starter Code :
// function removeArrayValues(obj) {
//   // your code here
// }
var removeArrayValues = function (obj) {

};
console.log(removeArrayValues());
console.log(removeArrayValues());
console.log(removeArrayValues());
console.log();


console.log(' ===== 32: removeNumberValues ===== ');    
//----------------------------------------------------------------------
// Write a function called "removeNumberValues".

// Given an object, "removeNumberValues" removes any properties whose valuse are numbers.

// var obj = {
//   a: 2,
//   b: 'remaining',
//   c: 4
// };
// removeNumberValues(obj);
// console.log(obj); // --> { b: 'remaining' }

// Starter Code :
// function removeNumberValues(obj) {
//   // your code here
// }
var removeNumberValues = function (obj) {

};
console.log(removeNumberValues());
console.log(removeNumberValues());
console.log(removeNumberValues());
console.log();


console.log(' ===== 33: isPersonOldEnoughToVote ===== ');    
//----------------------------------------------------------------------
// Write a function called "isPersonOldEnoughToVote".

// Given a "person" object, that contains an "age" property, "isPersonOldEnoughToVote" returns whether the given person is old enough to vote.

// Notes:
// * The legal voting age in the United States is 18.

// var obj = {
//   age: 19
// };
// var output = isPersonOldEnoughToVote(obj);
// console.log(output); // --> true

// Starter Code :
// function isPersonOldEnoughToVote(person) {
//   // your code here
// }
var isPersonOldEnoughToVote = function (obj) {

};
console.log(isPersonOldEnoughToVote());
console.log(isPersonOldEnoughToVote());
console.log(isPersonOldEnoughToVote());
console.log();


console.log(' ===== 34: removeStringValues ===== ');    
//----------------------------------------------------------------------
// Write a function called "removeStringValues".

// Given an object, "removeStringValues" removes any properties on the given object whose values are strings.

// var obj = {
//   name: 'Sam',
//   age: 20
// }
// removeStringValues(obj);
// console.log(obj); // { age: 20 }

// Starter Code :
// function removeStringValues(obj) {
//   // your code here
// }
var removeStringValues = function (obj) {

};
console.log(removeStringValues());
console.log(removeStringValues());
console.log(removeStringValues());
console.log();


console.log(' ===== 35: isPersonOldEnoughToDrink ===== ');    
//----------------------------------------------------------------------
// Write a function called "isPersonOldEnoughToDrink".

// Given a "person" object, that contains an "age" property, "isPersonOldEnoughToDrink" returns whether the given person is old enough to drink.

// Notes:
// * The legal drinking age in the United States is 21.

// var obj = {
//   age: 16
// };
// var output = isPersonOldEnoughToDrink(obj);
// console.log(output); // --> false

// Starter Code :
// function isPersonOldEnoughToDrink(person) {
//   // your code here
// }
var isPersonOldEnoughToDrink = function (obj) {

};
console.log(isPersonOldEnoughToDrink());
console.log(isPersonOldEnoughToDrink());
console.log(isPersonOldEnoughToDrink());
console.log();


console.log(' ===== 36: getElementOfArrayProperty ===== ');    
//----------------------------------------------------------------------
// Write a function called "getElementOfArrayProperty".

// Given an object, a key, and a numerical index, "getElementOfArrayProperty" returns the value of the element at the given index of the array located within the given object at the given key.

// Notes:
// * If the array is empty, it should return undefined.
// * If the given index is out of range of the array located at the given key, it should return undefined.
// * If the property at the given key is not an array, it should return undefined.
// * If there is no property at the key, it should return undefined. 

// var obj = {
//  key: ['Jamil', 'Albrey']
// };
// var output = getElementOfArrayProperty(obj, 'key', 0); 
// console.log(output); // --> 'Jamil'

// Starter Code :
// function getElementOfArrayProperty(obj, key, index) {
//   // your code here
// }
var getElementOfArrayProperty = function (obj, key, ind) {

};
console.log(getElementOfArrayProperty());
console.log(getElementOfArrayProperty());
console.log(getElementOfArrayProperty());
console.log();


console.log(' ===== 37: getProperty ===== ');    
//----------------------------------------------------------------------
// Write a function called "getProperty".

// Given an object and a key, "getProperty" returns the value of the property at the given key. 

// Notes:
// * If there is no property at the given key, it should return undefined.

// var obj = {
//   key: 'value'
// };
// var output = getProperty(obj, 'key');
// console.log(output); // --> 'value'

// Starter Code :
// function getProperty(obj, key) {
//   // your code here
// }
var getProperty = function (obj, key) {

};
console.log(getProperty());
console.log(getProperty());
console.log(getProperty());
console.log();


console.log(' ===== 38: addObjectProperty ===== ');    
//----------------------------------------------------------------------
// Write a function called "addObjectProperty".

// Given two objects and a key, "addObjectProperty" sets a new property on the 1st object at the given key. The value of that new property is the entire 2nd object.

// var person1 = {
//   name: 'Joe Blow',
//   role: 'schlub'
// };
// var person2 = {
//   name: 'Mr. Burns',
//   role: 'supervisor'
// };
// addObjectProperty(person1, 'manager', person2);
// console.log(person1.manager); // --> { name: 'Mr. Burns', role: 'supervisor' }

// Starter Code :
// function addObjectProperty(obj1, key, obj2) {
//   // your code here
// }
var addObjectProperty = function (obj1, key, obj2) {

};
console.log(addObjectProperty());
console.log(addObjectProperty());
console.log(addObjectProperty());
console.log();


console.log(' ===== 39: addArrayProperty ===== ');    
//----------------------------------------------------------------------
// Write a function called "addArrayProperty".

// Given an object, a key, and an array, "addArrayProperty" sets a new property on the object at the given key, with its value set to the given array.

// var myObj = {};
// var myArray = [1, 3];
// addArrayProperty(myObj, 'myProperty', myArray);
// console.log(myObj.myProperty); // --> [1, 3]

// Starter Code :
// function addArrayProperty(obj, key, arr) {
//   // your code here
// }
var addArrayProperty = function (obj, key, arr) {

};
console.log(addArrayProperty());
console.log(addArrayProperty());
console.log(addArrayProperty());
console.log();


console.log(' =====  40: removeProperty===== ');    
//----------------------------------------------------------------------
// Write a function called "removeProperty".

// Given an object and a key, "removeProperty" removes the given key from the given object.

// var obj = {
//   name: 'Sam',
//   age: 20
// }
// removeProperty(obj, 'name');
// console.log(obj.name); // --> undefined

// Starter Code :
// function removeProperty(obj, key) {
//   // your code here
// }
var removeProperty = function (obj, key) {

};
console.log(removeProperty());
console.log(removeProperty());
console.log(removeProperty());
console.log();


console.log(' ===== 41: addProperty ===== ');    
//----------------------------------------------------------------------
// Write a function called "addProperty".

// Given an object, and a key, "addProperty" sets a new property on the given object with a value of true.

// var myObj = {};
// addProperty(myObj, 'myProperty');
// console.log(myObj.myProperty); // --> true

// Starter Code :
// function addProperty(obj, key) {
//   // your code here
// }
var addProperty = function (obj, key) {

};
console.log(addProperty());
console.log(addProperty());
console.log(addProperty());
console.log();


console.log(' ===== 42: convertDoubleSpaceToSingle ===== ');    
//----------------------------------------------------------------------
// Write a function called "convertDoubleSpaceToSingle".

// Given a string, "convertDoubleSpaceToSingle" returns the passed in string, with all the double spaces converted to single spaces.

// var output = convertDoubleSpaceToSingle("string  with  double  spaces");
// console.log(output); // --> "string with double spaces"

// Notes:
// * In order to do this problem, you should be familiar with "String.split", and "Array.join".

// Starter Code :
// function convertDoubleSpaceToSingle(str) {
//   // your code here
// }
var convertDoubleSpaceToSingle = function (str) {

};
console.log(convertDoubleSpaceToSingle());
console.log(convertDoubleSpaceToSingle());
console.log(convertDoubleSpaceToSingle());
console.log();


console.log(' ===== 43: getAllWords ===== ');    
//----------------------------------------------------------------------
// Write a function called "getAllWords".

// Given a sentence, "getAllWords" returns an array containing every word in the sentence. 

// Notes:
// * If given an empty string, it should return an empty array.

// var output = getAllWords('Radagast the Brown');
// console.log(output); // --> ['Radagast', 'the', 'Brown']

// Starter Code :
// function getAllWords(str) {
//   // your code here
// }
var getAllWords = function (str) {

};
console.log(getAllWords());
console.log(getAllWords());
console.log(getAllWords());
console.log();


console.log(' ===== 44: getAllLetters ===== ');    
//----------------------------------------------------------------------
// Write a function called "getAllLetters".

// Given a word, "getAllLetters" returns an array containing every character in the word. 

// Notes:
// * If given an empty string, it should return an empty array.

// var output = getAllLetters('Radagast');
// console.log(output); // --> ['R', 'a', 'd', 'a', 'g', 'a', 's', 't']

// Starter Code :
// function getAllLetters(str) {
//   // your code here
// }
var getAllLetters = function (str) {

};
console.log(getAllLetters());
console.log(getAllLetters());
console.log(getAllLetters());
console.log();


console.log(' ===== 45: countCharacter ===== ');    
//----------------------------------------------------------------------
// Write a function called "countCharacter".

// Given a string input and a character, "countCharacter" returns the number of occurences of a given character in the given string.

// var output = countCharacter('I am a hacker', 'a');
// console.log(output); // --> 3

// Starter Code :
// function countCharacter(str, char) {
//   // your code here
// }
var countCharacter = function (str, char) {

};
console.log(countCharacter());
console.log(countCharacter());
console.log(countCharacter());
console.log();


console.log(' ===== 46: removeElement ===== ');    
//----------------------------------------------------------------------
// Write a function called "removeElement".

// Given an array of elements, and a "discarder" parameter, "removeElement" returns an array containing the items in the given array that do not match the "discarder" parameter.

// Notes:
// * If all the elements match, it should return an empty array.
// * If an empty array is passed in, it should return an empty array.

// var output = removeElement([1, 2, 3, 2, 1], 2);
// console.log(output); // --> [1, 3, 1]


// Starter Code :
// function removeElement(array, discarder) {
//   // your code here
// }
var removeElement = function (arr, discarder) {

};
console.log(removeElement());
console.log(removeElement());
console.log(removeElement());
console.log();


console.log(' ===== 47: keep ===== ');    
//----------------------------------------------------------------------
// Write a function called "keep".

// Given an array and a keeper element, "keep" returns an array containing the items that match the given keeper element.

// Notes:
// * If no elements match, "keep" should return an empty array.

// var output = keep([1, 2, 3, 2, 1], 2) 
// console.log(output); --> [2, 2]

// Starter Code :
// function keep(array, keeper) {
//   // your code here
// }
var keep = function (arr, keeper) {

};
console.log(keep());
console.log(keep());
console.log(keep());
console.log();


console.log(' ===== 48: findShortestWordAmongMixedElements ===== ');    
//----------------------------------------------------------------------
// Write a function called "findShortestWordAmongMixedElements".

// Given an array, "findShortestWordAmongMixedElements" returns the shortest string within the given array.

// Notes:
// * If there are ties, it should return the first element to appear in the given array.
// * Expect the given array to have values other than strings.
// * If the given array is empty, it should return an empty string.
// * If the given array contains no strings, it should return an empty string.

// var output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
// console.log(output); // --> 'two'

// Starter Code :
// function findShortestWordAmongMixedElements(arr) {
//   // your code here
// }
var findShortestWordAmongMixedElements = function (arr) {

};
console.log(findShortestWordAmongMixedElements());
console.log(findShortestWordAmongMixedElements());
console.log(findShortestWordAmongMixedElements());
console.log();


console.log(' ===== 49: computeAverageOfNumbers ===== ');    
//----------------------------------------------------------------------
// Write a function called "computeAverageOfNumbers".

// Given an array of numbers, "computeAverageOfNumbers" returns their average. 

// Notes:
// * If given an empty array, it should return 0.

// var input = [1,2,3,4,5];
// var output = computeAverageOfNumbers(input);
// console.log(output); // --> 3

// Starter Code :
// function computeAverageOfNumbers(nums) {
//   // your code here
// }
var computeAverageOfNumbers = function (nums) {

};
console.log(computeAverageOfNumbers());
console.log(computeAverageOfNumbers());
console.log(computeAverageOfNumbers());
console.log();


console.log(' ===== 50: findSmallestNumberAmongMixedElements ===== ');    
//----------------------------------------------------------------------
// Write a function called "findSmallestNumberAmongMixedElements".

// Given an array of mixed elements, "findSmallestNumberAmongMixedElements" returns the smallest number within the given array.

// Notes:
// * If the given array is empty, it should return 0.
// * If the array contains no numbers, it should return 0.

// var output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
// console.log(output); // --> 4

// Starter Code :
// function findSmallestNumberAmongMixedElements(arr) {
//   // your code here
// }
var findSmallestNumberAmongMixedElements = function (arr) {

};
console.log(findSmallestNumberAmongMixedElements());
console.log(findSmallestNumberAmongMixedElements());
console.log(findSmallestNumberAmongMixedElements());
console.log();


console.log(' ===== 51: getLongestWordOfMixedElements ===== ');    
//----------------------------------------------------------------------
// Write a function called "getLongestWordOfMixedElements".

// Given an array of mixed types, "getLongestWordOfMixedElements" returns the longest string in the given array.

// Notes:
// * If the array is empty, it should return an empty string (""). 
// * If the array contains no strings; it should return an empty string.

// var output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
// console.log(output); // --> 'word'

// Starter Code :
// function getLongestWordOfMixedElements(arr) {
//   // your code here
// }
var getLongestWordOfMixedElements = function (arr) {

};
console.log(getLongestWordOfMixedElements());
console.log(getLongestWordOfMixedElements());
console.log(getLongestWordOfMixedElements());
console.log();


console.log(' ===== 52: filterOddLengthWords ===== ');    
//----------------------------------------------------------------------
// Write a function called "filterOddLengthWords".

// Given an array of string, "filterOddLengthWords" returns an array containing only the elements of the given array whose lengths are odd numbers.

// var output = filterOddLengthWords(['there', 'it', 'is', 'now']);
// console.log(output); // --> ['there', "now']

// Starter Code :
// function filterOddLengthWords(words) {
//   // your code here
// }
var filterOddLengthWords = function (words) {

};
console.log(filterOddLengthWords());
console.log(filterOddLengthWords());
console.log(filterOddLengthWords());
console.log();


console.log(' ===== 53: findLargestNumberAmongMixedElements ===== ');    
//----------------------------------------------------------------------
// Write a function called "getLargestNumberAmongMixedElements". 

// Given any array, "getLargestNumberAmongMixedElements" returns the largest number in the given array.

// Notes:
// * The array might contain values of a type other than numbers.
// * If the array is empty, it should return 0.
// * If the array contains no numbers, it should return 0.

// var output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
// console.log(output); // --> 5

// Starter Code :
// function getLargestNumberAmongMixedElements(arr) {
//   // your code here
// }
var getLargestNumberAmongMixedElements = function (arr) {

};
console.log(getLargestNumberAmongMixedElements());
console.log(getLargestNumberAmongMixedElements());
console.log(getLargestNumberAmongMixedElements());
console.log();


console.log(' ===== 54: getLengthOfLongestElement ===== ');    
//----------------------------------------------------------------------
// Write a function called "getLengthOfLongestElement".

// Given an array, "getLengthOfLongestElement" returns the length of the longest string in the given array.

// Notes:
// * It should return 0 if the array is empty.

// var output = getLengthOfLongestElement(['one', 'two', 'three']);
// console.log(output); // --> 5

// Starter Code :
// function getLengthOfLongestElement(arr) {
//   // your code here
// }
var getLengthOfLongestElement = function (arr) {

};
console.log(getLengthOfLongestElement());
console.log(getLengthOfLongestElement());
console.log(getLengthOfLongestElement());
console.log();


console.log(' ===== 55: filterEvenLengthWords ===== ');    
//----------------------------------------------------------------------
// Write a function called "filterEvenLengthWords".

// Given an array of strings, "filterEvenLengthWords" returns an array containing only the elements of the given array whose length is an even number.

// var output = filterEvenLengthWords(['word', 'words', 'word', 'words']);
// console.log(output); // --> ['word', 'word']

// Starter Code :
// function filterEvenLengthWords(words) {
//   // your code here
// }
var filterEvenLengthWords = function (words) {

};
console.log(filterEvenLengthWords());
console.log(filterEvenLengthWords());
console.log(filterEvenLengthWords());
console.log();


console.log(' ===== 56: squareElements ===== ');    
//----------------------------------------------------------------------
// Write a function called "squareElements".

// Given a array of numbers, "squareElements" should return a new array where each element is the square of the element of the given array.

// var output = squareElements([1, 2, 3]);
// console.log(output); // --> [1, 4, 9]

// Starter Code :
// function squareElements(arr) {
//   // your code here
// }
var squareElements = function (arr) {

};
console.log(squareElements());
console.log(squareElements());
console.log(squareElements());
console.log();


console.log(' ===== 57: filterOddElements ===== ');    
//----------------------------------------------------------------------
// Write a function called "filterOddElements".

// Given an array of numbers, "filterOddElements" returns an array containing only the odd numbers of the given array.

// var output = filterOddElements([1, 2, 3, 4, 5]);
// console.log(output); // --> [1, 3, 5]

// Starter Code :
// function filterOddElements(arr) {
//   // your code here
// }
var filterOddElements = function (arr) {

};
console.log(filterOddElements());
console.log(filterOddElements());
console.log(filterOddElements());
console.log();


console.log(' ===== 58: computeProductOfAllElements ===== ');    
//----------------------------------------------------------------------
// Write a function called "computeProductOfAllElements".

// Given an array of numbers, "computeProductOfAllElements" returns the products of all the elements in the given array.

// Notes:
// * If given array is empty, it should return 0.

// var output = computeProductOfAllElements([2, 5, 6]);
// console.log(output); // --> 60

// Starter Code :
// function computeProductOfAllElements(arr) {
//   // your code here
// }
var computeProductOfAllElements = function (arr) {

};
console.log(computeProductOfAllElements());
console.log(computeProductOfAllElements());
console.log(computeProductOfAllElements());
console.log();


console.log(' ===== 59: filterEvenElements ===== ');    
//----------------------------------------------------------------------
// Write a function called "filterEvenElements".

// Given an array of numbers, "filterEvenElements" returns an array containing only the even numbers of the given array.

// var output = filterEvenElements([2, 3, 4, 5, 6]);
// console.log(output); // --> [2, 4, 6]

// Starter Code :
// function filterEvenElements(arr) {
//   // your code here
// }
var filterEvenElements = function (arr) {

};
console.log(filterEvenElements());
console.log(filterEvenElements());
console.log(filterEvenElements());
console.log();


console.log(' ===== 60: getLengthOfShortestElement ===== ');    
//----------------------------------------------------------------------
// Write a function called "getLengthOfShortestElement".

// Given an array, "getLengthOfShortestElement" returns the length of the shortest string in the given array.

// Notes:
// * It should return 0 if the array is empty.

// var output = getLengthOfShortestElement(['one', 'two', 'three']);
// console.log(output); // --> 3

// Starter Code :
// function getLengthOfShortestElement(arr) {
//   // your code here
// }
var getLengthOfShortestElement = function (arr) {

};
console.log(getLengthOfShortestElement());
console.log(getLengthOfShortestElement());
console.log(getLengthOfShortestElement());
console.log();


console.log(' ===== 61: getLongestElement ===== ');    
//----------------------------------------------------------------------
// Write a function called "getLongestElement".

// Given an array, "getLongestElement" returns the longest string in the given array.

// Notes:
// * If there are ties, it returns the first element to appear.
// * If the array is empty, tt should return an empty string.

// var output = getLongestElement(['one', 'two', 'three']);
// console.log(output); // --> 'three'

// Starter Code :
// function getLongestElement(arr) {
//   // your code here
// }
var getLongestElement = function (arr) {

};
console.log(getLongestElement());
console.log(getLongestElement());
console.log(getLongestElement());
console.log();


console.log(' ===== 62: findSmallestElement ===== ');    
//----------------------------------------------------------------------
// Write a function called "findSmallestElement".

// Given an array of numbers, "findSmallestElement" returns the smallest number within the given array.

// Notes:
// * If the given array is empty, it should return 0.

// var output = findSmallestElement([4, 1, 9, 10]);
// console.log(output); // --> 1

// Starter Code :
// function findSmallestElement(arr) {
//   // your code here
// }
var findSmallestElement = function (arr) {

};
console.log(findSmallestElement());
console.log(findSmallestElement());
console.log(findSmallestElement());
console.log();


console.log(' ===== 63: removeFromFrontOfNew ===== ');    
//----------------------------------------------------------------------
// Write a function called "removeFromFrontOfNew".

// Given an array, "removeFromFrontOfNew" returns a new array containing all but the first element of the given array.

// Notes:
// * You should be familiar with the 'slice' method.

// var arr = [1, 2, 3];
// var output = removeFromFrontOfNew(arr);
// console.log(output); // --> [2, 3]
// console.log(arr); // --> [1, 2, 3]

// Starter Code :
// function removeFromFrontOfNew(arr) {
//   // your code here
// }
var removeFromFrontOfNew = function (arr) {

};
console.log(removeFromFrontOfNew());
console.log(removeFromFrontOfNew());
console.log(removeFromFrontOfNew());
console.log();


console.log(' ===== 64: findShortestElement ===== ');    
//----------------------------------------------------------------------
// Write a function called "findShortestElement".

// Given an array, "findShortestElement" returns the shortest string within the given array.

// Notes:
// * If there are ties, it should return the first element to appear.
// * If the given array is empty, it should return an empty string.

// var output = findShortestElement(['a', 'two', 'three']);
// console.log(output); // --> 'a'

// Starter Code :
// function findShortestElement(arr) {
//   // your code here
// }
var findShortestElement = function (arr) {

};
console.log(findShortestElement());
console.log(findShortestElement());
console.log(findShortestElement());
console.log();


console.log(' ===== 65: getLargestElement ===== ');    
//----------------------------------------------------------------------
// Write a function called "getLargestElement".

// Given an array, "getLargestElement" returns the largest number in the given array.

// Notes:
// * It should return 0 if the array is empty.

// var output = getLargestElement([5, 2, 8, 3]);
// console.log(output); // --> 8;

// Starter Code :
// function getLargestElement(arr) {
//   // your code here
// }
var getLargestElement = function (arr) {

};
console.log(getLargestElement());
console.log(getLargestElement());
console.log(getLargestElement());
console.log();


console.log(' ===== 66: joinThreeArrays ===== ');    
//----------------------------------------------------------------------
// Write a function called "joinThreeArrays".

// Given three arrays, "joinThreeArrays" returns an array with the elements of "arr1" in order followed by the elements in "arr2" in order followed by the elements of "arr3" in order.

// var output = joinThreeArrays([1, 2], [3, 4], [5, 6]);
// console.log(output); // --> [1, 2, 3, 4, 5, 6]

// You should be familiar with the "concat" method for this problem.

// Starter Code :
// function joinThreeArrays(arr1, arr2, arr3) {
//   // your code here
// }
var joinThreeArrays = function (arr1, arr2, arr3) {

};
console.log(joinThreeArrays());
console.log(joinThreeArrays());
console.log(joinThreeArrays());
console.log();


console.log(' ===== 67: computeSumOfAllElements ===== ');    
//----------------------------------------------------------------------
// Write a function called "computeSumOfAllElements".

// Given an array of numbers, "computeSumOfAllElements" returns the sum of all the elements in the given array.

// var output = computeSumOfAllElements([1, 2, 3])
// console.log(output); // --> 6

// Starter Code :
// function computeSumOfAllElements(arr) {
//   // your code here
// }
var computeSumOfAllElements = function (arr) {

};
console.log(computeSumOfAllElements());
console.log(computeSumOfAllElements());
console.log(computeSumOfAllElements());
console.log();


console.log(' ===== 68: removeFromBackOfNew ===== ');    
//----------------------------------------------------------------------
// Write a function called "removeFromBackOfNew".

// Given an array, "removeFromBackOfNew" returns a new array containing all but the last element of the given array.

// Notes:
// * You should be familiar with the 'slice' method.

// var arr = [1, 2, 3];
// var output = removeFromBackOfNew(arr);
// console.log(output); // --> [1, 2]
// console.log(arr); // --> [1, 2, 3]

// Starter Code :
// function removeFromBackOfNew(arr) {
//   // your code here
// }
var removeFromBackOfNew = function (arr) {

};
console.log(removeFromBackOfNew());
console.log(removeFromBackOfNew());
console.log(removeFromBackOfNew());
console.log();


console.log(' ===== 69: addToFrontOfNew ===== ');    
//----------------------------------------------------------------------
// Write a function called "addToFrontOfNew".

// Given an array and an element, "addToFrontOfNew" returns a new array containing all the elements of the given array, with the given element added to the front.

// Important: It should be a NEW array instance, not the original array instance.

// var input = [1, 2];
// var output = addToFrontOfNew(input, 3);
// console.log(output); // --> [3, 1, 2];
// console.log(input); --> [1, 2]

// Starter Code :
// function addToFrontOfNew(arr, element) {
//   // your code here
// }
var addToFrontOfNew = function (arr, element) {

};
console.log(addToFrontOfNew());
console.log(addToFrontOfNew());
console.log(addToFrontOfNew());
console.log();


console.log(' ===== 70: addToBackOfNew ===== ');    
//----------------------------------------------------------------------
// Write a function called "addToBackOfNew".

// Given an array and an element, "addToBackOfNew" returns a clone of the given array, with the given element added to the end.

// Important: It should be a NEW array instance, not the original array instance.

// var input = [1, 2];
// var output = addToBackOfNew(input, 3);
// console.log(input); // --> [1, 2]
// console.log(output); // --> [1, 2, 3]

// Starter Code :
// function addToBackOfNew(arr, element) {
//   // your code here
// }
var addToBackOfNew = function (arr, element) {

};
console.log(addToBackOfNew());
console.log(addToBackOfNew());
console.log(addToBackOfNew());
console.log();


console.log(' ===== 71: getAllElementsButNth ===== ');    
//----------------------------------------------------------------------
// Write a function called "getAllElementsButNth".

// Given an array and an index, "getAllElementsButNth" returns an array with all the elements but the nth.

// var output = getAllElementsButNth(['a', 'b', 'c'], 1);
// console.log(output); // --> ['a', 'c']

// Starter Code :
// function getAllElementsButNth(array, n) {
//   // your code here
// }
var getAllElementsButNth = function (arr, n) {

};
console.log(getAllElementsButNth());
console.log(getAllElementsButNth());
console.log(getAllElementsButNth());
console.log();


console.log(' ===== 72: joinArrayOfArrays ===== ');    
//----------------------------------------------------------------------
// Write a function called "joinArrayOfArrays".

// Given an array of arrays, "joinArrayOfArrays" returns a single array containing the elements of the nested arrays.

// var output = joinArrayOfArrays([[1, 4], [true, false], ['x', 'y']]);
// console.log(output); // --> [1, 4, true, false, 'x', 'y']

// You should be familiar with the "concat" method for this problem.

// Starter Code :
// function joinArrayOfArrays(arr) {
//   // your code here
// }
var joinArrayOfArrays = function (arr) {

};
console.log(joinArrayOfArrays());
console.log(joinArrayOfArrays());
console.log(joinArrayOfArrays());
console.log();


console.log(' ===== 73: removeFromFront ===== ');    
//----------------------------------------------------------------------
// Write a function called "removeFromFront".

// Given an array, "removeFromFront" returns the given array with its first element removed.

// Notes:
// * You should be familiar with the method 'shift'.

// var output = removeFromFront([1, 2, 3]);
// console.log(output); // --> [2, 3]

// Starter Code :
// function removeFromFront(arr) {
//   // your code here
// }
var removeFromFront = function (arr) {

};
console.log(removeFromFront());
console.log(removeFromFront());
console.log(removeFromFront());
console.log();


console.log(' ===== 74: getAllElementsButLast ===== ');    
//----------------------------------------------------------------------
// Write a function called "getAllElementsButLast".

// Given an array, "getAllElementsButLast" returns an array with all the elements but the last.

// var input = [1, 2, 3, 4];
// var output = getAllElementsButLast(input);
// console.log(output); // --> [1, 2 , 3]

// Starter Code :
// function getAllElementsButLast(array) {
//   // your code here
// }
var getAllElementsButLast = function (arr) {

};
console.log(getAllElementsButLast());
console.log(getAllElementsButLast());
console.log(getAllElementsButLast());
console.log();


console.log(' ===== 75: joinArrays ===== ');    
//----------------------------------------------------------------------
// Write a function called "joinArrays".

// Given two arrays, "joinArrays" returns an array with the elements of "arr1" in order, followed by the elementsin "arr2". 

// var output = joinArrays([1, 2], [3, 4]);
// console.log(output); // --> [1, 2, 3, 4]

// You should be familiar with the "concat" method for this problem.

// Starter Code :
// function joinArrays(arr1, arr2) {
//   // your code here
// }
var joinArrays = function (arr1, arr2) {

};
console.log(joinArrays());
console.log(joinArrays());
console.log(joinArrays());
console.log();


console.log(' ===== 76: getNthElement ===== ');    
//----------------------------------------------------------------------
// Write a function called "getNthElement".

// Given an array and an integer, "getNthElement" returns the element at the given integer, within the given array.

// Notes:
// * If the array has a length of 0, it should return 'undefined'.

// var output = getNthElement([1, 3, 5], 1);
// console.log(output); // --> 3

// Starter Code :
// function getNthElement(array, n) {
//   // your code here
// }
var getNthElement = function (arr, n) {

};
console.log(getNthElement());
console.log(getNthElement());
console.log(getNthElement());
console.log();


console.log(' ===== 77: getElementsAfter ===== ');    
//----------------------------------------------------------------------
// Write a function called "getElementsAfter".

// Given an array and an index, "getElementsAfter" returns a new array with all the elements after (but not including) the given index.

// var output = getElementsAfter(['a', 'b', 'c', 'd', 'e'], 2); 
// console.log(output); // --> ['d', 'e']

// Starter Code :
// function getElementsAfter(array, n) {
//   // your code here
// }
var getElementsAfter = function (arr, n) {

};
console.log(getElementsAfter());
console.log(getElementsAfter());
console.log(getElementsAfter());
console.log();


console.log(' ===== 78: getElementsUpTo ===== ');    
//----------------------------------------------------------------------
// Write a function called "getElementsUpTo".

// Given an array and a index, "getElementsUpTo", returns an array with all the elements up until, but not including, the element at the given index.

// Notes:
// * In order to do this you should be familiar with the 'slice' method.

// var output = getElementsUpTo(['a', 'b', 'c', 'd', 'e'], 3) 
// console.log(output); // --> ['a', 'b', 'c']

// Starter Code :
// function getElementsUpTo(array, n) {
//   // your code here
// }
var getElementsUpTo = function (arr, n) {

};
console.log(getElementsUpTo());
console.log(getElementsUpTo());
console.log(getElementsUpTo());
console.log();


console.log(' ===== 79: getAllElementsButFirst ===== ');    
//----------------------------------------------------------------------
// Write a function called "getAllElementsButFirst".

// Given an array, "getAllElementsButFirst" returns an array with all the elements but the first.

// var input = [1, 2, 3, 4];
// var output = getAllElementsButFirst(input);
// console.log(output); // --> [2, 3, 4]

// Starter Code :
// function getAllElementsButFirst(array) {
//   // your code here
// }
var getAllElementsButFirst = function (arr) {

};
console.log(getAllElementsButFirst());
console.log(getAllElementsButFirst());
console.log(getAllElementsButFirst());
console.log();


console.log(' ===== 80: removeFromBack ===== ');    
//----------------------------------------------------------------------
// Write a function called "removeFromBack".

// Given an array, "removeFromBack" returns the given array with its last element removed.

// Notes:
// * You should be familiar with the method 'pop'.

// var output = removeFromBack([1, 2, 3]);
// console.log(output); // --> [1, 2]

// Starter Code :
// function removeFromBack(arr) {
//   // your code here
// }
var removeFromBack = function (arr) {

};
console.log(removeFromBack());
console.log(removeFromBack());
console.log(removeFromBack());
console.log();


console.log(' ===== 81: addToFront ===== ');    
//----------------------------------------------------------------------
// Write a function called "addToFront".

// Given an array and an element, "addToFront" adds the given element to the front of the given array, and returns the given array.

// Notes: 
// * It should be the SAME array, not a new array.

// var output = addToFront([1, 2], 3);
// console.log(output); // -> [3, 1, 2]

// Starter Code :
// function addToFront(arr, element) {
//   // your code here
// }
var addToFront = function (arr, element) {

};
console.log(addToFront());
console.log(addToFront());
console.log(addToFront());
console.log();


console.log(' ===== 82: addToBack ===== ');    
//----------------------------------------------------------------------
// Write a function called "addToBack".

// Given an array and an element, "addToBack" returns the given array with the given element added to the end.

// Note: It should be the SAME array, not a new array.

// var output = addToBack([1, 2], 3);
// console.log(output); // -> [1, 2, 3]

// Starter Code :
// function addToBack(arr, element) {
//   // your code here
// }
var addToBack = function (arr, element) {

};
console.log(addToBack());
console.log(addToBack());
console.log(addToBack());
console.log();


console.log(' ===== 83: getLastElement ===== ');    
//----------------------------------------------------------------------
// Write a function called "getLastElement".

// Given an array, "getLastElement" returns the last element of the given array.

// Notes:
// * If the given array has a length of 0, it should return 'undefined'.

// var output = getLastElement([1, 2, 3, 4]);
// console.log(output); // --> 4

// Starter Code :
// function getLastElement(array) {
//   // your code here
// }
var getLastElement = function (arr) {

};
console.log(getLastElement());
console.log(getLastElement());
console.log(getLastElement());
console.log();


console.log(' ===== 84: getFirstElement ===== ');    
//----------------------------------------------------------------------
// Write a function called "getFirstElement".

// Given an array, "getFirstElement" returns the first element of the given array.

// Notes:
// * If the given array has a length of 0, it should return undefined.

// var output = getFirstElement([1, 2, 3, 4, 5]);
// console.log(output); // --> 1

// Starter Code :
// function getFirstElement(array) {
//   // your code here
// }
var getFirstElement = function (arr) {

};
console.log(getFirstElement());
console.log(getFirstElement());
console.log(getFirstElement());
console.log();


console.log(' ===== 85: sumDigits ===== ');    
//----------------------------------------------------------------------
// Write a function called "sumDigits".

// Given a number, "sumDigits" returns the sum of all its digits.

// var output = sumDigits(1148);
// console.log(output); // --> 14

// If the number is negative, the first digit should count as negative.

// var output = sumDigits(-316);
// console.log(output); // --> 4

// Notes:
// * In order to use some of the methods that will be most helpful to you, you will most likely want to do some string to number conversion and vice versa.
// * Be sure to familiarize yourself with the "toString" method, as well as the "Number" function.

// Starter Code :
// function sumDigits(num) {
//   // your code here
// }
var sumDigits = function (num) {

};
console.log(sumDigits());
console.log(sumDigits());
console.log(sumDigits());
console.log();


console.log(' ===== 86: getIndexOf ===== ');    
//----------------------------------------------------------------------
// Write a function called "getIndexOf".

// Given a character and a string, "getIndexOf" returns the first position of the given character in the given string.

// Notes:
// * Strings are zero indexed, meaning the first character in a string is at position 0.
// * When a string contains more than one occurrence of a character, it should return the index of its first occurrence.
// * If the character does not exist in the string, it should return -1.
// * Do not use the native indexOf function in your implementation.

// var output = getIndexOf('a', 'I am a hacker');
// console.log(output); // --> 2

// Starter Code :
// function getIndexOf(char, str) {
//   // your code here
// }
var getIndexOf = function (char, str) {

};
console.log(getIndexOf());
console.log(getIndexOf());
console.log(getIndexOf());
console.log();


console.log(' ===== 87: getStringLength ===== ');    
//----------------------------------------------------------------------
// Write a function called "getStringLength".

// Given a string, "getStringLength" returns the length of the given string.

// Notes:
// * Do NOT use any native 'length' methods.
// * You might consider using 'substring' or 'slice' as alternatives.

// var output = getStringLength('hello');
// console.log(output); // --> 5

// Starter Code :
// function getStringLength(string) {
//   // your code here
// }
var getStringLength = function (str) {

};
console.log(getStringLength());
console.log(getStringLength());
console.log(getStringLength());
console.log();


console.log(' ===== 88: countAllCharacters ===== ');    
//----------------------------------------------------------------------
// Write a function called "countCharacter".

// Given a string input and a character, "countCharacter" returns the number of occurrences of a given character in the given string.

// var output = countCharacter('I am a hacker', 'a');
// console.log(output); // --> 3

// Starter Code :
// function countCharacter(str, char) {
//   // your code here
// }
var countCharacter = function (str, char) {

};
console.log(countCharacter());
console.log(countCharacter());
console.log(countCharacter());
console.log();


console.log(' ===== 89: modulo ===== ');    
//----------------------------------------------------------------------
// Write a function called "modulo".

// Given 2 numbers, "modulo" returns the remainder after dividing num1 by num2.

// It should behave as described in the canonical documentation (MDN) for the JavaScript remainder operator:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder_()

// Notes:
// * Do NOT use the actual built-in modulo (aka "remainder") operator (%) in your implementation.
// * 0 % ANYNUMBER = 0.
// * ANYNUMBER % 0 = NaN.
// * If either operand is NaN, then the result is NaN.
// * Modulo always returns the sign of the first number.

// var output = modulo(25, 4);
// console.log(output); // --> 1

// Starter Code :
// function modulo(num1, num2) {
//   // your code here
// }
var modulo = function (num1, num2) {

};
console.log(modulo());
console.log(modulo());
console.log(modulo());
console.log();


console.log(' ===== 90: multiply ===== ');    
//----------------------------------------------------------------------
// Write a function called "multiply".

// Given 2 numbers, "multiply" returns their product.

// Notes:
// * It should not use the multiply operator (*).\

// var output = multiply(4, 7);
// console.log(output); // --> 28

// Starter Code :
// function multiply(num1, num2) {
//   // your code here
// }
var multiply = function (num1, num2) {

};
console.log(multiply());
console.log(multiply());
console.log(multiply());
console.log();


console.log(' ===== 91: isOddWithoutModulo ===== ');    
//----------------------------------------------------------------------
// Write a function called "isOddWithoutModulo".

// Given a number, "isOddWithoutModulo" returns whether the passed in number is odd.

// Note:
// * It does so without using the modulo operator (%). 
// * It should work for negative numbers and zero.

// var output = isOddWithoutModulo(17);
// console.log(output); // --> true

// Starter Code :
// function isOddWithoutModulo(num) {
//   // your code here
// }
var isOddWithoutModulo = function (num) {

};
console.log(isOddWithoutModulo());
console.log(isOddWithoutModulo());
console.log(isOddWithoutModulo());
console.log();


console.log(' ===== 92: isEvenWithoutModulo ===== ');    
//----------------------------------------------------------------------
// Write a function called "isEvenWithoutModulo".

// Given a number, "isEvenWithoutModulo" returns whether it is even. 

// Notes:
// * It does so without using the modulo operator (%). 
// * It should work for negative numbers and zero.

// var output = isEvenWithoutModulo(8);
// console.log(output); // --> true

// Starter Code :
// function isEvenWithoutModulo(num) {
//   // your code here
// }
var isEvenWithoutModulo = function (num) {

};
console.log(isEvenWithoutModulo());
console.log(isEvenWithoutModulo());
console.log(isEvenWithoutModulo());
console.log();


console.log(' ===== 93: multiplyBetween ===== ');    
//----------------------------------------------------------------------
// Write a function called "multiplyBetween".

// Given 2 integers, "multiplyBetween" returns the product between the two given integers, beginning at num1, and excluding num2.

// Notes:
// * The product between 1 and 4 is 1 * 2 * 3 = 6.
// * If num2 is not greater than num1, it should return 0.

// var output = multiplyBetween(2, 5);
// console.log(output); // --> 24

// Starter Code :
// function multiplyBetween(num1, num2) {
//   // your code here
// }
var multiplyBetween = function (num1, num2) {

};
console.log(multiplyBetween());
console.log(multiplyBetween());
console.log(multiplyBetween());
console.log();


console.log(' ===== 94: computeSumBetween ===== ');    
//----------------------------------------------------------------------
// Write a function called "computeSumBetween".

// Given 2 integers, "computeSumBetween" returns the sum between the two given integers, beginning at num1, and excluding num2.

// Notes:
// * The sum between 1 and 4 is 1 + 2 + 3 = 6.
// * If num2 is not greater than num1, it should return 0.

// var output = computeSumBetween(2, 5);
// console.log(output); // --> 9

// Starter Code :
// function computeSumBetween(num1, num2) {
//   // your code here
// }
var computeSumBetween = function (num1, num2) {

};
console.log(computeSumBetween());
console.log(computeSumBetween());
console.log(computeSumBetween());
console.log();


console.log(' ===== 95: computeFactorialOfN ===== ');    
//----------------------------------------------------------------------
// Write a function called "computeFactorialOfN".

// Given a natural number (a whole number greater than 0), "computeFactorialOfN" returns its factorial.

// var output = computeFactorialOfN(3);
// console.log(output); // --> 6

// var output = computeFactorialOfN(4);
// console.log(output); // --> 24

// Starter Code :
// function computeFactorialOfN(n) {
//   // your code here
// }
var computeFactorialOfN = function (num) {

};
console.log(computeFactorialOfN());
console.log(computeFactorialOfN());
console.log(computeFactorialOfN());
console.log();


console.log(' ===== 96: repeatString ===== ');    
//----------------------------------------------------------------------
// Write a function called "repeatString".

// Given a string and a number, "repeatString" returns the given string repeated the given number of times.

// var output = repeatString('code', 3);
// console.log(output); // --> 'codecodecode'

// Starter Code :
// function repeatString(string, num) {
//   // your code here
// }
var repeatString = function (str, num) {

};
console.log(repeatString());
console.log(repeatString());
console.log(repeatString());
console.log();


console.log(' ===== 97: computeSummationToN ===== ');    
//----------------------------------------------------------------------
// Write a function called "computeSummationToN".

// Given a number, "computeSummationToN" returns the sum of sequential numbers leading up to the given number, beginning at 0.

// Notes:
// * If n = 4, it should calculate the sum of 1 + 2 + 3 + 4, and return 10.

// var output = computeSummationToN(6);
// console.log(output); // --> 21

// Starter Code :
// function computeSummationToN(n) {
//   // your code here
// }
var computeSummationToN = function (n) {

};
console.log(computeSummationToN());
console.log(computeSummationToN());
console.log(computeSummationToN());
console.log();


console.log(' ===== 98: computeScoreToGradeWithPlus ===== ');    
//----------------------------------------------------------------------
// Write a function called "convertScoreToGradeWithPlusAndMinus".

// Given a score, "convertScoreToGradeWithPlusAndMinus" returns a string representing the letter grade corresponding to the given score.

// Notes:
// * (100 - 90) --> 'A'
// * (89  - 80) --> 'B'
// * (79  - 70) --> 'C'
// * (69  - 60) --> 'D'
// * (60  -  0) --> 'F'
// * If the given score is greater than 100 or less than 0, it should return 'INVALID SCORE'.
// * If the score is between the 0 and 2 (inclusive) of a given range, return the letter with a '-'
// * If the score is be the 8 and 9 (inclusive) of a given range, return the letter with a '+'
// * There are is no F+ and there is no F-.

// var output = convertScoreToGradeWithPlusAndMinus(91);
// console.log(output); // --> 'A-'


// Starter Code :
// function convertScoreToGradeWithPlusAndMinus(score) {
//   // your code here
// }
var convertScoreToGradeWithPlusAndMinus = function (score) {

};
console.log(convertScoreToGradeWithPlusAndMinus());
console.log(convertScoreToGradeWithPlusAndMinus());
console.log(convertScoreToGradeWithPlusAndMinus());
console.log();


console.log(' ===== 99: computeScoreToGrade ===== ');    
//----------------------------------------------------------------------
// Write a function called "convertScoreToGrade".

// Given a score, "convertScoreToGrade" returns a string representing the letter grade corresponding to the given score.

// Notes:
// * (100 - 90) --> 'A'
// * (89  - 80) --> 'B'
// * (79  - 70) --> 'C'
// * (69  - 60) --> 'D'
// * (59  -  0) --> 'F'
// * If the given score is greater than 100 or less than 0, it should return 'INVALID SCORE'.

// var output = convertScoreToGrade(91);
// console.log(output); // --> 'A'

// Starter Code :
// function convertScoreToGrade(score) {
//   // your code here
// }
var convertScoreToGrade = function (score) {

};
console.log(convertScoreToGrade());
console.log(convertScoreToGrade());
console.log(convertScoreToGrade());
console.log();


console.log(' ===== 100: areValidCredentials ===== ');    
//----------------------------------------------------------------------
// Write a function called "areValidCredentials".

// Given a name and a password, "areValidCredentials", returns true if the name is longer than 3 characters, AND, the password is at least 8 characters long. Otherwise it returns false.

// var output = areValidCredentials('Ritu', 'mylongpassword')
// console.log(output); // --> true

// Starter Code :
// function areValidCredentials(name, password) {
//   // your code here
// }
var areValidCredentials = function (name, password) {

};
console.log(areValidCredentials());
console.log(areValidCredentials());
console.log(areValidCredentials());
console.log();


console.log(' ===== 101: getLongestOfThreeWords ===== ');    
//----------------------------------------------------------------------
// Write a function called "getLongestOfThreeWords".

// Given 3 words, "getLongestOfThreeWords" returns the longest of three words. 

// Notes:
// * If there is a tie, it should return the first word in the tie.

// var output = getLongestOfThreeWords('these', 'three', 'words');
// console.log(output); // --> 'these'

// Starter Code :
// function getLongestOfThreeWords(word1, word2, word3) {
//   // your code here
// }
var getLongestOfThreeWords = function (word1, word2, word3) {

};
console.log(getLongestOfThreeWords());
console.log(getLongestOfThreeWords());
console.log(getLongestOfThreeWords());
console.log();


console.log(' ===== 102: findShortestOfThreeWords ===== ');    
//----------------------------------------------------------------------
// Write a function called "findShortestOfThreeWords".

// Given 3 strings, "findShortestOfThreeWords" returns the shortest of the given strings.

// Notes:
// * If there are ties, it should return the first word in the parameters list.

// var output = findShortestOfThreeWords('a', 'two', 'three');
// console.log(output); // --> 'a'

// Starter Code :
// function findShortestOfThreeWords(word1, word2, word3) {
//   // your code here
// }
var findShortestOfThreeWords = function (word1, word2, word3) {

};
console.log(findShortestOfThreeWords());
console.log(findShortestOfThreeWords());
console.log(findShortestOfThreeWords());
console.log();


console.log(' ===== 103: findMinLengthOfThreeWords ===== ');    
//----------------------------------------------------------------------
// Write a function called "findMinLengthOfThreeWords".

// Given 3 words, "findMinLengthOfThreeWords" returns the length of the shortest word.

// var output = findMinLengthOfThreeWords('a', 'be', 'see');
// console.log(output); // --> 1

// Starter Code :
// function findMinLengthOfThreeWords(word1, word2, word3) {
//   // your code here
// }
var findMinLengthOfThreeWords = function (word1, word2, word3) {

};
console.log(findMinLengthOfThreeWords());
console.log(findMinLengthOfThreeWords());
console.log(findMinLengthOfThreeWords());
console.log();


console.log(' ===== 104: findMaxLengthOfThreeWords ===== ');    
//----------------------------------------------------------------------
// Write a function called "findMaxLengthOfThreeWords".

// Given 3 words, "findMaxLengthOfThreeWords" returns the length of the longest word.

// var output = findMaxLengthOfThreeWords('a', 'be', 'see');
// console.log(output); // --> 3

// Starter Code :
// function findMaxLengthOfThreeWords(word1, word2, word3) {
//   // your code here
// }
var findMaxLengthOfThreeWords = function (str1, str2, str3) {

};
console.log(findMaxLengthOfThreeWords());
console.log(findMaxLengthOfThreeWords());
console.log(findMaxLengthOfThreeWords());
console.log();


console.log(' ===== 105: checkAge ===== ');    
//----------------------------------------------------------------------
// Write a function called "checkAge". 

// Given a person's name and age, "checkAge" returns one of two messages:

// "Go home, {insert_name_here}!", if they are younger than 21.
// "Welcome, {insert_name_here}!", if they are 21 or older.

// Naturally, replace "{insert_name_here}" with the given name. :)

// var output = checkAge('Adrian', 22);
// console.log(output); // --> 'Welcome, Adrian!'

// Starter Code :
// function checkAge(name, age) {
//   // your code here
// }
var checkAge = function (name, age) {

};
console.log(checkAge());
console.log(checkAge());
console.log(checkAge());
console.log();


console.log(' ===== 106: or ===== ');    
//----------------------------------------------------------------------
// Write a function called "or".

// Given 2 boolean expressions, "or" returns true or false, corresponding to the || operator.

// Notes:
// * Do not use the || operator.
// * Use ! and && operators instead.

// var output = or(true, false);
// console.log(output); // --> true;

// Starter Code :
// function or(expression1, expression2) {
//   // your code here
// }
var or = function (exp1, exp2) {

};
console.log(or());
console.log(or());
console.log(or());
console.log();


console.log(' ===== 107: isOldEnoughToDrinkAndDrive ===== ');    
//----------------------------------------------------------------------
// Write a function called "isOldEnoughToDrinkAndDrive".

// Given a number, in this case an age, "isOldEnoughToDrinkAndDrive" returns whether a person of this given age is old enough to legally drink and drive in the United States.

// Notes:
// * The legal drinking age in the United States is 21.
// * It is always illegal to drink and drive in the United States.

// var output = isOldEnoughToDrinkAndDrive(22);
// console.log(output); // --> false

// Starter Code :
// function isOldEnoughToDrinkAndDrive(age) {
//   // your code here
// }
var isOldEnoughToDrinkAndDrive = function (age) {

};
console.log(isOldEnoughToDrinkAndDrive());
console.log(isOldEnoughToDrinkAndDrive());
console.log(isOldEnoughToDrinkAndDrive());
console.log();


console.log(' ===== 108: isOldEnoughToDrive ===== ');    
//----------------------------------------------------------------------
// Write a function called "isOldEnoughToDrive".

// Given a number, in this case an age, "isOldEnoughToDrive" returns whether a person of this given age is old enough to legally drive in the United States.

// Notes:
// * The legal driving age in the United States is 16.

// var output = isOldEnoughToDrive(22);
// console.log(output); // --> true

// Starter Code :
// function isOldEnoughToDrive(age) {
//   // your code here
// }
var isOldEnoughToDrive = function (age) {

};
console.log(isOldEnoughToDrive());
console.log(isOldEnoughToDrive());
console.log(isOldEnoughToDrive());
console.log();


console.log(' ===== 109: isOldEnoughToVote ===== ');    
//----------------------------------------------------------------------
// Write a function called "isOldEnoughToVote".

// Given a number, in this case an age, 'isOldEnoughToVote' returns whether a person of this given age is old enough to legally vote in the United States.

// Notes:
// * The legal voting age in the United States is 18.

// var output = isOldEnoughToVote(22);
// console.log(output); // --> true

// Starter Code :
// function isOldEnoughToVote(age) {
//   // your code here
// }
var isOldEnoughToVote = function (age) {

};
console.log(isOldEnoughToVote());
console.log(isOldEnoughToVote());
console.log(isOldEnoughToVote());
console.log();


console.log(' ===== 110: isOldEnoughToDrink ===== ');    
//----------------------------------------------------------------------
// Write a function called "isOldEnoughToDrink".

// Given a number, in this case an age, "isOldEnoughToDrink" returns whether a person of this given age is old enough to legally drink in the United States.

// Notes:
// * The legal drinking age in the United States is 21.

// var output = isOldEnoughToDrink(22);
// console.log(output); // --> true

// Starter Code :
// function isOldEnoughToDrink(age) {
//   // your code here	
// }
var isOldEnoughToDrink = function (age) {

};
console.log(isOldEnoughToDrink());
console.log(isOldEnoughToDrink());
console.log(isOldEnoughToDrink());
console.log();


console.log(' ===== 111: isEitherEvenOrAreBoth7 ===== ');    
//----------------------------------------------------------------------
// Write a function called "isEitherEvenOrAreBoth7".

// Given two numbers, 'isEitherEvenOrAreBoth7' returns whether at least one of them is even, or, both of them are 7.

// var output = isEitherEvenOrAreBoth7(3, 7);
// console.log(output); // --> false

// var output = isEitherEvenOrAreBoth7(2, 3);
// console.log(output); // --> true

// Starter Code :
// function isEitherEvenOrAreBoth7(num1, num2) {
//   // your code here
// }
var isEitherEvenOrAreBoth7 = function (num1, num2) {

};
console.log(isEitherEvenOrAreBoth7());
console.log(isEitherEvenOrAreBoth7());
console.log(isEitherEvenOrAreBoth7());
console.log();


console.log(' ===== 112: isEitherEvenAndLessThan9 ===== ');    
//----------------------------------------------------------------------
// Write a function called "isEitherEvenAndLessThan9".

// Given two numbers, 'isEitherEvenAndLessThan9' returns whether at least one of them is even, and, both of them are less than 9.

// var output = isEitherEvenAndLessThan9(2, 4);
// console.log(output); // --> true

// var output = isEitherEvenAndLessThan9(72, 2);
// console.log(output); // --> false

// Starter Code :
// function isEitherEvenAndLessThan9(num1, num2) {
//   // your code here
// }
var sEitherEvenAndLessThan9 = function (num1, num2) {

};
console.log(sEitherEvenAndLessThan9());
console.log(sEitherEvenAndLessThan9());
console.log(sEitherEvenAndLessThan9());
console.log();


console.log(' ===== 113: isEitherEven ===== ');    
//----------------------------------------------------------------------
// Write a function called "isEitherEven".

// Given two numbers, "isEitherEven" returns whether or not either one of the given numbers is even.

// var output = isEitherEven(1, 4);
// console.log(output); // --> true

// Starter Code :
// function isEitherEven(num1, num2) {
//   // your code here
// }
var isEitherEven = function (num1, num2) {

};
console.log(isEitherEven());
console.log(isEitherEven());
console.log(isEitherEven());
console.log();


console.log(' ===== 114: areBothOdd ===== ');    
//----------------------------------------------------------------------
// Write a function called "areBothOdd".

// Given 2 numbers, "areBothOdd" returns whether or not both of the given numbers are odd.

// var output = areBothOdd(1, 3);
// console.log(output); // --> true

// Starter Code :
// function areBothOdd(num1, num2) {
//   // your code here
// }
var areBothOdd = function (num1, num2) {

};
console.log(areBothOdd());
console.log(areBothOdd());
console.log(areBothOdd());
console.log();


console.log(' ===== 115: isEvenAndGretaerThanTen ===== ');    
//----------------------------------------------------------------------
// Write a function called "isEvenAndGreaterThanTen".

// Given a number, "isEvenAndGreaterThanTen" returns whether it is both even and greater than 10.

// var output = isEvenAndGreaterThanTen(13);
// console.log(output); // --> false

// Starter Code :
// function isEvenAndGreaterThanTen(num) {
//   // your code here
// }
var isEvenAndGreaterThanTen = function (num) {

};
console.log(isEvenAndGreaterThanTen());
console.log(isEvenAndGreaterThanTen());
console.log(isEvenAndGreaterThanTen());
console.log();


console.log(' ===== 116: isSameLength ===== ');    
//----------------------------------------------------------------------
// Write a function called "isSameLength".

// Given two words, "isSameLength" returns whether the given words have the same length.

// var output = isSameLength('words', 'super');
// console.log(output); // --> true

// Starter Code : 
// function isSameLength(word1, word2) {
//   // your code here
// }
var isSameLength = function (word1, word2) {

};
console.log(isSameLength());
console.log(isSameLength());
console.log(isSameLength());
console.log();


console.log(' ===== 117: isOddLength ===== ');    
//----------------------------------------------------------------------
// Write a function called "isOddLength".

// Given a word, "isOddLength" returns whether the length of the given word is odd.

// var output = isOddLength('special');
// console.log(output); // --> true

// Starter Code :
// function isOddLength(word) {
//   // your code here
// }
var isOddLength = function (word) {

};
console.log(isOddLength());
console.log(isOddLength());
console.log(isOddLength());
console.log();


console.log(' ===== 118: isEvenLength ===== ');    
//----------------------------------------------------------------------
// Write a function called "isEvenLength".

// Given a word, "isEvenLength" returns whether the length of the word is even.

// var output = isEvenLength('wow');
// console.log(output); // --> false

// Starter Code :
// function isEvenLength(word) {
//   // your code here
// }
var isEvenLength = function (word) {

};
console.log(isEvenLength());
console.log(isEvenLength());
console.log(isEvenLength());
console.log();


console.log(' ===== 119: isOdd ===== ');    
//----------------------------------------------------------------------
// Write a function called "isOdd".

// Given a number, "isOdd" returns whether the given number is odd.

// var output = isOdd(9);
// console.log(output); // --> true

// Starter Code :
// function isOdd(num) {
//   // your code here
// }
var isOdd = function (num) {

};
console.log(isOdd());
console.log(isOdd());
console.log(isOdd());
console.log();


console.log(' ===== 120: isEven ===== ');    
//----------------------------------------------------------------------
// Write a function called "isEven".

// Given a number, "isEven" returns whether it is even.

// var output = isEven(11);
// console.log(output); // --> false

// Starter Code :
// function isEven(num) {
//   // your code here
// }
var sEven = function (num) {

};
console.log(sEven());
console.log(sEven());
console.log(sEven());
console.log();


console.log(' ===== 121: isEqualTo ===== ');    
//----------------------------------------------------------------------
// Write a function called "isEqualTo".

// Given 2 numbers, "isEqualTo" returns whether num2 is equal to num1.

// var output = isEqualTo(11, 10);
// console.log(output); // --> false

// Starter Code :
// function isEqualTo(num1, num2) {
//   // your code here
// }
var isEqualTo = function (num1, num2) {

};
console.log(isEqualTo());
console.log(isEqualTo());
console.log(isEqualTo());
console.log();


console.log(' ===== 122: isGreaterThan ===== ');    
//----------------------------------------------------------------------
// Write a function called "isGreaterThan".

// Given 2 numbers, "isGreaterThan" returns whether num2 is greater than num1.

// var output = isGreaterThan(11, 10);
// console.log(output); // --> false

// Starter Code :
// function isGreaterThan(num1, num2) {
//   // your code here
// }
var isGreaterThan = function (num1, num2) {

};
console.log(isGreaterThan());
console.log(isGreaterThan());
console.log(isGreaterThan());
console.log();


console.log(' ===== 123: isLessThan ===== ');    
//----------------------------------------------------------------------
// Write a function called "isLessThan".

// Given 2 numbers, "isLessThan" returns whether num2 is less than num1.

// var output = isLessThan(9, 4);
// console.log(output); // --> true

// Starter Code :
// function isLessThan(num1, num2) {
//   // your code here
// }
var isLessThan = function (num1, num2) {

};
console.log(isLessThan());
console.log(isLessThan());
console.log(isLessThan());
console.log();


console.log(' ===== 124: equalsTen ===== ');    
//----------------------------------------------------------------------
// Write a function called "equalsTen".

// Given a number, "equalsTen" returns whether or not the given number is 10.

// var output = equalsTen(9);
// console.log(output); // --> false

// Starter Code :
// function equalsTen(num) {
//   // your code here
// }
var equalsTen = function (num) {

};
console.log(equalsTen());
console.log(equalsTen());
console.log(equalsTen());
console.log();


console.log(' ===== 125: isLessThan30 ===== ');    
//----------------------------------------------------------------------
// Write a function called "isLessThan30".

// Given a number, "isLessThan30" returns whether the given number is less than 30.

// var output = isLessThan30(9);
// console.log(output); // --> true

// Starter Code :
// function isLessThan30(num) {
//   // your code here
// }
var isLessThan30 = function (num) {

};
console.log(isLessThan30());
console.log(isLessThan30());
console.log(isLessThan30());
console.log();


console.log(' ===== 126: isGreaterThanTen ===== ');    
//----------------------------------------------------------------------
// Write a function called "isGreaterThanTen".

// Given a number, "isGreaterThanTen" returns whether it is greater than 10.

// var output = isGreaterThanTen(11);
// console.log(output); // --> true

// Starter Code :
// function isGreaterThanTen(num) {
//   // your code here
// }
var isGreaterThanTen = function (num) {

};
console.log(isGreaterThanTen());
console.log(isGreaterThanTen());
console.log(isGreaterThanTen());
console.log();


console.log(' ===== 127: computeCompoundInterest ===== ');    
//----------------------------------------------------------------------
// Write a function called "computeCompoundInterest".

// Given a principal, an interest rate, a compounding frequency, and a time (in years), "computeCompoundInterest" returns the amount of compound interest generated.

// var output = computeCompoundInterest(1500, .043, 4, 6);
// console.log(output); // --> 438.8368221341061

// Reference:
// https://en.wikipedia.org/wiki/Compound_interest#Calculation_of_compound_interest
// This shows the formula used to calculate the total compound interest generated.

// Starter Code :
// function computeCompoundInterest(principal, interestRate, compoundingFrequency, timeInYears) {
//   // your code here
// }
var computeCompoundInterest = function (principal, int) {

};
console.log(computeCompoundInterest());
console.log(computeCompoundInterest());
console.log(computeCompoundInterest());
console.log();


console.log(' ===== 128: calculateBillTotal ===== ');    
//----------------------------------------------------------------------
// Write a function called "calculateBillTotal".

// Given the pre tax and pre tip amount of a meal, "calculateBillTotal" returns the total amount due after tax and tip.

// Notes:
// * Assume that sales tax is 9.5% and tip is 15%.
// * Do NOT tip on the sales tax, only on the pre tip amount.

// var output = calculateBillTotal(20);
// console.log(output); // --> 24.9

// Starter Code :
// function calculateBillTotal(preTaxAndTipAmount) {
//   // your code here
// }
var calculateBillTotal = function (preBill) {

};
console.log(calculateBillTotal());
console.log(calculateBillTotal());
console.log(calculateBillTotal());
console.log();


console.log(' ===== 129: computePower ===== ');    
//----------------------------------------------------------------------
// Write a function called "computePower".

// Given a number and an exponent, "computePower" returns the given number, raised to the given exponent. 

// var output = computePower(2, 3);
// console.log(output); // --> 8

// Starter Code :
// function computePower(num, exponent) {
//   // your code here
// }
var computePower = function (num, exp) {

};
console.log(computePower());
console.log(computePower());
console.log(computePower());
console.log();


console.log(' ===== 130: computeAreaOfCircle ===== ');    
//----------------------------------------------------------------------
// Write a function called "computeAreaOfACircle".

// Given the radius of a circle, "computeAreaOfACircle" returns its area.

// var output = computeAreaOfACircle(4);
// console.log(output); // --> 50.26548245743669

// Reference:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI

// Starter Code :
// function computeAreaOfACircle(radius) {
//   // your code here
// }
var computeAreaOfACircle = function (radius) {

};
console.log(computeAreaOfACircle());
console.log(computeAreaOfACircle());
console.log(computeAreaOfACircle());
console.log();


console.log(' ===== 131: computePerimeterOfCircle ===== ');    
//----------------------------------------------------------------------
// Write a function called "computePerimeterOfACircle".

// Given the radius of a circle, "computePerimeterOfACircle" returns its perimeter.

// var output = computePerimeterOfACircle(4);
// console.log(output); // --> 25.132741228718345

// Starter Code :
// function computePerimeterOfACircle(radius) {
//   // your code here
// }
var computePerimeterOfACircle = function (radius) {

};
console.log(computePerimeterOfACircle());
console.log(computePerimeterOfACircle());
console.log(computePerimeterOfACircle());
console.log();


console.log(' ===== 132: computeTripledAreaOfARectangle ===== ');    
//----------------------------------------------------------------------
// Write a function called "computeTripledAreaOfARectangle".

// Given a length and width of a rectangle, "computeTripledAreaOfARectangle" returns the rectangle's area, multiplied by 3.

// var output = computeTripledAreaOfARectangle(2, 4);
// console.log(output); // --> 24

// Starter Code :
// function computeTripledAreaOfARectangle(length, width) {
//   // your code here
// }
var computeTripledAreaOfARectangle = function (length, width) {

};
console.log(computeTripledAreaOfARectangle());
console.log(computeTripledAreaOfARectangle());
console.log(computeTripledAreaOfARectangle());
console.log();


console.log(' ===== 133: doubleSquareRootOf ===== ');    
//----------------------------------------------------------------------
// Write a function called "doubleSquareRootOf".

// Given a number, "doubleSquareRootOf" returns double its square root.

// var output = doubleSquareRootOf(121);
// console.log(output); // --> 22

// Starter Code :
// function doubleSquareRootOf(num) {
//   // your code here
// }
var doubleSquareRootOf = function (num) {

};
console.log(doubleSquareRootOf());
console.log(doubleSquareRootOf());
console.log(doubleSquareRootOf());
console.log();


console.log(' ===== 134: computeAverageLengthOfWords ===== ');    
//----------------------------------------------------------------------
// Write a function called "computeAverageLengthOfWords".

// Given two words, "computeAverageLengthOfWords" returns the average of their lengths.

// var output = computeAverageLengthOfWords('code', 'programs');
// console.log(output); // --> 6

// Starter Code :
// function computeAverageLengthOfWords(word1, word2) {
//   // your code here
// }
var omputeAverageLengthOfWords = function (str1, str2) {

};
console.log(omputeAverageLengthOfWords());
console.log(omputeAverageLengthOfWords());
console.log(omputeAverageLengthOfWords());
console.log();


console.log(' ===== 135: computeSquareRoot ===== ');    
//----------------------------------------------------------------------
// Write a function called "computeSquareRoot".

// Given a number, "computeSquareRoot" returns its square root.

// var output = computeSquareRoot(9);
// console.log(output); // --> 3

// Starter Code :
// function computeSquareRoot(num) {
//   // your code here
// }
var omputeSquareRoot = function (num) {

};
console.log(omputeSquareRoot());
console.log(omputeSquareRoot());
console.log(omputeSquareRoot());
console.log();


console.log(' ===== 136: getLengthOfThreeWords ===== ');    
//----------------------------------------------------------------------
// Write a function called "getLengthOfThreeWords".

// Given 3 words, "getLengthOfThreeWords" returns the sum of their lengths.

// var output = getLengthOfThreeWords('some', 'other', 'words');
// console.log(output); // --> 14

// Starter Code :
// function getLengthOfThreeWords(word1, word2, word3) {
//   // your code here
// }
var getLengthOfThreeWords = function (str1, str2, str3) {

};
console.log(getLengthOfThreeWords());
console.log(getLengthOfThreeWords());
console.log(getLengthOfThreeWords());
console.log();


console.log(' ===== 137: getFullName ===== ');    
//----------------------------------------------------------------------
// Write a function called "getFullName".

// Given a first and a last name, "getFullName" returns a single string with the given first and last names separated by a single space.

// var output = getFullName('Joe', 'Smith');
// console.log(output); // --> 'Joe Smith'

// Starter Code :
// function getFullName(firstName, lastName) {
//   // your code here
// }
var getFullName = function (firstName, lastName) {

};
console.log(getFullName());
console.log(getFullName());
console.log(getFullName());
console.log();


console.log(' ===== 138: average ===== ');    
//----------------------------------------------------------------------
// Write a function called "average".

// Given two numbers, "average" returns their average.

// var output = average(4, 6);
// console.log(output); // --> 5

// Starter Code :
// function average(num1, num2) {
//   // your code here
// }
var average = function (num1, num2) {

};
console.log(average());
console.log(average());
console.log(average());
console.log();


console.log(' ===== 139: computeAreaOfATriangle ===== ');    
//----------------------------------------------------------------------
// Write a function called "computeAreaOfATriangle".

// Given the base and height of a triangle, "computeAreaOfATriangle" returns its area.

// var output = computeAreaOfATriangle(4, 6);
// console.log(output); // --> 12

// Starter Code :
// function computeAreaOfATriangle(base, height) {
//   // your code here
// }
var computeAreaOfATriangle = function (base, height) {

};
console.log(computeAreaOfATriangle());
console.log(computeAreaOfATriangle());
console.log(computeAreaOfATriangle());
console.log();


console.log(' ===== 140: getLengthOfTwoWords ===== ');    
//----------------------------------------------------------------------
// Write a function called "getLengthOfTwoWords".

// Given 2 words, "getLengthOfTwoWords" returns the sum of their lengths.

// var output = getLengthOfTwoWords('some', 'words');
// console.log(output); // --> 9

// Starter Code :
// function getLengthOfTwoWords(word1, word2) {
//   // your code here
// }
var etLengthOfTwoWords = function (word1, word2) {

};
console.log(etLengthOfTwoWords());
console.log(etLengthOfTwoWords());
console.log(etLengthOfTwoWords());
console.log();


console.log(' ===== 141: cube ===== ');    
//----------------------------------------------------------------------
// Write a function called "cube".

// Given a number, "cube" returns the cube of that number.

// var output = cube(3);
// console.log(output); // --> 27

// Starter Code :
// function cube(num) {
//   // your code here
// }
var cube = function (num) {

};
console.log(cube());
console.log(cube());
console.log(cube());
console.log();


console.log(' ===== 142: computePerimeterOfATriangle ===== ');    
//----------------------------------------------------------------------
// Write a function called "computePerimeterOfATriangle".

// Given 3 sides describing a triangle, "computePerimeterOfATriangle" returns its perimter.

// var output = computePerimeterOfATriangle(6, 4, 10);
// console.log(output); // --> 20

// Starter Code :
// function computePerimeterOfATriangle(side1, side2, side3) {
//   // your code here
// }
var computePerimeterOfATriangle = function (side1, side2, side3) {

};
console.log(computePerimeterOfATriangle());
console.log(computePerimeterOfATriangle());
console.log(computePerimeterOfATriangle());
console.log();


console.log(' ===== 143: computePerimeterOfARectangle ===== ');    
//----------------------------------------------------------------------
// Write a function called "computePerimeterOfARectangle".

// Given a length and a width describing a rectangle, "computePerimeterOfARectangle" returns its perimter.

// var output = computePerimeterOfARectangle(5, 2);
// console.log(output); // --> 14

// Starter Code :
// function computePerimeterOfARectangle(length, width) {
//   // your code here
// }
var computePerimeterOfARectangle = function (length, width) {

};
console.log(computePerimeterOfARectangle());
console.log(computePerimeterOfARectangle());
console.log(computePerimeterOfARectangle());
console.log();


console.log(' ===== 144: computeAreaOfARectangle ===== ');    
//----------------------------------------------------------------------
// Write a function called "computeAreaOfARectangle".

// Given the length and width of a rectangle, "computeAreaOfARectangle" returns its area.

// var output = computeAreaOfARectangle(4, 8);
// console.log(output); // --> 32

// Starter Code :
// function computeAreaOfARectangle(length, width) {
//   // your code here
// }
var computeAreaOfARectangle = function (length, width) {

};
console.log(computeAreaOfARectangle());
console.log(computeAreaOfARectangle());
console.log(computeAreaOfARectangle());
console.log();


console.log(' ===== 145: getLengthOfWord ===== ');    
//----------------------------------------------------------------------
// Write a function called "getLengthOfWord".

// Given a word, "getLengthOfWord" returns the length of the given word.

// var output = getLengthOfWord('some');
// console.log(output); // --> 4

// Starter Code :
// function getLengthOfWord(word) {
//   // your code here
// }
var getLengthOfWord = function (word) {

};
console.log(getLengthOfWord());
console.log(getLengthOfWord());
console.log(getLengthOfWord());
console.log();


console.log(' ===== 146: square ===== ');    
//----------------------------------------------------------------------
// Write a function called "getLengthOfWord".

// Given a word, "getLengthOfWord" returns the length of the given word.

// var output = getLengthOfWord('some');
// console.log(output); // --> 4

// Starter Code :
// function getLengthOfWord(word) {
//   // your code here
// }
var getLengthOfWord = function (word) {

};
console.log(getLengthOfWord());
console.log(getLengthOfWord());
console.log(getLengthOfWord());
console.log();
//
//

/****************************************************************************/
console.log();
console.log(' ===== MODULE 2: READING ===== '); 
console.log();
/****************************************************************************/
// INTRODUCTION
// Reactor Prep Module 2: Writing Code Well
// Welcome to Module 2!

// This module's focus isn't just "writing code" that sorta-kinda works, it's "writing good code" that you know works.

// The Goal
// This module consists of a handful of harder problems that begin to realistically reflect the kinds of problems you are asked in admissions interviews. They also begin to reflect the kinds of problems that come up in the core immersive curriculum.

// As you solve these problems, you will learn concepts and techniques that will help you code much more cleanly and professionally.

// What to do
// 1) Read the concepts and techniques of clean coding
// Read the following short articles. The first is found in the Module 1: Reading section while the rest are under the Module 2: Reading.

// Coding styleGuide
// A practical mental model of computer memory
// Functions and reliable systems
// Your code should tell a story
// Outlining and stubs
// Testing, and the value thereof
// Test Driven Development
// 2) Begin coding. First, verify that you meet the style guide!
// Click this link to gain access to the Module 2 exercises.
// After gaining access, close the new window/tab and navigate the problems using the left side bar.
// Paid Users: At this point in the program, you will receive human feedback on your code. That's right, your code will be evaluated by staff.
// The Module 2: Exercises start with something titled Problem List. Check this page occasionally to see if any of the code we reviewed was sent back and needs you to make changes and re-submit. Here is a short video explaining the workflow for problems in Module 2 that need resubmission.

// Start solving problems! Make sure to start with these four:
// [evaluation 00] - get tests to pass
// [evaluation 01] - get tests to pass
// [testing 01]
// Self assessment based on reference answers (Free/Paid Users)
// submit your code for review (Paid Users)
// [skeleton 00]
// Self assessment based on reference answers (Free/Paid Users)
// submit your code for review (Paid Users)
// Paid Users: This is a great point to schedule a Study Plan Check-In with your mentor. Just reach out on your private channel.
// Notes for Paid Users:

// A large amount of the feedback we give on first submissions have to do with the use of indentation, spacing, semicolons, and variable naming -- all things that are explicitly explained in the Coding styleGuide. It may seem like we're nitpicking but it is extremely important practice for you to follow the styleGuide. Not doing so during a technical interview can often lead to lots of small bad things happening, none of which are fatal in themselves, but which add up to a slow and unproductive interview performance. We will point out when we see these mistakes. We will not tell you which line you need to fix -- the entire point is to coach you so that you are writing and reviewing your code with a careful, meticulous eye.
// Once you have completed these four problems, and received confirmation that your code follows the style guide, you may tackle the remaining exercises in any order.
// Just like in the earlier modules, you need to make the tests pass for some of the problems.
// For the most part, your submissions must pass human code review.
// Any submission that doesn't pass review will be sent back to you for revision.
// Don't worry, a moderate amount of back-and-forth between a code submitter and a code reviewer is perfectly normal. Even when you are in out in industry working as a professional programmer, you will find that this is how we all work together to keep code quality high.
// Sample Answer Structures
// Testing
// function assertTrue(actual, testName) {
//   if (actual === true) {
//     console.log('passed');
//   } else {
//     console.log('FAILED [' + testName + '] Expected "true", but got "' + actual  + '"');
//   }
// }
// var isValid = true;
// assertTrue(isValid, 'should pass when input is true');
// Please take careful note of the spacing, indentation, and order of the code. Listed at the top is the assertion function you have been asked to create. This is followed by any variables or additional functions that you will need in your tests, followed finally by a call to your unit test that wraps the assertion.

// See the "Terminology note: Assertions are not unit tests!" section of the Testing article which is found under Module 2: Content.

// Skeleton and Problems
// function sum(numbers) {
//   // your code here
// }
// function average(numbers) {
//   // your code here
// }
// function assertEqual(actual, expected, testName) {
//   // this can be any of the assertion functions from this module:
//   // assertEqual, assertArraysEqual, assertObjectsEqual, or assertWithinRange
//   // feel free to write and use multiple assertion functions if necessary
// }
// var expectedAverage = average([1, 2, 3, 4, 5]);
// var actualAverage = 3;
// assertEqual(actualAverage, expectedAverage, 'should calculate the average of an array of numbers');
// Please take note of the structure of this code.

// The code that implements the problem description is at the top.
// Then assertion helpers such as areArraysEqual would come next.
// You then write your unit tests last.
// Each unit test is a block of code that sets up any variables needed to run your test, followed by a call to the relevant assertion helper function.

// Each unit test only tests one thing, ideally.

// See the "How Do I Write Unit Tests" section of the Testing article which is found under Module 2: Content.

// Your final answers should be consistent in their vertical and horizontal spacing, as described in the style guide, indentation should always be 2 spaces, and there should be no stray comments left in your code.

// Things to keep in mind
// You will need to complete 100% of these Module 2 assignments.
// Problems do not need to completed in any order.
// If you want to talk about your problem, reach out to the community in the #mod2_write_code_well channel
// If you are pretty sure that a test or a problem is broken, please feel free to let us know in Slack, via the #mod2_write_code_well channel.
// FAQ
// Am I allowed to "Submit Anyway" if I am stuck?
// No, do not submit code that doesn't even pass the automated tests. The real challenge in this module is after you get the automated tests working -- making the code really clean.

// You'll be able to do this. Just stick with it. Reach out on Slack if you find yourself spinning your wheels too much.

// Is this "open book"?
// Yes, you can look up JavaScript syntax. For this purpose, we strongly recommend staying on the Mozilla Developer Network site, which has very reliable information, and not wandering randomly around the entire Internet.

// What happens if I'm really struggling on multiple problems?
// Reach out on Slack, via the #mod2_write_code_well channel, and let's examine your situation. **Paid Users:** You may also reach out to us on your private, dedicated support channel.

// MEMORY
// A practical mental model of computer memory
// memory is like a big suburb full of houses with addresses, and a variable is an easy-to-remember/easy-to-read label like Susie Derkins's house, which translates to 220 Hastings St, Cincinnati, OH 45219. The value is whatever's in the house.

// You can have more than one label for a house.

// You can say The biggest green Victorian in Cincinnati and still mean 220 Hastings St, Cincinnati, OH 45219 which still uniquely identifies the same actual house, which still contains whatever it contains.

// Aka, two variables (labels) can point at the same memory address, which contains whatever it contains.

// If that house contains a scalar value like a number, string, etc., then when you send a messenger over to pick up a package from there, you just get that one thing back.

// If that house contains an object value like an Array or an Object, then when you send a messenger over to pick up a package from there, you get a box back. You have to open that box to get at what's inside -- the usable values.

// There might be other boxes inside that first box you get back (2-dimensional arrays, objects with properties that point at other objects) ...

// But those boxes (Arrays and Objects) ultimately are useless without eventually getting scalar values like numbers and strings.

// Related example: even if Amazon ships you a big box that has a variety of other boxes in it, in the end you need to open them all up to get at the hairbrush, toothbrush, and mouthwash you ordered -- the specific nouns that matter to you.

// Those nouns will inevitably be numbers, strings, and whatnot. A box full of boxes isn't too useful without those fundamental/simplest nouns.

// That's it.

// That's why [1,2,3] === [1,2,3] evaluates to false <-- Hey, they even look like boxes...

// FUNCTIONS AND RELIABLE SYSTEMS
// As a programmer, your job is to make reliable systems.

// What is a system?
// A system is "a set of interconnected COMPONENTS that form a complex whole".

// What are the components of a small, well-built program?

// The single most-useful COMPONENT for you, as a beginning programmer, is a FUNCTION.

// Components are ideally:

// Completely reliable
// Easy to understand
// Easy to re-use
// Easy to connect with other components
// Well-written functions satisfy the above criteria.

// What is a function?
// Functions map INPUT to OUTPUT.

// This is a programming function:

// 1│ function square(x) {
// 2│   return x * x;
// 3│ }
// This function maps all valid values of x to their squared values.

// However this is also a programming function:

// 1│ function square(x) {
// 2│   console.log(x * x);
// 3│ }
// This function does nothing at all, from the perspective of the caller. There is no return value (it returns undefined, by default). Instead, there is a side effect -- a value is printed to the console, unbeknownst to the caller.

// That's actually not great, because it makes the system more mysterious, less predictable.

// Let's look at the world of mathematical functions. Programming functions derive directly from mathematical functions, and looking at them briefly can help us write better programs.

// What's a mathematical function?
// A mathematical function maps a "domain" to a "range". It just means mapping one set of values to another set of values.

// For this function...


// ... the mapping looks like this


// Here are some important characteristics to note about mathematical functions that make them useful to consider when writing programming functions.

// Mathematical functions are RELIABLE
// Given some INPUT, a valid mathematical function will only map to one OUTPUT.

// No matter how many times you supply that input, a given function will keep producing the same output.

// That makes the function reliable and easy to reason about.

// Mathematical functions are SELF-CONTAINED
// Math functions only accept INPUT.

// There is no concept of GLOBAL STATE. They do not refer to values other than the input.

// This aspect of being self-contained means that they are tidy, predictable black boxes. A change in some value outside of the function will not have an impact on the working of the function.

// Mathematical functions have no SIDE EFFECTS
// Math functions only evaluate to their OUTPUT.

// Again there is no concept of GLOBAL STATE. They do not affect values outside themselves.

// This aspect of having no side effects means that they are tidy, predictable black boxes The workings of the function will not randomly impact values outside the function.

// Mathematical functions DO ONE THING
// Because math functions are self-contained and have no side effects, they can be understood as doing only one thing. They map INPUT to OUTPUT in some predetermined, completely reliable way. The nature and purpose of that mapping might be quite complex, but the function only performs that mapping.

// How this applies to programming
// The features described above regarding mathematical functions are very useful in the programming world.

// Composing a system from programming functions that are written to behave similarly to mathematical functions means it is a lot easier to reason about that system.

// There will be fewer bugs.
// It will be easier to debug the problems that do arise.
// It will be easier to understand and explain the system to others.
// It will be easier to safely extend it with new functionality.
// This is true even in small programs
// Bugs, confusion, and difficulty of extension all happen even in small programs.

// Decomposing your problem solution into a system of small, well-named, single-purpose functions with no side effects will reap benefits even at a small scale.

// CLEAN VERSUS UNCLEAN CODING
// Your code should tell a story.
// Clean code tells the code reader a story about what it is doing.

// It is self-describing and transparent.

// To illustrate this, let's look at a bad example and turn it into a good example.

// Example of unclean vs clean coding
// Let's take a look at a typical beginning programmer's approach to a specific problem.

// Then we will consider what's wrong with it, and how it could be improved.

// The problem statement
//  1│ var inventory = [
//  2│   {
//  3│     name: 'Brunello Cucinelli',
//  4│     shoes: [
//  5│       {name: 'tasselled black low-top lace-up', price: 1000},
//  6│       {name: 'tasselled green low-top lace-up', price: 1100},
//  7│       {name: 'plain beige suede moccasin', price: 950},
//  8│       {name: 'plain olive suede moccasin', price: 1050}
//  9│     ]
// 10│   },
// 11│   {
// 12│     name: 'Gucci',
// 13│     shoes: [
// 14│       {name: 'red leather laced sneakers', price: 800},
// 15│       {name: 'black leather laced sneakers', price: 900}
// 16│     ]
// 17│   }
// 18│ ];
// Now output the average cost of all shoes per designer in this format:

//  1│ var expected = {
//  2│   'designers': [
//  3│     {
//  4│       'name': 'Brunello Cucinelli',
//  5│       'averagePrice': 1025
//  6│     },
//  7│     {
//  8│       'name': 'Gucci',
//  9│       'averagePrice': 850
// 10│     }
// 11│   ]
// 12│ };
// The beginning programmer's solution
// Given the above problem statement, this is a real example of code produced by a beginning programmer:



// What's wrong with this solution?
// Simply put, the above solution is hard to read.

// There is too much going on in the function body. It would be a lot easier to understand if we factored out a couple of helper functions that each did only one small thing.

// Upon seeing the above code, some refactoring like this is what comes to a seasoned programmer's mind:



// A complete, cleaner solution
// Let's take the basic idea in the sketch above, and flesh it out into a complete solution. We won't retain the exact names, but we'll retain the basic idea.



// Why is this better?
// Your code should tell a STORY.

// A story has a BEGINNING, a MIDDLE, and an END.

// A story FLOWS smoothly.

// In a good story, it is easy to keep track of what's going on at any given moment (the CURRENT STATE).

// Here's a visualization that illustrates the "story" flow being told by the code above:



// Ok, but how do I get the code to tell a story, exactly?
// Assemble your solution from small, single-purpose functions that have no side effects.
// Aim for a simple, clear flow of data from small function to small function.
// Think in terms of inputs and outputs at every level of your system. Each small function transforms its input into an output.
// Use precise, self-describing names for your functions and variables.
// Functions in particular should be named "verbObject", like renderList or calculateAverage. This emphasizes the transformation of input into output.

//OUTLINING AND STUBS
// Outlining and stubs
// One of the biggest problem-solving anti-patterns for programmers is to just dive into coding without a plan.

// One of the most effective ways to plan a program is to judiciously use two techniques: outlining and stubbing.

// Outlining your strategy
// The essence of your program is your STRATEGY for CONVERTING the INPUT into the OUTPUT.

// If you design that strategy well, you set yourself up to implement the raw code much more straightforwardly. It doesn't matter how solid your JavaScript knowledge is, if only have a muddled, vague strategy for converting your expected input into your required output, then you'll confuse yourself quickly. You will have to rewrite your code over and over as you struggle to clarify what you're really doing.

// Outlining your strategy in plain but precise English makes it easier to evaluate your strategy on its actual merits. Whereas if you go straight to raw code, you run a high risk of immediately getting immersed in syntactical details and not properly evaluating what you're planning to write.

// If you keep your plan of attack at a higher level of abstraction, your written program "skeleton" will really help you keep your mind straight about what code to write next, and why.

// Note: often people refer to English-language "outlining" of a program as PSEUDOCODE. You can read about pseudocode here. If you hear the term "pseudocode", just think of it as referring to the style of outlining-and-stubbing that you are learning in this article.

// Outlining example
// To illustrate outlining your program, let's first look at a sub-par example of outlining, then convert it to a good example of outlining.

// Given this problem statement:

// 1│ Write a function called "findFirstWordWithMostRepeatedChars" that accepts a string. As its long but self-descriptive name suggests, it returns the first word in a given string with the most repeated characters.
// 2│
// 3│ "Words" are understood to be space-delimited.
// So-so example of outlining
// Here's a not-very-actionable example of an English outline of a solution to the above problem.

// 1│ // 1) Break up phrase into individual words.
// 2│ // 2) Break up individual words into individual letters.
// 3│ // 3) Return the word that has the highest count for a single letter.
// Why is it only so-so? It's because step (3) is too vague to actually do much with.

// If you handed the above outline to another programmer, they would have a hard time understanding what you were asking them to do, exactly.

// A better example of outlining
// 1│ // Break input text into words, splitting on spaces.
// 2│ // For each word...
// 3│     // find the max repeat count in that word by adding every character into a hash-bucket
// 4│     //  If that max repeat count is higher than the overall max repeat count, then
// 5│     //    keep track of the word with the max repeat count
// Why is this example better? Because it offers two more-specific details:

// how we find the max repeat count in a single word (by counting characters in a hashtable)
// the fact that we keep track of the word with the max repeat count as we go
// Stubbing
// We can do even better, though.

// There's a complementary outlining technique called "stubbing". A "stub" function is a function that has been defined in code but its implementation is intentionally missing. It's a kind of placeholder. It helps to sketch out the "skeleton" of intent even further, and more precisely, without committing to a full implementation yet.

// Let's illustrate this idea by extending the above outlining example to include a stubbing aspect:

//  1│ function findMaxRepeatCountInWord(word) {
//  2│   // Break up individual words into individual letters.
//  3│   // Count the instances of each letter
//  4│   // Iterate all the counts and find the highest
//  5│   // Return this word's max repeat count
//  6│ }
//  7│
//  8│ function findFirstWordWithMostRepeatedChars(text) {
//  9│   var maxRepeatCountOverall = 0;
// 10│   var wordWithMaxRepeatCount = '';
// 11│
// 12│   // Break up input text into words (space-delimited).
// 13│   // For each word...
// 14│       var repeatCountForWord = findMaxRepeatCountInWord(word)
// 15│       //  If that max repeat count is higher than the overall max repeat count, then
// 16│       //    update maxRepeatCountOverall
// 17│       //    update wordWithMaxRepeatCount
// 18│
// 19│   return wordWithMaxRepeatCount;
// 20│ }
// Things to note about this outline
// This outline mixes stubbed-out variables and functions along with English-language commentary about the intended approach.

// A couple of key variables have been written directly as clearly-named code, rather than describing them in English.
// Similarly, some clearly-named functions have been written as code, not English.
// Each function declares its parameters. The parameters themselves have clear names too, just like the other variables.
// Each function has some English description of how that function processes its input into output. This isn't exactly pseudo-code, it's more of a bullet-point outline of intent.
// The return value of each function is explicitly declared.
// This style of mixed stubs and English SAVES TIME. This style succinctly conveys your intended approach and minimizes the amount of re-typing you will have to do to convert your outline into working code.

// That efficiency gain is especially important when you are performing under the time constraints of a live interview.

// TESTING 
// Testing, and the value thereof
// Mathematics is the rigor of most engineering disciplines. Structural engineers, mechanical engineers, aerospace engineers all make copious use of calculus, differential equations, linear algebra and so forth. They don't just "throw stuff together".

// By contrast, although computer science itself has deep roots in mathematics, the actual act of software engineering rarely makes direct use of math in the same way that other engineering disciplines do.

// That given, how do programmers ensure that the systems they build are sound? Typically there aren't a lot of calculations before a programmer builds a sub-system.

// The primary practical answer for most kinds of software development is...

// Testing is the engineering rigor of software engineering.
// When we say "testing" here, we do NOT mean manual testing where a person clicks around and drives the program's user interface with their own mouse and keyboard.

// We are talking about AUTOMATED TESTS, in particular the style called a UNIT TEST.

// An automated test, as the name suggests, runs automatically.

// The point of an automated test is to capture the manual steps and human discernment that would be applied by a human tester and run them at high speed and with perfect fidelity over and over.

// In a modern, professionally-built software system, there are typically hundreds or thousands of tests that run routinely, whenever someone checks in their code to the source code management system (nowadays, often Github).

// What's a "unit test"?
// A reliable system is composed of reliable components. A Lego block doesn't suddenly change shape on you. It maintains a clear and unchanging interface. You can rely on that interface as you snap that Lego block together with other Lego blocks, and thereby build up a very complex block structure.

// The components of your program need to behave similarly to Lego blocks. If they honor their contracts with each other, then you can build up a very complex software system with them. If they don't, however, then everything will turn into an unmaintainable mess.

// How do you know that each component in your software system (your program) is honoring its interface properly?

// That's what unit tests do. Each "unit" is a component of your system. It's a Lego block.

// For our purposes here, the most fundamental UNIT in your programs right now is a FUNCTION.

// When should I unit test?
// You should be unit-testing any non-trivial functions in your programs. You may have to bend this rule somewhat in order to meet time constraints in a programming interview context, but on the whole it is a dangerous practice to avoid testing. You are just as likely to end up burning more time than you save by not testing, because when you drive at high speed without guardrails, it's easy to plunge off a cliff into debugging hell.

// It is extremely easy to confuse ourselves with accidental complexity as we write programs. Testing each component as we go helps to ensure that we keep track of what we are building.

// A warning sign that you should be testing
// If you ever find yourself sprinkling console.log statements all over the place to figure out what on earth your program is doing anymore, you probably could have used some small tests to verify things better as you go.

// Assertions
// Unit testing is built around the concept of ASSERTIONS.

// Programmers ASSERT that such-and-such is TRUE about the unit under consideration.

// Let's take a small, real example:

// 1│ function square(x) {
// 2│   return x * x;
// 3│ }
// A very simple assertion would look like this:

// 1│ console.log(square(5) === 25);
// If square is given the input 5 and returns the output 25, then this will print true.
// However if square is given the input 5 and returns the output 125, then this will print false.
// Test frameworks
// It's not a problem to write small assertions about your code in this informal manner, via console.log, when you are first starting out. It's a lot better than not exercising your code at all, and having to debug a bunch of code when you finally do run your program.

// However, professional programmers use a testing framework that formalizes the concept of assertion, and provides well-formatted test output so you can quickly see where problems have arisen in your code.

// A typical such assertion might look like this:

// 1│ var output = square(5);
// 2│ expect(output).to.equal(25);
// Right now, you don't need to worry about using a fully-featured testing framework.

// However, even early in your journey to becoming a professional programmer, there is some value to being able to write an assertion a little more formally than just sprinkling console.log into your code. You can make a simple assertion helper function yourself trivially, something like this:

// 1│ function assertEqual(actual, expected, testName) {
// 2│   if (actual === expected) {
// 3│     console.log('passed');
// 4│   } else {
// 5│     console.log('FAILED ' + testName + ': Expected ' + expected + ', but got ' + actual);
// 6│   }
// 7│ }
// Then you can call that instead of console.log directly, inside of each of your tests.

// Terminology note: Assertions are not unit tests!
// An assertion is a statement that something is true or false about the behavior of your program.

// However, in order to be able to make an assertion, you usually have some setup to do.

// You prepare some input, and an expected output. If there are classes involved then you usually have to instantiate an instance of that class. You may have other context to set up before you can make the assertion -- let's say you're asserting something about step #3 of a 4-step flow. Then you have to run through steps 1 and 2 to prepare to evaluate the result of running step 3.

// All that setup, outside of the assertion itself, is still part of your test.

// That's why we're being careful here to distinguish assertions from the unit tests around those assertions!



// How do I decide what to test?
// Here is a fuller set of assertions we might make about the square function:

// Given -5 as input, it should return 25 as output.
// Given 0 as input, it should return 0 as output.
// Given 5 as input, it should return 25 as output.
// Given 0.25 as input, it should return 0.0625 as output.
// This seems like a natural set of tests. Why do they seem like a reasonable set of tests, though? They didn't come out of nowhere, of course. To clarify that decision-making process, let's look at the premises that we have about squaring that underlie this choice of tests:

// Negative numbers become positive when squared.
// 0 squared is 0.
// A number squared is that number times itself.
// A fractional number becomes smaller when squared, because a fraction of a fraction is smaller.
// Whenever you are testing one of your functions, you want to similarly apply CATEGORICAL REASONING to identify test cases that sufficiently explore the full contract of the code under test.

// Note: Your tests go outside the code that you're testing
// You should never put your test inside the code that you are testing (aka "the code under test").

// Your tests should treat each function as a "black box".

// They supply inputs and assert expectations about the resulting outputs.

// Bad:

// 1│ function decorateClassListWithAges(classList) {
// 2│   var classListWithAges = classList.map(function(student) {
// 3│     return {'name': student, 'age': getRandomIntInclusive(10, 15)}
// 4│   });
// 5│   var checkAge = assertRange(classListWithAges[0].age, 10, 15,
// 6│     'check age is between 10 and 15');
// 7│   return classListWithAges;
// 8│ };
// How do I write unit tests?
// There are a few different styles you can use in this phase of your learning, and in an interview context (later, as you head towards full-on professional programming, you will learn more).

// "Inline console logs", no assert helpers style
// You can just drop a direct console.log statement if you are really pressed for time. No assertEquals type of helper functions, just raw logging.

// This is not as tidy as using a formal assert function, but will do in a pinch.

// This is the most verbose and repetitive and can rapidly get really messy! So, beware. BUT if you have a very small program and very simple assertions, you can use this judiciously to make rapid progress and keep moving.

// 1│ function decorateClassListWithAges(classList) {
// 2│   // some implementation here
// 3│ }
// 4│
// 5│ // TESTS
// 6│ var classListWithAges = decorateClassListWithAges(classList);
// 7│ var output = classListWithAges[0].age;
// 8│ var isValid = output >= 10 && output = 15;
// 9│ console.log('check age of first student is between 10 and 15: ' + isValid);
// "Named test functions" style
// If you want to be extra-tidy, make a distinct, named test function for each test.

// This is very clean and professional, but you need to type fast to make this work well in an interview context :) Please, please go for it though if you can make it work!

//  1│ function decorateClassListWithAges(classList) {
//  2│   // some implementation here
//  3│ }
//  4│
//  5│ function testDecoratesFirstStudentWithValidAge() {
//  6│   var classListWithAges = decorateClassListWithAges(classList);
//  7│   var checkAge = assertRange(classListWithAges[0].age, 10, 15, 'check age is between 10 and 15');
//  8│ }
//  9│ 
// 10│ // Execute your test suite
// 11│ testDecoratesFirstStudentWithValidAge(); // <-- the test we wrote above
// 12│ testSomethingElse();
// 13│ testYetAnotherThing(); // etc
// "Inline but with assertion helpers" style
// This is a compromise between the above two styles. The tests themselves do not have function wrappers, but you save some repetition by leveraging assertion helpers like areArraysEqual or whatever you need.

// Like dropping console.log statements, this too can quickly get a little bit messy, so be careful. That said, you also save quite a bit of typing, and in an interview context, time is of the essence.

// 1│ function decorateClassListWithAges(classList) {
// 2│   // some implementation here
// 3│ }
// 4│
// 5│ // TESTS
// 6│ var classListWithAges = decorateClassListWithAges(classList);
// 7│ var checkAge = assertRange(classListWithAges[0].age, 10, 15, 'check age of first student is between 10 and 15');
// Naming Tests
// When it comes to naming your unit tests, someone should be able to look at the name of your test and immediately be able to ascertain what the test actually tests.

// With a properly named series of tests, it is easy for you, and other programmers, to determine that you have tested all that requires testing.

// No two tests should have the same name. Otherwise, they'd be the same test, right?
// Don't just name your test after the function that it is testing. Otherwise how can you have two tests of the same function? They'd have the same name. (see above) What are you testing about that function?
// Don't use the name of the function at all in your test name.
// Good:

// 1│ assertEqual(findLongestPalindrome('racecar hannah'), 'racecar', 'finds longest of two palindromes');
// Note that one can easily determine what this test does by prefixing the name of the test with it; making the sentence that describes the test read as: "It (i.e., the function being tested) finds the longest of two palindromes."

// You can explicitly say "it" in your test name, if you want:

// 1│ ... 'it finds longest of two palindromes');
// You can also use the word "should" if that feels really natural to you. Most assertion frameworks force you to use the "it" style above, though.

// Okay:

// 1│ ... 'should find longest of two palindromes');
// But don't stray too far from the above patterns. E.g.,

// Bad:

// 1│ ...'my test');
// Bad:

// 1│ ... 'findLongestPalindrome');
// A note on testing object equality
// We know that trying to compare two arrays, such as [1, 2, 3] === [1, 2, 3], is not going to work. That statement winds up comparing two memory addresses of two array instances, not the contents of those arrays.

// You can write a function that compares two arrays properly if you assume that their elements only contain simple values like numbers or strings (i.e., not object values like more arrays). (Simple values like that are called "scalar" values by the way.)

//  1│ function assertArraysEqual(actual, expected, testName) {
//  2│   var areEqualValues = actual.every(function(item, i) {
//  3│     return item === expected[i];
//  4│   });
//  5│   var areEqualLength = (actual.length === expected.length);
//  6│
//  7│   if (areEqualLength && areEqualValues) {
//  8│     console.log('passed');
//  9│   } else {
// 10│     console.log('FAILED [' + testName + '] Expected "' + expected + '", but got "' + actual + '"');
// 11│   }
// 12│ }
// A handy trick is to convert those arrays to strings first, then compare the strings.

// You can use a helper function called JSON.stringify() to do this. You can learn more about the JSON format if you want, but it's not necessary just to use this helper function.

// 1│ function assertObjectsEqual(actual, expected, testName) {
// 2│   actual = JSON.stringify(actual);
// 3│   expected = JSON.stringify(expected);
// 4│   if (actual === expected) {
// 5│     console.log('passed');
// 6│   } else {
// 7│     console.log('FAILED [' + testName + '] Expected ' + expected + ', but got ' + actual);
// 8│   }
// 9│ }
// HOWEVER this isn't completely reliable in all cases where you might want to compare two objects, because the keys in an object can be the same but in a different order. Key order shouldn't matter for comparing equality, but stringify() will consider them to be different, giving a false negative (thinking two objects don't match when really they do).

// 1│ JSON.stringify({foo: 1, bar: 2})
// 2│ "{"foo":1,"bar":2}"
// 3│ JSON.stringify({bar: 1, foo: 2})
// 4│ "{"bar":1,"foo":2}"
// That said, a full implementation of "deep equality" check is way out of scope of this course.

// You can glance here at a real, complete implementation, if you are curious:https://github.com/substack/node-deep-equal/blob/master/index.js.

// In a unit test during a technical interview, you completely control the "expected" value that you are comparing against. Therefore in practice it isn't a big deal to use JSON.stringify to do a quick comparison during an interview. Be prepared to justify to your interviewer why it's safe for your intended use, despite being unsafe for general comparisons in production code.

// TDD 
// Overview
// TDD stands for "test-driven development".

// Specifically, it means to write your tests before you write your code.

// Pros
// People commonly think of tests as being written in order to catch bugs. This is true.

// However the way that tests catch bugs is a bit counter-intuitive. Many people imagine that the tests are run and then the bugs are caught.

// What actually happens more often is the act of thinking through your code in order to create meaningful tests itself creates substantially higher-quality code that has fewer bugs to begin with. Designing your code to be testable has a similar positive effect.

// TDD forces you to think through your code more thoroughly than just diving in and implementing. It encourages you to think in terms of the "contract" of the module that is about to be written.

// Cons
// TDD is counter-intuitive to the way that many developers naturally think and work. Software is more malleable than, say, constructing a house. Many (very likely most, although I have no data on that) developers like to get a little something working, then write a test for it.

// In a similar vein, sometimes the design is not clear early on, and some rapid prototyping is helpful to sketch out the outline of an approach. In such cases, writing a lot of tests very early on can feel wasteful, because there's a high likelihood of throwing away some or all of those tests as the design evolves.

// That leads to the largest perceived con, which is that writing tests up front slows you down. This is arguable of course since proponents will point to the overall time savings from avoiding pitfalls, but nonetheless is a widely-held view.

// Popularity
// Because of the aforementioned cons, pure TDD is less common. However it is completely standard practice to write automated tests for your code, usually very close in time to when the code is written.

// For example, solid development teams often have a fairly strict policy of refusing to merge pull requests that don't include tests, unless the change is "trivial" (only translation strings, say).

// Should I use it?
// You should try it! Pure TDD is a bit mind-bending (in a similar vein to trying a pure functional programming language like Haskell). Even if you fall back to the more-common "write tests at about the same time as writing the code" mode, imposing a hard requirement of careful and detailed forethought about the contract of the code you are about to write is an intriguing experience.
//
//

console.log(' ===== MODULE 2: EXERCISES ===== '); 
console.log();
/****************************************************************************/

console.log(' ===== [evaluation 00] Scalar value assignments ===== ');    
//----------------------------------------------------------------------
// Evaluate each line below as though YOU were the interpreter.

// var x = 7;
// var y = 8;
// var z = 9;

// x = y + z;
// z = x;
// x = y;
// z = x + y;
// y = z - x;
// z = y;
// x = y * z;
// z = y / z;
// x = (z - x) / (y + z);

// What is the final value of x? Set the property in the "answer" object accordingly!

// IMPORTANT: **DO NOT** just type this out manually then paste it into a terminal so the computer does the work for you.  That won't help you learn!! 

// Keep track of things in your mind.

// In your mind...

// In your miiiiiiinnnnnnd...

// Starter Code :
// var answer = {
//   finalValueOfX: null // fill this in with your MENTALLY evaluated answer.
// };
var aa = function () {

};
console.log();
console.log();


console.log(' ===== [evaluation 01] Array assignment ===== ');    
//----------------------------------------------------------------------
// Evaluate each line below as though YOU were the interpreter.

// var x = [1, 2, 3];
// var y = [4, 5, 6];
// var z = x;

// z[2] = y[0];
// z[1] = y[2];
// y[1] = z[1];
// x[0] = y[0];
// x[2] = 1;

// What are the final values of x, y, and z?

// IMPORTANT: DO NOT just rewrite this code and run it in a terminal.
// There is ZERO POINT to that, you'd just be cheating yourself.
// Having the computer keep track of the variable assignments for you does not help you learn!!!

// Starter Code :
// var answer = {
//   finalValueOfX: null, // FILL THIS IN
//   finalValueOfY: null, // FILL THIS IN
//   finalValueOfZ: null, // FILL THIS IN
// };
var aa = function () {

};
console.log();
console.log();


console.log(' ===== [testing 01] writing "assertEqual" ===== ');    
//----------------------------------------------------------------------
// Write an assertEqual function from scratch.

// It should compare actual and expected values with strict equality (not typecasting).

// Examples

// SUCCESS CASE

// function multiplyByTwo(n) {
//   return n * 2;
// }
// var output = multiplyByTwo(2); // returns 4
// assertEqual(output, 4, 'it doubles 2 to 4');
// // console output:
// // passed

// FAILURE CASE

// function multiplyByTwo(n) {
//   return (n * 2) + 1; // an incorrect implementation
// }
// var output = multiplyByTwo(2); // returns 5
// assertEqual(output, 4, 'it doubles 2 to 4');
// // console output:
// // FAILED [it doubles 2 to 4] Expected "4", but got "5"

// Starter Code :
// function assertEqual(actual, expected, testName) {
//   // your code here
// }
var aa = function () {

};
console.log();
console.log();


console.log(' ===== [testing 02] writing "assertArraysEqual" ===== ');    
//----------------------------------------------------------------------
// Write an "assertArraysEqual" function from scratch.

// Assume that the arrays in question contain only scalar values (i.e., simple values like strings or numbers).

// Do not use JSON.stringify(), Array.join(), or any other "convert the array to a string so I can compare two strings" type of technique to implement this.

// Examples

// SUCCESS CASE
// var expected = ['b', 'r', 'o', 'k', 'e', 'n'];
// var actual = 'broken'.split('');
// assertArraysEqual(actual, expected, 'splits string into array of characters');
// // console output:
// // passed

// FAILURE CASE
// var expected = [1, 1, 2, 3, 5, 8, 13];
// var actual = generateFirstNFibonaccis(7);
// assertArraysEqual(actual, expected, 'generates first 7 Fibonacci numbers');
// // console output:
// // FAILED [generates first 7 Fibonacci numbers] Expected "1, 1, 2, 3, 5, 8, 13", but got "2, 3, 5, 8, 13, 21, 34"

// Starter Code :
// function assertArraysEqual(actual, expected, testName) {
//   // your code here
// }
var aa = function () {

};
console.log();
console.log();


console.log(' ===== [testing 03] writing "assertObjectsEqual" ===== ');    
//----------------------------------------------------------------------
// Write an "assertObjectsEqual" function from scratch.

// Assume that the objects in question contain only scalar values (i.e., simple values like strings or numbers).

// It is OK to use JSON.stringify().

// Note: The examples below represent different use cases for the same test. In practice, you should never have multiple tests with the same name.

// Examples

// SUCCESS CASE

// var expected = {foo: 5, bar: 6};
// var actual = {foo: 5, bar: 6}
// assertObjectsEqual(actual, expected, 'detects that two objects are equal');
// // console output:
// // passed

// FAILURE CASE

// var expected = {foo: 6, bar: 5};
// var actual = {foo: 5, bar: 6}
// assertObjectsEqual(actual, expected, 'detects that two objects are equal');
// // console output:
// // FAILED [my test] Expected {"foo":6,"bar":5}, but got {"foo":5,"bar":6}

// Starter Code :
// function assertObjectsEqual(actual, expected, testName) {
//   // your code here
// }
var aa = function () {

};
console.log();
console.log();


console.log(' ===== [testing 04] writing "assertWithinRange" ===== ');    
//----------------------------------------------------------------------
// Write an "assertWithinRange" function from scratch.

// The idea here is similar to when someone says, "Give me a number between 1 and 5". 
// You usually think the possible answers are "1, 2, 3, 4, or 5".  I.e., you usually don't interpret the options as being "2, 3, or 4".  

// Notes:
// * Assume that the "actual" and "expected" arguments are always numbers (e.g., not booleans or other types that don't make sense in the context of examining a "range".)

// Examples

// SUCCESS CASE IN ACTUAL USE

// var blackjackScore = 20;
// assertWithinRange(4, 21, blackjackScore, 'blackjack score should be between 4 and 21');
// // console output:
// // passed

// SUCCESS CASE IN ACTUAL USE

// var dieRoll = 1;
// assertWithinRange(1, 6, dieRoll, 'die roll should be between 1 and 6');
// // console output:
// // passed

// FAILURE CASE IN ACTUAL USE

// var price = 101;
// assertWithinRange(1, 100, price, 'price should be between 1 and 100');
// // console output:
// // FAIL [price should be between 1 and 100] "101" not within range 1 to 100

// Starter Code :
// function assertWithinRange(low, high, actual, testName) {
//   // your code here
// }

var aa = function () {

};
console.log();
console.log();


console.log(' ===== [testing 05] applying "assertEqual" #1 ===== ');    
//----------------------------------------------------------------------
// Write an "assertEqual" function from scratch, from memory.

// Please DO NOT simply PASTE in from before.

// If you have to go back and look at your previously-implemented code once, fine, but come back here and write it from memory.

// Then use your assertion function in a series of test cases to thoroughly test the code.

// Use categorical reasoning to consider all the useful cases.

// Debug the code under test, if necessary.

// Starter Code :
// var squaredN = n * n;
// function square(n) {
//   return squaredN;
// }

// function assertEqual(actual, expected, testName) {
//   // your code here
// }
var aa = function () {

};
console.log();
console.log();


console.log(' ===== [testing 06] apply "assertEqual" #2 ===== ');    
//----------------------------------------------------------------------
// Write an "assertEqual" function from scratch, from memory.

// Please DO NOT simply PASTE in from before.

// If you have to go back and look at your previously-implemented code once, fine, but come back here and write it from memory.

// Then use your assertion function to thoroughly test the code.

// Use categorical reasoning to consider all the useful cases.

// Debug the code under test, if necessary.

// Starter Code :
// // Note: This is a simple implementation of the standard Array method "every()":
// // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/every
// function every(array, callbackFunction) {
//   var doesEveryElementMatch = true;
//   array.forEach(function(element) {
//     doesEveryElementMatch = callbackFunction(element);
//   });
//   return doesEveryElementMatch;
// }

// function assertEqual(actual, expected, testName) {
//   // your code here
// }
var aa = function () {

};
console.log();
console.log();


console.log(' ===== [testing 07] apply "assertArraysEqual" ===== ');    
//----------------------------------------------------------------------
// Write an "assertArraysEqual" function from scratch, from memory.

// Please DO NOT simply PASTE in from before.

// If you have to go back and look at your previously-implemented code once, fine, but come back here and write it from memory.

// Then use your assertion function to thoroughly test BOTH the functions in the provided code.

// Use categorical reasoning to consider all the useful cases.

// Debug the code under test, if necessary.

// Starter Code :
// function map(array, callbackFunction) {
//   var newArray = [];
//   array.forEach(function(element) {
//     newArray = newArray + callbackFunction(element);
//   });
//   return newArray;
// }

// function cubeAll(numbers) {
//   return map(numbers, function(n) {
//     return n * n;
//   });
// }

// function assertArraysEqual(actual, expected, testName) {
//   // your code here
// }
var aa = function () {

};
console.log();
console.log();


console.log(' ===== [testing 08] apply "assertObjectsEqual" ===== ');    
//----------------------------------------------------------------------
// Write an "assertObjectsEqual" function from scratch, from memory.

// Please DO NOT simply PASTE in from before.

// If you have to go back and look at your previously-implemented code once, fine, but come back here and write it from memory.

// Then use your assertion function to thoroughly test the function provided.

// Use categorical reasoning to consider all the useful cases.

// Debug the code under test, if necessary.

// Starter Code :
// function addFullNameProp(obj) {
//   var firstName = obj.firstName;
//   var lastName = obj[lastName];

//   if (firstName && lastName) {
//     obj['fullName'] = firstName + ' ' + lastName;
//   }

//   return obj;
// }

// function assertObjectsEqual(actual, expected, testName) {
//   // your code here
// }
var aa = function () {

};
console.log();
console.log();


console.log(' ===== [skeleton 00] average integers ===== ');    
//----------------------------------------------------------------------
// Use the skeleton provided to write a working implementation.

// Notes: 
// * Do not leave any functions in the skeleton unused.
// * Test that your implementation works.

// Specifically -- your code reviewer should be able to just press the [Run] button and see convincing evidence that your code works, because of:
// a) the categorical reasoning displayed by your tests
// b) the line(s) of output in the console log saying "passed" coming from those tests

// Starter Code :
// function average(numbers) {
//   // process array of numbers
// }

// function sum(numbers) {
// }
var aa = function () {

};
console.log();
console.log();


console.log(' ===== [skeleton 01] decorate student list with ages ===== ');    
//----------------------------------------------------------------------
// Convert from a flat class list of names to an object literal decorated with an age for each student.

// The ages should be randomly generated for each student, either age 10 or age 11.

// Example

// var classList = ["Joe", "Jack", "John", "Fred", "Frank", "Barry", "Larry", "Mary",
// "Harry", "Farrell", "Susan", "Monica", "Keira", "Caroline", "Harriet", "Erica",
// "Luann", "Cheryl", "Beth", "Rupa", "Linda", "Allison", "Nancy", "Dora"];

// var classListWithAges = [{"name":"Joe","age":11},{"name":"Jack","age":10},
// {"name":"John","age":11},{"name":"Fred","age":11},{"name":"Frank","age":11},
// {"name":"Barry","age":11},{"name":"Larry","age":11},{"name":"Mary","age":11},
// {"name":"Harry","age":11},{"name":"Farrell","age":10},{"name":"Susan","age":10},
// {"name":"Monica","age":11},{"name":"Keira","age":10},{"name":"Caroline","age":10},
// {"name":"Harriet","age":11},{"name":"Erica","age":11},{"name":"Luann","age":10},
// {"name":"Cheryl","age":11},{"name":"Beth","age":10},{"name":"Rupa","age":11},
// {"name":"Linda","age":10},{"name":"Allison","age":10},{"name":"Nancy","age":10},
// {"name":"Dora","age":10}]

// Hint for testing: Given that the age for each student is random upon each run, we suggest that your tests check for age values of EITHER 10 or 11.

// Starter Code :
// // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// function getRandomIntInclusive(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// function decorateClassListWithAges(classList) {
//   // your code here
// }
var aa = function () {

};
console.log();
console.log();


console.log(' ===== [skeleton 02] is it an isogram? ===== ');    
//----------------------------------------------------------------------
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. 

// Write and test a function that determines whether a string is an isogram. 

// Notes:
// * Assume your input is only letters.
// * Assume the empty string is an isogram. 
// * Ignore case.
// * Follow the pseudocode exactly!

// Starter Code :
// function isIsogram(text) {
//   // add each char to a set
//   // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
//   // note: a set drops dup values
//   // thus, to see if all the chars were unique,
//   // check length of text and the size of the set 
// }
var aa = function () {

};
console.log();
console.log();


console.log(' ===== [skeleton 03] read skeleton; understand problem  ===== ');    
//----------------------------------------------------------------------
// Basic instructions

// Flesh out the implementation described by this "skeleton", and test it.

// More instructions

// Implementation of WHAT, you say? What's the problem statement???

// Well, you should be able to tell what this code is intended to do just from reading the starter "skeleton".

// Assuming you find the above statement to be true upon reading the outline, well, then that illustrates the power of good outlining. You don't need a bunch of comments explaining the code. The code is effectively SELF-EXPLANATORY, even at this early, not-fully-implemented stage. This is the level of clarity that you should aim for in your own coding too.

// Some notes about this skeleton

// When you create such "skeletons" for your own programs, this is a good full-fledged sample to bear in mind.

// Note the mixture of real "stub" code and pseudocode.

// The stubs are just a few function names and a few key variable names, not whole for-loops and whatnot.

// The pseudocode style we want for this purpose is at the level of precise English. It also is not describing for-loops and whatnot. It also is only inside functions. Don't pseudocode functions, just write the functions as empty stubs. That saves you precious time later, with less rewriting.

// Starter Code :
// function findMaxRepeatCountInWord(word) {
//   // Break up individual words into individual letters.
//   // Count the instances of each letter
//   // Iterate all the counts and find the highest
//   // Return this word's max repeat count
// }

// function findFirstWordWithMostRepeatedChars(text) {
//   var maxRepeatCountOverall = 0;
//   var wordWithMaxRepeatCount = '';

//   // Break up input text into words (space-delimited).
//   // For each word...
//       var repeatCountForWord = findMaxRepeatCountInWord(word)
//       //  If that max repeat count is higher than the overall max repeat count, then
//       //    update maxRepeatCountOverall
//       //    update wordWithMaxRepeatCount
      
//   return wordWithMaxRepeatCount;
// }
var aa = function () {

};
console.log();
console.log();


console.log(' ===== [skeleton 04] render phone number ===== ');    
//----------------------------------------------------------------------
// Problem statement

// Accept an array of numbers that represent a phone number.
// E.g., [6, 5, 0, 8, 3, 5, 9, 1, 7, 2]
// Return as a string in this format: '(650) 835-9172'.

// A poor implementation

// function renderPhoneNumber(numbers){
//   return '(' + numbers[0] + numbers[1] + numbers[2] + ') '
//     + numbers[3] + numbers[4] + numbers[5] + '-' 
//     + numbers[6] + numbers[7] + numbers[8] + numbers[9];
// }

// What you should do instead


// Read the object-oriented skeleton.  After you understand the flow of processing that it sketches out, fill in the implementation.

// Notes:
// * Do not leave any methods unused.

// Starter Code :
// function PhoneNumberFormatter(numbers) {
//   this.numbers = numbers;
// }

// PhoneNumberFormatter.prototype.render = function() {
//   var string = '';
//   // your code here
//   return string;
// };

// PhoneNumberFormatter.prototype.getAreaCode = function() {
//   // your code here
// };

// PhoneNumberFormatter.prototype.getExchangeCode = function() {
//   // your code here
// };

// PhoneNumberFormatter.prototype.getLineNumber = function() {
//   // your code here
// };

// PhoneNumberFormatter.prototype.parenthesize = function(string) {
//   return '(' + string + ')';
// };

// PhoneNumberFormatter.prototype.slice = function(start, end) {
//   return this.numbers.slice(start, end).join('');
// };
var aa = function () {

};
console.log();
console.log();


console.log(' ===== [skeleton 05] find longest palindrome ===== ');    
//----------------------------------------------------------------------
// Find the longest single-word palindrome within a phrase.

// The sorting implementation required by this particular implementation strategy / outline has been provided in this case, as a convenience. Study it carefully to make sure you can create custom sort functions of your own, later.

// Notes:
// * Use all the functions in the skeleton.
// * If there are multiple longest palindromes of equal length, return the last one.
// * The phrase will only contain letters (no symbols, punctuation, or numbers).
// * Your palindrome detection should be case-insensitive.

// Starter Code :
// function findLongestPalindrome(sentence) {
//   // split sentence into words
//   // iterate words and collect the palindromes
//   // sort the list of palindromes by word length
//   // return the largest item in the sorted list
// }

// function reverseString(string) {
// }

// function isPalindrome(word) {
//   // hint: you can detect palindromes by comparing a string to its reverse
// }

// function sortAscendingByLength(a, b) {
//   if (a.length > b.length) {
//     return 1;
//   } else if (a.length < b.length) {
//     return -1;
//   }
//   return 0;
// }
var aa = function () {

};
console.log();
console.log();


console.log(' ===== [problem 01] Fashion Inventory part A ===== ');    
//----------------------------------------------------------------------
// You have a fashion catalog, an inventory of items from various high-fashion designers. 
// Each designer has a lineup of shoes. Each shoe has a name and a price.

// It looks like this:
// var currentInventory = [
//   {
//     name: 'Brunello Cucinelli',
//     shoes: [
//       {name: 'tasselled black low-top lace-up', price: 1000},
//       {name: 'tasselled green low-top lace-up', price: 1100},
//       {name: 'plain beige suede moccasin', price: 950},
//       {name: 'plain olive suede moccasin', price: 1050}
//     ]
//   },
//   {
//     name: 'Gucci',
//     shoes: [
//       {name: 'red leather laced sneakers', price: 800},
//       {name: 'black leather laced sneakers', price: 900}
//     ]
//   }
// ];

// Look up all the shoes across all the designers and list them out in a flat list:{designer name} - {shoe name} - {price}{designer name} - {shoe name} - {price}
// E.g.,
// Brunello Cucinelli, tasselled black low-top lace-up, 1000
// Brunello Cucinelli, tasselled green low-top lace-up, 1100
// ...

// Write your own unit tests.

// Starter Code :
// function renderInventory(inventory) {
//   // your code here
//   // hint: before you just dive into coding...
//   // it's a good idea to sketch out a skeleton like you've been seeing earlier in this module...
// }
var aa = function () {

};
console.log();
console.log();


console.log(' ===== [problem 02] Fashion Inventory part B ===== ');    
//----------------------------------------------------------------------
// This is a variation of the "Fashion Inventory" problem.

// Please DO NOT paste code from before, however. Tackle each problem on its own.

// It's the same inventory data structure as earlier:

// var inventory = [
//   {
//     name: 'Brunello Cucinelli',
//     shoes: [
//       {name: 'tasselled black low-top lace-up', price: 1000},
//       {name: 'tasselled green low-top lace-up', price: 1100},
//       {name: 'plain beige suede moccasin', price: 950},
//       {name: 'plain olive suede moccasin', price: 1050}
//     ]
//   },
//   {
//     name: 'Gucci',
//     shoes: [
//       {name: 'red leather laced sneakers', price: 800},
//       {name: 'black leather laced sneakers', price: 900}
//     ]
//   }
// ];

// Now output the average cost of all shoes per designer in this format:

// var expected = {
//   'designers': [
//     {
//       'name': 'Brunello Cucinelli',
//       'averagePrice': 1025
//     },
//     {
//       'name': 'Gucci',
//       'averagePrice': 850
//     }
//   ]
// };

// Write your own unit tests.

// Starter Code :
// // what's a good main function name to choose?

// // what does your outline look like?  don't just dive into coding and make a mess! :)
var aa = function () {

};
console.log();
console.log();


console.log(' ===== [problem 03] Fashion Inventory, part C ===== ');    
//----------------------------------------------------------------------
// This is a variation of the "Fashion Inventory" problem.

// Please DO NOT paste code from before, however. Tackle each problem on its own.

// It's the same inventory data structure as earlier:

// var inventory = [
//   {
//     name: 'Brunello Cucinelli',
//     shoes: [
//       {name: 'tasselled black low-top lace-up', price: 1000},
//       {name: 'tasselled green low-top lace-up', price: 1100},
//       {name: 'plain beige suede moccasin', price: 950},
//       {name: 'plain olive suede moccasin', price: 1050}
//     ]
//   },
//   {
//     name: 'Gucci',
//     shoes: [
//       {name: 'red leather laced sneakers', price: 800},
//       {name: 'black leather laced sneakers', price: 900}
//     ]
//   }
// ];

// Now find all the black shoes. It's the same output as part 1, but filtered to only shoe names that contain "black" in them.

// Brunello Cucinelli,tasselled black low-top lace-up,1000
// Gucci,black leather laced sneakers,900

// Write your own unit tests.

// Starter Code :
// // make it very clean and organized, please! :)
var aa = function () {

};
console.log();
console.log();


console.log(' ===== [problem 04] Fashion Inventory, part D ===== ');    
//----------------------------------------------------------------------
// This is a variation of the "Fashion Inventory" problem.

// Please DO NOT paste code from before, however. Tackle each problem on its own.

// It's the same inventory data structure:

// var inventory = [
//   {
//     name: 'Brunello Cucinelli',
//     shoes: [
//       {name: 'tasselled black low-top lace-up', price: 1000},
//       {name: 'tasselled green low-top lace-up', price: 1100},
//       {name: 'plain beige suede moccasin', price: 950},
//       {name: 'plain olive suede moccasin', price: 1050}
//     ]
//   },
//   {
//     name: 'Gucci',
//     shoes: [
//       {name: 'red leather laced sneakers', price: 800},
//       {name: 'black leather laced sneakers', price: 900}
//     ]
//   }
// ];

// The task now is to find all the laced shoes. Output shoe names that contain "lace" in them, and indicate which word contains "lace".

// The output format should be structured like this:

// [
//   {
//     "nameWords": [
//       "tasselled",
//       "black",
//       "low-top",
//       "lace-up"
//     ],
//     "targetWordIndex": 3
//   },
//   {
//     "nameWords": [
//       "tasselled",
//       "green",
//       "low-top",
//       "lace-up"
//     ],
//     "targetWordIndex": 3
//   },
//   {
//     "nameWords": [
//       "red",
//       "leather",
//       "laced",
//       "sneakers"
//     ],
//     "targetWordIndex": 2
//   },
//   {
//     "nameWords": [
//       "black",
//       "leather",
//       "laced",
//       "sneakers"
//     ],
//     "targetWordIndex": 2
//   }
// ]

// Assert the validity of the values and structure of your output.

// Starter Code :
// // Don't just dive into coding! Make a plan.
var aa = function () {

};
console.log();
console.log();
//
//

/****************************************************************************/
console.log();
console.log(' ===== MODULE 3: READING ===== '); 
console.log();
/****************************************************************************/
// Module 3: Introduction

// Reactor Prep Module 3: Live Performance
// Welcome to Module 3!

// This module's focus is taking all the good problem-solving and clean-code-writing skills you practiced in the previous module, and practicing those same skills in a live performance context.

// Overview
// Live-coding with an audience is its own set of skills
// Admissions interviews are, in effect, live performances. So are the real job interviews that you will encounter later.

// In general, code pairing -- i.e., where you code in real-time with a coding partner -- is also a species of "live performance".

// Effective live-coding with another person is a very useful skill to have throughout your career. Let's start honing that skill now!

// This is similar to any kind of solo rehearsal or practice -- stand-up comedians practice their material in front of a mirror, tennis players rally against a practice wall, parliamentary debaters practice preparing and delivering their statements while timing themselves.

// The Goal
// You will practice and demonstrate your ability to understand, plan, and cleanly implement a coding problem under the twin pressures of limited time and a live, collaborative audience.

// What to do
// 1) Read the concepts and techniques of live coding performance
// Read these short articles found in this module:

// Mental model of what the interviewer wants
// Rapport with your interviewer
// Avoiding assumptions
// Make a plan first
// Getting unstuck
// Type faster!
// How to run your interview
// 2) A key practice tool: videos!
// The motivating theme behind the Live Performance module is that you can get a lot of benefit from recording videos and assessing your own performance first, i.e., before you even ask anyone else to watch you perform.

// You know how your voice sounds "funny" to you when you hear a recording of it? Well, watching and listening to a screencast of yourself attempting to solve a coding problem can be pretty eye-opening! You will see all kinds of obvious ways to improve the way you're solving the problem and the way you're coming across to the audience as you do so.

// 3) PAID FEATURE: Live mock interview(s)
// Talk to the staff on your private channel to find live mock interview slots.

// Pay careful attention to the How to run your interview article in this section and start solving problems live.

// FAQ
// How do I record a screencast with audio?
// On a Mac, we suggest using the built-in Quicktime Player. Make sure to TURN ON AUDIO, like this: foo

// Mental Model Of Interviewer

// Your job: to pattern-match as doing the job
// Your interviewer is pattern-matching for success "on the job" (or in this case, first "at the school", then by extension "on the job").

// There is some set of mental models that they have in their mind about what a successful candidate looks like.

// Your job is to look enough like that candidate, so you need to gauge what those mental models are likely to be.

// What does it take to be successful at Hack Reactor? In order to gauge that, let's first review how Hack Reactor works.

// Hack Reactor in a nutshell
// Let's briefly review how the Hack Reactor experience works in its current state of evolution.

// Introduction to CS fundamentals such as abstract data structures. This is applicable to all types of development, not just web apps.
// Introduction to code pairing and team-based development.
// Introduction to many tools and techniques specific to developing web apps.
// Daily lectures and daily problems to solve.
// Constant code-pairing practice with many different pairing partners, requiring you to work well with many people, under deadline pressure.
// Multiple hands-on app-building projects, both building things from scratch as well as evolving an existing codebase.
// Deploying and maintaining your launched apps.
// Whiteboarding and documenting your technical designs.
// Presenting your work to a live audience.
// As you can see, this is a pretty intense experience to have in just several weeks.

// Naturally you have to be able to learn things quickly in order to make it through this program. But let's highlight a few success characteristics that may not be obvious from the outside.

// You are flexible and tenacious in the face of ambiguity
// Hack Reactor throws a lot of new things at you.

// Hack Reactor doesn't give you academic grades, as such. You get feedback, but you won't have the conventional-schooling model of getting an 'A' in one topic before moving on to the next. You won't know if you've mastered a topic before having to move on to the next. In fact, you won't totally master any topics, really. How can you, at this pace?

// At any given moment, should you "go wide" or "go deep"? There's never enough time in the day to do all the things you want to do.

// But of course, it doesn't solve anything to give up. It doesn't solve anything to complain that you weren't given everything you need.

// The real world of professional development is far more open-ended and ambiguous than Hack Reactor. Hack Reactor consciously models that, to toughen you up and help you assemble the toolkit you need for success in the wider world.

// Remember, it's called a "bootcamp". That doesn't conjure up images of taking tests so you can get straight A's on a report card, right? It sounds more intense and real.

// So it is.

// A successful candidate looks like they can handle this, before admissions.

// What to do before and during the interview?
// In the interview, don't give up.

// Don't even implicitly hint at giving up by being down on yourself. Don't say little self-deprecating things.

// Keep it calm and professional and results-oriented. You don't have to be delusionally self-confident, but you do have to show that you can handle yourself under pressure.

// How can you get to this magical state? Before the interview, practice making a plan so you're less likely to get flustered and freeze up as you go. Practice getting unstuck so you don't freeze up (which can look like giving up).

// See the relevant articles here.

// You can get things working
// It isn't enough to just talk about how things work. You have to actually make them work.

// Making anything non-trivial work in software development usually involves rapidly gathering and applying a lot of info about a lot of different things.

// You are comfortable "going wide".

// What to do before and during the interview?
// In the interview, demonstrate that you know how to build small programs, and furthermore can do so under pressure.

// Before the interview, just practice -- a lot! Build many small programs that work, first of all. (That's what you practiced in module 1 and module 2 of this course) Then build them under deadline and live-audience pressure. (That's what you're practicing in module 3 of this course.)

// You care about how and why things really work
// Conversely to the above point, it isn't enough to just make things work. You have to know (within reason) why they work.

// It isn't enough to just glue things together so the system somehow works, (and appear pleasantly surprised at that outcome!) A strong engineer knows why it works. A strong engineer knows these deeper things because they care. They're curious, they believe knowledge is power, they see knowing things as part of being professional.

// You are comfortable "going deep".

// What to do before and during the interview?
// In the interview, talk about your choice of strategy and your implementation details in a manner that suggests you understand how things work. Use the specific technical names that describe what you are doing.

// Before the interview, look over the glossary of terms that come up in Codecademy's introduction to JavaScript. Do you know what all these terms mean? Can you use many of these terms when talking about your own code? If not, look them up and practice using them!

// You care about the details, you are professional
// It isn't enough to just barely get things working but your code is a mess.

// Would you feel confident about hiring such a coder?

// What to do before and during the interview?
// It's easy to know what to do here during the interview: take a little extra effort to keep your code cleanly organized, like we've been practicing in this course. It looks good and helps you avoid little time-wasting mistakes.

// You can work well with others
// This one is kind of a no-brainer. There are just too many tasks and areas of responsibility in a real production system for a "lone wolf" approach to engineering.

// What to do before and during the interview?
// See the article on "rapport with your interviewer".

// Rapport With Your Interviewer

// Bringing your interviewer along for the ride
// In the live interview, you will have another engineer beside you. Your interviewer is not just observing you but actually interacting with you.

// In doing so, that person is looking in a friendly but rigorous way for you to pattern-match as a strong fellow engineer.

// You want to give your interviewer as much positive material as possible for their post-interview writeup. One of the best ways to do that is to "bring your interviewer along for the ride". In other words, as you are interviewing, you aren't just solving the coding problem in front of you, you are trying to do so in a way that shows that you can solve lots of other coding problems in a collaborative, productive way with your teammates.

// Hack Reactor isn't about being a monster coder by yourself in a cave in the woods somewhere. It's about preparing you to code well in teams, because that's how the real work world operates.

// So demonstrate early on that you have the right personality, attitude, and basic collaborative problem-solving skills to operate well inside a team.

// In your interview, you are pair-programming (kinda)
// One way of thinking about your interview is as a pair-programming exercise. Your interviewer is looking for you to be a good pairing partner. Although this isn't full-on pairing, i.e., where you trade off who is "driving" (coding) vs "navigating" (advising / spot-checking), nonetheless it's very useful to think of it as pairing.

// Treat your interviewer as a kind of coding pair partner, not as a judge, jury, and executioner.

// That means it's not only ok, it's very good to ask questions and invite input from the interviewer. They should not be silent for 45 minutes mutely watching your performance. That's boring and sub-optimal for both sides.

// In your interview, you are a technical communicator
// Your interviewer is looking for you to be a clear technical communicator.

// Being able to concisely & quickly convey and discuss your technical design and implementation ideas is a key skill for collaborate software development.

// Thus, during your interview --

// if you are mute the whole time, or
// just mutter indistinctly to yourself, or
// talk garrulously in circles about nothing much of import, or
// if you try to explain what you are planning to do, but your interlocutor has no clear idea what you are talking about
// ... then that's no good.

// Make it easy to coordinate. You're trying to convince someone else that your ideas are sound. As such, it's your job to be clear.

// Talking out loud at the right level of abstraction
// Most people when they hear that they need to talk out loud while they are coding will do something like this:

// Ok so now I'm writing a for loop to loop through the array. So let's set up the index variable, and increment it until we get to the end of the array. With each loop, we will grab the next element and process it...
// To be blunt, that kind of verbiage is almost entirely useless. It is marginally better than saying nothing at all, but only just barely.

// Your coding partner AKA interviewer knows a lot about how JavaScript works and how programming in general works. Telling her/him about that stuff in minute detail doesn't serve any purpose. I mean, we can see what you're typing right? :)

// Have empathy for your partner
// Imagine you were on the "other side of the table" so to speak. Think about what you would want to hear, how you might want to participate.

// You don't really want to hear someone mechanically describing what they are typing. You want to hear about things at the level of the decisions that are being made. That way you get a chance to influence those decisions, perhaps.

// If there's a blockage of some kind, you also want to hear about the troubleshooting thought process. That way you get a chance to help!

// Share your higher-level thought process, not mechanical stuff
// 'Nuff said.

// Now go make some practice videos and get ready for the real thing! :)

// Avoiding Assumptions

// Misunderstandings and the human condition
// Misunderstanding is a core aspect of the human condition.

// What's going on inside someone else's head? What are they really trying to tell you? What do they really want? Do they even know, themselves?

// How many times in your life have you found yourself confused and surprised, after the fact, when someone tells you that that wasn't what they meant, that that wasn't what they wanted?

// Despite best intentions on both sides, it's very easy to misunderstand one another.

// This is also true when it comes to understanding requirements for developing your software system. When it comes to software development, it's very easy to misunderstand some aspects of what you're supposed to do.

// Assumptions are risky
// If you misunderstand the problem requirements, then:

// You waste time building the wrong thing.
// You are much more likely to run out of time in your interview.
// In a real work situation, you are also much more likely to run out of time, and therefore miss deadlines.
// You seem like someone who doesn't read things carefully, who's not detail-oriented.
// You come across as someone who doesn't think ahead and think things through, who just dives in and makes a mess.
// The above points make you seem unreliable and risky.
// Some examples
// drawLine
// Let's say you have this problem statement:

// 1│ Write a function called "drawLine" that takes an integer parameter and draws a line of that length, composed of asterisks.
// When you read that, do you visualize a horizontal line?

// Who said it wasn't vertical?

// Diagonal?

// Also, the name of the function doesn't actually specify asterisks. It's drawLine not drawLineOfAsterisks. Does that suggests that we might consider parameterizing the choice of character used to draw the line? Maybe we want to be able to draw with hyphens too, etc.

// Are we supposed to draw the line directly to the console, or return a value that represents the string? Are we supposed to return a string or a data structure such as an array?

// Is this even drawn to the console at all? Perhaps it's supposed to be drawn directly to the screen, via an HTML canvas tag, say.

// getMiddle
// 1│ Write a function called "getMiddle" that returns the middle of the given string.
// Let's assume that "middle" means the middle character.

// So the middle of "fudge" would be "d".

// OK. In that case, what's the middle of "cloister"?


// Is the middle of an 8-character string between the 4th and 5th character?

// Is it a blank string?

// Or is it maybe these two characters?


// So, calling getMiddle('cloister') returns "is"?

// But wait, there's more

// Is the spec for this really: "the middle-most character(s)"?

// What if this is "the middle"?


// How to avoid unwarranted assumptions
// Assume you are making assumptions
// First, you have to assume you are assuming... which you are.

// Since all assumptions carry some amount of risk, it's best to root out and state those assumptions explicitly.

// "Reflection"
// Summarize what you think you know about the problem. State your assumptions.

// State them out loud.

// Talk out loud
// If you don't say what you're thinking, it's hard for anyone else to know and thereby give you a chance to course-correct.

// Literally talk out loud, even if that sounds a little unnatural. If you're recording an interview practice video by yourself, pretend you're talking to a live interviewer.

// Question yourself
// Ask yourself at least one question.

// If you're recording an interview practice video by yourself, just ask the question out loud, rhetorically. Then answer it yourself, one way or the other. If the situation is ambiguous, just make a decision as though you were the interviewer, and move on. But state what that decision is, out loud.

// Question the other person
// If you are working with another persons live, either in a live mock interview or in an actual interview, then you have a golden opportunity to get your questions answered and avoid all the problems described above in the "Assumptions are Risky" section.

// Make a Plan

// You need a plan
// There is one simple rule here.

// Do not just dive in to coding!

// Repeat after me: DO NOT JUST DIVE INTO CODING.

// According to some data we've gathered at Hack Reactor internally from the results of mass interview practice, the #1 failure mode of entry-level programmers is not making enough of a plan before they began implementation.

// Review this recipe for problem-solving.
// Re-read this article on outlining and stubs.

// Getting Unstuck

// How to get unstuck
// Don't give up
// Keep trying different strategies.
// Stay open to creative ideas.
// Try not to get frustrated.
// Decompose the problem
// Break the problem into simpler parts.
// Analyze the parts of the problem.
// Concentrate on the parts of the problem you understand and that can be solved.
// Solve each piece by itself.
// Rubber-ducking
// Verbalize the problem to yourself and others.

// Describe:

// what the problem is
// what you have done
// where you are stuck
// Paraphrase. Re-describe the problem. Think of simpler ways to describe the problem

// This is sometimes called "rubber-ducking" because there is an anecdote about an engineer who would keep a rubber duck (like what little kids use in the bathtub) at his desk. When he got stuck, he would talk it over with his duck.

// Look for assumptions
// Look for hidden assumptions or information you have forgotten to use. After reading each phrase or sentence of the problem statement, ask yourself if any assumptions can be inferred from that phrase.

// Check again to make sure you are solving the right problem. Double-check all of your values, assumptions, and approaches. Make sure you haven't missed anything and that you are looking for the correct solution.

// Re-evaluate your strategy
// Try using a different strategy. There is usually more than one way to solve a problem, and you may find a method that you haven't considered is much easier than the one you're working on currently.

// Consider a different core data structure.
// Consider a different algorithm (a different way of processing the data)
// Consider using different helper functions (different built-in JavaScript methods, say)
// Be the interpreter
// Don't rely on dropping print statements everywhere in your code, that's sloppy.

// Instead, walk through your code as though you were the interpreter.

// To "be the interpreter" means to evaluate every small step in a section of code. And by "evaluating", we mean actually evaluating the code all the way down to the literal value which are the end result of evaluation.

// Then, when you see the concrete output, it's a lot easier to realize what is wrong.

// Example:

// 1│ var numbers = [5, 3, 8, 6, 9, 1, 0, 2, 2];
// 2│ var oddEvenCounts = numbers.reduce(function(counts, number) {
// 3│   if (isOdd(number)) {
// 4│     counts[odd]++;
// 5│   } else {
// 6│     counts[even]++;
// 7│   }
// 8│ }, {});
// There's a bug in this code. Where is it?

// If inspection of the console output doesn't show the error immediately, then start walking through it as though you were the interpreter.

// Try it now, and see if you can spot the error!

// Use your tests
// Write more tests.
// Re-examine the tests you've already written.
// Is there an edge case you've forgotten?

// Type Faster

// Fast typing "ups your game"
// This may sound strange at first, but it's very helpful for both coding and interviewing to be able to type quickly.

// The faster you can type (within reason)...

// The faster you can write out the "skeleton" of your solution.
// The faster you can try out snippets of code to figure out how JavaScript behaves in some area.
// The faster you can implement the bodies of your stubbed-out functions.
// The faster you can assemble test data.
// The faster you can write your tests.
// The faster you can test your components and build upon them.
// The faster you can get to a working solution!
// Although the length of the interview slot is fixed -- the same for everyone -- you buy yourself more time by typing faster.

// How your typing is perceived
// Your typing speed is one of those things that subconsciously impacts how your interviewer perceives you.

// If you're a fast, accurate typist...

// You look like you think faster (although this is silly, yes, slow typists can think very fast).
// You look professional.
// You look like you get things done.
// The interviewer is less likely to become bored watching you slowly peck away assembling your thoughts.
// Naturally, this subtle perception isn't all that fair, but... as they say, life isn't fair.

// A relevant article
// Read this article from Jeff Atwood: We Are Typists First, Programmers Second.

// Note: Jeff is the guy behind Stack Overflow, the online resource for programming Q&A that you've probably encountered by now.

// Now, this is arguable (like anything). If you happen to scroll down to the comments, you will see many people doing just that, arguing.

// But Jeff's response here is pretty practical and accurate, in our industry experience (click to enlarge if need be):



// But I don't have time to practice this on top of everything else I have to do.
// Right, you probably won't have time to change your base typing speed much before your interview.

// However you can be conscious that your typing speed does matter. Push yourself during practice to keep moving briskly.

// Aim for speed and precision in your typing, just like in your thinking and general execution. Don't inadvertently sell yourself a little short by being a little lazy about the mechanics of your writing.

// Glossary Of Terms

// Codecademy's JavaScript glossary
// Codecademy's glossary page, while very useful, actually is more of summary of the basics of JavaScript than it is specifically a "glossary", i.e., a list of technical terms.

// As such, as a convenience for Hack Reactor learners, we sifted through every page of material in their course to come up with the following list of terms that you can use when you are describing your own code, during code pairing or in an interview context.

// List of technical terms used in Codecademy's JavaScript course (as of Winter 2016)
// expression
// console
// interpreter
// comment
// commented out
// single-line comment
// multi-line comment
// prompt
// data types
// type
// string
// string length
// boolean
// logging
// printing out the value
// operators
// comparison operators
// less than or equal to
// greater than or equal to
// not equal to
// curly braces (aka curly brackets)
// statement
// if statement
// keyword
// if keyword
// condition
// evaluating a condition
// if / else statement
// syntax
// order of operations
// modulo
// remainder of division
// divisibility
// substrings
// variable
// var keyword
// declare a variable
// define a variable
// value of a variable
// assign a value to a variable
// function
// input
// output
// execute
// calling a function
// declare a function using var
// code block
// function keyword
// function parameters
// debugging
// DRY - Don't Repeat Yourself
// reusable block
// return keyword
// return a value
// the return value
// passing values into a function
// scope
// global scope
// local scope
// variable defined inside a function
// the current scope
// var creates a variable in the current scope
// reusable code
// uncomment
// function arguments
// for loops
// a counting variable (aka a "counter")
// increment a variable / increment a value
// decrement
// infinite loop
// satisfying a condition
// list of data
// ordering data
// array
// array index
// 0-based indexing
// array elements
// accessing array elements
// backslash
// wrapping lines
// empty array
// pushing elements onto arrays
// while loop
// condition evaluates to true
// inside the loop vs outside the loop
// do / while loop
// Math.floor
// if / else if / else
// isNaN
// switch / case
// break
// default
// empty skeleton of a switch statement
// logical operator
// and
// or
// not
// boolean logic
// Array properties
// heterogeneous array (aka "mixture of data types")
// two-dimensional array (aka "array of arrays")
// jagged arrays
// object
// key-value pair
// key
// value
// object literal
// object literal notation
// object constructor
// the new keyword
// for / in loop
// nested conditional
// object property
// property value
// dot notation for accessing properties
// bracket notation for accessing properties
// constructor
// empty object
// object method
// the this keyword
// custom object constructor
// arrays of objects
// objects as parameters for functions
// linear search
// checking the type of a variable
// object-oriented programming (OOP)
// class
// object prototype
// instance of a class (aka "class instance" or "instance")
// extend the object prototype
// inheriting the properties and methods of another object
// inheritance
// "is-a" relationships
// prototype chain
// all properties of an object are automatically public
// public variables
// private variables
// accessing private variables
// private methods


// How to Run Your Interview

// How to run your interview
// Phase 0: Take a moment to compose your mind.
// Take a deep breath, calm yourself, and remember that you've got this.

// You're not expected to be perfect.
// You're not expected to be perfect. No one's perfect. You're expected to execute the basics in such a way that you show your promise. That, you can do.

// You are trained.
// As Denzel Washington says in Man on Fire:



// By the time you take the actual interview, you will be trained.

// You've followed this guide. You've practiced it.

// You've got this.

// Phase 1: Really understand the problem
// Really read the instructions
// Take a minute to read the instructions.

// It's ok to be quiet while you are reading. Just say something like:

// Please give me a moment to read over the instructions
// Summarize the problem out loud
// Now summarize the problem in your own words (don't just rotely recite the problem verbiage, as that adds nothing to the discussion).

// Here's a mini-recipe for summarizing:

// What's the expected input?
// What's the expected output?
// Review the examples provided, if any. Apply categorical reasoning to identify what's different or interesting about the examples.
// Root out initial assumptions with questions
// There is almost always some subtle wrinkle or omission (whether intentional or accidental) in the problem description.

// For example:

//  1│ You will be given an array that contains two strings. Your job is to create a function that will take those two strings and transpose them, so that the strings go from top to bottom instead of left to right.
//  2│ 
//  3│ e.g. transposeTwoStrings(['Hello','World']);
//  4│ 
//  5│ should return
//  6│ 
//  7│ H W  
//  8│ e o  
//  9│ l r  
// 10│ l l  
// 11│ o d
// Possible questions that come to my mind when I see this problem:

// How should I handle the 1st word being longer than the 2nd?
// How should I handle the 2nd word being longer than the 1st?
// Do I need to do anything about uppercase/lowercase?
// Can there be spaces inside the string? If so, do I treat them as letters?
// If you truly don't see anything that's worth asking about, then just proceed, but there's almost always something useful to probe.

// Phase 2: Make a high-level plan of attack
// DO NOT IMMEDIATELY JUMP INTO CODING.

// DO NOT IMMEDIATELY JUMP INTO CODING.

// DO NOT IMMEDIATELY JUMP INTO CODING.

// Oh, and did I mention...

// DO NOT IMMEDIATELY JUMP INTO CODING.

// In fact, at this phase, try to avoid even using programming jargon!

// Imagine that you are discussing the problem with someone you know who is super-analytical -- say, a professional mathematician -- but who doesn't know a programming language.

// You want to talk about the logic, the data, the processing -- but again don't dive right into the details of implementation yet. What are the intermediate stages of processing that will transform your target input into your target output?

// Example of how to talk about strategy
// Given the transposeTwoStrings problem above, here's what I might say.

// Good example

// 1│ The input is two strings. 
// 2│ 
// 3│ The output is a series of strings delimited by carriage returns, where each line is a pair of characters at the same index in each of the strings.
// 4│ 
// 5│ We'll process the strings like a zipper, i.e., "zip" the characters together at each index. If the lengths differ, we'll pad with spaces.
// And I might write down these notes while talking:

// 1│ Input: 2 strings
// 2│ Output: transposed strings --> 1 line per pair of chars at each index
// 3│ Process: "zip" the chars, pad shorter string with spaces
// Bad example

// 1│ Ok, I would write a for-loop to iterate over the arrays, and take the current index and look up the character at that index in each of the arrays. The characters from each array, then I would put them together into the same string, with a space in the middle, and add that to the array for the return value.  Then I will join each element of that array with the map method so the character-pairs are separated by a space, then join the entire return-array with newlines.
// Why is the bad example bad?

// It's harder for you yourself to think about what you are doing. You get lost in the details immediately.
// There's so much detail there, it's hard for your interviewer/coding-partner to follow.
// It mixes implementation detail with higher-level strategy, making it harder to give useful feedback about direction.
// Because you don't get as much useful feedback about direction, it's easier for you to fall into an implementation rathole.
// You are effectively saying, "Don't help me, interviewer/coding-partner. I just want to start coding like a madman, you're not gonna stop me."
// Phase 3: Discuss your high-level plan of attack with your interviewer / coding-partner
// Ask this simple question:

// What do you think of this approach?
// Treat your interviewer as a partner, not as a scary judge / jury / executioner.

// Bring them along for the ride.

// Give them chances to steer you, to help you. Don't just bull ahead on your own.

// Phase 4: Make an implementation plan
// Now you can talk in terms of programming details.

// Pick a core data structure if that's important for this problem.

// You can talk about JavaScript specifically at this point if you want to. (Although it's actually better if you only talk about programming structures / concepts without specifically referring to JavaScript even at this phase)

// Example of how to talk about implementation
// Given the transposeTwoStrings problem above, here's what I might say and write.

// Good example

// Say:

// OK, let's jot down some notes for the proposed approach...
// Say, while typing these notes:

// 1│ * find the longest array
// 2│ * use the longest array to map a "slice" (at each index) of each array into a new array
// 3│ * render the target output from the new arrays
// Say, while typing the example:

// Ok let's "examplify" - provide a real working example to illustrate... here are a couple of character arrays...
// Write:

// 1│ // input: ['a', 'b', 'c'], ['d', 'e', 'f', 'g']
// Say, while typing the example:

// We can see that the longest array is the 2nd array, so we'd use that to drive the mapping.
// Ok, now let's see what the processing would look like at each iteration of mapping, i.e., as we process each "slice"...
// 1│ idx - arr1 - arr2
// 2│ 0 - 'a' - 'd' --> ['a', 'd']
// 3│ 1 - 'b' - 'e' --> ['b', 'e']
// 4│ 2 - 'c' - 'f' --> ['c', 'f']
// 5│ 3 - ' ' - 'g' --> [' ', 'g']
// Say

// Then we'd use array joins (with a space and a newline) to render the target output.
// Bad example
// Say:

// Ok, we'd find the longest array, then use the longest array to map a "slice" (at each index) of each array into a new array, then render the target output from the new arrays, it would look like this:
// 1│ function transposeTwoStrings(str1, str2) {
// 2│   return zipArrays(str1.split(''), str2.split(''));
// 3│ }
// 4│ const zipArrays = (...arrs) =>
// 5│   arrs.reduce((a, b) => a.length > b.length ? a : b).map((_, idx) => arrs.map(arr => arr[idx] || ' ')).map((pair) => pair.join(' ')).join('\n');
// So yeah... that works -- and sure that's admittedly kind of impressive if you can just dump out code like that on the fly -- but it's incomprehensible. It's not a discussion. You aren't bringing the interviewer / coding-partner along for the ride.

// Phase 5: Implement!
// Now you do the stuff you've been doing in Module 2.

// Make the skeleton and stubs.
// Pseudocode as needed.

// In this phase, as you code, you talk about what you are about to do at a slightly higher level than the actual JavaScript.

// Let's say you are about to write this code:

// 1│ var splitStrings = [str1.split(''), str2.split('')];
// Good example of what to say
// Ok let's split each string into chars.
// Bad example of what to say
// Ok let's use the String.split method with a blank argument to split the strings into their constituent characters, and put each of the resulting arrays into an array-of-arrays and assign that to a variable called splitStrings.
// Test as you go
// Remember all the testing you were doing.

// Test as you go! Verify the key pieces you're building, so you can completely rely on it.

// DO NOT:

// write a crap-load of crap-code with no tests
// have no idea whether it will all work or not
// hit Run
// "ah crap, it doesn't work"
// "uh..."
// start dropping console.log statements everywhere
// "what's happening..."
// "how does my own code work???"
// "crap"
// make a big ugly mess of debugging and not-quite-working code
// "don't panic... don't panic"
// "urrghghhghg"
// do not pass Go, do not collect $200
// Keep talking as you test. Talk about what you are testing and why.

// Troubleshoot (hopefully you won't need much of this!)
// Remember: getting unstuck.

// Keep talking as you troubleshoot. Talk about the assumptions you are verifying, and which troubleshooting strategy you will try next (see the article).

// Sample Self Feedback

// Overview
// Everyone struggles at first, but there is no way to get better at problem-solving in a live performance than to:

// rehearse
// analyze your performance
// rehearse again
// Look over the results that other learners have obtained from tackling the practice problems. Use other people's experience as cautionary tales. Find things to watch out for in your own performance.

// Self-feedback examples
// Person A
// Flipper

// Less 'umms'!
// I could have done a better job outlining the approach. For example, I could have talked about the helper functions I was planning to include instead of just writing them.
// I chose an overly-complicated implementation approach to handle varying length. I later realized there was a much simpler way to do it.
// I should have added a couple more tests.
// Numerous minor syntax mistakes.
// Big flipper

// I seem to have a tough time fully planning the approach before coding.
// I'm ok at coding in manageable bits so I can pick up errors along the way.
// However, if I try to psuedo code the problem completely ahead of time I often miss items that cause me to slightly modify the strategy in real time while coding.
// I know this is a balance, but I feel more comfortable uncovering problems as I code and only spending the first few minutes planning.
// The code is fairly simple (for loops instead of more advanced functions), but I'm finding I don't have time to refactor in 20 minutes.
// I felt like I recovered nicely from a syntax error in a conditional statement, but I remain concerned that I have the benefit of live testint, which I have not had the option to use in previous HR interviews.
// Person B
// Flipper

// I did not get a working solution.
// My approach and implementation were still too detailed and included JS jargon. I should take a step back and aim to be more high-level.
// I should definitely practice higher-order functions more. I'm still using for-loops as a crutch.
// There were some long pauses during implementation and de-bugging. I can use this time to engage with the interviewer and have a more collaborative mindset.
// I could also improve my variable naming.
// Big flipper

// What I liked:

// I got a working solution.
// I did not just dive into coding.
// I think my approach early on was a bit more high level.
// Areas to improve:

// Naming of variables.
// I need to think/explain/type/implement faster.
// Still need practice higher-order functions.
// Outliers

// What I liked:

// I began testing components throughout the implementation.
// I didn't just dive into coding.
// What I didn't like:

// There are still some side effects.
// Even though I was speaking to a computer screen, I could have done a better job engaging and collaborating with the interviewer.
// There was clearly JS jargon in my implementation strategy. This area should be more high-level. I need to remember that I may be speaking to a python programmer.
// The implementation of the ternary operator could have been more smooth. Post-recording, I found that I just needed to put return in front.
// Transpose

// What I liked:

// My interview style is starting to feel more natural
// I'm still practicing TDD
// I'm not diving into coding.
// What I didn't like:

// I did not get a working solution.
// Under pressure, I'm still using for-loops instead of higher-order functions.
// Rotate this

// What I liked:

// I got a working solution using higher-order functions
// I did not just dive into coding
// I tested components along the way
// What I can improve:

// I had some time at the end, I could have revised some of the variable names
// Person C
// Flipper

// forgot to write the last function that uses all the previous ones..
// too much hesitation
// still not sure how to use reduce and splice functions in this case.
// Big flipper

// Still feel i am rambling sometimes.
// Because of time pressure i was forced to use for loops intead of other functional methods.
// Transpose

// Still feeling the need to use for loops under time pressure.
// Could have separated more into helper functions.
// Person D
// Flipper

// Still jumping into coding without having a COMPLETELY fleshed out plan.
// Spending too much time during troubleshooting... I can detect the problem, but fixing it is taking too long
// Positive: I did utilize 'Be The Interpreter' and it helped me to quickly catch the logic error
// Big flipper

// Need to breathe more and really drive home the logical/step-by-step thinking and implementation.

// Outliers

// Could break down my functions even further, making reduce/map/etc its own function, will be easier for debugging
// Need to work on my voice... Starting to feel that I'm borderline mumbling. Need to learn how to walk and chew gum at the same time
// Transpose

// Still a very 'clunky' solution. Doesn't look clean at all
// Perhaps I'm taking too much time explaining things, when I should just be plowing along.
// Need to come up with simpler logic, not satisfied with my working implementation
// Find the pair

// Definitely by far the best performance I've done to date
// Still feeling like I'm explaining too many minor details that might count against me. But the dead silence is nerve racking
// Person E
// Flipper

// I spent 5 minutes implementing the test. That's something that I should just practice to implement in sub 1 minute.
// Also should have made a smaller string to test at first.
// I feel like the skeleton itself was a little sparse and I could go into more detail
// I should probably have tested each function's implementation as I went along rather than at the end.
// Need to talk more, but part of that is without someone in the room/ on the other end.
// I made an early assumption about string length, which tripped me up initially
// Outliers

// when I panicked a bit over it not working the right way out of the gate, I stopped talking completely - i know i need to get better about explaining my thought process while fixing the problem.
// also i need to be better about explaining 'what' is happening instead of narrating my coding implementation

//
//

console.log(' ===== MODULE 3: EXERCISES ===== '); 
console.log();
/****************************************************************************/

console.log(' ===== 001 Flipper ===== ');    
//----------------------------------------------------------------------
// PLEASE FOLLOW THESE INSTRUCTIONS CAREFULLY.


// 1) Prepare to record & time

// Prepare your screencasting (both video and audio) setup all ready to go before de-obfuscating the problem statement.
// Prepare an audible countdown timer (say, the Clock app on your phone).


// 2) Begin the problem

// Go to http://www.rot13.com/ and de-obfuscate the problem statement.
// Paste the problem statement into the work area in Repl.it (replace the original, obfuscated version).
// Start your timer for: 20 minutes / TWENTY MINUTES
// Start recording.


// 3) *** DO THE PROBLEM IN A STRUCTURED WAY ***

// Follow the instructions from the sidebar titled "How to Run Your Interview".
// Note: Since you are working by yourself, you have to mimic the live experience by asking rhetorical questions, then provisionally answering them yourself on behalf of your imaginary live interviewer. Ask those questions out loud anyway!

// 4) Review your own work and record your notes here

// Watch your video and observe what you did well and what you want to improve for next time.
// Write those notes here in this Repl.it problem.
// If you are enrolled in our Free version (Basic Prep), skip Step 5 and proceed to Step 6.


// 5) Paid Students Only : Finish and upload

// When you have a working solution that you are satisfied with OR when the timer goes off...
// Stop recording.
// Sanity-check that your recording looks ok and has audible audio.
// If the video or audio are screwed up, re-record.
// Upload the video to YouTube as an unlisted video.
// When processing is complete, double-check that the video plays.
// Paste the URL to that video into the Repl.it submission pane.


// 6) Submit this Repl.it problem.



// *** DO NOT WAIT FOR STAFF FEEDBACK -- PROCEED TO THE NEXT PROBLEM ***

// For this first video, you're going to upload it so staff can sanity-check that you are on the right track, and to make sure that you can send us videos this way.

// You will NOT upload EVERY video you make. Most of them, you should simply self-evaluate.



// Starter Code :

// /*
// Problem description (see instructions for how to de-obfuscate).


// Syvc rirel cnve bs punenpgref va n fgevat.


// Rknzcyr:
// ine vachg = 'purpx bhg ubj vagrerfgvat guvf ceboyrz vf, vg\'f vafnaryl vagrerfgvat!';
// ine bhgchg = syvcCnvef(vachg);
// pbafbyr.ybt(bhgchg); // --> uppr xhb gbu javrgregfav tugfvc beyozrv ,fv 'g favnfralyv gaerfrvgta!
// */
var aa = function () {

};
console.log();
console.log();


console.log(' ===== 002 Big Flipper ===== ');    
//----------------------------------------------------------------------
// PLEASE FOLLOW THESE INSTRUCTIONS CAREFULLY.

// 1) Prepare to record & time

// Prepare your screencasting (both video and audio) setup all ready to go before de-obfuscating the problem statement.
// Prepare an audible countdown timer (say, the Clock app on your phone).

// 2) Begin the problem

// Go to http://www.rot13.com/ and de-obfuscate the problem statement.
// Paste the problem statement into the work area in Repl.it (replace the original, obfuscated version).
// Start your timer for: 20 minutes / TWENTY MINUTES
// Start recording.

// 3) Do the problem

// Follow the instructions from the sidebar titled "How to Run Your Interview".

// 4) Finish but DO NOT upload

// When you have a working solution that you are satisfied with OR when the timer goes off...
// Stop recording.

// 5) Review your own work and record your notes here

// Watch your video and observe what you did well and what you want to improve for next time.
// Write those notes here in this Repl.it problem.

// 6) Submit this Repl.it problem for review

// 7) *** DO NOT WAIT FOR STAFF FEEDBACK -- PROCEED TO THE NEXT PROBLEM ***



// Starter Code :

// /*
// Problem description (see instructions for how to de-obfuscate).

// Syvc rirel puhax bs a punenpgref va n fgevat, jurer a vf nal cbfvgvir vagrtre terngre guna 1.

// Abgr gung guvf vf vagragvbanyyl irel fvzvyne gb gur cerivbhf ceboyrz.

// Cyrnfr sbphf ba trggvat n jbexvat fbyhgvba jvgu gur gbbyf lbh xabj jryy.

// Cenpgvpr gur vagrenpgvir/pbyynobengvir vagreivrj fglyr gung'f qrfpevorq va gur qbphzragngvba.

// Rknzcyr:
// ine vachg = 'n fubeg rknzcyr'; 
// ine bhgchg = syvcRirelAPunef(vachg, 5);
// pbafbyr.ybt(bhgchg); // --> buf nkr geryczn

// Oernxvat guvf rknzcyr qbja cvrpr ol cvrpr:
// 'n fub' -> 'buf n'
// 'eg rk' -> 'kr ge'
// 'nzcyr' -> 'ryczn'

// -> 'buf nkr geryczn'
// */
var aa = function () {

};
console.log();
console.log();


console.log(' ===== 003 Outliers ===== ');    
//----------------------------------------------------------------------
// PLEASE FOLLOW THESE INSTRUCTIONS CAREFULLY.

// 1) Prepare to record & time

// Prepare your screencasting (both video and audio) setup all ready to go before de-obfuscating the problem statement.
// Prepare an audible countdown timer (say, the Clock app on your phone).

// 2) Begin the problem

// Go to http://www.rot13.com/ and de-obfuscate the problem statement.
// Paste the problem statement into the work area in Repl.it (replace the original, obfuscated version).
// Start your timer for: 20 minutes / TWENTY MINUTES
// Start recording.

// 3) Do the problem

// Follow the instructions from the sidebar titled "How to Run Your Interview".

// Note: Since you are working by yourself, you have to mimic the live experience by asking rhetorical questions, then provisionally answering them yourself on behalf of your imaginary live interviewer. Ask those questions out loud anyway! 

// 4) Finish but DO NOT upload

// When you have a working solution that you are satisfied with OR when the timer goes off...
// Stop recording.

// 5) Review your own work and record your notes here

// Watch your video and observe what you did well and what you want to improve for next time.
// Write those notes here in this Repl.it problem.

// 6) Submit this Repl.it problem for review

// 7) *** DO NOT WAIT FOR STAFF FEEDBACK -- PROCEED TO THE NEXT PROBLEM ***



// Starter Code :

// /*
// Problem description (see instructions for how to de-obfuscate).

// Tvira n fgevat bs rira naq bqq ahzoref, svaq juvpu vf gur fbyr rira ahzore be gur fbyr bqq ahzore.
  
// Gur erghea inyhr fubhyq or 1-vaqrkrq, abg 0-vaqrkrq.

// Rknzcyrf :
// qrgrpgBhgyvreInyhr("2 4 7 8 10"); // => 3 - Guveq ahzore vf bqq, juvyr gur erfg bs gur ahzoref ner rira
// qrgrpgBhgyvreInyhr("1 10 1 1");  //=> 2 - Frpbaq ahzore vf rira, juvyr gur erfg bs gur ahzoref ner bqq
// */
var aa = function () {

};
console.log();
console.log();


console.log(' ===== 004 Transpose ===== ');    
//----------------------------------------------------------------------
// PLEASE FOLLOW THESE INSTRUCTIONS CAREFULLY.

// 1) Prepare to record & time

// Prepare your screencasting (both video and audio) setup all ready to go before de-obfuscating the problem statement.
// Prepare a timer.

// Note that you have a little more time on this one...

// 2) Begin the problem

// Go to http://www.rot13.com/ and de-obfuscate the problem statement.
// Paste the problem statement into the work area in Repl.it (replace the original, obfuscated version).
// Start your timer for: 25 minutes / TWENTY-FIVE MINUTES
// Start recording.

// 3) Do the problem

// Follow the instructions from the sidebar titled "How to Run Your Interview".

// Note: Since you are working by yourself, you have to mimic the live experience by asking rhetorical questions, then provisionally answering them yourself on behalf of your imaginary live interviewer. Ask those questions out loud anyway! 

// 4) Finish but DO NOT upload

// When you have a working solution that you are satisfied with OR when the timer goes off...
// Stop recording.

// 5) Review your own work and record your notes here

// Watch your video and observe what you did well and what you want to improve for next time.
// Write those notes here in this Repl.it problem.

// 6) Submit this Repl.it problem for review

// 7) *** DO NOT WAIT FOR STAFF FEEDBACK -- PROCEED TO THE NEXT PROBLEM ***



// Starter Code :

// /*
// Problem description (see instructions for how to de-obfuscate).

// Lbh jvyy or tvira na neenl gung pbagnvaf gjb fgevatf. Lbhe wbo vf gb perngr n shapgvba gung jvyy gnxr gubfr gjb fgevatf naq genafcbfr gurz, fb gung gur fgevatf tb sebz gbc gb obggbz vafgrnq bs yrsg gb evtug.

// r.t. genafcbfrGjbFgevatf(['Uryyb','Jbeyq']);

// fubhyq erghea:
// U J  
// r b  
// y e  
// y y  
// b q
// */
var aa = function () {

};
console.log();
console.log();


console.log(' ===== 005 Find the pair ===== ');    
//----------------------------------------------------------------------
// Ok by now you know the drill on how to set up and do these videos, so we won't repeat the giant list of instructions.

// Give yourself 20 minutes for this problem.  

// Don't be too fancy. Just lay out enough plan to get your ideas down, then assemble your solution, step by step.

// Note: Don't submit code that doesn't reflect what you did in the allotted time.  You can put a belatedly-complete solution in a *private* Github Gist instead and link to that if you really want to share it here.

// Starter Code :
// /*
// Problem description (de-obfuscate with ROT-13 as usual).

// Tvira n yvfg bs aba-artngvir vagrtref naq n gnetrg fhz, svaq n cnve bs ahzoref gung fhzf gb gur gnetrg fhz.

// Rknzcyr:

// ine cnve = svaqCnveSbeFhz([3, 34, 4, 12, 5, 2], 9);
// pbafbyr.ybt(cnve); // --> [4, 5]
// */
var aa = function () {

};
console.log();
console.log();


console.log(' ===== 006 oh yeah? Rotate THIS ===== ');    
//----------------------------------------------------------------------
// Ok by now you know the drill on how to set up and do these videos.

// Give yourself 20 minutes for this problem.  

// Don't be too fancy. Just lay out your plan and get it done.

// Note: Don't submit code that doesn't reflect what you did in the allotted time.  You can put a belatedly-complete solution in a *private* Github Gist instead and link to that if you really want to share it here.

// Starter Code :
// /*
// Problem description (de-obfuscate with ROT-13 as usual).
// There's an extra hint in there, too, if you need it!

// Focus on getting a working solution with the tools you know well.
// Practice the interactive/collaborative interview style that's described in the documentation.

// Vf bar fgevat n ebgngrq irefvba bs nabgure?

// Sbe rknzcyr:
// Fgevat 1: 'uryyb jbeyq'
// Fgevat 2: 'beyquryyb j'

// Rkgen uvag: (qr-boshfpngr jvgu EBG-20, gurer'f n qebcqbja ba uggc://ebg13.pbz gb fryrpg gung)
// By rhn whnuex max lmkbgz, rhn'ee ux mh mkbobteer ybgw tghmaxk lmkbgz bglbwx bm nlbgz kxznetk Lmkbgz fxmahwl.

// Whnuexw lmkbgz: 'axeeh phkewaxeeh phkew'
// Lxtkva p/bg bm: '       hkewaxeeh p    '
// */

// function isRotated(str1, str2) {
// }
var aa = function () {

};
console.log();
console.log();


console.log(' ===== 007 Divide and conquer ===== ');    
//----------------------------------------------------------------------
// Computer science and software engineering have lots of cool, useful ideas for you to absorb and apply in your upcoming career.

// One of the Big Ideas is called "divide and conquer". It's the simple-seeming notion that it's useful to break down a big problem into a bunch of smaller, more-tractable versions of that problem.  

// One cool, easy way to apply Divide & Conquer is in finding things!  

// Give yourself 30 minutes (since this is a new technique to absorb).  

// Timer ready?  De-obfuscate...  Go, go, go! :)

// Starter Code :
// /*
// De-obfuscate via rot13 as usual.

// Ovanel frnepu vf n grpuavdhr sbe irel encvqyl frnepuvat n fbegrq pbyyrpgvba ol phggvat gur frnepu fcnpr va unys ng rirel cnff.

// Tvira n fbegrq neenl, fhpu nf guvf:
// [1, 3, 16, 22, 31, 33, 34]

// Lbh pna frnepu sbe gur inyhr 31, nf sbyybjf:

// 1) Cvpx gur zvqcbvag: 22.
// 2) Gur inyhr vf uvture guna 22, fb abj pbafvqre bayl gur evtug unys bs gur cerivbhf neenl:
// [...31, 33, 34]
// 3) Cvpx gur zvqcbvag: 33
// 4) Gur inyhr vf ybjre guna 33, fb abj pbafvqre bayl gur yrsg unys bs gur cerivbhf neenl:
// [...31...]
// 5) Cvpx gur zvqcbvag: 31
// 6) Lbh'ir uvg gur inyhr.
// 7) Erghea gur vaqrk bs gur inyhr.

// Abgrf:
// * Vs lbh qba'g svaq gur inyhr, lbh pna erghea ahyy.
// * Vs ng nal cbvag lbh pnyphyngr gur vaqrk bs gur zvqcbvag naq trg n senpgvbany ahzore, whfg ebhaq vg qbja ("sybbe" vg).

// */

// function search(array, value) {
// }
var aa = function () {

};
console.log();
console.log();
//
//

/****************************************************************************/
console.log();
console.log(' ===== END OF PROBLEMS ===== ');    
console.log();
/****************************************************************************/
