// add whatever parameters you deem necessary
/**  accpet two positive integars
compare the number frequency 
return true if frequency match
*/
// 22, 222 false
// 182, 281 true

//-make a seperate frequency counter, return an object
//-turn input numbers into string, then run though frequency counter
//-loop though keys to compare two objects

function sameFrequency(num1, num2) {
    const obj1 = frequencyCounter(num1.toString());
    const obj2 = frequencyCounter(num2.toString());
    for (let key in obj1) {
        if (obj2[key] === undefined || obj2[key] !== obj1[key]) {
            return false;
        }
    }
    return true;
}

function frequencyCounter(iterable) {
    let output = {};
    for (let item of iterable) {
        currCount = output[item] || 0;
        output[item] = currCount + 1;
    }
    return output;
}
