const bntRight = document.querySelector(".btn-right");
const bntLeft = document.querySelector(".btn-left");
const container = document.querySelector(".container");


bntRight.addEventListener("mouseenter", function(){

	container.classList.add("mover-right");
})

bntRight.addEventListener("mouseleave", function(){

	container.classList.remove("mover-right");
})

bntLeft.addEventListener("mouseenter", function(){

	container.classList.add("mover-left");
})

bntLeft.addEventListener("mouseleave", function(){

	container.classList.remove("mover-left");
})