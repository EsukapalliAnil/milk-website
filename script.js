let cart = null;

const loginSection = document.getElementById("loginSection");
const orderSection = document.getElementById("orderSection");
const cartSection = document.getElementById("cartSection");
const confirmationSection = document.getElementById("confirmationSection");

document.getElementById("loginForm").addEventListener("submit", function(e){
  e.preventDefault();
  let mobile = document.getElementById("mobile").value.trim();

  if(mobile.length !== 10){
    alert("Please enter a valid 10-digit mobile number");
    return;
  }

  loginSection.classList.add("hidden");
  orderSection.classList.remove("hidden");
});

document.getElementById("addToCartBtn").addEventListener("click", function(){
  let name = document.getElementById("name").value.trim();
  let location = document.getElementById("location").value.trim();
  let qty = parseFloat(document.getElementById("quantity").value);
  let pricePerLiter = parseFloat(document.getElementById("pricePerLiter").value);

  if(name === "" || location === ""){
    alert("Please enter Name and Location");
    return;
  }

  let totalOneDay = qty * pricePerLiter;

  cart = {
    name,
    location,
    qty,
    pricePerLiter,
    totalOneDay
  };

  document.getElementById("cartDetails").innerHTML = `
    <p><b>Name:</b> ${cart.name}</p>
    <p><b>Location:</b> ${cart.location}</p>
    <p><b>Milk Quantity:</b> ${cart.qty} Liter/day</p>
    <p><b>Price:</b> ₹${cart.pricePerLiter} per Liter</p>
    <p><b>1 Day Total:</b> ₹${cart.totalOneDay}</p>
  `;

  cartSection.classList.remove("hidden");
});

document.getElementById("placeOrderBtn").addEventListener("click", function(){
  if(!cart){
    alert("Please add milk to cart first!");
    return;
  }

  let days = parseInt(document.getElementById("plan").value);
  let payment = document.getElementById("payment").value;

  let grandTotal = cart.totalOneDay * days;

  orderSection.classList.add("hidden");
  cartSection.classList.add("hidden");
  confirmationSection.classList.remove("hidden");

  document.getElementById("finalSummary").innerHTML = `
    <h3>Order Summary</h3>
    <p><b>Name:</b> ${cart.name}</p>
    <p><b>Location:</b> ${cart.location}</p>
    <p><b>Milk:</b> ${cart.qty} Liter/day</p>
    <p><b>Plan:</b> ${days} Days</p>
    <p><b>Payment:</b> ${payment}</p>
    <hr>
    <h2>Total Amount: ₹${grandTotal}</h2>
    <p>✅ Delivery: Morning Doorstep Delivery</p>
  `;
});