//
console.log(' ======================================== ');
console.log('                EASY_SETS                 ');
console.log(' ======================================== ');
console.log();
console.log();
//
console.log(' ===== 01: First Reverse ===== ');
var FirstReverse = function (str) {
  var newString = '';
  for (var i = str.length - 1; i >= 0; i--) {
    newString = newString + str.charAt(i);
  }
  return newString;
};
console.log(FirstReverse('readline'));
console.log(FirstReverse('suhaibu'));
console.log(FirstReverse('suhaibu yehuza'));
console.log();


console.log(' ===== 02: First Factorial =====');
var FirstFactorial = function (num) {
  var factorial = 1;
  for (var i = 1; i <= num; i++) {
    factorial = factorial * i;
  }
  return factorial;
};
console.log(FirstFactorial(4));
console.log(FirstFactorial(7));
console.log(FirstFactorial(10));
console.log();


console.log(' ===== 03: Longest Word =====');
var LongestWord = function (sen) {
  var arr = sen.match(/[a-z0-9]+/gi);
  var sorted = arr.sort(function(a, b) {
    return b.length - a.length;
  });
  return sorted[0];
};
console.log(LongestWord('the $$$longest# word is coderbyte'));
console.log(LongestWord('John is my son so i sent him to school'));
console.log(LongestWord('Peter Pipper picked a peck of pickled pepper'));
console.log();


console.log(' ===== 04: Letter Changes =====');
var LetterChanges = function (str) {
  var converted = str.replace(/[a-z]/gi, function(char) {
    return (char === 'z' || char === 'Z') ? 'a' : String.fromCharCode(char.charCodeAt() + 1);
  });
  var capitalized = converted.replace(/a|e|i|o|u/gi, function(vowel) {
    return vowel.toUpperCase();
  });
  return capitalized;
};
console.log(LetterChanges('fun times!'));
console.log(LetterChanges('suhaibu Yehuza'));
console.log(LetterChanges('Amazing Grace!!!'));
console.log();


console.log(' ===== 05: Simple Adding =====');
var SimpleAdding = function (num) {
  var answer = 0;
  for (var i = 1; i <= num; i++) {
    answer = answer + i;
  }
  return answer;
};
console.log(SimpleAdding(2));
console.log(SimpleAdding(4));
console.log(SimpleAdding(10));
console.log();


console.log(' ===== 06: Letter Capitalize =====');
var LetterCapitalize = function (str) {
  var words = str.split(' ');
  for (var i = 0; i < words.length; i++) {
    words[i] = words[i].substring(0, 1).toUpperCase() + words[i].substring(1);
  }
  return words.join(' ');
};
console.log(LetterCapitalize('hello world from coderbyte'));
console.log(LetterCapitalize('john bull is my son'));
console.log(LetterCapitalize('so i sent him to school'));
console.log();


console.log(' ===== 07: Simple Symbols =====');
var SimpleSymbols = function (str) {
  var str = '=' + str + '=';
  for (var i = 0; i < str.length; i++) {
    if (str[i].match(/[a-z]/i) !== null) {
      if (str[i - 1] !== '+' || str[i + 1] !== '+') {
        return false;
      }
    }
  }
  return true;
};
console.log(SimpleSymbols('+d+=3=+s+'));
console.log(SimpleSymbols('f++d+'));
console.log(SimpleSymbols('+d+=3=+s+m+n+'));
console.log();


console.log(' ===== 08: Check Nums =====');
var CheckNums = function (num1, num2) {
  return (num2 === num1) ? '-1' : (num2 > num1) ? true : false;
};
console.log(CheckNums(3, 122));
console.log(CheckNums(4, 4));
console.log(CheckNums(11, 7));
console.log();


console.log(' ===== 09: Time Convert =====');
var TimeConvert = function (num) {
  var hours = Math.floor(num / 60);
  var minutes = num % 60;
  return hours + ':' + minutes;
};
console.log(TimeConvert(124));
console.log(TimeConvert(43));
console.log(TimeConvert(748));
console.log();


console.log(' ===== 10: Alphabet Soup =====');
var AlphabetSoup = function (str) {
  var chars = str.split('');
  var sorted = chars.sort();
  return sorted.join('');
};
console.log(AlphabetSoup('coderbyte'));
console.log(AlphabetSoup('hooplah'));
console.log(AlphabetSoup('asparagus'));
console.log();


console.log(' ===== 11: AB Check =====');
var ABCheck = function (str) {
  var str = str.toLowerCase();
  for (var i = 0; i < str.length; i++) {
    if (str[i] === 'a' && str[i + 4] === 'b') { return true; }
    if (str[i] === 'b' && str[i + 4] === 'a') { return true; }
  }
  return false;
};
console.log(ABCheck('Laura sobs'));
console.log(ABCheck('after badly'));
console.log(ABCheck('lane borrowed'));
console.log();


console.log(' ===== 12: Vowel Count =====');
var VowelCount = function (str) {
  var str = str.toLowerCase();
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    if (vowels.indexOf(str[i]) !== -1) {
      count = count + 1;
    }
  }
  return count;
};
console.log(VowelCount('All cows eat grass'));
console.log(VowelCount('Odododiodio is in Ghana'));
console.log(VowelCount('Peter Piper picked a peck of pickle pepper'));
console.log();


console.log(' ===== 13: Word Count =====');
var WordCount = function (str) {
  return str.split(' ').length;
};
console.log(WordCount('I am 4 words'));
console.log(WordCount('In God We Trust'));
console.log(WordCount('Oh say can you see'));
console.log();


console.log(' ===== 14: Ex Oh =====');
var WordCount = function (str) {
  var x = str.split('x').join('');
  var o = str.split('o').join('');
  return x.length === o.length;
};
console.log(WordCount('xoxoxoxo'));
console.log(WordCount('xoxoxoxox'));
console.log(WordCount('totobixoxxooxxx'));
console.log();


console.log(' ===== 15: Palindrome =====');
var Palindrome = function (str) {
  var str = str.split(' ').join('').toLowerCase();
  var rev = str.split('').reverse().join('');
  return str === rev;
};
console.log(Palindrome('Never odd or even'));
console.log(Palindrome('who is who'));
console.log(Palindrome('eye'));
console.log();


console.log(' ===== 16: Arith Geo =====');
var ArithGeo = function (arr) {
  var arrayDiffs = function (diff, arr, subtract) {
    for (var i = 2; i < arr.length; i++) {
      var tempDiff = (subtract) ? arr[i] - arr[i - 1] : arr[i] / arr[i - 1];
      if (tempDiff !== diff) { 
        return false; 
      } else if (i === arr.length - 1 && tempDiff === diff) { 
        return true; 
      }
    }
  };

  var diffArith = arr[1] - arr[0];
  var diffGeo = arr[1] / arr[0];
  var isArithSeq = arrayDiffs(diffArith, arr, true);

  if (!isArithSeq) {
    var isGeoSeq = arrayDiffs(diffGeo, arr, false);
    return (isGeoSeq) ? 'Geometric' : -1;
  } else {
    return 'Arithmetic';
  }

};
console.log(ArithGeo([3, 9, 27, 81]));
console.log(ArithGeo([2, 4, 6, 8]));
console.log(ArithGeo([1, 2, 5, 6]));
console.log();


console.log(' ===== 17: Array Addition I =====');
var ArrayAdditionI = function (arr) {
  var sum = Math.max.apply(null, arr);
  arr.splice(arr.indexOf(sum), 1);
  // power set
  var sets = [[]];

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
console.log(ArrayAdditionI([4, 6, 23, 10, 1, 3]));
console.log(ArrayAdditionI([5, 7, 16, 1, 2]));
console.log(ArrayAdditionI([3, 5, -1, 8, 12]));
console.log();


console.log(' ===== 18: Letter Count I =====');
var letterCountI = function (str) {
  var words = str.split(' ');
  var table = {};
  for (var i = 0; i < words.length; i++) {

    var thisWord = words[i];
    table[thisWord] = {};
    table[thisWord]['highest'] = 0;
    for (var c = 0; c < words[i].length; c++) {
      var thisChar = thisWord[c];
      table[thisWord][thisChar] === undefined ?
      table[thisWord][thisChar] = 1 :
      table[thisWord][thisChar] += 1;
      if (table[thisWord][thisChar] > table[thisWord]['highest']) {
        table[thisWord]['highest'] = table[thisWord][thisChar];
      }
    }

  }

  var answer = {word: null, count: 1};

  for (var w in table) {
    if (table[w]['highest'] > answer['count']) {
      answer['count'] = table[w]['highest'];
      answer['word'] = w;
    }
  }
  return (answer['count'] === 1) ? -1 : answer['word'];
};
console.log(letterCountI('world hello from coderbyte'));
console.log(letterCountI('Today, is the greatest day ever!'));
console.log(letterCountI('No words'));
console.log();


console.log(' ===== 19: Second GreatLow =====');
var secondGreatLow = function (arr) {
  var unique = arr.filter(function(elem, index, self) {
    return self.indexOf(elem) === index;
  });
  var sorted = unique.sort(function(a, b) {
    return a - b;
  });
  if (sorted.length < 2) {
    return sorted[0] + ' ' + sorted[0];
  } else {
    return sorted[1] + ' ' + sorted[sorted.length - 2];
  }
};
console.log(secondGreatLow([7, 7, 12, 98, 106]));
console.log(secondGreatLow([2, 10, 5, 1, -12, 140]));
console.log(secondGreatLow([1, 42, 42, 180]));
console.log();


console.log(' ===== 20: Division Stringfield =====');
var DivisionStringified = function (num1, num2) {
  var div = Math.round(num1 / num2);
  div = div.toString().split('');
  // keep counter for inserting comma logic
  var insert = 0;
  if (div.length > 3) {
    for (var i = div.length - 1; i >= 0; i--) {
      insert++;
      if (insert === 3) {
        div[i] = ',' + div[i];
        insert = 0;
      }
    }
  }
  return div.join('');
};
console.log(DivisionStringified(1400500, 52));
console.log(DivisionStringified(123456789, 10000));
console.log(DivisionStringified(5, 2));
console.log();


console.log(' ===== 21: Counting Minutes I =====');
var getDayMinutes = function (str) {
  var min = 0;
  var t = Number(str.split(':')[0]);
  min += t * 60;
  t = Number(str.substr(str.length - 4, 2));
  min += t;
  if (str.substr(str.length - 2) === 'pm') {
    min += 12 * 60;
    return min;
  }
};
//==============================================================================
var CountingMinutesI = function (str) {
  var times = str.split('-');
  var diff = getDayMinutes(times[1]) - getDayMinutes(times[0]);
  if (diff < 0) {
    diff += 24 * 60;
  // code goes here
    return diff;
  }
};
console.log(CountingMinutesI('9:00am-10:00am'));
console.log(CountingMinutesI('12:30pm-12:00am'));
console.log(CountingMinutesI('1:23am-1:08am'));
console.log();


console.log(' ===== 22: Mean Mode =====');
var MeanMode = function (arr) {
  // we use the reduce function which will sum up all the numbers in the array
  var summed = arr.reduce(function(previousVal, currentVal, index, self) {
    return previousVal + currentVal;
  });
  var mean = summed / arr.length;
  // the table that will contain each number as the key and the number of times
  // it occurs as the value. e.g. {'5': 1, '3': 3, '1': 1}
  var table = {};
  for (var i = 0; i < arr.length; i++) {
    var number = arr[i];
    table[number] === undefined ? table[number] = 1 : table[number] += 1;
  }
  // setup a new object that will store the number with the highest count
  var answer = {number: null, count: 0};
  for (var n in table) {
    if (table[n] > answer['count']) {
      answer['count'] = table[n];
      answer['number'] = n;
    }
  }
  return (answer['number'] === mean) ? 1 : 0;
};
console.log(MeanMode([5, 3, 3, 3, 1]));
console.log(MeanMode([1, 2, 3]));
console.log(MeanMode([4, 4, 4, 6, 2]));
console.log();


console.log(' ===== 23: Dash Insert =====');
var DashInsert = function (str) {
  var arr = str.split('');
  for (var i = 0; i < str.length - 1; i++) {
    if (arr[i] % 2 !== 0 && arr[i + 1] % 2 !== 0) {
      arr[i] = arr[i] + '-';
    }
  }
  return arr.join('');
};
console.log(DashInsert('13568999'));
console.log(DashInsert('454793'));
console.log(DashInsert('99946'));
console.log();


console.log(' ===== 24: Swap Case =====');
var SwapCase = function (str) {
  var chars = str.split('');
  for (var i = 0; i < chars.length; i++) {
    if (chars[i] === chars[i].toUpperCase()) {
      chars[i] = chars[i].toLowerCase();
    } else if (chars[i] === chars[i].toLowerCase()) {
      chars[i] = chars[i].toUpperCase();
    }
  }
  return chars.join('');
};
console.log(SwapCase('Hello-LOL'));
console.log(SwapCase('Sup DUDE!!?'));
console.log(SwapCase('hELLO wORLD'));
console.log();


console.log(' ===== 25: Number Addition =====');
var NumberAddition = function (str) {
  // use the JavaScript match function which tries to find all matching patterns
  // in the string and it returns an array of all matches found. e.g.'75Number9'
  // returns [75, 9] or set to 0 if no numbers are found
  var nums = str.match(/[0-9]+/gi) || [0];
  // use the JavaScript reduce functions which calls a function on each value in
  // the array and returns a final single value
  return nums.reduce(function(previousVal, currentVal) {
    return parseInt(previousVal) + parseInt(currentVal);
  });
};
console.log(NumberAddition('75Number9'));
console.log(NumberAddition('10 2One Number*1*'));
console.log(NumberAddition('88Hello 3World!'));
console.log();


console.log(' ===== 26: Third Greatest =====');
var ThirdGreatest = function (strArr) {
  strArr.sort(function(a, b) { return b.length - a.length; });
  return strArr[2];
};
console.log(ThirdGreatest(['hello', 'world', 'before', 'all']));
console.log(ThirdGreatest(['coder', 'byte', 'code']));
console.log(ThirdGreatest(['abc', 'defg', 'z', 'hijk']));
console.log();


console.log(' ===== 27: Power of Two =====');
var PowersofTwo = function (num) {
  var power = 0;
  var counter = 1;
  while (power < num) {
    power = Math.pow(2, counter);
    counter++;
  }
  return (num === power) ? true : false;
};
console.log(PowersofTwo(8));
console.log(PowersofTwo(34));
console.log(PowersofTwo(512));
console.log();


console.log(' ===== 28: Additive Persistence =====');
var AdditivePersistence = function (num) {
  var arr = num.toString().split('');
  while (arr.length > 1) {
    var added = 0;
    for (var i = 0; i < arr.length; i++) {
      added += parseInt(arr[i]);
    }
    return 1 + AdditivePersistence(added);
  }
  return 0;
};
console.log(AdditivePersistence(2718));
console.log(AdditivePersistence(378264));
console.log(AdditivePersistence(14));
console.log();


console.log(' ===== 29: Multiplicative Persistence =====');
var MultiplicativePersistence = function (num) {
  var arr = num.toString().split('');
  while (arr.length > 1) {
    var mult = 1;
    for (var i = 0; i < arr.length; i++) {
      mult *= parseInt(arr[i]);
    }
    return 1 + MultiplicativePersistence(mult);
  }
  return 0;
};
console.log(MultiplicativePersistence(39));
console.log(MultiplicativePersistence(432));
console.log(MultiplicativePersistence(89643));
console.log();


console.log(' ===== 30: Off Line Minimum =====');
var OffLineMinimum = function (strArr) {
  var nums = [];
  // store only the minimum numbers
  var outputs = [];
  for (var i = 0; i < strArr.length; i++) {
    if (strArr[i] !== 'E') {
      nums.push(parseInt(strArr[i]));
    } else {
      var smallest = Math.min.apply(null, nums);
      nums.splice(nums.indexOf(smallest), 1);
      outputs.push(smallest);
    }
  }
  return outputs.join(',');
};
console.log(OffLineMinimum(['5', '4', '6', 'E', '1', '7', 'E', 'E', '3', '2'])); // 4,1,5
console.log(OffLineMinimum(['1', '2', 'E', 'E', '3'])); // 1,2
console.log(OffLineMinimum(['4', 'E', '1', 'E', '2', 'E', '3', 'E']));// 4,1,2,3
console.log();


console.log(' ===== 31: Changing Sequence =====');
var ChangingSequence = function (arr) {
  // check if first two numbers form an increasing sequence
  var increasing = arr[1] > arr[0] ? true : false;
  // loop through the rest of the array
  for (var i = 2; i < arr.length; i++) {
    // determine if next number in sequence matches
    // the boolean value we define in the variable 'increasing'
    var seq = arr[i] > arr[i - 1];
    // if they do not match, then we know the sequence changes
    if (seq !== increasing) { return i - 1; }
  }
  // if no change was detected, then just return -1
  return -1;
};
console.log(ChangingSequence([1, 2, 4, 6, 4, 3, 1])); // 3
console.log(ChangingSequence([-4, -2, 9, 10])); // -1
console.log(ChangingSequence([5, 4, 3, 2, 1, 10, 11])); // 4
console.log();


console.log(' ===== 32: Overlapping Ranges =====');
var OverlappingRanges = function (arr) {
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
console.log(OverlappingRanges([4, 10, 2, 6, 3]));
console.log(OverlappingRanges([1, 8, 2, 4, 4]));
console.log(OverlappingRanges([5, 11, 1, 5, 1]));
console.log();


console.log(' ===== 33: Superincreasing =====');
var Superincreasing = function (arr) {
  // store the sum
  var sum = 0;
  // loop through entire array
  for (var i = 0; i < arr.length; i++) {
    // if a number is less than or equal to the current sum, simply return false
    if (arr[i] <= sum) { return 'false'; }
    // update the sum after each iteration
    sum += arr[i];
  }
  return true;
};
console.log(Superincreasing([1, 3, 6, 13, 54]));
console.log(Superincreasing([1, 2, 3, 4]));
console.log(Superincreasing([1, 2, 5, 10]));
console.log();


console.log(' ===== 34: Hamming Distance =====');
var HammingDistance = function (strArr) {
  // get each word
  var word1 = strArr[0];
  var word2 = strArr[1];
  // store the final count
  var count = 0;
  // loop through one of the words and check to see if
  // each character from both words matches up
  for (var i = 0; i < word1.length; i++) {
    if (word1[i] !== word2[i]) {
      count++;
    }
  }
  return count;
};
console.log(HammingDistance(['coder', 'codec']));
console.log(HammingDistance(['10011', '10100']));
console.log(HammingDistance(['helloworld', 'worldhello']));
console.log();


console.log(' ===== 35: Rectangle Area =====');
var RectangleArea = function (strArr) {
  var points = strArr.map(function(c) {
    return c.replace('(', '').replace(')', '').split(' ').map(function(d) {
      return Number(d);
    });
  });
  var xs = points.map(function(c) { return c[0]; });
  var ys = points.map(function(c) { return c[1]; });
  var xDiff = Math.max.apply(null, xs) - Math.min.apply(null, xs);
  var yDiff = Math.max.apply(null, ys) - Math.min.apply(null, ys);

  return xDiff * yDiff;
};
console.log(RectangleArea(['(0 0)', '(3 0)', '(0 2)', '(3 2)']));
console.log(RectangleArea(['(1 1)', '(1 3)', '(3 1)', '(3 3)']));
console.log(RectangleArea(['(0 0)', '(1 0)', '(1 1)', '(0 1)']));
console.log();


console.log(' ===== 36: Bitwise One =====');
var BitwiseOne = function (strArr) {
  // convert the two binary strings to integers
  var n1 = parseInt(strArr[0], 2);
  var n2 = parseInt(strArr[1], 2);
  // bitwise OR the numbers and convert the answer
  // back into a binary string
  return (n1 | n2).toString(2);
};
console.log(BitwiseOne(['1001', '0100']));
console.log(BitwiseOne(['100', '000']));
console.log(BitwiseOne(['00011', '01010']));
console.log();


console.log(' ===== 37: Other Products =====');
var extract = function (arr, i) {
  return arr.slice(0, i).concat(arr.slice(i + 1));
};
//==============================================================================
var OtherProducts = function (arr) {
  return arr.map((_, i) => extract(arr, i).reduce((a, b) => a * b)).join('-');
};
console.log(OtherProducts([1, 2, 3, 4, 5]));
console.log(OtherProducts([1, 4, 3]));
console.log(OtherProducts([3, 1, 2, 6]));
console.log();


console.log(' ===== 38: Wave Sorting =====');
var WaveSorting = function (arr) {
  arr = arr.sort(function( a, b) { return a - b; });
  if (arr.length % 2 === 0) {
    var mid = (arr[arr.length / 2 - 1] + arr[arr.length / 2]) / 2;
  } else { mid = arr[Math.floor(arr.length / 2)]; }
  var lows = 0; var highs = 0;
  for ( var i = 0; i < arr.length; i++) {
    if (arr[i] < mid) { lows++; }
    if (arr[i] > mid) { highs++; }
  }
  if (lows < highs) { return false; }
  return true;
};
console.log(WaveSorting([0, 1, 2, 4, 1, 4]));
console.log(WaveSorting([0, 1, 2, 4, 1, 1, 1]));
console.log(WaveSorting([0, 4, 22, 4, 14, 4, 2]));
console.log();


console.log(' ===== 39: Array Matching =====');
var ArrayMatching = function (strArr) {
  strArr = strArr.map(val => val.replace(/[\[\]]/g, '')
  .split(/\s*,\s*/).map(val1 => parseInt(val1, 10)));

  var resArr = [];
  var arr1 = strArr[0];
  var arr2 = strArr[1];
  var length = Math.max(arr1.length, arr2.length);

  for (var i = 0; i < length; i++) {
    if (arr1[i] && arr2[i]) {
      resArr[i] = arr1[i] + arr2[i];
    } else {
      resArr[i] = arr1[i] || arr2[i];
    }
  }
  return resArr.join('-');
};
console.log(ArrayMatching(['[1, 2, 5, 6]', '[5, 2, 8, 11]'])); // 6-4-13-17
console.log(ArrayMatching(['[5, 2, 3]', '[2, 2, 3, 10, 6]'])); // 7-4-6-10-6
console.log(ArrayMatching(['[1, 2, 1]', '[2, 1, 5, 2]'])); // 3-3-6-2
console.log();


console.log(' ===== 40: Binary Reversal =====');
var BinaryReversal = function (str) {
  var n = +str;
  var binary = n.toString(2);
  binary = binary.split('').reverse();
  while (binary.length % 8 !== 0) {
    binary.push('0');
  }
  binary = binary.join('');
  return String(Number.parseInt(binary, 2));
};
console.log(BinaryReversal('47'));
console.log(BinaryReversal('4567'));
console.log(BinaryReversal('213'));
console.log();


console.log(' ===== 41: Longest Increasing Sequence =====');
var LongestIncreasingSequence = function (array) {
//---------------------------------------------------------------
  var isIncreasing = function (temp) {
    var increasing = true;
    for (var s = 0; s < temp.length; s++) {
      if (temp[s] >= temp[s + 1]) {
        increasing = false;
      }
    } if (increasing) { 
      return temp.length; 
    } else {
      return 0; 
    }
  };
//---------------------------------------------------------------
  var permNum = Math.pow(2, array.length); var ans = 1;

  for (var i = 1; i < permNum; i++) {
    var binary = i.toString(2);
    var temp = [];
    while (binary.length < array.length) {
      binary = '0' + binary;
    }
    for (var j = 0; j < binary.length; j++) {
      if (binary[j] === '1') {
        temp.push(array[j]); 
      }
    }
    var len = isIncreasing (temp);
    if (len > ans) {
      ans = len; 
    }//run temp through function that sees if it's increasing
  }

  return ans;
};
console.log(LongestIncreasingSequence([4, 3, 5, 1, 6])); // 3
console.log(LongestIncreasingSequence([9, 9, 4, 2])); // 1
console.log(LongestIncreasingSequence([10, 22, 9, 33, 21, 50, 41, 60, 22, 68, 90]));
console.log();


console.log(' ===== 42: Even Pairs =====');
/*
function EvenPairs(str) {
  var buildNum = '';
  var counter = 0;

  for (var i = 1; i < str.length; i++) {
    if (isNaN(str[i] % 2)) {
      counter = 0;
    } else if (str[i] % 2 !== 0) {
      buildNum += str[i];
    } else if (str[i] % 2 === 0) {
      counter++;
    }
    if (counter === 2) { return true; }
  }
  return false;

}
*/

var EvenPairs = function (str) {
  var regEx = /[24680]\d*[24680]/;

  return regEx.test(str);
};
console.log(EvenPairs('f178svg3k19k46'));
console.log(EvenPairs('f09r27i8e67'));
console.log(EvenPairs('3gy41d216'));
console.log();


console.log(' ===== 43: Next Palindrome =====');
var NextPalindrome = function (num) {
  var count = num + 1;
  while (true) {
    var numString = count.toString();
    var revString = numString.split('').reverse().join('');
    if (revString === numString) {
      return parseInt(numString, 10);
    }
    count++;
  }
};
console.log(NextPalindrome(24));
console.log(NextPalindrome(2));
console.log(NextPalindrome(180));
console.log();


console.log(' ===== 44: Largest Pair =====');
var LargestPair = function (num) {
  var str = (num).toString();
  var largestPair = '' + str[0] + str[1];
  for (var i = 1; i < str.length - 1; i++) {
    var pair = '' + str[i] + str[i + 1];
    if (Number(pair) > Number(largestPair)) { largestPair = pair; }
  }
  return largestPair;
};
console.log(LargestPair(4759472)); // 94
console.log(LargestPair(453857)); // 85
console.log(LargestPair(363223311)); // 63
console.log();


console.log(' ===== 45: Nonrepeating Character =====');
var NonrepeatingCharacter = function (str) {
  var len = str.length;
  var countObj = {};

  for (var i = 0; i < len; i++) {
    if (countObj[str[i]]) {
      countObj[str[i]]++;
    } else {
      countObj[str[i]] = 1;
    }
  }
  for (var j = 0; j < len; j++) {
    if (countObj[str[j]] === 1) {
      return str[j]; 
    }
  }
};
console.log(NonrepeatingCharacter('agettkgaeee'));
console.log(NonrepeatingCharacter('abcdef'));
console.log(NonrepeatingCharacter('hello world hi hey'));
console.log();


console.log(' ===== 46: Two Sum =====');
var TwoSum = function (arr) {
  var target = arr.shift();
  var len = arr.length;
  var holdArr = [];

  for (var i = 0; i < len; i++) {
    for (var j = i + 1; j < len; j++) {
      if (arr[i] + arr[j] === target) {
        holdArr.push(`${arr[i].toString()},${arr[j].toString()}`);
        break;
      }
    }
  }
  return holdArr.length ? holdArr.join(' ') : -1;
};
console.log(TwoSum([7, 3, 5, 2, -4, 8, 11])); // 5,2 -4,11
console.log(TwoSum([17, 4, 5, 6, 10, 11, 4, -3, -5, 3, 15, 2, 7])); //
console.log(TwoSum([7, 6, 4, 1, 7, -2, 3, 12])); // 6,1 4,3
console.log();


console.log(' ===== 47: Bitwise Two =====');
var BitwiseTwo = function (strArr) {
  var num1 = strArr[0];
  var num2 = strArr[1];
  var len = strArr[0].length;
  var resStr = '';

  for (var i = 0; i < len; i++) {
    if (num1[i] === '1' && num2[i] === '1') {
      resStr += '1';
      continue;
    } else {
      resStr += '0';
      continue;
    }
  }
  return resStr;
};
console.log(BitwiseTwo(['10111', '01101'])); // 00101
console.log(BitwiseTwo(['100', '000'])); // 000
console.log(BitwiseTwo(['10100', '11100'])); // 10100
console.log();


console.log(' ===== 48: Powerset Count =====');
var PowerSetCount = function (arr) {
  var len = arr.length;
  return Math.pow(2, len);
};
console.log(PowerSetCount([1, 2, 3])); // 8
console.log(PowerSetCount([1, 2, 3, 4])); // 16
console.log(PowerSetCount([5, 6])); // 4
console.log();


console.log(' ===== 49: Product Digits =====');
var ProductDigits = function (num) {
  var pdig = 1 + ('' + num).length;
  for (var i = 2; i < num; i++) {
    if (num % i === 0) {
      if (('' + i).length + ('' + num / i).length < pdig) { pdig = ('' + i).length + ('' + num / i).length; }
    }
  }
  return pdig;
};
console.log(ProductDigits(24)); // 2
console.log(ProductDigits(6)); // 2
console.log(ProductDigits(23));// 3
console.log();


console.log(' ===== 50: Palindrome Creator =====');
var PalindromeCreator = function (str) {
  // try existing word
  if (str === str.split('').reverse().join('')) {
    return 'palindrome';
  }
  // try one letter
  for (var i = 0; i < str.length; i++) {
    const oneLetterTest = str.slice(0, i) + str.slice(i + 1);
    if (oneLetterTest === oneLetterTest.split('').reverse().join('')) {
      return str[i];
    }
  }

  //try two letters
  for (var i = 0; i < str.length; i++) {
    const oneLetterTest1 = str.slice(0, i) + str.slice(i + 1);
    for (var j = i; j < oneLetterTest1.length; j++) {
      const twoLetterTest = oneLetterTest1.slice(0, j) + oneLetterTest1.slice(j + 1);
      if (twoLetterTest === twoLetterTest.split('').reverse().join('')) {

        return str[i] + oneLetterTest1[j];
      }
    }
  }
  return 'not possible';
};
console.log(PalindromeCreator('abjchba')); // abhba
console.log(PalindromeCreator('mmop')); // not possible
console.log(PalindromeCreator('kjjjhjjj')); // k
console.log();


console.log(' ===== 51: Basic Roman Numerals =====');
var BasicRomanNumerals = function (str) {
  const store = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  var total = 0;
  for (var i = 0; i < str.length; i++) {
    var base = store[str[i]];
    if (store[str[i + 1]] !== undefined && store[str[i + 1]] > base) {
      base = store[str[i + 1]] - base;
      i++;
    }
    total += base;
  }
  return total;
};
console.log(BasicRomanNumerals('XXIV')); // 24
console.log(BasicRomanNumerals('IV'));  // 4
console.log(BasicRomanNumerals('XLVI'));  // 46
console.log();


console.log(' ===== 52: Food Distribution =====');
/**
 * Calculate the difference between adjacent numbers in an array. The result is an
 * array of n - 1 items. A positive item means the first number is bigger, and
 * negative item means the second number is bigger.
 *
 * Example: differences([5,3,1,2,1]) -> [2,2,-1,1]
 */

/*
function differences(array) {
  const diffs = [];
  for (var i = 0; i < array.length - 1; i++) {
    diffs.push(Math.abs(array[i] - array[i + 1]));
  }
  return diffs;
}
// Sum the values in an array
function sum(array) {
  return  array.reduce((p, c) => p + c, 0);
}
function smallestDifference(p, c) {
  return sum(differences(c)) < sum(differences(p)) ? c : p;
}

function FoodDistribution(arr) {
  var [sandwiches, ...hungers] = arr;
  var diffs = differences(hungers);

  while (sandwiches > 0 && sum(diffs) > 0) {
    const possibles = [];

    for (var i = 0; i < hungers.length; i++) {
      var temp = [...hungers];
      temp[i]--;
      possibles.push(temp);
    }
    hungers = possibles.reduce(smallestDifference);
    sandwiches--;
    // We recalculate the differences array since the levels of hunger have changed
    diffs = differences(hungers);
  }

  return sum(diffs);
}
*/
var totalDiff = function (arr) {
  var sum = 0;
  for (var i = 0; i < arr.length - 1; i++) {
    sum += Math.abs(arr[i] - arr[i + 1]);
  }
  return sum;
};
//===================================================================================
var FoodDistribution = function (arr) {
  var food = arr.shift();
  var diff = totalDiff(arr);
  var potentialDiff = diff;

  while (food > 0) {
    var lowestI;
    for (var i = 0; i < arr.length; i++) {
      var newArr = arr.slice(0);
      newArr[i]--;
      if (totalDiff(newArr) <= potentialDiff) {
        lowestI = i;
        potentialDiff = totalDiff(newArr);
      }
    }
    if (potentialDiff <= diff) {
      arr[lowestI]--;
      diff = potentialDiff;
      food--;
    } else {
      return diff; 
    }
  }
  return diff;
};
console.log(FoodDistribution([5, 3, 1, 2, 1])); // 0
console.log(FoodDistribution([4, 5, 2, 3, 1, 0])); // 2
console.log(FoodDistribution([5, 2, 3, 4, 5])); // 1
console.log(FoodDistribution([3, 2, 1, 0, 4, 1, 0])); // 4
console.log();


console.log(' ===== 53: Three Sum =====');
var ThreeSum = function (arr) {
  const target = arr[0];
  arr = arr.slice(1);
  for (var i = 0; i < arr.length - 2; i++) {
    for (var j = i + 1; j < arr.length - 1; j++) {
      for (var k = j + 1; k < arr.length; k++) {
        if (arr[i] + arr[j] + arr[k] === target) {
          return true;
        }
      }
    }
  }

  return false;
};
console.log(ThreeSum([8, 2, 1, 4, 10, 5, -1, -1])); // false
console.log(ThreeSum([10, 2, 3, 1, 5, 3, 1, 4, -4, -3, -2])); // true
console.log(ThreeSum([12, 3, 1, -5, -4, 7])); // false
console.log();


console.log(' ===== 54: Correct Path =====');
var CorrectPath = function (str) {
  var ans = '';
  var table = {d: ['u', 'r', 'l', 0], r: ['l', 'd', 'u', 0], l: ['r', 'd', 'u'], u: ['d', 'r', 'l']};
  var add = function(op1) { ans += op1; };

  for (var i = 0; i < str.length; i++) {
    if (str[i] === 'd' || str[i] === 'r') { 
      table[str[i]][3]++;
    }
    if (str[i] === 'u' || str[i] === 'l') { 
      table[table[str[i]][0]][3]--;
    }
  }

  for (var j = 0; j < str.length; j++) {
    if (str[j] === '?') {
      var next = str[j + 1]; var current = ans[j - 1];

      if (j === 0) {
        if (table.d[3] < 4) { 
          add('d'); table.d[3]++;
        } else { 
          add('r'); table.r[3]++;
        }
        //----------------------------------------------
      } else if (current === 'r' || current === 'd') {
        if (table.d[3] < 4 && next !== 'u') { 
          add('d'); table.d[3]++;
        } else if (table.r[3] < 4 && next !== 'l') { 
          add('r'); table.r[3]++;
        } else if (next !== table[current][1]) { 
          add(table[current][2]); table[table[current][1]][3]--;
        } else { 
          add(current); table[current][3]++;
        }
        //-----------------------------------------------
      } else if (current === 'l' || current === 'u') {
        if (table[table[current][1]][3] < 4 && next !== table[current][2]) {
          add(table[current][1]); table[table[current][1]][3]++;
        } else if (next !== table[current][0]) {
          add(current); table[table[current][0]][3]--;
        } else { 
          add(table[current][2]); table[table[current][1]][3]--;
        }
      }

    } else {
      ans += str[j];
    }
  }

  return ans;
};
console.log(CorrectPath('r?d?drdd')); // rrdrdrdd
console.log(CorrectPath('???rrurdr?')); // dddrrurdrd
console.log(CorrectPath('drdr??rrddd?')); // drdruurrdddd
console.log();


console.log(' ===== 55: Scale Balancing =====');
/*
function ScaleBalancing(strArr) {
  const w1 = JSON.parse(strArr[0])[0];
  const w2 = JSON.parse(strArr[0])[1];

  let weights = JSON.parse(strArr[1]);

  for (let i = 0; i < weights.length; i++) {
    if (w1 + weights[i] === w2 || w2 + weights[i] === w1) { return '' + weights[i]; }
    for (let j = i + 1; j < weights.length; j++) {
      if (w1 + weights[i] + weights[j] === w2
        || w2 + weights[i] + weights[j] === w1
        || w1 + weights[i] === w2 + weights[j]
        || w2 + weights[i] === w1 + weights[j]
      ) {
        return '' + weights[i] + ',' + weights[j];
      }
    }
  }
  // code goes here
  return 'not possible';
}
*/
var ScaleBalancing = function (strArr) {
  var w1 = JSON.parse(strArr[0])[0];
  var w2 = JSON.parse(strArr[0])[1];
  var weights = JSON.parse(strArr[1]);

  for (var i = 0; i < weights.length; i++) {
    if (w1 + weights[i] === w2 || w2 + weights[i] === w1) { 
      return '' + weights[i]; 
    }
    for (var j = i + 1; j < weights.length; j++) {
      if (w1 + weights[i] + weights[j] === w2
        || w2 + weights[i] + weights[j] === w1
        || w1 + weights[i] === w2 + weights[j]
        || w2 + weights[i] === w1 + weights[j]
      ) {
        return '' + weights[i] + ',' + weights[j];
      }
    }
  }
  return 'not possible';
};
console.log(ScaleBalancing(['[5, 9]', '[1, 2, 6, 7]'])); // 2, 6
console.log(ScaleBalancing(['[5, 9]', '[5, 7, 9, 11]'])); // 5, 9
console.log(ScaleBalancing(['[13, 4]', '[1, 2, 3, 6, 14]'])); // 3, 6
console.log();


console.log(' ===== 56: Three Numbers =====');
/*
function ThreeNumbers(str) {
  var words = str.split(' ');
  for (var i = 0; i < words.length; i++) {

      var numbers = [];
      var word = words[i];

      for (var j = 0; j < word.length; j++) {
          let parsedChar = parseInt(word[j]);

          if (Number.isInteger(parsedChar)) {

              if (Number.isInteger(parseInt(word[j+1])) && Number.isInteger(parseInt(word[j+2]))) {
                  return false;
              }

              if (numbers.includes(parsedChar)) {
                  return false;
              }
              numbers.push(parsedChar)
          }
      }
      if (numbers.length < 3) {
          return false;
      }
  }
  return true;
}
*/
var uniqueThree = function (str) {
  var nums = str.match(/[0-9]+/g);
  if (nums === null || nums.length === 1 || nums.length > 3) {
    return false;
  } else {
    nums = nums.join('');
  }

  if (nums.length !== 3) {
    return false; 
  } else {
    return nums[1] !== nums[2] && nums[2] !== nums[3] && nums[1] !== nums[3];
  }
};
//==============================================================================
var ThreeNumbers = function (str) {
  var words = str.split(' ');
  return words.every(uniqueThree);
};
console.log(ThreeNumbers('2hell6o3 wor6l7d2')); // true
console.log(ThreeNumbers('2a3b5 w1o2rl3d g1gg92')); // true
console.log(ThreeNumbers('21aa3a ggg4g4g6ggg')); // false
console.log();


console.log(' ===== 57: Alphabet Searching =====');
/*
function AlphabetSearching(str) {
  str = str.toLowerCase();
  const store = {};
  for (var i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) > 96 && str.charCodeAt(i) < 124) {
      store[str[i]] = true;
    }
  }
  return Object.keys(store).length === 26 ? 'true' : 'false';
}
*/
var AlphabetSearching = function (str) {
  var alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  for (var i = 0; i < 26; i ++) {
    if (!str.toLowerCase().includes(alpha[i])) {
      return 'false';
    }
  }
  return 'true';
};
console.log(AlphabetSearching('zacxyjbbkfgtbhdaielqrm45pnsowtuv')); // true
console.log(AlphabetSearching('abcdefghijklmnopqrstuvwxyyyy')); // false
console.log(AlphabetSearching('abc123456kmo')); // false
console.log();


console.log(' ===== 58: Time Difference =====');
var TimeDifference = function (strArr) {

  var minsArr = strArr.map(time => {
    time = time.split(':');
    var mins = (time[0] * 60) + Number(time[1].slice(0, time[1].length - 2));
    if (time[1].slice(time[1].length - 2) === 'pm') {
      mins += 12 * 60;
    } else if (time[0] === '12' && time[1].slice(time[1].length - 2) === 'am') {
      return Number(time[1].slice(0, time[1].length - 2));
    }
    return mins;
  });

  minsArr = minsArr.sort((a, b) => a - b);
  var minsDiff;

  for (var i = 0; i < minsArr.length; i++) {
    minsDiff = minsDiff === undefined || minsArr[i + 1] - minsArr[i] < minsDiff ? minsArr[i + 1] - minsArr[i] : minsDiff;
  }

  var lastMinusFirst = (24 * 60 + minsArr[0]) - minsArr[minsArr.length - 1];
  return lastMinusFirst < minsDiff ? lastMinusFirst : minsDiff;
};
console.log(TimeDifference(['2:10pm', '1:30pm', '10:30am', '4:42pm'])); // 40
console.log(TimeDifference(['1:10pm', '4:40am', '5:00pm'])); // 230
console.log(TimeDifference(['10:00am', '11:45pm', '5:00am', '12:01am'])); // 16
console.log();


console.log(' ===== 59: Triangle Row =====');
var TriangleRow = function (num) {
  return Math.pow(2, num);
};
console.log(TriangleRow(4)); // 16
console.log(TriangleRow(1)); // 2
console.log(TriangleRow(2)); // 4
console.log();


console.log(' ===== 60: Vowel Square =====');
var VowelSquare = function (strArr) {
  var numbers = [];
  var vowels = 'aeiou';

  for (var i = 0; i < strArr.length; i++) {
    var row = strArr[i];

    for (var j = 0; j < row.length; j++) {
      var column = row[j];

      if (vowels.indexOf(column) !== -1 && vowels.indexOf(row[j + 1]) !== -1) {
        if (vowels.indexOf(strArr[i + 1][j + 1]) !== -1 && vowels.indexOf(strArr[i + 1][j]) !== -1) {
          numbers.push(i, j);
          return numbers.join('-');
        }
      }
    }
  }
  return 'not found';

};
console.log(VowelSquare(['abcd', 'eikr', 'oufj'])); // not found
console.log(VowelSquare(['aqrst', 'ukaei', 'ffooo'])); // 1 - 2
console.log(VowelSquare(['gg', 'ff'])); // not found
console.log();


console.log(' ===== 61: Closest Enemy =====');
var ClosestEnemy = function (arr) {
    //find the index of 1
    //while oneI + i < l || oneI - i > 0...if === 2, return i
  var oneI = arr.indexOf(1);
  for (var i = 1; oneI + i < arr.length || oneI - i >= 0; i++) {
    if (arr[oneI + i] === 2 || arr[oneI - i] === 2) { 
      return i; 
    }
  }

  return 0;
};
console.log(ClosestEnemy([0, 0, 1, 0, 0, 2, 0, 2])); // 3
console.log(ClosestEnemy([1, 0, 0, 0, 2, 2, 2])); // 4
console.log(ClosestEnemy([2, 0, 0, 0, 2, 2, 1, 0])); // 1
console.log();



//=============================================================//
//=============================================================//
console.log(' =============== OTHER EXERCISES =============== ');
console.log();
//==============================================================================

// Write a function called 'transformEmployeeData' that transforms some employee
// data from one format to another.The argument will look something like this:
// [
// [['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']],
// [['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']]
// ]
// Given that input, the return value should look like this:
// [ {firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk'},
//   {firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager'} ]
// Note that the input may have a different number of rows or different keys than
// the given sample. For example, let's say the HR department adds a 'tshirtSize'
// field to each employee record. Your code should flexibly accommodate that.

var employedList = [ [['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42],
['role', 'clerk']], [['firstName', 'Mary'],['lastName', 'Jenkins'], ['age', 36],
['role', 'manager']] ];

var transformEmployeeData = function (array) {
  var tranformEmployeList = [];

  for (var i = 0; i < array.length; i++) {
    var tempData = {};
    for (var x = 0; x < array[i].length; x++) {
      tempData[array[i][x][0]] = array[i][x][1];
    }
    tranformEmployeList.push(tempData);
  }

  return tranformEmployeList;
};
console.log(transformEmployeeData(employedList));
console.log();

//==============================================================================
// Write  a function called 'convertObjectToList' which converts an object literal
// into an array of arrays, like this:
// Argument:{name: 'Holly',age: 35,role: 'producer'}
// Return value: [['name', 'Holly'], ['age', 35], ['role', 'producer']]

// Note that your function should be able to handle ANY object like this, not just
// the exact sample provided above.
// E.g., it should also be able to handle this, or any other object containing
// simple key-value pairs.
// {species: 'canine', name: 'Bowser', weight: 45}
//solution below
var hash1 = {name: 'Holly', age: 35, role: 'producer'};
var convertObjectToList = function (array) {
  var finalResult = [];

  for (var key in array) {
    var tempData = [];
    tempData.push(key, array[key]);
    finalResult.push(tempData);
  }

  return finalResult;
};
console.log(convertObjectToList(hash1));
console.log();


//   ===== key: value ===== 
// (1) Create an array of numbers and save the array to a variable
// (2) Iterate through the array using a loop
// (3) Create a function that will multiply each number in the array by two
// (4) Pass each number in the array to this function
// (5) Save the original numbers and the doubled results as key-value pairs in an object

var doubling = function (num) {
  return num * 2;
};
// create an array of arbitrary numbers and store the
// array in the variable arr
var arr = [1, 2, 5, 7, 10];
// create an empty object
var obj = {};
for (var i = 0; i < arr.length; i++) {
  // the key will be the original number
  var key = arr[i].toString();
  // the value will be the doubled number
  var value = doubling(arr[i]);
  obj[key] = value;
}
// print the final object
console.log(obj);
console.log();
//------------------------------------------------------------------------------


console.log(' ===== SAMPLE SIMPLE PROBLEMS ===== ');
console.log();

console.log(' ===== I: Factorial =====');
var Factorial = function (num) {
  var fact = 1;
  for (var i = 1; i <= num; i++) {
    fact = fact * i;
  }
  return fact;
};
console.log(Factorial(10));
console.log(Factorial(20));
console.log(Factorial(50));
console.log();


console.log(' ===== II FirstReverse =====');
var FirstReverse = function (str) { 
  return str.split('').reverse().join('');
};
console.log(FirstReverse('readline'));
console.log(FirstReverse('enildaer'));
console.log(FirstReverse('azuhey ubiahus'));
console.log();


console.log(' ===== III LetterCount =====');
var letterCount = function (str) {
  var obj = {};
  var strLength = str.length;
  for (var i = 0; i < strLength; i++) {
    var current = str.charAt(i);
    if (obj[current] === undefined) {
      obj[current] = 1;
    } else { 
      obj[current] += 1;
    }
  }
  return obj;
};
console.log(letterCount('sentence'));
console.log(letterCount('this is a sentence'));
console.log(letterCount('We hold these truths to be self evident'));
console.log();


console.log(' ===== IV No Duplicates =====');
var noDuplicates = function (myArray) {
  var tempResult = [];
  var arrLength = myArray.length;
  for (var i = 0; i < arrLength; i++) {
    if (tempResult.includes(myArray[i]) === false) {
      tempResult.push(myArray[i]);
    }
  }
  return tempResult.sort(function(a, b) { return a - b; });
};
console.log(noDuplicates([1, 3, 4, 2, 3, 5, 1, 5, 6, 73, 8, 4, 9, 85]));
console.log(noDuplicates([0, 2, 0, 1, 3, 3]));
console.log(noDuplicates([0, 1, 1, 3, 4, -4, -4, -5, 3, 0, -1, -2, 1, 3, 3]));
console.log();


console.log(' ===== V Duplicatez =====');
// var duplicatez = function (arr) {
//   // our hash table to store each element
//   // in the array as we pass through it
//   var hashTable = [];
//   // store duplicates
//   var dups = [];
//   // check each element in the array
//   for (var i = 0; i < arr.length; i++) {
//     // if element does not exist in hash table
//     // then insert it
//     if (hashTable[arr[i].toString()] === undefined) {
//       hashTable[arr[i].toString()] = true;
//     } else { 
//       dups.push(arr[i]); 
//     }
//   }
//   return dups;
// };
// console.log(duplicatez([1, 21, -4, 103, 21, 4, 1]));
// console.log(duplicatez([1, 21, -4, 1, 32, 103, 21, 4, 1]));
console.log();


console.log(' ===== VI PowerSet=====');
var powerSet = function (arr) {
  // the final power set
  var powers = [];
  // the total number of sets that the power set will contain
  var total = Math.pow(2, arr.length);
  // loop through each value from 0 to 2^n
  for (var i = 0; i < total; i++) {
    // our set that we add to the power set
    var tempSet = [];
    // convert the integer to binary
    var num = i.toString(2);
    // pad the binary number so 1 becomes 001 for example
    while (num.length < arr.length) { num = '0' + num; }
    // build the set that matches the 1's in the binary number
    for (var b = 0; b < num.length; b++) {
      if (num[b] === '1') { tempSet.push(arr[b]); }
    }
    // add this set to the final power set
    powers.push(tempSet);
  }
  return powers;
};
console.log(powerSet([1, 2, 3]));
console.log(powerSet([1, 2]));
console.log();


console.log(' ===== VII Stock Picker =====');
StockPicker = function (arr) {
  var maxProfit = -1;
  var buyPrice = 0;
  var sellPrice = 0;
  // this allows our loop to keep iterating the buying
  // price until a cheap stock price is found
  var changeBuyIndex = true;
  // loop through list of stock prices once
  for (var i = 0; i < arr.length - 1; i++) {
    // selling price is the next element in list
    sellPrice = arr[i + 1];
    // if we have not found a suitable cheap buying price yet
    // we set the buying price equal to the current element
    if (changeBuyIndex) { buyPrice = arr[i]; }
    // if the selling price is less than the buying price
    // we know we cannot make a profit so we continue to the
    // next element in the list which will be the new buying price
    if (sellPrice < buyPrice) {
      changeBuyIndex = true;
      continue;
    } else {
      var tempProfit = sellPrice - buyPrice;
      if (tempProfit > maxProfit) { maxProfit = tempProfit; }
      changeBuyIndex = false;
    }
  }
  return maxProfit;
};
console.log(StockPicker([44, 30, 24, 32, 35, 30, 40, 38, 15]));
console.log();


console.log(' ===== VIII Dutch National Flag =====');
var swap = function (arr, i1, i2) {
  var temp = arr[i1];
  arr[i1] = arr[i2];
  arr[i2] = temp;
};
//==========================================================
var dutchNatFlag = function (arr) {
  var low = 0;
  var mid = 0;
  var high = arr.length - 1;
  // one pass through the array swapping
  // the necessary elements in place
  while (mid <= high) {
    if (arr[mid] === 0) { 
      swap(arr, low++, mid++); 
    } else if (arr[mid] === 2) { 
      swap(arr, mid, high--); 
    } else if (arr[mid] === 1) { 
      mid++; 
    }
  }
  return arr;
};
console.log(dutchNatFlag([2, 2, 2, 0, 0, 0, 1, 1]));
console.log(dutchNatFlag([1, 2, 2, 1, 0, 0, 1, 0]));
console.log();


console.log(' ===== IX BubbleSort =====');
swap = function (arr, i1, i2) {
  var temp = arr[i1];
  arr[i1] = arr[i2];
  arr[i2] = temp;
};
//=========================================================
bubblesort = function (arr) {
  var swapped = true;
  // keep going unless no elements can be swapped anymore
  while (swapped) {
    // set swapped to false so that the loop stops
    // unless two element are actually swapped
    swapped = false;
    // loop through the whole array swapping adjacent elements
    for (var i = 1; i < arr.length; i++) {
      if (arr[i - 1] > arr[i]) {
        swap(arr, i - 1, i);
        swapped = true;
      }
    }
  }
  return arr;
};
console.log(bubblesort([103, 45, 2, 1, 97, -4, 67]));
console.log();


console.log(' ===== X Insert Interval =====');
var insertInterval = function (arr, interval) {
  var newSet = [];
  var endSet = [];
  var i = 0;
  // add intervals that come before the new interval
  while (i < arr.length && arr[i][1] < interval[0]) {
    newSet.push(arr[i]);
    i++;
  }
  // add our new interval to this final list
  newSet.push(interval);
  // check each interval that comes after the new interval to determine if we can merge
  // if no merges are required then populate a list of the remaining intervals
  while (i < arr.length) {
    var last = newSet[newSet.length - 1];
    if (arr[i][0] < last[1]) {
      var newInterval = [Math.min.apply(null, [last[0], arr[i][0]]), Math.max.apply(null, [last[1], arr[i][1]])];
      newSet[newSet.length - 1] = newInterval;
    } else {
      endSet.push(arr[i]);
    }
    i++;
  }
  return newSet.concat(endSet);
};
console.log(insertInterval([[1, 5], [10, 15], [20, 25]], [12, 27]));
console.log(insertInterval([[6, 7]], [1, 9]));
console.log(insertInterval([[6, 7]], [1, 5]));
console.log(insertInterval([[1, 5]], [6, 7]));
console.log(insertInterval([[1, 5], [6, 11], [13, 20], [40, 50]], [12, 19]));
console.log(insertInterval([[1, 5], [10, 15], [20, 25]], [2, 6]));
console.log(insertInterval([[1, 5], [6, 11], [13, 20], [25, 30], [32, 55]], [12, 45]));
console.log(insertInterval([[1, 5], [6, 11], [20, 22]], [24, 45]));
console.log();


console.log(' ===== XI Merge =====');
var Node = function (data, next) {
  this.data = data;
  this.next = next;
};
var merge = function (L1, L2) {
  // create new linked list pointer
  var L3 = new Node(null, null);
  var prev = L3;
  // while both linked lists are not empty
  while (L1 !== null && L2 !== null) {
    if (L1.data <= L2.data) {
      prev.next = L1;
      L1 = L1.next;
    } else {
      prev.next = L2;
      L2 = L2.next;
    }
    prev = prev.next;
  }
  // once we reach end of a linked list, append the other
  // list because we know it is already sorted
  if (L1 === null) { prev.next = L2; }
  if (L2 === null) { prev.next = L1; }
  // return the sorted linked list
  return L3.next;
};
// create first linked list: 1 -> 3 -> 10
var n3 = new Node(10, null);
var n2 = new Node(3, n3);
var n1 = new Node(1, n2);
var L1 = n1;
// create second linked list: 5 -> 6 -> 9
var n6 = new Node(9, null);
var n5 = new Node(6, n6);
var n4 = new Node(5, n5);
var L2 = n4;
console.log(merge(L1, L2));
console.log();


console.log(' ===== XII Even Pairs =====');
var EvenPairs = function (str) {
  var zzz = /[24680]\d*[24680]/; // look for these adj numbers
  return zzz.test(str); // does str match zzz?
};
console.log(EvenPairs('f178svg3k19k46'));
console.log(EvenPairs('f09r27i8e67'));
console.log(EvenPairs('3gy41d216'));
console.log();


console.log();
console.log(' ========== THE END! ========== ');
