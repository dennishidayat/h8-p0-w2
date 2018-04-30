var word = 'JavaScript';
var second = 'is';
var third = 'awesome';
var fourth = 'and';
var fifth = 'I';
var sixth = 'love';
var seventh = 'it!';

console.log( word, " ", second, " ", third, " ", fourth, " ", fifth, " ", sixth, " ", seventh);

var firstWord = word[0] + word[1] + word[2] + word[3] + word[4] + word[5] + word[6] + word[7] + word[8] + word[9];
var secondWord = second[0] + second[1];
var thirdWord = third[0] + third[1] + third[2] + third[3] + third[4] + third[5] + third[6];
var fourthWord = fourth[0] + fourth[1] + fourth[2];
var fifthWord = fifth[0];
var sixthWord = sixth[0] + sixth[1] + sixth[2] + sixth[3];
var seventhWord = seventh[0] + seventh[1] + seventh[2];

console.log(firstWord, secondWord, thirdWord, fourthWord, fifthWord, sixthWord, seventhWord);

var word3 = 'wow JavaScript is so cool';
var firstWord3 = word3.substring(0, 3);
var secondWord3 = word3.substring(4, 14);
var thirdWord3 = word3.substring(15, 17);
var fourthWord3 = word3.substring(18, 20);
var fifthWord3 = word3.substring(21, 25);

console.log('First Word: ' + firstWord3);
console.log('Second Word: ' + secondWord3);
console.log('Third Word: ' + thirdWord3);
console.log('Fourth Word: ' + fourthWord3);
console.log('Fifth Word: ' + fifthWord3);

var firstWordLength = firstWord3.length;
var secondWordLength = secondWord3.length;
var thirdWordLength = thirdWord3.length;
var fourthWordLength = fourthWord3.length;
var fifthWordLength = fifthWord3.length;

console.log('First Word: ' + firstWord3 + ', with length: ' + firstWordLength);
console.log('Second Word: ' + secondWord3 + ', with length: ' + secondWordLength);
console.log('Third Word: ' + thirdWord3 + ', with length: ' + thirdWordLength);
console.log('fourth Word: ' + fourthWord3 + ', with length: ' + fourthWordLength);
console.log('fifth Word: ' + fifthWord3 + ', with length: ' + fifthWordLength);
