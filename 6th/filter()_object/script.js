
//filtering data with js

var arr = [
    {"name":"rabbits", "count": 11},
    {"name":"cats", "count": 2},
    {"name":"dogs", "count": 5},
    {"name":"rabbits", "count": 35},
    {"name":"parrots", "count": 3},
    {"name":"rabbits", "count": 2},
    {"name":"rabbits", "count": 4}
];

//
// function scanArrayPush() {
//   var newArr =[];
//   for (var i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//     if (arr[i].name == "rabbits") {
//       newArr.push(arr[i]);
//     }
//   }
//   delere newArr[0] //array length stays same. so be careful use pop(),
//   console.log(newArr);
// }//function ENDS
//
// scanArrayPush();



//filter method. do same thing as for loop
var newArr = arr.filter(function(item){
  return item.name === "dogs"
})

console.log(newArr);
