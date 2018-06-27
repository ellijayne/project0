
//NOTE could do start button when page first loads and when you click start the stuar button goes away and the grid for the game animates into view.

let board = ["", "", "",
              "", "", "",
              "", "", ""];

let nextPlayerX = true;
let turnsPlayed = 0;



const xPlay = function(index) {
  board[index] = "x"; //here we are setting the value of board at position index to be X
};

const oPlay = function(index) {
  board[index] = "o";
};

$(document).ready(function() {

$("#resetBoard").on("click", function() {
  board = ["", "", "",
                "", "", "",
                "", "", ""];
  turnsPlayed = 0;
  $('.gridBox').text('');
  $("#winnerMessage").hide();
  $(".aniWinner").hide();
  $("resetBoard").hide();
  nextPlayerX = true;

  });

const playTurn = function(index) {
  // debugger; //type debugger whenever you want to see it all in the browers step by step....
  if (board[index].length !== 0 || checkWin("o") || checkWin('x')) {
     console.log("game over"); //here if the length is NOT 0 it will return and we can't put another x or o in there now.
    return
  };
  if (nextPlayerX === true ) {
    $(".nestedPlayer1").removeClass("playerInPlay");
    $(".nestedPlayer2").addClass("playerInPlay");
    xPlay(index);
    turnsPlayed = turnsPlayed + 1;
    nextPlayerX = false;
    // checkWin("x"); //calling this below so no longer need to here.
    if(turnsPlayed === 9 && (checkWin('x') !== true)) {
      $("#drawMessage").show();
      $(".nestedPlayer1").addClass("playerInPlay");
      $(".nestedPlayer2").addClass("playerInPlay");
    }
  } else {
    oPlay(index);
    $(".nestedPlayer2").removeClass("playerInPlay");
    $(".nestedPlayer1").addClass("playerInPlay");
    turnsPlayed = turnsPlayed + 1;
    nextPlayerX = true;

     // checkWin("o"); //calling this below so no longer need to here.
  }

  showMove();

  if (checkWin("o") || checkWin("x")) { //calling the function here so no longer need to call it above
    $('.nestedPlayer1, .nestedPlayer2').toggleClass('playerInPlay');
    // console.log('toggle');
  };

};

//render function to take everything in board and put them onto the screen. sending them through to the grid...............
const showMove = function() {
for (let i = 0; i < board.length; i++) { //looping through board ARRAY
  $("#" + i).text(board[i]); //updating board class with results stored in LOOP.
  }
};
showMove();

// $(document).ready(function() {
  $("#winnerMessage").hide();
  $(".aniWinner").hide();
  $("#drawMessage").hide();
  //making the squares clickable!
  $("#0").on("click", function() {
    console.log($("#0"));
    playTurn(0)
  });
  $("#1").on("click", function() {
    console.log($("#1"));
    playTurn(1);
  });
  $("#2").on("click", function() {
    console.log($("#2"));
    playTurn(2);
  });
  $("#3").on("click", function() {
    console.log($("#3"));
    playTurn(3);
  });
  $("#4").on("click", function() {
    console.log($("#4"));
    playTurn(4);
  });
  $("#5").on("click", function() {
    console.log($("#5"));
    playTurn(5);
  });
  $("#6").on("click", function() {
    console.log($("#6"));
    playTurn(6);
  });
  $("#7").on("click", function() {
    console.log($("#7"));
    playTurn(7);
  });
  $("#8").on("click", function() {
    console.log($("#8"));
    playTurn(8);
  });

}); //END of document function tag NOW.
  const checkWin = function(player) {

  if ((board[0] === player && board[1] === player  && board[2] === player) ||
  (board[3] === player && board[4] === player && board[5] === player) ||
  (board[6] === player && board[7] === player && board[8] === player) ||
  (board[0] ===player && board[4] === player && board[8] === player) ||
  (board[2] === player && board[4] === player && board[6] === player) ||
  (board[0] === player && board[3] === player && board[6] === player) ||
  (board[1] === player && board[4] === player && board[7] === player) ||
  (board[2] === player && board[4] === player && board[8] === player)) {
    $("#winnerMessage").show();
    $(".aniWinner").show();
    // const animateWin = function(winnerMessage){
    //   if ($("#winnerMessage").show()) {
    //     $(this).animate({font-size: "100px"}, 500);
    //   } //trying to animate winner message.

        console.log('we have a winner');

        return true;
  }

    };

//ADD NAME OF PLAYER ONE FUNCTION!!!
$(function() {
  let $form1 = $("#form1");
  let $player1form = $("#player1form");
  // let $nameInput = $("#input:text");

  $form1.show();
  $player1form.hide();

  $("#showForm1").on("click", function() {
    $form1.hide;
    $player1form.show();
  });
  $player1form.on('submit', function(e){
    e.preventDefault();
    let newText = $("input:text").val();
    $(".icon1").after('<p>' + newText + '<p>');
    $player1form.hide();
    $(".nestedPlayer2").removeClass("playerInPlay");
    $(".nestedPlayer1").addClass("playerInPlay");

  });

}); //end of add name player one function
//ADD NAME OF PLAYER TWO!!!!!!

$(function() {
  let $form2 = $("#form2");
  let $player2form = $("#player2form");
  let $nameInput = $("#input:text");

  $form2.show();
  $player2form.hide();

  $("#showForm2").on("click", function() {
    $form2.hide;
    $player2form.show();
  });
  $player2form.on('submit', function(e){
    e.preventDefault();
    let newText = $("#player2details").val();
    $(".icon2").after('<p>' + newText + '<p>');
    $player2form.hide();
  });

}); //end of add name player two function
