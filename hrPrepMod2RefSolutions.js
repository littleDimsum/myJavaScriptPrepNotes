/****************************************************************************/
console.log();
console.log(' ===== HR PREP MOD 2 REF SOLUTIONS ===== '); 
console.log();
/****************************************************************************/

console.log(' ===== 01: assertEqual ===== '); 
//---------------------------------------------------------------------------
var assertEqual = function (actual, expected, testName) {
  if (actual === expected) {
    console.log('passed [' + testName + ']');
  } else {
    console.log('FAILED [' + testName + '] Expected "' + expected + '", but got "' + actual + '"');
  }
};
assertEqual(5, 5, 'should pass for equal values');
console.log();


console.log(' ===== 02: assertArraysEqual ===== '); 
//---------------------------------------------------------------------------
var assertArraysEqual = function (actual, expected, testName) {
  var areEqualLength = actual.length === expected.length;
  var areEqualItems = actual.every (function(item, i) { 
    return item === expected[i];
  });
  if (areEqualLength && areEqualItems) {
    console.log('passed [' + testName + ']');
  } else {
    console.log('FAILED [' + testName + '] Expected "' + expected + '", but got "' + actual + '"');
  }
};
assertArraysEqual([1, 2, 3], [1, 2, 3], 'should pass for equal arrays');
console.log();


console.log(' ===== 03: assertObjectsEqual ===== '); 
//---------------------------------------------------------------------------
var assertObjectsEqual = function (actual, expected, testName) {
  actual = JSON.stringify(actual);
  expected = JSON.stringify(expected);
  if (actual === expected) {
    console.log('passed [' + testName + ']');
  } else {
    console.log('FAILED [' + testName + '] Expected ' + expected + ', but got ' + actual);
  }
};
// // Also OK:
// function assertObjectsEqual(actual, expected, testName) {
//   if (JSON.stringify(actual) === JSON.stringify(expected)) {
//     console.log('passed [' + testName + ']');
//   } else {
//     console.log('FAILED [' + testName + '] Expected ' + expected + ', but got ' + actual);
//   }
// }
var obj1 = {a: 1};
var obj2 = {a: 1};
assertObjectsEqual(obj1, obj2, 'should pass for equal objects');
console.log();


console.log(' ===== 04: assertWithinRange ===== '); 
//---------------------------------------------------------------------------
var assertWithinRange = function (low, high, actual, testName) {
  var inRange = (low <= actual) && (actual <= high);
  if (inRange) { 
    console.log('passed [' + testName + ']');
  } else { 
    console.log('FAILED [' + testName + '] "' + actual + '" not within range ' + low + ' to ' + high);
  }
};
assertWithinRange(8, 10, 9, 'should pass for a value within the range');
assertWithinRange(8, 10, 8, 'should pass for a value at the edge of the range');
console.log();


console.log(' ===== 05: applyAssertEqual1 ===== '); 
//---------------------------------------------------------------------------
var square = function (n) {
  return n * n;
};
//---------------------------------------------------------------------------
var assertEqual1 = function (actual, expected, testName) {
  if ( actual !== expected ) { 
    console.log('FAILED [' + testName + '] Expected "' + expected + '", but got "' + actual + '"');
  } else { 
    console.log('PASSED [' + testName + ']');
  }
};
assertEqual1(square(3), 9, 'squares a number');
assertEqual1(square(-3), 9, 'squares a negative');
assertEqual1(square(1), 1, 'squares one');
assertEqual1(square(0), 0, 'squares zero');
console.log();


console.log(' ===== 06: applyAssertEqual2 ===== '); 
//---------------------------------------------------------------------------
var every = function (array, callbackFunction) {
  var doesEveryElementPass = true;
  array.forEach(function(element) {
    doesEveryElementPass = doesEveryElementPass && callbackFunction(element);	
  });
  return doesEveryElementPass;
};
// // Bonus: Cooler functional style.
// function every(array, callbackFunction) {
//   return array.reduce(function(allPass, element) {
//     return allPass && callbackFunction(element); 
//   }, true);
// }
//------------------------------------------------------------------------------
var isEven = function (num) {
  return num % 2 === 0;
};
//------------------------------------------------------------------------------
var assertEqual2 = function (actual, expected, testName) {
  if ( actual === expected ) { 
    console.log('PASSED [' + testName + ']');
  } else { 
    console.log('FAILED [' + testName + '] expected "' + expected + '", but got "' + actual + '"');
  }
};
assertEqual2(every([2, 4, 6], isEven), true, 'is true when all values evaluate true');
assertEqual2(every([2, 3, 6], isEven), false, 'is false when any value evaluates false');
console.log();


console.log(' ===== 07: applyAssertArraysEqual ===== '); 
//---------------------------------------------------------------------------
var cube = function (n) {
  return n * n * n;
};
//--------------------------------------------------------------------------
var map = function (array, callbackFunction) {
  var newArray = [];
  array.forEach(function(element) {
    newArray.push(callbackFunction(element));
  });
  return newArray;
};
//---------------------------------------------------------------------------
var cubeAll = function (numbers) {
  return map(numbers, function(n) {
    return n * n * n;
  });
};
//---------------------------------------------------------------------------
var assertArraysEqual = function (actual, expected, testName) {
  var areEqualLength = actual.length === expected.length;
  var areEqualItems = actual.every(function(item, index) {
    return item === expected[index];
  });

  if (areEqualLength && areEqualItems) {
    console.log('passed [' + testName + ']');
  } else {
    console.log('FAILED [' + testName + '] Expected "' + expected + '", but got "' + actual + '"');
  }
};
assertArraysEqual(map([1, 2, 3], cube), [1, 8, 27], 'should successfully map an array');
assertArraysEqual(cubeAll([1, 2, 3]), [1, 8, 27], 'should successfully map a cubed array');
console.log();


console.log(' ===== 08: applyAsserObjectsEqual ===== '); 
//---------------------------------------------------------------------------
var addFullNameProp = function (obj) {
  var firstName = obj.firstName;
  var lastName = obj.lastName;

  if (firstName && lastName) {
    obj['fullName'] = firstName + ' ' + lastName;
  }

  return obj;
};
//---------------------------------------------------------------------------
var assertObjectsEqual = function (actual, expected, testName) {
  actual = JSON.stringify(actual);
  expected = JSON.stringify(expected);
  if ( actual === expected ) { 
    console.log('PASSED [' + testName + ']');
  } else { 
    console.log('FAILED [' + testName + '], expected "' + expected + '", but got "' + actual + '"');
  }
};
// // Also OK:
// function assertObjectsEqual(actual, expected, testName) {
//   if ( JSON.stringify(actual) === JSON.stringify(expected) ) {
//     console.log('PASSED [' + testName + ']');
//   } else {
//     console.log('FAILED [' + testName + '], expected "' + expected + '", but got "' + actual + '"')
//   }
// }
////////////////////////////////////
// Tests for "assertObjectsEqual" //
////////////////////////////////////
var objectA = {foo: 1};
var objectB = {foo: 1};
assertObjectsEqual(objectA, objectB, 'should pass when given two identical objects');

// Note: testing assertion functions is a bit of "Inception"...
// You have to use an assert to test your other assert.
// And since the output is console-logged, you have to trap that too.
// Hence I don't think it's reasonable to expect students to do the negative test on these.
// I think it's sufficient for students to just console log what these assertions do in the failure cases
// and move on...
// But just for illustration, here it is:
var assert = function (actual, testName) {
  if ( actual !== true ) {
    console.log('FAILED [' + testName + '] Expected "' + expected + '" to be true.');
  } else {
    console.log('PASSED [' + testName + ']');
  }
};
var testFailureCaseAssertObjectsEqual = function () {
  var objectA = {a: 1};
  var objectB = {b: 2};
  var originalConsoleLog = console.log; // we're going to override console logger to be able to trap messages.

  var trappedMsg;
  console.log = function(msg) {
    trappedMsg = msg; // trap the message via a closure
  };
  assertObjectsEqual(objectA, objectB);

  console.log = originalConsoleLog; // restore the mocked logger before doing our real assertion
  assert(trappedMsg.includes('FAILED'), 'should fail when given two different objects');
};
testFailureCaseAssertObjectsEqual();

/////////////////////////////////
// Tests for "addFullNameProp" //
/////////////////////////////////

var expectedObject = {
  firstName: "Some", 
  lastName: "Thing", 
  fullName: "Some Thing"
};
var actualObject = { 
  firstName: "Some", 
  lastName: "Thing"
};
assertObjectsEqual(addFullNameProp(actualObject), expectedObject, 'should add a fullName');
console.log();


console.log(' ===== 09: averageIntegers ===== '); 
//---------------------------------------------------------------------------
var sum = function (numbers) {
  return numbers.reduce(function(sum, number) { 
    return sum += number;
  }, 0);
};
//---------------------------------------------------------------------------
var average = function (numbers) {
  return sum (numbers) / numbers.length;
};
//---------------------------------------------------------------------------
var assertEqual = function (actual, expected, testName) {
  if (actual === expected) { 
    console.log('PASSED [' + testName + ']');
  } else {
    console.log('FAILED [' + testName + '] Expected "' + expected + '", but got "' + actual + '"');
  }
};
assertEqual(sum([1, 2, 3]), 6, 'test "sum" function');
assertEqual(average([1, 2, 3]), 2, 'test "average" function');
console.log();


console.log(' ===== 10: decorateStudentListWithAges ===== '); 
//---------------------------------------------------------------------------
var getRandomIntInclusive = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
//---------------------------------------------------------------------------
var decorateClassListWithAges = function (classList) {
  return classList.map(function(name) { 
    var nameObj = { 
      name: name 
    }; 
    nameObj['age'] = getRandomIntInclusive(10, 11); 
    return nameObj; 
  });
};
//---------------------------------------------------------------------------
var assertEqual = function (actual, expected, testName) {
  if (actual === expected) {
    console.log('passed [' + testName + ']');
  } else {
    console.log('FAILED [' + testName + '] Expected "' + expected + '", but got "' + actual + '"');
  }
};
//---------------------------------------------------------------------------
var assertWithinRange = function (low, high, actual, testName) {
  var inRange = low <= actual && actual <= high;
  if (inRange) {
    console.log('passed [' + testName + ']');
  } else {
    console.log('FAILED [' + testName + '] "' + actual + '" not within range ' + low + ' to ' + high);
  }
};
//---------------------------------------------------------------------------
var classList = ["Joe", "Jack", "John", "Fred", "Frank", "Barry", "Larry", "Mary", "Harry", "Farrell", "Susan", "Monica", "Keira", "Caroline", "Harriet", "Erica", "Luann", "Cheryl", "Beth", "Rupa", "Linda", "Allison", "Nancy", "Dora"];
var output = decorateClassListWithAges(classList);

assertEqual(Array.isArray(output), true, 'returns an array');

output.forEach(function(student) {
  assertWithinRange(10, 11, student.age, 'renders all ages either 10 or 11');
});
console.log();


console.log(' ===== 11: isIsogram ===== '); 
//---------------------------------------------------------------------------
var isIsogram = function (text) {
  var letters = text.split('');
  letters = letters.map(function(letter) { 
    return letter.toUpperCase();
  });
  letters = new Set(letters);
  return text.length === letters.size;
};
//---------------------------------------------------------------------------
// // Also good:
// function isIsogram(text) {
//   var chars = text.split('').reduce(function(set, char) {
//     return set.add(char.toLowerCase());
//   }, new Set());
//   return text.length === chars.size;
// }
var assertEqual = function (actual, expected, testName) {
  if (actual === expected) {
    console.log('passed [' + testName + ']');
  } else {
    console.log('FAILED [' + testName + '] Expected "' + expected + '", but got "' + actual + '"');
  }
};
assertEqual(isIsogram(''), true, 'should return true for an empty string');
assertEqual(isIsogram('true'), true, 'cshould return true for an isogram');
assertEqual(isIsogram('assert'), false, 'should return false for non-isogram');
assertEqual(isIsogram('caCAtcHh'), false, 'should ignore case');
console.log();


console.log(' ===== 12: findFirstWordWithMostRepeatedChars ===== '); 
//---------------------------------------------------------------------------
var assertEqual = function (actual, expected, testName) {
  if (actual === expected) { 
    console.log('PASSED [' + testName + ']');
  } else {
    console.log('FAILED [' + testName + '] Expected "' + expected + '", but got "' + actual + '"');
  }
};
//---------------------------------------------------------------------------
var findMaxObjectValue = function (obj) {
  return Object.keys(obj).reduce(function(max, key) {
    return (obj[key] > max) ? obj[key] : max;
  }, -Infinity);
};
//---------------------------------------------------------------------------
var findMaxRepeatCountInWord = function (word) {
  var counts = word.split('').reduce(function(counts, letter) { 
    counts[letter] = counts[letter] + 1 || 1; 
    return counts;
  }, {});
  return findMaxObjectValue(counts);
};
//---------------------------------------------------------------------------
var findFirstWordWithMostRepeatedChars = function (text) {
  var maxRepeatCountOverall = 0;
  var wordWithMaxRepeatCount = '';

  var words = text.split(' ');
  words.forEach(function(word) {
    var repeatCountForWord = findMaxRepeatCountInWord(word);
    if ( repeatCountForWord > maxRepeatCountOverall ) {
      maxRepeatCountOverall = repeatCountForWord;
      wordWithMaxRepeatCount = word;
    }
  });
  return wordWithMaxRepeatCount;
};
assertEqual(findMaxRepeatCountInWord('ooopeiaelskf'), 3, 'finds max repeated letters');
assertEqual(findFirstWordWithMostRepeatedChars('Limit your space'), 'Limit', 'finds max repeats word when no other word has repeats');
assertEqual(findFirstWordWithMostRepeatedChars('Limit your spaaace'), 'spaaace', 'finds max repeats word when other words have repeats');
assertEqual(findFirstWordWithMostRepeatedChars('Limit your spaces'), 'Limit', 'finds 1st word with max repeats when there are ties');
console.log();


console.log(' ===== 13: renderPhoneNumber ===== '); 
//---------------------------------------------------------------------------
var PhoneNumberFormatter = function (numbers) {
  this.numbers = numbers;
};
//---------------------------------------------------------------------------
PhoneNumberFormatter.prototype.render = function() {
  var string = '';
  string += this.parenthesize(this.getAreaCode());
  string += ' ';
  string += this.getExchangeCode();
  string += '-';
  string += this.getLineNumber();
  return string;
};

PhoneNumberFormatter.prototype.getAreaCode = function() {
  return '' + this.slice(0, 3);
};

PhoneNumberFormatter.prototype.getExchangeCode = function() {
  return '' + this.slice(3, 6);
};

PhoneNumberFormatter.prototype.getLineNumber = function() {
  return '' + this.slice(6, 10);
};

PhoneNumberFormatter.prototype.parenthesize = function(string) {
  return '(' + string + ')';
};

PhoneNumberFormatter.prototype.slice = function(start, end) {
  return this.numbers.slice(start, end).join('');
};

var assertEqual = function (actual, expected, testName) {
  if (actual !== expected) {
    console.log('FAILED [' + testName + '] Expected "' + expected + '", but got "' + actual + '"');
  } else {
    console.log('PASSED [' + testName + ']');
  }
};

var formatter = new PhoneNumberFormatter([6, 5, 0, 8, 3, 5, 9, 1, 7, 2]);
assertEqual(formatter.render(), '(650) 835-9172', 'test render method');
console.log();


console.log(' ===== 14: findLongestPalindrome ===== '); 
//---------------------------------------------------------------------------
var reverseString = function (string) { 
  return string.split('').reverse().join('');
};
//---------------------------------------------------------------------------
var isPalindrome = function (word) {
  word = word.toLowerCase();
  return word === reverseString(word);
};
//---------------------------------------------------------------------------
var sortAscendingByLength = function (a, b) {
  if (a.length > b.length) {
    return 1;
  } else if (a.length < b.length) {
    return -1;
  }
  return 0;
};
//---------------------------------------------------------------------------
var findLongestPalindrome = function (sentence) {
  return sentence.split(' ')
          .filter(isPalindrome)
          .sort(sortAscendingByLength)
          .pop();
};
//---------------------------------------------------------------------------
var assertEqual = function (actual, expected, testName) {
  if (actual === expected) { 
    console.log('PASSED [' + testName + ']');
  } else {
    console.log('FAILED [' + testName + '] Expected "' + expected + '", but got "' + actual + '"');
  }
};
assertEqual(findLongestPalindrome('alula ana hannah madam minim'), 'hannah', 'should return longest palindrome');
assertEqual(findLongestPalindrome('alula ana madam minim'), 'minim', 'should return last palindrome when there are multiples of same length');
assertEqual(findLongestPalindrome('Alula anA MAdam'), 'MAdam', 'should be case insensitive');
console.log();


console.log(' ===== 15: fashionInventoryA ===== '); 
//---------------------------------------------------------------------------
var currentInventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      {name: 'tasselled black low-top lace-up', price: 1000},
      {name: 'tasselled green low-top lace-up', price: 1100},
      {name: 'plain beige suede moccasin', price: 950},
      {name: 'plain olive suede moccasin', price: 1050}
    ]
  },
  {
    name: 'Gucci',
    shoes: [
      {name: 'red leather laced sneakers', price: 800},
      {name: 'black leather laced sneakers', price: 900}
    ]
  }
];

var renderShoesForDesigner = function (designer, shoeList) { 
  return shoeList.map (function(shoe) { 
    return [designer, shoe.name, shoe.price].join(', '); 
  });
};
//---------------------------------------------------------------------------
var renderGoodsStringForDesigner = function (designerObject) { 
  return renderShoesForDesigner(designerObject.name, designerObject.shoes).join('\n');
};
//---------------------------------------------------------------------------
var renderInventory = function (inventory) {
  return inventory.map(function(designerObject) { 
    return renderGoodsStringForDesigner(designerObject);
  }).join('\n');
};
//---------------------------------------------------------------------------
var assertEqual = function (actual, expected, testName) {
  if (actual === expected) {
    console.log('passed [' + testName + ']');
  } else {
    console.log('FAILED [' + testName + '] Expected "' + expected + '", but got "' + actual + '"');
  }
};

var designerObject = currentInventory[0];
var shoesForDesigner = renderShoesForDesigner(designerObject.name, designerObject.shoes);

var actualShoeString = shoesForDesigner[0];
var expectedShoeString = 'Brunello Cucinelli, tasselled black low-top lace-up, 1000';
assertEqual(actualShoeString, expectedShoeString, 'should return shoe string in proper format');

var actualGoodsStringForDesigner = renderGoodsStringForDesigner(designerObject);
var expectedGoodsStringForDesigner = 'Brunello Cucinelli, tasselled black low-top lace-up, 1000\nBrunello Cucinelli, tasselled green low-top lace-up, 1100\nBrunello Cucinelli, plain beige suede moccasin, 950\nBrunello Cucinelli, plain olive suede moccasin, 1050';
assertEqual(actualGoodsStringForDesigner, expectedGoodsStringForDesigner, 'should return goods for designer in proper format');

var output = renderInventory(currentInventory);
assertEqual(typeof output, 'string', 'should return a string');

var outputArray = output.split('\n');
var expectedOutputString = 'Gucci, black leather laced sneakers, 900';
assertEqual(outputArray.length, 6, 'should return 6 lines');
assertEqual(outputArray.pop(), expectedOutputString, 'should return expected lines of output');
console.log();


console.log(' ===== 16: fashionInventoryB ===== '); 
//---------------------------------------------------------------------------
var inventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      {name: 'tasselled black low-top lace-up', price: 1000},
      {name: 'tasselled green low-top lace-up', price: 1100},
      {name: 'plain beige suede moccasin', price: 950},
      {name: 'plain olive suede moccasin', price: 1050}
    ]
  },
  {
    name: 'Gucci',
    shoes: [
      {name: 'red leather laced sneakers', price: 800},
      {name: 'black leather laced sneakers', price: 900}
    ]
  }
];

var average = function (numbers) {
  return sum(numbers) / numbers.length;
};
//---------------------------------------------------------------------------
var sum = function (numbers) {
  return numbers.reduce(function(num1, num2) {
    return num1 + num2;
  });
};
//---------------------------------------------------------------------------
var getShoePrices = function (goodsForDesigner) {
  return goodsForDesigner.shoes.map(function(shoe) {
    return shoe.price;
  });
};
//---------------------------------------------------------------------------
var renderAverageCostPerDesigner = function (goodsForDesigner) {
  return {
    name: goodsForDesigner.name,
    averagePrice: average(getShoePrices(goodsForDesigner))
  };
};
//---------------------------------------------------------------------------
var renderAverageCosts = function (inventory) {
  return {
    designers: inventory.map(renderAverageCostPerDesigner)
  };
};
//---------------------------------------------------------------------------
var assertEqual = function (actual, expected, testName) {
  if (actual === expected) {
    console.log('passed [' + testName + ']');
  } else {
    console.log('FAILED [' + testName + '] Expected "' + expected + '", but got "' + actual + '"');
  }
};
//---------------------------------------------------------------------------
var assertObjectsEqual = function (actual, expected, testName) {
  actual = JSON.stringify(actual);
  expected = JSON.stringify(expected);
  if (actual === expected) {
    console.log('passed [' + testName + ']');
  } else {
    console.log('FAILED [' + testName + '] Expected ' + expected + ', but got ' + actual);
  }
};

assertEqual(sum([1, 2, 3]), 6, 'should return the sum of the integers in the given array');
assertEqual(average([4, 5, 6]), 5, 'should return the average of the integers in the given array');
assertObjectsEqual(getShoePrices(inventory[0]), [1000, 1100, 950, 1050], 'should filter to shoe prices');

var actualOutput = renderAverageCosts(inventory);
var expectedOutput = {
  'designers': [
    {
      'name': 'Brunello Cucinelli',
      'averagePrice': 1025
    },
    {
      'name': 'Gucci',
      'averagePrice': 850
    }
  ]
};
assertObjectsEqual(actualOutput, expectedOutput, 'should return the expected output object');
console.log();


console.log(' ===== 17: fashionInventoryC ===== '); 
//---------------------------------------------------------------------------
var currentInventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      {name: 'tasselled black low-top lace-up', price: 1000},
      {name: 'tasselled green low-top lace-up', price: 1100},
      {name: 'plain beige suede moccasin', price: 950},
      {name: 'plain olive suede moccasin', price: 1050}
    ]
  },
  {
    name: 'Gucci',
    shoes: [
      {name: 'red leather laced sneakers', price: 800},
      {name: 'black leather laced sneakers', price: 900}
    ]
  }
];

var filterBlackShoes = function (shoeList) {
  return shoeList.filter (function(shoe) {
    return shoe.name.indexOf('black') !== -1;
  });
};
//---------------------------------------------------------------------------
var renderBlackShoesForDesigner = function (designer, shoeList) {
  shoeList = filterBlackShoes(shoeList); 
  return shoeList.map(function(shoe) { 
    return [designer, shoe.name, shoe.price].join(', ');
  });
};
//---------------------------------------------------------------------------
var renderFilteredGoodsStringForDesigner = function (designerObject) {
  return renderBlackShoesForDesigner(designerObject.name, designerObject.shoes).join('\n');
};
//---------------------------------------------------------------------------
var renderInventory = function (inventory) {
  return inventory.map(function(designerObject) { 
    return renderFilteredGoodsStringForDesigner(designerObject);
  }).join('\n');
};

var assertEqual = function (actual, expected, testName) {
  if (actual === expected) {
    console.log('passed [' + testName + ']');
  } else {
    console.log('FAILED [' + testName + '] Expected "' + expected + '", but got "' + actual + '"');
  }
};
//---------------------------------------------------------------------------
var assertObjectsEqual = function (actual, expected, testName) {
  actual = JSON.stringify(actual);
  expected = JSON.stringify(expected);
  if (actual === expected) {
    console.log('passed [' + testName + ']');
  } else {
    console.log('FAILED [' + testName + '] Expected ' + expected + ', but got ' + actual);
  }
};

var designerObject = currentInventory[0];

var blackShoesForDesigner = filterBlackShoes(designerObject.shoes);
var actualShoeObject = blackShoesForDesigner[0];
var expectedShoeObject = { name: 'tasselled black low-top lace-up', price: 1000 };

assertObjectsEqual(actualShoeObject, expectedShoeObject, 'should return black shoe object');
assertEqual(blackShoesForDesigner.length, 1, 'should return an array with only one object');

var blackShoesStringForDesigner = renderFilteredGoodsStringForDesigner(designerObject);
var expectedBlackShoesString = 'Brunello Cucinelli, tasselled black low-top lace-up, 1000';
assertEqual(blackShoesStringForDesigner, expectedBlackShoesString, 'should return properly formatted string');

var output = renderInventory(currentInventory);
assertEqual(typeof output, 'string', 'should return a string');

var outputArray = output.split('\n');
var expectedOutputString = 'Gucci, black leather laced sneakers, 900';
assertEqual(outputArray.length, 2, 'should return 2 lines');
assertEqual(outputArray.pop(), expectedOutputString, 'should return expected lines of output');
console.log();


console.log(' ===== 18: fashionInventoryD ===== '); 
//---------------------------------------------------------------------------
var isLaced = function (name) {
  return name.indexOf('lace') >= 0;
};
//---------------------------------------------------------------------------
var isLacedShoe = function (shoe) {
  return isLaced(shoe.name);
};
//---------------------------------------------------------------------------
var getAllShoes = function (inventory) {
  return inventory.reduce(function(shoes, goodsForDesigner) {
    return shoes.concat(goodsForDesigner.shoes);
  }, []);
};
//---------------------------------------------------------------------------
var getLaceNameDataForShoe = function (shoe) {
  var nameWords = shoe.name.split(' ');
  return {
    nameWords: nameWords,
    targetWordIndex: nameWords.findIndex(isLaced)
  };
};
//---------------------------------------------------------------------------
var getLaceNameDataForShoes = function (inventory) {
  return getAllShoes(inventory)
         .filter(isLacedShoe)
         .map(getLaceNameDataForShoe);
};
//---------------------------------------------------------------------------
var assertObjectsEqual = function (actual, expected, testName) {
  actual = JSON.stringify(actual);
  expected = JSON.stringify(expected);
  if (actual === expected) {
    console.log('passed [' + testName + ']');
  } else {
    console.log('FAILED [' + testName + '] Expected ' + expected + ', but got ' + actual);
  }
};
//---------------------------------------------------------------------------
var testRendersOutputFormat = function () {
  var inventory = [
    {
      name: 'Brunello Cucinelli',
      shoes: [
        {name: 'tasselled black low-top lace-up', price: 1000},
        {name: 'tasselled green low-top lace-up', price: 1100},
        {name: 'plain beige suede moccasin', price: 950},
        {name: 'plain olive suede moccasin', price: 1050}
      ]
    },
    {
      name: 'Gucci',
      shoes: [
        {name: 'red leather laced sneakers', price: 800},
        {name: 'black leather laced sneakers', price: 900}
      ]
    }
  ];
  var output = getLaceNameDataForShoes(inventory);
  var expectedOutput = [
    {
      "nameWords": [
        "tasselled",
        "black",
        "low-top",
        "lace-up"
      ],
      "targetWordIndex": 3
    },
    {
      "nameWords": [
        "tasselled",
        "green",
        "low-top",
        "lace-up"
      ],
      "targetWordIndex": 3
    },
    {
      "nameWords": [
        "red",
        "leather",
        "laced",
        "sneakers"
      ],
      "targetWordIndex": 2
    },
    {
      "nameWords": [
        "black",
        "leather",
        "laced",
        "sneakers"
      ],
      "targetWordIndex": 2
    }
  ];
  assertObjectsEqual(output, expectedOutput, 'should render output array identical to expected output array');
};

// Run test suite
testRendersOutputFormat();
console.log();



/****************************************************************************/
console.log();
console.log(' ===== END OF FILE ===== '); 
console.log();
/****************************************************************************/