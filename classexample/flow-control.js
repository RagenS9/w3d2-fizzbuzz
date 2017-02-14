// var todayIs = 'Tuesday';

// if ('2' == 2) {
//     console.log('Basically the same.');
// }
// else {
//     console.log('So different.');
// }

// == would be basically the same. but === would be so different.

// if (todayIs === 'Tuesday') {
//     console.log('Happy Valentine\'s Day!');
// }
// else if (todayIs === 'Wednesday') {
//     console.log('Happy Humpday!');
// }
// else {
//     // console.log('Happy ' + todayIs + '!');
//     console.log('Happy ${todayIs}!');
//     // the first is the old way of doing it. the second is the new way of doing it ES6.
// }

// var todayIsTuesday = true;
// console.log(typeof todayIsTuesday);
// use typeof to check what something is. {} would be an object. true comes back as boolean

// var counter = 0;
// counter++;
// this adds 1 to the number given in the variable.
// counter = counter + 2;
// this adds 2 (or more) to the number given in the variable.
// console.log(counter);
// if (typeof todayIsTuesday === 'boolean') {
// ask him what the third method was. I think it was var += number.
// }

// var counter = 0;
// counter = counter + 2;
// counter += 2;
// if (counter >= 2) {
//     console.log('Correct answer.');
// }

// modulous math
// var slicesOfPizza = 12;

// if (slicesOfPizza % 3 === 0 && slicesOfPizza % 5 === 0) {
//     console.log('There\'s enough for both of you.');
// }
// else if (slicesOfPizza % 3 === 0) {
//     console.log('Enough for three.');
// }
// else {
//     console.log('Not going to divide evenly.');
// }

// var temperature = 50;

// switch (temperature) {
//     case 50: 
//         console.log('Getting warmer.');
//         break;
//     case 60:
//         console.log('Getting closer to spring.');
//         break;
//     case 70:
//         console.log('Spring is here.');
//         break;
//     default:
//         console.log('Who knows. Welcome to the middle plains.');

// }
// TERNARY OPERATORS

// var favoriteColor = 'red';
// var message = favoriteColor === 'red' ? 'My favorite color is red.' : 'My favorite color is not red.'
// console.log(message);

// console.log(favoriteColor === 'red' ? 'My favorite color is red.' : 'My favorite color is not red.');

// loop adding numbers
// for (var counter = 0; counter < 500000; counter +=500) {
//     console.log(counter);
// }

// loop with text
// for (var counter = 0; counter < 50; counter +=5) {
//     console.log('Love.' .repeat(counter));
// }

// to loop through a list
// var pets = ['dog', 'cat', 'hamster', 'fish', 'bird', 'snake', 'tiger'];

// for (var counter = 0; counter < pets.length; counter++) {
//     console.log(pets[counter]);
// }

// loop through a list, using i instead of counter. developers often use i for increment instead of counter
// var pets = ['dog', 'cat', 'hamster', 'fish', 'bird', 'snake', 'tiger'];

// for (var i = 0; i < pets.length; i++) {
//     console.log(pets[i]);
// }
// if you change the i < to i < 2, it will just tell us the first two.

// for (var i = 0; i < 20; i++) {
//     document.getElementById('robots').innerHTML += `<img src="http://robohash.org/indy${i}" />`
// }
// getElementById will go get an image

// FUNCTIONS

// basic function
// function addOne(number) {
//     return number += 1;
// }

// var result = addOne(100);

// console.log(result);
// the answer to this is 101.

// multiple arguments (number, amount)
// function add(number, amount) {
//     return number += amount;
// }

// var result = add(100, 5);

// console.log(result);
// this answer is 105


// using words
// function capitalize(word) {
//     return word.toUpperCase();
// }

// var result = capitalize('Almost lunch time.');

// console.log(result);
// this answer is ALMOST LUNCH TIME.


// signIn('ragens9@att.net', 'password');
// redirectToInbox();
// checkEmail();

// examples of pre-written code so you don't even have to know what it's doing, as long as you give it its two arguments.

// don't have to have anything in the parens. This just calls the function. sometimes you'll need to add some value. 

function FizzBuss(n) {
    var output = '';
    // use plus sign to add
    return output;
}