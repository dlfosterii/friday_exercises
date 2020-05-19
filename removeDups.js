function removeDuplicates(arrayOfItems){
    let uniqueArray = [];
    arrayOfItems.forEach(item => {
        if (!uniqueArray.includes(item)) {
            uniqueArray.push(item)
        }
    })
    return uniqueArray;
}


console.log(removeDuplicates([1,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9]))
