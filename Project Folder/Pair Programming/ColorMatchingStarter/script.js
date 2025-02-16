// set hard coded colors - 5 pairs means 10 total squares
const colors = [
  "#0000ff",
  "#ff0000",
  "#ff9900",
  "#33cc33",
  "#ff33cc",
  "#a200ff",
];

// Create array of 10 squares (two of each color)
const squares = [
  "#0000ff",
  "#ff0000",
  "#ff9900",
  "#33cc33",
  "#ff33cc",
  "#a200ff",
  "#0000ff",
  "#ff0000",
  "#ff9900",
  "#33cc33",
  "#ff33cc",
  "#a200ff",
];

function shuffleArray(array) {
  //Loop though and change the index of each square. If this is a challenge. Come back to this step.
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

// Initialize game state
let selectedSquares = [];
let matchedPairs = 0; //used to keep track if you have won.

// Create and setup squares
function initializeGame() {
  // find `game-container` call it container
  container = document.querySelector("#game-container");

  //call shuffleArray()
  shuffleArray(squares);

  //loop though all the squares NO changes necessary
  squares.forEach((color, index) => {
    //create a square
    const square = document.createElement("div");

    //add class name to new square
    square.className = "square";

    //set new squares background color
    square.style.backgroundColor = color;

    // Add click handler
    square.onclick = () => handleSquareClick(square, color);

    container.appendChild(square);
  });
}

function handleSquareClick(square, color) {
  if (
    selectedSquares.length < 2 &&
    square.style.backgroundColor !== "#808080"
  ) {
    //looks for less that 2 in lst and color not grey
    selectedSquares.push({ square, color }); // Needed to store both square element and color
    square.style.backgroundColor = "#808080"; // sets color to grey when selected
    if (selectedSquares.length === 2) {
      checkMatch(); // Call checkMatch when two are selected
    }
  }
}
function checkMatch() {
  let square1 = selectedSquares[0].square; // save what square 1 is to a variable
  let square2 = selectedSquares[1].square; // save what square 2 is to variable

  if (selectedSquares[0].color == selectedSquares[1].color) {
    //checks if they match
    matchedPairs = matchedPairs + 1; //increases match counter
    square1.style.backgroundColor = "#808080"; //changes color of square to grey permanently
    square2.style.backgroundColor = "#808080"; //changes color of square to grey permanently
    selectedSquares = []; //clears the selected list
    if (matchedPairs === 6) {
      alert("You won!"); /// alert if you win
    }
  }
}
// start the game
initializeGame();
