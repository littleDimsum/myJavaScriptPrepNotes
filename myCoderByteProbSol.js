console.log();
console.log(" ======================================== ");
console.log("                EASY_SETS                 ");
console.log(" ======================================== ");
console.log();

//
console.log(" ===== 01 First Reverse =====");
function FirstReverse(str) {
  var newString = "";
  for (var i = str.length - 1; i >= 0; i--) {
    newString = newString + str.charAt(i);
  }
  return newString;
}
console.log(FirstReverse("readline"));
console.log(FirstReverse("suhaibu"));
console.log(FirstReverse("suhaibu yehuza"));
console.log();
console.log();


//
console.log(" ===== 02 First Factorial =====");
function FirstFactorial(num) {
  var factorial = 1;
  for (var i = 1; i <= num; i++) {
    factorial = factorial * i;
  }
  return factorial;
}
console.log(FirstFactorial(4));
console.log(FirstFactorial(7));
console.log(FirstFactorial(10));
console.log();
console.log();


//
console.log(" ===== 03 Longest Word =====");
function LongestWord(sen) {
  var arr = sen.match(/[a-z0-9]+/gi);
  var sorted = arr.sort(function(a, b) {
    return b.length - a.length;
  });
  return sorted[0];
}
console.log(LongestWord("the $$$longest# word is coderbyte"));
console.log(LongestWord("John is my son so i sent him to school"));
console.log(LongestWord("Peter Pipper picked a peck of pickled pepper"));
console.log();
console.log();


//
console.log(" ===== 04 Letter Changes =====");
function LetterChanges(str) {
  var converted = str.replace(/[a-z]/gi, function(char) {
    return (char === 'z' || char === 'Z') ? 'a' : String.fromCharCode(char.charCodeAt() + 1);
  });
  var capitalized = converted.replace(/a|e|i|o|u/gi, function(vowel) {
    return vowel.toUpperCase();
  });
  return capitalized;
}
console.log(LetterChanges("fun times!"));
console.log(LetterChanges("suhaibu Yehuza"));
console.log(LetterChanges("Amazing Grace!!!"));
console.log();
console.log();


//
console.log(" ===== 05 Simple Adding =====");
function SimpleAdding(num) {
  var answer = 0;
  for (var i = 1; i <= num; i++) {
    answer = answer + i;
  }
  return answer;
}
console.log(SimpleAdding(2));
console.log(SimpleAdding(4));
console.log(SimpleAdding(10));
console.log();
console.log();


//
console.log(" ===== 06 Letter Capitalize =====");
function LetterCapitalize(str) {
  var words = str.split(" ");
  for (var i = 0; i < words.length; i++) {
    words[i] = words[i].substring(0,1).toUpperCase() + words[i].substring(1);
  }
  return words.join(" ");
}
console.log(LetterCapitalize("hello world from coderbyte"));
console.log(LetterCapitalize("john bull is my son"));
console.log(LetterCapitalize("so i sent him to school"));
console.log();
console.log();


//
console.log(" ===== 07 Simple Symbols =====");
function SimpleSymbols(str) {
  var str = '=' + str + '=';
  for (var i = 0; i < str.length; i++) {
    if (str[i].match(/[a-z]/i) !== null) {
      if (str[i-1] !== '+' || str[i+1] !== '+') {
        return false;
      }
    }
  }
  return true;
}
console.log(SimpleSymbols("+d+=3=+s+"));
console.log(SimpleSymbols("f++d+"));
console.log(SimpleSymbols("+d+=3=+s+m+n+"));
console.log();
console.log();


//
console.log(" ===== 08 Check Nums =====");
function CheckNums(num1, num2) {
  return (num2 === num1) ? '-1' : (num2 > num1) ? true : false;
}
console.log(CheckNums(3, 122));
console.log(CheckNums(4, 4));
console.log(CheckNums(11, 7));
console.log();
console.log();


//
console.log(" ===== 09 Time Convert =====");
function TimeConvert(num) {
  var hours = Math.floor(num / 60);
  var minutes = num % 60;
  return hours + ':' + minutes;
}
console.log(TimeConvert(124));
console.log(TimeConvert(43));
console.log(TimeConvert(748));
console.log();
console.log();


//
console.log(" ===== 10 Alphabet Soup =====");
function AlphabetSoup(str) {
  var chars = str.split("");
  var sorted = chars.sort();
  return sorted.join("");
}
console.log(AlphabetSoup("coderbyte"));
console.log(AlphabetSoup("hooplah"));
console.log(AlphabetSoup("asparagus"));
console.log();
console.log();


//
console.log(" ===== 11 AB Check =====");
function ABCheck(str) {
  var str = str.toLowerCase();
  for (var i = 0; i < str.length; i++) {
    if (str[i] === 'a' && str[i+4] === 'b') { return true; }
    if (str[i] === 'b' && str[i+4] === 'a') { return true; }
  }
  return false;
}
console.log(ABCheck("Laura sobs"));
console.log(ABCheck("after badly"));
console.log(ABCheck("lane borrowed"));
console.log();
console.log();


//
console.log(" ===== 12 Vowel Count =====");
function VowelCount(str) {
  var str = str.toLowerCase();
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    if (vowels.indexOf(str[i]) !== -1) {
      count = count + 1
    }
  }
  return count;
}
console.log(VowelCount("All cows eat grass"));
console.log(VowelCount("Odododiodio is in Ghana"));
console.log(VowelCount("Peter Piper picked a peck of pickle pepper"));
console.log();
console.log();


//
console.log(" ===== 13 Word Count =====");
function WordCount(str) {
  return str.split(" ").length;
}
console.log(WordCount("I am 4 words"));
console.log(WordCount("In God We Trust"));
console.log(WordCount("Oh say can you see"));
console.log();
console.log();


//
console.log(" ===== 14 Ex Oh =====");
function WordCount(str) {
  var x = str.split("x").join("");
  var o = str.split("o").join("");
  return x.length === o.length;
}
console.log(WordCount("xoxoxoxo"));
console.log(WordCount("xoxoxoxox"));
console.log(WordCount("totobixoxxooxxx"));
console.log();
console.log();


//
console.log(" ===== 15 Palindrome =====");
function Palindrome(str) {
  var str = str.split(" ").join("").toLowerCase();
  var rev = str.split('').reverse().join('');
  return str === rev;
}
console.log(Palindrome("Never odd or even"));
console.log(Palindrome("who is who"));
console.log(Palindrome("eye"));
console.log();
console.log();


//
console.log(" ===== 16 Arith Geo =====");
function ArithGeo(arr) {
  function arrayDiffs(diff, arr, subtract) {
    for (var i = 2; i < arr.length; i++) {
      var tempDiff = (subtract) ? arr[i] - arr[i-1] : arr[i] / arr[i-1];
      if (tempDiff !== diff) { return false; }
      else if (i === arr.length-1 && tempDiff === diff) { return true; }
    }
  }

  var diffArith = arr[1] - arr[0];
  var diffGeo = arr[1] / arr[0];
  var isArithSeq = arrayDiffs(diffArith, arr, true);

  if (!isArithSeq) {
    var isGeoSeq = arrayDiffs(diffGeo, arr, false);
    return (isGeoSeq) ? "Geometric" : -1;
  } else {
    return "Arithmetic";
  }

}
console.log(ArithGeo([3, 9, 27, 81]));
console.log(ArithGeo([2, 4, 6, 8]));
console.log(ArithGeo([1, 2, 5,6]));
console.log();
console.log();


//
console.log(" ===== 17 Array Addition I =====");
function ArrayAdditionI(arr) {
  var sum = Math.max.apply(null, arr);
  arr.splice(arr.indexOf(sum), 1);
  // power set
  var sets = [[]];

  for (var i = 0; i < arr.length; i++) {
    for (var j = 0, len = sets.length; j < len; j++) {
      var temp = sets[j].concat(arr[i]);
      sets.push(temp);
      var s = temp.reduce(function(p, c) { return p + c; });
      if (s === sum) { return "true"; }
    }
  }

  return "false";

}
console.log(ArrayAdditionI([4, 6, 23, 10, 1, 3]));
console.log(ArrayAdditionI([5,7,16,1,2]));
console.log(ArrayAdditionI([3,5,-1,8,12]));
console.log();
console.log();


//
console.log(" ===== 18 Letter Count I =====");
function LetterCountI(str) {
  var words = str.split(" ");
  var table = {};
  for (var i = 0; i < words.length; i++) {

    var thisWord = words[i];
    table[thisWord] = {};
    table[thisWord]["highest"] = 0;
    for (var c = 0; c < words[i].length; c++) {
      var thisChar = thisWord[c];
      table[thisWord][thisChar] === undefined ?
        table[thisWord][thisChar] = 1 :
      	table[thisWord][thisChar] += 1;
      if (table[thisWord][thisChar] > table[thisWord]["highest"]) {
      	table[thisWord]["highest"] = table[thisWord][thisChar];
      }

    }

  }

  var answer = {word: null, count: 1};

  for (var w in table) {
    if (table[w]["highest"] > answer["count"]) {
      answer["count"] = table[w]["highest"];
      answer["word"] = w;
    }
  }

  return (answer["count"] === 1) ? -1 : answer["word"];

}
console.log(LetterCountI("world hello from coderbyte"));
console.log(LetterCountI("Today, is the greatest day ever!"));
console.log(LetterCountI("No words"));
console.log();
console.log();


//
console.log(" ===== 19 Second GreatLow =====");
function SecondGreatLow(arr) {
  var unique = arr.filter(function(elem, index, self) {
    return self.indexOf(elem) === index;
  });
  var sorted = unique.sort(function(a, b) {
    return a - b;
  });
  if (sorted.length < 2) {
    return sorted[0] + " " + sorted[0];
  } else {
    return sorted[1] + " " + sorted[sorted.length - 2];
  }
}
console.log(SecondGreatLow([7, 7, 12, 98, 106]));
console.log(SecondGreatLow([2, 10, 5, 1, -12, 140]));
console.log(SecondGreatLow([1, 42, 42, 180]));
console.log();
console.log();


//
console.log(" ===== 20 Division Stringfield =====");
function DivisionStringified(num1, num2) {
  var div = Math.round(num1/num2);
  div = div.toString().split('');
  // keep counter for inserting comma logic
  var insert = 0;
  if (div.length > 3) {
    for (var i = div.length-1; i >= 0; i--) {
      insert++;
      if (insert === 3) {
        div[i] = ',' + div[i];
        insert = 0;
      }
    }
  }
  return div.join('');
}
console.log(DivisionStringified(1400500, 52));
console.log(DivisionStringified(123456789, 10000));
console.log(DivisionStringified(5, 2));
console.log();
console.log();


//
console.log(" ===== 21 Counting Minutes I =====");
function getDayMinutes(str) {
  var min = 0;
  var t = Number(str.split(':')[0]);
  min += t * 60;
  t = Number(str.substr(str.length - 4, 2));
  min += t;
  if (str.substr(str.length - 2) == 'pm')
    min += 12 * 60;
  return min;
}
//==============================================================================
function CountingMinutesI(str) {
  var times = str.split('-')
  var diff =  getDayMinutes(times[1]) - getDayMinutes(times[0]);
  if (diff < 0)
    diff += 24 * 60;
  // code goes here
  return diff;
}
console.log(CountingMinutesI("9:00am-10:00am"));
console.log(CountingMinutesI("12:30pm-12:00am"));
console.log(CountingMinutesI("1:23am-1:08am"));
console.log();
console.log();


//
console.log(" ===== 22 Mean Mode =====");
function MeanMode(arr) {
  // we use the reduce function which will sum up all the numbers in the array
  var summed = arr.reduce(function(previousVal, currentVal, index, self) {
    return previousVal + currentVal;
  });
  var mean = summed / arr.length;
  // the table that will contain each number as the key and the number of times
  // it occurs as the value. e.g. {"5": 1, "3": 3, "1": 1}
  var table = {};
  for (var i = 0; i < arr.length; i++) {
    var number = arr[i];
    table[number] === undefined ? table[number] = 1 : table[number] += 1;
  }
  // setup a new object that will store the number with the highest count
  var answer = {number: null, count: 0};
  for (var n in table) {
    if (table[n] > answer["count"]) {
      answer["count"] = table[n];
      answer["number"] = n;
    }
  }
  return (answer["number"] == mean) ? 1 : 0;
}
console.log(MeanMode([5, 3, 3, 3, 1]));
console.log(MeanMode([1, 2, 3]));
console.log(MeanMode([4, 4, 4, 6, 2]));
console.log();
console.log();


//
console.log(" ===== 23 Dash Insert =====");
function DashInsert(str) {
  var arr = str.split('');
  for (var i = 0; i < str.length-1; i++) {
    if (arr[i] % 2 !== 0 && arr[i+1] % 2 !== 0) {
      arr[i] = arr[i] + '-';
    }
  }
  return arr.join('');
}
console.log(DashInsert("13568999"));
console.log(DashInsert("454793"));
console.log(DashInsert("99946"));
console.log();
console.log();


//
console.log(" ===== 24 Swap Case =====");
function SwapCase(str) {
  var chars = str.split('');
  for (var i = 0; i < chars.length; i++) {
    if (chars[i] === chars[i].toUpperCase()) {
      chars[i] = chars[i].toLowerCase();
    }
    else if (chars[i] === chars[i].toLowerCase()) {
      chars[i] = chars[i].toUpperCase();
    }
  }
  return chars.join('');
}
console.log(SwapCase("Hello-LOL"));
console.log(SwapCase("Sup DUDE!!?"));
console.log(SwapCase("hELLO wORLD"));
console.log();
console.log();


//
console.log(" ===== 25 Number Addition =====");
function NumberAddition(str) {
  // use the JavaScript match function which tries to find all matching patterns
  // in the string and it returns an array of all matches found. e.g."75Number9"
  // returns [75, 9] or set to 0 if no numbers are found
  var nums = str.match(/[0-9]+/gi) || [0];
  // use the JavaScript reduce functions which calls a function on each value in
  // the array and returns a final single value
  return nums.reduce(function(previousVal, currentVal) {
    return parseInt(previousVal) + parseInt(currentVal);
  });
}
console.log(NumberAddition("75Number9"));
console.log(NumberAddition("10 2One Number*1*"));
console.log(NumberAddition("88Hello 3World!"));
console.log();
console.log();


//
console.log(" ===== 26 Third Greatest =====");
function ThirdGreatest(strArr) {
  strArr.sort(function(a, b) {return b.length - a.length});
  return strArr[2];
}
console.log(ThirdGreatest(["hello","world","before","all"]));
console.log(ThirdGreatest(["coder","byte","code"]));
console.log(ThirdGreatest(["abc","defg","z","hijk"]));
console.log();
console.log();


//
console.log(" ===== 27 Power of Two =====");
function PowersofTwo(num) {
  var power = 0;
  var counter = 1;
  while (power < num) {
    power = Math.pow(2, counter);
    counter++;
  }
  return (num === power) ? true : false;
}
console.log(PowersofTwo(8));
console.log(PowersofTwo(34));
console.log(PowersofTwo(512));
console.log();
console.log();


//
console.log(" ===== 28 Additive Persistence =====");
function AdditivePersistence(num) {
  var arr = num.toString().split('');
  while (arr.length > 1) {
    var added = 0;
    for (var i = 0; i < arr.length; i++) {
      added += parseInt(arr[i]);
    }
    return 1 + AdditivePersistence(added);
  }
  return 0;
}
console.log(AdditivePersistence(2718));
console.log(AdditivePersistence(378264));
console.log(AdditivePersistence(14));
console.log();
console.log();


//
console.log(" ===== 29 Multiplicative Persistence =====");
function MultiplicativePersistence(num) {
  var arr = num.toString().split('');
  while (arr.length > 1) {
    var mult = 1;
    for (var i = 0; i < arr.length; i++) {
      mult *= parseInt(arr[i]);
    }
    return 1 + MultiplicativePersistence(mult);
  }
  return 0;
}
console.log(MultiplicativePersistence(39));
console.log(MultiplicativePersistence(432));
console.log(MultiplicativePersistence(89643));
console.log();
console.log();


//
console.log(" ===== 30 Off Line Minimum =====");
function OffLineMinimum(strArr) {
  var nums = [];
  // store only the minimum numbers
  var outputs = [];
  for (var i = 0; i < strArr.length; i++) {
    if (strArr[i] !== 'E') {
      nums.push(parseInt(strArr[i]));
    }
    else {
      var smallest = Math.min.apply(null, nums);
      nums.splice(nums.indexOf(smallest), 1);
      outputs.push(smallest);
    }
  }
  return outputs.join(',');
}
console.log(OffLineMinimum(["5","4","6","E","1","7","E","E","3","2"])); // 4,1,5
console.log(OffLineMinimum(["1","2","E","E","3"])); // 1,2
console.log(OffLineMinimum(["4","E","1","E","2","E","3","E"])); // 4,1,2,3
console.log();
console.log();


//
console.log(" ===== 31 Changing Sequence =====");
function ChangingSequence(arr) {
  // check if first two numbers form an increasing sequence
  var increasing = arr[1] > arr[0] ? true : false;
  // loop through the rest of the array
  for (var i = 2; i < arr.length; i++) {
    // determine if next number in sequence matches
    // the boolean value we define in the variable "increasing"
    var seq = arr[i] > arr[i - 1];
    // if they do not match, then we know the sequence changes
    if (seq !== increasing) { return i - 1; }
  }
  // if no change was detected, then just return -1
  return -1;
}
console.log(ChangingSequence([1, 2, 4, 6, 4, 3, 1])); // 3
console.log(ChangingSequence([-4, -2, 9, 10])); // -1
console.log(ChangingSequence([5, 4, 3, 2, 1, 10, 11])); // 4
console.log();
console.log();


//
console.log(" ===== 32 Overlapping Ranges =====");
function OverlappingRanges(arr) {
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
}
console.log(OverlappingRanges([4, 10, 2, 6, 3]));
console.log(OverlappingRanges([1,8,2,4,4]));
console.log(OverlappingRanges([5,11,1,5,1]));
console.log();
console.log();


//
console.log(" ===== 33 Superincreasing =====");
function Superincreasing(arr) {
  // store the sum
  var sum = 0;
  // loop through entire array
  for (var i = 0; i < arr.length; i++) {
    // if a number is less than or equal to the current sum, simply return false
    if (arr[i] <= sum) { return "false"; }
    // update the sum after each iteration
    sum += arr[i];
  }
  return true;
}
console.log(Superincreasing([1, 3, 6, 13, 54]));
console.log(Superincreasing([1,2,3,4]));
console.log(Superincreasing([1,2,5,10]));
console.log();
console.log();


//
console.log(" ===== 34 Hamming Distance =====");
function HammingDistance(strArr) {
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
}
console.log(HammingDistance(["coder", "codec"]));
console.log(HammingDistance(["10011", "10100"]));
console.log(HammingDistance(["helloworld", "worldhello"]));
console.log();
console.log();


//
console.log(" ===== 35 Rectangle Area =====");
function RectangleArea(strArr) {
  var points = strArr.map(function(c) {
    return c.replace("(","").replace(")","").split(" ").map(function(d) {
      return Number(d);
    });
  }), xs, ys, xDiff, yDiff;
  xs = points.map(function(c) { return c[0]; });
  ys = points.map(function(c) { return c[1]; });
  xDiff = Math.max.apply(null,xs) - Math.min.apply(null,xs);
  yDiff = Math.max.apply(null,ys) - Math.min.apply(null,ys);

  return xDiff * yDiff;
}
console.log(RectangleArea(["(0 0)","(3 0)","(0 2)","(3 2)"]));
console.log(RectangleArea(["(1 1)","(1 3)","(3 1)","(3 3)"]));
console.log(RectangleArea(["(0 0)","(1 0)","(1 1)","(0 1)"]));
console.log();
console.log();


//
console.log(" ===== 36 Bitwise One =====");
function BitwiseOne(strArr) {
  // convert the two binary strings to integers
  var n1 = parseInt(strArr[0], 2);
  var n2 = parseInt(strArr[1], 2);
  // bitwise OR the numbers and convert the answer
  // back into a binary string
  return (n1 | n2).toString(2);
}
console.log(BitwiseOne(["1001", "0100"]));
console.log(BitwiseOne(["100", "000"]));
console.log(BitwiseOne(["00011", "01010"]));
console.log();
console.log();


//
console.log(" ===== 37 Other Products =====");
function extract(arr, i) {
  return arr.slice(0,i).concat(arr.slice(i + 1));
}
//==============================================================================
function OtherProducts(arr) {
  return  arr.map((_,i) => extract(arr,i).reduce((a,b) => a * b)).join('-');
}
console.log(OtherProducts([1, 2, 3, 4, 5]));
console.log(OtherProducts([1,4,3]));
console.log(OtherProducts([3,1,2,6]));
console.log();
console.log();


//
console.log(" ===== 38 Wave Sorting =====");
function WaveSorting(arr) {
    arr = arr.sort(function(a,b) {return a-b});
    if (arr.length % 2 === 0){var mid=(arr[arr.length/2-1]+arr[arr.length/2])/2}
    else { mid = arr[Math.floor(arr.length/2)]}
    var lows = 0, highs = 0;
    for ( var i = 0; i < arr.length; i++){
        if (arr[i] < mid) {lows++}
        if (arr[i] > mid) {highs++}
    }
    if (lows < highs) {return false}
    return true;
}
console.log(WaveSorting([0, 1, 2, 4, 1, 4]));
console.log(WaveSorting([0, 1, 2, 4, 1, 1, 1]));
console.log(WaveSorting([0, 4, 22, 4, 14, 4, 2]));
console.log();
console.log();


//
console.log(" ===== 39 Array Matching =====");
function ArrayMatching(strArr) {
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
}
console.log(ArrayMatching(["[1, 2, 5, 6]", "[5, 2, 8, 11]"])); // 6-4-13-17
console.log(ArrayMatching(["[5, 2, 3]", "[2, 2, 3, 10, 6]"])); // 7-4-6-10-6
console.log(ArrayMatching(["[1, 2, 1]", "[2, 1, 5, 2]"])); // 3-3-6-2
console.log();
console.log();


//
console.log(" ===== 40 Binary Reversal =====");
function BinaryReversal(str) {
    var n = +str;
    var binary = n.toString(2);
    binary = binary.split('').reverse();
    while(binary.length % 8 !== 0){
        binary.push('0');
    }
    binary = binary.join('');

    return String(Number.parseInt(binary,2));
}
console.log(BinaryReversal("47"));
console.log(BinaryReversal("4567"));
console.log(BinaryReversal("213"));
console.log();
console.log();


//
console.log(" ===== 41 Longest Increasing Sequence =====");
function LongestIncreasingSequence(array) {
var permNum = Math.pow(2, array.length), ans =1 ;

for (var i = 1; i < permNum; i++) {
    var binary = i.toString(2);
    var temp = [];
        while(binary.length < array.length){
            binary = "0" + binary;
        }
    for (var j = 0; j < binary.length; j++) {
        if (binary[j] === "1") {temp.push(array[j])}
    }
    var len = isIncreasing(temp);
    if (len > ans) {ans = len}//run temp through function that sees if it's increasing
}
function isIncreasing(temp) {
    var increasing = true;
        for (var s = 0; s < temp.length; s++) {
            if (temp[s] >= temp[s+1]) {
                increasing = false;
            }
    } if (increasing) {return temp.length} else {return 0}
}
return ans;
}
console.log(LongestIncreasingSequence([4, 3, 5, 1, 6])); // 3
console.log(LongestIncreasingSequence([9, 9, 4, 2])); // 1
console.log(LongestIncreasingSequence([10, 22, 9, 33, 21, 50, 41, 60, 22, 68, 90]));
console.log();
console.log();


//
console.log(" ===== 42 Even Pairs =====");
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

function EvenPairs(str) {
  var regEx = /[24680]\d*[24680]/;

  return regEx.test(str);
}
console.log(EvenPairs("f178svg3k19k46"));
console.log(EvenPairs("f09r27i8e67"));
console.log(EvenPairs("3gy41d216"));
console.log();
console.log();


//
console.log(" ===== 43 Next Palindrome =====");
function NextPalindrome(num) {
  var count = num + 1;
  while (true) {
    var numString = count.toString();
    var revString = numString.split('').reverse().join('');
    if (revString === numString) return parseInt(numString, 10);
    count++;
  }
}
console.log(NextPalindrome(24));
console.log(NextPalindrome(2));
console.log(NextPalindrome(180));
console.log();
console.log();


//
console.log(" ===== 44 Largest Pair =====");
function LargestPair(num) {
  var str = (num).toString();
  var largestPair = '' + str[0] + str[1];
  for (var i = 1; i < str.length - 1; i++) {
    var pair = '' + str[i] + str[i + 1];
    if (Number(pair) > Number(largestPair)) { largestPair = pair; }
  }
  return largestPair;
}
console.log(LargestPair(4759472)); // 94
console.log(LargestPair(453857)); // 85
console.log(LargestPair(363223311)); // 63
console.log();
console.log();


//
console.log(" ===== 45 Nonrepeating Character =====");
function NonrepeatingCharacter(str) {
  var len = str.length;
  var countObj = {};

  for (var i = 0; i < len; i++) {
    if (countObj[str[i]]) {
      countObj[str[i]]++;
    }
    else {
      countObj[str[i]] = 1;
    }
  }
  for (var j = 0; j < len; j++) {
    if (countObj[str[j]] === 1) return str[j];
  }
}
console.log(NonrepeatingCharacter("agettkgaeee"));
console.log(NonrepeatingCharacter("abcdef"));
console.log(NonrepeatingCharacter("hello world hi hey"));
console.log();
console.log();


//
console.log(" ===== 46 Two Sum =====");
function TwoSum(arr) {
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
}
console.log(TwoSum([7, 3, 5, 2, -4, 8, 11])); // 5,2 -4,11
console.log(TwoSum([17, 4, 5, 6, 10, 11, 4, -3, -5, 3, 15, 2, 7])); //
console.log(TwoSum([7, 6, 4, 1, 7, -2, 3, 12])); // 6,1 4,3
console.log();
console.log();


//
console.log(" ===== 47 Bitwise Two =====");
function BitwiseTwo(strArr) {
  var num1 = strArr[0];
  var num2 = strArr[1];
  var len = strArr[0].length;
  var resStr = '';

  for (var i = 0; i < len; i++) {
    if (num1[i] === '1' && num2[i] === '1') {
      resStr += '1';
      continue;
    }
    else {
      resStr += '0';
      continue;
    }
  }
  return resStr;
}
console.log(BitwiseTwo(["10111", "01101"])); // 00101
console.log(BitwiseTwo(["100", "000"])); // 000
console.log(BitwiseTwo(["10100", "11100"])); // 10100
console.log();
console.log();


//
console.log(" ===== 48 Powerset Count =====");
function PowerSetCount(arr) {
  var len = arr.length;
  return Math.pow(2, len);
}
console.log(PowerSetCount([1, 2, 3])); // 8
console.log(PowerSetCount([1, 2, 3, 4])); // 16
console.log(PowerSetCount([5, 6])); // 4
console.log();
console.log();


//
console.log(" ===== 49 Product Digits =====");
function ProductDigits(num) {
  var pdig = 1 + ('' + num).length;
  for (var i = 2; i < num; i++) {
    if (num % i === 0) {
      if (('' + i).length + ('' + num / i).length < pdig) { pdig = ('' + i).length + ('' + num / i).length }
    }
  }
  return pdig;
}
console.log(ProductDigits(24)); // 2
console.log(ProductDigits(6)); // 2
console.log(ProductDigits(23));// 3
console.log();
console.log();


//
console.log(" ===== 50 Palindrome Creator =====");
function PalindromeCreator(str) {
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
}
console.log(PalindromeCreator("abjchba")); // abhba
console.log(PalindromeCreator("mmop")); // not possible
console.log(PalindromeCreator("kjjjhjjj")); // k
console.log();
console.log();


//
console.log(" ===== 51 Basic Roman Numerals =====");
function BasicRomanNumerals(str) {
  const store = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }

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
}
console.log(BasicRomanNumerals("XXIV")); // 24
console.log(BasicRomanNumerals("IV"));  // 4
console.log(BasicRomanNumerals("XLVI"));  // 46
console.log();
console.log();


//
console.log(" ===== 52 Food Distribution =====");
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
function totalDiff(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length - 1; i++) {
        sum += Math.abs(arr[i] - arr[i+1]);
    }
    return sum;
}
//===================================================================================
function FoodDistribution(arr) {
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
        } else {return diff; }
    }
    return diff;
}
console.log(FoodDistribution([5, 3, 1, 2, 1])); // 0
console.log(FoodDistribution([4, 5, 2, 3, 1, 0])); // 2
console.log(FoodDistribution([5, 2, 3, 4, 5])); // 1
console.log(FoodDistribution([3, 2, 1, 0, 4, 1, 0])); // 4
console.log();
console.log();


//
console.log(" ===== 53 Three Sum =====");
function ThreeSum(arr) {
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
}
console.log(ThreeSum([8, 2, 1, 4, 10, 5, -1, -1])); // false
console.log(ThreeSum([10, 2, 3, 1, 5, 3, 1, 4, -4, -3, -2])); // true
console.log(ThreeSum([12, 3, 1, -5, -4, 7])); // false
console.log();
console.log();


//
console.log(" ===== 54 Correct Path =====");
function CorrectPath(str) {
	var ans = "";
	var table = {d: ['u', 'r', 'l', 0], r: ['l','d', 'u', 0], l: ['r', 'd', 'u'], u: ['d', 'r', 'l']};
	var add = function(op1) { ans += op1 };

	for (var i = 0; i < str.length; i++) {
    	if (str[i] === "d" || str[i] === "r") { table[str[i]][3]++ }
    	if (str[i] === "u" || str[i] === "l") { table[table[str[i]][0]][3]-- }
	}

	for (var j = 0; j < str.length; j++) {

    	if (str[j] === "?") {
        	var next = str[j+1], current = ans[j-1];

        	if (j === 0) {
            	if (table.d[3] < 4) { add('d'); table.d[3]++ }
            	else {add('r'); table.r[3]++}
        	}
        	else if (current === "r" || current === "d") {
            	if (table.d[3] < 4 && next !== "u") { add('d'); table.d[3]++ }
            	else if (table.r[3] < 4 && next !== "l") { add('r'); table.r[3]++  }
            	else if (next !== table[current][1]) {  add(table[current][2]); table[table[current][1]][3]-- }
            	else { add(current); table[current][3]++ }
        	} else if (current === "l" || current === "u") {
            	if (table[table[current][1]][3] < 4 && next !== table[current][2]) {
            		add(table[current][1]); table[table[current][1]][3]++ ;
            	} else if (next !== table[current][0]) {
            		add(current); table[table[current][0]][3]-- ;
            	} else { add(table[current][2]); table[table[current][1]][3]--  }
        	}
    	} else {ans += str[j]}
	}

return ans;
}
console.log(CorrectPath("r?d?drdd")); // rrdrdrdd
console.log(CorrectPath("???rrurdr?")); // dddrrurdrd
console.log(CorrectPath("drdr??rrddd?")); // drdruurrdddd
console.log();
console.log();


//
console.log(" ===== 55 Scale Balancing =====");
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
function ScaleBalancing(strArr) {
  var w1 = JSON.parse(strArr[0])[0];
  var w2 = JSON.parse(strArr[0])[1];
  var weights = JSON.parse(strArr[1]);

  for (var i = 0; i < weights.length; i++) {
    if (w1 + weights[i] === w2 || w2 + weights[i] === w1) { return '' + weights[i]; }
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
}
console.log(ScaleBalancing(["[5, 9]", "[1, 2, 6, 7]"])); // 2, 6
console.log(ScaleBalancing(["[5, 9]", "[5, 7, 9, 11]"])); // 5, 9
console.log(ScaleBalancing(["[13, 4]", "[1, 2, 3, 6, 14]"])); // 3, 6
console.log();
console.log();

//
console.log(" ===== 56 Three Numbers =====");
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
function uniqueThree(str) {
    var nums = str.match(/[0-9]+/g);
    if (nums === null || nums.length === 1 || nums.length > 3)
        {return false;}
    else {nums = nums.join('');}

    if (nums.length !== 3) {return false; }
    else {
        return nums[1] !== nums[2] && nums[2] !== nums[3] && nums[1] !== nums[3];
    }
}
//===================================================================================
function ThreeNumbers(str) {
    var words = str.split(' ');
    return words.every(uniqueThree);
}
console.log(ThreeNumbers("2hell6o3 wor6l7d2")); // true
console.log(ThreeNumbers("2a3b5 w1o2rl3d g1gg92")); // true
console.log(ThreeNumbers("21aa3a ggg4g4g6ggg")); // false
console.log();
console.log();


//
console.log(" ===== 57 Alphabet Searching =====");
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
function AlphabetSearching(str) {
	var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

	for (var i = 0; i < 26; i ++) {
		if (!str.toLowerCase().includes(alpha[i])) {
			return "false";
		}
	}
	return "true";
}
console.log(AlphabetSearching("zacxyjbbkfgtbhdaielqrm45pnsowtuv")); // true
console.log(AlphabetSearching("abcdefghijklmnopqrstuvwxyyyy")); // false
console.log(AlphabetSearching("abc123456kmo")); // false
console.log();
console.log();


//
console.log(" ===== 58 Time Difference =====");
function TimeDifference(strArr) {

  var minsArr = strArr.map(time => {
      time = time.split(':');
      var mins = (time[0] * 60) + Number(time[1].slice(0, time[1].length - 2));
      if (time[1].slice(time[1].length - 2) === 'pm') {
          mins += 12 * 60;
      } else if (time[0] === '12' && time[1].slice(time[1].length - 2) === 'am') {
          return Number(time[1].slice(0, time[1].length - 2))
      }
      return mins
  })

  minsArr = minsArr.sort((a,b) => a - b);
  var minsDiff;

  for (var i = 0; i < minsArr.length; i++) {
      minsDiff = minsDiff === undefined || minsArr[i+1] - minsArr[i] < minsDiff ? minsArr[i+1] - minsArr[i] : minsDiff
  }

  var lastMinusFirst = (24 * 60 + minsArr[0]) - minsArr[minsArr.length - 1];
  return lastMinusFirst < minsDiff ? lastMinusFirst : minsDiff
}
console.log(TimeDifference(["2:10pm", "1:30pm", "10:30am", "4:42pm"])); // 40
console.log(TimeDifference(["1:10pm", "4:40am", "5:00pm"])); // 230
console.log(TimeDifference(["10:00am", "11:45pm", "5:00am", "12:01am"])); // 16
console.log();
console.log();


//
console.log(" ===== 60 Triangle Row =====");
function TriangleRow(num) {
  return Math.pow(2, num);
}
console.log(TriangleRow(4)); // 16
console.log(TriangleRow(1)); // 2
console.log(TriangleRow(2)); // 4
console.log();
console.log();


//
console.log(" ===== 61 Vowel Square =====");
function VowelSquare(strArr) {
  var numbers = []
  var vowels = 'aeiou'

  for (var i = 0; i < strArr.length; i++) {
      var row = strArr[i];

      for (var j = 0; j < row.length; j++) {
          var column = row[j];

          if (vowels.indexOf(column) !== -1 && vowels.indexOf(row[j+1]) !== -1) {

              if (vowels.indexOf(strArr[i+1][j+1]) !== -1 && vowels.indexOf(strArr[i+1][j]) !== -1) {
                  numbers.push(i,j);
                  return numbers.join('-');
              }
          }
      }
  }
  return 'not found';

}
console.log(VowelSquare(["abcd", "eikr", "oufj"])); // not found
console.log(VowelSquare(["aqrst", "ukaei", "ffooo"])); // 1 - 2
console.log(VowelSquare(["gg", "ff"])); // not found
console.log();
console.log();


//
console.log(" ===== 62 Closest Enemy =====");
function ClosestEnemy(arr) {
    //find the index of 1
    //while oneI + i < l || oneI - i > 0...if === 2, return i
    var oneI = arr.indexOf(1);
    for (var i = 1; oneI + i < arr.length || oneI - i >= 0; i++){
        if (arr[oneI + i] === 2 || arr[oneI - i] === 2) { return i; }
    }

    return 0;
}
console.log(ClosestEnemy([0, 0, 1, 0, 0, 2, 0, 2])); // 3
console.log(ClosestEnemy([1, 0, 0, 0, 2, 2, 2])); // 4
console.log(ClosestEnemy([2, 0, 0, 0, 2, 2, 1, 0])); // 1
console.log();
console.log();


console.log();
console.log(" ======================================== ");
console.log("                MEDIUM_SETS                 ");
console.log(" ======================================== ");
console.log();

/*
console.log(" ===== 01 Prime Time =====");

console.log(PrimeTime(19));
console.log(PrimeTime(110));
console.log(PrimeTime(101));
console.log();
console.log();


//
console.log(" ===== 02 Run Length =====");

console.log(RunLength("wwwggopp"));
console.log(RunLength("aabbcde"));
console.log(RunLength("wwwbbbw"));
console.log();
console.log();


//
console.log(" ===== 03 Prime Mover =====");

console.log(PrimeMover(16));
console.log(PrimeMover(9));
console.log(PrimeMover(100));
console.log();
console.log();


//
console.log(" ===== 04 Palindrome II =====");

console.log(PalindromeTwo("Anne, I vote more cars race Rome-to-Vienna"));
console.log(PalindromeTwo("Noel - sees Leon"));
console.log(PalindromeTwo("A war at Tarawa!"));
console.log();
console.log();


//
console.log(" ===== 05 Division =====");

console.log(Division(12, 16));
console.log(Division(7, 3));
console.log(Division(36, 54));
console.log();
console.log();


//
console.log(" ===== 06 String Scramble =====");

console.log(StringScramble("rkqodlw", "world"));
console.log(StringScramble("cdore", "coder"));
console.log(StringScramble("h3llko", "hello"));
console.log();
console.log();


//
console.log(" ===== 07 Arith Geo II =====");

console.log(ArithGeoII([5,10,15]));
console.log(ArithGeoII([2,4,16,24]));
console.log(ArithGeoII([2,4,8,16,32]));
console.log();
console.log();


//
console.log(" ===== 08 Array Addition =====");

console.log(ArrayAddition([4, 6, 23, 10, 1, 3]));
console.log(ArrayAddition([5,7,16,1,2]));
console.log(ArrayAddition([3,5,-1,8,12]));
console.log();
console.log();


//
console.log(" ===== 09 Binary Converter =====");

console.log(BinaryConverter("101"));
console.log(BinaryConverter("1000"));
console.log(BinaryConverter("100101"));
console.log(BinaryConverter("011"));
console.log();
console.log();


//
console.log(" ===== 10 Letter Count =====");

console.log(LetterCount("Today, is the greatest day ever!"));
console.log(LetterCount("Hello apple pie"));
console.log(LetterCount("No words"));
console.log();
console.log();


//
console.log(" ===== 11 Simple Mode =====");

console.log(SimpleMode([10, 4, 5, 2, 4]));
console.log(SimpleMode([5,5,2,2,1]));
console.log(SimpleMode([3,4,1,6,10]));
console.log();
console.log();


//
console.log(" ===== 12 Caesar Cipher =====");

console.log(CaesarCipher("Caesar Cipher", 2));
console.log(CaesarCipher("Hello", 4));
console.log(CaesarCipher("abc", 0));
console.log();
console.log();


//
console.log(" ===== 13 Formatted Division =====");

console.log(FormattedDivision(123456789, 10000));
console.log(FormattedDivision(2, 3));
console.log(FormattedDivision(10, 10));
console.log();
console.log();


//
console.log(" ===== 14 Consecutive =====");

console.log(Consecutive([4, 8, 6]));
console.log(Consecutive([5,10,15]));
console.log(Consecutive([-2,10,4]));
console.log();
console.log();


//
console.log(" ===== 15 Counting Minutes =====");

console.log(CountingMinutes("9:00am-10:00am"));
console.log(CountingMinutes("12:30pm-12:00am"));
console.log(CountingMinutes("1:23am-1:08am"));
console.log();
console.log();


//
console.log(" ===== 16 Permutation Step =====");

console.log(PermutationStep(123));
console.log(PermutationStep(12453));
console.log(PermutationStep(11121));
console.log(PermutationStep(41352));
console.log();


//
console.log(" ===== 17 Prime Checker =====");

console.log(PrimeChecker(910));
console.log(PrimeChecker(24));
console.log(PrimeChecker(598));
console.log(PrimeChecker(98));
console.log();
console.log();


//
console.log(" ===== 18 Dash Insert II =====");

console.log(DashInsertII("4546793"));
console.log(DashInsertII("99946"));
console.log(DashInsertII("56647304"));
console.log();
console.log();


//
console.log(" ===== 19 Swap II =====");

console.log(SwapII("6Hello4 -8World, 7 yes3"));
console.log(SwapII("Hello -5LOL6"));
console.log(SwapII("2S 6 du5d4e"));
console.log();
console.log();


//
console.log(" ===== 20 Number Search =====");

console.log(NumberSearch("Hello6 9World 2, Nic8e D7ay!"));
console.log(NumberSearch("H3ello9-9"));
console.log(NumberSearch("One Number*1*"));
console.log();
console.log();


//
console.log(" ===== 21 Triple Double =====");

console.log(TripleDouble(451999277, 41177722899));
console.log(TripleDouble(67844, 66237));
console.log(TripleDouble(465555, 5579));
console.log();
console.log();


//
console.log(" ===== 22 Bracket Matcher =====");

console.log(BracketMatcher("((hello (world))"));
console.log(BracketMatcher("(c(oder)) b(yte)"));
console.log(BracketMatcher("(coder)(byte))"));
console.log();
console.log();


//
console.log(" ===== 23 String Reduction =====");

console.log(StringReduction("bcab"));
console.log(StringReduction("abcabc"));
console.log(StringReduction("cccc"));
console.log();
console.log();


//
console.log(" ===== 24 Coin Determiner =====");

console.log(CoinDeterminer(25));
console.log(CoinDeterminer(6));
console.log(CoinDeterminer(16));
console.log();
console.log();


//
console.log(" ===== 25 ThreeFive Multiples =====");

console.log(ThreeFiveMultiples(10));
console.log(ThreeFiveMultiples(1));
console.log(ThreeFiveMultiples(6));
console.log();
console.log();


//
console.log(" ===== 26 Fibonacci Checker =====");

console.log(FibonacciChecker(34));
console.log(FibonacciChecker(54));
console.log(FibonacciChecker(5));
console.log();
console.log();


//
console.log(" ===== 27 Multiple Brackets =====");

console.log(MultipleBrackets("(hello [world])(!)"));
console.log(MultipleBrackets("(coder)[byte)]"));
console.log(MultipleBrackets("(c([od]er)) b(yt[e])"));
console.log();
console.log();


//
console.log(" ===== 28 Most Free Time =====");

console.log(MostFreeTime(["10:00AM-12:30PM","02:00PM-02:45PM","09:10AM-09:50AM"]));
console.log(MostFreeTime(["12:15PM-02:00PM","09:00AM-10:00AM","10:30AM-12:00PM"]));
console.log(MostFreeTime(["12:15PM-02:00PM","09:00AM-12:11PM","02:02PM-04:00PM"]));
console.log();
console.log();


//
console.log(" ===== 29 Overlapping Rectangles =====");

console.log(OverlappingRectangles(["(0,0),(2,2),(2,0),(0,2),(1,0),(1,2),(6,0),(6,2)"]));
console.log(OverlappingRectangles(["(0,0),(0,-2),(3,0),(3,-2),(2,-1),(3,-1),(2,3),(3,3)"]));
console.log(OverlappingRectangles(["(0,0),(5,0),(0,2),(5,2),(2,1),(5,1),(2,-1),(5,-1)"]));
console.log();
console.log();


//
console.log(" ===== 30 Distinct List =====");

console.log(DistinctList([1, 2, 2, 2, 3]));
console.log(DistinctList([0,-2,-2,5,5,5]));
console.log(DistinctList([100,2,101,4]));
console.log();
console.log();


//
console.log(" ===== 31 Look Say Sequence =====");

console.log(LookSaySequence(1211));
console.log(LookSaySequence(2466));
console.log(LookSaySequence(3425678));
console.log();
console.log();


//
console.log(" ===== 32 Number Encoding =====");

console.log(NumberEncoding("af5c a#!"));
console.log(NumberEncoding("hello 45"));
console.log(NumberEncoding("jaj-a"));
console.log();
console.log();


//
console.log(" ===== 33 Stock Picker =====");

console.log(StockPicker([10, 9, 8, 2]));
console.log(StockPicker([10,12,4,5,9]));
console.log(StockPicker([14,20,4,12,5,11]));
console.log();
console.log();


//
console.log(" ===== 34 Max Subarray =====");

console.log(MaxSubarray([-2, 5, -1, 7, -3]));
console.log(MaxSubarray([1, -2, 0, 3]));
console.log(MaxSubarray([3, -1, -1, 4, 3, -1]));
console.log();
console.log();


//
console.log(" ===== 35 Missing Digit =====");

console.log(MissingDigit("3x + 12 = 46"));
console.log(MissingDigit("4 - 2 = x"));
console.log(MissingDigit("1x0 * 12 = 1200"));
console.log();
console.log();


//
console.log(" ===== 36 K unique Characters =====");

console.log(KUniqueCharacters("2aabbacbaa"));
console.log(KUniqueCharacters("3aabacbebebe"));
console.log(KUniqueCharacters("2aabbcbbbadef"));
console.log();
console.log();


//
console.log(" ===== 37 Bitmap Holes =====");

console.log(BitmapHoles(["01111", "01101", "00011", "11110"]));
console.log(BitmapHoles(["1011", "0010"]));
console.log(BitmapHoles(["10111", "10101", "11101", "11111"]));
console.log();
console.log();


//
console.log(" ===== 38 Symmetric Tree =====");

console.log(SymmetricTree(["1", "2", "2", "3", "#", "#", "3"]));
console.log(SymmetricTree(["4", "3", "4"]));
console.log(SymmetricTree(["10", "2", "2", "#", "1", "1", "#"]));
console.log();
console.log();


//
console.log(" ===== 39 Binary Search Tree LCA =====");

console.log(BinarySearchTreeLCA(["[10, 5, 1, 7, 40, 50]", "1", "7"]));
console.log(BinarySearchTreeLCA(["[10, 5, 1, 7, 40, 50]", "5", "10"]));
console.log(BinarySearchTreeLCA(["[3, 2, 1, 12, 4, 5, 13]", "5", "13"]));
console.log();
console.log();


//
console.log(" ===== 40 Binary Tree LCA =====");

console.log(BinaryTreeLCA(["[12, 5, 9, 6, 2, 0, 8, #, #, 7, 4, #, #, #, #]", "6", "4"]));
console.log(BinaryTreeLCA(["[5, 2, 6, 1, #, 8, 12, #, #, #, #, #, #, 3, #]", "3", "12"]));
console.log(BinaryTreeLCA(["[5, 2, 6, 1, #, 8, #]", "2", "6"]));
console.log();
console.log();


//
console.log(" ===== 41 LRU Cache =====");

console.log(LRUCache(["A", "B", "C", "D", "A", "E", "D", "Z"]));
console.log(LRUCache(["A", "B", "A", "C", "A", "B"]));
console.log(LRUCache(["A", "B", "C", "D", "E", "D", "Q", "Z", "C"]));
console.log();
console.log();


//
console.log(" ===== 42 Tree Constructor =====");

console.log(TreeConstructor(["(1,2)", "(2,4)", "(7,2)"]));
console.log(TreeConstructor(["(1,2)", "(3,2)", "(2,12)", "(5,2)"]));
console.log(TreeConstructor(["(1,2)", "(2,4)", "(5,7)", "(7,2)", "(9,5)"]));
console.log();
console.log();


//
console.log(" ===== 43 Array Min Jumps =====");

console.log(ArrayMinJumps([1, 5, 4, 6, 9, 3, 0, 0, 1, 3]));
console.log(ArrayMinJumps([3, 4, 2, 1, 1, 100]));
console.log(ArrayMinJumps([1, 3, 6, 8, 2, 7, 1, 2, 1, 2, 6, 1, 2, 1, 2]));
console.log();
console.log();


//
console.log(" ===== 44 Nearest Smaller Values =====");

console.log(NearestSmallerValues([5, 2, 8, 3, 9, 12]));
console.log(NearestSmallerValues([5, 3, 1, 9, 7, 3, 4, 1]));
console.log(NearestSmallerValues([2, 4, 5, 1, 7]));
console.log();
console.log();


//
console.log(" ===== 45 Matrix Spiral =====");

console.log(MatrixSpiral(["[1, 2, 3]", "[4, 5, 6]", "[7, 8, 9]"]));
console.log(MatrixSpiral(["[1, 2]", "[10, 14]"]));
console.log(MatrixSpiral(["[4, 5, 6, 5]", "[1, 1, 2, 2]", "[5, 4, 2, 9]"]));
console.log();
console.log();


//
console.log(" ===== 46 Word Split =====");

console.log(WordSplit(["hellocat", "apple,bat,cat,goodbye,hello,yellow,why"]));
console.log(WordSplit(["baseball", "a,all,b,ball,bas,base,cat,code,d,e,quit,z"]));
console.log(WordSplit(["abcgefd", "a,ab,abc,abcg,b,c,dog,e,efd,zzzz"]));
console.log();
console.log();


//
console.log(" ===== 47 Pair Searching =====");

console.log(PairSearching(134));
console.log(PairSearching(8));
console.log(PairSearching(198));
console.log();
console.log();


//
console.log(" ===== 48 Boggle Solver =====");

console.log(BoggleSolver(["rbfg, ukop, fgub, mnry", "bog,bop,gup,fur,ruk"]));
console.log(BoggleSolver(["aaey, rrum, tgmn, ball", "all,ball,mur,raeymnl,rumk,tall,true,trum,yes"]));
console.log(BoggleSolver(["aaey, rrum, tgmn, ball", "all,ball,mur,raeymnl,tall,true,trum"]));
console.log();
console.log();


//
console.log(" ===== 49 HTML Elements =====");

console.log(HTMLElements("<div><i>hello</i>world</b>") );
console.log(HTMLElements("<div>abc</div><p><em><i>test test test</b></em></p>"));
console.log(HTMLElements("<div><div><b></b></div></p>"));
console.log();
console.log();


//
console.log(" ===== 50 Missing Digit II =====");

console.log(MissingDigitII("38?5 * 3 = 1?595"));
console.log(MissingDigitII("56? * 106 = 5?678"));
console.log(MissingDigitII("18?1 + 9 = 189?"));
console.log();
console.log();


//
console.log(" ===== 51 Palindromic Substring =====");

console.log(PalindromicSubstring("abracecars"));
console.log(PalindromicSubstring("hellosannasmith"));
console.log(PalindromicSubstring("abcdefgg"));
console.log();
console.log();


//
console.log(" ===== 52 Trapping Water =====");

console.log(TrappingWater([3, 0, 0, 2, 0, 4]));
console.log(TrappingWater([1, 2, 1, 2]));
console.log(TrappingWater([0, 2, 4, 0, 2, 1, 2, 6]));
console.log();
console.log();
console.log();


//
console.log(" ===== 53 Matrix Path =====");

console.log(MatrixPath(["11100", "10011", "10101", "10011"]));
console.log(MatrixPath(["10000", "11011", "10101", "11001"]));
console.log(MatrixPath(["1000001", "1001111", "1010101"]));
console.log();
console.log();


//
console.log(" ===== 54 Seating Students =====");

console.log(SeatingStudents([12, 2, 6, 7, 11]));
console.log(SeatingStudents([6, 4]));
console.log(SeatingStudents([8, 1, 8]));
console.log();
console.log();


//
console.log(" ===== 55 Longest Matrix Path =====");

console.log(LongestMatrixPath(["345", "326", "221"]) );
console.log(LongestMatrixPath(["12256", "56219", "43215"]));
console.log(LongestMatrixPath(["67", "21", "45"]));
console.log();
console.log();

//
console.log(" ===== 56 Min Window Substring =====");

console.log(MinWindowSubstring(["aaabaaddae", "aed"]));
console.log(MinWindowSubstring(["aabdccdbcacd", "aad"]));
console.log(MinWindowSubstring(["ahffaksfajeeubsne", "jefaa"]));
console.log(MinWindowSubstring(["aaffhkksemckelloe", "fhea"]));
console.log();
console.log();


//
console.log(" ===== 57 Matrix Chains =====");

console.log(MatrixChains([1, 2, 3, 4]));
console.log(MatrixChains([2, 3, 4]));
console.log(MatrixChains([1, 4, 5, 6, 8]));
console.log();
console.log();


//
console.log(" ===== 58 Histogram Area =====");

console.log(HistogramArea([2, 1, 3, 4, 1]));
console.log(HistogramArea([6, 3, 1, 4, 12, 4]));
console.log(HistogramArea([5, 6, 7, 4, 1]));
console.log();
console.log();


//
console.log(" ===== 59 Matching Characters =====");

console.log(MatchingCharacters("ahyjakh") );
console.log(MatchingCharacters("mmmerme"));
console.log(MatchingCharacters("abccdefghi"));
console.log();
console.log();


//
console.log(" ===== 60 Tenary Converter =====");

console.log(TernaryConverter(12));
console.log(TernaryConverter(21));
console.log(TernaryConverter(67));
console.log();
console.log();


//
console.log(" ===== 61 Linear Congruence =====");

console.log(LinearCongruence("32x = 8 (mod 4)"));
console.log(LinearCongruence("12x = 5 (mod 2)"));
console.log(LinearCongruence("12x = 4 (mod 2)"));
console.log();
console.log();


//
console.log(" ===== 62 Formatted Number =====");

console.log(FormattedNumber(["1,093,222.04"]));
console.log(FormattedNumber(["1,093,22.04"]));
console.log(FormattedNumber(["0.232567"]));
console.log(FormattedNumber(["2,567.00.2"]));
console.log();
console.log();


//
console.log(" ===== 63 Largest Row Column =====");

console.log(LargestRowColumn(["345", "326", "221"]));
console.log(LargestRowColumn(["234", "999", "999"]));
console.log(LargestRowColumn(["11111", "22222"]));
console.log();
console.log();


//
console.log(" ===== 64 Eight Queens =====");

console.log(EightQueens(["(2,1)","(4,2)","(6,3)","(8,4)","(3,5)","(1,6)","(7,7)","(5,8)"]));
console.log(EightQueens(["(2,1)","(4,3)","(6,3)","(8,4)","(3,4)","(1,6)","(7,7)","(5,8)"]));
console.log(EightQueens(["(2,1)","(5,3)","(6,3)","(8,4)","(3,4)","(1,8)","(7,7)","(5,8)"]));
console.log();
console.log();


//
console.log(" ===== 65 Three Points =====");

console.log(ThreePoints(["(1,1)", "(3,3)", "(2,0)"]));
console.log(ThreePoints(["(0,0)", "(0,5)", "(0,2)"]));
console.log(ThreePoints(["(0,-3)", "(-2,0)", "(0,0)"]));
console.log();
console.log();



console.log();
console.log(" ======================================== ");
console.log("                HARD_SETS                 ");
console.log(" ======================================== ");
console.log();

//
console.log(" ===== 01 Shortest Path =====");

console.log(ShortestPath(["4","A","B","C","D","A-B","B-D","B-C","C-D"])); //[A-B-D]
console.log(ShortestPath(["7","A","B","C","D","E","F","G","A-B","A-E","B-C","C-D","D-F","E-D","F-G"]));
console.log(ShortestPath(["5","A","B","C","D","F","A-B","A-C","B-C","C-D","D-F"]));
console.log(ShortestPath(["4","X","Y","Z","W","X-Y","Y-Z","X-W"]));
console.log();
console.log();


//
console.log(" ===== 02 Pattern Chaser =====");

console.log(PatternChaser("aabejiabkfabed"));
console.log(PatternChaser("aabejiabkfabed"));
console.log(PatternChaser("aa2bbbaacbbb"));
console.log(PatternChaser("da2kr32a2"));
console.log(PatternChaser("sskfssbbb9bbb"));
console.log();
console.log();


//
console.log(" ===== 03 Calculator =====");

console.log(Calculator("2+(3-1)*3"));
console.log(Calculator("(2-0)(6/2)"));
console.log( Calculator("6*(4/2)+3*1"));
console.log(Calculator("6/3-1"));
console.log();
console.log();


//
console.log(" ===== 04 Weighted Path =====");

console.log(WeightedPath(["4","A","B","C","D","A|B|1","B|D|9","B|C|3","C|D|4"]));
console.log(WeightedPath(["7","A","B","C","D","E","F","G","A|B|1","A|E|9","B|C|2",
"C|D|1","D|F|2","E|D|6","F|G|2"]));
console.log( WeightedPath(["4","A","B","C","D", "A|B|2", "C|B|11", "C|D|3", "B|D|2"]));
console.log(WeightedPath(["4","x","y","z","w","x|y|2","y|z|14", "z|y|31"]));
console.log();
console.log();


//
console.log(" ===== 05 Intersecting Lines =====");

console.log(IntersectingLines(["(3,0)","(1,4)","(0,-3)","(2,3)"]));
console.log(IntersectingLines(["(9,-2)","(-2,9)","(3,4)","(10,11)"]));
console.log(IntersectingLines(["(1,2)","(3,4)","(-5,-6)","(-7,-8)"]));
console.log();
console.log();


//
console.log(" ===== 06 RREF Matrix =====");

console.log(RREFMatrix(["5","7","8","<>","1","1","2"]));
console.log(RREFMatrix(["2","4","8","<>","6","12","14"]));
console.log(RREFMatrix(["2","2","4","<>","1","1","8","<>","7","6","5"]));
console.log();
console.log();



//
console.log(" ===== 07 Polynomial Expansion =====");

console.log(PolynomialExpansion("(2x^2+4)(6x^3+3)"));
console.log(PolynomialExpansion("(1x)(2x^-2+1)"));
console.log(PolynomialExpansion("(-1x^3)(3x^3+2)"));
console.log(PolynomialExpansion("(3x)(-7x^3+3)"));
console.log();
console.log();


//
console.log(" ===== 08 Gas Station =====");

console.log(GasStation(["4","3:1","2:2","1:2","0:1"]));
console.log(GasStation(["4","1:1","2:2","1:2","0:1"]));
console.log(GasStation(["4","0:1","2:2","1:2","3:1"]));
console.log();
console.log();


//
console.log(" ===== 09 Symmetric Matrix =====");

console.log(SymmetricMatrix(["1","0","1","<>","0","1","0","<>","1","0","1"]));
console.log(SymmetricMatrix(["1","2","4","<>","2","1","1","<>","-4","1","-1"]));
console.log(SymmetricMatrix(["5","0","<>","0","5"]));
console.log();
console.log();


//
console.log(" ===== 10 Switch Sort =====");

console.log(SwitchSort([1, 3, 4, 1, 2]));
console.log(SwitchSort([3,1,2]));
console.log(SwitchSort([1,3,4,5,2]));
console.log(SwitchSort([3,5,7,8,9]));
console.log();
console.log();


//
console.log(" ===== 11 Matrix Determinant =====");

console.log(MatrixDeterminant(["1","2","<>","3","4"]));
console.log(MatrixDeterminant(["5","0","<>","0","5"]));
console.log(MatrixDeterminant(["1","2","4","<>","2","1","1","<>","4","1","1"]));
console.log();
console.log();


//
console.log(" ===== 12 Queen Check =====");

console.log(QueenCheck(["(4,4)","(6,6)"]));
console.log(QueenCheck(["(1,1)","(1,4)"]));
console.log(QueenCheck(["(3,1)","(4,4)"]));
console.log();
console.log();


//
console.log(" ===== 13 Noughts Determinants =====");

console.log(NoughtsDeterminer(["X","O","-","<>","-","O","-","<>","O","X","-"]));
console.log(NoughtsDeterminer(["X","-","O","<>","-","-","O","<>","-","-","X"]));
console.log(NoughtsDeterminer(["X","O","X","<>","-","O","O","<>","X","X","O"]));
console.log();
console.log();


//
console.log(" ===== 14 Blackjack Highest =====");

console.log(BlackjackHighest(["four","ten","king"]));
console.log(BlackjackHighest(["two","three","ace","king"]));
console.log(BlackjackHighest(["four","ace","ten"]));
console.log(BlackjackHighest(["ace","queen"]));
console.log();
console.log();


//
console.log(" ===== 15 Transitivity Relations =====");

console.log(TransitivityRelations(["(1,1,1)","(1,0,0)","(0,1,0)"]));
console.log(TransitivityRelations(["(1,1,1)","(0,1,1)","(0,1,1)"]));
console.log(TransitivityRelations(["(0,1,0,0)","(0,0,1,0)","(0,0,1,1)","(0,0,0,1)"]));
console.log();
console.log();


//
console.log(" ===== 16 Alphabet Run Encription =====");

console.log(AlphabetRunEncryption("cdefghijklmn"));
console.log(AlphabetRunEncryption("nmlkjihgfedcb"));
console.log(AlphabetRunEncryption("cdefghijklmnnmlkjihgfedcb"));
console.log(AlphabetRunEncryption("bcdefghijklmnopqrstN"));
console.log(AlphabetRunEncryption("abSbaSaNbR"));
console.log();
console.log();


//
console.log(" ===== 17 Knight Jumps =====");

console.log(KnightJumps("(4 5)"));
console.log(KnightJumps("(1 1)"));
console.log(KnightJumps("(2 8)"));
console.log();
console.log();


//
console.log(" ===== 18 Line Ordering =====");

console.log(LineOrdering(["J>B","B<S","D>J"]));
console.log(LineOrdering(["A>B","A<C","C<Z"]));
console.log(LineOrdering(["A>B","B<R","R<G"]));
console.log();
console.log();



//
console.log(" ===== 19 Sudoku Quadrant Checker =====");

console.log(SudokuQuadrantChecker( ["(1,2,3,4,5,6,7,8,1)","(x,x,x,x,x,x,x,x,x)",
"(x,x,x,x,x,x,x,x,x)","(1,x,x,x,x,x,x,x,x)","(x,x,x,x,x,x,x,x,x)",
"(x,x,x,x,x,x,x,x,x)","(x,x,x,x,x,x,x,x,x)","(x,x,x,x,x,x,x,x,x)",
"(x,x,x,x,x,x,x,x,x)"]));
console.log(SudokuQuadrantChecker(["(1,2,3,4,5,6,7,8,9)","(x,x,x,x,x,x,x,x,x)",
"(6,x,5,x,3,x,x,4,x)","(2,x,1,1,x,x,x,x,x)","(x,x,x,x,x,x,x,x,x)",
"(x,x,x,x,x,x,x,x,x)","(x,x,x,x,x,x,x,x,x)","(x,x,x,x,x,x,x,x,x)",
"(x,x,x,x,x,x,x,x,9)"]));
console.log();
console.log();


//
console.log(" ===== 20 Quick Knight =====");

console.log(QuickKnight("(2 3)(7 5)"));
console.log(QuickKnight("(1 1)(8 8)"));
console.log(QuickKnight("(2 2)(3 3)"));
console.log();
console.log();


//
console.log(" ===== 21 Sqaure Figures =====");

console.log(SquareFigures(6));
console.log(SquareFigures(2));
console.log(SquareFigures(1));
console.log();
console.log();


//
console.log(" ===== 22 Connect Four Winner =====");

console.log(ConnectFourWinner(["R","(x,x,x,x,x,x,x)","(x,x,x,x,x,x,x)","(x,x,x,x,x,x,x)",
"(x,x,x,R,x,x,x)","(x,x,x,R,x,x,x)","(x,x,x,R,Y,Y,Y)"]));
console.log(ConnectFourWinner(["Y","(x,x,x,x,x,x,x)","(x,x,x,x,x,x,x)",
"(x,x,x,x,x,x,x)","(x,x,Y,Y,x,x,x)","(x,R,R,Y,Y,x,R)","(x,Y,R,R,R,Y,R)"]));
console.log();
console.log();


//
console.log(" ===== 23 Array Jumping =====");

console.log(ArrayJumping([2, 3, 5, 6, 1]));
console.log(ArrayJumping([1,2,3,4,2]));
console.log(ArrayJumping([1,7,1,1,1,1]));
console.log();
console.log();


//
console.log(" ===== 24 Matrix Border =====");

console.log(MatrixBorder(["(0,1,1)","(1,1,1)","(1,1,1)"]));
console.log(MatrixBorder(["(0,1,0,1)","(1,1,1,1)","(0,1,0,1)","(1,1,1,1)"]));
console.log(MatrixBorder());
console.log();
console.log();


//
console.log(" ===== 25 Roman Numeral Reduction =====");

console.log(RomanNumeralReduction("LLLXXXVVVV"));
console.log(RomanNumeralReduction("XXXVVIIIIIIIIII"));
console.log(RomanNumeralReduction("DDLL"));
console.log();
console.log();


//
console.log(" ===== 26 Parallel Sums =====");

console.log(ParallelSums([16, 22, 35, 8, 20, 1, 21, 11]));
console.log(ParallelSums([1,2,3,4]));
console.log(ParallelSums([1,2,1,5]));
console.log();
console.log();


//
console.log(" ===== 27 LCS =====");

console.log(LCS(["abcabb","bacb"]));
console.log(LCS(["abc","cb"]));
console.log(LCS(["bcacb","aacabb"]));
console.log();
console.log();


//
console.log(" ===== 28 Nim Winner =====");

console.log(NimWinner([1, 2, 3]));
console.log(NimWinner([1,2,3]));
console.log(NimWinner([1,1,1,4,5,4]));
console.log();
console.log();


//
console.log(" ===== 29 Furthest Nodes =====");

console.log(FarthestNodes(["a-b","b-c","b-d"]));
console.log(FarthestNodes(["b-e","b-c","c-d","a-b","e-f"]));
console.log(FarthestNodes(["b-a","c-e","b-c","d-c"]));
console.log();
console.log();


//
console.log(" ===== 30 Optimal Assignment =====");

console.log(OptimalAssignments(["(5,4,2)","(12,4,3)","(3,4,13)"]));
console.log(OptimalAssignments(["(1,2,1)","(4,1,5)","(5,2,1)"]));
console.log(OptimalAssignments(["(13,4,7,6)","(1,11,5,4)","(6,7,2,8)","(1,3,5,9)"]));
console.log();
console.log();


//
console.log(" ===== 31 Kaprekars Constant =====");

console.log(KaprekarsConstant(3524));
console.log(KaprekarsConstant(2111));
console.log(KaprekarsConstant(9831));
console.log();
console.log();


//
console.log(" ===== 32 Hamiltonian Path =====");

console.log(HamiltonianPath(["(A,B,C,D)","(A-B,A-D,B-D,A-C)","(C,A,D,B)"]));
console.log(HamiltonianPath(["(A,B,C)","(B-A,C-B)","(C,B,A)"]));
console.log(HamiltonianPath(["(X,Y,Z,Q)","(X-Y,Y-Q,Y-Z)","(Z,Y,Q,X)"]));
console.log();
console.log();


//
console.log(" ===== 33 Vertex Covering =====");

console.log(VertexCovering(["(A,B,C,D)","(A-B,A-D,B-D,A-C)","(A,B)"]));
console.log(VertexCovering(["(A,B,C,D)","(A-B,A-D,B-D,A-C)","(C)"]));
console.log(VertexCovering(["(X,Y,Z,Q)","(X-Y,Y-Q,Y-Z)","(Z,Y,Q)"]));
console.log();
console.log();



//
console.log(" ===== 34 Step Walking =====");

console.log(StepWalking(1));
console.log(StepWalking(2));
console.log(StepWalking(3));
console.log(StepWalking(5));
console.log(StepWalking(8));
console.log();
console.log();



//
console.log(" ===== 35 Pascals Triangle =====");

console.log(PascalsTriangle([1,4,6,4]));
console.log(PascalsTriangle([1,5,10]));
console.log(PascalsTriangle([1,3]));
console.log(PascalsTriangle([1,5,10,10]));
console.log(PascalsTriangle([1,4,6,4,1]));
console.log();
console.log();


//
console.log(" ===== 36 Reverse Polish Notation =====");

console.log(ReversePolishNotation("2 12 + 7 /"));
console.log(ReversePolishNotation("1 1 + 1 + 1 +"));
console.log(ReversePolishNotation("4 5 + 2 1 + *"));
console.log();
console.log();


//
console.log(" ===== 37 Max Heap Checker =====");

console.log(MaxHeapChecker([10,19,52,13,16]));
console.log(MaxHeapChecker([10,19,52,104,14]));
console.log(MaxHeapChecker([73,74,75,7,2,107]));
console.log(MaxHeapChecker([1,5,10,2,3,10,1]));
console.log();
console.log();


//
console.log(" ===== 38 Chessboard Traveling =====");

console.log(ChessboardTraveling("(1 1)(2 2)"));
console.log(ChessboardTraveling("(1 1)(3 3)"));
console.log(ChessboardTraveling("(2 2)(4 3)"));
console.log();
console.log();


//
console.log(" ===== 39 Matching Couples =====");

console.log(MatchingCouples([5, 3, 2]));
console.log(MatchingCouples([10, 5, 4]));
console.log(MatchingCouples([5,5,4]));
console.log(MatchingCouples([2,2,2]));
console.log();
console.log();


//
console.log(" ===== 40 Approaching Fibonacci =====");

console.log(ApproachingFibonacci([15, 1, 3]));
console.log(ApproachingFibonacci([5,2,1]));
console.log(ApproachingFibonacci([1,20,2,5]));
console.log();
console.log();


//
console.log(" ===== 41 Simple SAT =====");

console.log(SimpleSAT("(a&b)|c"));
console.log(SimpleSAT("((a&c)&~a)"));
console.log(SimpleSAT("(a&b&c)|~a"));
console.log(SimpleSAT("a&(b|c)&~b&~c"));
console.log();
console.log();


//
console.log(" ===== 42 Array Couples =====");

console.log(ArrayCouples([4, 5, 1, 4, 5, 4, 4, 1]));
console.log(ArrayCouples([6, 2, 2, 6, 5, 14, 14, 1]));
console.log(ArrayCouples([2,1,1,2,3,3]));
console.log(ArrayCouples([5,4,6,7,7,6,4,5]));
console.log();
console.log();


//
console.log(" ===== 43 Array Notation =====");

console.log(ArrayRotation([2, 3, 4, 1, 6, 10]));
console.log(ArrayRotation([3,2,1,6]));
console.log(ArrayRotation([4,3,4,3,1,2]));
console.log();
console.log();


//
console.log(" ===== 44 Bracket Combinations =====");

console.log(BracketCombinations(5));
console.log(BracketCombinations(3));
console.log(BracketCombinations(2));
console.log();
console.log();


//
console.log(" ===== 45 Counting Anagrams =====");

console.log(CountingAnagrams("cars are very cool so are arcs and my os"));
console.log(CountingAnagrams("aa aa odg dog gdo"));
console.log(CountingAnagrams("a c b c run urn urn"));
console.log();
console.log();


//
console.log(" ===== 46 Maximal Square =====");

console.log(MaximalSquare(["10100", "10111", "11111", "10010"]));
console.log(MaximalSquare(["0111", "1111", "1111", "1111"]));
console.log(MaximalSquare(["0111", "1101", "0111"]));
console.log();
console.log();


//
console.log(" ===== 47 Maximal Rectangle =====");

console.log(MaximalRectangle(["10100", "10111", "11111", "10010"]));
console.log(MaximalRectangle(["1011", "0011", "0111", "1111"]));
console.log(MaximalRectangle(["101", "111", "001"]));
console.log();
console.log();


//
console.log(" ===== 48 Bipartite Matching =====");

console.log(BipartiteMatching(["a->d", "a->e", "b->f", "c->e"]));
console.log(BipartiteMatching(["a->w", "a->x", "b->x", "b->y", "c->x", "c->z", "d->w"]));
console.log(BipartiteMatching(["a->b", "c->b", "c->d", "e->b"]));
console.log();
console.log();


//
console.log(" ===== 49 Pentagonal Number =====");

console.log(PentagonalNumber(2));
console.log(PentagonalNumber(5));
console.log(PentagonalNumber(9));
console.log();
console.log();


//
console.log(" ===== 50 City Traffic =====");

console.log(CityTraffic(["1:[5]","2:[5]","3:[5]","4:[5]","5:[1,2,3,4]"]));
console.log(CityTraffic(["1:[5]","2:[5,18]","3:[5,12]","4:[5]","5:[1,2,3,4]","18:[2]","12:[3]"]));
console.log();
console.log();
console.log();


//
console.log(" ===== 51 Convex Hull Points =====");

console.log(ConvexHullPoints(["(2,2)", "(3,1)", "(2,6)", "(0,-2)"]));
console.log(ConvexHullPoints(["(2,2)", "(3,1)", "(2,6)", "(0,1)", "(2,3)", "(5,2)"]));
console.log(ConvexHullPoints(["(0,1)", "(3,6)", "(2,2)", "(0,7)"]));
console.log();
console.log();

console.log();
console.log(" ========== THE END! ========== ");
console.log();
*/