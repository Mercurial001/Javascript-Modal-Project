let modalbtn = document.querySelector(".modal-btn");
let overlay = document.querySelector(".overlay");

modalbtn.addEventListener("click", function(){
    overlay.style.display = "block";
});

overlay.addEventListener("click", function(){
    overlay.style.display = "none";
});