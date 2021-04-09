let sec=0;
let min=0;
let wait=false;
let moves = 0;
let previous = 0;
let current = 0;
let flag = false;
let number = 0;
let remainingPairs=0;
let cardsArray = [];
let shuffledArray = [];
let ended= false;

numberOfCards();

function clock(){
  if(ended===false){
    sec++;
  }
  if(sec==60){
    min++;
    sec=0;
  }
  if(min<10){
    document.querySelector(".minutes").innerHTML=`0${min}`;
  }else{
    document.querySelector(".minutes").innerHTML=min;
  }
  if(sec<10){
    document.querySelector(".seconds").innerHTML=`0${sec}`;
  }else{
    document.querySelector(".seconds").innerHTML=sec;
  }
}
setInterval(clock,1000)

function numberOfCards(){
  while((number<4 || number>14) || number%2!=0){
    number=parseInt(prompt("Com quantas cartas quer jogar? (4 à 14)"));
  }
  createArray(number);
}

function createArray(size){
  remainingPairs = size/2;
  for(let i=0;i<size/2;i++){
    cardsArray.push(i);
    cardsArray.push(i);
  }
  shuffleArray(cardsArray);
}

function shuffleArray(array){
  for(let i=0;i<array.length;i++){
    let j = Math.floor(Math.random()*array.length);
    let temp = array[i];
    array[i]=array[j];
    array[j]=temp;
  }
  shuffledArray=array;
  createTable(shuffledArray);
}

function createTable(array){
  let table= document.querySelector(".table");
  for(let i=0;i<array.length;i++){
    table.innerHTML += `
    <li class="card-container">
      <div class="card" onclick="flip(this)">
        <div class="card-front"><img src="gifs/${array[i]}.gif"></div>
        <div class="card-back"><img src="images/front.png" alt="parrot"></div>
      </div>
    </li>`;
  }
}

function flip(card){
  if(wait){
    return;
  }
  current = card;
  if(document.querySelector(".flipped") !== null){
    previous = document.querySelector(".flipped");
    flag=true;
  }
  if(card.classList.contains("flipped")){
    card.classList.remove("flipped");
  }else{
    card.classList.add("flipped");
    card.classList.add("block");
    moves++;
  }
  if(flag){
    if(previous.innerHTML==card.innerHTML){
      previous.classList.remove("flipped")
      card.classList.remove("flipped")
      previous.classList.add("done");
      previous.classList.add("block");
      card.classList.add("done");
      card.classList.add("block");
      remainingPairs--;

      if(remainingPairs==0){
        clearInterval(clock)
        wait=true;
        ended=true;
        setTimeout(finish,200);
      }
    }else{
      wait=true;
      setTimeout(waiting,1000);
    }
    flag=false;
  }
}
function reset(){
  document.querySelector(".table").innerHTML=``;
  wait=false;
  ended=false;
  moves = 0;
  previous = 0;
  current = 0;
  flag = false;
  number = 0;
  remainingPairs=0;
  cardsArray = [];
  shuffledArray = [];
  sec=0;
  min=0;
  numberOfCards();
}
function finish(){
  alert("Completed with "+moves+" moves in "+min+" minutes and "+sec+" seconds!");
  if(prompt("restart?")=="sim"){
    reset();
  }
}
function waiting(){
  wait=false;
  previous.classList.remove("flipped")
  current.classList.remove("flipped")
  current.classList.remove("block")
  previous.classList.remove("block")
}
