
 function square(x){

    var squared = x * x;
    var minusThing = x - x;
    // return squared;

    //return more than two things
    return {
      a:squared,
      b:minusThing
    };
  }

//This contains te return value object from square function
//that controls ul
 var gimme = square(5);

console.log(gimme);
console.log(gimme.a);
