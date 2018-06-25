
//NOTE could do start button when page first loads and when you click start the stuar button goes away and the grid for the game animates into view.

const board = ["", "", "",
              "", "", "",
              "", "", ""];

let nextPlayerX = true;


const xPlay = function(index) {
  board[index] = "x"; //here we are setting the value of board at position index to be X
};

const oPlay = function(index) {
  board[index] = "o";
};

// $(document).ready(function() {
//need something that flpis back and forward between player X and player O.....
const playTurn = function(index) {
  if (board[index].length !== 0) { //here if the length is NOT 0 it will return and we can't put another x or o in there now.
    return
  }
  if (nextPlayerX === true ) {
    xPlay(index);
    nextPlayerX = false;
  } else{
    oPlay(index);
    nextPlayerX = true;

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
  // let checkWin = function(row) {
  //   //saying if all spaces in row 1 (or 0, 1, 2 indexes) have a value of 1 check if they're all x or o.
  //   for (let i = 0; i < board.length; i++) {
  //     if (board[i] !== 0 &&
  //   }
  //   ////NOTE TEST THE  BELOW IT NIGHT WORK!
  //   if(board[0] === 'x' && board[1] === 'x' && board[2] === 'x') {
  //       console.log('we have a winner')
  //   };
  //   if (board[0],[1],[2] !== 0 && board[0],[1],[2] === "x") {
  //
  //     // alert(`${board[0] wins!}`); //saying board 0 here because we assume 0, 1 and 2 are all the same now.
  //   };
  //   checkWin(row);
  // };

}); //END of DOCU tag NOW.
