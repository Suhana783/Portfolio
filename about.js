const showBtn = document.getElementById("showAboutBtn");
const aboutText = document.getElementById("aboutText");

showBtn.addEventListener("click", function () {
  if (aboutText.style.display === "none") {
    aboutText.style.display = "block";
    showBtn.textContent = "Hide About Info";
  } else {
    aboutText.style.display = "none";
    showBtn.textContent = "Show About Info";
  }
});
 


