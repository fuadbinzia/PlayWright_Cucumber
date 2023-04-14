// Write a function that accepts a string as input and
// returns boolean response if the string is a palindrome or not


function palindrome(str)  {

return str === str.split('').reverse().join('');
}