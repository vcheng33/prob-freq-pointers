// add whatever parameters you deem necessary

// Accepts two arrays of different lengths, first array will consist of keys, and second, values
// Return an object created from the keys and values
// if there aren't enough values for keys, the remaining keys should have a null, if there are not enough keys, ignore the remaining values

// [a,b,c,d], [1,2,3] // {a:1, b:2, c:3, d: null}
function twoArrayObject(arr1, arr2) {
    // Create an object that will contain the key/value pairs
    let combinedObject = {};

    // should we iterate through each array by index and if array2[specific index] === undefined
    // we'll input null
    for (let i = 0; i < arr1.length; i++) {
        combinedObject[arr1[i]] = arr2[i] || null;
    }

    // otherwise, we'll input array[index] to be array2[index];

    // return the object
    return combinedObject;
}
