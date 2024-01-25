//DOM ELEMENTS
//let containerAccess=document.getElementsByClassName("container");
let domAccess=document.querySelector(".input");
let useAgain= document.querySelector("#goagain");


//function on click 
function magicTrick() {
    
    const randomNumber=Math.floor(Math.random()*11);
    let eightBall= randomNumber; 
   // let showNumber=document.getElementById("newnumber")
   const showNumber=document.createElement('h3');
   // const textInput=document.createTextNode( newuser.value + " ");
    const p = document.createElement("p");
    domAccess.appendChild(p);
    switch (eightBall){
      case 0:
      p.innerHTML='Flat white';
      break;
      case 1:
      p.innerHTML='Latte';
      break;
      case 2:
      p.innerHTML='Cappuccino';
      break;
      case 3:
      p.innerHTML='espresso';
      break;
      case 4:
      p.innerHTML='matcha latte';
      break;
      case 5:
      p.innerHTML='long black';
      case 6:
      p.innerHTML='iced latte';
      break;
      case 7:
      p.innerHTML='iced long black';
      break;
      case 8:
      p.innerHTML='hot chocolate';
      break;
      case 9:
      p.innerHTML='iced chochocolate';
      break;
      case 10:
      p.innerHTML='iced mocha';
      break;
      case 11:
      p.innerHTML='mocha';
    }
    useAgain.addEventListener('click', function (){
      p.innerHTML= " ";
      domAccess.removeChild(p);
    })
  }