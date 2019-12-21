/* 
 function reset(){
    document.getElementById('result').remove();

 }*/

 function generateCat(){
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    
    image.src = 'http://thecatapi.com/api/images/get?format=src&type=gif&random='+Math.floor(Math.random() * 999999999) + 1;
    
    document.getElementById("catGenerator").disabled = true; 
    document.getElementById("catGenerator").classList.add("btn-danger");
    image.style.width = "500px";
    image.style.height = "333px";
    if(screen.width<=768){
      image.style.width = "320";
      image.style.height = "180px";
    }
    image.onload = function() {
      div.innerHTML = image.outerHTML;
      document.getElementById("catGenerator").disabled = false;
      document.getElementById("catGenerator").classList.remove("btn-danger");

      console.log("Image 1 ready to append");
      
  };
 }

 window.addEventListener('load', 
 function() { 
   generateCat();
 }, false);

 document.getElementById("catGenerator").onclick = function(){
    
       generateCat();
    

 }

