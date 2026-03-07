let generatedOTP;

function sendOTP(){

let phone=document.getElementById("phone").value;

if(phone.length<10){

alert("Enter valid phone number");

return;

}

generatedOTP=Math.floor(1000+Math.random()*9000);

document.getElementById("otpText").innerHTML="Demo OTP: "+generatedOTP;

document.getElementById("otpSection").style.display="block";

}

function verifyOTP(){

let userOTP=document.getElementById("otp").value;

if(userOTP==generatedOTP){

window.location.href="home.html";

}else{

alert("Wrong OTP");

}

}

function sendOrder(){

let name=document.getElementById("name").value;
let address=document.getElementById("address").value;
let city=document.getElementById("city").value;
let pincode=document.getElementById("pincode").value;
let morning=document.getElementById("morning").value;
let evening=document.getElementById("evening").value;

let msg="New Milk Order%0A"
+"Name:"+name+"%0A"
+"Address:"+address+"%0A"
+"City:"+city+"%0A"
+"Pincode:"+pincode+"%0A"
+"Morning:"+morning+"%0A"
+"Evening:"+evening;

window.open("https://wa.me/917569664231?text="+msg);

}
