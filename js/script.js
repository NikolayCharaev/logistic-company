





let arr = [1,1,2,2,3,3,4,4,5,5]

function func(arr){
    return Array.from( new Set (arr))
}
console.log(func(arr))