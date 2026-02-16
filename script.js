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
  bill.innerText = "💰 Estimated Bill: ₹" + (qty * 80 * days);
}

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(pos => {
      address.value += `\nLocation: https://maps.google.com/?q=${pos.coords.latitude},${pos.coords.longitude}`;
    });
  } else {
    alert("GPS not supported");
  }
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
Time: ${time.value}
Plan: ${plan.value}

Pay via UPI: 7569446231-3@axl`;

  window.open(
    "https://wa.me/919441990255?text=" + encodeURIComponent(msg),
    "_blank"
  );
}