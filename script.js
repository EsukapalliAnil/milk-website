const VAMSI_MOBILE = "9441990255";
const PRICE_PER_LITER = 80;
const UPI_ID = "7569446231-3@axl";  // ✅ your UPI ID

document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.innerText = new Date().getFullYear();

  // ✅ Login submit
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const mobile = document.getElementById("loginMobile").value.trim();
      if (mobile.length !== 10) {
        alert("Please enter valid 10 digit mobile number");
        return;
      }

      closeLogin();

      const orderSection = document.getElementById("orderSection");
      orderSection.classList.remove("hidden");
      orderSection.scrollIntoView({ behavior: "smooth" });
    });
  }

  // ✅ Add to cart click
  const cartBtn = document.getElementById("addToCartBtn");
  if (cartBtn) cartBtn.addEventListener("click", addToCart);
});

// ✅ Open/Close Login
function openLogin() {
  document.getElementById("loginModal").classList.remove("hidden");
}
function closeLogin() {
  document.getElementById("loginModal").classList.add("hidden");
}

// ✅ Add to cart
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

  const perDay = quantity * PRICE_PER_LITER;
  const total = perDay * plan;

  document.getElementById("cartBox").innerHTML = `
    <p><b>Name:</b> ${name}</p>
    <p><b>Address:</b> ${address}</p>
    <p><b>Location:</b> ${location}</p>
    <p><b>Delivery Time:</b> ${deliveryTime}</p>
    <p><b>Quantity:</b> ${quantity} L/day</p>
    <p><b>Plan:</b> ${plan} Days</p>
    <p><b>Payment:</b> ${payment}</p>
    <hr>
    <h3>Total: ₹${total}</h3>
  `;
}

// ✅ Send full order details to WhatsApp
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

  window.open(`https://wa.me/91${VAMSI_MOBILE}?text=${encodeURIComponent(message)}`, "_blank");
}

// ✅ UPI Payment open (PhonePe / GPay / Paytm)
function payUPI() {
  const name = document.getElementById("name").value.trim() || "Customer";
  const quantity = parseFloat(document.getElementById("quantity").value);
  const plan = parseInt(document.getElementById("plan").value);

  const amount = quantity * PRICE_PER_LITER * plan;

  // ✅ UPI deep link
  const upiLink =
    `upi://pay?pa=${UPI_ID}&pn=Vamsi%20Milk&am=${amount}&cu=INR&tn=Milk%20Order%20Payment`;

  // ✅ Open UPI app
  window.location.href = upiLink;
}

// ✅ Call Vamsi
function callVamsi() {
  window.location.href = `tel:${VAMSI_MOBILE}`;
}

// ✅ Help on WhatsApp
function whatsappHelp() {
  const msg = "Hi Vamsi, I need help for milk delivery.";
  window.open(`https://wa.me/91${VAMSI_MOBILE}?text=${encodeURIComponent(msg)}`, "_blank");
}

// ✅ Share
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