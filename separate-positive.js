// add whatever parameters you deem necessary
function separatePositive(array) {

    // left = 0
    // right = array.length -1

    // Iterate through the array, if the number is greater than 0, we don't touch it,
    // If it's smaller than 0, we push it to the end.

    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            array.push(array[i]);
            array.splice(i,1);
            i--;
        }
    }


}
