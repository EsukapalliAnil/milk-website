// LOGIN PAGE
function login(e) {
  e.preventDefault();

  const userName = document.getElementById("name").value.trim();
  const userMobile = document.getElementById("mobile").value.trim();

  if (userMobile.length !== 10) {
    alert("Please enter a valid 10-digit mobile number");
    return;
  }

  // SAVE DATA (SINGLE SOURCE OF TRUTH)
  localStorage.setItem("USER_NAME", userName);
  localStorage.setItem("USER_MOBILE", userMobile);

  window.location.href = "order.html";
}

// ORDER PAGE LOAD
document.addEventListener("DOMContentLoaded", function () {
  const nameField = document.getElementById("oName");
  const mobileField = document.getElementById("oMobile");

  if (nameField && mobileField) {
    const savedName = localStorage.getItem("USER_NAME");
    const savedMobile = localStorage.getItem("USER_MOBILE");

    // SAFETY CHECK
    if (!savedName || !savedMobile) {
      alert("Session expired. Please login again.");
      window.location.href = "index.html";
      return;
    }

    nameField.value = savedName;
    mobileField.value = savedMobile;

    calculateBill();
  }
});

// BILL CALCULATION
function calculateBill() {
  const qty = parseFloat(document.getElementById("quantity").value);
  const planDays = document.getElementById("plan").value.includes("15") ? 15 : 7;

  const total = qty * 80 * planDays;

  document.getElementById("bill").innerText =
    "💰 Estimated Bill: ₹" + total;

  window.UPI_AMOUNT = total;
}

// UPI PAYMENT
function payUPI() {
  if (!window.UPI_AMOUNT) {
    alert("Please select quantity and plan");
    return;
  }

  const upiUrl =
    "upi://pay?pa=7569446231-3@axl&pn=VamsiMilk&am=" +
    window.UPI_AMOUNT +
    "&cu=INR";

  window.location.href = upiUrl;
}

// SEND TO WHATSAPP
function sendWhatsApp(e) {
  e.preventDefault();

  const message =
`🍼 Milk Order

Name: ${document.getElementById("oName").value}
Mobile: ${document.getElementById("oMobile").value}

Address:
${document.getElementById("address").value}

Pincode: ${document.getElementById("pincode").value}

Quantity: ${document.getElementById("quantity").value}
Plan: ${document.getElementById("plan").value}
Amount: ₹${window.UPI_AMOUNT}

⚠️ Pay only via UPI or settlement`;

  window.open(
    "https://wa.me/919441990255?text=" + encodeURIComponent(message),
    "_blank"
  );
}