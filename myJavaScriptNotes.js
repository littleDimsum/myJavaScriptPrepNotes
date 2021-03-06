//------------------------------------------------------------------------------
console.log();
console.log(' ========== NOTES + EXERCISES ========== ' );
console.log();
//------------------------------------------------------------------------------
console.log(' ========== NUMBERS ========== ');
console.log();
console.log(' 01: numero I ');
console.log (1 + 2); // 3
console.log (5 % 2); // 1
console.log (2 - 5); // -3
console.log (15 > 4); // true
console.log (100 * 100);
console.log (8 * 2 === 16);
console.log(isNaN(12)); // false, because it is a number
console.log(isNaN('12')); // false
console.log(isNaN('sam')); // true, because it is not a number
console.log(isNaN('sam12')); // true
console.log();
console.log();

console.log(' 02: numero II ');
console.log(Math.pow(2, 4));
console.log(Math.abs(-239));
console.log(Math.exp(0));
console.log(Math.exp(1));
console.log(Math.exp(5));
console.log(Math.ceil(3.2));
console.log(Math.floor(3.8));
console.log(Math.log(10));
console.log(Math.random());// returns a random number 0...1
console.log(Math.random(1));
console.log(Math.random(10));
console.log(Math.round(2.7));
console.log(Math.round(2.4));
console.log();
console.log();

console.log(' 03: numero III ');
console.log(Math.PI); // returns 3.141592653589793
console.log(Math.round(4.7)); // returns 5
console.log(Math.round(4.4)); // returns 4
console.log(Math.pow(8, 2)); // returns 64
console.log(Math.sqrt(64)); // returns 8
console.log(Math.ceil(4.4)); // returns 5
console.log(Math.floor(4.7)); // returns 4
console.log(Math.sin(90 * Math.PI / 180)); // returns 1 (the sine of 90 degrees)
console.log(Math.cos(0 * Math.PI / 180)); // returns 1 (the cos of 0 degrees)
console.log(Math.min(0, 150, 30, 20, -8, -200));  // returns -200
console.log(Math.max(0, 150, 30, 20, -8, -200));  // returns 150
console.log();
console.log();

console.log(' 04: numero IV ');
console.log(Math.E); // returns Euler's number
console.log(Math.PI); // returns PI
console.log(Math.SQRT2); // returns the square root of 2
console.log(Math.SQRT1_2); // returns the square root of 1/2
console.log(Math.LN2); // returns the natural logarithm of 2
console.log(Math.LN10); // returns the natural logarithm of 10
console.log(Math.LOG2E); // returns base 2 logarithm of E
console.log(Math.LOG10E); // returns base 10 logarithm of E
console.log();
console.log();

console.log(' 05: numero V ');
console.log(isFinite(-5)); // true
console.log(isFinite(Infinity)); // false
console.log(isFinite(-Infinity)); // false
console.log(isFinite('123.456')); // true
console.log(isFinite('sam'));  // false
console.log(+'12.34');  // 12.34
console.log(-'12.34' / '2'); // -6.17
console.log(+'  12');  // 12
console.log( +' \n34  \n'); // 34, 
console.log( +'12test');  // NaN
console.log();
console.log();

console.log(' 06: numero VI ');
console.log(parseFloat('123.456')); // 123.456
console.log(parseFloat(567.890)); // 567.89
console.log(parseFloat('abc123')); // NaN
console.log(parseFloat('1.23cde'));  // 1.23
console.log(parseFloat('1.23c456de'));  // 1.23
console.log(parseFloat('10'));        // returns 10
console.log(parseFloat('10.33'));     // returns 10.33
console.log(parseFloat('10 20 30'));  // returns 10
console.log(parseFloat('10 years'));  // returns 10
console.log(parseFloat('years 10'));  // returns NaN
console.log();
console.log();

console.log(' 07: numero VII ');
console.log(parseInt('123.456')); // 123
console.log(parseInt(567.890)); // 567
console.log(parseInt('abc123')); // NaN
console.log(parseInt('1.29cde'));  // 1
console.log(parseInt('12.9c456de'));  // 12
console.log(parseInt('10'));         // returns 10
console.log(parseInt('10.33'));      // returns 10
console.log(parseInt('10 20 30'));   // returns 10
console.log(parseInt('10 years'));   // returns 10
console.log(parseInt('years 10'));   // returns NaN
console.log();
console.log();

console.log(' 08: numero VIII ');
var x = 9.656;
console.log(x.toExponential(2)); // returns 9.66e+0
console.log(x.toExponential(4)); // returns 9.6560e+0
console.log(x.toExponential(6)); // returns 9.656000e+0
console.log(965.6452783.toExponential(6)); // returns 9.656000e+0
console.log(x.toFixed(0)); // returns 10
console.log(x.toFixed(2)); // returns 9.66
console.log(x.toFixed(4)); // returns 9.6560
console.log(x.toFixed(6)); // returns 9.656000
console.log(0.1 + 0.2 === 0.3); // false
console.log((0.1 * 10 + 0.2 * 10) / 10 === 0.3); // true
console.log((0.1 + 0.2).toFixed(10) === 0.3); // true / false
console.log();
console.log();

console.log(' 09: numero IX ');
console.log(x.toPrecision()); // returns 9.656
console.log(x.toPrecision(2)); // returns 9.7
console.log(x.toPrecision(4)); // returns 9.656
console.log(x.toPrecision(6)); // returns 9.65600
var k = 123;
console.log(k.valueOf()); // returns 123 from variable x
console.log((123).valueOf()); // returns 123 from literal 123
console.log((100 + 23).valueOf()); // returns 123 from expression 100 +
console.log(k.toString()); // returns 123 from variable x
console.log((123).toString()); // returns 123 from literal 123
console.log((100 + 23).toString()); // returns 123 from expression 100 + 23
console.log();
console.log();

console.log(' 10: numero X ');
x = true;
console.log(Number(x)); // returns 1
x = false;
console.log(Number(x)); // returns 0
x = new Date();
console.log(Number(x)); // returns 14xxxxxxxxxx
x = '10';
console.log(Number(x)); // returns 10
x = '10 20';
console.log(Number(x)); // returns NaN

var nums = [1, 2, 3, 4, 12, 3, 5, 2, -7, 0];
console.log('Greatest number in this array is: ', Math.max(...nums));
console.log('Greatest number in this array is: ', Math.max(1, 2, 3, 4));
//console.log(Math.max.apply(null, nums));
console.log(Math.min(1, 2, 3, 4, 12, 3, 5, 2, -7, 0));
console.log(Math.min(...nums));
//console.log(Math.min.apply(null, nums));
console.log();
console.log();
//------------------------------------------------------------------------------

console.log(' ========== STRINGS ========== ');
console.log(' 11: numero XI ');
console.log ('John');
console.log ('John'.length);
console.log ('karaoke'.length);
console.log ('Some folks are really cool!'.length);
console.log ('like a G-six!'.length > 10);
console.log ('Xiao Hui'.length < 122);
console.log('wonderful day'.substring (3, 7)); // derf
console.log ('January'.substring (0, 3)); // Jan
console.log ('Melbourne is great'.substring (0, 12));
console.log ('Hamburgers'.substring (3, 10));
console.log();
console.log();

console.log(' 12: numero XII ');
console.log('HELLO WORLD'.charAt(0)); // H
console.log('AZabHELLO WORLD'.charCodeAt(0)); // 65
console.log('AZabHELLO WORLD'.charCodeAt(1)); // 90
console.log('AZabHELLO WORLD'.charCodeAt(2)); // 97
console.log('AZazHELLO WORLD'.charCodeAt(3)); // 122
console.log(String.fromCharCode(65)); // A
console.log(String.fromCharCode(...[72, 69, 76, 76, 79])); // HELLO
var ploMan =  'peterpiper';
var ploTan = 'johnBull';
console.log(`[${ploMan}, ${ploTan}]`);
console.log(`the man is here for the ${ploMan}, and the ${ploTan}`);
console.log(/hell/gi.test('Hello world!'));
var ascii = function (a) { 
  return a.charCodeAt(0); 
};
console.log('abxyzABXYZ'.split('').map(ascii)); // [ 97, 98, 120, 121, 122, 65, 66, 88, 89, 90 ]
console.log('ergtrer'.split('').map(ascii)); // [ 101, 114, 103, 116, 114, 101, 114 ]
console.log();
console.log();

console.log(' 13: numero XIII ');
var str = 'Apple, Banana, Kiwi';
console.log(str.slice(7, 13)); // Banana; 13 specifies end point
console.log(str.slice(-12, -6)); // Banana
console.log(str.slice(7)); // slices to the end of string
console.log(str.substring(7, 13)); // Banana; 13 specifies end point
console.log(str.substr(7, 6)); // Banana; 6 specifies length
console.log('suhai '.concat('yehuza'));
console.log([1,2,3].concat([4,5,6]));
console.log('suhai'.endsWith('i'));
console.log('suhai yehuza'.endsWith('yehuza'));
console.log('suhai'.startsWith('i'));
console.log('suhai yehuza'.startsWith('yehuza'));
console.log('suhai'.includes('a'));
console.log('suhai ocran yehuza'.includes('ocran'));
console.log();
console.log();

console.log(' 14: numero XIV ');
//get all words that only start with a letter
var str1 = 'Hey 4get these words 3_please';
console.log(str1.match(/\b[a-z]+/gi)); // ['Hey', 'these', 'words']
//find the position in the str where the character A is exactly 2 spaces from B
console.log('ABxxAxxB'.search(/A..B/gi)); // 4
//Return the start and end indices.
var str2 = 'Please locate where \'locate\' occurs!';
console.log(str2.search('locate')); // 1
console.log(str2.indexOf('locate')); // first occurence
console.log(str2.lastIndexOf('locate')); // last occurence
// indexOf(), and the lastIndexOf() methods return -1 if the text is not found.
console.log('suhai ocran yehuza'.indexOf('ocran'));
console.log('suhai ocran yehuza'.indexOf('o'));
console.log('suhai ocran yehuza'.lastIndexOf('a'));
console.log('suhai ocran yehuza'.lastIndexOf('yehuza'));
console.log();
console.log();

console.log(' 15: numero XV ');
console.log('suhai'.localeCompare('yehuza'));
console.log('ocran'.localeCompare('ocran'));
console.log('yehuza'.localeCompare('suhai'));
var str = 'The rain in SPAIN stays mainly in the plain';
console.log(str.match(/ain/g));
console.log(str.match(/ain/ig));
console.log('Hello World!!! '.repeat(2));
console.log('suhai ocran yehuza'.replace('suhai', 'swy'));
console.log('suhai ocran yehuza suhai suhaibu '.replace('suhai', 'swy'));
str3 = 'Please visit Microsoft Microsoft Microsoft!';
console.log(str3.replace('Microsoft', 'W3Schools'));
console.log(str3.replace(/Microsoft/g, 'W3Schools'));
console.log('suhai ocran yehuza'.search('ocran'));
console.log('suhai ocran yehuza'.search('o'));
var fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
console.log(fruits.slice(1, 3));
console.log(fruits.slice(1, 1));
console.log(fruits.slice(1, 2));
console.log();
console.log();
 
console.log(' 16: numero XVI ');
console.log('How are you doing today?'.split(' '));
console.log('Hello world!'.substr(1, 6));
console.log('Hello world!'.substr(2, 6)); // note this
console.log('Hello world!'.substring(1, 4));
console.log('Hello world!'.substring(2, 4));
console.log('Hello planet Earth'.substr(6, 6)); // planet
console.log('An apple was eaten'.replace(/a/gi, '4')); // 4n 4pple w4s e4ten
console.log('My number is 551-555-5555'.replace(/[0-9]/gi, 'x')); // My number
console.log('Hello World!'.toLocaleLowerCase());
console.log('Hello World!'.toLowerCase());
console.log('Hello World!'.toLocaleUpperCase());
console.log('Hello World!'.toUpperCase());
console.log();
console.log();

console.log(' 17: numero XVII ');
var num = 15;
console.log(num.toString());
var str = '       Hello World!        ';
console.log(str.trim());
console.log('suhai'.valueOf());
console.log(String(false));
console.log(false.toString());
console.log(String(true));
console.log(true.toString());
// concat()	Joins two or more arrays or strings, and returns a copy of the joined arrays or strings.
// copyWithin()	Copies array elements within the array, to and from specified positions
// every()	Checks if every element in an array pass a test
// fill()	Fill the elements in an array with a static value
// filter()	Creates a new array with every element in an array that pass a test
// find()	Returns the value of the first element in an array that pass a test
// findIndex()	Returns the index of the first element in an array that pass a test
// forEach()	Calls a function for each array element
// indexOf()	Search the array for an element and returns its position
// isArray()	Checks whether an object is an array
// join()	Joins all elements of an array into a string
// lastIndexOf()	Search the array for an element, starting at the end, and returns its position
// map()	Creates a new array with the result of calling a function for each array element
// pop()	Removes the last element of an array, and returns that element
// push()	Adds new elements to the end of an array, and returns the new length
// reduce()	Reduce the values of an array to a single value (going left-to-right)
// reduceRight()	Reduce the values of an array to a single value (going right-to-left)
// reverse()	Reverses the order of the elements in an array
// shift()	Removes the first element of an array, and returns that element
// slice()	Selects a part of an array, and returns the new array
// some()	Checks if any of the elements in an array pass a test
// sort()	Sorts the elements of an array
// splice()	Adds/Removes elements from an array
// toString()	Converts an array to a string, and returns the result
// unshift()	Adds new elements to the beginning of an array, and returns the new length
// valueOf()	Returns the primitive value of an array

// strings to arrays
var txt = 'a,b,c,d,e, ,f, ,g|h|i|j, k, l';  // String
console.log(txt.split(',')); // Split on commas
console.log(txt.split(' ')); // Split on spaces
console.log(txt.split('|')); // Split on pipe
console.log();
console.log();


console.log(' ========== ARRAYS ========== ');
console.log(' 18: numero XVIII ');
console.log([1, 2, 3, 4, 5, 6, 7].slice(1, 3)); // 
console.log([1, 2, 3, 4, 5, 6, 7].splice(1, 3)); // 
console.log(['a', 'b', 'c'].concat([1, 2, 3]));
console.log([5, 4, 3, 2, 1].reverse());
//console.log('suhai yehuza'.reverse()); // note this won't work
var fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
console.log(fruits.slice(1, 3));
fruits.splice(2, 0, 'Lemon', 'Kiwi');
console.log(fruits);
// fruits.splice(2, 4, 'Lemon', 'Kiwi');
// console.log(fruits);
console.log(fruits.sort());
var points = [40, 100, 1, 5, 25, 10];
console.log(points.sort(function(a, b) { return a - b; }));
console.log(points.sort(function(a, b) { return b - a; }));
// var fruits = ['Banana', 'Orange', 'Apple', 'Mango', 'Kiwi', 'Papaya'];
// console.log(fruits.copyWithin(2, 0));
// console.log(fruits.copyWithin(0, 3));
// console.log(fruits.copyWithin(2, 0, 2));
console.log();
console.log();

console.log(' 19: numero XIX ');
var ages = [32, 33, 16, 40];
var checkAdult = function (age) { 
  return age >= 18; 
};
console.log(ages.every(checkAdult));
console.log(ages.every(Number));
console.log(ages.some(checkAdult));
console.log(ages.some(Number));
console.log(ages.filter(checkAdult));
console.log(ages.find(checkAdult));
var fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
console.log(fruits.fill('Kiwi'));
var newAges = [3, 10, 18, 20];
console.log(newAges.findIndex(checkAdult));
// var myFunction = function (item, index) {
//     return 'index[' + index + ']: ' + item; 
// };
// var numbers = [4, 9, 16, 25];
// console.log(numbers.forEach(myFunction));
// console.log(Array.isArray(numbers));
console.log(Array.isArray([1, 2, 3]));
console.log(['Banana', 'Orange', 'Apple', 'Mango'].join());
console.log(['Banana', 'Orange', 'Apple', 'Mango'].join('-'));
console.log();
console.log();

console.log(' 20: numero XX ');
var str = 'Hello planet earth, you are a great planet.';
console.log(str.lastIndexOf('planet'));
console.log([4, 9, 16, 25].map(Math.sqrt));
var fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
console.log(fruits.pop()); // the value of x is 'Mango'
console.log(fruits.push('cherry')); // note difference of output here
fruits.push('guava');
console.log(fruits); // note the difference here
console.log(fruits.push('Kiwi')); //  Adds a new element ('Kiwi') to fruits
console.log(fruits.shift()); // 4
console.log(fruits.unshift('Lemon')); // Adds a new element 'Lemon' to fruits
console.log(fruits[fruits.length] = 'avocado');   // Appends 'avocado' to fruit
console.log(fruits.shift());
console.log(fruits.unshift('apricot'));
console.log(fruits);
console.log(citrus = fruits.slice(1));
console.log(fruits.slice(3));
console.log(fruits.slice(1, 3)); // upto but not imncluding the end
console.log(fruits.splice(1, 3)); 
delete fruits[0];//Changes the first element in fruits to undefined
console.log(fruits);
// console.log(fruits.splice(2, 4, 'Lemon', 'Kiwi'));
// console.log(fruits.splice(0, 1));   // Removes the first element of fruits
var arr1 = ['Emil', 'Tobias', 'Linus'];
var arr2 = ['Robin', 'Morgan'];
console.log(['Cecilie', 'Lone'].concat(arr1, arr2));
console.log();
console.log();

console.log(' 21: numero XXI ');
var numbers = [65, 44, 12, 4];
console.log(numbers.reduce(function(tot, num) { return tot + num; }));
console.log(numbers.reduce(function(tot, num) { return tot + num; }, 0));
console.log(numbers.reduce(function(tot, num) { return tot + num; }, 1));
console.log(numbers.reduce(function(tot, num) { return tot * num; }));
console.log(numbers.reduce(function(tot, num) { return tot * num; }, 1));
console.log(numbers.reduceRight(function(a, b) { return a + b; }, 0));
console.log(numbers.reduceRight(function(a, b) { return a * b; }, 1));

//reduceRight(callback[, initialValue]) works like reduce(), but starts with the last element. The reduceRight() method reduces the array to a single value.
//The reduceRight() method executes a provided function for each value of the array (from right-to-left). The return value of the function is stored in an accumulator (result/total). reduce and reduceRight are the least obvious of the iterative array methods. They should be used for algorithms that combine two values recursively in order to reduce a sequence down to a single value.

var numbers = [2, 45, 30, 100];
getSum1 = function (total, num) {
  return total + num;
};
getSum2 = function (total, num) {
  return total - num;
};
getProd1 = function (total, num) {
  return total * num;
};
getProd2 = function (total, num) {
  return total / num;
};
console.log(numbers.reduceRight(getSum1));
console.log(numbers.reduce(getSum1));
console.log(numbers.reduceRight(getSum2));
console.log(numbers.reduce(getSum2));
console.log(numbers.reduceRight(getProd1));
console.log(numbers.reduce(getProd1));
console.log(numbers.reduceRight(getProd2));
console.log(numbers.reduce(getProd2));
console.log();
console.log();

console.log(' 22: numero XXII ');
//Array methods
//The Array object has the following methods:
//concat() joins two arrays and returns a new array.
var myArray = new Array('1', '2', '3');
console.log(myArray.concat('a', 'b', 'c'));
// myArray is now ['1', '2', '3', 'a', 'b', 'c']
//join(deliminator = ',') joins all elements of an array into a string.
var powerArray = new Array('Wind', 'Rain', 'Fire');
console.log(powerArray.join(' - ')); // list is 'Wind - Rain - Fire'

//push() adds one or more elements to the end of an array and returns the resulting length of the array.
console.log(myArray.push('4')); // myArray is now ['1', '2', '3', '4']

//pop() removes the last element from an array and returns that element.
console.log(myArray.pop());
// myArray is now ['1', '2', '3'], last = '4'

//shift() removes the first element from an array and returns that element.
console.log(myArray.shift());
// myArray is now ['2', '3'], first is '1'

//unshift() adds one or more elements to the front of an array and returns the new length of the array.
myArray.unshift('4', '5'); // myArray becomes ['4', '5', '2', '3']
console.log(myArray);

//slice(start_index, upto_index) extracts a section of an array and returns a new array.
var alphArray = new Array ('a', 'b', 'c', 'd', 'e');
console.log(alphArray.slice(1, 4)); // starts at index 1 and extracts all elements until index 3, returning [ 'b', 'c', 'd']

//splice(index, count_to_remove, addElement1, addElement2, ...) removes elements from an array and (optionally) replaces them. It returns the items which were removed from the array.
var numArray = new Array ('1', '2', '3', '4', '5');
numArray.splice(1, 3, 'a', 'b', 'c', 'd');
console.log(numArray); // myArray is now ['1', 'a', 'b', 'c', 'd', '5']
// This code started at index one (or where the '2' was),
// removed 3 elements there, and then inserted all consecutive
// elements in its place.

//reverse() transposes the elements of an array: the first array element becomes the last and the last becomes the first.
console.log(['1', '2', '3'].reverse());
// transposes the array so that myArray = [ '3', '2', '1' ]

//sort() sorts the elements of an array.
console.log(['Wind', 'Rain', 'Fire'].sort());
// sorts the array so that myArray = [ 'Fire', 'Rain', 'Wind' ]
//sort() can also take a callback function to determine how array elements are compared. The function compares two values and returns one of three values:
//For instance, the following will sort by the last letter of a string:

console.log(['Wind', 'Rain', 'Fire'].sort());
// sorts the array so that myArray = [ 'Fire', 'Rain', 'Wind' ]
console.log();
console.log();

console.log(' 23: numero XXIII ');
var sortFn = function (a, b) {
  if (a[a.length - 1] < b[b.length - 1]) { return -1; }
  if (a[a.length - 1] > b[b.length - 1]) { return 1; }
  if (a[a.length - 1] === b[b.length - 1]) { return 0; }
};
console.log(['Wind', 'Rain', 'Fire'].sort(sortFn));
// sorts the array so that myArray = ['Wind','Fire','Rain']
//if a is less than b by the sorting system, return -1 (or any negative number)
//if a is greater than b by the sorting system, return 1 (or any positive number)
//if a and b are considered equivalent, return 0.

//indexOf(searchElement[, fromIndex]) searches the array for searchElement and returns the index of the first match.
var points = [40, 100, 1, 5, 25, 10];
console.log(points.sort(function(a, b) { return a - b; }));
var a = ['a', 'b', 'a', 'b', 'a', 'b', 't', 'b', 'y', 'm', 'b'];
console.log(a.indexOf('b')); // logs 1
// Now try again, starting from after the last match
console.log(a.indexOf('b', 2)); // logs 3
//console.log(a.indexOf('b', 4)); // logs 
console.log(a.indexOf('z')); // logs -1, because 'z' was not found
//lastIndexOf(searchElement[, fromIndex]) works like indexOf, but starts at the end and searches backwards.

//forEach(callback[, thisObject]) executes callback on every array item.
var a = ['a', 'b', 'c'];
a.forEach(function(element) { console.log(element); } );
// logs each item in turn
var colors = ['red', 'green', 'blue'];
colors.forEach(function(color) {
  //console.log(color);
});

//map(callback[, thisObject]) returns a new array of the return value from executing callback on every array item.
var a1 = a.map(function(item) { return item.toUpperCase(); });
console.log(a1); // logs ['A', 'B', 'C']

//filter(callback[, thisObject]) returns a new array containing the items for which callback returned true.
var a2 = ['a', 10, 'b', 20, 'c', 30];
var a3 = a2.filter(function(item) { return typeof item === 'number'; });
console.log(a3); // logs [10, 20, 30]
var a4 = a2.map((function(item) { return typeof item === 'number'; }));
console.log(a4); // logs [10, 20, 30]

//every(callback[, thisObject]) returns true if callback returns true for every item in the array.
var isNumber = function (value) {
  return typeof value === 'number';
};
var a1 = [1, 2, 3];
console.log(a1.every(isNumber)); // logs true
var a2 = [1, '2', 3];
console.log(a2.every(isNumber)); // logs false
//some(callback[, thisObject]) returns true if callback returns true for at least one item in the array.
console.log(a1.some(isNumber));
console.log(a2.some(isNumber));
var a3 = ['1', '2', '3'];
console.log(a3.some(isNumber));

//The methods above that take a callback are known as iterative methods, because they iterate over the entire array in some fashion. Each one takes an optional second argument called thisObject. If provided, thisObject becomes the value of the this keyword inside the body of the callback function. If not provided, as with other cases where a function is invoked outside of an explicit object context, this will refer to the global object (window).

//The callback function is actually called with three arguments. The first is the value of the current item, the second is its array index, and the third is a reference to the array itself. JavaScript functions ignore any arguments that are not named in the parameter list so it is safe to provide a callback function that only takes a single argument, such as alert.

//reduce(callback[, initialValue]) applies callback(firstValue, secondValue) to reduce the list of items down to a single value.
console.log();
console.log();

console.log(' 24: numero XXIV ');
//Multi-dimensional arrays
//Arrays can be nested, meaning that an array can contain another array as an element. Using this characteristic of JavaScript arrays, multi-dimensional arrays can be created.
//The following code creates a two-dimensional array.
var a = new Array(4);
for (var i = 0; i < 4; i++) {
  a[i] = new Array(4);
  for (var j = 0; j < 4; j++) {
    (a[i][j] = '[' + i + ', ' + j + ']');
  }
}
console.log(a);
//This example creates an array with the following rows:
//Row 0: [0,0] [0,1] [0,2] [0,3]
//Row 1: [1,0] [1,1] [1,2] [1,3]
//Row 2: [2,0] [2,1] [2,2] [2,3]
//Row 3: [3,0] [3,1] [3,2] [3,3]
console.log();
console.log();

console.log(' ========== OBJECTS / HASHES ========== ');
console.log(' 25: numero XXV ');
var myObj = new Object ();
myObj.name = 'john';
myObj.age = 22;
myObj.height = 5.6;
console.log(myObj);

for (var key in myObj) {
  //console.log(key);
}

for (var key in myObj) {
  //console.log(myObj[key]);
}

var yrObj = {};
yrObj['name'] = 'mary';
yrObj['age'] = 19;
yrObj['height'] = 5.3;
console.log(yrObj);

// Create a function multiplyNumeric which gets an object and multiplies all numeric properties by 2. It should work like this:
// before call
var menu = {
  width: 200, 
  height: 300,
  title: 'My menu'
};
// multiplyNumeric(menu)
// after call
// menu = {
//   width: 400,
//   height: 600,
//   title: 'My menu'
// };
// P.S. The function to check for numericality:
// The solution below uses !isNaN(x) to check for a number.  
var isNumeric = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};
//----------------------------------------------------------
var multiplyNumeric = function (obj) {
  for (var key in obj) {
    var val = obj[key];
    if (isNumeric(val)) {
      obj[key] = val * 2;
    }
  }
  return obj;
};
console.log(multiplyNumeric(menu));
console.log('The menu width = ' + menu.width + ', height = ' + menu.height + ', and title = ' + menu.title);
console.log();
console.log();

console.log(' 26: numero XXVI ');
var Animal = function (name, age) {
  this.name = name;
  this.age = age;
  this.sound = 'woof! woooof!!';
  this.canDance = false;
};

var tom = new Animal ('Arrow', 18);
console.log(tom.name); // Arrow
console.log(tom.age); // 18
console.log(tom.sound); // woof! woooof!!
console.log(tom.canDance); // true

var jerry = new Animal ('Loki', 10);
jerry.sound = 'meowww';
jerry.canJump = true;
console.log(jerry.name); // Loki
console.log(jerry.age); // 10
console.log(jerry.sound); // meowww
console.log(jerry.canDance); // true
//
console.log(tom); // 
console.log(jerry); //  
console.log();
console.log();

console.log(' 27: numero XXVII ');
var valueKey = function (hash, value) {
  for (var key in hash) {
    if (hash[key] === value) {
      return key;
    }
  }
};
//----------------------------------------------------------
var valueKeyKey = function (hash, intKey, value) {
  for (var key in hash) {
    if (hash[key][intKey] === value) {
      return key;
    }
  }
};
//----------------------------------------------------------
var boys = {
  'simon Peter': 18,
  'andrew': 20,
  'james': 30,
  'john': 50
};
console.log(valueKey(boys, 18)); // simon Peter
console.log(valueKey(boys, 20)); // andrew
console.log(valueKey(boys, 30)); // james
console.log(valueKey(boys, 40)); // undefined
//
var girls = {
  'mary': { 'age': 19, 'hair': 'brown', 'height': 5.5 },
  'sarah': { 'age': 21, 'hair': 'black', 'height': 5.6},
  'anna': { 'age': 23, 'hair': 'blonde', 'height': 5.7}
};
console.log(valueKeyKey(girls, 'age', 19)); // mary
console.log(valueKeyKey(girls, 'hair', 'black')); // sarah
console.log(valueKeyKey(girls, 'height', 5.7)); // anna
console.log(valueKeyKey(girls, 'eyes', 'hazel')); // undefined
console.log();
console.log();

console.log(' 28: numero XXVIII ');
var customerData = {
  'Joe': {
    visits: 1
  },
  'Carol': {
    visits: 2
  },
  'Howard': {
    visits: 3,
  },
  'Carrie': {
    visits: 4
  }
};
//
var greetCustomer = function (firstName) {
  var greeting = '';
  var name = customerData[firstName];
  if (name === undefined) {
    greeting = 'Welcome! Is this your first time?';
  } else if (name.visits === 1) {
    greeting = 'Welcome back, ' + firstName + '! We\'re glad you liked us the first time!';
  } else if (name.visits >= 2) {
    greeting = 'Welcome back, ' + firstName + '! So glad to see you again!';
  }
  return greeting;
};
console.log(greetCustomer('Terrance'));
console.log(greetCustomer('Joe'));
console.log(greetCustomer('Carol'));
console.log(greetCustomer('Howard'));
console.log(greetCustomer('Carrie'));
console.log();
console.log();

console.log(' 29: numero XXIX ');
var people1 = [
   { name: 'Bob', scores: [1, 2, 3, 4] },
   { name: 'Jerry', scores: [10, 3, 2] },
   { name: 'Anthony', scores: [5, 7, 9] },
   { name: 'Jimmy', scores: [4, 4, 4, 4] },
   { name: 'Swy', scores: [41, 44, 45, 49] }
];
//
var people2 = [
   { name: 'Tim', scores: [10] },
   { name: 'Nat', scores: [4] },
   { name: 'Jimmy', scores: [4, 4, 4, 4] }
];
var bestScore = function(array) {
  var name1 = undefined;
  var sum1 = -Infinity;
  array.forEach (function(element) {
    var score = element.scores;
    var sum = score.reduce(function(a, b) {
      return a + b;
    });
    if (name1 === undefined) {
      name1 = element.name;
      sum1 = sum;
    } else if (sum > sum1) {
      name1 = element.name;
      sum1 = sum;
    }
  });
  return '[' + name1 + ': ' + sum1 + ']';
};
console.log(bestScore(people1)); // 'Swy'
console.log(bestScore(people2)); // 'Jimmy'
console.log();
console.log();

console.log(' 30: numero XXX ');
// switch()
var foo = 1;
switch(foo) {
case -1:
  console.log('negative 1');
  break;
case 0:
  console.log(0);
  break;
case 1:
  console.log(1);
  break; // it encounters this break so will not continue into 'case 2:'
case 2:
  console.log(2);
  break;
default:
  console.log('default');
}

var Animal = 'Giraffe';
switch(Animal) {
case 'Cow':
case 'Giraffe':
case 'Dog':
case 'Pig':
  console.log('This animal will go on Noah\'s Ark.');
  break;
case 'Dinosaur':
default:
  console.log('This animal will not.');
};
console.log();
console.log();
//------------------------------------------------------------------------------


/***********************************************************************/
console.log(' ===== HIGHER ORDER FUNCTIONS ===== ');
/***********************************************************************/
console.log('Map, reduce, and filter - JavaScript functional programming');
console.log();
//Three functions that are commonly used when applying functional programming techniques in Javascript are the map, reduce, and filter functions. We'll go over each below and explain how they work.
console.log(' ========== Map ========== ');
//The map function creates a new array by calling a specific function on each element in an initial array. For example, if you have an array of strings in the form 'MM-DD' that represent birthdays and you want to convert each element to be in a different format, you could use the map function to create a new array with new elements.
var bdays = ['08-14', '10-04', '04-21'];
// we want a new array where the birthdays will be in the format: MM/DD
// the elem parameter will be each element from the original array
var bdays2 = bdays.map(function(elem) {
  return elem.replace('-', '/');
});
console.log(bdays2); // => ['08/14', '10/04', '04/21']

//Another simple example using the map function to round an array of numbers up in JavaScript:
var arr = [1.5, 2.56, 5.1, 12.33];
// round each number up in an array
var rounded = arr.map(Math.ceil);
console.log(rounded); // => [2, 3, 6, 13]

console.log(' ========== Reduce ========== ');
//The reduce function applies a specific function to all the elements in an
//array and reduces it to a single value. The reduce function has actually been
//used in several of the challenge solutions, one example being Mean Mode. We
//can use the reduce function to add up all the numbers in an array for example.
//The four arguments the reduce function takes are:
//1) previous value
//2) current value
//3) current index
//4) original array
var nums = [1, 2, 3, 4];
var sum = nums.reduce(function(prevVal, curVal, curIndex, origArr) {
  return prevVal + curVal;
});
console.log(sum); // => 10

console.log(' ========== Filter ========== ');
//The filter function creates a new array with all elements from an original array that pass a certain functions test. For example, you can use the filter function to create a new array of only positive values, like below. The function being called takes in an argument which is the value of the current element in the array.
var nums = [-4, 3, 2, -21, 1];
var pos = nums.filter(function(el) {
  return el > 0;
});
console.log(pos); // => [3, 2, 1]
//You can also, for example, filter out all objects in a data file that have incorrect or undefined values. In the example below, we filter out all elements that have an incorrect age value.
var data = [
  {name: 'daniel', age: 45},
  {name: 'john', age: 34},
  {name: 'robert', age: null},
  {name: 'jen', age: undefined},
  {name: null, age: undefined}
];
// dataMod will now contain only the first two objects in the data array
var dataMod = data.filter(function(el) {
  if (el.name !== undefined && el.age !== undefined) {
    return true;
  } else {
    return false;
  }
});
console.log(dataMod);

var optFunc = function (array) {
  var tempData = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i].name !== null && array[i].age !== undefined) {
      tempData.push(array[i]);
    }
  }
  return tempData;
}
console.log(optFunc(data));



//****************************************************************************
console.log(' ===== HACKREACTOR STYLE QUESTIONS ===== ');
//******************************************************************************
// Write a function transpose(array), which will convert between the row-oriented and
// column-oriented representations of a two-dimensional array. Assume square arrays.
//
// Use Array#forEach.
//
// Example:
// var arr1 = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8]
//   ]
//
// Example Transpose Question:
var arr1 = [[0, 1, 2], [3, 4, 5], [6, 7, 8]];
var arr2 = [[0, 3, 6], [1, 4, 7], [2, 5, 8]];
var transPose = function (array) {
  var result = [];
  var arrLength = array.length
  for (var i = 0; i < arrLength; i++) {
    var tempResult = [];
    for (var j = 0; j < arrLength; j++) {
      tempResult.push(array[j][i]);
    }
    result.push(tempResult);
  }
  return result;
};
console.log(transPose(arr1)); // [[0, 3, 6], [1, 4, 7], [2, 5, 8]]
console.log(transPose(arr2)); // [[0, 1, 2], [3, 4, 5], [6, 7, 8]]
console.log();

// Part 1
/*****************************************************************************
// Write a function myInject(arr, cb, accum) which takes an array of numbers, a function and
// an optional initial accumulator value. If no value is given for accum, set the
// initial accumulator value to be 0.
//
// myInject passes the callback function:
//  - the current accumulator value
//  - every element,
//  - its corresponding index,
//  - the array itself
//
// The accumulator value is updated to be the result of calling the
// callback function on each element. When all elements have been processed, the
// accumulator value is returned.
//
// Use Array#forEach.
//
// Examples:
// var result1 = myInject([1,2,3], function(accum, ele, i, arr) {
//    return accum + (ele * 2);
// }, 1);
//
// result1 === 13 // 1 + (1 * 2) + (2 * 2) + (3 * 2)
//
// var result2 = myInject([1,2,3], function(accum, ele, i, arr) {
//   return accum + ele + i;
// });
//
// result2 === 9 // 0 + (1 + 0) + (2 + 1) + (3 + 2)
*****************************************************************************/

// Write  function `bestScore(arr)` that expects an array of objects as an argument. See the `people`
// array for an example of how the input data will look. The function should return the person's name
// whose scores sum to the highest number.
//
// Use your #myInject function.
// Examples:
var people1 = [
   { name: 'Bob', scores: [1, 2, 3, 4] },
   { name: 'Jerry', scores: [10, 3, 2] },
   { name: 'Anthony', scores: [5, 7, 9] },
   { name: 'Jimmy', scores: [4, 4, 4, 4] },
   { name: 'Swy', scores: [41, 44, 45, 49] }
];

var people2 = [
   { name: 'Tim', scores: [10] },
   { name: 'Nat', scores: [4] },
   { name: 'Jimmy', scores: [4, 4, 4, 4] }
];
var bestScore = function(array) {
  var name1 = undefined;
  var sum1 = -Infinity;
  array.forEach (function(element) {
    var score = element.scores;
    var sum = score.reduce(function(a, b) {
      return a + b;
    });
    if (name1 === undefined) {
      name1 = element.name;
      sum1 = sum;
    } else if (sum > sum1) {
      name1 = element.name;
      sum1 = sum;
    }
  });
  return '[' + name1 + ': ' + sum1 + ']';
};
console.log(bestScore(people1)); // 'Swy'
console.log(bestScore(people2)); // 'Jimmy'


console.log(' ===== 3 COMMON JAVASCRIPT QUESTIONS ===== ');
/*
A lecturer at Hack Reactor made this comment on Quora in response to a question
about preparing for the Hack Reactor admission's challenge:

One big thing that will help you: get intimately familiar with the concepts of recursion and JavaScript closures ... they will come up early in your interactions with Hack Reactor (and are just great things to understand in general).

Below we'll cover some common questions dealing with closures. In another post
we'll cover some recursion questions with solutions.

Sources
https://www.quora.com/How-did-you-prepare-for-Hack-Reactors-admissions-challenge
*/

//Questions
//1. What will the following code output?
//for (var i = 0; i < 3; i++) {
  //setTimeout(function() { alert(i); }, 1000 + i);
//}

//Answer
//The goal of the code above is to alert the numbers 0, 1, and 2 each after 1, 1.1, and 1.2 seconds, respectively. The problem though, is that if you run the above code in your console, you actually get the number 3 alerted 3 times after 1, 1.1, and 1.2 seconds. This is because of an issue with JavaScript closures. Click here to run the above code and see the output for yourself.

//A JavaScript closure is when an inner function has access to its outer enclosing function's variables and properties. In the code above, the following line of code:
//setTimeout(function() { alert(i); }, 1000 + i);
//uses a variable i which is declared outside of itself. The variable i is actually declared within the for loop and the inner function accesses it. So when the for loop is done running, each of the inner functions refers to the same variable i, which at the end of the loop is equal to 3. Our goal is for each inner function to maintain its reference to the variable i without the value of it being altered. We'll solve this using an IIFE, or an immediately-invoked function expression.
//for (var i = 0; i < 3; i++) {
  //setTimeout(function(i_local) {
    //return function() { alert(i_local); };
  //}(i), 1000 + i);
//}
//We pass the variable i into the outer function as a local variable named i_local, where we then return a function that will alert the i_local for us. This should now correctly alert the numbers 0, 1, and 2 in the correct order. Click here to run this new code.
console.log();

//2. Write a function that would allow you to do this.
//var addSix = createBase(6);
//addSix(10); // returns 16
//addSix(21); // returns 27
//Answer
//You can create a closure to keep the value passed to the function createBase even after the inner function is returned. The inner function that is being returned is created within an outer function, making it a closure, and it has access to the variables within the outer function, in this case the variable baseNumber.
createBase = function (baseNumber) {
  return function(N) {
    // we are referencing baseNumber here even though it was declared
    // outside of this function. Closures allow us to do this in JavaScript
    return baseNumber + N;
  };
};
var addSix = createBase(6);
console.log(addSix(10));
console.log(addSix(21));
console.log();

//3. How would you use a closure to create a private counter?
//Answer
//You can create a function within an outer function (a closure) that allows you to update a private variable but the variable wouldn't be accessible from outside the function without the use of a helper function.
counter = function () {
  var _counter = 0;
  // return an object with several functions that allow you
  // to modify the private _counter variable
  return {
    add: function(increment) { _counter += increment; },
    retrieve: function() { return 'The counter is currently at: ' + _counter; }
  };
};
// error if we try to access the private variable like below
// _counter;
// usage of our counter function
var c = counter();
console.log(c.add(5));
console.log(c.add(9));
// now we can access the private variable in the following way
console.log(c.retrieve()); // => The counter is currently at: 14
console.log();
console.log();


console.log(' ===== 10 COMMON JAVASCRIPT INTERVIEW QUESTIONS ===== ');
//10 common JavaScript interview questions

//1. How would you check if a number is an integer?
//Answer
//A very simply way to check if a number is a decimal or integer is to see if there is a remainder left when you divide by 1.
isInt = function (num) {
  return num % 1 === 0;
};
console.log(isInt(4)); // true
console.log(isInt(12.2)); // false
console.log(isInt(0.3)); // false
console.log();


//2. What will the following code output?
//(function() {
//  var a = b = 5;
//})();
//console.log(b);
//Answer
//The code above will output 5 even though it seems as if the variable was declared within a function and can't be accessed outside of it. This is because
//var a = b = 5;
//is interpreted the following way:
//var a = b;
//var b = 5;
//But b is not declared anywhere in the function with var so it is set equal to 5 in the global scope.
console.log();

//3. Write a function that would allow you to do this.
//multiply(5)(6);
//Answer
//You can create a closure to keep the value of a even after the inner function is returned. The inner function that is being returned is created within an outer function, making it a closure, and it has access to the variables within the outer function, in this case the variable a.
multiply = function (a) {
  return function(b) {
    return a * b;
  };
};
console.log(multiply(5)(6));
console.log();

//4. When would you use the bind function?
//Answer
//A good use of the bind function is when you have a particular function that you want to call with a specific this value. You can then use bind to pass a specific object to a function that uses a this reference.
fullName = function () {
  return 'Hello, this is ' + this.first + ' ' + this.last;
};
console.log(fullName()); // => Hello this is undefined undefined

// create a person object and pass its values to the fullName function
var person = {first: 'Foo', last: 'Bar'};
console.log(fullName.bind(person)()); // => Hello this is Foo Bar
console.log();

//5. What does 'use strict' do?
//Answer
//The 'use strict' literal is entered at the top of a JavaScript program or at the top of a function and it helps you write safer JavaScript code by throwing an error if a global variable is created by mistake. For example, the following program will throw an error:
//function doSomething(val) {
  //'use strict';
 //var x = val + 10;
//}
//It will throw an error because x was not defined and it is being set to some value in the global scope, which isn't allowed with 'use strict' The small change below fixes the error being thrown:
doSomething = function (val) {
  'use strict';
  var x = val + 10;
  //return x;
};
//console.log(doSomething(10));
console.log();

//6. What is the difference between == and ===?
//Answer
//The difference is that == performs implicit type conversion to check if values are equal to each other. So it will convert the values to true or false boolean values and then compare them. Below are some weird results of this implicit type conversion using the double equal operator:
console.log('1' == 1); // true
console.log(true == 1); // true
console.log([] == false); // true
console.log('' == false); // true
console.log(undefined == null); // true
console.log();
//This can really cause some problems when you're writing JavaScript, so the safe thing to do is use the triple equal operator instead, which checks that the two values are of the same type and does not perform type conversion.
console.log('1' === 1); // false
console.log(true === 1); // false
console.log([] === false); // false
console.log('' === false); // false
console.log(undefined === null); // false
console.log();

//7. How would you add your own method to the Array object so the following code would work?
var arr = [1, 2, 3, 4, 5];
//var avg = arr.average();
//console.log(avg);
//Answer
//JavaScript is not class based, but it is a prototype-based language. This means that each object is linked to another object, its prototype, and it inherits its methods. You can follow the prototype chain for each object up until you reach the null object which has no prototype. We need to add a method to the global Array object, and we will do this by modifying the Array prototype.
Array.prototype.average = function() {
  // calculate sum
  var sum = this.reduce(function(prev, cur) { return prev + cur; });
  // return sum divided by number of elements
  return sum / this.length;
};
var arr = [1, 2, 3, 4, 5];
var avg = arr.average();
console.log(avg); // => 3
console.log();
// Now every array that is created will have the average method inherited along with every other Array method. But, you need to be careful with modifying the prototype of an object, because you can mistakenly overwrite a common method. Another way would be to do the process below:

var average2 = function() {
  // calculate sum
  var sum = this.reduce(function(prev, cur) { return prev + cur; });
  // return sum divided by number of elements
  return sum / this.length;
};
var arr2 = [11, 12, 13, 14, 15];
var avg2 = average2.bind(arr2)();
console.log(avg2); // => 13


//8. Explain what a callback function is and provide a simple example.
//Answer
//A callback function is a function that is passed to another function as an argument and is executed after some operation has been completed. Below is an example of a simple callback function that logs to the console after some operations have been completed.
var modifyArray = function (arr, callback) {
  // do something to arr here
  arr.push(100);
  // then execute the callback function that was passed
  callback();
};
var arr = [1, 2, 3, 4, 5];
modifyArray(arr, function() {
  console.log('array has been modified', arr);
});
console.log();

//9. What will the following code output?
console.log(0.1 + 0.2 === 0.3);
//Answer
//This will surprisingly output false because of floating point errors in internally representing certain numbers. 0.1 + 0.2 does not nicely come out to 0.3 but instead the result is actually 0.30000000000000004 because the computer cannot internally represent the correct number. One solution to get around this problem is to round the results when doing arithmetic with decimal numbers.
console.log();

//10. How would you create a private variable in JavaScript?
//Answer
//To create a private variable in JavaScript that cannot be changed you need to create it as a local variable within a function. Even if the function is executed the variable cannot be accessed outside of the function. For example:
func = function () {
  var priv = 'secret code';
};
//console.log(priv); // throws error
//To access the variable, a helper function would need to be created that returns the private variable.
var func = function () {
  var priv = 'secret code';
  return function() {
    return priv;
  };
};
var getPriv = func();
console.log(getPriv()); // => secret code
console.log();
console.log();


console.log(' ===== MORE QUESTIONS ===== ');
//==============================================================================
//Question
//Suppose you want climb a staircase of N steps, and on each step you can take either 1 or 2 steps. How many distinct ways are there to climb the staircase?
//For example, if you wanted to climb 4 steps, you can take the following distinct number of steps:
//1) 1, 1, 1, 1
//2) 1, 1, 2
//3) 1, 2, 1
//4) 2, 1, 1
//5) 2, 2
//So there are 5 distinct ways to climb 4 steps. We want to write a function, using recursion, that will produce the answer for any number of steps.
//Solution
//We'll try to build up a list of solutions for N starting from the smallest staircase. If we want to climb a staircase of 1 step (N = 1), then we can only take 1 step to reach the top. Therefore, the solution when N = 1 is 1. If we want to climb a staircase of 2 steps (N = 2), we can take either 2 steps, or 1 step and 1 step to reach the top. So for N = 2, the solution is 2.
var countSteps = function (N) {
  // just as in our solution explanation above, we know that to climb 1 step
  // there is only 1 solution, and for 2 steps there are 2 solutions
  if (N === 1) { return 1; }
  if (N === 2) { return 2; }
  // for all N > 2, we add the previous (N - 1) + (N - 2) steps to get
  // an answer recursively
  return countSteps(N - 1) + countSteps(N - 2);
};
// the solution for N = 6 will recursively be solved by calculating
// the solution for N = 5, N = 4, N = 3, and N = 2 which we know is 2
console.log(countSteps(1));
console.log(countSteps(2));
console.log(countSteps(3));
console.log(countSteps(4));
console.log(countSteps(5));
console.log(countSteps(6));
console.log(countSteps(7));
console.log(countSteps(10));
console.log();

// In All Strings
//
// Write a function inAllStrings(longStrings, shortString).
// Check if a shortString is a substring of ALL of the strings in longStrings.
//
// Examples:
// inAllStrings(['thisisaverylongstring', 'thisisanotherverylongstring'], 'sisa') => true
// inAllStrings(['thisisaverylongstring', 'thisisanotherverylongstring'], 'isan') => false
// inAllStrings(['gandalf', 'aragorn', 'sauron'], 'sam') => false
// inAllStrings(['axe', 'ajax', 'axl rose'], 'ax') => true

var inAllStrings = function (longStrings, shortString){
  for (var i = 0; i < longStrings.length; i++) {
    if (longStrings[i].indexOf(shortString) === -1){
      return false;
    }
  }
  return true;
};
console.log(inAllStrings(['axe', 'ajax', 'axl rose'], 'ax')); // true
console.log(inAllStrings(['gandalf', 'aragorn', 'sauron'], 'sam')); // false
console.log();


// Write a function repeatedChars(word) which takes a string
// and returns an array of all the characters in word that
// appear in a streak (i.e. more than once consecutively).
// Case-sensitive.
//
// Examples:
// repeatedChars('aaabaa') => ['a', 'a']
// repeatedChars('mississippi') => ['s', 's', 'p']
// repeatedChars('SSassSS') => ['S', 's', 'S']

var repeatedChars = function (word){
  var array = [];
  for (var i = 1; i < word.length; i++){
    if (word[i] === word[i-1]){
      if (word[i] !== word[i+1]){
        array.push(word[i]);
      }
    }
  }
  return array;
};
console.log(repeatedChars('aaabaa')); // => ['a', 'a']
console.log(repeatedChars('mississippi')); // => ['s', 's', 'p']
console.log(repeatedChars('SSassSS')); // => ['S', 's', 'S']
console.log();
//-----------------------------------------------------------
var repeatedChars = function (word){
  var array = [];
  for (var i = 1; i < word.length; i++){
    if (word[i] === word[i-1]){
      if (array.includes(word[i]) === false) {
        array.push(word[i]);
      }
    }
  }
  return array;
};
console.log(repeatedChars('aaabaa')); // => ['a']
console.log(repeatedChars('mississippi')); // => ['s', 'p']
console.log(repeatedChars('SSassSS')); // => ['S', 's']
console.log();

// Write a function oneOffWords(word, dictionary) which takes
// a string called word and an array of strings called dictionary.
// It returns an array of all the words in dictionary of the same
// length that are one letter different.
//
// Examples:
// oneOffWords('cat', ['cat', 'fat', 'flat', 'tar']) => ['fat', 'tar']
// oneOffWords('will', ['wilt', 'willow', 'wail']) => ['wilt', 'wail']
var oneOffWords = function (word, dictionary){
  var array = [];
  for (var i = 0; i < dictionary.length; i++){
    var currWord = dictionary[i];
    var count = 0;
    if (word.length === currWord.length) {
      for (var j = 0; j < currWord.length; j++){
      var currL = currWord[j];
        if (word.indexOf(currL) !== -1){
          count += 1;
        }
      }
      if (count === word.length - 1){
        array.push(currWord);
      }
    }

  }
  return array;
};
console.log(oneOffWords('cat', ['cat', 'fat', 'flat', 'tar'])); // => ['fat', 'tar']
console.log(oneOffWords('will', ['wilt', 'willow', 'wail'])); // => ['wilt', 'wail']
console.log();

// Vigenere Cipher
//
// Caesar's cipher takes a word and encrypts it by offsetting each letter in
// the word by a fixed number, the key. For a key of 3, for example:
// a -> d, p -> s, and y -> b
//
// Vigenere's Cipher is a Caesar cipher, but instead of a single key, a sequence
// of keys is used. For example, if we encrypt 'bananasinpajamas' with the
// key sequence [1, 2, 3], the result would be 'ccqbpdtkqqcmbodt':
//
// Word:   b a n a n a s i n p a j a m a s
// Keys:   1 2 3 1 2 3 1 2 3 1 2 3 1 2 3 1
// Cipher: c c q b p d t k q q c m b o d t
//
// Write a method vigenereCipher(string, keySequence, alphabet) that takes a
// string and a key-sequence, returning the encrypted word.
//
// We're giving you the alphabet as an array if you need it.
//
// Examples:
// vigenereCipher('toerrishuman', [1], alphabet) => 'upfssjtivnbo'
// vigenereCipher('toerrishuman', [1, 2], alphabet) => 'uqftsktjvobp'
// vigenereCipher('toerrishuman', [1, 2, 3], alphabet) => 'uqhstltjxncq'

//console.log('AZazHELLO WORLD'.charCodeAt(3)); => 90
//console.log(String.fromCharCode(...[72, 69, 76, 76, 79])); => HELLO
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var vigenereCipher = function (string, keySequence, alphabet){
  var arrHolder = [];
  for (var i = 0; i < string.length; i++) {
      arrHolder.push(string.charCodeAt(i) + keySequence[i % keySequence.length])
  }
  return String.fromCharCode(...arrHolder);
};
console.log(vigenereCipher('toerrishuman', [1], alphabet) === 'upfssjtivnbo');
console.log(vigenereCipher('toerrishuman', [1, 2]) === 'uqftsktjvobp');
console.log(vigenereCipher('toerrishuman', [1, 2, 3]) === 'uqhstltjxncq');
console.log(vigenereCipher('fraframatingotirtiryabulation', [1]));
console.log(vigenereCipher('fraframatingotirtiryabulation', [1, 3]));
console.log(vigenereCipher('fraframatingotirtiryabulation', [1, 7, 2, 13, 99]));
console.log();

/*------------------------------------------------------------------------------
// Write a function factorial(n) which takes a number and
// returns the factorial of n. A factorial is the product of
// all whole numbers between 1 and n, inclusive.
//
// Examples:
// factorial(1) => 1 (1 * 1))
// factorial(5) => 120 (5 * 4 * 3 * 2 * 1)
------------------------------------------------------------------------------*/

/*------------------------------------------------------------------------------
// Biodiversity
//
// Given an array of specimens, write a function biodiversity(ary) which
// returns the biodiversity index of the argument passed in. The biodiversity
// index is defined by the following formula:
//
// biodiversityIndex = numberOfSpecies ^ 2 * smallestPopulationSize / largestPopulationSize
//
// Examples:
// biodiversity(['cat']) => 1
// biodiversity(['cat', 'cat', 'cat']) => 1 (1 ^ 2 * 3 / 3)
// biodiversity(['cat', 'cat', 'dog']) => 2 (2 ^ 2 * 1 / 2)
// biodiversity(['cat', 'fly', 'dog']) => 9
// biodiversity(['cat', 'fly', 'dog', 'dog', 'cat', 'cat']) => 3

------------------------------------------------------------------------------*/
var bioDiversity = function (array) {
  var speciesList = {};
  for (var i = 0; i < array.length; i++) {
    if (speciesList[array[i]] === undefined) {
      speciesList[array[i]] = 1;
    } else speciesList[array[i]] += 1;
  }
  var popLation = Object.values(speciesList);
  //var popLation = Object.keys(speciesList);
  var numSpecies = popLation.length;
  var smallestPopSize = Math.min(...popLation);
  var largestPopSize = Math.max(...popLation);
  var smallestPopSize;
  return (numSpecies ** 2) * (smallestPopSize / largestPopSize);
};
console.log(bioDiversity(['cat']) === 1); //=> 1
console.log(bioDiversity(['cat', 'cat', 'cat']) === 1); //=> 1 (1 ^ 2 * 3 / 3)
console.log(bioDiversity(['cat', 'cat', 'dog']) === 2); //=> 2 (2 ^ 2 * 1 / 2)
console.log(bioDiversity(['cat', 'fly', 'dog']) === 9); // => 9
console.log(bioDiversity(['cat', 'fly', 'dog', 'dog', 'cat', 'cat']) === 3);
console.log(bioDiversity(['a', 'b', 'r', 'b', 'b', 'b', 'a', 'b', 'm', 'b']) === 2.6666666666666665 );
console.log();

/*------------------------------------------------------------------------------
// Caesar Guesser
//
// Caesar's cipher takes a word and encrypts it by offsetting each letter in
// the word by a fixed number, the key. For a key of 3, for example:
// a -> d, p -> s, and y -> b.
//
// Given that the most common letter in english is 'E', build a decrypter that
// takes an encrypted word, determines the key, and returns the decrypted word.
//
// Strategy: find the most common letter in the encrypted string and assume that it
// should be the letter 'e' in the decrypted string. Use this information to
// calculate the key.  Use helper functions to declutter your code.
//
// We're giving you the alphabet as an array if you need it.
//
// Examples:
// caesarGuesser('a', alphabet) == 'e'
// caesarGuesser('b', alphabet) == 'e'
// caesarGuesser('ruuauufuh', alphabet) == 'beekeeper'
// caesarGuesser('mnonwmcqntnny', alphabet) == 'defendthekeep'
// caesarGuesser('happdaiawpywga', alphabet) == 'letthemeatcake'
// ------------------------------------------------------------------------------*/
var popLar = function (str) {
  var letter = str.split('');
  var mostPop = undefined;
  var mostPopVal = -Infinity;
  var hash = {};
  for (var i = 0; i < letter.length; i++) {
    if (hash[letter[i]] === undefined) {
      hash[letter[i]] = 1;
    } else hash[letter[i]] += 1;
  }
  for (var key in hash) {
    if (hash[key] > mostPopVal) { 
      mostPopVal = hash[key];
      mostPop = key;
    }
  }
  return mostPop;
};
//console.log(popLar('hippoppotamus'));
//---------------------------------------
var caesarGuesser = function(string) {

  var ee = popLar(string.toLowerCase());
  var diff = 'e'.charCodeAt() - ee.charCodeAt();
  var tempArr = string.split('');
  var resArr = [];
  for (var i = 0; i < tempArr.length; i++) {
    var charVal = tempArr[i].charCodeAt() + diff;

    if (charVal < 97) {
      charVal = 123 - (97 - charVal);
      resArr.push(String.fromCharCode(charVal));
    } else if (charVal > 122) {
      charVal = charVal - 122 + 96;
      resArr.push(String.fromCharCode(charVal));
    } else {
      resArr.push(String.fromCharCode(charVal));
    }
  }

  return resArr.join('');
};
// console.log('u'.charCodeAt()); // 117
console.log(caesarGuesser('a') === 'e');
console.log(caesarGuesser('b') === 'e');
console.log(caesarGuesser('abcddddefghi') === 'bcdeeeefghij');
console.log(caesarGuesser('xyzcccabc') === 'zabeeecde');
console.log(caesarGuesser('xyzggabc') === 'vwxeeyza');
console.log(caesarGuesser('abcdeffffghi') === 'zabcdeeeefgh');
console.log(caesarGuesser('ruuauufuh') === 'beekeeper');
console.log(caesarGuesser('mnonwmcqntnny') === 'defendthekeep');
console.log(caesarGuesser('happdaiawpywga') === 'letthemeatcake');
console.log();

/*
# Word With Most Repeats
# ------------------------------------------------------------------------------
# Given a sentence, find which word has the greatest amount of repeated letters.
#
# For example, 'I took the road less traveled and that has made all the difference'
# should return 'difference' because it has two repeated letters (f and e).
#
# All words will be separated by spaces and there will be no punctuation or
# capitalization.  If there is a tie return the first word.  It doesn't matter
# how many times individual letters repeat, just that they repeat (see the third test
# case).
#
# Examples:
# wordWithMostRepeats('good luck') => 'good'
# wordWithMostRepeats('what if there is a tie betwixt words') => 'there'
# wordWithMostRepeats('ooooooooooh tutu') => 'tutu'
*/

var wordWithMostRepeats = function (sentence) {
 // your code here...
 var words = sentence.split(' ');
 var mostReps = '';
  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    var tempWord = [];
    var duplicatz = [];
    var trashMaster = [];

    for (var j in word) {
      if (!tempWord.includes(word[j])) {
        tempWord.push(word[j]);
      } else if (!duplicatz.includes(word[j])) {
        duplicatz.push(word[j]);
      } else {
        trashMaster.push(word[j]);
      }
    }

    if (mostReps.length < duplicatz.length) {
      mostReps = duplicatz;
      var result = words[i];
    }

  }

  return result;

};
console.log(wordWithMostRepeats('good luck')); // === 'good');
console.log(wordWithMostRepeats('what if there is a tie betwixt words')); // 'there');
console.log(wordWithMostRepeats('tutu ooooooooooh')); // === 'tutu');
console.log(wordWithMostRepeats('ooooooooooh tutu')); // === 'tutu');
console.log();

/*
# Even Splitters
# ------------------------------------------------------------------------------
# Return an array of characters on which we can split an input string to produce
# substrings of the same length.
# Don't count empty strings after the split.
# Here's an example for 'banana':
#
# 'banana'.split('a') # => ['b', 'n', 'n'] (all elements same length)
# 'banana'.split('b') # => ['', anana'] (all elements same length - there's only
# one element 'anana' because the empty string doesn't count)
# 'banana'.split('n') # => ['ba', 'a', 'a'] (all elements NOT same length)
#
# result: ['b', 'a']
#
# Examples:
# evenSplitters('') => []
# evenSplitters('t') => ['t']
# evenSplitters('jk') => ['j', 'k']
# evenSplitters('xoxo') => ['x', 'o']
# evenSplitters('banana') => ['b','a']
# evenSplitters('mishmash') => ['m','h']
# ------------------------------------------------------------------------------
*/

var evenSplitters = function (str) {
  // your code here...
};
console.log();


/*
# Xbonacci
# ------------------------------------------------------------------------------
# Write a Xbonacci function that works similarly to the fibonacci sequence.
# The fibonacci sequence takes the last two numbers in the sequence and adds
# them together to create the next number.
#
# First five fibonacci numbers = [1, 1, 2, 3, 5]
# The fourth fibonacci number (3) is the sum of the two numbers before it
# (1 and 2).
#
# In Xbonacci, the sum of the last X numbers (instead of the last 2 numbers)
# of the sequence becomes the next number in the sequence.
#
# The method will take two in#: the starting sequence with X number of
# elements and an integer N, and return the first N elements in the given
# sequence.  Take a look at the test cases for examples.
#
# In the code, how_many_numbers_to_sum is the same as X (name your variables
# descriptively!).
#
# In the code, number_of_fibonacci_numbers_to_return is the same as N.
# Examples:
# xbonacci([1, 1], 5) => [1, 1, 2, 3, 5]
# xbonacci([1, 1, 1], 6) => [1, 1, 1, 3, 5, 9]
# xbonacci([1, 1, 1, 1], 8) => [1, 1, 1, 1, 4, 7, 13, 25]
# xbonacci([1, 1, 1, 1, 1, 1], 10) => [1, 1, 1, 1, 1, 1, 6, 11, 21, 41]
# xbonacci([0, 0, 0, 0, 1], 10) => [0, 0, 0, 0, 1, 1, 2, 4, 8, 16]
*/

var xbonacci = function (startingSequence, numberOfXbonacciNumbersToReturn) {
  // your code here...
  var result = startingSequence;
  var initLength = startingSequence.length;
  while (result.length < numberOfXbonacciNumbersToReturn) {
    var tempResult = result.slice(-initLength);
    result.push(tempResult.reduce(function(a, b) {
      return a + b;
    }));
  }
  return result;
};
console.log(xbonacci([1, 1], 5)); // => [1, 1, 2, 3, 5]
console.log(xbonacci([1, 1, 1], 6)); // => [1, 1, 1, 3, 5, 9]
console.log(xbonacci([1, 1, 1, 1], 8)); // => [1, 1, 1, 1, 4, 7, 13, 25]
console.log(xbonacci([1, 1, 1, 1, 1, 1], 10)); // => [1, 1, 1, 1, 1, 1, 6, 11, 21, 41]
console.log(xbonacci([0, 0, 0, 0, 1], 10)); // => [0, 0, 0, 0, 1, 1, 2, 4, 8, 16]
console.log();


/*
#  Cupcake Solver
#------------------------------------------------------------------------------
# It's Jennifer's birthday today. Jennifer's mom decided to bake different kinds
# of cupcakes for Jennifer's first grade class. Everybody needs to have an equal
# amount of the different kinds of cupcakes.
# Write a method that takes an array of the counts of the different kinds of
# cupcakes and the number of students in the class, and returns
# the total number of cupcakes that each student in the class
# should get.
# Every student should have equal amounts of the same kind of cupcake.
# No student gets to have more cupcakes than the others.  There can be leftover
# cupcakes.
# An array of [1, 2, 3] means that there's one red velvet cupcake,
# two vanilla cupcakes, and three chocolate cupcakes.
# Example: cupcakeSolver([10, 10, 10], 5) => 6  means that there are five
# students in the class, and each student gets to eat six cupcakes, total.
# Examples:
# cupcakeSolver([10, 10, 10], 5) => 6
# cupcakeSolver([25, 27, 30], 5) => 16
# cupcakeSolver([32, 27, 28], 20) => 3
# cupcakeSolver([32, 27, 28, 24], 20) => 4
*/

var cupcakeSolver = function (cupcakeCounts, numberOfStudentsInClass) {
  // your code here...
  var result = 0;
  for (var i = 0; i < cupcakeCounts.length; i++) {
    result += Math.floor(cupcakeCounts[i] / numberOfStudentsInClass);
  }
  return result;
};
console.log(cupcakeSolver([10, 10, 10], 5)); // => 6
console.log(cupcakeSolver([25, 27, 30], 5)); // => 16
console.log(cupcakeSolver([32, 27, 28], 20)); // => 3
console.log(cupcakeSolver([32, 27, 28, 24], 20)); // => 4
console.log();



console.log(' ========== SAMPLE INTERVIEW QUESTIONS ========== ');
console.log();

console.log(' ===== I-1 ===== ');
// Determine if binary tree is a subtree of a larger binary tree
// In a previous algorithm tutorial we discussed how to traverse a tree using different algorithms. Now we'll solve a popular tree algorithm question of determining if a binary tree is a subtree within a larger tree.
// We can assume the tree is properly constructed via the following code which sets up nodes and links them to their proper child nodes:

var Node = function (data) {
  this.data = data;
  this.left = null;
  this.right = null;
};
// left tree
var root = new Node(10);
var n1 = new Node(4);
var n2 = new Node(6);
var n3 = new Node(30);
// setup children
n1.right = n3;
root.left = n1;
root.right = n2;
// right tree
var rootR = new Node(26);
var n1R = new Node(10);
var n2R = new Node(3);
var n3R = new Node(4);
var n4R = new Node(6);
var n5R = new Node(3);
var n6R = new Node(30);
// setup children
n3R.right = n6R;
n1R.left = n3R;
n1R.right = n4R;
n2R.right = n5R;
rootR.left = n1R;
rootR.right = n2R;
//The algorithm
//To solve this problem in linear time, we will first produce the in-order and pre-order arrays for both trees, and then we will determine if the in-order and pre-order arrays of the first tree are contained somewhere within the arrays of the second tree.
//The reason the algorithm above works is because to uniquely identify a binary tree, an in-order and pre-order traversal is needed. So, because we are getting these traversal arrays for both trees, the last step will simply be to check if the smaller tree is contained in the larger one by checking their traversal arrays.
// in-order traversal in array format
var inOrder = function (root, nodes) {
  if (root && root.left) {
    inOrder(root.left, nodes);
  }
  nodes.push(root.data);
  if (root && root.right) {
    inOrder(root.right, nodes);
  }
  return nodes;
};
// pre-order traversal in array format
preOrder = function (root, nodes) {
  nodes.push(root.data);
  if (root && root.left) {
    preOrder(root.left, nodes);
  }
  if (root && root.right) {
    preOrder(root.right, nodes);
  }
  return nodes;
};
// function that takes two root nodes and determines if
// the first tree is a subtree of the second tree
var isSubtree = function (root, rootR) {
    // the variables below will hold the values:
    // 4-30-10-6
    // 4-30-10-6-26-3-3
  var inOrd1 = inOrder(root, []).join('-');
  var inOrd2 = inOrder(rootR, []).join('-');
    // 10-4-30-6
    // 26-10-4-30-6-3-3
  var preOrd1 = preOrder(root, []).join('-');
  var preOrd2 = preOrder(rootR, []).join('-');
    // check if the left tree is contained with the right tree
  return inOrd2.indexOf(inOrd1) !== -1 && preOrd2.indexOf(preOrd1) !== -1;
};
console.log(isSubtree(root, root)); // => true
console.log();
console.log();



console.log(' ===== I-2 ===== ');
//Tree traversal algorithms
//Tree traversal is the process of visiting each node in a tree, such as a binary tree or binary search tree, exactly once. There are several effective traversal algorithms which we will cover below.
//All of the algorithms below will implement Node objects we create, which were covered in a previous algorithm on linked lists. Although, we will be slightly changing the code for the nodes.
//The tree we will be operating on looks like the following:
// missing image
//And we can assume the tree is properly constructed via the following code which sets up nodes and links them to their proper child nodes:
var Node = function (data) {
  this.data = data;
  this.left = null;
  this.right = null;
};
// create nodes
var root = new Node('A');
var n1 = new Node('B');
var n2 = new Node('C');
var n3 = new Node('D');
var n4 = new Node('E');
// setup children
root.left = n1;
root.right = n2;
n1.left = n3;
n1.right = n4;
//Pre-order
//A pre-order traversal on a tree performs the following steps starting from the root:
// 1) Return the root node value.
// 2) Traverse the left subtree by recursively calling the pre-order function.
// 3) Traverse the right subtree by recursively calling the pre-order function.
//For the tree above, performing a pre-order traversal would output the node values in the following order:
// A, B, D, E, C
//For the actual code implementation, we will be maintaining an array for the order of the nodes:
var preOrder = function (root, nodes) {
  nodes.push(root.data);
  if (root && root.left) {
    preOrder(root.left, nodes);
  }
  if (root && root.right) {
    preOrder(root.right, nodes);
  }
  return nodes;
};
console.log(preOrder(root, [])); // => [ A, B, D, E, C ]
//In-order
//An in-order traversal on a tree performs the following steps starting from the root:
//1) Traverse the left subtree by recursively calling the in-order function.
//2) Return the root node value.
//3) Traverse the right subtree by recursively calling the in-order function.
//For the tree above, performing an in-order traversal would output the node values in the following order:
//D, B, E, A, C
var inOrder = function (root, nodes) {
  if (root && root.left) {
    inOrder(root.left, nodes);
  }
  nodes.push(root.data);
  if (root && root.right) {
    inOrder(root.right, nodes);
  }
  return nodes;
};
console.log(inOrder(root, [])); // => [ D, B, E, A, C ]
//You can see that the only difference between the code for the in-order vs. pre-order traversal is where the appending of the node value is placed in the code. For post-order traversal below, that will be the only change as well.
//A good way to remember when to return the node value (or append the node value to an array) is, for pre-order do it first, for in-order do it between the left and right traversal, and as you'll see below, for post-order do it after traversing the left and right subtrees.
//Post-order
//A post-order traversal on a tree performs the following steps starting from the root:
//1) Traverse the left subtree by recursively calling the in-order function.
//2) Traverse the right subtree by recursively calling the in-order function.
//3) Return the root node value.
//For the tree above, performing a post-order traversal would output the node values in the following order:
//D, E, B, C, A
var postOrder = function (root, nodes) {
  if (root && root.left) {
    postOrder(root.left, nodes);
  }
  if (root && root.right) {
    postOrder(root.right, nodes);
  }
  nodes.push(root.data);
  return nodes;
};
console.log(postOrder(root, [])); // => [ D, E, B, C, A ]
//Level-order
//A level-order traversal on a tree performs the following steps starting from the root:
//1) Add the root to a queue.
//2) Pop the last node from the queue, and return its value.
//3) Add all children of popped node to queue, and continue from step 2 until queue is empty.
//For the tree above, performing a level-order traversal would output the node values in the following order:
// A, B, C, D, E
console.log();
console.log();
console.log(' ===== SOS! SOMETHING IS MISSING HERE ===== ');
console.log(' ===== PLEEEASE TRY TO FIX ME BELOW!! ===== ');
console.log();
console.log();
/*
function level_order(root, nodes) {
    var queue = [root];
    while (queue.length > 0) {
        // front of queue is at element 0 and we push elements to back of queue
        var n = queue.shift();
        nodes.push(n.data);
        if (n.left !== null) { queue.push(n.left); }
        if (n.right !== null) { queue.push(n.right); }
    }
    return nodes;
}
console.log(level_order(root, [])); // => [ A, B, C, D, E ]
console.log();
console.log();
*/
console.log(' ===== I-3 ===== ');
//Generate all balanced bracket combinations
//For this popular algorithm interview question, your goal is to print all possible balanced parenthesis combinations up to N. For example:
// N = 2
// (()), ()()
// N = 3
// ((())), (()()), (())(), ()(()), ()()()
//Algorithm
//We will implement a recursive function to solve this challenge. The idea is:
//(1) Add a left bracket to a newly created string.
//(2) If a left bracket was added, potentially add a new left bracket and add a right bracket.
//(3) After each of these steps we add the string to an array that stores all bracket combinations.
//This recursive solution might be hard to see at first, but using N = 2 as an example, the steps taken are:
// N = 2
// create (
// create ()
// N = 1
// create ((
// create ()(
// N = 0
// add (())
// add ()()
// Done when N = 0
//Code
var all = [];
var parens = function (left, right, str) {
  // if no more brackets can be added then add the final balanced string
  if (left === 0 && right === 0) {
    all.push(str);
  }
  // if we have a left bracket left we add it
  if (left > 0) {
    parens(left-1, right+1, str+'(');
  }
  // if we have a right bracket left we add it
  if (right > 0) {
    parens(left, right-1, str+')');
  }
};
// the parameters parens(x, y, z) specify:
// x: left brackets to start adding
// y: right brackets we can add only after adding a left bracket
// z: the string so far
console.log(parens(3, 0, ''));
console.log(all);
console.log();
console.log();


console.log(' ===== I-4 ===== ');
//Subset sum problem
//The subset sum problem is an important problem in computer science. Below we'll provide two common algorithms for solving this problem. The challenge is to determine if there is some subset of numbers in an array that can sum up to some number S. These algorithms can both be implemented to solve Array Addition I and Array Addition.
//Naive solution
//The algorithm for the exponential time, naive solution, is as follows: First we will generate every possible set (the power set), and then check if the sum of any of these sets equals the sum S. For example:
// arr = [1, 2, 3]
// sum = 5
//All possible sets:
//[]
//[1]
//[2]
//[3]
//[1, 2]
//[1, 3]
//[2, 3]
//[1, 2, 3]
//We can see that we can get a sum of 5 by adding the elements in the set [2, 3]. To generate all possible sets of an array, we'll implement the following algorithm:
//(1) The initial power set only contains the empty set: [[]]
//(2) Then we loop through each element in the array and add it to every element in the power set. Then we take the union of these two sets.
//(3) Once we get the power set, we check to see if the sum equals our goal S.
//Example
//arr = [1, 2, 3]
//sum = 5
//sets = [[]]
//Step 1: Add 1 to the power set
//[[], [1]]
//Step 2: Add 2 to the power set
//[[], [1], [1, 2], [2]]
//Step 3: Add 3 to the power set
//[[], [1], [1, 2], [2], [1, 3], [2, 3], [1, 2, 3], [3]]
//Code
var arr = [1, 2, 3];
var arrayAdditionI = function (arr) {
  // get largest number and remove it from array
  var sum = Math.max.apply(null, arr);
  arr.splice(arr.indexOf(sum), 1);
  // power set
  var sets = [[]];
  // generate the power set and for each new set
  // check if the temporary sum equals our sum above
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0, len = sets.length; j < len; j++) {
      var temp = sets[j].concat(arr[i]);
      sets.push(temp);
      var s = temp.reduce(function(p, c) { return p + c; });
      if (s === sum) { return 'true'; }
    }
  }
  return 'false';
};
console.log(arrayAdditionI(arr));
console.log();
console.log();


console.log(' ===== I-5 ===== ');
//Simple clock angle
//The question is as follows:
//You will be given a number N that represents where the minute hand currently is on a clock. Your program should return the angle that is formed by the minute hand and the 12 o'clock mark on the clock.
//Example
//If the input is: 15 then your program should return 90 because a 90-degree angle is formed by the minute hand and the 12 o'clock mark on the clock. We'll solve this challenge by first calculating what angle is created by each minute passing on a clock. Once we calculate this number, we multiply it by the input to determine the final angle.
//More information regarding this problem, and how to calculate the angle between both clock hands, can be found here.
//Code
var simpleClockAngle = function (num) {
  // we got 6 because 360/60 = 6
  // 360 represents the full number of a degrees in a circle and
  // 60 is the number of minutes on a clock, so dividing these two numbers
  // gives us the number of degrees for one minute
  return 6 * num;
};
console.log(simpleClockAngle(15));
console.log();
console.log();


console.log(' ===== I-6 ===== ');
//Determine overlapping numbers in ranges
//The question is as follows:
//You will be given an array with 5 numbers. The first 2 numbers represent a range, and the next two numbers represent another range. The final number in the array is X. The goal of your program is to determine if both ranges overlap by at least X numbers. For example, in the array [4, 10, 2, 6, 3] the ranges 4 to 10 and 2 to 6 overlap by at least 3 numbers (4, 5, 6), so your program should return true.
//Example
//If the array is: [10, 20, 4, 14, 4] then the ranges are:
// 10 11 12 13 14 15 16 17 18 19 20
// 4 5 6 7 8 9 10 11 12 13 14
//These ranges overlap by at least 4 numbers, namely: 10, 11, 12, 13, 14 so your program should return true.
//Code
var overlappingRanges = function (arr) {
  // keep a count of how many numbers overlap
  var counter = 0;
  // loop through one of the ranges
  for (var i = arr[0]; i < arr[1]; i++) {
    // check if a number within the first range exists
    // in the second range
    if (i >= arr[2] && i <= arr[3]) {
      counter += 1;
    }
  }
  // check if the numbers that overlap is equal to or greater
  // than the last number in the array
  return (counter >= arr[4]) ? true : false;
};
console.log(overlappingRanges([4, 10, 2, 6, 3]));
console.log();
console.log();


console.log(' ===== I-7 ===== ');
//You will be given an array of several arrays that each contain integers and your goal is to write a function that will sum up all the numbers in all the arrays. For example, if the input is [[3, 2], [1], [4, 12]] then your program should output 22 because 3 + 2 + 1 + 4 + 12 = 22.
//Solution
//We will solve this challenge by looping through the entire array, and then looping through each inner array adding up all the numbers.

//Code
var sumArray = function (arr) {
  // store our final answer
  var sum = 0;
  // loop through entire array
  for (var i = 0; i < arr.length; i++) {
    // loop through each inner array
    for (var j = 0; j < arr[i].length; j++) {
      // add this number to the current final sum
      sum += arr[i][j];
    }
  }
  return sum;
};
console.log(sumArray([[3, 2], [1], [4, 12]]));
console.log();
console.log();


console.log(' ===== I-8 ===== ');
//Find minimum spanning tree using Prim's algorithm
//A minimum spanning tree of a graph is a subgraph that connects all vertices in the graph with a minimum total weight for the edges. Each edge between the vertices has a weight corresponding to it and your goal is to connect every vertex while minimizing the total edge weight. Graphs can have more than one minimum spanning tree. Below is an example of a graph with 5 vertices and weighted edges that we will be running Prim's algorithm on.
//Example graph with edge weights
// missing image
//Prim's algorithm
//Prim's algorithm is a classic greedy algorithm for finding the MST of a graph. The general algorithm is:
//(1) Create an empty tree, M, which will act as the MST.
//(2) Choose a random vertex v from the graph.
//(3) Add the edges that are connected to v into some data structure E.
//(4) Find the edge in E with the minimum weight, and add this edge to M. Now, make v equal to the other vertex in the edge and repeat from step 3.
//This algorithm runs until the number of edges in MST is equal to the number of vertices in the graph minus 1. So in the example below, the number of vertices in the graph is 6, so Prim's algorithm will run until the MST contains 5 edges. Once the algorithm is complete, the MST will have successfully connected all vertices in the graph with the minimum weighted edges.
//Example of Prim's algorithm
// missing image
//Data structure to store edges
//There are a few different options we have in what data structure we decide to use to represent the graph and how we decide to store all the edges. In this implementation we'll represent the graph as an adjacency matrix, and we have two common options in how we can store the edges:
//(1) Store the edges in an array and search through it each time to find the edge with the smallest weight.
//(2) Store the edges in a binary heap which improves the running time because edges can be found faster.
//The implementation below uses method (1). It first converts the graph into a matrix and then on each iteration of Prim's algorithm, it adds edges to an array which is then searched through linearly to find the edge with the smallest weight. If there is a tie between edge weights, it simply chooses the first edge it encounters.
//Code
// create adjacency matrix for use in prims algorithm
// note: we could improve the running time of prims algorithm by
// implementing a priority queue data structure instead of a matrix
var createAdjMatrix = function (V, G) {
  var adjMatrix = [];
  // create N x N matrix filled with 0 edge weights between all vertices
  for (var i = 0; i < V; i++) {
    adjMatrix.push([]);
    for (var j = 0; j < V; j++) { adjMatrix[i].push(0); }
  }
  // populate adjacency matrix with correct edge weights
  for (var k = 0; k < G.length; k++) {
    adjMatrix[G[k][0]][G[k][1]] = G[k][2];
    adjMatrix[G[k][1]][G[k][0]] = G[k][2];
  }
  return adjMatrix;
};
//=================================================================
var prims = function (V, G) {
  // create adj matrix from graph
  var adjMatrix = createAdjMatrix(V, G);
  // arbitrarily choose initial vertex from graph
  var vertex = 0;
  // initialize empty edges array and empty MST
  var MST = [];
  var edges = [];
  var visited = [];
  var minEdge = [null,null,Infinity];
  // run prims algorithm until we create an MST
  // that contains every vertex from the graph
  while (MST.length !== V-1) {
    // mark this vertex as visited
    visited.push(vertex);
    // add each edge to list of potential edges
    for (var r = 0; r < V; r++) {
      if (adjMatrix[vertex][r] !== 0) {
        edges.push([vertex,r,adjMatrix[vertex][r]]);
      }
    }
    // find edge with the smallest weight to a vertex
    // that has not yet been visited
    for (var e = 0; e < edges.length; e++) {
      if (edges[e][2] < minEdge[2] && visited.indexOf(edges[e][1]) === -1) {
        minEdge = edges[e];
      }
    }
    // remove min weight edge from list of edges
    edges.splice(edges.indexOf(minEdge), 1);
    // push min edge to MST
    MST.push(minEdge);
    // start at new vertex and reset min edge
    vertex = minEdge[1];
    minEdge = [null,null,Infinity];
  }
  return MST;
};
// graph vertices are actually represented as numbers
// like so: 0, 1, 2, ... V-1
var a = 0, b = 1, c = 2, d = 3, e = 4, f = 5;
// graph edges with weights
// diagram of graph is shown above
var graph = [
  [a,b,2],
  [a,c,3],
  [b,d,3],
  [b,c,5],
  [b,e,4],
  [c,e,4],
  [d,e,2],
  [d,f,3],
  [e,f,5]
];
// pass the # of vertices and the graph to run prims algorithm
console.log(prims(6, graph));
console.log();
console.log();


console.log(' ===== I-9 ===== ');
//Implement pow(a,b) without multiplication or division
//This is one type of very common interview question that is usually asked, where your goal is to implement some built-in language function, such as exponentiation, division, hash tables, etc. In this challenge we need to implement exponentiation, or raising a to some power of b which is usually written pow(a, b). In this variation of the challenge, we also need to implement a solution without using the multiplication or division operations, only addition and subtraction are allowed.
//Example of how pow(a, b) works
// misising image
//Algorithm
//(1) Create a variable named answer
//(2) Loop from 1 to n
//(3) Each time through the loop we add a + a + ... (we add a to itself a times) and store result in answer
//(4) Then each time through the loop we perform step 3 replacing a with answer
//Code
// our modified pow function that raises a to the power of b
// without using multiplication or division
var modPow = function (a, n) {
  // convert a to positive number
  var answer = Math.abs(a);
  // store exponent for later use
  var exp = n;
  // loop n times
  while (n > 1) {
    // add the previous added number n times
    // e.g. 4^3 = 4 * 4 * 4
    //      4*4 = 4 + 4 + 4 + 4 = 16
    //     16*4 = 16 + 16 + 16 + 16 = 64
    var added = 0;
    for (var i = 0; i < Math.abs(a); i++) { added += answer; }
    answer = added;
    n--;
  }
  // if a was negative determine if the answer will be
  // positive or negative based on the original exponent
  // e.g. pow(-4, 3) = (-4)^3 = -64
  return (a < 0 && exp % 2 === 1) ? -answer : answer;
};
console.log(modPow(2, 10));
console.log(modPow(-4, 7));
console.log(modPow(5, 4));
console.log();
console.log();


console.log(' ===== I-10 ===== ');
//Implement a queue using two stacks
//In another interview question we explained what a queue is and how to implement one using a linked list. Now we'll provide a solution to a common interview question, which is how to implement a queue using two stacks.
//A stack is a data structure where items can be added to a collection and removed from it just like in a queue, except the difference is the order in which they are removed. In a stack, the last item added will be the first item removed (last in, first out). Stacks usually have two basic methods, push, which adds an item into the stack, and pop, which 'pops off' the top item from the stack.
//You can think of a stack like a physical stack of books: to add a new book to the stack you simply place the book on top, and then when you want to make the stack smaller you start removing books from the top of the stack.
//Example of stack operations
//Algorithm for queue using two stacks
//For example: Suppose we push 'a', 'b, 'c' to a stack. If we are trying to implement a queue and we call the dequeue method 3 times, we actually want the elements to come out in the order: 'a', 'b, 'c', which is in the opposite order they would come out if we popped from the stack. So, basically, we need to access the elements in the reverse order that they exist in the stack. The following algorithm will implement a queue using two stacks.
//(1) When calling the enqueue method, simply push the elements into the stack 1.
//(2) If the dequeue method is called, push all the elements from stack 1 into stack 2, which reverses the order of the elements. Now pop from stack 2.
//Code
// implement stacks using plain arrays with push and pop functions
var Stack1 = [];
var Stack2 = [];
// implement enqueue method by using only stacks
// and the push and pop functions
var Enqueue = function (element) {
  Stack1.push(element);
};
// implement dequeue method by pushing all elements
// from stack 1 into stack 2, which reverses the order
// and then popping from stack 2
var Dequeue = function () {
  if (Stack2.length === 0) {
    if (Stack1.length === 0) { return 'Cannot dequeue because queue is empty'; }
    while (Stack1.length > 0) {
      var p = Stack1.pop();
      Stack2.push(p);
    }
  }
  return Stack2.pop();
};
console.log(Enqueue('a'));
console.log(Enqueue('b'));
console.log(Enqueue('c'));
console.log(Dequeue());
console.log();
console.log();


console.log(' ===== I-11 ===== ');
//Find all string combinations consisting only of 0, 1 and ?
//For this popular algorithm interview question, the input will be a string consisting only of the characters 0, 1 and ?, where the ? acts as a wildcard that can be either a 0 or 1, and your goal is to print all possible combinations of the string. For example, if the string is '011?0' then your program should output a set of all strings, which are: ['01100', '01110'].
//Algorithm
//The general algorithm we will write a solution for is:
//(1) Call the function with the string and an empty set where we begin pushing 0 and 1's.
//(2) Once we reach a ?, then make a copy of each string set, and for half append a 0 and for the other half append a 1.
//(3) Recursively call the function with a smaller string until the string is empty.
//Example
//Assume the input string is '10??'
//Initial set = []
//1st character = 1
//set = [1]
//2nd character = 0
//set = [1, 0]
//3rd character = ?
//First we make a copy of each string set and then we add a 0 to half of the sets and 1 to the other half.
//set = [[1, 0, 0], [1, 0, 1]]
//4th characer = ?
//Same procedure as the previous step.
//set = [[1, 0, 0, 0], [1, 0, 1, 0], [1, 0, 0, 1], [1, 0, 1, 1]]

//Code
var patterns = function (str, all) {
  // if the string is empty, return all the string sets
  if (str.length === 0) { return all; }
  // if character is 0 or 1 then add the character to each
  // string set we currently have so far
  if (str[0] === '0' || str[0] === '1') {
    for (var i = 0; i < all.length; i++) {
      all[i].push(str[0]);
    }
  }
  // for a wildcard, we make a copy of each string set
  // and for half of them we append a 0 to the string
  // and for the other half we append a 1 to the string
  if (str[0] === '?') {
    var len = all.length;
    for (var i = 0; i < len; i++) {
      var temp = all[i].slice(0);
      all.push(temp);
    }
    for (var i = 0; i < all.length; i++) {
      (i < all.length/2) ? all[i].push('0') : all[i].push('1');
    }
  }
  // recursively calculate all string sets
  return patterns(str.substring(1), all);
};
console.log(patterns('10?1?', [[]]));
console.log();
console.log();


console.log(' ===== I-12 ===== ');
//Quickly calculate the cube root of 6 digit numbers
//The is a clever interview question that asks you to calculate the cube root of a number quickly. We can solve this by some mathematical tricks that won't require any calculates to take place, only table lookups. This algorithm will focus on calculating the cube root of 6 digit numbers (or less). For example, if the input is 636056 then your program should output 86.
//Algorithm
//The general algorithm is as follows:
//(1) Store the first 10 cube roots, their cubes, and the last digit in the number.
//(2) Ignore the last 3 digits of the input number, and for the remaining numbers, find the cube in the table that is less than or equal to the remaining number, and take the corresponding cube root to be the first number in your answer.
//(3) For the last 3 digits that you previously ignored, loop through the table and when you get to the ith index, where i equals the last digit of the remaining 3 numbers, take the corresponding number in the right column as your answer.
//(4) These numbers combined are the cube root answer.
//Example 1
//If the input is 148877.
//(1) A table has been created.
//(2) After ignoring the last 3 digits, we are left with 148. The largest cube less than this number is 125, and the corresponding cube root is 5.
//(3) For the last 3 digits, 877, the last number is 7. When we get to the 7th index in the table, we see that the last column number is 3.
//(4) The cube root of 148877 is therefore: 53.
//Example 2
//If the input is 830584.
//(1) A table has been created.
//(2) After ignoring the last 3 digits, we are left with 830. The largest cube less than this number is 729, and the corresponding cube root is 9.
//(3) For the last 3 digits, 584, the last number is 4. When we get to the 4th index in the table, we see that the last column number is 4.
//(4) The cube root of 830584 is therefore: 94.
//Code
var fastCubeRoot = function (num) {
  var cubes10 = {
    '0': 0,
    '1': 1,
    '8': 8,
    '27': 7,
    '64': 4,
    '125': 5,
    '216': 6,
    '343': 3,
    '512': 2,
    '729': 9
  };
  // get last 3 numbers and the remaining numbers
  var arr = num.toString().split('');
  var last = arr.slice(-3);
  var first = parseInt(arr.slice(0, -3).join(''));
  // answer will be stored here
  var lastDigit = 0, firstDigit = 0, index = 0;
  // get last digit of cube root
  for (var i in cubes10) {
    if (index === parseInt(last[last.length-1])) { lastDigit = cubes10[i]; }
    index++;
  }
  // get first digit of cube root
  index = 0;
  for (var i in cubes10) {
    if (parseInt(i) <= first) { firstDigit = index; }
    index++;
  }
  // return cube root answer
  return firstDigit + '' + lastDigit;
};
console.log(fastCubeRoot(830584));
console.log();
console.log();


console.log(' ===== I-13 ===== ');
//Print a matrix in spiral order
//The input for this problem will be a matrix, or multidimensional array, which will be represented by N arrays each of N length, and your goal is to print the matrix in a spiral order. For example, if the input is:
//[[1, 2, 3],
// [4, 5, 6],
// [7, 8, 9]]
//then this matrix should be printed out in a list like so:
//[1, 2, 3, 6, 9, 8, 7, 4, 5]
//The spiral begins at the top left of the matrix and loops around it towards the center in a clockwise pattern. Below is a clever algorithm that uses recursion to print a matrix in spiral order:
//Algorithm
//(1) Every other iteration through the matrix peel off the first row and last column of the matrix.
//So for the above array we should get: [[1, 2, 3], [6, 9]]. Store these elements in a list and then pass the modified matrix to another function. The modified matrix currently looks like this:
//[[4, 5],
// [7, 8]]
//(2) Now peel off the last row and first column from the matrix, reverse each one, and add them to the previous list. Our spiral list should look like the following so far: [[1, 2, 3], [6, 9], [8, 7], [4]].
//(3) Now continue from step 1 until the matrix has no elements left and return the final spiraled list.
//Code
var layerTopRight = function (matrix) {
  // remove and store the first row from matrix
  var top = matrix.splice(0, 1);
  // store the right column of the matrix
  var right = [];
  // remove the last column from the matrix
  for (var i = 0; i < matrix.length; i++) {
    var e = matrix[i].splice(-1, 1);
    right.push(e);
  }
  // return the top row and last column elements as a list
  return top.concat(right).toString().split();
};
//==============================================================================
var layerBottomLeft = function (matrix) {
  // remove and store the last row from matrix in reverse order
  var bottom = matrix.splice(matrix.length-1, 1)[0].reverse();
  // store the left column of the matrix
  var left = [];
  // remove the first column from the matrix
  for (var i = 0; i < matrix.length; i++) {
    var e = matrix[i].splice(0, 1);
    left.push(e);
  }
  // return the top row and last column elements as a list
  return bottom.concat(left.reverse()).toString().split();
};
// our main spiral function that will
// return a final spiral ordered list
var spiral = function (matrix) {
  // where we store our final spiraled list
  var spir = [];
  while (matrix.length > 0) {
    // if only 1 more element left in matrix
    if (matrix.length === 1) {
      spir.push(matrix[0]);
      break;
    }
    // return the spiraled list of the top row and
    // right column for this matrix
    var tr = layerTopRight(matrix);
    spir.push(tr);
    // return the spiraled list of the bottom row and
    // left column for this matrix
    var bl = layerBottomLeft(matrix);
    spir.push(bl);
  }
  return spir.toString().split();
};
// setup a matrix
var M = [[1, 2, 3],
         [4, 5, 6],
         [7, 8, 9]];
// return it in spiral order
console.log(spiral(M));
console.log();
console.log();


console.log(' ===== I-14 ===== ');
//Generate primes up to N using the sieve of Eratosthenes algorithm
//The sieve of Eratosthenes algorithm generates all the primes up to a given limit. This is a common and fast algorithm used to generate a list of primes up to a given limit. It works by making a list from 1 to N, and then iterating through the list and progressively removing non-prime, composite numbers until only primes are left in a list.
//Example
//For example, if we wanted to generate all the primes up to the number 30, we first create a list of numbers from 1 to 30 and follow the numbered steps:
// 1  2  3  4  5  6  7  8  9  10
// 11 12 13 14 15 16 17 18 19 20
// 21 22 23 24 25 26 27 28 29 30
//(Step 1) The algorithm starts at the first number, 1, and removes it because it is not a prime number.
//(Step 2) The next number is 2, which is a prime so it stays, but now all multiples of 2 are removed from the list: 4, 6, 8, 10, etc.
//   2  3     5     7     9
//11    13    15    17    19
//21    23    25    27    29
//(Step 3) The next number is 3, which is a prime so it stays, but now all multiples of 3 are removed from the list: 6, 9, etc.
//   2  3     5     7
//11    13          17    19
//      23    25          29
//(Step 4) The next number is 5, which is a prime so it stays, but now all multiples of 5 are removed from the list: 10, 15, etc.
//   2  3     5     7
//11    13          17    19
//      23                29
//(Step 5) All the numbers now, 7, 11, 13, etc., are all primes and there are no more multiples of numbers we can remove from the list, so we are done and the list that is left is our list of primes.
//Solution
//We will create a function called sieve that will take a limit as a parameter, generate a list of numbers from 1 to limit, and then remove all composite numbers as it loops from 1 to limit.
// our sieve function which will return a list of primes
// up to the limit argument passed
var sieve = function (limit) {
  var bools = [];
  var primes = [];
  // generate a list of booleans all set to true initially
  // the array is indexed from 2 to limit representing all numbers
  // e.g. [true, true, true, true] = [2, 3, 4, 5]
  for (var i = 1; i < limit; i++) { bools.push(true); }
  // loop from 2 to limit setting the composite numbers to false
  // we start from 2 because we know 1 is not a prime number
  for (var i = 2; i < limit; i++) {
    if (bools[i-2]) {
      for (var j = i*2; j <= limit; j += i) {
        bools[j-2] = false;
      }
    }
  }
  // now generate the list of primes only where
  // there is a true value in the bools array
  for (var p = 0; p < bools.length; p++) {
    if (bools[p]) { primes.push(p+2); }
  }
  return primes;
};
console.log(sieve(30));
console.log();
console.log();


console.log(' ===== I-15 ===== ');
//Find the middle element of a linked list
//A linked list is a data structure which consists of a group of nodes where each node may point to some other node to form a sequence. Our nodes will have two fields:
//(1) a 'data' field which will store our data (string, number, etc.)
//(2) a 'next' field which will be a reference to some other node
//Linked lists are useful and simple data structures and are sometimes preferred over using arrays because inserting or deleting elements can be done without reallocation or reorganization of the entire structure.
//If, for example, you wanted to add an element to the beginning of the array, every single other element would need to be moved and the array would need to make space for one extra element. Inserting an element at the beginning of a linked list simply requires you to create a new node and set its 'next' field to point to some node, making this new node the first node in the sequence now.
//Node setup
var Node = function (data, next) {
  this.data = data;
  this.next = next;
};
//This is how we can then create a linked list with connecting nodes:
var n1 = new Node('Hello', null);
var n2 = new Node('21', n1);
var n3 = new Node('Green', n2);
// assign a node to the head which functions
// as the entry into our linked list
var head = n3;
//Our challenge is to now find the middle node in a linked list. We don't initially know the length of a linked list, all we have is a single node which acts as the head of the linked list and which we can access all other nodes by traversing through each nodes 'next' property. We can continuously loop through each node until we get to a node that has a 'next' property of null, which means we have reached the last node.
//Naive solution
//A simple way to determine the middle node would be to fully pass through all nodes in the linked list and count how many elements there are in total. Then traverse the linked list again this time stopping at the total/2 node. For example, the first time you traverse the linked list your program determines there are 10 nodes, then the second pass through the linked list you stop at the 5th node, which is the middle node. This is a possible solution, but there is a faster way.
//Faster solution using 2 pointers
//What we'll do is setup two pointers, one that will traverse the linked list one node at a time, and the other pointer will traverse two nodes at a time. This way when the faster pointer reaches the end of the linked list, the slower pointer will be halfway there because it was only moving one node at time while the faster one was moving two nodes at a time. This allows you to find the middle node of a linked list with only one pass, instead of passing through the whole linked list once, and then again to find the middle element.

var Node = function (data, next) {
  this.data = data;
  this.next = next;
};
// setup some nodes and connect them to each other
// the linked list looks like:
// (head) n5 -> n4 -> n3 -> n2 -> n1 -> null
var n1 = new Node('Hello', null);
var n2 = new Node('21', n1);
var n3 = new Node('Green', n2);
var n4 = new Node('Blue', n3);
var n5 = new Node('Daniel', n4);
// assign a node to the head which functions
// as the entry into our linked list
var head = n5;
// setup pointers to both start
// at the head of the linked list
var fastPointer = head;
var slowPointer = head;
// loop through the linked list
// when fastPointer reaches the end of the list
// then slowPointer will be at the middle node
while (fastPointer.next !== null && fastPointer.next.next !== null) {
  fastPointer = fastPointer.next.next;
  slowPointer = slowPointer.next;
}
// slowPointer is now at the middle node in the linked list
console.log(slowPointer.data);
console.log();

console.log(' ========== THE END! ========== ');