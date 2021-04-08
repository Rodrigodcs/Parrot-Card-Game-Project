//console.log(Math.floor(Math.random()*10)); // random inteiro de 0 a 9

function numberOfCards(){
  while((number<4 || number>14) || number%2!=0){
    number=parseInt(prompt("Com quantas cartas quer jogar? (4 à 14)"));
  }
}

function createArray(size){
  remainingPairs = size/2;
  for(let i=0;i<size/2;i++){
    cardsArray.push(i);
    cardsArray.push(i);
  }
}

function shuffleArray(array){
  for(let i=0;i<array.length;i++){
    let j = Math.floor(Math.random()*array.length);
    let temp = array[i];
    array[i]=array[j];
    array[j]=temp;
  }
  shuffledArray=array;
}

function createTable(array){
  let table= document.querySelector(".table");
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
    //card.onclick=null;
  }
  if(flag){
    if(previous.innerHTML==card.innerHTML){
      previous.classList.remove("flipped")
      card.classList.remove("flipped")
      previous.classList.add("done");
      card.classList.add("done");
      //card.onclick=null;
      //previous.onclick=null;
      remainingPairs--;
      if(remainingPairs==0){
        alert("Congrats")
      }
    }else{
      //sleep(2000);
      previous.classList.remove("flipped")
      card.classList.remove("flipped")
      //card.onclick= "flip(this)"
      //card.setAttribute("onclick",flip(this));
    }
    flag=false;
  }
}
let previous = 0;
let flag = false;
let number = 10;
let remainingPairs=0;
let cardsArray = [];
let shuffledArray = [];
numberOfCards();
createArray(number);
shuffleArray(cardsArray);
console.log(shuffledArray);
createTable(shuffledArray);