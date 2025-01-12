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
  document.getElementById(tabname).classList.add("active-tab");
}

function closemenu() {
  sidemeu.style.right = -200;
}
// https://script.google.com/macros/s/AKfycbx1VtM0dwmZDXIVwn4QLPITpC6xpE9KrAHG8S8iZzd4GcSA1zhZ47pJ7GMyo9GIF7HYEQ/exec
// detecting animiation

// Function to check if the skill section is in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to trigger the animation
function loadProgressBars() {
  const skillSection = document.querySelector(".skill");
  console.log(skillSection);
  if (isInViewport(skillSection)) {
    document.querySelector(".html").style.width = "90%";
    document.querySelector(".css").style.width = "90%";
    document.querySelector(".js").style.width = "90%";
    document.querySelector(".angular").style.width = "90%";
    document.querySelector(".react").style.width = "90%";
  }
}

// Event listener for scrolling
window.addEventListener("scroll", loadProgressBars);

// Also call the function initially in case the section is already in view on page load
loadProgressBars();
