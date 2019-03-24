window.addEventListener('scroll', function() {
var el = document.querySelector('.ques_table > p');
if(screen.height > 800){
  if(window.scrollY >= 450) el.style = "opacity:1;right:-5%;transition:0.3s;";
  else el.style = "opacity:0;right:0%;transition:0.3s;";
}
else{
  el.style = "opacity:1;right:0;";
}

});


function Q2(){
  var Q2 = document.getElementsByClassName('question1')[0];
  Q2.style = "display:none;";
}
