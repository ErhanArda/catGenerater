/* 
 function reset(){
    document.getElementById('result').remove();

 }*/

function generateCat() {
  var image = document.createElement('img');
  var div = document.getElementById('flex-cat-gen');
  image.src = 'http://thecatapi.com/api/images/get?format=src&type=images&random=' + Math.floor(Math.random() * 999999999) + 1;

  document.getElementById("catGenerator").disabled = true;
  document.getElementById("catGenerator").classList.add("btn-danger");
  image.style.width = "500px";
  image.style.height = "333px";

  if (screen.width <= 768) {
    image.style.width = "320px";
    image.style.height = "180px";
  }
  image.onload = function () {
    div.innerHTML = image.outerHTML;
    document.getElementById("catGenerator").disabled = false;
    document.getElementById("catGenerator").classList.remove("btn-danger");

  };
}

window.addEventListener('load',

  function () {
    generateCat();
  }, false);

const checkbox = document.getElementById('checkbox')
var refreshIntervalId = null;

checkbox.addEventListener('change', (event) => {
  if (event.target.checked) {
    refreshIntervalId = setInterval(generateCat, 4000);
  } else {

    clearInterval(refreshIntervalId);
  }
})

document.getElementById("catGenerator").onclick = function () {

  generateCat();


}
 