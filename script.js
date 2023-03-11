var randomnumber1=Math.floor(Math.random()*6)+1;
var imgsrc1="dice"+randomnumber1+".png" ;
var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src",imgsrc1);

var randomnumber2=Math.floor(Math.random()*6)+1 ;
var imgsrc2="dice"+randomnumber2+".png";
var img2=document.querySelectorAll("img")[1];
img2.setAttribute("src",imgsrc2);

if(randomnumber1 > randomnumber2)
{
    document.querySelector("h1").innerHTML=" 🚩 PLAYER 1 WON"
}

else if(randomnumber2 > randomnumber1)
{
    document.querySelector("h1").innerHTML=" PLAYER 2 WON 🚩 "
}
else
{
    document.querySelector("h1").innerHTML=" 🚩 D R A W  🚩"
}