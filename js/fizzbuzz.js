// For every number that isn't a multiple of 3 or 5, return a period '.'
// For every number that is a multiple of 3 (but not 5), return 'fizz'
// For every number that is a multiple of 5 (but not 3), return 'buzz'
// For every number that is a multiple of 3 and 5, return 'fizzbuzz'

// Variable Declarations

var avow = require('avow');

// Functional Declarations
function FizzBuzz(n) {
    var output = '';

    for (var i = 1; i <= n; i ++) {
        // this was added to loop the if, else if, and else statements. i was used to give us a place to start. here we told it to start at 1 and as long as the number was smaller than n, which would later be defined as 15, to ++, or add 1

        if (i % 3 === 0 && i % 5 === 0) {
            output += 'FizzBuzz';
        }
        // this says that if the number is divisible by 3 and by 5, that the output should be FizzBuzz

        else if (i % 3 === 0) {
            output += 'Fizz';
        }
        // this says that if the number is divisible by 3, the output should be Fizz.

        else if (i % 5 === 0) {
            output += 'Buzz';
        }
        // this says that if the number is divisible by 5, the output shoudl be Buzz.

        else {
            output += '.';
        }
        // this says that everything else (that wasn't divisible by 3, 5, or both by 3 and 5) should have the ouput of .
    }
    return output;
    // this stops the loop
}
FizzBuzz(15);
// this assigns the number 15 to n. assigning it separately here allows the entire chain to be as general as possible. That way, if I wanted to run higher numbers, I could easily change just one line of code (this one) to be a different value.

// Tests (do not modify these)
avow('FizzBuzz 1 should be .', '.' === FizzBuzz(1), '.', FizzBuzz(1));
avow('FizzBuzz 2 should be ..', '..' === FizzBuzz(2), '..', FizzBuzz(2));
avow('FizzBuzz 3 should be ..Fizz', '..Fizz' === FizzBuzz(3), '..Fizz', FizzBuzz(3));
avow('FizzBuzz 5 should be ..Fizz.Buzz', '..Fizz.Buzz' === FizzBuzz(5), '..Fizz.Buzz', FizzBuzz(5));
avow('FizzBuzz 10 should be ..Fizz.BuzzFizz..FizzBuzz', '..Fizz.BuzzFizz..FizzBuzz' === FizzBuzz(10), '..Fizz.BuzzFizz..FizzBuzz', FizzBuzz(10));
avow('FizzBuzz 15 should be ..Fizz.BuzzFizz..FizzBuzz.Fizz..FizzBuzz', '..Fizz.BuzzFizz..FizzBuzz.Fizz..FizzBuzz' === FizzBuzz(15), '..Fizz.BuzzFizz..FizzBuzz.Fizz..FizzBuzz', FizzBuzz(15));
