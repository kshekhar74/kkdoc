
let cart=0;

function addCart(){
cart++;
document.getElementById("cart-count").innerText=cart;
}

function scrollToProducts(){
document.getElementById("trending").scrollIntoView({behavior:"smooth"});
}
