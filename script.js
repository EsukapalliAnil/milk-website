let cart = null;
let liveLat = "";
let liveLng = "";

const VAMSI_MOBILE = "9441990255";

// ✅ Login
document.getElementById("loginForm").addEventListener("submit", function(e){
  e.preventDefault();
  let mobile = document.getElementById("mobile").value.trim();

  if(mobile.length !== 10){
    alert("Please enter valid 10-digit mobile number");
    return;
  }

  document.getElementById("loginSection").classList.add("hidden");
  document.getElementById("orderSection").classList.remove("hidden");
});

// ✅ Live Location
function getLiveLocation(){
  if(!navigator.geolocation){
    alert("Location not supported in your phone");
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (pos) => {
      liveLat = pos.coords.latitude;
      liveLng = pos.coords.longitude;

      document.getElementById("liveLocationText").innerText =
        `✅ Location saved: ${liveLat.toFixed(5)}, ${liveLng.toFixed(5)}`;
    },
    () => {
      alert("Please allow location permission");
    }
  );
}

// ✅ Add to Cart
document.getElementById("addToCartBtn").addEventListener("click", function(){
  let name = document.getElementById("name").value.trim();
  let location = document.getElementById("location").value.trim();
  let address = document.getElementById("address").value.trim();
  let qty = parseFloat(document.getElementById("quantity").value);

  let pricePerLiter = 80;
  let days = parseInt(document.getElementById("plan").value);
  let payment = document.getElementById("payment").value;
  let deliveryTime = document.getElementById("deliveryTime").value;

  if(name === "" || location === "" || address === ""){
    alert("Please fill Name, Location and Full Address");
    return;
  }

  let totalOneDay = qty * pricePerLiter;
  let grandTotal = totalOneDay * days;

  cart = {
    name,
    location,
    address,
    qty,
    days,
    payment,
    deliveryTime,
    totalOneDay,
    grandTotal,
    liveLat,
    liveLng
  };

  document.getElementById("cartDetails").innerHTML = `
    <p><b>Name:</b> ${cart.name}</p>
    <p><b>Address:</b> ${cart.address}</p>
    <p><b>Location:</b> ${cart.location}</p>
    <p><b>Delivery Time:</b> ${cart.deliveryTime}</p>
    <p><b>Milk:</b> ${cart.qty} Liter/day</p>
    <p><b>Plan:</b> ${cart.days} Days</p>
    <p><b>Payment:</b> ${cart.payment}</p>
    <p><b>Total Amount:</b> ₹${cart.grandTotal}</p>
    <p><b>Live Location:</b> ${cart.liveLat ? cart.liveLat + "," + cart.liveLng : "Not shared"}</p>
  `;

  document.getElementById("cartSection").classList.remove("hidden");
});

// ✅ Place Order
document.getElementById("placeOrderBtn").addEventListener("click", function(){
  if(!cart){
    alert("Please add to cart first");
    return;
  }

  document.getElementById("orderSection").classList.add("hidden");
  document.getElementById("cartSection").classList.add("hidden");
  document.getElementById("confirmationSection").classList.remove("hidden");

  document.getElementById("finalSummary").innerHTML = `
    <h3>✅ Order Confirmed</h3>
    <p><b>Name:</b> ${cart.name}</p>
    <p><b>Address:</b> ${cart.address}</p>
    <p><b>Location:</b> ${cart.location}</p>
    <p><b>Delivery Time:</b> ${cart.deliveryTime}</p>
    <p><b>Total Amount:</b> ₹${cart.grandTotal}</p>
    <p><b>Contact:</b> Vamsi - ${VAMSI_MOBILE}</p>
  `;
});

// ✅ WhatsApp Order
document.getElementById("whatsappOrderBtn").addEventListener("click", function(){
  if(!cart){
    alert("Please add to cart first");
    return;
  }

  let msg = `Hi Vamsi, New Milk Order ✅%0A%0A` +
    `Name: ${cart.name}%0A` +
    `Address: ${cart.address}%0A` +
    `Location: ${cart.location}%0A` +
    `Delivery Time: ${cart.deliveryTime}%0A` +
    `Milk: ${cart.qty} L/day%0A` +
    `Plan: ${cart.days} Days%0A` +
    `Payment: ${cart.payment}%0A` +
    `Total: ₹${cart.grandTotal}%0A` +
    `Live Location: ${cart.liveLat ? "https://maps.google.com/?q=" + cart.liveLat + "," + cart.liveLng : "Not shared"}`;

  window.open(`https://wa.me/91${VAMSI_MOBILE}?text=${msg}`, "_blank");
});

// ✅ Help buttons
function callVamsi(){
  window.location.href = `tel:${VAMSI_MOBILE}`;
}

function whatsappHelp(){
  window.open(`https://wa.me/91${VAMSI_MOBILE}?text=Hi%20Vamsi,%20I%20need%20help%20for%20milk%20delivery`, "_blank");
}