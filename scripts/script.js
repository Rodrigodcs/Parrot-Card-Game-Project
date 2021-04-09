let sec=0;
let min=0;
let wait = false;
let moves = 0;
let previous = 0;
let current = 0;
let waitingSecondCard = false;
let numberOfCards = 0;
let remainingPairs = 0;
let ended= false;

start();
setInterval(clock,1000)

function start(){
  while((numberOfCards<4 || numberOfCards>14) || numberOfCards%2!=0){
    numberOfCards=parseInt(prompt("Com quantas cartas quer jogar? (4 à 14)"));
  }
  createArray(numberOfCards);
}

function createArray(size){
  remainingPairs = size/2;
  const cardsArray = []
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
  const shuffledArray=array;
  createTable(shuffledArray);
}

function createTable(array){
  let table= document.querySelector(".table");
  table.classList.remove("size-1","size-2","size-3");
  if(numberOfCards==6 ||numberOfCards==12){
    table.classList.add("size-1");
  }
  if(numberOfCards==10){
    table.classList.add("size-2");
  }
  if(numberOfCards==14){
    table.classList.add("size-3");
  }
  for(let i=0;i<array.length;i++){
    table.innerHTML += `
    <li class="card-container">
      <div class="card" onclick="flip(this)">
        <div class="card-front"><img src="gifs/${array[i]}.gif" alt="crazy parrot gif"></div>
        <div class="card-back"><img src="images/front.png" alt="parrot image"></div>
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
    waitingSecondCard=true;
  }
  if(card.classList.contains("flipped")){
    card.classList.remove("flipped");
  }else{
    card.classList.add("flipped","block");
    moves++;
  }
  if(waitingSecondCard){
    if(previous.innerHTML==card.innerHTML){
      previous.classList.remove("flipped")
      card.classList.remove("flipped")
      previous.classList.add("done","block");
      card.classList.add("done","block");
      remainingPairs--;
      if(remainingPairs==0){
        wait=true;
        ended=true;
        setTimeout(finishAlert,200);
      }
    }else{
      wait = true;
      setTimeout(waiting,1000);
    }
    waitingSecondCard=false;
  }
}

function reset(){
  document.querySelector(".table").innerHTML=``;
  wait=false;
  ended=false;
  moves = 0;
  previous = 0;
  current = 0;
  waitingSecondCard = false;
  numberOfCards = 0;
  sec=0;
  min=0;
  start();
}

function finishAlert(){
  const time = min * 60 + sec;
  alert("completou com "+moves+" jogadas em "+time+" segundos!");
  if(prompt("Quer jogar novamente? (Digite 'sim' para continuar)")=="sim"){
    reset();
  }
}

function waiting(){
  wait=false;
  previous.classList.remove("flipped","block")
  current.classList.remove("flipped","block")
}

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