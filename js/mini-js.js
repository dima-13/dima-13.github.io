var buy=document.querySelector(".buy");var modalCart=document.querySelector(".modal-cart");var close=document.querySelector(".modal-cart-close")
var map=document.querySelector(".about-contact img");var mapPopup=document.querySelector(".modal-map");var mapClose=document.querySelector(".modal-map-close");var writeUs=document.querySelector(".about-contact-mail");var writeModal=document.querySelector(".modal-write-us");var writeUsClose=document.querySelector(".write-us-close");buy.addEventListener("click",function(event){event.preventDefault();modalCart.classList.add("modal-show");});close.addEventListener("click",function(event){event.preventDefault();modalCart.classList.remove("modal-show");})
map.addEventListener("click",function(event){event.preventDefault();mapPopup.classList.add("modal-show");});mapClose.addEventListener("click",function(event){event.preventDefault();mapPopup.classList.remove("modal-show");})
writeUs.addEventListener("click",function(event){event.preventDefault();writeModal.classList.add("modal-show");});writeUsClose.addEventListener("click",function(event){event.preventDefault();writeModal.classList.remove("modal-show");});