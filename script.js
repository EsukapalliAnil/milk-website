const VAMSI_MOBILE = "9441990255";

// ✅ OPEN / CLOSE LOGIN POPUP
function openLogin() {
  document.getElementById("loginModal").classList.remove("hidden");
}

function closeLogin() {
  document.getElementById("loginModal").classList.add("hidden");
}

// ✅ CALL & SHARE
function callVamsi() {
  window.location.href = "tel:" + VAMSI_MOBILE;
}

function whatsappHelp() {
  window.open("https://wa.me/91" + VAMSI_MOBILE + "?text=Hi%20Vamsi,%20I%20need%20help%20for%20milk%20delivery", "_blank");
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

// ✅ LOGIN FUNCTION (FIXED)
document.addEventListener("DOMContentLoaded", function () {

  const loginForm = document.getElementById("loginForm");
  if (!loginForm) return;

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault(); // ✅ stop page reload

    let mobile = document.getElementById("mobile").value.trim();

    if (mobile.length !== 10) {
      alert("Please enter valid 10-digit mobile number");
      return;
    }

    // ✅ Close popup
    closeLogin();

    // ✅ show next order section
    document.getElementById("orderSection").classList.remove("hidden");

    // ✅ scroll to next section
    document.getElementById("orderSection").scrollIntoView({ behavior: "smooth" });
  });

});