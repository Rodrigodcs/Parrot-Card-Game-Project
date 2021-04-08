//console.log(Math.floor(Math.random()*10)); // random inteiro de 0 a 9





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
  table.innerHTML = `oi`;
  for(let i=0;i<array.length;i++){
    table.innerHTML += `
    <li class="card-container">
      <div class="card" onclick="flip(this)">
        <span>${array[i]}</span>
        <div class="card-front"><img src="gifs/${array[i]}.gif"></div>
        <div class="card-back"><img src="images/front.png" alt="parrot"></div>
      </div>
    </li>`;
  }
}

function flip(card){
  console.log("a")
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
        alert("Completed in "+moves+" moves!!");
        if(prompt("restart?")=="sim"){
          //reset();
          numberOfCards();
        }
      }
    }else{
      previous.classList.remove("flipped")
      card.classList.remove("flipped")
      card.classList.remove("block")
      previous.classList.remove("block")
    }
    flag=false;
  }
}
function reset(){
  
}

let moves = 0;
let previous = 0;
let flag = false;
let number = 6;
let remainingPairs=0;
let cardsArray = [];
let shuffledArray = [];
numberOfCards();

//createArray(number);
//shuffleArray(cardsArray);
//console.log(shuffledArray);
//createTable(shuffledArray);