function login(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const mobile = document.getElementById("mobile").value.trim();

  if (name === "") {
    alert("Please enter your full name");
    return;
  }

  if (mobile.length !== 10) {
    alert("Enter valid 10-digit mobile number");
    return;
  }

  localStorage.setItem("USER_NAME", name);
  localStorage.setItem("USER_MOBILE", mobile);

  window.location.href = "order.html";
}

document.addEventListener("DOMContentLoaded", () => {
  const n = localStorage.getItem("USER_NAME");
  const m = localStorage.getItem("USER_MOBILE");

  if (!n || !m) {
    window.location.href = "index.html";
    return;
  }

  document.getElementById("oName").value = n;
  document.getElementById("oMobile").value = m;

  calculateBill();
});

function calculateBill() {
  const qty = parseFloat(document.getElementById("quantity").value);
  const days = parseInt(document.getElementById("plan").value);
  const total = qty * 80 * days;

  document.getElementById("bill").innerText = total;
  window.amount = total;
}

function payUPI() {
  const url = `upi://pay?pa=7569446231-3@axl&pn=VamsiMilk&am=${window.amount}&cu=INR`;
  window.location.href = url;
}

function sendWhatsApp(e) {
  e.preventDefault();

  const msg =
`Milk Order
Name: ${oName.value}
Mobile: ${oMobile.value}
Address: ${address.value}
Pincode: ${pincode.value}
Quantity: ${quantity.value}
Plan: ${plan.value} Days
Amount: ₹${window.amount}`;

  window.open(
    "https://wa.me/919441990255?text=" + encodeURIComponent(msg),
    "_blank"
  );
}