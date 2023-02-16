// Exercise: Level 1

let challenge = '30 Days Of JavaScript' //1 declare a variable and assign the value
console.log(challenge) //2 print the string. Output: 30 Days Of JavaScript
console.log(challenge.length) //3 print the length. Output: 21
console.log(challenge.toUpperCase()) //4 change to uppercase. Output: 30 DAYS OF JAVASCRIPT
console.log(challenge.toLowerCase()) //5 change to lowercase. Output: 30 days of javascript

//let sub = challenge.substring(0,2) you can either declare another variable to use slice methods or you can use slice methods inside console.log()
// console.log(sub) Output: 30
console.log(challenge.substring(0,2)) // 6 use substring() method to slice out the first word
console.log(challenge.slice(3)) // 7 slice out 'days of js'
console.log(challenge.includes('Script')) // 8 check whether the string contains Script using includes()

console.log(challenge.split()) // 9 split the string into an array
console.log(challenge.split(''))
console.log(challenge.split(' ')) // 10 split using space

let comp = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(comp.split(', ')) // 11 split the above string at the comma into an array

console.log(challenge.replace('JavaScript', 'Python')) // 12 replace javascript with python from the string (challenge)
console.log(challenge.charAt(15)) // Output: S // 13. What is the character at index 15 in the string (use charAt())
console.log(challenge.charCodeAt('J')) // Output: 51 // 14 What is the character code in the string "30 days of js"
console.log(challenge.indexOf('a')) // Output: 4 // 15 Use indexOf to determine the position of first occurrence of 'a' from the string
console.log(challenge.lastIndexOf('a')) // Output: 14 // 16 Determine the last occurrence of 'a' in the string
console.log(challenge.indexOf('Because')) //Output: -1 // 17 find the position of first occurrence of 'because' in the string
console.log(challenge.lastIndexOf('Because')) // Output: -1 // 18 find the position of last occurrence of 'because' in the string
console.log(challenge.search('because')) // Output: -1 // 19 use search to find the word 'because' in the string as it's not in the string it will print -1.
console.log(challenge.trim()) // 20 removes any whitespaces at the beginning or at the end of a string.
console.log(challenge.startsWith('30 Days Of JavaScript')) // 21 make the result true by using startsWith() and write the same sentence as in the string
console.log(challenge.endsWith('30 Days Of JavaScript')) // 22 now use endsWith()
console.log(challenge.match('a')) // 23 Output: [ 'a', index: 4, input: '30 Days Of JavaScript', groups: undefined ]

let str1 = '30 Days of', str2 = ' ', str3 = 'JavaScript'
console.log(str1.concat(str2, str3)) //24 Output: 30 Days of JavaScript

console.log(challenge.repeat(2)) // 25 Output: 30 Days Of JavaScript30 Days Of JavaScript

//********************************************************************************************************************************* */

// Exercise: Level 2
console.log(`The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.`) //1
console.log("Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead.") //2

console.log(typeof('10'), Number('10')===10) // Output: string, true
let str = '10', num = Number(str)
console.log(num === 10) //3 Output: true // Q: Check if typeof '10' is exactly equal to 10. If not make it exactly equal.

console.log(Math.round(parseFloat('9.8'))===10) // 4 Output: true // Q: Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
// we can also do it in another way:
let strg = '9.8', numb = parseFloat(strg)
if(numb !== 10) {
    numb = Math.round(numb)
}
console.log(numb === 10) // Output: true

let chkStr = 'python', chStr = 'jargon'
console.log(chkStr.includes('on'), chStr.includes('on')) // 5 Output: true true // Q: Check if 'on' is found in both python and jargon
// we can also do it by using just console.log():
console.log('python'.includes('on') && 'jargon'.includes('on')) // Output: true

console.log('I hope this course is not full of jargon.'.includes('jargon')) // 6 Output: true // Q: to check whether the sentence contains 'jargon'

console.log(Math.floor(Math.random()*101)) // 7 Output: 35.435344 // Q: generate a random number ranging from 0 and 100 inclusively

console.log(Math.floor(Math.random()* 51 + 50)) // 8 Output: 91 // here, I've used Math.floor to get the rounding number of random number generated. // Q: generate a random number ranging from 50 and 100 inclusively

console.log(Math.floor(Math.random()* 256)) // 9 Output: 21 // Q: generate a random between 0 and 255 inclusively

let stri = 'JavaScript';
let randomIndex = Math.floor(Math.random() * stri.length);
let randomCharacter = stri[randomIndex];

console.log(randomCharacter); // 10 Output: S // Q: access the string 'javascript' characters using a random number
console.log('1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125') // 11 Q: use console.log() and escape characters to print the pattern.

console.log("You cannot end a sentence with because because because is a conjunction".substr(31,23)) // here I've used just console.log() to slice out the phrase 'because because because'

let sent = "You cannot end a sentence with because because because is a conjunction";
let phr = sent.substr(31,23); // As you can see here, the substr() struck off because it is not recommended in modern JS, so use substring() or slice() instead.

console.log(phr); // 12 Q: slice out the phrase 'because because because' from the string using substr()

console.log("You cannot end a sentence with because because because is a conjunction".substring(31, 54))

/************************************************************************************************************************************ */

// Exercise: Level 3

// 1. Q: 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.

let sen = "Love is the best thing in this world. Some found their love and some are still looking for their love."
let occur = sen.match(/love/gi) // g-means to search in the whole text, i - case insensitive
console.log(occur.length) // Output: 3

/** The match() method is called on the string and a regular expression /love/gi is passed as an argument. 
 * The g flag specifies that the search should be global, meaning it should return all matches in the string, not just the first one. 
 * The i flag specifies that the search should be case-insensitive, meaning it will match "love" regardless of whether it is uppercase or lowercase. */


// 2. Q: Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

let newSen = 'You cannot end a sentence with because because because is a conjunction'
let newOccur = newSen.match(/because/g)
console.log(newOccur.length) // Output: 3
console.log(`In the sentence "${newSen}", the word 'because' appears "${newOccur.length}" times.`)
// Output: In the sentence "You cannot end a sentence with because because because is a conjunction", the word "because,because,because" appears "3" times.


// 3. Q: Clean the following text and find the most frequent word (hint, use replace and regular expressions).