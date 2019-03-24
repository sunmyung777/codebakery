
window.addEventListener('scroll', function() {
var el = document.querySelector('#underline1');
var card1 = document.querySelector('.card1');
var card2 = document.querySelector('.card2');
var card3 = document.querySelector('.card3');

if(screen.width > 1400){
  if(window.scrollY >= 1800) el.style = "width:18%;transition:0.7s;";
  else el.style = "width:0%;";
}
else if(screen.width > 800){
  el.style = "width:18%; top:63%;";
}
else if(screen.width > 629){
  el.style = "width:18%;top:60%;";
}
else if(screen.width > 572){
  el.style = "width:18%;top:58%;";
}
else if(screen.width > 400){
  el.style = "width:18%;top:52%;";
}
else{
  el.style = "width:18%;top:48%;";
}
});

console.log(screen.width);
console.log(screen.height);

function close_warning(){
  var bar1 = document.getElementsByClassName("W_bar1")[0].style = "display:none;";
  var bar2 = document.getElementsByClassName("W_bar2")[0].style = "display:none;";
  var box= document.getElementsByClassName("warning")[0].style = "display:none;";
  var button_ = document.getElementsByClassName("close_warning")[0].style = "display:none;";
}









/*
window.onscroll = function(){
  maincontents_response2()
  maincontents_response3()
};
var pic_switch = 0,pic_switch2 = 0,pic_switch3 = 0;



function maincontents_response2(){
  if(document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000){
    document.getElementsByClassName("card1")[0].style="opacity:100%;";
  }
}


function maincontents_response3(){
  if(document.body.scrollTop > 1900 || document.documentElement.scrollTop > 1900){
    document.getElementById("underLine1").style = "width:18%;transition:0.7s;";
  }
}
*/

// function maincontents_response(){
//   if(document.body.scrollTop > 900 || document.documentElement.scrollTop > 900){
//     if(pic_switch2 == 0){
//     document.getElementsByClassName("intro_details2")[0].style = "width:100%; transition:1s;";
//     }
//     pic_switch2 = 1;
//   }
//
//   else {
//     if(pic_switch2 == 0){
//       document.getElementsByClassName("intro_details2")[0].style = "width:0%; transition:0.7s;";
//     }
//   }
// }
//
