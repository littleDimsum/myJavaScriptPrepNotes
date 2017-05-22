console.log('JavaScript NOTES');
// Before proceeding with any application, decide which versions of JavaScript your application should support. Be sure that any JavaScript features you use are supported by all environments where your application expect to run.

console.log('ONE');
"use strict";
// This feature allows you to opt in to a restricted version of JavaScript that disallows some of the more problematic or error-prone features of the full language.The syntax was designed to be backward-compatible so that environments that do not implement the strict-mode checks can still execute strict code.Strict mode is enabled in a program by adding a special string constant at the very beginning of the program. Similarly, you can enable strict mode in a function by placing the directive at the beginning of the function body:
function f(x) {
  "use strict";
  // ...
}
// The "use strict" directive is only recognized at the top of a script or function. This means that some problems may arise where large applications - involving script concatenation from multiple files into a single file - are developed. Consider two files 1 and 2 in different modes:
// file1.js
"use strict";
function f() {
  // ...
}

// file2.js
// no strict-mode directive
function g() {
  var arguments = [];
// ...
}

// Concatenating file1.js on top of file2.js would put all contents of the newly concatenated file in strict mode.whereas the reverse would put all contents of the newly concatenated file in non strict mode.

// One workaround to this might be to:
// 1. Never concatenate strict files and nonstrict files.This is probably the easiest solution, but it of course restricts the amount of control you have over the file structure of your application or library.At best, you have to deploy two separate files, one containing all the strict files and one containing the nonstrict files.

// 2. Concatenate files by wrapping their bodies in immediately invoked
// function expressions(IIFEs) so that they can be independently interpreted in different modes.The concatenated version of the above example would look like this:
// no strict-mode directive
(function () { 
  // file1.js
  "use strict";
  function f() {
    // ...
  }
})();

(function () {
  // file2.js
  // no strict-mode directive 
  function f() {
    // ...
  }
})();

// Since each file’s contents are placed in a separate scope, the strict-mode directive(or lack of one) only affects that file’s contents. For this approach to work, however, the contents of files cannot assume that they are interpreted at global scope. For example, 'var' and 'function' declarations do not persist as global variables.


console.log('TWO');
// 1. To convert a decimal to a Base system, you run:
// (DecimalNumber).toString(Base);
console.log((5).toString(2));

// 2. To convert a Base numeral to a decimal, you run:
parseInt("Number in base numeral", Base);
console.log(parseInt("1001", 2)); // 9

// JavaScript has only one type of number. All numbers in JavaScript are double-precision floating-point numbers, that is, the 64-bit encoding of numbers specified by the IEEE 754 standard—commonly known as “doubles.”
// Keep in mind that doubles can represent integers perfectly with up to 53 bits of precision.All of the integers from– 9, 007, 199, 254, 740, 992(–2 ** 53) to 9, 007, 199, 254, 740, 992(2 ** 53) are valid doubles.So it’ s perfectly possible to do integer arithmetic in JavaScript, despite the lack of a distinct integer type.
console.log(typeof 17); // "number" 
console.log(typeof 17.5); // "number"
console.log(typeof -17.2); // "number"

console.log(0.1 * 1.9); // 0.19
console.log(-99 + 100); // 1
console.log(21 - 12.3); // 8.7
console.log(2.5 / 5); // 0.5
console.log(21 % 8); // 5

// The Base systems use 'positional notation' to represent decimal numbers.
// In Binary systems, each positional point has a value 2 two times the positional point to its right. In Decimal systems, this ratio is 10, and in other systems, the ratio is indicated by the base. 
// The decimal equivalent of any Base system is obtained by adding up all of positional point values. Note that we mostly use Decimals(Base10) becasue of historical reasns dating back to Egypt and Rome. Bases 8 and 12 are actually more divisible than 10.

// 1. JavaScript numbers are double-precision floating-point numbers.
// Double-precision refers to a type of floating-point number that has more precision(that is, more digits to the right of the decimal point) than a single-precision number.The term double precision is something of a misnomer because the precision is not really double.The word double derives from the fact that a double-precision number uses twice as many bits as a regular floating-point number.For example, if a single-precision number requires 32 bits, its double-precision counterpart will be 64 bits long.
// The extra bits increase not only the precision but also the range of magnitudes that can be represented.The exact amount by which the precision and range of magnitudes are increased depends on what format the program is using to represent floating-point values. Most computers use a standard format known as the IEEE floating-point format.
// We can get to Base36 by using all the numbers from 0 to 9 and uppercase alphabets from A to Z.Similarly we can get to Base62 by using all the numbers from 0 to 9 and both lowwer and uppercase alphabets from A to Z.

// 2. Integers in JavaScript are just a subset of doubles rather than a
// separate datatype.

// 3. Bitwise operators treat numbers as if they were 32 - bit signed integers.
// The bitwise arithmetic operators, however, are special.Rather than operating on their arguments directly as floating-point numbers, they implicitly convert them to 32-bit integers.(To be precise, they are treated as 32-bit, big-endian, two’s complement integers.) For example, take the bitwise OR expression:
// console.log(8 | 1); // 9
// This simple-looking expression actually requires several steps to evaluate.As always, the JavaScript numbers 8 and 1 are doubles. But they can also be represented as 32-bit integers, that is, sequences of thirty-two 1’ s and 0s. As a 32-bit integer, the number 8 looks like this:
// 00000000000000000000000000001000
// console.log((8).toString(2)); // "1000"

// The integer 1 is represented in 32 bits as:
// 00000000000000000000000000000001

// The bitwise OR expression combines the two bit sequences by keeping any 1 bits found in either input, resulting in the bit pattern:
// 00000000000000000000000000001001
// This sequence represents the integer 9. You can verify this by using the standard library
// function parseInt, again with a radix of 2:
// console.log(parseInt("1001", 2)); // 9
// The leading 0 bits are unnecessary since, again, they don’ t affect the result.
// All of the bitwise operators work the same way, converting their inputs to integers and performing their operations on the integer bit patterns before converting the results back to standard JavaScript floating-point numbers.

// JavaScript Bitwise Operators
// Bit operators work on 32 bits numbers.Any numeric operand in the operation is converted into a 32 bit number.The result is converted back to a JavaScript number.

// Operator Description Example Same as Result Decimal
// Operator    Description     Example         Same as      Result    Decimal
// &           AND            x = 5 & 1      0101 & 0001     0001        1 
// |           OR             x = 5 | 1      0101 | 0001     0101        5
// ~           NOT            x = ~5         ~0101           1010        -6 
// ^           XOR            x = 5 ^ 1      0101 ^ 0001     0100        4 
// <<          Left  shift    x = 5 << 1     101 << 1        1010        10 
// >>          Right shift    x = 5 >> 1     101 >> 1        0010        2
console.log(5 & 1); // 1
console.log(5 | 1); // 5
console.log(~5); // -6
console.log(5 ^ 1); // 4
console.log(5 << 1); // 10
console.log(5 >> 1); // 2

// Note that in left shift where no bits are lost, the new decimal value is equal to the old decimal value times (Base Exponent shift value). For Example: 
5 << 1 == 5 * (2**1); // 10, true
5 << 2 == 5 * (2 ** 2); // 20, true
5 << 3 == 5 * (2 ** 3); // 40, true

// Similarly in right shift where no bits are lost, the new decimal value is equal to the old decimal value divided by (Base Exponent shift value).For Example:
144 >> 1 == 144 / (2 ** 1); // 72
144 >> 2 == 144 / (2 ** 2); // 36
144 >> 3 == 144 / (2 ** 3); // 18
140 >> 3 == 17 // there is a loss of 1 bit

// 4. Be aware of limitations of precisions in floating - point arithmetic.
console.log(0.1 + 0.2); // 0.30000000000000004
// While 64 bits of precision is reasonably large, doubles can still only represent a finite set of numbers, rather than the infinite set of real numbers.Floating-point arithmetic can only produce approximate results, rounding to the nearest representable real number.When you perform a sequence of calculations, these rounding errors can accumulate, leading to less and less accurate results.Rounding also causes surprising deviations from the kind of properties we usually expect of arithmetic. For example, real numbers are associative, meaning that for any real numbers x, y, and z, it’s always the
// case that:
// (x + y) + z = x + (y + z).
// But this is not always true of floating-point numbers:
// console.log((0.1 + 0.2) + 0.3); // 0.6000000000000001 
// console.log(0.1 + (0.2 + 0.3)); // 0.6
// Floating-point numbers offer a trade-off between accuracy and performance.When accuracy matters, it’ s critical to be aware of their limitations.One useful workaround is to work with integer values wherever possible, since they can be represented without rounding.When doing calculations with money, programmers often scale numbers up to work with the currency’s smallest denomination so that they can compute with whole numbers.For example, if the above calculation were measured in dollars, we could work with whole numbers of cents instead:
// console.log((10 + 20) + 30); // 60, then divide by the multiplier (10 in this case)
// console.log(10 + (20 + 30)); // 60, then divide by the multiplier (10 in this case)
// With integers, you still have to take care that all calculations fit within the range between -253 and 253, but you don’ t have to worry about rounding errors.



console.log('THREE');
// 1. Type errors can be silently hidden by implicit coercions.
// 2. The + operator is overloaded to do addition or string concatenation depending on its argument types.
// 3. Objects are coerced to numbers via valueOf and to strings via toString.
// 4. Objects with valueOf methods should implement a toString method that provides a string representation of the number produced by valueOf.
// 5. Use typeof or comparison to undefined rather than truthiness to test
// for undefined values.

// In addition to objects, JavaScript has five types of primitive values: 
// 'booleans','numbers', 'strings', 'null', and 'undefined'.

// There are exactly seven falsy values: 
// 'false', '0', '-0', '""', 'NaN', 'null', and 'undefined'.All other values are truthy.
// '==' tests for abstract equality, using type coercion before comparing.
// '===' tests for strict equality.
isNaN("foo"); // true
// Note that NaN === NaN returns false because that is how JavaScript sets it up. It is the only JavaScript value that is not equal to itself. Because of this you can always test if a value is NaN by checking it for equality to itself:
var a = NaN;
console.log(a !== a); // true var b = "foo";
console.log(b !== b); // false
const isReallyNaN = (x)  => { return x !== x; }
// There are some cases in JavaScipt wheere providing the wrong type produces an immediate Error, like:
console.log("hello" (1)); // error: not a function
null.x; // error: cannot read property 'x' of null
// However, in a lot of cases it does implicit coercions instead. 

// Implicit Coercions
console.log(3 + true); // 4
console.log("2" + 3); // "23"
console.log(2 + "3"); // "23"
console.log(1 + 2 + "3"); // "33"
console.log(1 + "2" + 3); // "123"
console.log("17" * 3); // 51
console.log("8" | "1"); // 9


console.log('FOUR');
// 1. JavaScript strings consist of 16-bit code units, not Unicode code points.
// 2. Unicode code points 2**16 and above are represented in JavaScript by two code units, known as a surrogate pair.
// 3. Surrogate pairs throw off string element counts, affecting length, charAt, charCodeAt, and regular expression patterns such as '.'
// 4. Use third-party libraries
// for writing code point-aware string manipulation.
// 5. Whenever you are using a library that works with strings, consult the documentation to see how it handles the full range of code points.

// UTF-16 includes surrogate pairs: pairs of 16-bit code units that together encode a single code point 2**16 or greater. For example, the musical G clef, which is assigned the code point U+1 D11E — the conventional hexadecimal spelling of code point number 119070 — is represented in UTF-16 by the pair of code units '0xd834' and '0xdd1e'. The code point can be decoded by combining selected bits from each of the two code units.
// Cleverly, the encoding ensures that neither of these “surrogates” can ever be confused for a valid BMP code point, so you can always tell if you’ re looking at a surrogate, even if you start searching from somewhere in the middle of a string.

console.log('FIVE');
// 1. Avoid declaring global variables.
// 2. Declare variables as locally as possible.
// 3. Avoid adding properties to the global object.
// 4. Use the global object for platform feature detection.
// 5. Always declare local variables
// 6. Always declare new local variables with var.
// 7. Consider using lint tools to help check for unbound variables.
// JavaScripts variable assignment rules make it all too easy to create global variables accidentally. Instead of raising an error, a program that assigns to an unbound variable simply creates a new global variable and assigns to it. This means that forgetting to declare a local variable silently turns it into a global variable.
// 8. Avoid using 'with' statements.
// 9. Use short variable names for repeated access to an object.
// 10. Explicitly bind local variables to object properties instead of implicitly binding them with a with statement.




console.log('SIX');
// HOISTING : Understanding Variable Hoisting
// 1. Variable declarations within a block are implicitly hoisted to the top of their enclosing function.
// 2. Redeclarations of a variable are treated as a single variable.
// 3. Consider manually hoisting local variable declarations to avoid confusion.

// The code in example 1 below is internally represented as the code in example 2.
// Ex. 1
trimSections = function(header, body, footer) {
  for (var i = 0, n = header.length; i < n; i++) {
    header[i] = header[i].trim();
  }
  for (var i = 0, n = body.length; i < n; i++) { 
    body[i] = body[i].trim();
  }
  for (var i = 0, n = footer.length; i < n; i++) {
    footer[i] = footer[i].trim();
  }
}
// The trimSections function appears to declare six local variables (three called i and three called n), but hoisting results in only two. In other words, after hoisting, the trimSections function is equivalent to this rewritten version:
// Ex. 2
trimSections = function(header, body, footer) { 
  var i, n;
  for (i = 0, n = header.length; i < n; i++) { 
    header[i] = header[i].trim();
  }
  for (i = 0, n = body.length; i < n; i++) {
    body[i] = body[i].trim();
  }
  for (i = 0, n = footer.length; i < n; i++) { 
    footer[i] = footer[i].trim();
  }
}
// Because redeclarations can lead to the appearance of distinct variables, some programmers prefer to place all var declarations at the top of their functions, effectively hoisting their variables manually, in order to avoid ambiguity. 


// Understand the difference between binding and assignment.
// Closures capture their outer variables by reference, not by value.
// Use immediately invoked function expressions(IIFEs)to create local scopes.
// Be aware of the cases where wrapping a block in an IIFE can change its behavior.
const wrapElements = function (a) {
  var result = [], i;
  for (i = 0; i < a.length; i++) {
    result[i] = function () {
      return a[i];
    };
  }
  return result;
}
var wrapped = wrapElements([10, 20, 30, 40, 50]);
console.log(wrapped[0]()); // undefined. This is because the nested function in the loop is a closure and only maintains a pointer to i. However, the nested function doesnt get invoked until the loop terminates, at which point the value of i is 5. So the 'i' inside the closure sees 5 in all of it iterations, but 5 at that point is invalid because it is outside the range of the array.



console.log('SEVEN');


console.log('EIGHT');


console.log('NINE');


console.log('TEN');


console.log('ELEVEN');


console.log('TWELVE');


console.log('THIRTEEN');


console.log('FOURTEEN');


console.log('FIFTEEN');


console.log('SIXTEEN');


console.log('SEVENTEEN');


console.log('EIGHTEEN');


console.log('NINETEEN');


console.log('TWENTY');


console.log('TWENTY-ONE');


console.log('TWENTY-TWO');


console.log('TWENTY-THREE');


console.log('TWENTY-FOUR');


console.log('TWENTY-FIVE');


console.log('TWENTY-SIX');


console.log('TWENTY-SEVEN');


console.log('TWENTY-EIGHT');


console.log('TWENTY-NINE');


console.log('THIRTY');