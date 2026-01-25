const VAMSI_MOBILE = "9441990255";
const ANIL_MOBILE = "7569446231";
const PRICE_PER_LITER = 80;
const UPI_ID = "7569446231-3@axl";

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

      // ✅ auto fill customer mobile in order page
      const custMobile = document.getElementById("customerMobile");
      if (custMobile) custMobile.value = mobile;
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
  const data = getOrderData();
  if (!data) return;

  document.getElementById("cartBox").innerHTML = `
    <p><b>Name:</b> ${data.name}</p>
    <p><b>Mobile:</b> ${data.customerMobile}</p>
    <p><b>Address:</b> ${data.address}</p>
    <p><b>Location:</b> ${data.location}</p>
    <p><b>Delivery Time:</b> ${data.deliveryTime}</p>
    <p><b>Quantity:</b> ${data.quantity} L/day</p>
    <p><b>Plan:</b> ${data.plan} Days</p>
    <p><b>Payment:</b> ${data.payment}</p>
    <hr>
    <h3>Total: ₹${data.total}</h3>
  `;
}

// ✅ Get data
function getOrderData() {
  const name = document.getElementById("name").value.trim();
  const customerMobile = document.getElementById("customerMobile").value.trim();
  const address = document.getElementById("address").value.trim();
  const location = document.getElementById("location").value.trim();

  const quantity = parseFloat(document.getElementById("quantity").value);
  const deliveryTime = document.getElementById("deliveryTime").value;
  const plan = parseInt(document.getElementById("plan").value);
  const payment = document.getElementById("payment").value;

  if (!name || !address || !location || customerMobile.length !== 10) {
    alert("Please fill Name, Mobile, Address, Location correctly.");
    return null;
  }

  const total = quantity * PRICE_PER_LITER * plan;

  return {
    name,
    customerMobile,
    address,
    location,
    quantity,
    deliveryTime,
    plan,
    payment,
    total
  };
}

// ✅ Send full order details to WhatsApp (Vamsi)
function whatsappOrder() {
  const data = getOrderData();
  if (!data) return;

  const message =
`Hi Vamsi 👋 New Milk Order ✅

👤 Name: ${data.name}
📞 Customer Mobile: ${data.customerMobile}
📍 Location: ${data.location}
🏠 Address: ${data.address}

🥛 Quantity: ${data.quantity} L/day
⏰ Delivery Time: ${data.deliveryTime}
📅 Plan: ${data.plan} Days
💳 Payment: ${data.payment}

💰 Total Amount: ₹${data.total}

✅ Please confirm the order.`;

  window.open(`https://wa.me/91${VAMSI_MOBILE}?text=${encodeURIComponent(message)}`, "_blank");
}

// ✅ UPI Payment open (PhonePe / GPay / Paytm)
function payUPI() {
  const data = getOrderData();
  if (!data) return;

  const upiLink =
    `upi://pay?pa=${UPI_ID}&pn=Vamsi%20Milk&am=${data.total}&cu=INR&tn=Milk%20Order%20Payment`;

  window.location.href = upiLink;
}

// ✅ Raise Complaint
function raiseComplaint() {
  const name = document.getElementById("complaintName").value.trim();
  const mobile = document.getElementById("complaintMobile").value.trim();
  const msg = document.getElementById("complaintMsg").value.trim();

  if (!name || mobile.length !== 10 || !msg) {
    alert("Please enter Name, valid Mobile and Complaint Message.");
    return;
  }

  // ✅ Send complaint to Vamsi WhatsApp
  const vamsiMessage =
`🚨 New Complaint Received!

👤 Name: ${name}
📞 Mobile: ${mobile}

📝 Complaint: ${msg}

✅ Please take action immediately.`;

  window.open(`https://wa.me/91${VAMSI_MOBILE}?text=${encodeURIComponent(vamsiMessage)}`, "_blank");

  // ✅ Auto confirmation message for customer (popup)
  alert("✅ Complaint submitted successfully! We will contact you soon.");

  // ✅ Create customer confirmation message (copy)
  const customerConfirm =
`Hi ${name}, ✅ your complaint has been registered successfully.

Our team will contact you soon.
Thank you for choosing Vamsi Milk 🥛`;

  // ✅ Try to open WhatsApp confirmation to customer (if user wants)
  window.open(`https://wa.me/91${mobile}?text=${encodeURIComponent(customerConfirm)}`, "_blank");
}

// ✅ Call numbers
function callVamsi() {
  window.location.href = `tel:${VAMSI_MOBILE}`;
}
function callAnil() {
  window.location.href = `tel:${ANIL_MOBILE}`;
}

// ✅ WhatsApp Help
function whatsappHelp() {
  const msg = "Hi Vamsi, I need help for milk delivery.";
  window.open(`https://wa.me/91${VAMSI_MOBILE}?text=${encodeURIComponent(msg)}`, "_blank");
}

// ✅ Share website
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