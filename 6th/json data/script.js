var testAray = [1,2,3,4,5,6,7,8,9];

for (var i = 0; i < testAray.length; i++) {
  console.log(testAray[i]);
}

//works same as for loop
testAray.forEach(function (item , index) {
  console.log(item + 'a');
  console.log( index + 'b'); //this refers index of testAray. easy way to check index of array
})
