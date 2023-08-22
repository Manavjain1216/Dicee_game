var randomNumber1=Math.floor(Math.random()*6+1);
var ndice=randomNumber1+".png";
var newsrc="Dicee Challenge - Starting Files/images/dice6.png"+ndice;
var changing=document.querySelectorAll("img")[0];
changing.setAttribute("src",newsrc);

