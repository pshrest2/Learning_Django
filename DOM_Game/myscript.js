//Restart game button
var restart = document.getElementById("b");

//Grabs all the squares
var squares = document.querySelectorAll("td");

//Clear all the squares
let clearBoard = () => {
  for (let i = 0; i < squares.length; i++) {
    squares[i].textContent = "";
  }
};

restart.addEventListener("click", clearBoard);

//Check the square marker
function changeMarker() {
  console.log(this);
  if (this.textContent === "") {
    this.textContent = "X";
  } else if (this.textContent === "X") {
    this.textContent = "O";
  } else {
    this.textContent = "";
  }
}

//For loop to add event listeners to all the squares
for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener("click", changeMarker);
}
