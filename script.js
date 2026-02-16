function scrollToForm() {
  document.getElementById("order").scrollIntoView({ behavior: "smooth" });
}

document.getElementById("orderForm").addEventListener("submit", function(e) {
  e.preventDefault();

  alert("✅ Order Submitted Successfully!\nWe will contact you soon.");

  this.reset();
});