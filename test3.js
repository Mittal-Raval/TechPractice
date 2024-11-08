//Rearrange Array Alternately

function reArraneArray(arr) {
    let result = [];
    let left = 0;
    let right = arr.length - 1;


    while (left <= right){

        if(left === right) {
            result.push(arr[left]);
        }else{
            result.push(arr[right]);
            result.push(arr[left]);
        }
        left++;
        right--;
    }

    return result;
}

let arr = [1, 2, 3, 4, 5, 6];
let n = arr.length;
let reArranged = reArraneArray(arr);

console.log(reArranged.join(" "));