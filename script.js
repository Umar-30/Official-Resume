var themeToggle = document.getElementById("themeToggle");
var toggleSkills = document.getElementById("toggleSkills");
var skillsList = document.getElementById("skillsList");
var originalDisplay = skillsList ? window.getComputedStyle(skillsList).display : "block";
if (originalDisplay === "none") {
    originalDisplay = "block";
}
if (themeToggle) {
    themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("light");
    });
}
if (toggleSkills && skillsList) {
    toggleSkills.addEventListener("click", function () {
        var currentDisplay = window.getComputedStyle(skillsList).display;
        if (currentDisplay === "none") {
            skillsList.style.display = originalDisplay;
        }
        else {
            skillsList.style.display = "none";
        }
    });
}
