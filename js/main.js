
//NOTE could do start button when page first loads and when you click start the stuar button goes away and the grid for the game animates into view.

const board = ["", "", "",
              "", "", "",
              "", "", ""];

let nextPlayerX = true;
let turnsPlayed = 0;



const xPlay = function(index) {
  board[index] = "x"; //here we are setting the value of board at position index to be X
  // $(".nestedPlayer1").removeClass("playerInPlay");
  // $(".nestedPlayer2").addClass("playerInPlay");
};

const oPlay = function(index) {
  board[index] = "o";
  // $(".nestedPlayer2").removeClass("playerInPlay");
  // $(".nestedPlayer1").addClass("playerInPlay");
};

// $(document).ready(function() {
//need something that flpis back and forward between player X and player O.....
const playTurn = function(index) {
  if (board[index].length !== 0) { //here if the length is NOT 0 it will return and we can't put another x or o in there now.
    return
  }
  if (nextPlayerX === true ) {
    $(".nestedPlayer1").removeClass("playerInPlay");
    $(".nestedPlayer2").addClass("playerInPlay");
    $(".icon1").removeAttr("id", "oneUser");
    $(".icon2").attr("id", "twoUsers");
    xPlay(index);
    turnsPlayed = turnsPlayed + 1;
    nextPlayerX = false;
    checkWin("x");
    if(turnsPlayed === 9 && (checkWin('x') !== true)) {
      console.log("It's a draw!")
    }
  } else {
    oPlay(index);
    $(".nestedPlayer2").removeClass("playerInPlay");
    $(".nestedPlayer1").addClass("playerInPlay");
    $(".icon2").removeAttr("id", "twoUsers");
    $(".icon1").attr("id", "oneUser");
    turnsPlayed = turnsPlayed + 1;
    nextPlayerX = true;
    checkWin("o");

    //check to see if box empty if box empty can go.....
  };
  showMove();
};

//render function to take everything in board and put them onto the screen. sending them through to the grid...............
const showMove = function() {
for (let i = 0; i < board.length; i++) { //looping through board ARRAY
  $("#" + i).text(board[i]); //updating board class with results stored in LOOP.
}
};
showMove();

$(document).ready(function() {
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

  //check for win - eight combos to check - if else to check indexes against what is current in them to check for the win. starts with checking the first row with the check for win function... is 1, 2, 3 the same?
  //saying if all spaces in row 1 (or 0, 1, 2 indexes) have a value of 1 check if they're all x or o.
  // for (let i = 0; i < board.length; i++) {
  //   if (board[i] !== 0 &&
  // }
  //  for (let i = 0; i < board.length; i++) {

  }); //END of DOCU tag NOW.
  const checkWin = function(player) {
  if ((board[0] === player && board[1] === player  && board[2] === player) ||
  (board[3] === player && board[4] === player && board[5] === player) ||
  (board[6] === player && board[7] === player && board[8] === player) ||
  (board[0] ===player && board[4] === player && board[8] === player) ||
  (board[2] === player && board[4] === player && board[6] === player) ||
  (board[0] === player && board[3] === player && board[6] === player) ||
  (board[1] === player && board[4] === player && board[7] === player) ||
  (board[2] === player && board[4] === player && board[8] === player))
  $("#winnerMessage").css("opacity", "1");
      console.log('we have a winner');

      return true;
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


//gets value of input box (class = player2Details) using.val();
//updates .text() or .html() with user input and replaces() the input box with just the input??? possible?


      // alert(`${board[0] wins!}`); //saying board 0 here because we assume 0, 1 and 2 are all the same now.
