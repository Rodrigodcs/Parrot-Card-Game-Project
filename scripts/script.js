function numberOfCards(){
  while((number<4 || number>14) || number%2!=0){
    number=parseInt(prompt("Com quantas cartas quer jogar? (4 à 14)"));
  }
}

function createArray(size){
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
    table.innerHTML += `<li><img src="gifs/${array[i]}.gif"></li>`
  }
}

//console.log(Math.floor(Math.random()*10)); // random inteiro de 0 a 9

let number = 0;
let cardsArray = [];
let shuffledArray = [];
numberOfCards();
createArray(number);
shuffleArray(cardsArray);
console.log(shuffledArray);
createTable(shuffledArray);