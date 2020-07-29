function openMenu() {
  document.getElementById("side-menu").classList.add("show-menu");
}

function closeMenu() {
  document.getElementById("side-menu").classList.remove("show-menu");
}

document.getElementById("menu-trigger").addEventListener("click", openMenu);

document.getElementById("menu-close").addEventListener("click", closeMenu);
