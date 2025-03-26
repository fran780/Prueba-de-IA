function toggleMenu() {
  const menu = document.getElementById("dropdownMenu");
  menu.style.display = (menu.style.display === "block") ? "none" : "block";
}

// Cierra el menú si haces clic fuera
document.addEventListener("click", function (e) {
  const menu = document.getElementById("dropdownMenu");
  const icon = document.querySelector(".menu-icon");

  if (!menu.contains(e.target) && !icon.contains(e.target)) {
    menu.style.display = "none";
  }
});