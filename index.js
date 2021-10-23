var ranNum1 = Math.floor(Math.random() * 6) + 1;
document.querySelectorAll("img")[0]. setAttribute("src", "images/dice" +  ranNum1 + ".png") ;

var ranNum2 = Math.floor(Math.random() * 6) + 1;
document.querySelectorAll("img")[1]. setAttribute("src", "images/dice" +  ranNum2 + ".png") ;

if (ranNum1 > ranNum2){
  document.querySelector("h1").innerHTML = "⭐player 1  wins" ;
} 
else if (ranNum2 > ranNum1){
  document.querySelector("h1").innerHTML = "player 2 wins⭐" ;
} 
else {
  document.querySelector("h1").innerHTML = "DRAW";
} 
document.getElementById('rollAgain' ).addEventListener('click', function(){
  location.reload();
  return false;
})