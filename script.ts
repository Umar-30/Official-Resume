const themeToggle = document.getElementById("themeToggle");
const toggleSkills = document.getElementById("toggleSkills");
const skillsList = document.getElementById("skillsList");

let originalDisplay = skillsList ? window.getComputedStyle(skillsList).display : "block";
if (originalDisplay === "none") {
  originalDisplay = "block";
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light");
  });
}

if (toggleSkills && skillsList) {
  toggleSkills.addEventListener("click", () => {
    const currentDisplay = window.getComputedStyle(skillsList).display;
    if (currentDisplay === "none") {
      skillsList.style.display = originalDisplay;
    } else {
      skillsList.style.display = "none";
    }
  });
}