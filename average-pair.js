// add whatever parameters you deem necessary
/**
function should accept an ordered array and a target average number, 
determin whether there is a pair of values in array that average to the target average number.
returns a boolean

-if input array is empty, return false

-- set left and right pointer at beginning and end of array
- if average of left and right greater than target, move right pointer to the left
- if average of left and right smaller than target, move left pointer to the right
-if equal, return true;
 */
function averagePair(nums, average) {
    let left = 0;
    let right = nums.length - 1;
    while (right > left) {
        let curAvg = (nums[left] + nums[right]) / 2;
        if (curAvg > average) {
            right -= 1;
        }
        if (curAvg < average) {
            left += 1;
        }
        if (curAvg === average) {
            return true;
        }
    }
    return false;
}
