/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function (x) {
    if (x === 0) {
        return 1;
    }
    if (x < 0) {
        return null;
    }
    return x * factorial(x - 1);
}
console.log(factorial(5));

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function (array) {
    if (array.length === 0) {
        return 0;
    } else {
        return array[0] + sum(array.slice(1));
    }
};
console.log(sum([1, 2, 3, 4, 5]));

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15

// var arraySum = function(array) {
//     return arr.reduce(function(s, n) {
//         return s + ((n instanceof Array) ? arraySum(n) : +n || 0);
//     }, 0);
// };

function arraySum(arr) {
    return arr.reduce(function (s, n) {
        return s + ((n instanceof Array) ? arraySum(n) : +n || 0);
    }, 0);
}

console.log(arraySum([1, [2, 3], [[4]], 5])); // 15

// 4. Check if a number is even.
var isEven = function (n) {
    // acount for negative integers
    if (n < 0) {
        n = Math.abs(n)
    }
    if (n === 0) return true;
    if (n === 1) return false;
    return isEven(n - 2);
};
console.log(isEven(0));


// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function (num) {
    let sum = 0;
    if (num === 0) {
        return 0;
    } else if (num < 0) {
        sum += num + 1;
        return sum + sumBelow(num + 1);
    } else {
        sum += num - 1;
        return sum + sumBelow(num - 1);
    }
};

console.log(sumBelow(4));

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]

function range(start, end) {
    if (start - end === 0) {
        return [start];
    } else {
        const numbers = range(start + 1, end);
        numbers.unshift(start);
        return numbers;
    }
};

console.log(range(2, 5));
console.log(range(1, 9));

// function range(start, end) {
//   if (start === end - 2) {
//     return [start + 1]
//   } else {
//     return [start + 1].concat(range(start + 1, end))
//   }
// } 


// range(2, 9)

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number

var exponent = function (base, exp) {
    if (exp === 0) {
        return 1;
    } else if (exp < 0) {
        return 1 / (exponent(base, - exp));
    } else {
        return base * exponent(base, exp - 1);
    }
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function (n) {
    // base case
    // recurring case
    n = n / 2;
    if (n == 2) {
        return true;
    } else if (n > 2) {
        return powerOfTwo(n);
    } else {
        return false;
    }
};

// 9. Write a function that reverses a string.

var reverse = function (string) {
    if (str === "")
        return "";
    else
        return reverse(str.substr(1)) + str.charAt(0);
};

reverse("hello");

// 10. Write a function that determines if a string is a palindrome.

var palindrome = function (string) {
    if (string.length <= 1) {
        return true;
    }

    let [firstLetter] = string;
    let lastLetter = string[string.length - 1];

    if (firstLetter === lastLetter) {
        let stringWithoutFirstAndLastLetters = string.substring(
            1,
            string.length - 1
        );
        return palindrome(stringWithoutFirstAndLastLetters);
    } else {
        return false;
    }
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4

//var modulo = function (x, y) {
//};

function modulo(num1, num2) {
    var sign = num1 < 0 ? -1 : 1;
    var dividend = Math.abs(num1);
    var divisor = Math.abs(num2);

    if (dividend === 0) {
        return 0;
    }
    if (dividend === 0 || isNaN(dividend) || isNaN(divisor)) {
        return NaN;
    }
    if (dividend < divisor) {
        return sign * dividend;
    }

    var counter = dividend;
    while (counter >= divisor) {
        counter = counter - divisor;
    }
    return sign * counter;
}

console.log(25 % 4, modulo(25, 4));

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.

var multiply = function (x, y) {
    if (y == 0) {
        return 0;
    }

    /* Add x one by one */
    if (y > 0) {
        return (x + multiply(x, y - 1));
    }

    /* the case where y is negative */
    if (y < 0) {
        return -multiply(x, -y);
    }

    return -1;
};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).

var divide = function (x, y) {

    let sign = ((dividend < 0) ^ (divisor < 0)) ? -1 : 1;

    // Update both divisor and 
    // dividend positive

    let dividend = Math.abs(dividend);
    let divisor = Math.abs(divisor);

    // Initialize the quotient 
    let quotient = 0;

    while (dividend >= divisor) {
        dividend -= divisor;
        ++quotient;
    }

    return sign * quotient; 
};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm

var gcd = function (a, b) {
    if (!b) {
        return a;
    }

    return gcd(b, a % b);
};

console.log(gcd(2154, 458));

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true

var compareStr = function (str1, str2) {
    let n1 = str1.length();
    let n2 = str2.length();

    // If length of both strings is not same,  
    // then they cannot be Permutation  
    if (n1 != n2)
        return false;
    let ch1 = [str1];
    let ch2 = [str2];

    // Sort both strings  
    Arrays.sort(ch1);
    Arrays.sort(ch2);

    // Compare sorted strings
    
    for (int i = 0; i < n1; i++)
    if (ch1[i] != ch2[i]) {
        return false;
    }
    return true;  
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function (str) {
};

// 17. Reverse the order of an array

//var reverseArr = function (array) {
//};

//function reverseArray(toBeReversed) {
//    var reversed = [];

//    function reverser(toBeReversed) {
//        if (toBeReversed.length !== 0) {
//            reversed.push(toBeReversed.pop());
//            reverser(toBeReversed);
//        }
//    }

//    reverser(toBeReversed);
//    return reversed;
//}

let reverseArray = (arr, n) => {
    //If the length is 0 
    //then return an empty array

    if (n == 0) {
        return [];
    }

    //Call the function recursively with one index less and so on.
    return [arr[n - 1]].concat(reverseArray(arr, --n));
}

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]

var buildList = function (value, length) {
    if (length === 0) {
        return [];
    }

    return [num].concat(buildList(value, length - 1));
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']

//var fizzBuzz = function (n) {
//};

function fizzBuzz(n) {
    function fizzBuzzRecursive(n) {
        //create results array
        //create base case for when n === 1
        //recurse and push value to array
        var results = [];
        if (n === 1) {
            return '1';
        } else {
            if (n % 3 === 0 && n % 5 === 0) {
                results.push('FizzBuzz');
            } else if (n % 5 === 0) {
                results.push('Buzz');
            } else if (n % 3 === 0) {
                results.push('Fizz');
            } else {
                results.push('' + n);
            }
            return results.concat(fizzBuzzRecursive(n - 1));
        }
    }

    return fizzBuzzRecursive(n).reverse();
};

console.log(fizzBuzz(15));

// 20. Count the occurence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
//var countOccurrence = function (array, value) {
//};

function foo(arr) {
    let a = [],
        b = [],
        prev;

    arr.sort();
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== prev) {
            a.push(arr[i]);
            b.push(1);
        } else {
            b[b.length - 1]++;
        }
        prev = arr[i];
    }

    return [a, b];
}

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function (array, callback) {
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function (obj, key) {
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function (obj, value) {
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function (obj, oldKey, newKey) {
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function (n) {
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function (n) {
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function (array) {
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function (array) {
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function (obj) {
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function (array) {
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function (str, obj) {
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function (list) {
};

// 33. Augment every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function (array, aug) {
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function (array) {
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function (array) {
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function (str) {
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function (tag, node) {
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function (array, target, min, max) {
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function (array) {
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function (input) {
};
