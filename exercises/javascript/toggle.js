//select an element

var toggle = document.querySelector("#toggler");
var isBlack = false;


//manipulate element

toggle.addEventListener("click", function(){
  if(isBlack){
  	 document.body.style.background = "#fff";
  	 document.body.style.color = "#111";
  	 isBlack = false
  }else{
  	 document.body.style.background = "#111";
  	 document.body.style.color = "#fff";
  	 isBlack = true;
  }
})