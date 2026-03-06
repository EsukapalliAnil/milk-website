let cart = 0;

function addCart(){

cart++;

document.getElementById("cart-count").innerText = cart;

alert("Product added to cart 🥛");

}



function scrollToProducts(){

document.getElementById("products").scrollIntoView({
behavior:"smooth"
});

}



function filterProducts(category){

let products = document.querySelectorAll(".product");

products.forEach(product => {

if(category === "all"){

product.style.display = "block";

}

else if(product.classList.contains(category)){

product.style.display = "block";

}

else{

product.style.display = "none";

}

});

}
