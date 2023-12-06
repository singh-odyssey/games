
function reloadpage(){
// for img 1
var randomNumber1=Math.round(Math.random()*5)+1;
var randomimg1=document.querySelector(".img1");
randomimg1.setAttribute("src","./images"+"/dice"+randomNumber1+".png");

// for img 2
var randomNumber2=Math.round(Math.random()*5)+1;
var randomimg2=document.querySelector(".img2");
randomimg2.setAttribute("src","./images"+"/dice"+randomNumber2+".png");

// winning

var winningheading=document.querySelector("h1");

if(randomNumber1>randomNumber2){
   
    winningheading.textContent="Player 1 wins 🚩";
}else if (randomNumber1===randomNumber2){
  winningheading.textContent="Draw!";
}
else {
    winningheading.textContent="Player 2 wins 🚩";
}
}
reloadpage();