function promptName() {
  let value = prompt("Введите своё имя:");
  while (value == ""){
      value = prompt("Ты че? Имя вводи..");
  }
  document.getElementById("first_player_name").innerText = value;
};

var fight_button = document.getElementById("fight_button");
fight_button.addEventListener("click", fight, false);
document.addEventListener("DOMContentLoaded", promptName);

function fight() {
  var p1 = document.getElementById("first_player_value");
  var p2 = document.getElementById("second_player_value");
  fight_button.removeEventListener("click", fight);
  let rand_first = getRandomInt(10);
  let rand_second = getRandomInt(10);
  p1.innerHTML=rand_first;
  p2.innerHTML=rand_second;
  if (rand_first == rand_second) {
      
  } else if (rand_first > rand_second){
      setTimeout(addPlayerScore, 400);
  } else {
      setTimeout(addComputerScore, 400);
  }
  setTimeout(AddClick, 500);
  setTimeout(checkWinner, 500);
}d
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
function AddClick(){
  fight_button.addEventListener("click", fight, false);
}

function addPlayerScore(){
  var el = document.getElementById("player_score");
  el.innerHTML = parseInt(el.innerText)+1;
}

function addComputerScore(){
  var el = document.getElementById("computer_score");
  el.innerHTML = parseInt(el.innerText)+1;
}
function ComputerWin(){
  let p1=document.getElementById("hit");
  p1.style.display = "block";
}
function PlayerWin(){
  let p1=document.getElementById("lasthit");
  p1.style.display = "block";
}
function Win(){
  document.getElementById("hit").style.display= alert("YOU WON!"); 
}
function Lose(){
  document.getElementById("lasthit").style.display=alert("YOU LOSE!");
}
function checkWinner(){
  let p1=document.getElementById("player_score");
  let p2=document.getElementById("computer_score");
  let firstValue = parseInt(p1.innerText);
  let secondValue = parseInt(p2.innerText);
  if (firstValue==3){
      PlayerWin();
  } 
  else if (secondValue==3){
      ComputerWin();
  }
}
