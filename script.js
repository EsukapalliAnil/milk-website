const VAMSI_MOBILE = "9441990255";
const PRICE_PER_LITER = 80;

let cart = null;

// ✅ Set footer year
document.getElementById("year").innerText = new Date().getFullYear();

// ✅ Open/Close Login
function openLogin(){
  document.getElementById("loginModal").classList.remove("hidden");
}
function closeLogin(){
  document.getElementById("loginModal").classList.add("hidden");
}

// ✅ Login Form
document.getElementById("loginForm").addEventListener("submit", function(e){
  e.preventDefault();

  const mobile = document.getElementById("mobile").value.trim();
  if(mobile.length !== 10){
    alert("Please enter valid 10-digit mobile number");
    return;
  }

  closeLogin();
  document.getElementById("orderSection").classList.remove("hidden");
  window.location.href = "#orderSection";
});

// ✅ Add To Cart
document.getElementById("addToCartBtn").addEventListener("click", function(){
  const name = document.getElementById("name").value.trim();
  const address = document.getElementById("address").value.trim();
  const location = document.getElementById("location").value.trim();
  const qty = parseFloat(document.getElementById("quantity").value);

  const deliveryTime = document.getElementById("deliveryTime").value;
  const days = parseInt(document.getElementById("plan").value);
  const payment = document.getElementById("payment").value;

  if(name === "" || address === "" || location === ""){
    alert("Please fill Name, Address, Location");
    return;
  }

  const perDayTotal = qty * PRICE_PER_LITER;
  const grandTotal = perDayTotal * days;

  cart = { name, address, location, qty, deliveryTime, days, payment, grandTotal };

  const cartBox = document.getElementById("cartBox");
  cartBox.classList.remove("hidden");

  document.getElementById("cartDetails").innerHTML = `
    <p><b>Name:</b> ${cart.name}</p>
    <p><b>Address:</b> ${cart.address}</p>
    <p><b>Location:</b> ${cart.location}</p>
    <p><b>Delivery Time:</b> ${cart.deliveryTime}</p>
    <p><b>Milk:</b> ${cart.qty} L/day</p>
    <p><b>Plan:</b> ${cart.days} Days</p>
    <p><b>Payment:</b> ${cart.payment}</p>
    <hr/>
    <h3>Total: ₹${cart.grandTotal}</h3>
  `;
});

// ✅ Confirm Order & Start Tracking
function confirmOrder(){
  if(!cart){
    alert("Please add to cart first");
    return;
  }

  // show tracking section
  document.getElementById("trackingBox").classList.remove("hidden");
  window.location.href = "#trackingBox";

  startTrackingDemo();
}

// ✅ Tracking Demo with ETA Countdown
function startTrackingDemo(){
  const bar = document.getElementById("trackBar");
  const t1 = document.getElementById("t1");
  const t2 = document.getElementById("t2");
  const t3 = document.getElementById("t3");
  const t4 = document.getElementById("t4");
  const t5 = document.getElementById("t5");

  let eta = 20; // minutes
  const etaLabel = document.getElementById("etaTime");

  // Reset
  [t1,t2,t3,t4,t5].forEach(t => t.classList.remove("active"));
  t1.classList.add("active");
  bar.style.width = "10%";
  etaLabel.innerText = eta + " min";

  // Step timing simulation
  setTimeout(() => { t2.classList.add("active"); bar.style.width="30%"; }, 3000);
  setTimeout(() => { t3.classList.add("active"); bar.style.width="55%"; }, 7000);
  setTimeout(() => { t4.classList.add("active"); bar.style.width="80%"; }, 11000);
  setTimeout(() => { t5.classList.add("active"); bar.style.width="100%"; }, 15000);

  // ETA countdown every 1 second (fast demo)
  const timer = setInterval(() => {
    eta--;
    if(eta <= 0){
      etaLabel.innerText = "Delivered ✅";
      clearInterval(timer);
    }else{
      etaLabel.innerText = eta + " min";
    }
  }, 1000);
}

// ✅ WhatsApp Order
function whatsappOrder(){
  if(!cart){
    alert("Please add to cart first");
    return;
  }

  const msg = `Hi Vamsi, New Milk Order ✅%0A%0A` +
    `Name: ${cart.name}%0A` +
    `Address: ${cart.address}%0A` +
    `Location: ${cart.location}%0A` +
    `Delivery Time: ${cart.deliveryTime}%0A` +
    `Milk: ${cart.qty} L/day%0A` +
    `Plan: ${cart.days} Days%0A` +
    `Payment: ${cart.payment}%0A` +
    `Total: ₹${cart.grandTotal}`;

  window.open(`https://wa.me/91${VAMSI_MOBILE}?text=${msg}`, "_blank");
}

// ✅ PhonePe / UPI Link (Open any UPI app)
function openPhonePe(){
  // NOTE: For correct payment, need exact UPI ID like vamsi@ybl
  alert("PhonePe/UPI: Pay to 9441990255 (manual). If you have UPI ID, I will add direct pay link ✅");
}

// ✅ Call/Help/Share
function callVamsi(){
  window.location.href = `tel:${VAMSI_MOBILE}`;
}
function whatsappHelp(){
  window.open(`https://wa.me/91${VAMSI_MOBILE}?text=Hi%20Vamsi,%20I%20need%20help%20for%20milk%20delivery`, "_blank");
}
function shareWebsite(){
  const url = window.location.href;
  if(navigator.share){
    navigator.share({
      title: "Vamsi Milk - Bangalore",
      text: "Farm Fresh Cow Milk Order Website",
      url: url
    });
  } else {
    alert("Sharing not supported. Copy link: " + url);
  }
}