const VAMSI_MOBILE = "9441990255";
const PRICE_PER_LITER = 80;

// ✅ Footer year
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").innerText = new Date().getFullYear();

  // ✅ Login form submit working
  const loginForm = document.getElementById("loginForm");

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault(); // stop refresh

    const mobile = document.getElementById("loginMobile").value.trim();

    if (mobile.length !== 10) {
      alert("Please enter valid 10 digit mobile number");
      return;
    }

    // ✅ close popup
    closeLogin();

    // ✅ show order page
    const orderSection = document.getElementById("orderSection");
    orderSection.classList.remove("hidden");

    // ✅ scroll to order
    orderSection.scrollIntoView({ behavior: "smooth" });
  });

  // ✅ Add to cart button
  document.getElementById("addToCartBtn").addEventListener("click", addToCart);
});

// ✅ Open/Close Login
function openLogin() {
  document.getElementById("loginModal").classList.remove("hidden");
}
function closeLogin() {
  document.getElementById("loginModal").classList.add("hidden");
}

// ✅ Test Close
function testClose() {
  closeLogin();
  alert("Popup closed ✅ Working!");
}

// ✅ Add to cart function
function addToCart() {
  const name = document.getElementById("name").value.trim();
  const address = document.getElementById("address").value.trim();
  const location = document.getElementById("location").value.trim();

  const quantity = parseFloat(document.getElementById("quantity").value);
  const deliveryTime = document.getElementById("deliveryTime").value;
  const plan = parseInt(document.getElementById("plan").value);
  const payment = document.getElementById("payment").value;

  if (!name || !address || !location) {
    alert("Please fill Name, Address, Location");
    return;
  }

  const perDayTotal = quantity * PRICE_PER_LITER;
  const grandTotal = perDayTotal * plan;

  document.getElementById("cartBox").innerHTML = `
    <p><b>Name:</b> ${name}</p>
    <p><b>Address:</b> ${address}</p>
    <p><b>Location:</b> ${location}</p>
    <p><b>Delivery Time:</b> ${deliveryTime}</p>
    <p><b>Quantity:</b> ${quantity} L/day</p>
    <p><b>Plan:</b> ${plan} Days</p>
    <p><b>Payment:</b> ${payment}</p>
    <hr>
    <h3>Total: ₹${grandTotal}</h3>
  `;
}

// ✅ WhatsApp Order
function whatsappOrder() {
  const msg = `Hi Vamsi, I want to order milk ✅`;
  window.open(`https://wa.me/91${VAMSI_MOBILE}?text=${encodeURIComponent(msg)}`, "_blank");
}

// ✅ Call / Help / Share
function callVamsi() {
  window.location.href = `tel:${VAMSI_MOBILE}`;
}

function whatsappHelp() {
  const msg = "Hi Vamsi, I need help for milk delivery.";
  window.open(`https://wa.me/91${VAMSI_MOBILE}?text=${encodeURIComponent(msg)}`, "_blank");
}

function shareWebsite() {
  const url = window.location.href;
  if (navigator.share) {
    navigator.share({
      title: "Vamsi Milk - Bangalore",
      text: "Farm Fresh Cow Milk Order Website",
      url: url
    });
  } else {
    alert("Copy this link: " + url);
  }
}