// Given an array of 0s and 1 s , count the number of
//  "islands of 1 s " (e. g . groups of connect i ng 1 s ).
// Example: [0, 1 , 1 , 0, 1 , 0, 1 , 1 , 1 ] - > 3

const ocean1 = [1, 0, 1] // 2
const ocean2 = [0, 0, 1, 0, 1, 1, 0, 0, 1, 0] // 3
const ocean3 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] // 1
const ocean4 = [1,0,1,1,0,1,0,1,0,1,0,0,1,1,1,1,0,1,1,0,1,0,1,0] // 9

let count = 0
for (let i = 0; i < row.length; i++){
    //look at the current number compare to the next
    //is a 1? Add one to your count, if not  don't.
    if i 

}
    
//Roberts 
function countIslands(ocean) {
    let islandCount = 0
    for (let i = 0;i < ocean.length, i++){
        if (ocean[i] === 1 && ocean[i+1] !== 1) {
            islandCount++;
        }
    }
    return islandCount;
};

console.log(countIslands(ocean1))