//Sean Luke 
// CS360
//Calculates the winning percentage of two chess players
//based on their elo rating. 

var calcFunction = function()
{
    var yourRating, opponentRating, confidence, conFactor, oddsMessage, totalMessage, winPercent;
    yourRating = document.getElementById("yourRating").value;
    yourRating = Number(yourRating);
    opponentRating = document.getElementById("opponentRating").value;
    opponentRating = Number(opponentRating);
    confidence = document.getElementById("confidence").value;
    if (confidence === "low") {
      conFactor = -5;
    }
    else if (confidence === "lucky") {
      conFactor = 5;
    }
    else {
      conFactor = 10;
    }

    winPercent = (1 / (1 + Math.pow(10, ((opponentRating - yourRating) / 400)))) * 100;
    oddsMessage = "Your odds are " + winPercent.toFixed(2) +"%";
    totalMessage = "With your confidence level " + (winPercent + conFactor).toFixed(2) +"%";

    document.getElementById("result").innerHTML = 
      oddsMessage + "<br />" + totalMessage;
}

  var resetFunction = function()
  {
      document.getElementById("yourRating").value = "";
      document.getElementById("opponentRating").value = "";
      document.getElementById("result").innerHTML = "";
  }

  
// assign anonymous function to click event when the page is ready
window.onload = function() {
    document.getElementById("calc-button").onclick = calcFunction;
    document.getElementById("resetButton").onclick = resetFunction;
}
  
