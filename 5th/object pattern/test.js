var app = {

 // var el =22, in cloud Object, you can't put var like this. find ways to put variables
  propertyTest : 'Jiah Kwon',
  config:{
    settingA : true ,
    language : 'en',
    colorSchemeA : 'blue',
    colorSchemeB : 'red'

  },
  saySomthing: function(){
    console.log('WHere in the world is ' + app.propertyTest + ' today ?');
  },


  // saySomthing() // if you just call saysomething it's just function method and not workifn.
  //object is very strict so it will crash

  //what does init do?
  //init mehod
  //will triggrt saySomthing function

  // init: function() {
  //   app.config.settingA = false;
  //   app.saySomthing();
  //   console.log(app.config.settingA);
  //   console.log(this); //what this stands for in here?-------> whole cloud object
  // }
  init: function() {
    this.config.settingA = false;
    this.saySomthing();
    console.log(this.config.settingA);
    console.log(this); //what this stands for in here?-------> whole cloud object
  },


  //change colorSchemeA to Green
  argumentMethod: function(updater) {
    app.config.colorSchemeA = updater;
    console.log(app);
  }


};


// console.log(app);
// console.log(app.propertyTest);
// console.log(app.config.colorSchemeA);
// console.log(app.saySomthing()); //if you want to call saysomething log(saysoething()) won't work. because it's inside of app
// console.log(app.init());
app.argumentMethod('green')
