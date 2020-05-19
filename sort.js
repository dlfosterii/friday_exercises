let arr = [10, 5, 9, 4, 15];
function sort(arr) {
  const newArr = [];
  for (i in arr) {
    if (i < i + 1) {
      newArr.unshift(arr[i]);
    } else {
      newArr.push(arr[i]);
    }
  }
  let lastItem = newArr.shift();
  newArr.push(lastItem);
  console.log(newArr);
}
sort(arr);

//or this..

function bubbleSort(arr) {
    for (let i=0; i<arr.length; i++) {
    
    }

}