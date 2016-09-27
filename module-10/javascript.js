document.getElementById("button1").addEventListener("click", function(){
  document.getElementById("box").style.height = "400px";
  document.getElementById("box").style.width = "400px";
});

document.getElementById("button2").addEventListener("click", function(){
  document.getElementById("box").style.backgroundColor = "blue";
});

document.getElementById("button3").addEventListener("click", function(){
  var thisWillBeFaded = document.getElementById("box")
  var fadeFunc = setInterval(function(){
    if(!thisWillBeFaded.style.opacity) {
      thisWillBeFaded.style.opacity = 1;
    }
    if(thisWillBeFaded.style.opacity < 0.1){
      clearInterval(fadeFunc);
      thisWillBeFaded.style.display = "none"
    } else {
      thisWillBeFaded.style.opacity -= 0.2;
    }
  }, 100);

});

document.getElementById("button4").addEventListener("click", function(){
  document.getElementById("box").style.height = "150px";
  document.getElementById("box").style.width = "150px";
  document.getElementById("box").style.backgroundColor = "orange";
  document.getElementById("box").style.opacity = 1;
  document.getElementById("box").style.display = "block"
});
