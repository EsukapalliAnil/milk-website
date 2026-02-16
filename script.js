function login(e) {
  e.preventDefault();

  if (mobile.value.length !== 10) {
    alert("Enter valid 10-digit mobile number");
    return;
  }

  localStorage.setItem("vm_name", name.value);
  localStorage.setItem("vm_mobile", mobile.value);

  window.location.href = "order.html";
}

window.onload = function () {
  if (document.getElementById("oName")) {
    oName.value = localStorage.getItem("vm_name") || "";
    oMobile.value = localStorage.getItem("vm_mobile") || "";
    calculateBill();
  }
};

function calculateBill() {
  const qty = parseFloat(quantity.value);
  const days = parseInt(plan.value);
  const total = qty * 80 * days;
  bill.innerText = "💰 Total Amount: ₹" + total;
  window.currentAmount = total;
}

function payUPI() {
  const url = `upi://pay?pa=7569446231-3@axl&pn=VamsiMilk&am=${window.currentAmount}&cu=INR`;
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
Quantity: ${quantity.value} L
Plan: ${plan.value} Days
Amount: ₹${window.currentAmount}`;

  window.open(
    "https://wa.me/919441990255?text=" + encodeURIComponent(msg),
    "_blank"
  );
}