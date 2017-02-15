$( document ).ready(function(){
  console.log('jQuery is ready / #=id/.=class');
  // #ff0000 //red
  // #00ff00 // green
  // #ffff00 // yellow
  // #0000ff // blue
  var colorName = ['Red', 'Green', 'Yellow', 'Blue', 'Black', 'Purple']
  console.log(colorName);
  for (var i = 0; i < colorName.length; i++) {
    var gameButton = $('<button></button>');
    $('body').append(gameButton);
    gameButton.data('idNumber', i);
    gameButton.css('background-color', colorName[i]);
    gameButton.css('height', '100px');
    gameButton.css('width', '100px');
    // gameButton.css('width', '100px', 'height')
    gameButton.text(".  .");

    // console.log($(this).data());
    // console.log('gameButton');
  } // FOR: for (var i = 0; i < 4; i++) {
  // // A function to generate a random number given minimum and maximum.
  function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min); }


    var any = randomNumber(0,colorName.length);
    $('h3').append('See if you can click the ' + colorName[any] + ' color!')
      $('button').on('click', function(){
      if ($(this).data().idNumber == any)
      {$('h2').text("Well done!  You picked wisely!");
      any = randomNumber(0,colorName.length);
      $('h3').text('Click the ' + colorName[any] + ' color!');
      var setTimeoutID = ($(this).fadeOut(100));
      var setTimeoutID = ($(this).fadeIn(100));
    } else { $('h2').text("Epic Failure!  Time for the Enchroma Color Blindness Test!");
  };
}); // FOR: $('button').on('click', function(){
// QUESTION: Whats the next smallest thing???

}); // FOR: $( document ).ready(function(){
// NOTE: jQuery ENDS here
//
//
// NOTE: Javascript starts here
console.log(new Date().getFullYear() + " Javascript sourced");
//
// Create'pick the block' game with HTML, CSS, and jQuery!
// Append four (or more!) divs on to the DOM with jQuery, each colored with a different color.
//
//
// Each div needs to know which color it is.
//
// Prompt the player to pick one of the color blocks you created at random.
// prompt('Please pick the color :' + function);
// function randomNumber(min, max){
//     return Math.floor(Math.random() * (1 + max - min) + min); }
// // A function to generate a random number given minimum and maximum.
//
// If the player clicks on the correct color block, give them a success message.
// If they pick the wrong color, let them know.
//
// alert("Well done!  You picked the correct color!"),
// } else {
//   alert("Epic Failure!  Time for the Enchroma Color Blindness Test!");
// confirm("Excellent work, please pick another color");
//
// Here is a visual example of the working game.
// <SEE PICTURE>
// When the player picks the correct color block, prompt the player to pick another block randomly and let them keep playing.
