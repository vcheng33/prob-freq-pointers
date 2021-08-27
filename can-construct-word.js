// add whatever parameters you deem necessary & write doc comment
// accepts 2 strings, a word and some letters
// should return true if the word can be built with the letters, otherwise false
// assume only lower case, no special letters or spaces

// aa, abc // false because there's only 1 a
// abc, dbca // true
function canConstructWord(word, randomLetters) {
    // checking for fringe cases
    if (word.length > randomLetters.length) {
        return false;
    }
    // create two variables that call the countLetters function and return an object
    let wordCounter = countLetters(word);
    let randomLettersCounter = countLetters(randomLetters);
    console.log("wordCounter", wordCounter);
    console.log("randomLettersCounter", randomLettersCounter);
    
    // create a loop
    for (let key in wordCounter) {
        // Object.key() of object 1 and see if it exists in the second object. 
        // if not, return false
        if (!randomLettersCounter[key]) {
            return false;
        }

        // if the value is less or equal to the value in object 2
        // if not, return false
        if (wordCounter[key] > randomLettersCounter[key]) {
            return false;
        }
    }
    // at the end of the loop, if everything is good, return true
    return true;
    
}

// create this frequency counter that will take a string and create an object with each unique letter and the number of times that letter appears
function countLetters(string) {
    let counter = {};

    for (let character of string) {
        let currentCount = counter[character] || 0;
        counter[character] = currentCount + 1;
    }
    
    return counter;
}
