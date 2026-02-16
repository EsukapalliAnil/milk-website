function login(e) {
  e.preventDefault();
  localStorage.setItem("milkName", name.value);
  localStorage.setItem("milkMobile", mobile.value);
  window.location.href = "order.html";
}

window.onload = function () {
  if (document.getElementById("oName")) {
    oName.value = localStorage.getItem("milkName");
    oMobile.value = localStorage.getItem("milkMobile");
    calculateBill();
  }
};

function calculateBill() {
  const qty = parseFloat(quantity.value);
  const days = plan.value.includes("15") ? 15 : 7;
  const price = 80;
  const total = qty * price * days;
  bill.innerText = "💰 Estimated Bill: ₹" + total;
}

function sendWhatsApp(e) {
  e.preventDefault();

  const days = plan.value.includes("15") ? 15 : 7;
  const total = quantity.value * 80 * days;

  const message =
`🧾 *NEW MILK ORDER*

👤 Name: ${oName.value}
📞 Mobile: ${oMobile.value}

🏠 Address:
${address.value}
Pincode: ${pincode.value}

🥛 Quantity: ${quantity.value} L
⏰ Time: ${time.value}
📅 Plan: ${plan.value}

💳 Payment: ${payment.value}
💰 Total: ₹${total}

⚠️ Pay only via UPI:
7569446231-3@axl`;

  window.open(
    "https://wa.me/919441990255?text=" + encodeURIComponent(message),
    "_blank"
  );
}