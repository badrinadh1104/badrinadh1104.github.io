var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")
}


function closemenu() {
    sidemeu.style.right = -200;
}
// https://script.google.com/macros/s/AKfycbx1VtM0dwmZDXIVwn4QLPITpC6xpE9KrAHG8S8iZzd4GcSA1zhZ47pJ7GMyo9GIF7HYEQ/exec