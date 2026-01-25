const VAMSI_MOBILE = "9441990255";
const PRICE_PER_LITER = 80;

// ✅ Footer year + events
document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.innerText = new Date().getFullYear();

  // ✅ Login submit
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
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

      // ✅ scroll to order section
      orderSection.scrollIntoView({ behavior: "smooth" });
    });
  }

  // ✅ Add to cart button click
  const cartBtn = document.getElementById("addToCartBtn");
  if (cartBtn) cartBtn.addEventListener("click", addToCart);
});

// ✅ Open Login Popup
function openLogin() {
  document.getElementById("loginModal").classList.remove("hidden");
}

// ✅ Close Login Popup
function closeLogin() {
  document.getElementById("loginModal").classList.add("hidden");
}

// ✅ Test Close button
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

  // ✅ Show full details in Cart Summary box
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

// ✅ WhatsApp Order (FULL CUSTOMER DETAILS ✅✅)
function whatsappOrder() {
  const name = document.getElementById("name").value.trim();
  const address = document.getElementById("address").value.trim();
  const location = document.getElementById("location").value.trim();

  const quantity = parseFloat(document.getElementById("quantity").value);
  const deliveryTime = document.getElementById("deliveryTime").value;
  const plan = parseInt(document.getElementById("plan").value);
  const payment = document.getElementById("payment").value;

  if (!name || !address || !location) {
    alert("Please fill Name, Address, Location before ordering.");
    return;
  }

  const total = quantity * PRICE_PER_LITER * plan;

  const message =
`Hi Vamsi 👋 New Milk Order ✅

👤 Name: ${name}
📍 Location: ${location}
🏠 Address: ${address}

🥛 Milk Quantity: ${quantity} L/day
⏰ Delivery Time: ${deliveryTime}
📅 Plan: ${plan} Days
💳 Payment: ${payment}

💰 Total Amount: ₹${total}

✅ Please confirm my order.`;

  window.open(
    `https://wa.me/91${VAMSI_MOBILE}?text=${encodeURIComponent(message)}`,
    "_blank"
  );
}

// ✅ Call Owner
function callVamsi() {
  window.location.href = `tel:${VAMSI_MOBILE}`;
}

// ✅ WhatsApp Help button
function whatsappHelp() {
  const msg = "Hi Vamsi, I need help for milk delivery.";
  window.open(`https://wa.me/91${VAMSI_MOBILE}?text=${encodeURIComponent(msg)}`, "_blank");
}

// ✅ Website Share button
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