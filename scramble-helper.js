// Create a function that reverses a word

function reverseWord(word) {
    return word.split('').reverse().join('');
}
// console.log(reverseWord('melissa'))

// Create a function that takes an array of words and returns a new array of the
 // words with each word reversed.

function reverseWords(words) {
    result = []
    for (let word of words) {
        result.push(word.split('').reverse().join(''));
    }
    return result;

}
// console.log(reverseWords(['melissa', 'bonnie', 'linda', 'dave']))


// Create a function that returns a random word from an array

function randomWord(list) {

    return list[Math.floor(Math.random()*list.length)];
}
// console.log(randomWord(['melissa', 'arun', 'will', 'qiaozi']))

// Create an array of words and save it to a variable. Using your functions create
// a second array of reversed words.
    

words = ['melissa', 'arun', 'will', 'qiaozi']

function multiTask(words) {

    return reverseWords(words);
}

// console.log(multiTask(words));

// We could use the two arrays we've created to select a random word to show the user
// and check their guess. How could we do that? Is there a better way?

function multiTask_rand(words) {

    return randomWord(multiTask(words).concat(words));
}

// console.log(multiTask_rand(words));
// ////////////////////////////////////////////////////////////////////////////

// Create a function that takes an array of words and returns a map with the keys
// as the reversed word and the values as the original word.

function createMap(words) {

    const dict = new Map();

    for (let word of words) {
        dict[reverseWord(word)] = word;
    }
    return dict;
}

// console.log(createMap(words));

// Create a function that takes two strings, `guess` and `word` and a map, like
// the one you created above. If the first string is in the map, return the word
// if not, console log "Sorry, incorrect. The word was ..." and include word.


function guessingGame(guess,word,map) {

    if (map[guess]) {
        return map[guess];
    }
        return `Sorry, incorrect. The word was ${word}`
    }

// console.log(guessingGame('lliw',randomWord(words),createMap(words)));

// ////////////////////////////////////////////////////////////////////////////
// FURTHER STUDY

// Create a function that scrambles a word. Use whatever method you like to
// rearrange the letters.

function shuffelWord (word){
    let shuffledWord = '';
    word = word.split('');
    while (word.length > 0) {
      shuffledWord +=  word.splice(word.length * Math.random() << 0, 1);
    }
    return shuffledWord;
}

console.log(shuffelWord(randomWord(words)));



// Create a function that takes an array of words and returns a map with the
// scrambled words as the keys and the original word as the values.


