function addCart(){
alert("Milk added to cart 🥛");
}

function sendWhatsApp(){

let name=document.getElementById("name").value;
let address=document.getElementById("address").value;
let city=document.getElementById("city").value;
let pincode=document.getElementById("pincode").value;

let morning=document.getElementById("morning").value;
let evening=document.getElementById("evening").value;

let msg="New Milk Order%0A"
+"Name: "+name+"%0A"
+"Address: "+address+"%0A"
+"City: "+city+"%0A"
+"Pincode: "+pincode+"%0A"
+"Morning Delivery: "+morning+"%0A"
+"Evening Delivery: "+evening;

window.open("https://wa.me/917569664231?text="+msg);
}
