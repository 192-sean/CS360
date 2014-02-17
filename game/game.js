// Demo code for the Archaeology game
//
// Loaded by game.html
// Uses GameBoard object defined in board.js
//

// Warning! The function tryDig and the variable board are global variables!
//
//------------------------------------------------------------------------------
//               Added
// Clicking cells for input
// Hover effect that allows player to see which cell he is going to dig.
// Board images
// Summary of players performance

$(function () {
  
  tryDig = function(targetCell)
  {
    var targetObj = board.dig(targetCell);
    
    
    if (targetObj) {

       //alert('Success finding the ' + targetObj.kills + ' its size' + targetObj.size + ' its successes ' + targetObj.successes);
      // $("#"+targetCell).html('=');
      // $("#"+targetCell).css('color', 'red');
      
      if(targetObj.successes == targetObj.size) {
        if(board.kills == 4) {
        //alert("here");
        var score = (board.hits + 1) / (board.count + 1);
        var level = 0;
        if (score < .25) {
          level = 1;
        }
        else if (score < .45) {
          level = 2;
        }
        else {
          level = 3;
        }
        $('#endGame').html("You found all of the ruins! Your end score percentage is: " + score.toFixed(2)
        + "  Your skill level out of 3 is a: " + level);
        }
        board.kills++;
        $('#found').html(board.kills);
        $('#result').html("You found all of the " + targetObj.name + ".");
      }
      
    
      board.hits++;
      board.count++;
      $('#hHits').html(board.hits);
      $('#totalDigs').html(board.count);

      if (targetObj.name == "Palace") {
        $("#"+targetCell).children('img').attr("src","palace.png");  
      }
      if (targetObj.name == "Temple") {
        $("#"+targetCell).children('img').attr("src","temple.png");  
      }
      if (targetObj.name == "Forum") {
        $("#"+targetCell).children('img').attr("src","forum.png");  
      }
      if (targetObj.name == "House") {
        $("#"+targetCell).children('img').attr("src","house.png");  
      }
      if (targetObj.name == "Hut") {
        $("#"+targetCell).children('img').attr("src","hut.png");  
      }
    }
    else {
      $("#"+targetCell).children('img').attr("src","empty.png");
      board.count++;
      $('#totalDigs').html(board.count);
      $
    }


  }
    
    
  board = new GameBoard();
  board.setBoard();  

  $(".square").click(function(){
    var celltext=$(this).text();
    var back = $(this).attr('clicked');
    var dug = $(this).attr('dug');
    if (back == 'yes' || dug == 'yes') { }
    else {
      tryDig(this.id);
      $(this).attr("clicked", "yes");
    }
  }); 


  $('img').closest('td').hover(
    function () {
    var back = $(this).attr('clicked');
    var dug = $(this).attr('dug');
    if (back == 'yes' || dug == 'yes') { }
    else{
    $(this).children('img').attr("src","digging.png");
    }
  },  function () {
    var back = $(this).attr('clicked');
    var dug = $(this).attr('dug');
    if (back == 'yes' || dug == 'yes') {
    $(this).children('img').attr("src",this.src);
  }
  else {
    $(this).children('img').attr("src", "dirt.png")  }
  }
  );


   
  //tryDig("b3");
});
