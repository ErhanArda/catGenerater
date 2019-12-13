/* 
 function reset(){
    document.getElementById('result').remove();

 }*/

 function generateCat(){
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src = 'http://thecatapi.com/api/images/get?format=src&type=gif&size=small';
    div.appendChild(image);
 }

 var generate = false;

 document.getElementById("catGenerator").onclick = function(){
    if(generate == true){
       location.reload();
    }
    else{
       generate =  true;
       document.getElementById("catGenerator").innerHTML = "Reset Generate";
       generateCat();
    }

 }

