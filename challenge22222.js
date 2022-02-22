//--------------------------------------------------------------------1
let coins = [1, 5, 1, 1, 1, 10, 15, 20, 100]
coins.sort((a, b) => a - b)
let currentValue = 1
let change = coins.map(function (coin, index, array) {
  if (coin > currentValue + 1) 
    return currentValue + 1
  currentValue += coin
  return currentValue + 1
})
console.log(currentValue, "suma")

//--------------------------------------------------------------------2

let firstArray = [1, 2, 3, 5, 6, 8, 9]

var responseArray = firstArray.map(function (elem, index, array) {
    return elem*elem 
});
console.log(responseArray)

//---------------------------------------------------------------------
