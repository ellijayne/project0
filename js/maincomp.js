//TWO PLAYER GAME

let board = ["", "", "",
              "", "", "",
              "", "", ""];

let nextPlayerX = true;
let turnsPlayed = 0;
let p1score = 0;
let p2score = 0;



const xPlay = function(index) {
  board[index] = "x"; //here we are setting the value of board at position index to be X
};

const oPlay = function(index) {
  board[index] = "o";
};

$(document).ready(function() {
  $(".score1").html(p1score);
  $(".score2").html(p2score);

//RESET BOARD FUNCTION
$(".resetty").on("click", function() {
  console.log('resetting board');
  board = ["", "", "",
                "", "", "",
                "", "", ""];
  turnsPlayed = 0;
  $('.gridBox').text('');

  $(".aniWinner").hide();
  $(".aniDraw").hide()
  $("#resetBoard").hide();
  $(".nestedPlayer1").removeClass("playerInPlay");
  $(".nestedPlayer2").removeClass("playerInPlay");
  nextPlayerX = true;

  });
//here if the length is NOT 0 it will return and we can't put another x or o in there now.
const playTurn = function(index) {
  if (board[index].length !== 0 || checkWin("o") || checkWin('x')) {
     console.log("game over");
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
      $(".aniDraw").slideDown(700);
      $("#resetBoard").show();

      $(".nestedPlayer1").addClass("playerInPlay");
      $(".nestedPlayer2").addClass("playerInPlay");

    }

    //MATH RANDOM COMP PLAY!
    // if (nextPlayerX === false && $(board[index]).val() === "") {
      oPlay(Math.floor(Math.random() * 9));

    $(".nestedPlayer2").removeClass("playerInPlay");
    $(".nestedPlayer1").addClass("playerInPlay");
    turnsPlayed = turnsPlayed + 1;
    nextPlayerX = true;

}
  showMove();

  if (checkWin("x")) {
    $(".score1").html(p1score = p1score + 1);
  } else if (checkWin("o")){
    $(".score2").html(p2score = p2score + 1);
  } else {
    return;
  }

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
  // $("#winnerMessage").hide();
  $(".aniWinner").hide();
  $(".aniDraw").hide();
  //making the squares clickable!
  $("#0").on("click", function() {
    console.log($("#0"));
    playTurn(0);
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
  (board[2] === player && board[5] === player && board[8] === player)) {
    // $("#winnerMessage").show();
    $(".aniWinner").slideDown(700);
    $("#resetBoard").show();



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
    $form1.hide();
    $player1form.show();
    $("#player1form input:text").focus(); //this puts the curser/focus on the box as soon as you click player button
  });
  $player1form.on('submit', function(e){
    e.preventDefault();
    let newText = $("input:text").val();
    $(".icon1").after('<p>' + newText + '<p>');
    $player1form.hide();
    $(".icon2").after("<p>TTToemenator<p>")
    // $("#showForm1").hide();
    $(".nestedPlayer2").removeClass("playerInPlay");
    $(".nestedPlayer1").addClass("playerInPlay");

  });

}); //end of add name player one function
