// ✅ CONSTANTS
const VAMSI_MOBILE = "9441990255";
const PRICE_PER_LITER = 80;
const UPI_ID = "7569446231-3@axl";

// ✅ TRANSLATIONS (EN + HI + TE FULL)
const translations = {
  en: {
    brand_name: "Vamsi Milk",
    brand_sub: "Farm Fresh Cow Milk • Bangalore",
    share: "Share",
    login: "Login",
    ticker:
      "✅ Fresh Cow Milk ₹80/L • Morning Delivery 6AM / 9AM • Weekly & 15 Days Plan • Bangalore Only • Contact: 9441990255 ✅",
    hero_title: "Good milk, good life.",
    hero_desc:
      "Pure cow milk delivered daily to your doorstep in Bangalore. Clean, natural and handled hygienically.",
    order_now: "Order Now",
    call_vamsi: "Call Vamsi",
    chip1: "Farm to Home",
    chip2: "No Mixing",
    chip3: "Daily Delivery",
    cow_milk: "Cow Milk",
    per_litre: "/ Litre",
    bangalore_only: "Bangalore Only",
    delivery_time: "Delivery Time",
    hygiene: "Hygiene",
    clean_handling: "Clean Handling",
    notice_title: "⚠️ Important Notice",
    notice1:
      "✅ Please pay ONLY through UPI in this website or Cash On Delivery as confirmed by owner.",
    notice2:
      "❌ If any delivery person asks extra money, DO NOT PAY.",
    notice3:
      "✅ Raise complaint below and we will take action immediately.",
    how_title: "How to order",
    how_sub: "Simple 3 steps to start delivery",
    step1_title: "Login",
    step1_desc: "Enter your mobile number.",
    step2_title: "Select Plan",
    step2_desc: "Choose quantity, days & time.",
    step3_title: "Confirm",
    step3_desc: "Pay with UPI and confirm order.",
    login_hint: "Enter your mobile number to continue",
    mobile_label: "Mobile Number",
    continue: "Continue",
    need_help: "Need Help on WhatsApp",
    place_order: "Place Your Order",
    fill_details: "Fill details and confirm your plan",
    cust_details: "Customer Details",
    name_label: "Name",
    address_label: "Full Address",
    location_label: "Location",
    milk_plan: "Milk Plan",
    quantity_label: "Quantity (Liters/day)",
    plan_label: "Plan",
    payment_label: "Payment Method",
    add_cart: "Add to Cart",
    cart_summary: "Cart Summary",
    no_items: "No cart items yet.",
    send_whatsapp: "Send Order to WhatsApp",
    pay_upi: "Pay with UPI",
    plan_7: "1 Week (7 Days)",
    plan_15: "15 Days",
    upi_payment: "UPI Payment",
    cod: "Cash On Delivery"
  },

  hi: {
    brand_name: "वामसी मिल्क",
    brand_sub: "ताज़ा गाय का दूध • बेंगलुरु",
    share: "शेयर",
    login: "लॉगिन",
    ticker:
      "✅ ताज़ा गाय का दूध ₹80/लीटर • सुबह डिलीवरी 6AM / 9AM • 7 दिन / 15 दिन प्लान • केवल बेंगलुरु • संपर्क: 9441990255 ✅",
    hero_title: "अच्छा दूध, अच्छी ज़िंदगी।",
    hero_desc:
      "शुद्ध गाय का दूध रोज़ आपके घर तक। साफ़, प्राकृतिक और सुरक्षित।",
    order_now: "ऑर्डर करें",
    call_vamsi: "वामसी को कॉल",
    chip1: "फ़ार्म से घर",
    chip2: "कोई मिलावट नहीं",
    chip3: "रोज़ डिलीवरी",
    cow_milk: "गाय का दूध",
    per_litre: "/ लीटर",
    bangalore_only: "केवल बेंगलुरु",
    delivery_time: "डिलीवरी समय",
    hygiene: "स्वच्छता",
    clean_handling: "साफ़ संभाल",
    notice_title: "⚠️ महत्वपूर्ण सूचना",
    notice1:
      "✅ कृपया केवल UPI या मालिक द्वारा पुष्टि किए गए COD से भुगतान करें।",
    notice2:
      "❌ यदि डिलीवरी वाला extra पैसे मांगे, तो भुगतान न करें।",
    notice3:
      "✅ नीचे शिकायत करें और हम तुरंत कार्रवाई करेंगे।",
    how_title: "ऑर्डर कैसे करें",
    how_sub: "डिलीवरी शुरू करने के लिए 3 आसान चरण",
    step1_title: "लॉगिन",
    step1_desc: "अपना मोबाइल नंबर दर्ज करें।",
    step2_title: "प्लान चुनें",
    step2_desc: "मात्रा, दिन और समय चुनें।",
    step3_title: "कन्फर्म",
    step3_desc: "UPI से भुगतान करें और ऑर्डर कन्फर्म करें।",
    login_hint: "जारी रखने के लिए मोबाइल नंबर दर्ज करें",
    mobile_label: "मोबाइल नंबर",
    continue: "जारी रखें",
    need_help: "व्हाट्सएप सहायता",
    place_order: "अपना ऑर्डर करें",
    fill_details: "विवरण भरें और प्लान कन्फर्म करें",
    cust_details: "ग्राहक विवरण",
    name_label: "नाम",
    address_label: "पूरा पता",
    location_label: "लोकेशन",
    milk_plan: "दूध प्लान",
    quantity_label: "मात्रा (लीटर/दिन)",
    plan_label: "प्लान",
    payment_label: "भुगतान तरीका",
    add_cart: "कार्ट में जोड़ें",
    cart_summary: "कार्ट सारांश",
    no_items: "अभी तक कोई आइटम नहीं।",
    send_whatsapp: "व्हाट्सएप पर ऑर्डर भेजें",
    pay_upi: "UPI से भुगतान करें",
    plan_7: "1 सप्ताह (7 दिन)",
    plan_15: "15 दिन",
    upi_payment: "UPI भुगतान",
    cod: "कैश ऑन डिलीवरी"
  },

  te: {
    brand_name: "వామ్సీ మిల్క్",
    brand_sub: "తాజా ఆవుపాలు • బెంగళూరు",
    share: "షేర్",
    login: "లాగిన్",
    ticker:
      "✅ తాజా ఆవుపాలు ₹80/L • ఉదయం డెలివరీ 6AM / 9AM • 7 రోజులు / 15 రోజులు ప్లాన్ • బెంగళూరు మాత్రమే • సంప్రదించండి: 9441990255 ✅",
    hero_title: "మంచి పాలు, మంచి జీవితం.",
    hero_desc:
      "తాజా ఆవుపాలు ప్రతిరోజూ మీ ఇంటికే. శుభ్రంగా, సహజంగా అందిస్తాము.",
    order_now: "ఆర్డర్ చేయండి",
    call_vamsi: "వామ్సీకి కాల్",
    chip1: "ఫారం నుండి ఇంటికి",
    chip2: "మిక్సింగ్ లేదు",
    chip3: "రోజూ డెలివరీ",
    cow_milk: "ఆవుపాలు",
    per_litre: "/ లీటర్",
    bangalore_only: "బెంగళూరు మాత్రమే",
    delivery_time: "డెలివరీ టైమ్",
    hygiene: "శుభ్రత",
    clean_handling: "శుభ్రంగా నిర్వహణ",
    notice_title: "⚠️ ముఖ్య సమాచారం",
    notice1:
      "✅ చెల్లింపు కేవలం UPI లేదా యజమాని నిర్ధారించిన COD మాత్రమే.",
    notice2:
      "❌ డెలివరీ వ్యక్తి extra డబ్బులు అడిగితే చెల్లించవద్దు.",
    notice3:
      "✅ క్రింద ఫిర్యాదు చేయండి, మేము వెంటనే చర్య తీసుకుంటాము.",
    how_title: "ఎలా ఆర్డర్ చేయాలి",
    how_sub: "డెలివరీ ప్రారంభించడానికి 3 సులభ దశలు",
    step1_title: "లాగిన్",
    step1_desc: "మీ మొబైల్ నంబర్ నమోదు చేయండి.",
    step2_title: "ప్లాన్ ఎంచుకోండి",
    step2_desc: "పరిమాణం, రోజులు, టైమ్ ఎంచుకోండి.",
    step3_title: "కన్ఫర్మ్",
    step3_desc: "UPI చెల్లించి ఆర్డర్ కన్ఫర్మ్ చేయండి.",
    login_hint: "కొనసాగించడానికి మొబైల్ నంబర్ నమోదు చేయండి",
    mobile_label: "మొబైల్ నంబర్",
    continue: "కొనసాగించండి",
    need_help: "WhatsApp సహాయం",
    place_order: "మీ ఆర్డర్ పెట్టండి",
    fill_details: "వివరాలు పూరించి ప్లాన్ కన్ఫర్మ్ చేయండి",
    cust_details: "కస్టమర్ వివరాలు",
    name_label: "పేరు",
    address_label: "పూర్తి చిరునామా",
    location_label: "లొకేషన్",
    milk_plan: "పాలు ప్లాన్",
    quantity_label: "పరిమాణం (లీటర్లు/రోజు)",
    plan_label: "ప్లాన్",
    payment_label: "చెల్లింపు విధానం",
    add_cart: "కార్ట్‌కి జోడించండి",
    cart_summary: "కార్ట్ సారాంశం",
    no_items: "ఇంకా ఐటమ్స్ లేవు.",
    send_whatsapp: "WhatsApp కి ఆర్డర్ పంపండి",
    pay_upi: "UPI ద్వారా చెల్లించండి",
    plan_7: "1 వారం (7 రోజులు)",
    plan_15: "15 రోజులు",
    upi_payment: "UPI చెల్లింపు",
    cod: "క్యాష్ ఆన్ డెలివరీ"
  }
};

// ✅ TRANSLATE UI
function setLanguage(lang) {
  const dict = translations[lang] || translations.en;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.innerText = dict[key];
  });
}

// ✅ LOGIN MODAL FUNCTIONS
function openLogin() {
  document.getElementById("loginModal").classList.remove("hidden");
}
function closeLogin() {
  document.getElementById("loginModal").classList.add("hidden");
}

// ✅ CALL
function callVamsi() {
  window.location.href = `tel:${VAMSI_MOBILE}`;
}

// ✅ SHARE
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

// ✅ WHATSAPP HELP
function whatsappHelp() {
  const msg = "Hi Vamsi, I need help for milk delivery.";
  window.open(
    `https://wa.me/91${VAMSI_MOBILE}?text=${encodeURIComponent(msg)}`,
    "_blank"
  );
}

// ✅ GET ORDER DATA
function getOrderData() {
  const name = document.getElementById("name")?.value.trim();
  const customerMobile = document.getElementById("customerMobile")?.value.trim();
  const address = document.getElementById("address")?.value.trim();
  const location = document.getElementById("location")?.value.trim();

  const quantity = parseFloat(document.getElementById("quantity")?.value);
  const deliveryTime = document.getElementById("deliveryTime")?.value;
  const plan = parseInt(document.getElementById("plan")?.value);
  const payment = document.getElementById("payment")?.value;

  if (!name || !address || !location || !customerMobile || customerMobile.length !== 10) {
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

// ✅ ADD TO CART
function addToCart() {
  const d = getOrderData();
  if (!d) return;

  document.getElementById("cartBox").innerHTML = `
    <p><b>Name:</b> ${d.name}</p>
    <p><b>Mobile:</b> ${d.customerMobile}</p>
    <p><b>Address:</b> ${d.address}</p>
    <p><b>Location:</b> ${d.location}</p>
    <p><b>Delivery Time:</b> ${d.deliveryTime}</p>
    <p><b>Quantity:</b> ${d.quantity} L/day</p>
    <p><b>Plan:</b> ${d.plan} Days</p>
    <p><b>Payment:</b> ${d.payment}</p>
    <hr>
    <h3>Total: ₹${d.total}</h3>
  `;
}

// ✅ SEND FULL DETAILS TO WHATSAPP
function whatsappOrder() {
  const d = getOrderData();
  if (!d) return;

  const message =
`Hi Vamsi 👋 New Milk Order ✅

👤 Name: ${d.name}
📞 Customer Mobile: ${d.customerMobile}
📍 Location: ${d.location}
🏠 Address: ${d.address}

🥛 Quantity: ${d.quantity} L/day
⏰ Delivery Time: ${d.deliveryTime}
📅 Plan: ${d.plan} Days
💳 Payment: ${d.payment}

💰 Total Amount: ₹${d.total}

✅ Please confirm the order.`;

  window.open(
    `https://wa.me/91${VAMSI_MOBILE}?text=${encodeURIComponent(message)}`,
    "_blank"
  );
}

// ✅ UPI PAYMENT OPEN
function payUPI() {
  const d = getOrderData();
  if (!d) return;

  const upiLink = `upi://pay?pa=${UPI_ID}&pn=Vamsi%20Milk&am=${d.total}&cu=INR&tn=Milk%20Order%20Payment`;
  window.location.href = upiLink;
}

// ✅ RUN ON LOAD
document.addEventListener("DOMContentLoaded", () => {
  // Footer year
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.innerText = new Date().getFullYear();

  // Default language
  setLanguage("en");

  // Language dropdown
  const langSelect = document.getElementById("langSelect");
  if (langSelect) {
    langSelect.addEventListener("change", (e) => {
      setLanguage(e.target.value);
    });
  }

  // Login submit
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
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

      // Fill customer mobile automatically
      const cm = document.getElementById("customerMobile");
      if (cm) cm.value = mobile;
    });
  }

  // Add to cart event
  const addBtn = document.getElementById("addToCartBtn");
  if (addBtn) addBtn.addEventListener("click", addToCart);
});