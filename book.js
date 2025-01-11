// script.js
document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault(); // منع إرسال النموذج بشكل افتراضي
    
    // الحصول على القيم من النموذج
    const first_name = document.getElementById("first-name").value;
    const last_name = document.getElementById("last-name").value;
    const email = document.getElementById("email").value;
    const destination = document.getElementById("destination").value;
    const date = document.getElementById("date").value;
    const numPassengers = document.getElementById("numPassengers").value;

    // التحقق من صحة المدخلات
    if (first_name &&last_name && email && destination && date && numPassengers) {
        // عرض رسالة تأكيد
        document.getElementById("confirmationMessage").innerHTML =`<br>first name:${first_name}<br>last name :${last_name}<br>email: ${email}<br>nombre passengers:${numPassengers}<br>date: ${date} <br> `;
    } else {
        // إذا كانت هناك حقول فارغة
        document.getElementById("confirmationMessage").innerHTML = "<span style='color:red;'> please fill all the requared text box</span>";
    }
});   
 let menuIcon =  document.querySelector("#menu-icon");
let navList = document.querySelector(".navlist");

menuIcon.onclick = () =>{
    menuIcon.classList.toggle("bx-x")
    navList.classList.toggle("open")
}

window.onscroll = () =>{
    menuIcon.classList.remove("bx-x")
    navList.classList.remove("open")
}